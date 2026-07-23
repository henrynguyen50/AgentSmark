// Generated Nintendo 64 Retro SVG Sports & Team Asset System
import React from "react";
import "../styles/N64SportsIcons.css";

export interface N64Props {
  teamName: string;
  sport?: string;
  size?: number;
  className?: string;
}

export interface N64SportProps {
  sport: string;
  size?: number;
  className?: string;
}

export interface N64MatchupProps {
  team1: string;
  team2: string;
  sport?: string;
  size?: number;
  className?: string;
}

// Global SVG definition components to inject bevel effects, scanlines, and drop shadows
export const N64Defs: React.FC = () => (
  <svg width="0" height="0" style={{ position: "absolute", zIndex: -100, pointerEvents: "none" }}>
    <defs>
      {/* 3D Gold Metallic Bevel Gradient */}
      <linearGradient id="n64-bevel" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffd700" />
        <stop offset="30%" stopColor="#fff8dc" />
        <stop offset="70%" stopColor="#b8860b" />
        <stop offset="100%" stopColor="#8b6508" />
      </linearGradient>

      {/* 3D Silver Metallic Bevel Gradient */}
      <linearGradient id="n64-silver" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#a9a9a9" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#696969" stopOpacity="0.9" />
      </linearGradient>

      {/* CRT Scanline Retro Effect */}
      <pattern id="n64-scanlines" width="4" height="4" patternUnits="userSpaceOnUse">
        <line x1="0" y1="0" x2="4" y2="0" stroke="#000000" strokeWidth="1.5" opacity="0.4" />
      </pattern>

      {/* Golden Bronze Border Bevel */}
      <linearGradient id="n64-bronze" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#d2691e" />
        <stop offset="50%" stopColor="#cd7f32" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8b4513" />
      </linearGradient>
    </defs>
  </svg>
);

export const teamRegistry: Record<string, {
  color1: string;
  color2: string;
  initials: string;
  shape: string;
  symbol: string;
}> = {
  "chiefs": {
    "color1": "#E31837",
    "color2": "#FFB81C",
    "initials": "KC",
    "shape": "helmet",
    "symbol": "arrowhead"
  },
  "eagles": {
    "color1": "#004C54",
    "color2": "#A5ACAF",
    "initials": "PHI",
    "shape": "helmet",
    "symbol": "eagle"
  },
  "49ers": {
    "color1": "#AA0000",
    "color2": "#B3995D",
    "initials": "SF",
    "shape": "helmet",
    "symbol": "49ers"
  },
  "cowboys": {
    "color1": "#003594",
    "color2": "#869397",
    "initials": "DAL",
    "shape": "helmet",
    "symbol": "cowboys_star"
  },
  "packers": {
    "color1": "#203731",
    "color2": "#FFB81C",
    "initials": "GB",
    "shape": "helmet",
    "symbol": "g"
  },
  "patriots": {
    "color1": "#002244",
    "color2": "#C60C30",
    "initials": "NE",
    "shape": "helmet",
    "symbol": "patriot"
  },
  "bills": {
    "color1": "#00338D",
    "color2": "#C60C30",
    "initials": "BUF",
    "shape": "helmet",
    "symbol": "buffalo"
  },
  "bengals": {
    "color1": "#FB4F14",
    "color2": "#000000",
    "initials": "CIN",
    "shape": "helmet",
    "symbol": "bengals_stripes"
  },
  "ravens": {
    "color1": "#241773",
    "color2": "#9E7C0C",
    "initials": "BAL",
    "shape": "helmet",
    "symbol": "raven"
  },
  "lions": {
    "color1": "#0076B6",
    "color2": "#B0B7BC",
    "initials": "DET",
    "shape": "helmet",
    "symbol": "lions_lion"
  },
  "dolphins": {
    "color1": "#008E97",
    "color2": "#FC4C02",
    "initials": "MIA",
    "shape": "helmet",
    "symbol": "dolphin"
  },
  "rams": {
    "color1": "#003594",
    "color2": "#FFA300",
    "initials": "LAR",
    "shape": "helmet",
    "symbol": "rams_horn"
  },
  "texans": {
    "color1": "#03202F",
    "color2": "#A71930",
    "initials": "HOU",
    "shape": "helmet",
    "symbol": "texans_bull"
  },
  "jets": {
    "color1": "#125740",
    "color2": "#FFFFFF",
    "initials": "NYJ",
    "shape": "helmet",
    "symbol": "jet"
  },
  "bears": {
    "color1": "#0B2265",
    "color2": "#C83803",
    "initials": "CHI",
    "shape": "helmet",
    "symbol": "bears_c"
  },
  "steelers": {
    "color1": "#FFB81C",
    "color2": "#101820",
    "initials": "PIT",
    "shape": "helmet",
    "symbol": "steel"
  },
  "browns": {
    "color1": "#311D00",
    "color2": "#FF3C00",
    "initials": "CLE",
    "shape": "helmet",
    "symbol": "browns_helmet"
  },
  "jaguars": {
    "color1": "#006778",
    "color2": "#D7A22A",
    "initials": "JAX",
    "shape": "helmet",
    "symbol": "jaguar"
  },
  "colts": {
    "color1": "#002C5F",
    "color2": "#A2AAAD",
    "initials": "IND",
    "shape": "helmet",
    "symbol": "horseshoe"
  },
  "titans": {
    "color1": "#4B92DB",
    "color2": "#C60C30",
    "initials": "TEN",
    "shape": "helmet",
    "symbol": "titans_shield"
  },
  "broncos": {
    "color1": "#FB4F14",
    "color2": "#002244",
    "initials": "DEN",
    "shape": "helmet",
    "symbol": "broncos_horse"
  },
  "raiders": {
    "color1": "#000000",
    "color2": "#A5ACAF",
    "initials": "LV",
    "shape": "helmet",
    "symbol": "raiders"
  },
  "chargers": {
    "color1": "#0080C6",
    "color2": "#FFC20E",
    "initials": "LAC",
    "shape": "helmet",
    "symbol": "bolt"
  },
  "seahawks": {
    "color1": "#002244",
    "color2": "#69BE28",
    "initials": "SEA",
    "shape": "helmet",
    "symbol": "seahawk"
  },
  "cardinals": {
    "color1": "#C41E3A",
    "color2": "#000000",
    "initials": "ARI",
    "shape": "helmet",
    "symbol": "cardinal"
  },
  "cardinals_mlb": {
    "color1": "#C41E3A",
    "color2": "#FED141",
    "initials": "STL",
    "shape": "baseball",
    "symbol": "cardinal_bat"
  },
  "falcons": {
    "color1": "#A71930",
    "color2": "#000000",
    "initials": "ATL",
    "shape": "helmet",
    "symbol": "falcon"
  },
  "panthers": {
    "color1": "#0085CA",
    "color2": "#101820",
    "initials": "CAR",
    "shape": "helmet",
    "symbol": "panther"
  },
  "saints": {
    "color1": "#D3BC8D",
    "color2": "#101820",
    "initials": "NO",
    "shape": "helmet",
    "symbol": "fleur"
  },
  "vikings": {
    "color1": "#4F2683",
    "color2": "#FFC62F",
    "initials": "MIN",
    "shape": "helmet",
    "symbol": "vikings_helmet"
  },
  "buccaneers": {
    "color1": "#D50A0A",
    "color2": "#34302B",
    "initials": "TB",
    "shape": "helmet",
    "symbol": "flag"
  },
  "giants": {
    "color1": "#0B2265",
    "color2": "#A71930",
    "initials": "NYG",
    "shape": "helmet",
    "symbol": "giants"
  },
  "giants_mlb": {
    "color1": "#FD5A1E",
    "color2": "#27251F",
    "initials": "SF",
    "shape": "baseball",
    "symbol": "sf_logo"
  },
  "commanders": {
    "color1": "#5A1414",
    "color2": "#FFB612",
    "initials": "WAS",
    "shape": "helmet",
    "symbol": "commanders_w"
  },
  "lakers": {
    "color1": "#552583",
    "color2": "#FDB927",
    "initials": "LAL",
    "shape": "basketball",
    "symbol": "lakers_text"
  },
  "celtics": {
    "color1": "#007A33",
    "color2": "#BA9653",
    "initials": "BOS",
    "shape": "basketball",
    "symbol": "clover"
  },
  "warriors": {
    "color1": "#1D428A",
    "color2": "#FFC72C",
    "initials": "GSW",
    "shape": "basketball",
    "symbol": "bridge"
  },
  "bulls": {
    "color1": "#CE1141",
    "color2": "#000000",
    "initials": "CHI",
    "shape": "basketball",
    "symbol": "bull"
  },
  "nets": {
    "color1": "#000000",
    "color2": "#FFFFFF",
    "initials": "BKN",
    "shape": "basketball",
    "symbol": "nets_shield"
  },
  "knicks": {
    "color1": "#006BB6",
    "color2": "#F58426",
    "initials": "NYK",
    "shape": "basketball",
    "symbol": "knicks"
  },
  "heat": {
    "color1": "#98002E",
    "color2": "#F9A01B",
    "initials": "MIA",
    "shape": "basketball",
    "symbol": "fire"
  },
  "bucks": {
    "color1": "#00471B",
    "color2": "#EEE1C6",
    "initials": "MIL",
    "shape": "basketball",
    "symbol": "deer"
  },
  "suns": {
    "color1": "#1D1160",
    "color2": "#E56020",
    "initials": "PHX",
    "shape": "basketball",
    "symbol": "sun"
  },
  "mavericks": {
    "color1": "#00538C",
    "color2": "#B8C4CA",
    "initials": "DAL",
    "shape": "basketball",
    "symbol": "mavericks_horse"
  },
  "nuggets": {
    "color1": "#0E2240",
    "color2": "#FEC524",
    "initials": "DEN",
    "shape": "basketball",
    "symbol": "pickaxe"
  },
  "clippers": {
    "color1": "#C8102E",
    "color2": "#1D428A",
    "initials": "LAC",
    "shape": "basketball",
    "symbol": "clippers_compass"
  },
  "76ers": {
    "color1": "#006BB6",
    "color2": "#ED174C",
    "initials": "PHI",
    "shape": "basketball",
    "symbol": "stars_76"
  },
  "raptors": {
    "color1": "#CE1141",
    "color2": "#000000",
    "initials": "TOR",
    "shape": "basketball",
    "symbol": "claw"
  },
  "grizzlies": {
    "color1": "#5D76A9",
    "color2": "#12173F",
    "initials": "MEM",
    "shape": "basketball",
    "symbol": "bear"
  },
  "timberwolves": {
    "color1": "#0C2340",
    "color2": "#78BE20",
    "initials": "MIN",
    "shape": "basketball",
    "symbol": "wolf"
  },
  "pelicans": {
    "color1": "#0C2340",
    "color2": "#C8102E",
    "initials": "NOP",
    "shape": "basketball",
    "symbol": "pelican"
  },
  "thunder": {
    "color1": "#007AC1",
    "color2": "#EF3B24",
    "initials": "OKC",
    "shape": "basketball",
    "symbol": "thunder_shield"
  },
  "kings": {
    "color1": "#5A2D81",
    "color2": "#63727A",
    "initials": "SAC",
    "shape": "basketball",
    "symbol": "kings_crown"
  },
  "hawks": {
    "color1": "#C1D32F",
    "color2": "#E13A3E",
    "initials": "ATL",
    "shape": "basketball",
    "symbol": "hawks_bird"
  },
  "hornets": {
    "color1": "#00788C",
    "color2": "#191970",
    "initials": "CHA",
    "shape": "basketball",
    "symbol": "hornet"
  },
  "cavaliers": {
    "color1": "#860038",
    "color2": "#FDBB30",
    "initials": "CLE",
    "shape": "basketball",
    "symbol": "cavaliers_sword"
  },
  "pacers": {
    "color1": "#002D62",
    "color2": "#FDBB30",
    "initials": "IND",
    "shape": "basketball",
    "symbol": "pacers"
  },
  "pistons": {
    "color1": "#C8102E",
    "color2": "#1D428A",
    "initials": "DET",
    "shape": "basketball",
    "symbol": "pistons_crest"
  },
  "rockets": {
    "color1": "#CE1141",
    "color2": "#C4CED4",
    "initials": "HOU",
    "shape": "basketball",
    "symbol": "rocket"
  },
  "magic": {
    "color1": "#0077C0",
    "color2": "#C4CED4",
    "initials": "ORL",
    "shape": "basketball",
    "symbol": "magic_star"
  },
  "wizards": {
    "color1": "#002B5C",
    "color2": "#E31837",
    "initials": "WAS",
    "shape": "basketball",
    "symbol": "monument"
  },
  "spurs": {
    "color1": "#C4CED4",
    "color2": "#000000",
    "initials": "SAS",
    "shape": "basketball",
    "symbol": "spur"
  },
  "jazz": {
    "color1": "#002B49",
    "color2": "#F9A01B",
    "initials": "UTA",
    "shape": "basketball",
    "symbol": "note"
  },
  "trailblazers": {
    "color1": "#E03A3E",
    "color2": "#000000",
    "initials": "POR",
    "shape": "basketball",
    "symbol": "pinwheel"
  },
  "yankees": {
    "color1": "#003087",
    "color2": "#C4CED4",
    "initials": "NY",
    "shape": "baseball",
    "symbol": "yankees_ny"
  },
  "redsox": {
    "color1": "#BD3039",
    "color2": "#0C2340",
    "initials": "BOS",
    "shape": "baseball",
    "symbol": "socks"
  },
  "dodgers": {
    "color1": "#005A9C",
    "color2": "#FFFFFF",
    "initials": "LAD",
    "shape": "baseball",
    "symbol": "dodgers_script"
  },
  "cubs": {
    "color1": "#0E3386",
    "color2": "#CC3433",
    "initials": "CHC",
    "shape": "baseball",
    "symbol": "cubs_c"
  },
  "astros": {
    "color1": "#002D62",
    "color2": "#EB6E1F",
    "initials": "HOU",
    "shape": "baseball",
    "symbol": "astros_star"
  },
  "braves": {
    "color1": "#13274F",
    "color2": "#CE1141",
    "initials": "ATL",
    "shape": "baseball",
    "symbol": "tomahawk"
  },
  "mets": {
    "color1": "#002D62",
    "color2": "#FF5910",
    "initials": "NYM",
    "shape": "baseball",
    "symbol": "mets_crest"
  },
  "phillies": {
    "color1": "#E81828",
    "color2": "#002D62",
    "initials": "PHI",
    "shape": "baseball",
    "symbol": "phillies_bell"
  },
  "padres": {
    "color1": "#2F241D",
    "color2": "#FFC72C",
    "initials": "SD",
    "shape": "baseball",
    "symbol": "padres_sd"
  },
  "bluejays": {
    "color1": "#132861",
    "color2": "#1D2D5C",
    "initials": "TOR",
    "shape": "baseball",
    "symbol": "bluejay"
  },
  "orioles": {
    "color1": "#DF4601",
    "color2": "#000000",
    "initials": "BAL",
    "shape": "baseball",
    "symbol": "orioles_cap"
  },
  "guardians": {
    "color1": "#0C2340",
    "color2": "#E31837",
    "initials": "CLE",
    "shape": "baseball",
    "symbol": "guardians_c"
  },
  "tigers": {
    "color1": "#0C2340",
    "color2": "#FA4616",
    "initials": "DET",
    "shape": "baseball",
    "symbol": "tigers_d"
  },
  "royals": {
    "color1": "#004687",
    "color2": "#BD9B16",
    "initials": "KC",
    "shape": "baseball",
    "symbol": "royals_crown"
  },
  "twins": {
    "color1": "#002B49",
    "color2": "#D31145",
    "initials": "MIN",
    "shape": "baseball",
    "symbol": "twins_tc"
  },
  "whitesox": {
    "color1": "#000000",
    "color2": "#C4CED4",
    "initials": "CHW",
    "shape": "baseball",
    "symbol": "whitesox_sox"
  },
  "angels": {
    "color1": "#BA0021",
    "color2": "#003263",
    "initials": "LAA",
    "shape": "baseball",
    "symbol": "angels_a"
  },
  "athletics": {
    "color1": "#003831",
    "color2": "#EFB21E",
    "initials": "OAK",
    "shape": "baseball",
    "symbol": "athletics_a"
  },
  "mariners": {
    "color1": "#0C2C56",
    "color2": "#005C5C",
    "initials": "SEA",
    "shape": "baseball",
    "symbol": "compass"
  },
  "rangers": {
    "color1": "#003278",
    "color2": "#C0111F",
    "initials": "TEX",
    "shape": "baseball",
    "symbol": "rangers_t"
  },
  "diamondbacks": {
    "color1": "#A71930",
    "color2": "#E3D4AD",
    "initials": "ARI",
    "shape": "baseball",
    "symbol": "dbacks_a"
  },
  "rockies": {
    "color1": "#333366",
    "color2": "#C4CED4",
    "initials": "COL",
    "shape": "baseball",
    "symbol": "rockies_peak"
  },
  "marlins": {
    "color1": "#00A3E0",
    "color2": "#EF3340",
    "initials": "MIA",
    "shape": "baseball",
    "symbol": "marlins_fish"
  },
  "nationals": {
    "color1": "#AB0003",
    "color2": "#142243",
    "initials": "WSH",
    "shape": "baseball",
    "symbol": "nationals_w"
  },
  "pirates": {
    "color1": "#FDB827",
    "color2": "#000000",
    "initials": "PIT",
    "shape": "baseball",
    "symbol": "pirates_p"
  },
  "reds": {
    "color1": "#C6011F",
    "color2": "#000000",
    "initials": "CIN",
    "shape": "baseball",
    "symbol": "reds_c"
  },
  "brewers": {
    "color1": "#12284C",
    "color2": "#FFC52F",
    "initials": "MIL",
    "shape": "baseball",
    "symbol": "glove"
  },
  "rays": {
    "color1": "#092C5C",
    "color2": "#8FBCE6",
    "initials": "TB",
    "shape": "baseball",
    "symbol": "ray"
  },
  "arsenal": {
    "color1": "#EF0107",
    "color2": "#063672",
    "initials": "ARS",
    "shape": "crest",
    "symbol": "cannon"
  },
  "chelsea": {
    "color1": "#034694",
    "color2": "#EE242C",
    "initials": "CHE",
    "shape": "crest",
    "symbol": "chelsea_lion"
  },
  "liverpool": {
    "color1": "#C8102E",
    "color2": "#00B2A9",
    "initials": "LIV",
    "shape": "crest",
    "symbol": "liverbird"
  },
  "mancity": {
    "color1": "#6CABDD",
    "color2": "#1C2C5B",
    "initials": "MCI",
    "shape": "crest",
    "symbol": "ship"
  },
  "manutd": {
    "color1": "#DA291C",
    "color2": "#FBE122",
    "initials": "MUN",
    "shape": "crest",
    "symbol": "devil"
  },
  "tottenham": {
    "color1": "#132257",
    "color2": "#FFFFFF",
    "initials": "TOT",
    "shape": "crest",
    "symbol": "cockerel"
  },
  "realmadrid": {
    "color1": "#FFFFFF",
    "color2": "#FEBE10",
    "initials": "RMA",
    "shape": "crest",
    "symbol": "realmadrid_crest"
  },
  "barcelona": {
    "color1": "#004D98",
    "color2": "#A50044",
    "initials": "FCB",
    "shape": "crest",
    "symbol": "barcelona_crest"
  },
  "atleticomadrid": {
    "color1": "#CB3524",
    "color2": "#192E5B",
    "initials": "ATM",
    "shape": "crest",
    "symbol": "stripes"
  },
  "bayernmunich": {
    "color1": "#DC052D",
    "color2": "#0066B2",
    "initials": "FCB",
    "shape": "crest",
    "symbol": "diamonds"
  },
  "dortmund": {
    "color1": "#FDE100",
    "color2": "#000000",
    "initials": "BVB",
    "shape": "crest",
    "symbol": "09"
  },
  "psg": {
    "color1": "#004170",
    "color2": "#E30613",
    "initials": "PSG",
    "shape": "crest",
    "symbol": "tower"
  },
  "juventus": {
    "color1": "#000000",
    "color2": "#FFFFFF",
    "initials": "JUV",
    "shape": "crest",
    "symbol": "j"
  },
  "intermilan": {
    "color1": "#001489",
    "color2": "#000000",
    "initials": "INT",
    "shape": "crest",
    "symbol": "im"
  },
  "acmilan": {
    "color1": "#E30613",
    "color2": "#000000",
    "initials": "ACM",
    "shape": "crest",
    "symbol": "stripes"
  },
  "ajax": {
    "color1": "#D2122E",
    "color2": "#FFFFFF",
    "initials": "AJX",
    "shape": "crest",
    "symbol": "ajax"
  },
  "benfica": {
    "color1": "#E30613",
    "color2": "#FFFFFF",
    "initials": "SLB",
    "shape": "crest",
    "symbol": "eagle"
  },
  "porto": {
    "color1": "#005CA9",
    "color2": "#FFFFFF",
    "initials": "FCP",
    "shape": "crest",
    "symbol": "dragon"
  },
  "sporting": {
    "color1": "#008057",
    "color2": "#FFFFFF",
    "initials": "SCP",
    "shape": "crest",
    "symbol": "lion"
  },
  "bocajuniors": {
    "color1": "#002C74",
    "color2": "#FCB813",
    "initials": "BOC",
    "shape": "crest",
    "symbol": "star"
  },
  "riverplate": {
    "color1": "#FFFFFF",
    "color2": "#E30613",
    "initials": "RIV",
    "shape": "crest",
    "symbol": "diagonal"
  },
  "redbull": {
    "color1": "#0600EF",
    "color2": "#FFCC00",
    "initials": "RBR",
    "shape": "f1",
    "symbol": "rb"
  },
  "ferrari": {
    "color1": "#EF1A2D",
    "color2": "#FFF200",
    "initials": "SF",
    "shape": "f1",
    "symbol": "horse_prancing"
  },
  "mercedes": {
    "color1": "#00A19B",
    "color2": "#C4CED4",
    "initials": "MER",
    "shape": "f1",
    "symbol": "mercedes_star"
  },
  "mclaren": {
    "color1": "#FF8700",
    "color2": "#000000",
    "initials": "MCL",
    "shape": "f1",
    "symbol": "mc"
  },
  "astonmartin": {
    "color1": "#00594F",
    "color2": "#CEDC00",
    "initials": "AMR",
    "shape": "f1",
    "symbol": "am"
  },
  "alpine": {
    "color1": "#0090FF",
    "color2": "#FD4BC7",
    "initials": "ALP",
    "shape": "f1",
    "symbol": "a"
  },
  "williams": {
    "color1": "#005AFF",
    "color2": "#FFFFFF",
    "initials": "WIL",
    "shape": "f1",
    "symbol": "w"
  },
  "haas": {
    "color1": "#E6002B",
    "color2": "#5C768D",
    "initials": "HAS",
    "shape": "f1",
    "symbol": "h"
  },
  "sauber": {
    "color1": "#52E252",
    "color2": "#000000",
    "initials": "KICK",
    "shape": "f1",
    "symbol": "au"
  },
  "racingbulls": {
    "color1": "#0000FF",
    "color2": "#FFFFFF",
    "initials": "VCARB",
    "shape": "f1",
    "symbol": "rb"
  },
  "jonjones": {
    "color1": "#000000",
    "color2": "#FFD700",
    "initials": "JJ",
    "shape": "combat",
    "symbol": "glove"
  },
  "conormcgregor": {
    "color1": "#009A49",
    "color2": "#FF7900",
    "initials": "CMG",
    "shape": "combat",
    "symbol": "glove"
  },
  "alexpereira": {
    "color1": "#FFD700",
    "color2": "#000000",
    "initials": "AP",
    "shape": "combat",
    "symbol": "glove"
  },
  "makhachev": {
    "color1": "#000000",
    "color2": "#C8102E",
    "initials": "IM",
    "shape": "combat",
    "symbol": "glove"
  },
  "omalley": {
    "color1": "#FF69B4",
    "color2": "#FFD700",
    "initials": "SUGA",
    "shape": "combat",
    "symbol": "glove"
  },
  "romanreigns": {
    "color1": "#000000",
    "color2": "#0080FF",
    "initials": "RR",
    "shape": "wrestling",
    "symbol": "belt"
  },
  "codyrhodes": {
    "color1": "#FFFFFF",
    "color2": "#C60C30",
    "initials": "CR",
    "shape": "wrestling",
    "symbol": "belt"
  },
  "wwe": {
    "color1": "#C60C30",
    "color2": "#000000",
    "initials": "WWE",
    "shape": "wrestling",
    "symbol": "belt"
  },
  "aew": {
    "color1": "#FFD700",
    "color2": "#000000",
    "initials": "AEW",
    "shape": "wrestling",
    "symbol": "belt"
  },
  "ufc": {
    "color1": "#C8102E",
    "color2": "#000000",
    "initials": "UFC",
    "shape": "combat",
    "symbol": "octagon"
  }
};

