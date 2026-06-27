# Custom Agent Rules: The Living Index Architecture

## 1. Core Workflow Topology (PLAN -> CONTRACT -> CODE -> VERIFY)
Always follow this workflow for executing any task:
1. **Orchestrate & Plan**: Decompose the goal into independent domain tasks.
2. **Contract First**: Define and commit API schemas (OpenAPI, Protobufs, or TypeScript interfaces) before implementation.
3. **Parallel Execution**: Spawn specialized coding subagents for each repository or worktree.
4. **Independent Review**: Utilize an Advisor/Reviewer subagent to audit code changes against the contracts.

## 2. The Living Index (HTML Documentation as Cognitive Map)
- **HTML documentation is the single source of truth** and the navigation index for the orchestrator.
- Every microservice, module, database schema, and pipeline must be documented in a central HTML repository.
- **Hyperlinked Assets**: The HTML index must use relative or domain-level hyperlinks referencing the exact implementation files, unit/integration tests, and Grafana/Prometheus dashboard routes.
- **Continuous Documentation**: Any change to code, APIs, or infrastructure must immediately update the corresponding HTML documentation. A task is not complete until its map entry is fully updated.

## 3. Recursive Subagent Spawning & Worktree Management
- **Worktree Isolation**: When working across multiple repositories, utilize Git worktrees (`git worktree add`) to isolate the environment for each subagent. Parallel agents must never write to the same branch workspace.
- **Hierarchical Fan-Out**:
  - The Root Agent acts as the **Architect/Orchestrator**. It maintains the system map, defines interfaces, and merges subproject changes.
  - Spawn child subagents recursively by domain, microservice, or infrastructure layer (e.g., `Backend-Auth`, `Frontend-UI`, `Helm-Deploy`).
  - **Recursion Depth Limit**: Limit recursion to a maximum depth of 3 levels to prevent stack loops. If a task requires greater depth, the architect must refactor the plan to be flatter.
- **Inter-Agent Communication**: Use `irc` to coordinate changes, broadcast interface updates, and resolve blockages dynamically between siblings.

## 4. Test-Driven Development (TDD)
- **Zero-Code Tests**: Write fail-cases (unit/integration tests) first. Verify the tests fail on the target container/environment before writing implementation.
- **Containerized Verification**: All microservices must be tested inside their respective container environments (Docker/Kubernetes). Verification claims must be grounded in test runner outputs within the container.
- **No Test Suppressions**: Never bypass, mock out, or delete failing tests to satisfy a goal.

## 5. Deployment & Infrastructure Cohesion
- **Helm & CSP Configuration**: Any microservice addition or environment modification requires corresponding updates to Helm charts, Dockerfiles, and cloud infrastructure code.
- **Metric Instrumentation**: Implement Prometheus metrics or database logging for all new operations to prepare them for /goal or /autoresearch targeting.
