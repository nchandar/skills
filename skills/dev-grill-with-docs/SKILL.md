---
name: dev-grill-with-docs
description: Interrogate a design one decision at a time while maintaining shared domain language and durable design memory when useful. Use when the user wants a rigorous design grilling session, when terminology is fuzzy or overloaded, or when decisions should update CONTEXT.md or ADR-style docs as they are resolved.
---

# Dev Grill With Docs

## Overview

Use this skill when sharp questioning and durable project memory matter more than broad design synthesis. Ask one question at a time, pressure-test assumptions, normalize terminology, and update shared language docs only when doing so adds value.

## When To Use

Use this skill when:

- the user explicitly wants to be grilled on a design
- the project has domain language that needs to stay consistent
- terminology, glossary drift, or architectural memory is part of the problem

Do not use this skill when:

- the main need is a broad design synthesis; use `dev-brainstorm`
- the work is implementation planning; use `dev-plan`

## Workflow

1. Inspect repo docs, glossary files, and ADRs before asking anything the repo already answers.
2. Ask one focused question at a time.
3. Include a recommendation with each question.
4. Challenge vague, overloaded, or contradictory terminology.
5. Update durable docs lazily when real value is added.
6. Hand off to `dev-plan` once the design is crisp enough to execute.

Durable docs should be created or updated only when useful, not by default.

## Outputs And Handoffs

Typical outputs:

- resolved design decisions
- clarified domain terminology
- optional updates to `CONTEXT.md`, `CONTEXT-MAP.md`, or ADR-style docs

Default handoff: `dev-plan`

## Common Mistakes

- Turning a simple clarification into unnecessary documentation work.
- Asking multiple decisions at once.
- Letting terminology stay fuzzy when it affects design quality.
- Updating durable docs before the decision is actually settled.
