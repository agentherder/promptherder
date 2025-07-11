---
description:
globs:
alwaysApply: false
---

# Create a PRD for HITL AI Development

## Goal

To guide an AI agent in creating a concise, actionable product requirements document (PRD) for AI development. The PRD will be implemented by another AI agent with continuous HITL oversight in a fast-moving startup environment. The PRD should embrace rapid iteration and work within existing technical constraints.

## Process

1. **Receive Initial Prompt:** The user provides a brief description of a feature idea or technical improvement.
2. **Ask Clarifying Questions WITH Suggested Answers:** The AI must ask questions and provide suggested answers based on the context. This allows the user to quickly confirm or correct assumptions.
3. **Generate PRD:** Create a focused PRD optimized for AI implementation.
4. **Save PRD:** Save as `tasks/prd-[feature-name].md`

## Clarifying Questions

Ask 4-6 questions with suggested answers.

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

4. **MVP Scope**

   - Question: What's the absolute minimum to ship and get feedback?
   - Suggested: [Propose bare minimum based on prompt]

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

5. **Scope**

   - Question: Full refactor or targeted improvement?
   - Suggested: Targeted improvement - fix the biggest pain point first

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
   - Break into chunks suitable for incremental review
   - Identify natural pause points for human feedback

3. **Non-Goals / Out of Scope**

   - Critical section to prevent scope creep
   - List what this feature will NOT do
   - Include "No refactoring unless blocking"

4. **Technical Context**

   - Key files/modules this will touch
   - Known constraints or legacy gotchas
   - "Build simple first, optimize later" reminder
   - Suggested stopping points for human review (e.g., "After auth is working, before adding OAuth")

5. **Success = Shippable**
   - Can we deploy this and get feedback?
   - What's the fastest path to user feedback?

### For Technical/DX Improvements

If the feature is a technical/DX improvement, the generated PRD should include the following sections:

1. **Overview** (2-3 sentences)

   - What we're fixing/improving and why
   - Current pain level: [blocking/painful/annoying]

2. **Requirements** (Numbered list)

   - Specific changes needed
   - Order of operations if it matters
   - Number each requirement

3. **Non-Goals / Out of Scope**

   - What we're NOT fixing (yet)
   - Which tech debt we're leaving alone
   - "Don't let perfect be enemy of good"

4. **Impact & Risk**

   - What might break temporarily
   - Why it's worth it anyway
   - Rollback plan if needed

5. **Success = Measurable Improvement**

   - How we'll know it worked
   - e.g., "Build time < 2 min" or "Zero flaky tests for a week"

6. **Open Questions** (Only if critical)
   - Only unknowns that would block implementation

## Output

- **Format:** Markdown
- **Folder:** `tasks/`
- **Filename:** `prd-[descriptive-name].md`
- **Length:** Keep it under 2 pages - AI agents read fast but need focus

## Final Instructions

1. Do NOT start implementing the PRD
2. Make sure to ask the user clarifying questions
3. Take the user's answers to the clarifying questions and improve the PRD
