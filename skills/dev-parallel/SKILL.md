---
name: dev-parallel
description: Split independent tasks or investigations into parallel subagent work for faster progress. Use when there are multiple unrelated failures, review areas, or implementation tasks that can proceed safely without shared state or tightly coupled reasoning.
---

# Dev Parallel

## Overview

Use this skill when multiple tasks are independent enough to run in parallel without interfering with each other.

## When To Use

Use this skill when:

- several failures appear unrelated
- several work items touch separate areas and can proceed safely in parallel
- the main value comes from concurrency rather than one coherent reasoning thread

Do not use this skill when:

- tasks are tightly coupled
- multiple agents would likely edit the same files or depend on the same evolving state

## Workflow

1. Group the work into truly independent domains.
2. Give each domain a focused prompt and clear output expectations.
3. Run the work in parallel.
4. Consolidate results and check for conflicts.

## Outputs And Handoffs

Typical outputs:

- one result per independent domain
- a consolidated summary
- next-step handoff back to `dev-execute`, `dev-review`, or the user

## Common Mistakes

- Parallelizing tasks that share state or files.
- Giving each agent vague scope.
- Skipping conflict checks after results return.