export function normalizeTeamName(name: string): string {
  if (!name) return "";
  let clean = name.toLowerCase();
  
  // Specific alias overrides before stripping general terms
  if (clean.includes("manchester city") || clean.includes("man city")) return "mancity";
  if (clean.includes("manchester united") || clean.includes("man united") || clean.includes("man utd")) return "manutd";
  if (clean.includes("munchen") || clean.includes("münchen") || clean.includes("munich")) return "bayernmunich";
  if (clean.includes("paris saint germain") || clean.includes("psg") || clean.includes("paris sg")) return "psg";
  if (clean.includes("inter milan") || clean.includes("internazionale")) return "intermilan";
  if (clean.includes("ac milan")) return "acmilan";
  if (clean.includes("real madrid")) return "realmadrid";
  if (clean.includes("atletico madrid") || clean.includes("atlético madrid")) return "atleticomadrid";
  if (clean.includes("red bull racing") || clean.includes("oracle red bull")) return "redbull";
  // Strip common suffixes/prefixes/terms
  const wordsToRemove = [
    "fc", "real", "city", "united", "bc", "athletic", "club",
    "association", "team", "racing", "sc", "cf", "ac", "inter", "stade", "saint",
    "olympique", "sporting", "red bull", "red bulls", "sc", "fsv", "sv", "as", "rc"
  ];
  
  // Remove special characters, keep alphanumeric and spaces
  clean = clean.replace(/[^a-z0-9\s]/g, " ");
  
  // Remove specific words as independent tokens
  for (const word of wordsToRemove) {
    const rx = new RegExp(`\\b${word}\\b`, "g");
    clean = clean.replace(rx, "");
  }
  
  // Strip locations for key teams if needed, but simple whitespace collapse first
  clean = clean.replace(/\s+/g, "").trim();
  return clean;
}

// Fallback Helper for Initials
export function getTeamInitials(name: string): string {
  const clean = name.replace(/[^a-zA-Z0-9\s]/g, "").trim();
  const words = clean.split(/\s+/);
  if (words.length >= 2) {
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  return clean.substring(0, 2).toUpperCase();
}

// Fallback Helper for Dynamic Colors
export function getDynamicTeamColors(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash) % 360;
  return {
    color1: `hsl(${h}, 70%, 45%)`,
    color2: `hsl(${(h + 40) % 360}, 80%, 25%)`
  };
}

// N64 Retro Team Logo Component

