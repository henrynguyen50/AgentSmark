from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
from google import genai
import json

from fastapi import FastAPI
from pydantic import BaseModel
import requests
import os
from dotenv import load_dotenv
from google import genai

# === ENVIRONMENT VARIABLES ===
load_dotenv()
GEMINI_KEY = os.getenv("GEMINI_API_KEY")
TMDB_API_KEY = os.getenv("TMDB_API_KEY")
READ_ACCESS = os.getenv("READ_ACCESS")

gem_client = genai.Client(api_key=GEMINI_KEY)

app = FastAPI(title="AI Streaming Agent")

VIDKING_BASE = "https://www.vidking.net/embed"
PPV_API = "https://ppv.to/api/streams"


# === MODELS ===
class QueryRequest(BaseModel):
    category: str  # "movie" | "tv" | "sport"
    query: str


# === GEMINI PARSING (plain text parsing) ===
def extract_title_gemini_plain(user_input: str, category: str):
    prompt = f"""
    You are a title extractor for a streaming assistant. 
    The category is "{category}". 
    Extract only the title and any season/episode numbers if relevant.
    Respond in plain text format (no JSON!):

    title: <title>
    season: <season number, optional>
    episode: <episode number, optional>

    User said: "{user_input}"
    """

    response = gem_client.models.generate_content(
        model="gemini-2.0-flash",
        contents=prompt
    )
    text = response.text.strip()
    print("GEMINI RESPONSE:\n", text)

    # Manual parsing
    parsed = {}
    for line in text.splitlines():
        if ":" in line:
            key, value = line.split(":", 1)
            key = key.strip().lower()
            value = value.strip()
            if key in ["season", "episode"]:
                try:
                    parsed[key] = int(value)
                except:
                    parsed[key] = 1
            else:
                parsed[key] = value

    return parsed


# === TMDB LOOKUPS ===
def get_tmdb_id(title: str, category: str):
    headers = {
        "accept": "application/json",
        "Authorization": f"Bearer {READ_ACCESS}",
    }
    url = f"https://api.themoviedb.org/3/search/{category}?query={title}"
    try:
        res = requests.get(url, headers=headers)
        if res.status_code == 200:
            data = res.json()
            if data.get("results"):
                return data["results"][0]["id"]
    except Exception as e:
        print("TMDB API error:", e)
    return None


def build_vidking_embed(parsed, category: str):
    if category == "movie":
        tmdb_id = get_tmdb_id(parsed["title"], "movie")
        if tmdb_id:
            return f"{VIDKING_BASE}/movie/{tmdb_id}"

    elif category == "tv":
        tmdb_id = get_tmdb_id(parsed["title"], "tv")
        season = parsed.get("season", 1)
        episode = parsed.get("episode", 1)
        if tmdb_id:
            return (
                f"{VIDKING_BASE}/tv/{tmdb_id}/{season}/{episode}"
                "?autoPlay=true&nextEpisode=true&episodeSelector=true"
            )
    return None


# === SPORTS LOOKUP ===
def get_sport_stream(title: str):
    pass


# === MAIN ROUTE ===
@app.post("/watch")
def watch(req: QueryRequest):
    category = req.category.lower()
    parsed = extract_title_gemini_plain(req.query, category)
    print("PARSED DATA:", parsed)

    url = None
    if category in ["movie", "tv"]:
        url = build_vidking_embed(parsed, category)
    elif category == "sport":
        url = get_sport_stream(parsed.get("title", ""))
    else:
        return {"error": "Invalid category", "parsed": parsed}

    if url:
        return {"embed_url": url, "parsed": parsed}
    else:
        return {"error": "No valid stream found", "parsed": parsed}


@app.get("/")
def home():
    return {"message": "AI Streaming Agent is running!"}
