---
name: dev-setup
description: Establish lightweight documentation and artifact conventions for this repository's dev-* workflow. Use when the skills need to know where design memory lives, whether durable docs should be written in-repo or elsewhere, or how the workflow should persist plans, handoffs, and shared language.
---

# Dev Setup

## Overview

Use this skill to establish the lightweight conventions that the rest of the dev-* workflow should follow. It should detect existing conventions first, ask only for gaps, and avoid forcing heavy scaffolding.

## When To Use

Use this skill when:

- the repository has no clear conventions for design memory or workflow artifacts
- the user wants to define where plans, handoffs, and shared-language docs should live
- the other dev-* skills would otherwise have to guess

## Workflow

1. Inspect the repository for existing docs and conventions.
2. Ask only about the unresolved gaps.
3. Record the agreed defaults if the user wants them persisted.

## Outputs And Handoffs

Typical outputs:

- clarified doc and artifact conventions
- optional durable setup notes if the user wants them saved

Possible handoffs: `dev-grill-with-docs`, `dev-brainstorm`, or `dev-plan`

## Common Mistakes

- Asking about conventions the repo already makes obvious.
- Forcing persistent files when the user has not decided on storage yet.
- Expanding into issue-tracker or label workflows the user does not use.