// Render actual team logo symbols in retro 8-bit N64 style instead of just plain initials text
export const renderLogoSymbol = (symbol: string, color1: string, color2: string, initials: string) => {
  const normSymbol = symbol?.toLowerCase() || "";
  switch (normSymbol) {
    // ==========================================
    // NFL (32 Teams)
    // ==========================================
    case "arrowhead": // Chiefs
      return (
        <g transform="translate(10,10) scale(0.8)">
          <polygon points="50,5 95,30 65,58 50,95 35,58 5,30" fill="#ffffff" stroke="#000" strokeWidth="4" />
          <polygon points="50,10 90,33 62,59 50,90 38,59 10,33" fill="#E31837" stroke="#FFB81C" strokeWidth="3" />
          <text x="44" y="55" fill="#ffffff" fontSize="26" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#000" strokeWidth="3" paintOrder="stroke">K</text>
          <text x="44" y="55" fill="#ffffff" fontSize="26" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">K</text>
          <text x="56" y="55" fill="#ffffff" fontSize="26" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#000" strokeWidth="3" paintOrder="stroke">C</text>
          <text x="56" y="55" fill="#ffffff" fontSize="26" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">C</text>
        </g>
      );
    case "eagle": // Eagles
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Base silver profile & dark green plumage */}
          <path d="M 10,50 Q 25,15 65,15 Q 85,20 90,35 Q 85,45 70,45 Q 60,52 45,42 Q 35,62 10,50 Z" fill="#A5ACAF" stroke="#000" strokeWidth="3" />
          <path d="M 14,48 Q 28,20 62,20 Q 80,24 84,36 Q 78,41 68,41 Q 58,48 45,38 Q 33,56 14,48 Z" fill="#004C54" />
          {/* Silver/white highlights on neck and crown */}
          <path d="M 62,20 Q 50,30 40,25" stroke="#ffffff" strokeWidth="3" fill="none" />
          <path d="M 45,38 Q 30,42 20,44" stroke="#ffffff" strokeWidth="3" fill="none" />
          <circle cx="68" cy="28" r="3" fill="#ffffff" />
          <circle cx="68" cy="28" r="1.5" fill="#000" />
        </g>
      );
    case "49ers": // 49ers
      return (
        <g transform="translate(5,15) scale(0.9)">
          <ellipse cx="50" cy="35" rx="46" ry="28" fill="#B3995D" stroke="#000" strokeWidth="3" />
          <ellipse cx="50" cy="35" rx="42" ry="24" fill="#ffffff" />
          <ellipse cx="50" cy="35" rx="38" ry="20" fill="#AA0000" />
          <text x="40" y="44" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#000" strokeWidth="3" paintOrder="stroke">S</text>
          <text x="40" y="44" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">S</text>
          <text x="60" y="44" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#000" strokeWidth="3" paintOrder="stroke">F</text>
          <text x="60" y="44" fill="#ffffff" fontSize="24" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">F</text>
        </g>
      );
    case "cowboys_star": // Cowboys Star
      return (
        <g transform="translate(10,10) scale(0.8)">
          <polygon points="50,2 65,34 98,34 71,55 81,88 50,68 19,88 29,55 2,34 35,34" fill="#003594" stroke="#000" strokeWidth="3" />
          <polygon points="50,8 62,37 92,37 68,56 77,83 50,65 23,83 32,56 8,37 38,37" fill="#ffffff" />
          <polygon points="50,14 59,40 85,40 65,56 73,78 50,62 27,78 35,56 15,40 41,40" fill="#003594" />
        </g>
      );
    case "g": // Packers G
      return (
        <g transform="translate(10,15) scale(0.8)">
          <ellipse cx="50" cy="35" rx="44" ry="28" fill="#FFB81C" stroke="#000" strokeWidth="3" />
          <ellipse cx="50" cy="35" rx="40" ry="24" fill="#ffffff" />
          <ellipse cx="50" cy="35" rx="36" ry="20" fill="#203731" />
          <path d="M 70,30 L 52,30 Q 42,30 42,40 Q 42,50 52,50 L 62,50 L 62,40 L 52,40" fill="none" stroke="#ffffff" strokeWidth="8" strokeLinecap="square" />
        </g>
      );
    case "patriot": // Patriots
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Flying Elvis Profile */}
          <path d="M 15,35 Q 40,20 85,32 Q 70,42 62,40 Q 52,65 50,75 Q 48,50 35,45 Q 25,48 10,40" fill="#002244" stroke="#000" strokeWidth="2.5" />
          <path d="M 85,32 Q 65,30 45,45 L 35,36 Q 50,22 85,32" fill="#C60C30" stroke="#000" strokeWidth="1" />
          <polygon points="28,26 31,33 38,33 32,37 34,44 28,40 22,44 24,37 18,33 25,33" fill="#ffffff" />
        </g>
      );
    case "buffalo": // Bills
      return (
        <g transform="translate(10,15) scale(0.8)">
          {/* Charging Buffalo Silhouette */}
          <path d="M 10,45 C 10,25 25,20 45,22 C 55,20 62,25 70,22 C 82,18 90,26 90,40 C 90,48 82,54 75,54 C 70,54 65,58 60,58 C 50,58 40,55 30,58 C 15,58 10,50 10,45" fill="#00338D" stroke="#000" strokeWidth="3" />
          <path d="M 75,22 Q 78,16 75,12" stroke="#ffffff" strokeWidth="3" fill="none" strokeLinecap="round" />
          {/* Red Speed Stripe */}
          <line x1="8" y1="42" x2="88" y2="42" stroke="#C60C30" strokeWidth="6" strokeLinecap="round" />
        </g>
      );
    case "bengals_stripes": // Bengals B with Stripes
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 20,10 L 50,10 Q 68,10 68,26 Q 68,36 55,40 Q 72,44 72,60 Q 72,75 50,75 L 20,75 Z" fill="#FB4F14" stroke="#000" strokeWidth="4.5" />
          {/* Black tiger stripes cutouts */}
          <path d="M 20,20 L 40,25 L 20,30 M 20,55 L 45,60 L 20,65" stroke="#000" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M 64,22 L 48,26 L 62,30" stroke="#000" strokeWidth="4.5" strokeLinecap="round" fill="none" />
          <path d="M 68,52 L 50,56 L 66,60" stroke="#000" strokeWidth="4.5" strokeLinecap="round" fill="none" />
        </g>
      );
    case "raven": // Ravens
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 10,52 Q 22,20 62,25 Q 85,28 90,45 Q 70,55 52,48 Q 45,65 30,68 Q 20,56 10,52" fill="#241773" stroke="#000" strokeWidth="3" />
          {/* Gold beak */}
          <path d="M 90,45 Q 80,47 70,45 Q 72,52 82,50 Z" fill="#9E7C0C" stroke="#000" strokeWidth="1" />
          {/* Red Eye */}
          <circle cx="68" cy="35" r="3.5" fill="#C60C30" />
          <circle cx="69" cy="34" r="1.2" fill="#ffffff" />
          {/* Feathers highlights */}
          <path d="M 40,32 Q 52,36 60,34 M 30,42 Q 45,46 52,44" fill="none" stroke="#A5ACAF" strokeWidth="2" />
        </g>
      );
    case "lions_lion": // Lions Lion
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 10,48 Q 20,25 38,32 Q 55,20 70,30 Q 88,32 90,45 Q 88,60 70,58 L 74,80 L 68,80 L 64,62 Q 50,65 42,75 L 36,75 L 38,62 Q 22,65 10,48 Z" fill="#0076B6" stroke="#000" strokeWidth="3.5" />
          {/* Silver inner outline trail */}
          <path d="M 15,48 Q 22,32 38,38 Q 52,28 66,36 Q 80,38 82,45" fill="none" stroke="#B0B7BC" strokeWidth="2.5" />
        </g>
      );
    case "dolphin": // Dolphins Leaping Teal Dolphin & Orange Sunburst
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Orange sunburst ray ring */}
          <circle cx="50" cy="50" r="28" fill="none" stroke="#FC4C02" strokeWidth="5" strokeDasharray="6,4" />
          <circle cx="50" cy="50" r="33" fill="none" stroke="#FC4C02" strokeWidth="2.5" />
          {/* Leaping teal dolphin */}
          <path d="M 12,65 C 22,35 60,25 88,48 C 72,42 56,44 42,65 C 32,54 22,62 12,65 Z" fill="#008E97" stroke="#000" strokeWidth="3" />
          {/* Silver/white belly highlight */}
          <path d="M 42,65 C 32,54 22,62 12,65 C 18,60 25,55 32,55 C 42,55 42,65 42,65" fill="#ffffff" />
          {/* Eye */}
          <circle cx="74" cy="42" r="1.5" fill="#000" />
        </g>
      );
    case "rams_horn": // Rams Horn
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 10,35 C 30,15 75,10 88,38 C 98,58 85,82 62,80 C 45,78 40,65 52,58 C 65,50 78,54 78,42 C 78,30 45,28 20,44 Z" fill="#FFA300" stroke="#000" strokeWidth="3" />
          <path d="M 15,36 C 32,22 68,18 78,38 C 86,52 76,68 62,68" fill="none" stroke="#003594" strokeWidth="4" />
        </g>
      );
    case "texans_bull": // Texans Split Bull
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Bull outline */}
          <path d="M 10,25 L 32,25 L 50,52 L 68,25 L 90,25 L 90,52 C 90,75 50,90 50,90 C 50,90 10,75 10,52 Z" fill="#ffffff" stroke="#000" strokeWidth="4.5" />
          {/* Split face */}
          <path d="M 12,27 L 32,27 L 50,52 L 50,86 C 50,86 12,72 12,52 Z" fill="#03202F" />
          <path d="M 88,27 L 68,27 L 50,52 L 50,86 C 50,86 88,72 88,52 Z" fill="#A71930" />
          {/* White Star Eye on the blue side */}
          <polygon points="30,36 33,45 42,45 35,50 38,59 30,53 22,59 25,50 18,45 27,45" fill="#ffffff" />
        </g>
      );
    case "jet": // Jets
      return (
        <g transform="translate(10,15) scale(0.8)">
          <ellipse cx="50" cy="35" rx="46" ry="24" fill="#125740" stroke="#ffffff" strokeWidth="4" />
          <ellipse cx="50" cy="35" rx="42" ry="20" fill="none" stroke="#000000" strokeWidth="2" />
          {/* Jet wings graphic */}
          <polygon points="18,35 48,22 82,35 48,48" fill="#ffffff" stroke="#000" strokeWidth="1.5" />
          <text x="50" y="42" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" style={{ letterSpacing: '2px' }}>JETS</text>
        </g>
      );
    case "bears_c": // Bears wishbone C
      return (
        <g transform="translate(20,10) scale(0.8)">
          <path d="M 58,15 C 28,15 15,32 15,50 C 15,68 28,85 58,85 L 58,72 C 38,72 28,62 28,50 C 28,38 38,28 58,28 Z" fill="#0B2265" stroke="#C83803" strokeWidth="5" paintOrder="stroke" />
          <path d="M 58,15 C 28,15 15,32 15,50 C 15,68 28,85 58,85 L 58,72 C 38,72 28,62 28,50 C 28,38 38,28 58,28 Z" fill="none" stroke="#000" strokeWidth="2" />
        </g>
      );
    case "steel": // Steelers
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="44" fill="#ffffff" stroke="#000000" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="40" fill="none" stroke="#A2AAAD" strokeWidth="2" />
          {/* Steelers mini text */}
          <text x="45" y="32" fill="#000000" fontSize="10" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">Steelers</text>
          {/* Three hypocycloid diamonds */}
          <polygon points="50,14 58,26 50,38 42,26" fill="#FFB81C" stroke="#000" strokeWidth="1" />
          <polygon points="68,38 76,50 68,62 60,50" fill="#C60C30" stroke="#000" strokeWidth="1" />
          <polygon points="32,38 40,50 32,62 24,50" fill="#005A9C" stroke="#000" strokeWidth="1" />
        </g>
      );
    case "browns_helmet": // Browns stripe helmet
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Helmet outline profile */}
          <path d="M 15,50 C 15,20 40,15 70,18 C 88,20 90,38 90,54 L 80,54 C 80,48 78,32 68,32 C 55,32 48,45 48,54" fill="none" stroke="#FF3C00" strokeWidth="14" strokeLinecap="round" />
          <path d="M 45,54 C 45,62 55,75 75,75" fill="none" stroke="#311D00" strokeWidth="8" strokeLinecap="round" />
          {/* Brown and white stripes */}
          <path d="M 28,18 Q 45,16 64,18" stroke="#311D00" strokeWidth="4" fill="none" />
          <path d="M 28,22 Q 45,20 64,22" stroke="#ffffff" strokeWidth="3" fill="none" />
          <path d="M 28,25 Q 45,23 64,25" stroke="#311D00" strokeWidth="4" fill="none" />
        </g>
      );
    case "jaguar": // Jaguars
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 12,65 Q 22,18 62,25 Q 85,28 90,48 Q 74,68 12,65 Z" fill="#006778" stroke="#000" strokeWidth="3.5" />
          {/* Spots & mouth */}
          <path d="M 25,48 C 30,42 40,42 42,48" fill="none" stroke="#D7A22A" strokeWidth="4" />
          <path d="M 52,38 C 55,32 65,32 68,38" fill="none" stroke="#D7A22A" strokeWidth="4" />
          {/* Fierce eye */}
          <polygon points="68,34 76,32 72,38" fill="#D7A22A" />
          <circle cx="71" cy="34" r="1.5" fill="#000" />
          <path d="M 75,54 L 88,52 L 80,46 Z" fill="#D7A22A" stroke="#000" strokeWidth="1" />
        </g>
      );
    case "horseshoe": // Colts Horseshoe
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 22,20 C 22,78 78,78 78,20" fill="none" stroke="#002C5F" strokeWidth="14" strokeLinecap="round" />
          {/* 7 Nail Holes */}
          <circle cx="28" cy="28" r="3.5" fill="#ffffff" />
          <circle cx="31" cy="46" r="3.5" fill="#ffffff" />
          <circle cx="39" cy="62" r="3.5" fill="#ffffff" />
          <circle cx="50" cy="68" r="3.5" fill="#ffffff" />
          <circle cx="61" cy="62" r="3.5" fill="#ffffff" />
          <circle cx="69" cy="46" r="3.5" fill="#ffffff" />
          <circle cx="72" cy="28" r="3.5" fill="#ffffff" />
        </g>
      );
    case "titans_shield": // Titans Sword & Fire
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Blue flame tails */}
          <path d="M 12,20 Q 30,-5 50,15" fill="none" stroke="#4B92DB" strokeWidth="6" strokeLinecap="round" />
          <path d="M 22,12 Q 40,-8 58,8" fill="none" stroke="#C60C30" strokeWidth="4" strokeLinecap="round" />
          {/* Shield */}
          <path d="M 20,25 L 80,25 L 80,68 C 80,82 50,95 50,95 C 50,95 20,82 20,68 Z" fill="#002C5F" stroke="#ffffff" strokeWidth="3" />
          <path d="M 20,25 L 80,25 L 80,68 C 80,82 50,95 50,95 C 50,95 20,82 20,68 Z" fill="none" stroke="#000" strokeWidth="1" />
          {/* T-Sword shape */}
          <line x1="50" y1="35" x2="50" y2="78" stroke="#C60C30" strokeWidth="8" strokeLinecap="round" />
          <line x1="36" y1="42" x2="64" y2="42" stroke="#C60C30" strokeWidth="8" strokeLinecap="round" />
          <line x1="50" y1="35" x2="50" y2="78" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
          <line x1="36" y1="42" x2="64" y2="42" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
        </g>
      );
    case "broncos_horse": // Broncos Horse Head
      return (
        <g transform="translate(10,15) scale(0.8)">
          {/* Horse Head silhouette */}
          <path d="M 12,65 Q 18,22 55,25 Q 85,28 88,48 Q 76,45 65,48 L 52,68 L 38,62 Z" fill="#ffffff" stroke="#002244" strokeWidth="4.5" />
          {/* Stylized orange mane */}
          <path d="M 16,36 Q 30,22 48,22 M 20,44 Q 38,32 54,34 M 24,52 Q 42,42 58,45" fill="none" stroke="#FB4F14" strokeWidth="3.5" strokeLinecap="round" />
          {/* Eye */}
          <polygon points="68,36 74,33 71,39" fill="#FB4F14" />
        </g>
      );
    case "raiders": // Raiders Shield & Swords
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Crossed swords behind shield */}
          <line x1="10" y1="10" x2="90" y2="90" stroke="#A5ACAF" strokeWidth="5" strokeLinecap="round" />
          <line x1="90" y1="10" x2="10" y2="90" stroke="#A5ACAF" strokeWidth="5" strokeLinecap="round" />
          <polygon points="50,15 85,30 75,75 50,92 25,75 15,30" fill="#000000" stroke="#A5ACAF" strokeWidth="4" />
          {/* Pirate profile */}
          <circle cx="50" cy="46" r="14" fill="#A5ACAF" />
          <path d="M 38,40 Q 50,30 62,40 Z" fill="#000000" /> {/* Eyepatch & Bandana */}
          <line x1="42" y1="42" x2="52" y2="52" stroke="#000" strokeWidth="2.5" />
        </g>
      );
    case "bolt": // Chargers lightning bolt
      return (
        <g transform="translate(15,10) scale(0.8)">
          <polygon points="68,4 20,48 48,48 24,96 82,42 54,42" fill="#FFC20E" stroke="#0080C6" strokeWidth="4.5" />
          <polygon points="68,4 20,48 48,48 24,96 82,42 54,42" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </g>
      );
    case "seahawk": // Seahawks Bird Profile
      return (
        <g transform="translate(10,15) scale(0.8)">
          {/* Dark blue background head */}
          <path d="M 12,42 Q 38,20 85,28 Q 90,32 82,44 Q 68,44 55,36 Q 42,60 12,42" fill="#002244" stroke="#000" strokeWidth="3" />
          {/* Green highlights */}
          <path d="M 14,41 Q 38,23 80,30 L 78,34 Q 38,28 14,41 Z" fill="#69BE28" />
          <path d="M 15,42 Q 38,46 54,36" fill="none" stroke="#69BE28" strokeWidth="3" />
          {/* Eye */}
          <polygon points="62,32 70,30 66,35" fill="#69BE28" />
        </g>
      );
    case "cardinal": // Cardinals
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 12,50 Q 22,12 62,25 Q 85,32 88,46 Q 72,55 12,50" fill="#C41E3A" stroke="#000" strokeWidth="3" />
          {/* Yellow beak */}
          <polygon points="76,38 88,43 74,48" fill="#FED141" stroke="#000" strokeWidth="1.5" />
          {/* Black eye outline and golden eye */}
          <circle cx="60" cy="32" r="3" fill="#000" />
          <circle cx="60" cy="32" r="1.5" fill="#FED141" />
        </g>
      );
    case "falcon": // Falcons
      return (
        <g transform="translate(10,15) scale(0.8)">
          {/* Stylized F-Falcon */}
          <path d="M 12,22 L 85,22 L 88,28 L 52,36 L 76,46 L 80,52 L 42,56 L 62,72 L 56,76 L 12,42 Z" fill="#000000" stroke="#A71930" strokeWidth="3.5" paintOrder="stroke" />
          <path d="M 12,22 L 85,22 L 88,28 L 52,36 L 76,46 L 80,52 L 42,56 L 62,72 L 56,76 L 12,42 Z" fill="#000000" />
          {/* Wing highlights */}
          <path d="M 20,28 L 74,28 M 20,38 L 48,38" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    case "panther": // Panthers
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 12,52 Q 22,18 62,22 Q 85,25 88,45 Q 70,62 12,52" fill="#101820" stroke="#0085CA" strokeWidth="3.5" paintOrder="stroke" />
          <path d="M 12,52 Q 22,18 62,22 Q 85,25 88,45 Q 70,62 12,52" fill="#101820" />
          {/* Silver/Blue teeth & whiskers */}
          <path d="M 72,42 L 78,44 L 75,38 M 58,40 Q 68,36 74,40" fill="none" stroke="#A5ACAF" strokeWidth="2" />
          {/* Blue eye */}
          <circle cx="65" cy="30" r="2.5" fill="#0085CA" />
        </g>
      );
    case "fleur": // Saints Fleur-de-lis
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 50,5 C 50,22 76,32 76,55 C 76,72 62,82 50,82 C 38,82 24,72 24,55 C 24,32 50,22 50,5 Z" fill="#D3BC8D" stroke="#101820" strokeWidth="4.5" />
          <path d="M 50,5 C 50,22 76,32 76,55 C 76,72 62,82 50,82 C 38,82 24,72 24,55 C 24,32 50,22 50,5 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
          {/* Side leaves */}
          <path d="M 15,50 C 25,50 45,55 50,65 C 55,55 75,50 85,50 C 85,50 85,62 70,65 C 50,68 50,82 50,82 C 50,82 50,68 30,65 C 15,62 15,50 15,50 Z" fill="#D3BC8D" stroke="#101820" strokeWidth="4.5" />
          <path d="M 15,50 C 25,50 45,55 50,65 C 55,55 75,50 85,50 C 85,50 85,62 70,65 C 50,68 50,82 50,82 C 50,82 50,68 30,65 C 15,62 15,50 15,50 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" />
        </g>
      );
    case "vikings_helmet": // Vikings Horned Helmet
      return (
        <g transform="translate(15,10) scale(0.8)">
          <circle cx="50" cy="52" r="22" fill="#4F2683" stroke="#000" strokeWidth="3" />
          {/* Yellow braids */}
          <path d="M 32,58 L 22,88 M 68,58 L 78,88" stroke="#FFC62F" strokeWidth="5.5" strokeLinecap="round" />
          {/* Horns */}
          <path d="M 30,42 Q 10,32 18,12 Q 32,25 35,38 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 70,42 Q 90,32 82,12 Q 68,25 65,38 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
        </g>
      );
    case "flag": // Buccaneers Flag & Swords
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Flag stick */}
          <line x1="12" y1="5" x2="12" y2="95" stroke="#A5ACAF" strokeWidth="5.5" strokeLinecap="round" />
          <rect x="18" y="15" width="68" height="50" fill="#D50A0A" stroke="#000" strokeWidth="3.5" rx="2" />
          {/* Inner skull/swords graphic */}
          <circle cx="52" cy="36" r="8" fill="#ffffff" stroke="#000" strokeWidth="1" />
          <line x1="38" y1="52" x2="66" y2="28" stroke="#ffffff" strokeWidth="3" />
          <line x1="66" y1="52" x2="38" y2="28" stroke="#ffffff" strokeWidth="3" />
        </g>
      );
    case "giants": // Giants (NFL)
      return (
        <g transform="translate(10,20) scale(0.8)">
          <text x="50" y="44" fill="#0B2265" fontSize="38" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle" stroke="#ffffff" strokeWidth="4" paintOrder="stroke">ny</text>
          <text x="50" y="44" fill="#0B2265" fontSize="38" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle">ny</text>
          <line x1="15" y1="54" x2="85" y2="54" stroke="#A71930" strokeWidth="5.5" strokeLinecap="round" />
        </g>
      );
    case "commanders_w": // Commanders W
      return (
        <g transform="translate(10,10) scale(0.8)">
          <rect x="8" y="8" width="84" height="84" fill="#5A1414" stroke="#FFB612" strokeWidth="3.5" rx="4" />
          <text x="50" y="74" fill="#FFB612" fontSize="62" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#000" strokeWidth="3.5" paintOrder="stroke">W</text>
          <text x="50" y="74" fill="#FFB612" fontSize="62" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">W</text>
        </g>
      );

    // ==========================================
    // NBA (30 Teams)
    // ==========================================
    case "lakers_text": // Lakers
      return (
        <g transform="translate(5,15) scale(0.9)">
          <circle cx="50" cy="35" rx="45" ry="25" fill="#FDB927" stroke="#000" strokeWidth="2.5" />
          {/* Seams */}
          <path d="M 12,35 Q 50,15 88,35" fill="none" stroke="#552583" strokeWidth="2" />
          <path d="M 12,35 Q 50,55 88,35" fill="none" stroke="#552583" strokeWidth="2" />
          {/* Slanted text */}
          <text x="50" y="42" fill="#552583" fontSize="18" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle" stroke="#ffffff" strokeWidth="3" paintOrder="stroke">LAKERS</text>
          <text x="50" y="42" fill="#552583" fontSize="18" fontWeight="bold" fontStyle="italic" fontFamily="sans-serif" textAnchor="middle">LAKERS</text>
        </g>
      );
    case "clover": // Celtics Shamrock
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 50,42 C 50,22 28,22 28,42 C 28,62 50,58 50,75 C 50,58 72,62 72,42 C 72,22 50,22 50,42 M 50,68 L 50,92" fill="none" stroke="#007A33" strokeWidth="12" strokeLinecap="round" />
          {/* Gold hat outline overlay */}
          <polygon points="36,25 64,25 58,10 42,10" fill="#BA9653" stroke="#000" strokeWidth="2.5" />
        </g>
      );
    case "bridge": // Warriors Golden Gate Bridge
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="#1D428A" stroke="#FFC72C" strokeWidth="5.5" />
          {/* Bridge cable */}
          <path d="M 16,60 Q 50,22 84,60" fill="none" stroke="#FFC72C" strokeWidth="5.5" />
          {/* Road deck */}
          <line x1="12" y1="64" x2="88" y2="64" stroke="#FFC72C" strokeWidth="4" />
          {/* Vertical struts */}
          <line x1="32" y1="42" x2="32" y2="64" stroke="#FFC72C" strokeWidth="2" />
          <line x1="50" y1="36" x2="50" y2="64" stroke="#FFC72C" strokeWidth="2" />
          <line x1="68" y1="42" x2="68" y2="64" stroke="#FFC72C" strokeWidth="2" />
        </g>
      );
    case "bull": // Bulls
      return (
        <g transform="translate(15,15) scale(0.7)">
          {/* Horned bull head profile */}
          <path d="M 15,30 L 85,30 L 78,65 Q 75,90 50,95 Q 25,90 22,65 Z" fill="#CE1141" stroke="#000000" strokeWidth="4.5" />
          {/* White horns */}
          <path d="M 22,35 L 5,12 Q 18,15 26,30 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          <path d="M 78,35 L 95,12 Q 82,15 74,30 Z" fill="#ffffff" stroke="#000" strokeWidth="2.5" />
          {/* Red Tips */}
          <polygon points="5,12 10,8 14,14" fill="#CE1141" />
          <polygon points="95,12 90,8 86,14" fill="#CE1141" />
          {/* Fierce Eyes */}
          <polygon points="34,48 44,48 40,54" fill="#ffffff" stroke="#000" strokeWidth="1" />
          <polygon points="66,48 56,48 60,54" fill="#ffffff" stroke="#000" strokeWidth="1" />
          <circle cx="39" cy="50" r="1.5" fill="#CE1141" />
          <circle cx="61" cy="50" r="1.5" fill="#CE1141" />
        </g>
      );
    case "nets_shield": // Nets Shield
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 15,10 L 85,10 L 80,68 Q 50,92 50,92 Q 50,92 20,68 Z" fill="#000000" stroke="#ffffff" strokeWidth="4" />
          <path d="M 15,10 L 85,10 L 80,68 Q 50,92 50,92 Q 50,92 20,68 Z" fill="none" stroke="#000000" strokeWidth="1.5" />
          {/* Bold B */}
          <text x="50" y="62" fill="#ffffff" fontSize="48" fontWeight="bold" fontFamily="monospace" textAnchor="middle">B</text>
        </g>
      );
    case "knicks": // Knicks
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* 3D gold basketball */}
          <circle cx="50" cy="62" r="28" fill="#F58426" stroke="#000" strokeWidth="3" />
          <path d="M 28,62 Q 50,42 72,62" fill="none" stroke="#006BB6" strokeWidth="3" />
          <path d="M 28,62 Q 50,82 72,62" fill="none" stroke="#006BB6" strokeWidth="3" />
          {/* Blue KNICKS banner */}
          <polygon points="5,20 95,20 85,45 15,45" fill="#006BB6" stroke="#000" strokeWidth="3" />
          <text x="50" y="38" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" style={{ letterSpacing: '1px' }}>KNICKS</text>
        </g>
      );
    case "fire": // Heat Flame Ball & Hoop
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Hoop ring */}
          <ellipse cx="50" cy="72" rx="32" ry="8" fill="none" stroke="#ffffff" strokeWidth="5.5" />
          {/* Flame ball */}
          <path d="M 50,68 C 28,52 42,12 66,22 C 54,38 72,42 50,68 Z" fill="#98002E" stroke="#F9A01B" strokeWidth="3" paintOrder="stroke" />
          <path d="M 50,68 C 28,52 42,12 66,22 C 54,38 72,42 50,68 Z" fill="#98002E" />
          <circle cx="50" cy="58" r="10" fill="#F9A01B" />
        </g>
      );
    case "deer": // Bucks Deer
      return (
        <g transform="translate(15,10) scale(0.75)">
          <path d="M 20,28 C 20,15 35,5 50,22 C 65,5 80,15 80,28 C 80,48 50,55 50,55 Z" fill="none" stroke="#EEE1C6" strokeWidth="6" strokeLinecap="round" />
          <polygon points="50,45 64,68 50,82 36,68" fill="#00471B" stroke="#000" strokeWidth="3" />
          {/* Antler points */}
          <line x1="32" y1="18" x2="22" y2="10" stroke="#EEE1C6" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="68" y1="18" x2="78" y2="10" stroke="#EEE1C6" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      );
    case "sun": // Suns Bursting Sunburst
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Sunburst trails */}
          <polygon points="50,5 65,30 92,20 72,42 95,60 68,60 70,88 50,70 30,88 32,60 5,60 28,42 8,20 35,30" fill="#E56020" stroke="#000" strokeWidth="1.5" />
          <circle cx="50" cy="46" r="18" fill="#1D1160" />
          <circle cx="50" cy="46" r="14" fill="#E56020" />
        </g>
      );
    case "mavericks_horse": // Mavericks Horse & Basketball
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="38" fill="#00538C" stroke="#B8C4CA" strokeWidth="3" />
          <path d="M 20,70 Q 25,24 62,32 Q 85,38 82,58 Q 68,54 55,56 L 45,78 Z" fill="#ffffff" stroke="#000" strokeWidth="3.5" />
          <path d="M 30,35 Q 45,28 60,35" fill="none" stroke="#00538C" strokeWidth="3.5" />
        </g>
      );
    case "pickaxe": // Nuggets Crossed Pickaxes
      return (
        <g transform="translate(10,10) scale(0.8)">
          <line x1="18" y1="82" x2="82" y2="18" stroke="#FEC524" strokeWidth="7" strokeLinecap="round" />
          <line x1="82" y1="82" x2="18" y2="18" stroke="#FEC524" strokeWidth="7" strokeLinecap="round" />
          <polygon points="50,15 75,44 25,44" fill="#0E2240" stroke="#000" strokeWidth="3.5" />
          <circle cx="50" cy="38" r="8" fill="#FEC524" />
        </g>
      );
    case "clippers_compass": // Clippers Ship Compass
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="#1D428A" stroke="#C8102E" strokeWidth="4.5" />
          {/* Compass points */}
          <polygon points="50,12 55,42 50,48 45,42" fill="#ffffff" />
          <polygon points="50,88 55,58 50,52 45,58" fill="#ffffff" />
          <polygon points="12,50 42,55 48,50 42,45" fill="#ffffff" />
          <polygon points="88,50 58,55 52,50 58,45" fill="#ffffff" />
          <text x="50" y="55" fill="#C8102E" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle">LAC</text>
        </g>
      );
    case "stars_76": // 76ers
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* 13 stars circle */}
          <circle cx="50" cy="50" r="38" fill="#006BB6" stroke="#ED174C" strokeWidth="4" />
          <circle cx="50" cy="50" r="30" fill="#ffffff" />
          <text x="50" y="58" fill="#ED174C" fontSize="28" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">76</text>
        </g>
      );
    case "claw": // Raptors Claw Tear
      return (
        <g transform="translate(15,10) scale(0.8)">
          <circle cx="45" cy="50" r="32" fill="#000000" stroke="#CE1141" strokeWidth="3.5" />
          {/* Diagonal claw tears */}
          <path d="M 22,25 Q 42,45 68,22 M 24,42 Q 48,62 74,38 M 32,60 Q 56,80 82,56" fill="none" stroke="#CE1141" strokeWidth="7" strokeLinecap="round" />
          <path d="M 22,25 Q 42,45 68,22 M 24,42 Q 48,62 74,38 M 32,60 Q 56,80 82,56" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    case "bear": // Grizzlies Bear
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 20,42 Q 20,25 35,28 Q 50,32 65,28 Q 80,25 80,42 Q 80,68 50,78 Q 20,68 20,42 Z" fill="#5D76A9" stroke="#12173F" strokeWidth="4" paintOrder="stroke" />
          <path d="M 20,42 Q 20,25 35,28 Q 50,32 65,28 Q 80,25 80,42 Q 80,68 50,78 Q 20,68 20,42 Z" fill="#5D76A9" />
          {/* Ears & Eyes */}
          <circle cx="36" cy="45" r="4.5" fill="#12173F" />
          <circle cx="64" cy="45" r="4.5" fill="#12173F" />
          <circle cx="36" cy="45" r="1.5" fill="#FDB927" />
          <circle cx="64" cy="45" r="1.5" fill="#FDB927" />
          <polygon points="50,56 56,64 44,64" fill="#12173F" />
        </g>
      );
    case "wolf": // Timberwolves Howling Wolf
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 20,70 Q 22,20 58,25 Q 82,32 78,55 Q 60,65 20,70 Z" fill="#0C2340" stroke="#78BE20" strokeWidth="3" paintOrder="stroke" />
          <path d="M 20,70 Q 22,20 58,25 Q 82,32 78,55 Q 60,65 20,70 Z" fill="#0C2340" />
          <circle cx="52" cy="38" r="3.5" fill="#78BE20" />
          {/* Green star above */}
          <polygon points="50,4 53,10 59,10 54,14 56,20 50,16 44,20 46,14 41,10 47,10" fill="#78BE20" />
        </g>
      );
    case "pelican": // Pelicans Pelican Head
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 15,62 Q 25,25 60,25 Q 85,25 85,50 Q 85,75 50,82" fill="none" stroke="#0C2340" strokeWidth="4.5" />
          {/* Golden bill */}
          <path d="M 32,45 C 50,30 82,30 82,50 C 82,62 55,62 32,45 Z" fill="#FDB927" stroke="#0C2340" strokeWidth="2.5" />
          <circle cx="58" cy="38" r="2.5" fill="#C8102E" />
        </g>
      );
    case "thunder_shield": // Thunder Shield
      return (
        <g transform="translate(10,10) scale(0.8)">
          <polygon points="12,12 88,12 78,72 50,92 22,72" fill="#007AC1" stroke="#EF3B24" strokeWidth="4.5" />
          {/* Lightning wedge */}
          <polygon points="50,20 68,45 42,45 58,80 32,50 56,50" fill="#EF3B24" />
        </g>
      );
    case "kings_crown": // Kings Crown
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 10,65 L 18,25 L 38,48 L 50,15 L 62,48 L 82,25 L 90,65 Z" fill="#5A2D81" stroke="#63727A" strokeWidth="4" />
          <circle cx="50" cy="52" r="6" fill="#63727A" />
          <rect x="20" y="65" width="60" height="8" fill="#63727A" />
        </g>
      );
    case "hawks_bird": // Hawks pacman profile
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Circular outline */}
          <circle cx="50" cy="50" r="42" fill="#E13A3E" stroke="#C1D32F" strokeWidth="4.5" />
          {/* Pacman hawk profile */}
          <path d="M 75,50 C 75,32 60,20 45,20 C 30,20 22,35 22,50 C 22,65 35,75 50,75 L 75,70 L 60,56 Z" fill="#000000" />
          <circle cx="42" cy="38" r="3" fill="#C1D32F" />
        </g>
      );
    case "hornet": // Hornets Hornet & Ball
      return (
        <g transform="translate(10,10) scale(0.8)">
          <ellipse cx="50" cy="58" rx="28" ry="18" fill="#191970" stroke="#00788C" strokeWidth="3.5" />
          {/* Wings */}
          <path d="M 22,35 Q 38,15 48,42" fill="none" stroke="#00788C" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M 78,35 Q 62,15 52,42" fill="none" stroke="#00788C" strokeWidth="5.5" strokeLinecap="round" />
          {/* Stinger */}
          <polygon points="50,76 46,88 54,88" fill="#00788C" />
        </g>
      );
    case "cavaliers_sword": // Cavaliers Sword & C
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 55,20 C 32,20 22,35 22,50 C 22,65 32,80 55,80 L 55,66 C 40,66 34,58 34,50 C 34,42 40,34 55,34 Z" fill="#860038" stroke="#FDBB30" strokeWidth="4" />
          {/* Crossed Sword */}
          <line x1="12" y1="88" x2="78" y2="12" stroke="#C4CED4" strokeWidth="6.5" strokeLinecap="round" />
          <line x1="18" y1="82" x2="28" y2="92" stroke="#FDBB30" strokeWidth="8" />
        </g>
      );
    case "pacers": // Pacers P & Ball
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Yellow P */}
          <path d="M 22,12 L 56,12 Q 78,12 78,34 Q 78,56 56,56 L 36,56 L 36,88 L 22,88 Z" fill="#FDBB30" stroke="#002D62" strokeWidth="4.5" />
          <ellipse cx="46" cy="34" rx="14" ry="12" fill="#002D62" />
          {/* Basketball seams inside */}
          <line x1="38" y1="34" x2="54" y2="34" stroke="#ffffff" strokeWidth="2" />
        </g>
      );
    case "pistons_crest": // Pistons Crest
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="#C8102E" stroke="#1D428A" strokeWidth="5.5" />
          <text x="50" y="58" fill="#ffffff" fontSize="18" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" style={{ letterSpacing: '0.5px' }}>PISTONS</text>
        </g>
      );
    case "rocket": // Rockets R
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Red R with boosters */}
          <path d="M 20,12 L 48,12 Q 68,12 68,30 Q 68,48 48,48 L 34,48 L 56,88 L 40,88 L 20,48 Z" fill="#CE1141" stroke="#000" strokeWidth="3.5" />
          {/* Boosters wings */}
          <path d="M 12,48 Q 28,52 32,75" fill="none" stroke="#C4CED4" strokeWidth="4" />
          <path d="M 68,48 Q 52,52 48,75" fill="none" stroke="#C4CED4" strokeWidth="4" />
        </g>
      );
    case "magic_star": // Magic Basketball & Star Trail
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="45" cy="55" r="28" fill="#0077C0" stroke="#C4CED4" strokeWidth="3" />
          {/* Star trail */}
          <path d="M 88,12 Q 62,25 45,55" fill="none" stroke="#C4CED4" strokeWidth="5" />
          <polygon points="88,6 92,16 100,16 94,22 96,30 88,24 80,30 82,22 76,16 84,16" fill="#C4CED4" />
        </g>
      );
    case "monument": // Wizards Monument
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Washington Monument Wand */}
          <polygon points="35,10 42,28 28,28" fill="#E31837" stroke="#000" strokeWidth="1.5" />
          <rect x="28" y="28" width="14" height="60" fill="#002B5C" stroke="#C4CED4" strokeWidth="3" />
          {/* Star */}
          <polygon points="58,15 61,22 68,22 63,26 65,32 58,28 51,32 53,26 48,22 55,22" fill="#E31837" />
        </g>
      );
    case "spur": // Spurs
      return (
        <g transform="translate(15,15) scale(0.75)">
          <path d="M 15,22 L 42,22 C 42,58 15,58 15,22 Z" fill="none" stroke="#C4CED4" strokeWidth="8" strokeLinecap="round" />
          {/* Spur wheel */}
          <polygon points="42,38 68,38 60,25 78,38 60,51 68,38" fill="#000000" stroke="#C4CED4" strokeWidth="2.5" />
        </g>
      );
    case "note": // Jazz Note
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="32" cy="70" r="16" fill="#F9A01B" stroke="#002B49" strokeWidth="3" />
          <rect x="42" y="16" width="8" height="54" fill="#002B49" />
          {/* Flag */}
          <polygon points="50,16 85,25 85,8 50,4" fill="#F9A01B" />
        </g>
      );
    case "pinwheel": // Trail Blazers Pinwheel
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* 5 Red & 5 Silver curved lines */}
          <path d="M 18,30 C 32,15 50,22 50,50" fill="none" stroke="#E03A3E" strokeWidth="6" strokeLinecap="round" />
          <path d="M 22,42 C 36,27 50,34 50,50" fill="none" stroke="#E03A3E" strokeWidth="6" strokeLinecap="round" />
          <path d="M 26,54 C 40,39 50,46 50,50" fill="none" stroke="#E03A3E" strokeWidth="6" strokeLinecap="round" />
          <path d="M 82,70 C 68,85 50,78 50,50" fill="none" stroke="#C4CED4" strokeWidth="6" strokeLinecap="round" />
          <path d="M 78,58 C 64,73 50,66 50,50" fill="none" stroke="#C4CED4" strokeWidth="6" strokeLinecap="round" />
          <path d="M 74,46 C 60,61 50,54 50,50" fill="none" stroke="#C4CED4" strokeWidth="6" strokeLinecap="round" />
        </g>
      );

    // ==========================================
    // MLB (30 Teams)
    // ==========================================
    case "yankees_ny": // Yankees NY Interlocking
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="36" y="58" fill="#003087" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#ffffff" strokeWidth="4" paintOrder="stroke">N</text>
          <text x="36" y="58" fill="#003087" fontSize="48" fontWeight="bold" fontFamily="serif">N</text>
          <text x="56" y="74" fill="#003087" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#ffffff" strokeWidth="4" paintOrder="stroke">Y</text>
          <text x="56" y="74" fill="#003087" fontSize="48" fontWeight="bold" fontFamily="serif">Y</text>
        </g>
      );
    case "socks": // Red Sox Socks
      return (
        <g transform="translate(20,15) scale(0.7)">
          <path d="M 24,10 L 24,45 C 24,55 12,62 12,62 L 18,72 C 18,72 34,65 34,48 L 34,10 Z" fill="#BD3039" stroke="#000" strokeWidth="2.5" />
          <path d="M 52,10 L 52,45 C 52,55 40,62 40,62 L 46,72 C 46,72 62,65 62,48 L 62,10 Z" fill="#BD3039" stroke="#000" strokeWidth="2.5" />
          {/* White details */}
          <path d="M 12,62 L 18,72" stroke="#ffffff" strokeWidth="3" />
          <path d="M 40,62 L 46,72" stroke="#ffffff" strokeWidth="3" />
        </g>
      );
    case "dodgers_script": // Dodgers LA / Script
      return (
        <g transform="translate(10,10) scale(0.8)">
          <text x="42" y="58" fill="#005A9C" fontSize="32" fontWeight="bold" fontStyle="italic" fontFamily="serif">LA</text>
          {/* Red streak trail */}
          <path d="M 15,68 Q 50,48 85,74" fill="none" stroke="#C8102E" strokeWidth="4" strokeLinecap="round" />
        </g>
      );
    case "cubs_c": // Cubs C
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#0E3386" strokeWidth="8" />
          {/* Red C */}
          <path d="M 68,26 C 45,18 28,34 28,50 C 28,66 45,82 68,74" fill="none" stroke="#CC3433" strokeWidth="12" strokeLinecap="round" />
          <text x="52" y="56" fill="#0E3386" fontSize="16" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ub</text>
        </g>
      );
    case "astros_star": // Astros Star & H
      return (
        <g transform="translate(10,10) scale(0.8)">
          <polygon points="50,5 64,36 98,36 71,57 81,91 50,70 19,91 29,57 2,36 36,36" fill="#EB6E1F" stroke="#002D62" strokeWidth="3.5" />
          {/* Bold H */}
          <text x="50" y="65" fill="#002D62" fontSize="38" fontWeight="bold" fontFamily="monospace" textAnchor="middle">H</text>
        </g>
      );
    case "tomahawk": // Braves Tomahawk
      return (
        <g transform="translate(10,15) scale(0.8)">
          <line x1="8" y1="56" x2="84" y2="18" stroke="#8B5A2B" strokeWidth="8" strokeLinecap="round" />
          {/* Axe head */}
          <polygon points="72,8 90,18 72,28" fill="#C4CED4" stroke="#000" strokeWidth="2.5" />
          {/* Feathers wrap */}
          <path d="M 22,48 L 18,65 L 26,62 Z" fill="#CE1141" />
          <path d="M 28,45 L 32,58 M 32,43 L 36,54" stroke="#FFC72C" strokeWidth="3.5" />
        </g>
      );
    case "mets_crest": // Mets skyline & baseball crest
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="#002D62" stroke="#FF5910" strokeWidth="4.5" />
          {/* Skyline silhouette */}
          <polygon points="20,70 20,48 30,48 30,36 42,36 42,42 55,42 55,30 68,30 68,54 80,54 80,70" fill="#FF5910" />
          <text x="50" y="68" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="serif" textAnchor="middle">Mets</text>
        </g>
      );
    case "phillies_bell": // Phillies Liberty Bell
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Liberty Bell profile */}
          <path d="M 25,25 Q 50,20 75,25 L 70,68 Q 50,75 30,68 Z" fill="#E81828" stroke="#002D62" strokeWidth="3" />
          <rect x="22" y="68" width="56" height="8" fill="#002D62" rx="2" />
          {/* Crack line */}
          <line x1="50" y1="26" x2="44" y2="54" stroke="#ffffff" strokeWidth="2" />
        </g>
      );
    case "padres_sd": // Padres SD Interlocking
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="36" y="58" fill="#2F241D" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#FFC72C" strokeWidth="4" paintOrder="stroke">S</text>
          <text x="36" y="58" fill="#2F241D" fontSize="48" fontWeight="bold" fontFamily="serif">S</text>
          <text x="56" y="74" fill="#2F241D" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#FFC72C" strokeWidth="4" paintOrder="stroke">D</text>
          <text x="56" y="74" fill="#2F241D" fontSize="48" fontWeight="bold" fontFamily="serif">D</text>
        </g>
      );
    case "sf_logo": // Giants (MLB) SF Interlocking
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="36" y="58" fill="#FD5A1E" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#000000" strokeWidth="4" paintOrder="stroke">S</text>
          <text x="36" y="58" fill="#FD5A1E" fontSize="48" fontWeight="bold" fontFamily="serif">S</text>
          <text x="56" y="74" fill="#FD5A1E" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#000000" strokeWidth="4" paintOrder="stroke">F</text>
          <text x="56" y="74" fill="#FD5A1E" fontSize="48" fontWeight="bold" fontFamily="serif">F</text>
        </g>
      );
    case "cardinal_bat": // Cardinals (MLB) bird perched on bat
      return (
        <g transform="translate(10,15) scale(0.8)">
          {/* Bat */}
          <line x1="8" y1="62" x2="92" y2="62" stroke="#FED141" strokeWidth="6" strokeLinecap="round" />
          <line x1="8" y1="62" x2="92" y2="62" stroke="#000000" strokeWidth="1" />
          {/* Red bird perched */}
          <path d="M 32,58 Q 42,28 62,35 Q 74,40 76,52 L 64,58 Z" fill="#C41E3A" stroke="#000000" strokeWidth="2.5" />
          <polygon points="68,36 78,38 72,42" fill="#FED141" />
        </g>
      );
    case "bluejay": // Bluejays Blue Jay Head & Maple Leaf
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 12,54 Q 22,20 62,25 Q 85,28 88,48 Q 72,55 12,54" fill="#132861" stroke="#000" strokeWidth="3.5" />
          <path d="M 15,50 Q 28,34 68,38" fill="none" stroke="#1D2D5C" strokeWidth="4" />
          {/* Red Maple Leaf */}
          <polygon points="76,46 80,42 85,46 82,52 88,52 82,58 84,66 76,60 68,66 70,58 64,52 70,52" fill="#C60C30" />
        </g>
      );
    case "orioles_cap": // Orioles Cartoon Duck Cap profile
      return (
        <g transform="translate(10,10) scale(0.8)">
          <path d="M 22,55 C 22,30 38,20 60,25 C 78,30 82,48 78,60 C 65,72 22,65 22,55" fill="#DF4601" stroke="#000" strokeWidth="3" />
          <circle cx="48" cy="40" r="3.5" fill="#000000" />
          {/* Smile and white cap visor */}
          <path d="M 24,18 L 52,12 L 68,26 Z" fill="#000000" stroke="#DF4601" strokeWidth="1.5" />
        </g>
      );
    case "guardians_c": // Guardians Winged C
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 52,22 C 34,22 24,35 24,50 C 24,65 34,78 52,78 L 52,65 C 40,65 36,58 36,50 C 36,42 40,35 52,35 Z" fill="#E31837" stroke="#0C2340" strokeWidth="4" />
          {/* Wings trailing off C */}
          <path d="M 20,40 Q 5,30 15,22 M 20,50 Q 5,42 12,34" fill="none" stroke="#0C2340" strokeWidth="4" strokeLinecap="round" />
        </g>
      );
    case "tigers_d": // Tigers Old English D
      return (
        <g transform="translate(20,10) scale(0.8)">
          <path d="M 20,15 L 42,15 Q 58,15 58,32 Q 58,45 46,50 Q 58,54 58,68 Q 58,85 42,85 L 20,85 Z" fill="none" stroke="#0C2340" strokeWidth="10" strokeLinecap="round" />
          <rect x="20" y="44" width="22" height="12" fill="#0C2340" />
        </g>
      );
    case "royals_crown": // Royals Gold Crown over KC Shield
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* Shield */}
          <path d="M 22,25 L 78,25 L 78,65 Q 50,92 50,92 Q 50,92 22,65 Z" fill="#004687" stroke="#BD9B16" strokeWidth="3" />
          <text x="50" y="55" fill="#ffffff" fontSize="20" fontWeight="bold" fontFamily="monospace" textAnchor="middle">KC</text>
          {/* Gold Crown */}
          <path d="M 12,25 L 18,8 L 38,18 L 50,4 L 62,18 L 82,8 L 88,25 Z" fill="#BD9B16" stroke="#000" strokeWidth="2" />
        </g>
      );
    case "twins_tc": // Twins TC Interlocking
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="36" y="58" fill="#002B49" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#D31145" strokeWidth="4" paintOrder="stroke">T</text>
          <text x="36" y="58" fill="#002B49" fontSize="48" fontWeight="bold" fontFamily="serif">T</text>
          <text x="56" y="74" fill="#002B49" fontSize="48" fontWeight="bold" fontFamily="serif" stroke="#D31145" strokeWidth="4" paintOrder="stroke">C</text>
          <text x="56" y="74" fill="#002B49" fontSize="48" fontWeight="bold" fontFamily="serif">C</text>
        </g>
      );
    case "whitesox_sox": // White Sox Diagonal SOX
      return (
        <g transform="translate(10,10) scale(0.8)">
          <text x="25" y="44" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)" stroke="#C4CED4" strokeWidth="3.5" paintOrder="stroke">S</text>
          <text x="25" y="44" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)">S</text>
          <text x="45" y="58" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)" stroke="#C4CED4" strokeWidth="3.5" paintOrder="stroke">O</text>
          <text x="45" y="58" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)">O</text>
          <text x="65" y="72" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)" stroke="#C4CED4" strokeWidth="3.5" paintOrder="stroke">X</text>
          <text x="65" y="72" fill="#000000" fontSize="32" fontWeight="bold" fontFamily="serif" transform="skewX(-15)">X</text>
        </g>
      );
    case "angels_a": // Angels A and Halo
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="50" y="78" fill="#BA0021" fontSize="62" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#003263" strokeWidth="3" paintOrder="stroke">A</text>
          <text x="50" y="78" fill="#BA0021" fontSize="62" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">A</text>
          {/* Silver Halo */}
          <ellipse cx="50" cy="22" rx="22" ry="6" fill="none" stroke="#C4CED4" strokeWidth="4.5" />
        </g>
      );
    case "athletics_a": // Athletics A's Script
      return (
        <g transform="translate(10,10) scale(0.8)">
          <text x="40" y="68" fill="#003831" fontSize="58" fontWeight="bold" fontStyle="italic" fontFamily="serif" stroke="#EFFB21" strokeWidth="3" paintOrder="stroke">A</text>
          <text x="40" y="68" fill="#003831" fontSize="58" fontWeight="bold" fontStyle="italic" fontFamily="serif">A</text>
          <text x="75" y="44" fill="#003831" fontSize="26" fontWeight="bold" fontFamily="serif" stroke="#EFFB21" strokeWidth="1.5" paintOrder="stroke">'s</text>
          <text x="75" y="44" fill="#003831" fontSize="26" fontWeight="bold" fontFamily="serif">'s</text>
        </g>
      );
    case "rangers_t": // Rangers Shadow T
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="50" y="78" fill="#003278" fontSize="68" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle" stroke="#C0111F" strokeWidth="5.5" paintOrder="stroke">T</text>
          <text x="50" y="78" fill="#003278" fontSize="68" fontWeight="bold" fontFamily="Impact, sans-serif" textAnchor="middle">T</text>
        </g>
      );
    case "dbacks_a": // Diamondbacks A Snake head
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="50" y="78" fill="#A71930" fontSize="68" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle" stroke="#E3D4AD" strokeWidth="3" paintOrder="stroke">A</text>
          <text x="50" y="78" fill="#A71930" fontSize="68" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">A</text>
          {/* Tongue/Snake detail */}
          <path d="M 45,55 Q 50,65 55,55" fill="none" stroke="#E3D4AD" strokeWidth="3.5" />
        </g>
      );
    case "rockies_peak": // Rockies Mountain Peak
      return (
        <g transform="translate(10,10) scale(0.8)">
          <rect x="8" y="8" width="84" height="84" fill="#333366" stroke="#C4CED4" strokeWidth="3" rx="4" />
          {/* Mountain peaks */}
          <polygon points="50,22 82,78 18,78" fill="#C4CED4" stroke="#000" strokeWidth="1.5" />
          <polygon points="36,44 60,78 12,78" fill="#8A8A8A" />
        </g>
      );
    case "marlins_fish": // Marlins Leaping Marlin & M
      return (
        <g transform="translate(10,10) scale(0.8)">
          <text x="38" y="74" fill="#000000" fontSize="58" fontWeight="bold" fontFamily="Impact, sans-serif" stroke="#00A3E0" strokeWidth="3.5" paintOrder="stroke">M</text>
          <text x="38" y="74" fill="#000000" fontSize="58" fontWeight="bold" fontFamily="Impact, sans-serif">M</text>
          {/* Leaping Marlin */}
          <path d="M 25,25 Q 50,12 85,25 Q 65,30 55,48" fill="none" stroke="#EF3340" strokeWidth="4.5" strokeLinecap="round" />
        </g>
      );
    case "nationals_w": // Nationals Curly W
      return (
        <g transform="translate(10,10) scale(0.8)">
          <text x="50" y="74" fill="#AB0003" fontSize="68" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle" stroke="#142243" strokeWidth="4" paintOrder="stroke">W</text>
          <text x="50" y="74" fill="#AB0003" fontSize="68" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle">W</text>
        </g>
      );
    case "pirates_p": // Pirates P script
      return (
        <g transform="translate(15,10) scale(0.8)">
          <text x="50" y="78" fill="#FDB827" fontSize="72" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle" stroke="#000" strokeWidth="4" paintOrder="stroke">P</text>
          <text x="50" y="78" fill="#FDB827" fontSize="72" fontWeight="bold" fontFamily="serif" fontStyle="italic" textAnchor="middle">P</text>
        </g>
      );
    case "reds_c": // Reds C Wishbone
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 68,15 C 38,15 20,32 20,50 C 20,68 38,85 68,85 L 68,72 C 48,72 38,62 38,50 C 38,38 48,28 68,28 Z" fill="#C6011F" stroke="#000" strokeWidth="3" />
          <text x="52" y="55" fill="#000" fontSize="12" fontWeight="bold" fontFamily="monospace" textAnchor="middle">REDS</text>
        </g>
      );

    // ==========================================
    // Soccer, F1 & Combat (Global)
    // ==========================================
    case "cannon": // Arsenal Cannon inside Shield
      return (
        <g transform="translate(10,20) scale(0.8)">
          {/* Gold Cannon pointing right */}
          <rect x="25" y="16" width="48" height="12" rx="3" fill="#FFD700" stroke="#000" strokeWidth="2.5" />
          <circle cx="34" cy="32" r="10" fill="#063672" stroke="#000" strokeWidth="2" />
          <line x1="15" y1="22" x2="78" y2="22" stroke="#FFD700" strokeWidth="4" />
        </g>
      );
    case "chelsea_lion": // Chelsea Lion Rampant holding Crozier
      return (
        <g transform="translate(15,10) scale(0.8)">
          <path d="M 28,80 C 28,52 38,40 50,40 C 65,40 76,50 76,68 M 48,15 C 44,22 52,28 48,38 L 48,82" fill="none" stroke="#034694" strokeWidth="6.5" strokeLinecap="round" />
          {/* Gold crozier rod */}
          <line x1="58" y1="22" x2="58" y2="82" stroke="#EE242C" strokeWidth="3.5" />
          <circle cx="58" cy="22" r="4.5" fill="none" stroke="#EE242C" strokeWidth="2.5" />
        </g>
      );
    case "liverbird": // Liverpool Liver Bird
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Liver bird profile silhouette */}
          <path d="M 42,78 L 42,32 C 42,22 52,12 55,22 C 58,32 50,42 42,52 Z" fill="#C8102E" stroke="#00B2A9" strokeWidth="3" paintOrder="stroke" />
          <path d="M 42,78 L 42,32 C 42,22 52,12 55,22 C 58,32 50,42 42,52 Z" fill="#C8102E" />
          {/* Twin flame lines on sides */}
          <path d="M 18,52 L 18,36 M 82,52 L 82,36" stroke="#00B2A9" strokeWidth="3.5" strokeLinecap="round" />
        </g>
      );
    case "ship": // Man City Ship & Rose
      return (
        <g transform="translate(10,15) scale(0.8)">
          <path d="M 15,28 L 85,28 L 74,48 L 26,48 Z" fill="url(#n64-bevel)" stroke="#000" strokeWidth="2.5" />
          <line x1="50" y1="8" x2="50" y2="28" stroke="#ffffff" strokeWidth="3.5" />
          {/* Red rose at bottom */}
          <circle cx="50" cy="62" r="8" fill="#EE242C" stroke="#000" strokeWidth="1" />
        </g>
      );
    case "devil": // Man Utd Devil with pitchfork
      return (
        <g transform="translate(15,10) scale(0.8)">
          <polygon points="50,12 66,28 54,36 50,22 46,36 34,28" fill="#DA291C" stroke="#000" strokeWidth="1.5" />
          <line x1="50" y1="22" x2="50" y2="82" stroke="#FBE122" strokeWidth="4.5" strokeLinecap="round" />
          {/* Pitchfork forks */}
          <line x1="38" y1="34" x2="62" y2="34" stroke="#FBE122" strokeWidth="4" />
        </g>
      );
    case "cockerel": // Tottenham Cockerel on Football
      return (
        <g transform="translate(20,10) scale(0.8)">
          {/* Ball */}
          <circle cx="32" cy="74" r="14" fill="#ffffff" stroke="#132257" strokeWidth="3.5" />
          <line x1="22" y1="64" x2="42" y2="84" stroke="#132257" strokeWidth="2" />
          {/* Cockerel standing */}
          <path d="M 32,60 C 32,32 46,22 52,32 C 58,42 50,52 42,56" fill="none" stroke="#132257" strokeWidth="6.5" strokeLinecap="round" />
        </g>
      );
    case "realmadrid_crest": // Real Madrid Crown & sash
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="56" r="30" fill="#ffffff" stroke="#FEBE10" strokeWidth="4.5" />
          {/* Blue diagonal sash */}
          <line x1="28" y1="36" x2="72" y2="76" stroke="#034694" strokeWidth="8" />
          {/* Royal Crown on top */}
          <path d="M 24,24 L 30,8 L 42,16 L 50,4 L 58,16 L 70,8 L 76,24 Z" fill="#FEBE10" stroke="#000" strokeWidth="2.5" />
        </g>
      );
    case "barcelona_crest": // Barcelona Crest details
      return (
        <g transform="translate(10,10) scale(0.8)">
          {/* St George Cross left and Senyera right */}
          <rect x="15" y="15" width="35" height="30" fill="#ffffff" />
          <line x1="32" y1="15" x2="32" y2="45" stroke="#A50044" strokeWidth="5.5" />
          <line x1="15" y1="30" x2="50" y2="30" stroke="#A50044" strokeWidth="5.5" />
          {/* Blaugrana stripes at bottom */}
          <rect x="15" y="45" width="70" height="35" fill="#004D98" />
          <rect x="28" y="45" width="12" height="35" fill="#A50044" />
          <rect x="52" y="45" width="12" height="35" fill="#A50044" />
        </g>
      );
    case "diamonds": // Bayern Munich
      return (
        <g transform="translate(15,15) scale(0.75)">
          <circle cx="50" cy="50" r="42" fill="#DC052D" stroke="#ffffff" strokeWidth="4.5" />
          <circle cx="50" cy="50" r="32" fill="#0066B2" />
          {/* Diamond pattern */}
          <polygon points="34,34 50,18 66,34 50,50" fill="#ffffff" />
          <polygon points="50,50 66,34 82,50 66,66" fill="#ffffff" />
          <polygon points="18,50 34,34 50,50 34,66" fill="#ffffff" />
          <polygon points="34,66 50,50 66,66 50,82" fill="#ffffff" />
        </g>
      );
    case "tower": // PSG Eiffel Tower
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Blue circle */}
          <circle cx="50" cy="50" r="42" fill="#004170" stroke="#E30613" strokeWidth="4.5" />
          {/* Eiffel Tower profile */}
          <path d="M 28,82 L 44,28 L 50,10 L 56,28 L 72,82" fill="none" stroke="#E30613" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M 28,82 L 44,28 L 50,10 L 56,28 L 72,82" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
        </g>
      );
    case "rb": // Red Bull Charging Bulls
      return (
        <g transform="translate(5,15) scale(0.9)">
          <circle cx="50" cy="35" r="22" fill="#FFCC00" />
          {/* Head-to-head charging bulls */}
          <path d="M 12,38 C 22,25 45,35 48,42" fill="none" stroke="#0600EF" strokeWidth="6.5" strokeLinecap="round" />
          <path d="M 88,38 C 78,25 55,35 52,42" fill="none" stroke="#0600EF" strokeWidth="6.5" strokeLinecap="round" />
          <circle cx="32" cy="32" r="3" fill="#DA291C" />
          <circle cx="68" cy="32" r="3" fill="#DA291C" />
        </g>
      );
    case "horse_prancing": // Ferrari Prancing Horse
      return (
        <g transform="translate(15,10) scale(0.8)">
          {/* Yellow Shield */}
          <path d="M 15,10 L 85,10 L 80,65 Q 50,92 50,92 Q 50,92 20,65 Z" fill="#FFF200" stroke="#000000" strokeWidth="3.5" />
          {/* Black Prancing Horse profile */}
          <path d="M 45,68 Q 42,42 58,40 Q 64,28 56,18 Q 48,22 46,30 Q 32,32 45,68" fill="#000000" />
          {/* Tri-color Italian flag bar at top */}
          <rect x="22" y="12" width="18" height="4" fill="#009246" />
          <rect x="40" y="12" width="18" height="4" fill="#ffffff" />
          <rect x="58" y="12" width="18" height="4" fill="#ce2b37" />
        </g>
      );
    case "mercedes_star": // Mercedes Three-Pointed Star
      return (
        <g transform="translate(10,10) scale(0.8)">
          <circle cx="50" cy="50" r="42" fill="none" stroke="#C4CED4" strokeWidth="5.5" />
          {/* Three points */}
          <line x1="50" y1="50" x2="50" y2="14" stroke="#C4CED4" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="50" y1="50" x2="18" y2="68" stroke="#C4CED4" strokeWidth="5.5" strokeLinecap="round" />
          <line x1="50" y1="50" x2="82" y2="68" stroke="#C4CED4" strokeWidth="5.5" strokeLinecap="round" />
        </g>
      );

    // ==========================================
    // Original/Fallback & Rest of Cases
    // ==========================================
    case "star": // Fallback Star
      return (
        <g transform="translate(15,15) scale(0.7)">
          <polygon points="50,5 64,36 98,36 70,57 81,91 50,70 19,91 30,57 2,36 36,36" fill={color2} stroke="url(#n64-silver)" strokeWidth="3" />
          <polygon points="50,15 61,42 90,42 66,59 75,85 50,68 25,85 34,59 10,42 39,42" fill={color1} />
        </g>
      );
    case "stripes": // Fallback Stripes
      return (
        <g transform="translate(20,20) scale(0.6)">
          <rect x="10" y="10" width="80" height="80" fill={color1} stroke="#000" strokeWidth="4" />
          <rect x="25" y="10" width="12" height="80" fill={color2} />
          <rect x="50" y="10" width="12" height="80" fill={color2} />
          <rect x="75" y="10" width="12" height="80" fill={color2} />
        </g>
      );
    case "horn": // Fallback Horn
      return (
        <g transform="translate(20,20) scale(0.6)">
          <path d="M 10,35 Q 40,15 70,35 Q 90,55 70,75 Q 60,65 70,50 Q 50,35 10,35 Z" fill={color2} stroke="#000" strokeWidth="3" />
        </g>
      );
    case "c": // Fallback C
      return (
        <g transform="translate(25,20) scale(0.6)">
          <path d="M 70,25 C 40,25, 20,40, 20,60 C 20,80, 40,95, 70,95 L 70,80 C 50,80, 40,70, 40,60 C 40,50, 50,40, 70,40 Z" fill={color2} stroke="#000" strokeWidth="4" />
        </g>
      );
    case "shield": // Fallback Shield
      return (
        <g transform="translate(20,15) scale(0.6)">
          <path d="M 20,10 L 80,10 L 80,55 C 80,75, 50,90, 50,90 C 50,90, 20,75, 20,55 Z" fill={color2} stroke="#fff" strokeWidth="4" />
          <polygon points="50,22 55,35 70,35 58,45 62,60 50,50 38,60 42,45 30,35 45,35" fill={color1} />
        </g>
      );
    case "horse": // Fallback Horse
      return (
        <g transform="translate(20,20) scale(0.6)">
          <path d="M 15,70 Q 20,25 60,35 Q 85,42 80,65 Q 65,58 50,60 L 40,75 Z" fill="#ffffff" stroke="#000" strokeWidth="3" />
          <path d="M 30,38 Q 45,28 60,35" stroke={color2} strokeWidth="3" fill="none" />
        </g>
      );
    case "w": // Fallback W
      return (
        <g transform="translate(15,15) scale(0.7)">
          <text x="50" y="68" fill={color1} fontSize="54" fontWeight="900" fontFamily="Impact, sans-serif" textAnchor="middle" stroke={color2} strokeWidth="3" paintOrder="stroke">W</text>
        </g>
      );
    case "crown": // Fallback Crown
      return (
        <g transform="translate(15,15) scale(0.7)">
          <path d="M 10,75 L 15,35 L 35,55 L 50,25 L 65,55 L 85,35 L 90,75 Z" fill="url(#n64-bevel)" stroke="#000" strokeWidth="3" />
          <circle cx="50" cy="62" r="6" fill={color1} />
        </g>
      );
    case "lion": // Fallback Lion
      return (
        <g transform="translate(20,20) scale(0.6)">
          <path d="M 25,80 C 25,60, 35,45, 50,45 C 65,45, 75,55, 75,70 M 50,20 C 45,28, 55,35, 50,45" fill="none" stroke={color2} strokeWidth="6" strokeLinecap="round" />
          <path d="M 25,80 L 15,85 L 20,70" stroke={color2} strokeWidth="4" fill="none" />
        </g>
      );
    case "bird": // Fallback Bird
      return (
        <g transform="translate(20,20) scale(0.6)">
          <path d="M 15,50 Q 25,15 65,30 Q 85,38 85,55 Q 70,68 15,50 Z" fill={color1} stroke="#000" strokeWidth="3" />
          <polygon points="75,45 88,52 75,60" fill={color2} />
        </g>
      );
    case "09": // Dortmund 09
      return (
        <g transform="translate(15,15) scale(0.7)">
          <circle cx="50" cy="50" r="32" fill={color1} stroke="#000" strokeWidth="3" />
          <text x="50" y="58" fill={color2} fontSize="24" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">09</text>
        </g>
      );
    case "j": // Juventus
      return (
        <g transform="translate(25,15) scale(0.6)">
          <path d="M 20,15 L 45,15 L 45,55 C 45,75 20,75 20,55" fill="none" stroke={color1} strokeWidth="12" strokeLinecap="round" />
        </g>
      );
    case "im": // Inter Milan
      return (
        <g transform="translate(15,15) scale(0.7)">
          <circle cx="50" cy="50" r="32" fill="none" stroke={color2} strokeWidth="4" />
          <text x="50" y="58" fill={color1} fontSize="28" fontWeight="900" fontFamily="serif" textAnchor="middle">IM</text>
        </g>
      );
    case "ajax": // Ajax
      return (
        <g transform="translate(20,20) scale(0.6)">
          <circle cx="50" cy="50" r="38" fill="none" stroke={color2} strokeWidth="4" />
          <path d="M 25,35 Q 50,15 75,35 M 30,55 Q 50,75 70,55" fill="none" stroke={color2} strokeWidth="4" />
        </g>
      );
    case "dragon": // Porto
      return (
        <g transform="translate(20,20) scale(0.6)">
          <path d="M 15,45 Q 35,15 65,30 Q 85,45 75,75" fill="none" stroke={color2} strokeWidth="6" strokeLinecap="round" />
        </g>
      );
    case "diagonal": // River Plate
      return (
        <g transform="translate(10,10) scale(0.8)">
          <line x1="10" y1="10" x2="90" y2="90" stroke={color2} strokeWidth="12" />
        </g>
      );
    case "initials":
    default:
      return (
        <g transform="translate(0, 0)">
          <rect x="22" y="36" width="56" height="28" fill="#000000" opacity="0.8" rx="3" stroke="url(#n64-silver)" strokeWidth="2" />
          <text x="50" y="56" fill="#ffffff" fontSize="16" fontWeight="bold" fontFamily="monospace" textAnchor="middle" style={{ textShadow: "2px 2px 0px #000" }}>
            {initials}
          </text>
        </g>
      );
  }
};

