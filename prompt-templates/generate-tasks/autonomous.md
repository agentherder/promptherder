---
description:
globs:
alwaysApply: false
---

# Generate a Task List from a PRD for Autonomous AI Execution

## Goal

To guide an AI agent in generating a detailed task list from a product requirements document (PRD). The task list should support autonomous AI execution where each parent task represents a logical unit of work and each sub-task is a specific, verifiable action.

## Process

1. **Receive PRD Reference:** The user provides a reference to a specific PRD file.
2. **Analyze PRD:** Read and understand whether this is a user-facing feature or technical improvement.
3. **Phase 1: Generate Parent Tasks:**
   - Create 3-5 logical parent tasks
   - Each parent task should be a self-contained unit of work
   - Present these WITHOUT sub-tasks yet
   - Say: "I've generated the high-level tasks based on the PRD. These are designed for autonomous execution. Ready to break these down into specific sub-tasks? Respond with 'Go' to proceed."
4. **Wait for "Go"**
5. **Phase 2: Generate Sub-Tasks:**
   - Break each parent into 3-5 sub-tasks
   - Each sub-task must be independently verifiable
6. **Identify Files:** List likely files to be created/modified, including test files
7. **Save Task List:** Save to `/tasks/tasks-prd-[feature-name].md`

## Task Structure Guidelines

### Parent Tasks (Logical units):

- Self-contained units of related work
- Logical progression from setup → implementation → polish
- Named clearly, e.g., "Set up data model for user preferences"
- Include a final general documentation parent task when relevant (for example, updating repo README.md)

### Sub-Tasks (Atomic actions):

- Specific, verifiable actions
- Each one must have clear completion criteria
- Include all context needed for autonomous execution
- Include explicit test-writing tasks when source code is added or changed
- When relevant, include a local file documentation sub-task (but leave higher level documentation changes to the final parent documentation task)
  Example progression:
  - x.1: Create/modify the main component or function
  - x.2: Handle edge cases or additional logic
  - x.3: Write comprehensive tests
  - x.4: Update local file JSDocs

## New Folder and File Structure

- Use lowercase for new folder and file names with kebab-case: `path/to/feature/component.tsx`
- Co-locate new tests with their source files: `path/to/feature/component.test.tsx`

## Task List Structure

[[EXAMPLE]]

# [Feature/Fix] - Tasks

See PRD for details: [`tasks/prd-[feature-name].md`](./prd-[feature-name].md)

## Relevant Files

- `path/to/feature/component.tsx` - New component for X functionality
- `path/to/feature/component.test.tsx` - Tests for Component
- `api/routes/new-endpoint.ts` - API endpoint for handling Y
- `api/routes/new-endpoint.test.ts` - Tests for API endpoint
- `lib/utils/helper.ts` - Shared utility function (if needed)
- `lib/utils/helper.test.ts` - Tests for utility function

## Tasks

- [ ] 1.0 Set up data model and types
  - [ ] 1.1 Create TypeScript interfaces for [feature]
  - [ ] 1.2 Set up database schema or data structure
  - [ ] 1.3 Write tests for data model validation
  - [ ] 1.4 Update local file JSDocs
- [ ] 2.0 Implement core [feature] logic
  - [ ] 2.1 Create main function/component with happy path
  - [ ] 2.2 Add error handling and edge cases
  - [ ] 2.3 Write comprehensive tests for core logic
  - [ ] 2.4 Update local file JSDocs
- [ ] 3.0 Connect UI to functionality
  - [ ] 3.1 Build UI component with basic interactivity
  - [ ] 3.2 Wire up state management and API calls
  - [ ] 3.3 Add loading and error states
  - [ ] 3.4 Write tests for UI component and interactions
  - [ ] 3.5 Update local file JSDocs

[Continue pattern...]

- [ ] 5.0 Update general repo documentation
  - [ ] 5.1 Add new feature/fix section to README.md
  - [ ] 5.2 Update existing sections in README.md for coherence
  - [ ] 5.3 Search for subfolder README.md files that may be relevant

[[/EXAMPLE]]

## Output

- **Format:** Markdown
- **Folder:** `tasks/`
- **Filename:** `tasks-prd-[feature-name].md`

## Final Instructions

1. Do NOT start implementing the Task List
2. Make sure to review the parent tasks BEFORE generating sub-tasks
3. If parent tasks are changed, ask for a confirmation "Go" AGAIN before generating sub-tasks
