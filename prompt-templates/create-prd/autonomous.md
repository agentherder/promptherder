---
description:
globs:
alwaysApply: false
---

# Create a PRD for Autonomous AI Execution

## Goal

To guide an AI agent in creating a concise, actionable product requirements document (PRD) for AI development. The PRD will be executed by another AI agent without human oversight in an isolated containerized environment. Final proposed changes will be reviewed by a human BEFORE being converted to a git pull request and merged into the codebase. The PRD should embrace rapid iteration and work within existing technical constraints.

## Process

1. **Receive Initial Prompt:** The user provides a brief description of a feature or technical improvement.
2. **Ask Clarifying Questions WITH Suggested Answers:** The AI must ask questions and provide suggested answers based on the context. This allows the user to quickly confirm or correct assumptions. Focus on removing ALL ambiguity since agents will work autonomously.
3. **Generate PRD:** Create a focused PRD optimized for autonomous AI execution.
4. **Save PRD:** Save as `tasks/prd-[feature-name].md`

## Clarifying Questions

Ask 6-8 questions with suggested answers.

[[TEMPLATE]]

1. **[Category]**

   - Question: [Your question]
   - Suggested: [Your assumption based on context]

2. **[Category]**

   - Question: [Your question]
   - Suggested: [Your assumption based on context]

[...]

[[/TEMPLATE]]

### Example Clarifying Questions for User-Facing Features

[[EXAMPLE]]

1. **Core Feature**

   - Question: What's the main thing this feature needs to do?
   - Suggested: [Based on prompt, describe the MVP functionality]

2. **User/Dogfooding Focus**

   - Question: Who will use this first?
   - Suggested: Internal team for dogfooding, then early adopters

3. **Technical Constraints**

   - Question: Any known technical landmines to avoid?
   - Suggested: [Note any obvious legacy code areas mentioned]

4. **Exact Scope**

   - Question: What exactly should be built? Any edge cases to handle?
   - Suggested: [List specific features and edge cases]

5. **Out of Scope**

   - Question: What is out of scope for this feature?
   - Suggested: [List specific features and edge cases]

6. **Error Handling**

   - Question: How should the agent handle errors or ambiguous situations?
   - Suggested: Implement graceful fallbacks, log errors, continue with next task

7. **Testing Requirements**

   - Question: What level of test coverage is needed?
   - Suggested: Comprehensive unit tests for all new code, integration tests for API endpoints

[[/EXAMPLE]]

### Example Clarifying Questions for Technical/DX Improvements

[[EXAMPLE]]

1. **Type of Work**

   - Question: Is this user-facing or technical (refactor/tooling/DX/performance)?
   - Suggested: [Identify from context - technical improvement]

2. **Current Pain Point**

   - Question: What's the specific problem this solves?
   - Suggested: [e.g., "Build times are 10+ minutes" or "Tests are flaky"]

3. **Developer Impact**

   - Question: How will this improve the developer experience?
   - Suggested: [e.g., "Faster iteration cycles" or "More reliable deploys"]

4. **Risk/Reward**

   - Question: What might break and why is it worth it?
   - Suggested: [e.g., "May cause 2 hours downtime but saves 30 min/day per developer"]

5. **Exact Scope** [...]
6. **Out of Scope** [...]
7. **Error Handling** [...]
8. **Testing Requirements** [...]

[[/EXAMPLE]]

## PRD Structure

### For User-Facing Features

If the feature is user-facing, the generated PRD should include the following sections:

1. **Overview** (2-3 sentences)

   - What we're building and why
   - Target: dogfooding, then early adopters

2. **Requirements** (Numbered list)

   - List only what's needed to ship
   - Be explicit and actionable
   - Specify exact behavior for edge cases

3. **Non-Goals / Out of Scope**

   - Critical for autonomous agents
   - List what this feature will NOT do
   - Include "No refactoring unless blocking"

4. **Technical Context**

   - Exact files/modules to modify
   - Required design patterns
   - API contracts (if applicable)
   - Database schema changes (if applicable)

5. **Error Handling**

   - How to handle missing dependencies
   - Fallback approaches for technical blockers
   - When to log and continue vs. stop

6. **Success Criteria**

   - All unit tests pass
   - All integration tests pass
   - Specific performance metrics met
   - No linting errors
   - Code coverage > X%

### For Technical Improvements:

1. **Overview**

   - Current problem and impact
   - Desired end state

2. **Technical Requirements**

   - Step-by-step changes needed
   - Order of operations (if critical)
   - Rollback considerations

3. **Non-Goals / Out of Scope**

   - Which technical debt to leave alone
   - Systems not to touch

4. **Technical Context** [...]
5. **Error Handling** [...]
6. **Success Criteria** [...]

## Output

- **Format:** Markdown
- **Folder:** `tasks/`
- **Filename:** `prd-[descriptive-name].md`
- **Length:** Keep it under 2 pages - AI agents read fast but need focus

## Final Instructions

1. Do NOT start implementing the PRD
2. Make sure to ask the user clarifying questions
3. Take the user's answers to the clarifying questions and improve the PRD