export const N64TeamLogo: React.FC<N64Props> = ({ teamName, sport, size = 36, className = "" }) => {
  const normName = normalizeTeamName(teamName);
  const isBaseball = sport === "baseball" || sport === "mlb";

  let teamKey: string | undefined;
  if (normName.includes("giants")) {
    const hasSf = normName.includes("sf") || normName.includes("sanfrancisco");
    const hasNy = normName.includes("ny") || normName.includes("newyork");
    if (hasSf) {
      teamKey = "giants_mlb";
    } else if (hasNy) {
      teamKey = "giants";
    } else {
      teamKey = isBaseball ? "giants_mlb" : "giants";
    }
  } else if (normName.includes("cardinals")) {
    const hasStl = normName.includes("stl") || normName.includes("stlouis");
    const hasAri = normName.includes("ari") || normName.includes("arizona");
    if (hasStl) {
      teamKey = "cardinals_mlb";
    } else if (hasAri) {
      teamKey = "cardinals";
    } else {
      teamKey = isBaseball ? "cardinals_mlb" : "cardinals";
    }
  } else {
    // Exact or fuzzy prefix/suffix match
    teamKey = Object.keys(teamRegistry).find(
      k => k === normName || normName.includes(k) || k.includes(normName)
    );
  }

  let team = teamKey ? teamRegistry[teamKey] : null;

  // Fallback if not registered
  const fallbackColors = getDynamicTeamColors(teamName);
  const color1 = team ? team.color1 : fallbackColors.color1;
  const color2 = team ? team.color2 : fallbackColors.color2;
  const initials = team ? team.initials : getTeamInitials(teamName);
  const shape = team ? team.shape : (sport === "american-football" || sport === "nfl" ? "helmet" : sport === "basketball" ? "basketball" : sport === "baseball" ? "baseball" : "crest");
  const symbol = team ? team.symbol : "initials";

  const renderBadgeContent = () => {
    switch (shape) {
      case "helmet":
        return (
          <g>
            {/* Low-Poly Helmet Outline Shield */}
            <path d="M 10 30 L 50 5 L 90 30 L 90 70 L 50 95 L 10 70 Z" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            <path d="M 14 32 L 50 9 L 86 32 L 86 68 L 50 91 L 14 68 Z" fill="none" stroke="#000000" strokeWidth="2" />
            
            {/* Helmet Visor & Mask */}
            <path d="M 50 30 C 70 30, 80 40, 80 55 L 65 55 C 65 50, 60 45, 50 45 Z" fill={color2} stroke="#000000" strokeWidth="2" />
            <path d="M 68 55 L 82 55 L 75 75 L 55 75 C 58 70, 65 65, 68 55 Z" fill="none" stroke="url(#n64-silver)" strokeWidth="4" />
            <line x1="68" y1="55" x2="58" y2="75" stroke="#000000" strokeWidth="2" />
            <line x1="75" y1="55" x2="75" y2="75" stroke="#000000" strokeWidth="2" />
            
            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "basketball":
        return (
          <g>
            {/* Circular basketball shield with beveled gold rim */}
            <circle cx="50" cy="50" r="44" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            <circle cx="50" cy="50" r="40" fill="none" stroke="#000000" strokeWidth="2" />
            
            {/* Basketball Seams */}
            <path d="M 15 50 Q 50 20 85 50" fill="none" stroke={color2} strokeWidth="3" />
            <path d="M 15 50 Q 50 80 85 50" fill="none" stroke={color2} strokeWidth="3" />
            <line x1="50" y1="10" x2="50" y2="90" stroke={color2} strokeWidth="3" />
            <line x1="10" y1="50" x2="90" y2="50" stroke={color2} strokeWidth="3" />

            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "baseball":
        return (
          <g>
            {/* Diamond baseball badge */}
            <path d="M 50 6 L 94 50 L 50 94 L 6 50 Z" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            <path d="M 50 10 L 90 50 L 50 90 L 10 50 Z" fill="none" stroke="#000000" strokeWidth="2" />
            
            {/* Red Stitches */}
            <path d="M 25 25 Q 50 45 75 25" fill="none" stroke="#ff0000" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 25 75 Q 50 55 75 75" fill="none" stroke="#ff0000" strokeWidth="2" strokeDasharray="3,3" />

            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "f1":
        return (
          <g>
            {/* F1 hexagon badge with checkered flag backing */}
            <path d="M 25 10 L 75 10 L 95 50 L 75 90 L 25 90 L 5 50 Z" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            
            {/* Checkered board details inside */}
            <path d="M 35 30 L 65 30 L 65 70 L 35 70 Z" fill={color2} opacity="0.3" />
            <path d="M 35 30 L 50 30 L 50 50 L 35 50 Z" fill="#000000" opacity="0.4" />
            <path d="M 50 50 L 65 50 L 65 70 L 50 70 Z" fill="#000000" opacity="0.4" />
            
            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "combat": // UFC style
        return (
          <g>
            {/* Octagon cage border */}
            <polygon points="30,5 70,5 95,30 95,70 70,95 30,95 5,70 5,30" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            
            {/* Inner chain link grid style lines */}
            <line x1="20" y1="20" x2="80" y2="80" stroke="#00" strokeWidth="1" opacity="0.3" />
            <line x1="80" y1="20" x2="20" y2="80" stroke="#00" strokeWidth="1" opacity="0.3" />
            <line x1="50" y1="5" x2="50" y2="95" stroke="#00" strokeWidth="1" opacity="0.3" />
            
            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "wrestling": // WWE / AEW style
        return (
          <g>
            {/* Golden Belt Strap outline */}
            <rect x="5" y="32" width="90" height="36" fill="#111" stroke="#333" strokeWidth="2" rx="4" />
            <line x1="5" y1="50" x2="95" y2="50" stroke="#ffcc00" strokeWidth="1" strokeDasharray="3,3" />

            {/* Central Gold Plate */}
            <polygon points="50,15 78,35 68,85 32,85 22,35" fill="url(#n64-bevel)" stroke="#000000" strokeWidth="3" />
            <polygon points="50,22 72,38 64,78 36,78 28,38" fill={color1} />

            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );

      case "crest":
      default:
        return (
          <g>
            {/* Classic 3D shield crest badge */}
            <path d="M 15 10 L 85 10 L 85 55 C 85 75, 50 95, 50 95 C 50 95, 15 75, 15 55 Z" fill={color1} stroke="url(#n64-bevel)" strokeWidth="6" />
            <path d="M 19 14 L 81 14 L 81 53 C 81 71, 50 89, 50 89 C 50 89, 19 71, 19 53 Z" fill="none" stroke="#000000" strokeWidth="2" />
            
            {/* Crest Pattern based on symbols */}
            {symbol === "stripes" || symbol === "diagonal" ? (
              <path d="M 19 14 L 50 14 L 19 70 Z" fill={color2} />
            ) : symbol === "star" ? (
              <polygon points="50,25 57,40 72,40 60,50 65,65 50,55 35,65 40,50 28,40 43,40" fill={color2} stroke="#00" strokeWidth="1" />
            ) : (
              <rect x="42" y="14" width="16" height="50" fill={color2} opacity="0.4" />
            )}

            {/* Custom Logo/Initials Symbol */}
            {renderLogoSymbol(symbol, color1, color2, initials)}
          </g>
        );
    }
  };

  return (
    <div className={`n64-badge-wrapper ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        {renderBadgeContent()}
        {/* Retro CRT Scanlines Overlay */}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#n64-scanlines)" pointerEvents="none" opacity="0.15" />
      </svg>
    </div>
  );
};

// N64 Retro Sport Category Icon Component
export const N64SportIcon: React.FC<N64SportProps> = ({ sport, size = 24, className = "" }) => {
  const lowerSport = sport?.toLowerCase() || "";

  const renderIconContent = () => {
    switch (lowerSport) {
      case "all":
        return (
          <g>
            {/* Retro Golden Trophy / Star */}
            <polygon points="50,8 62,35 90,35 68,52 76,80 50,62 24,80 32,52 10,35 38,35" fill="url(#n64-bevel)" stroke="#000000" strokeWidth="4" />
            <circle cx="50" cy="45" r="10" fill="#ffffff" opacity="0.4" />
          </g>
        );
      case "baseball":
        return (
          <g>
            {/* Turf diamond backdrop */}
            <polygon points="50,10 90,50 50,90 10,50" fill="#138513" stroke="url(#n64-bevel)" strokeWidth="4" />
            {/* Crossed bats */}
            <line x1="20" y1="80" x2="80" y2="20" stroke="#8b5a2b" strokeWidth="6" strokeLinecap="round" />
            <line x1="20" y1="20" x2="80" y2="80" stroke="#8b5a2b" strokeWidth="6" strokeLinecap="round" />
            {/* Baseball */}
            <circle cx="50" cy="50" r="18" fill="#ffffff" stroke="#000000" strokeWidth="3" />
            <path d="M 38 42 Q 50 50 62 42" fill="none" stroke="#ff0000" strokeWidth="1.5" />
            <path d="M 38 58 Q 50 50 62 58" fill="none" stroke="#ff0000" strokeWidth="1.5" />
          </g>
        );
      case "basketball":
        return (
          <g>
            {/* Backboard */}
            <rect x="15" y="10" width="70" height="48" fill="#ffffff" stroke="#000000" strokeWidth="4" />
            <rect x="33" y="24" width="34" height="24" fill="none" stroke="#ff0000" strokeWidth="3" />
            {/* Rim & Net */}
            <ellipse cx="50" cy="58" rx="20" ry="6" fill="none" stroke="#ff4500" strokeWidth="4" />
            <path d="M 32 60 L 40 85 L 60 85 L 68 60" fill="none" stroke="#dcdcdc" strokeWidth="2" strokeDasharray="3,3" />
            {/* Ball bouncing in */}
            <circle cx="50" cy="36" r="14" fill="#ff8c00" stroke="#000000" strokeWidth="2" />
            <path d="M 40 36 C 45 42, 55 42, 60 36" fill="none" stroke="#000000" strokeWidth="1.5" />
          </g>
        );
      case "soccer":
      case "football":
        return (
          <g>
            {/* Soccer Ball */}
            <circle cx="50" cy="50" r="42" fill="#ffffff" stroke="#000000" strokeWidth="4" />
            {/* Retro pentagon shapes */}
            <polygon points="50,34 62,43 57,56 43,56 38,43" fill="#000000" />
            <polygon points="50,34 38,43 24,38 24,24 38,18" fill="#000000" opacity="0.8" />
            <polygon points="62,43 50,34 50,15 68,18 76,24" fill="#000000" opacity="0.8" />
            <polygon points="57,56 62,43 76,50 76,68 62,72" fill="#000000" opacity="0.8" />
            <polygon points="43,56 57,56 50,75 35,72 32,60" fill="#000000" opacity="0.8" />
            <polygon points="38,43 43,56 24,64 15,50 20,38" fill="#000000" opacity="0.8" />
          </g>
        );
      case "american-football":
      case "nfl":
        return (
          <g>
            {/* Goalposts in background */}
            <path d="M 25 15 L 25 50 L 75 50 L 75 15 M 50 50 L 50 85" fill="none" stroke="#ffd700" strokeWidth="6" strokeLinecap="round" />
            {/* Football */}
            <g transform="rotate(-15 50 50)">
              <path d="M 20 50 C 35 25, 65 25, 80 50 C 65 75, 35 75, 20 50 Z" fill="#8b4513" stroke="#000000" strokeWidth="3" />
              {/* Laces */}
              <line x1="32" y1="50" x2="68" y2="50" stroke="#ffffff" strokeWidth="3" />
              <line x1="40" y1="44" x2="40" y2="56" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="50" y1="44" x2="50" y2="56" stroke="#ffffff" strokeWidth="2.5" />
              <line x1="60" y1="44" x2="60" y2="56" stroke="#ffffff" strokeWidth="2.5" />
              {/* White stripes on ends */}
              <path d="M 28 40 C 30 45, 30 55, 28 60" fill="none" stroke="#ffffff" strokeWidth="3" />
              <path d="M 72 40 C 70 45, 70 55, 72 60" fill="none" stroke="#ffffff" strokeWidth="3" />
            </g>
          </g>
        );
      case "fight":
      case "ufc":
      case "wwe":
      case "aew":
        return (
          <g>
            {/* Championship gold belt backplate */}
            <rect x="5" y="36" width="90" height="28" fill="#222" rx="4" stroke="#00" strokeWidth="2" />
            <polygon points="50,15 78,35 68,85 32,85 22,35" fill="url(#n64-bevel)" stroke="#000000" strokeWidth="3" />
            
            {/* Crossed combat gloves */}
            <rect x="36" y="44" width="12" height="18" fill="#ff0000" rx="3" stroke="#00" strokeWidth="2" transform="rotate(-20 42 53)" />
            <rect x="52" y="44" width="12" height="18" fill="#ff0000" rx="3" stroke="#00" strokeWidth="2" transform="rotate(20 58 53)" />
          </g>
        );
      case "motor-sports":
      case "f1":
        return (
          <g>
            {/* Checkered background */}
            <rect x="10" y="10" width="80" height="80" fill="#ffffff" stroke="url(#n64-bevel)" strokeWidth="4" />
            <path d="M 10 10 L 50 10 L 50 50 L 10 50 Z" fill="#000000" />
            <path d="M 50 50 L 90 50 L 90 90 L 50 90 Z" fill="#000000" />
            
            {/* Race car profile */}
            <path d="M 20 70 L 30 65 L 50 65 L 70 70 L 80 62 L 75 58 L 65 58 L 55 52 L 40 52 L 30 58 L 22 58 Z" fill="#e30613" stroke="#00" strokeWidth="2" />
            <circle cx="32" cy="70" r="10" fill="#111" stroke="#fff" strokeWidth="2" />
            <circle cx="68" cy="70" r="10" fill="#111" stroke="#fff" strokeWidth="2" />
          </g>
        );
      case "hockey":
        return (
          <g>
            {/* Crossed sticks */}
            <line x1="20" y1="80" x2="70" y2="20" stroke="#dcdcdc" strokeWidth="5" strokeLinecap="round" />
            <line x1="20" y1="80" x2="10" y2="82" stroke="#dcdcdc" strokeWidth="5" strokeLinecap="round" />
            <line x1="80" y1="80" x2="30" y2="20" stroke="#dcdcdc" strokeWidth="5" strokeLinecap="round" />
            <line x1="80" y1="80" x2="90" y2="82" stroke="#dcdcdc" strokeWidth="5" strokeLinecap="round" />
            {/* Puck */}
            <ellipse cx="50" cy="65" rx="18" ry="8" fill="#111111" stroke="#ffffff" strokeWidth="2" />
            <ellipse cx="50" cy="69" rx="18" ry="4" fill="#000000" />
          </g>
        );
      case "tennis":
        return (
          <g>
            {/* Racket */}
            <circle cx="42" cy="38" r="24" fill="none" stroke="url(#n64-silver)" strokeWidth="4" />
            {/* Strings */}
            <line x1="28" y1="38" x2="56" y2="38" stroke="#ccc" strokeWidth="1" />
            <line x1="42" y1="24" x2="42" y2="52" stroke="#ccc" strokeWidth="1" />
            <line x1="56" y1="52" x2="76" y2="72" stroke="#8b5a2b" strokeWidth="5" />
            {/* Tennis Ball */}
            <circle cx="65" cy="35" r="12" fill="#ccff00" stroke="#00" strokeWidth="2" />
            <path d="M 57 31 Q 65 35 73 31" fill="none" stroke="#fff" strokeWidth="1.5" />
            <path d="M 57 39 Q 65 35 73 39" fill="none" stroke="#fff" strokeWidth="1.5" />
          </g>
        );
      case "golf":
        return (
          <g>
            <circle cx="50" cy="50" r="44" fill="#3cb371" stroke="#000000" strokeWidth="3" />
            {/* Golf flag/tee */}
            <line x1="50" y1="20" x2="50" y2="80" stroke="#ffffff" strokeWidth="3" />
            <polygon points="50,20 75,32 50,44" fill="#e30613" />
            {/* Ball */}
            <circle cx="65" cy="72" r="8" fill="#ffffff" stroke="#00" strokeWidth="1.5" />
          </g>
        );
      case "cricket":
        return (
          <g>
            {/* Wickets */}
            <line x1="38" y1="30" x2="38" y2="80" stroke="#ffd700" strokeWidth="3" />
            <line x1="50" y1="30" x2="50" y2="80" stroke="#ffd700" strokeWidth="3" />
            <line x1="62" y1="30" x2="62" y2="80" stroke="#ffd700" strokeWidth="3" />
            <line x1="34" y1="30" x2="66" y2="30" stroke="#ffd700" strokeWidth="4" />
            {/* Crossed Bat */}
            <line x1="25" y1="75" x2="75" y2="25" stroke="#8b5a2b" strokeWidth="5" strokeLinecap="round" />
            {/* Ball */}
            <circle cx="65" cy="65" r="10" fill="#e30613" stroke="#00" strokeWidth="2" />
          </g>
        );
      default:
        return (
          <g>
            {/* Default retro star / badge */}
            <polygon points="50,12 63,38 90,38 68,54 77,80 50,64 23,80 32,54 10,38 37,38" fill="url(#n64-bevel)" stroke="#00" strokeWidth="3" />
            <circle cx="50" cy="50" r="12" fill="#ffffff" opacity="0.3" />
          </g>
        );
    }
  };

  return (
    <div className={`n64-badge-wrapper ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 100 100" width="100%" height="100%">
        {renderIconContent()}
        <rect x="0" y="0" width="100%" height="100%" fill="url(#n64-scanlines)" pointerEvents="none" opacity="0.1" />
      </svg>
    </div>
  );
};

// Centralized Matchup Card Divider badge: dual team logo & central VS badge
export const N64MatchupBadge: React.FC<N64MatchupProps> = ({ team1, team2, sport, size = 48, className = "" }) => {
  return (
    <div className={`n64-matchup-container ${className}`}>
      <N64TeamLogo teamName={team1} sport={sport} size={size} />
      <span className="n64-vs-badge">VS</span>
      <N64TeamLogo teamName={team2} sport={sport} size={size} />
    </div>
  );
};
