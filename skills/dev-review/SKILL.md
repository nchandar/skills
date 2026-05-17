---
name: dev-review
description: Review code changes with changed-line scrutiny and system-level reasoning. Use for pull request review, self-review before completion, reviewing generated code, inspecting diffs after implementation slices, or whenever the user asks to audit changed code for correctness, regressions, tests, maintainability, or architectural fit.
---

# Dev Review

## Overview

Review like a senior engineer: every changed line must justify itself, and the whole change must still make sense as a system. Lead with findings, not summaries.

This skill reviews code changes. It does not rewrite code unless the user explicitly asks for fixes.

## When To Use

Use this skill when:

- reviewing a diff, PR, or generated code
- self-reviewing a completed slice before moving on
- checking implementation against a design or plan

Do not use this skill when:

- the user wants final completion proof; use `dev-verify`
- the work is still in diagnosis mode; use `dev-debug`

## Workflow

1. Read the diff first.
2. Inspect enough surrounding code to understand contracts and risk.
3. Review changed lines for correctness, necessity, tests, edge cases, and naming.
4. Step back and review system-level behavior, contracts, and compatibility.
5. Report findings ordered by severity with exact locations when possible.

Prefer findings about bugs, regressions, missing tests, security/privacy risk, and maintainability over style commentary.

## Outputs And Handoffs

Default review output:

```markdown
Findings

| Severity | Location | Issue | Recommendation |
|---|---|---|---|
| High/Medium/Low | `[file:line]` | [specific problem and impact] | [specific fix or check] |
```

If no issues are found, say so clearly and note residual risks or unverified checks.

Default handoff:

- back to implementation for fixes when findings exist
- to `dev-verify` when the diff is ready for completion proof

## Common Mistakes

- Summarizing before findings.
- Reviewing only style while missing behavior.
- Reviewing only changed lines and ignoring affected callers.
- Trusting generated code without inspecting changed contracts.
- Saying "looks good" without noting what was actually checked.
