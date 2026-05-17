---
name: dev-zoom-out
description: Explain a code area in wider system context instead of only describing local implementation. Use when the user is unfamiliar with a section of code, asks for the bigger picture, or needs a map of relevant modules, callers, and responsibilities before planning or refactoring.
---

# Dev Zoom Out

## Overview

Use this skill to move up a level of abstraction. Map the important modules, callers, data flow, and responsibilities so the user can understand how an area fits into the larger system.

## When To Use

Use this skill when:

- a code area is unfamiliar
- the user asks for broader context or the bigger picture
- a local implementation detail is hard to reason about without system context

Do not use this skill when:

- the user wants architecture improvement candidates; use `dev-improve-architecture`

## Workflow

1. Inspect the relevant entry points, callers, and downstream dependencies.
2. Summarize the important modules and what each one owns.
3. Explain the flow between them at the level the user needs.

## Outputs And Handoffs

Typical output:

- module map
- caller/callee relationships
- system-level explanation of the area

Possible handoffs: `dev-brainstorm`, `dev-plan`, or `dev-improve-architecture`

## Common Mistakes

- Staying too close to local implementation details.
- Producing a huge repo tour instead of a relevant map.
