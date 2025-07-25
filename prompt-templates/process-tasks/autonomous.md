---
description:
globs:
alwaysApply: false
---

# Process a Task List Autonomously

Guidelines for an AI agent processing a task list autonomously without human oversight.

## Core Execution Principles

- **Full autonomy** - Complete ALL tasks without stopping for human input
- **Decide and proceed** - Make your best judgment calls without asking for confirmation
- **Error resilience** - Work around problems and continue when possible

## Execution Approach

1. **Task order is a suggestion** - Default to task list order, but be flexible if needed
2. **Complete what you can** - If truly blocked, move to next task
3. **Summarize at the end** - You are working autonomously, leave ticking markdown boxes and reporting until after you have completed or attempted all tasks

## Error Handling

- **Build errors**: Try 2-3 different approaches before moving on
- **Test failures**: Attempt reasonable fixes but don't over-invest
- **Missing dependencies**: Work around or mock if possible
- **Ambiguous requirements**: You choose the simplest reasonable interpretation
- **Technical debt**: Work with it, not against it, don't bike shed

## Reporting

Only after attempting all tasks, tick the markdown boxes and append a brief report in one pass.

Use `[x]` for a completed task, `[s]` for a skipped task, `[b]` for a blocked task, and leave `[ ]` for a mixed parent task.

No need to update "Relevant Files" as the user can see git diffs.

**Edit file:** `tasks/tasks-prd-[feature-name].md`

[[TEMPLATE]]

# [Feature/Fix] - Tasks

[...]

## Tasks

- [x] 1.0 [Task]
  - [x] 1.1 [Subtask]
  - [x] 1.2 [Subtask]
- [ ] 2.0 [Task]
  - [x] 2.1 [Subtask]
  - [b] 2.2 [Subtask]
  - [s] 2.3 [Subtask]
  - [x] 2.4 [Subtask]

[...]

## Task Execution Summary

(A few sentences summarizing any unexpected issues, workarounds. Be sure to mention the `[b]` blocked or `[s]` skipped tasks here.)

[[/TEMPLATE]]

## Key Reminders

- You're working autonomously - make decisions and move forward
- Every approach teaches us something, even if it needs revision
- Focus on delivering working code over perfect architecture
- Trust your judgment - you can always explain your reasoning in the summary
- Code with confidence - your changes will be reviewed before being merged into the main branch
