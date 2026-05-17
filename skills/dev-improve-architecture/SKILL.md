---
name: dev-improve-architecture
description: Find architectural friction and propose concrete structural improvements that make a codebase easier to change, test, and navigate. Use when the user wants to improve architecture, reduce muddiness, consolidate tightly coupled modules, or identify better seams before planning a refactor.
---

# Dev Improve Architecture

## Overview

Use this skill to inspect a codebase for structural friction and surface candidate improvements before committing to implementation. Focus on module boundaries, leverage, locality, coupling, and testability.

## When To Use

Use this skill when:

- the user wants to improve the shape of the codebase
- the code feels muddy, shallow, or hard to change
- a refactor should start from architectural understanding rather than immediate edits

Do not use this skill when:

- the main job is simply to explain the current system; use `dev-zoom-out`
- the implementation request is already clear and not primarily architectural

## Workflow

1. Inspect the relevant code areas and note friction points.
2. Surface a short list of architectural improvement candidates.
3. Explain the problem, proposed change, and expected benefits for each candidate.
4. Let the user choose one candidate to explore.
5. Refine that candidate into something that can hand off to `dev-plan`.

## Outputs And Handoffs

Typical outputs:

- candidate architecture improvements
- rationale in terms of coupling, testability, and navigability
- chosen improvement direction

Default handoff: `dev-plan`

## Common Mistakes

- Jumping straight to refactoring without surfacing alternatives.
- Proposing architectural changes without tying them to real friction.
- Confusing a system map with an improvement plan.
