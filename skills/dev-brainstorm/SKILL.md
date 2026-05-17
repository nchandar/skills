---
name: dev-brainstorm
description: Turn a rough change request into an approved design before implementation. Use when the user has a feature idea, behavior change, refactor, architecture request, or unclear implementation request that needs clarification, trade-off analysis, and a design handoff before planning or coding.
---

# Dev Brainstorm

## Overview

Use this skill as the front door for most new work. Inspect the repository first, ask focused questions only where needed, compare meaningful approaches, and end with an approved design that can hand off to `dev-plan`.

This skill owns design clarification and synthesis. It does not write production code or break work into executable task slices.

## When To Use

Use this skill when:

- the user wants to build or change behavior but the shape is not fully settled
- the request spans multiple design decisions, trade-offs, or constraints
- the implementation path depends on clarifying goals, scope, or boundaries
- the user explicitly asks to brainstorm, think through, or validate a design

Do not use this skill when:

- root cause is unknown and the work is primarily a bug investigation; use `dev-debug`
- the design is already approved and you need execution tasks; use `dev-plan`
- the user wants a doc-aware grilling session with shared-language maintenance; use `dev-grill-with-docs`

## Workflow

1. Inspect repository context before asking questions.
2. Classify the request as quick, standard, or deep so the amount of ceremony matches the risk.
3. Ask one focused question at a time when repo context does not answer it.
4. Compare 2-3 meaningful approaches when there is a real choice.
5. Recommend one approach and explain why it fits the repo, constraints, and verification path.
6. Present a concise approved design handoff.
7. Hand off to `dev-plan`.

When asking a question, use this shape:

```markdown
Question: [one decision to resolve]

Recommendation: [preferred answer]

Why: [brief reasoning]
```

## Outputs And Handoffs

An approved design should usually include:

- goal
- scope and non-goals
- key decisions
- architecture or flow summary
- testing and verification intent
- open questions, if any remain

Default handoff: `dev-plan`

If the user asks for a durable design artifact or the repo already has a convention, write the design there. Otherwise keep the handoff conversational.

## Common Mistakes

- Asking questions that the repository already answers.
- Asking several unrelated questions at once.
- Treating a vague request as clear because implementation seems small.
- Jumping into implementation before the user has approved the design.
- Producing a design with no testing or verification story.
