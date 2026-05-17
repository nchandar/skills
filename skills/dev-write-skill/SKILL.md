---
name: dev-write-skill
description: Create or update a dev-* workflow skill and its matching command wrapper using this repository's authoring standard. Use when adding a new skill, renaming or restructuring an existing skill, tightening skill boundaries or handoffs, or aligning skill docs, commands, and metadata across Claude, Codex, and OpenCode.
---

# Dev Write Skill

## Overview

Create or revise a `dev-*` skill so it fits this repository's conventions, stays easy to discover, and remains maintainable over time.

This skill owns skill authoring. It does not implement the product or workflow that the target skill will later guide.

## When to Use

Use this skill when you need to:

- add a new `dev-*` skill
- revise an existing skill's purpose, triggers, or handoffs
- split an oversized skill into `SKILL.md`, `REFERENCE.md`, or `EXAMPLES.md`
- align a skill's command wrapper and metadata with the skill itself
- update the public skill catalog after adding, removing, or renaming a skill

Do not use this skill for normal feature work, debugging, planning, or review of product code.

## Workflow

1. Check whether an existing skill should be updated instead of creating a new one.
2. Define the target skill's job, trigger conditions, boundaries, and handoffs.
3. Create or revise the skill files using the repository layout and split rules.
4. Create or revise the matching command wrapper so the command name equals the skill name.
5. Update metadata and public catalog docs when the visible skill set changes.
6. Run a lightweight review for naming, discoverability, length, and overlap.

For the detailed authoring rules, file layout rules, and review checklist, see [REFERENCE.md](REFERENCE.md).

## Outputs And Handoffs

This skill should produce some or all of:

- `skills/<skill>/SKILL.md`
- `skills/<skill>/REFERENCE.md` when deeper guidance is needed
- `skills/<skill>/EXAMPLES.md` when worked examples add real value
- `skills/<skill>/agents/openai.yaml` when UI metadata should be updated
- `commands/<skill>.md`
- updates to `README.md` and plugin metadata when the public catalog changes

If the target skill still needs its own workflow details finalized, hand back a concise list of open decisions before writing files.

## Common Mistakes

- Creating a new skill when an existing skill only needs a rewrite.
- Letting the command name differ from the skill name.
- Packing reference material and long examples into `SKILL.md`.
- Writing vague trigger descriptions that do not say when the skill should be used.
- Forgetting to update `README.md` or plugin metadata after a visible catalog change.
