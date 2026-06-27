# Custom Agent Rules

## Core Workflow Constraint
Always follow this workflow for executing any task:
**PLAN + ORCHESTRATE -> CODE WITH AN ADVISOR**

- Use distinct subagents to handle each stage of this process:
  1. **Planning & Orchestration Subagent**: To research, establish a plan, and orchestrate the tasks.
  2. **Coding Subagent**: To perform the file writes and edits.
  3. **Advisor/Reviewer Subagent**: To review the planned and written code, ensuring correctness and adherence to guidelines.

## Development Guidelines
- **Always utilize TDD (Test-Driven Development)**: Write unit and integration tests before or alongside implementation, and verify code behavior through automated testing continuously.
- **Recursive Subagent Spawning**: Spawn subagents recursively as needed to split up complex tasks and run operations in parallel.

## Documentation Guideline
- **HTML Format**: Always generate and format documentation in HTML with descriptive hyperlinks referencing code paths, test files, and external references for each microservice.
