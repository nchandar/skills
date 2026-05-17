# Dev Write Skill Reference

## Naming Rules

- Every skill name starts with `dev-`.
- Every command file name matches the skill name exactly.
- Prefer direct, verb-first names when possible.
- Prefer names that describe the action or outcome, not just a topic.

## Required Layout

Each skill uses this structure unless a simpler shape is clearly sufficient:

```text
skills/<skill-name>/
├── SKILL.md
├── REFERENCE.md      # optional
├── EXAMPLES.md       # optional
└── agents/
    └── openai.yaml   # optional
```

Each command wrapper lives at:

```text
commands/<skill-name>.md
```

## SKILL.md Rules

`SKILL.md` is the primary entry point. It should stay operational and quickly scannable.

Recommended sections:

1. frontmatter
2. title
3. overview
4. when to use
5. workflow
6. outputs and handoffs
7. common mistakes

Keep `SKILL.md` short enough that someone can understand how to use the skill without reading supporting files first.

## Split Policy

- Target `SKILL.md` length: about `100-200` lines.
- At `200+` lines: consider splitting.
- At `300+` lines: usually split unless nearly everything is first-load critical.

Move material to `REFERENCE.md` when it contains:

- long checklists
- detailed templates
- deep edge-case guidance
- extended theory or terminology
- larger anti-pattern sections

Move material to `EXAMPLES.md` when it contains:

- multiple worked examples
- sample outputs
- before/after scenarios
- representative usage patterns

Move material into separate resource or prompt files when it contains:

- long reusable prompts
- structured subagent prompts
- large helper templates
- vocabulary packs or domain-specific references

## Description Rules

- The frontmatter `description` should say what the skill enables and when to use it.
- Keep it trigger-focused.
- Include the situations, symptoms, or requests that should activate the skill.
- Do not bury the trigger conditions in vague wording like "helps with" or "assists with".

## Command Wrapper Rules

- One command wrapper per skill.
- The command wrapper name must match the skill name exactly.
- The command wrapper should stay short.
- Point directly at the matching skill.
- Include only the minimum instructions needed to invoke the skill well.
- Do not duplicate the entire skill document inside the command wrapper.

## Metadata Rules

When the skill benefits from UI metadata, create or update `agents/openai.yaml`.

Recommended fields:

- `display_name`
- `short_description`
- `default_prompt`

Keep metadata aligned with the skill's actual job and triggers.

## Public Catalog Updates

Update `README.md` and plugin metadata when the visible skill catalog changes, including:

- new skills
- removed skills
- renamed skills
- changed command surface
- changed public workflow descriptions

Do not treat typo fixes or purely internal wording cleanup as catalog changes.

## Lightweight Review Checklist

- Does this skill really need to exist?
- Should an existing skill be updated instead?
- Does the name start with `dev-`?
- Does the command match the skill name exactly?
- Are the triggers easy to understand?
- Are ownership and non-ownership clear?
- Are handoffs to other skills explicit?
- Is `SKILL.md` too long?
- Are `REFERENCE.md` or `EXAMPLES.md` being used only when helpful?
- Do `README.md` and plugin metadata need updates?
