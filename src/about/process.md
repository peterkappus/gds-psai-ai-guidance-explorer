---
layout: layouts/page.njk
title: Guidance lifecycle process
description: How this project discovers, verifies, ingests and maintains UK public sector AI guidance — and how we surface answers, gaps and conflicts.
permalink: /about/process/
back:
  href: /about/
  text: About
---

# Process proposal: UK public sector AI guidance knowledge base

**Status:** draft proposal  
**Updated:** 2026-08-03  
**Audience:** product owners, content curators, engineers, and LLMs assisting with this project  
**Related artefacts:** `sources.json`, `faq.md`, `src/_data/faq.js`, `questions.md`

## Purpose

Define how this project discovers, accepts, ingests, and maintains UK public sector AI guidance — then uses that corpus to answer questions with citations, surface gaps, and flag conflicts in a way people can trust and use.

This document is intentionally operational. It should be readable by humans and executable (as a checklist / prompt) by LLMs.

## Design principles

1. **Authority over completeness** — prefer official public-sector sources; do not invent policy.
2. **Citations are mandatory** — every answer must link to specific guidance (document + section; deep link where possible).
3. **Curated first, automated second** — humans accept sources and publish FAQ changes; automation assists discovery and drafting.
4. **Conflicts and gaps are first-class** — not bugs to hide; they are product features.
5. **Small increments** — ingest one source well before expanding coverage.
6. **Non-GOV.UK hosting constraints** — present guidance clearly without implying this explorer is official GOV.UK policy.

---

## End-to-end lifecycle (overview)

```text
Discover → Triage/Verify → Ingest → Refresh FAQs → Answer + Cite
                ↓                                      ↓
           Reject / defer                    Gaps + Conflicts → Present in UI
```

| Stage | Outcome | Primary artefact |
| --- | --- | --- |
| 1. Identify | Candidate source list | `sources.json` (`status: candidate`) |
| 2. Verify | Accept / defer / reject | `sources.json` (`status` + decision notes) |
| 3. Ingest | Structured source content + metadata | source records + extracted sections |
| 4. Revisit FAQs | Updated / new / retired questions | `faq.md` + `src/_data/faq.js` |
| 5. Multi-source answers | Answers with ranked citations | FAQ entries / answer objects |
| 6. Gaps | Explicit “no clear answer” items | gap register |
| 7. Conflicts | Documented disagreements | conflict register |
| 8. Present | Browse, Q&A, gaps, conflicts UI | website |

---

## Stage 1 — Identifying new sources of guidance

### Goal

Maintain a living backlog of UK public sector AI guidance that might belong in the explorer.

### Where to look

- GOV.UK publications and collections (DSIT, GDS, Cabinet Office, CDDO successors)
- Regulators and national technical authorities (ICO, NCSC, EHRC where relevant)
- Commercial / procurement bodies (CCS) and functional standards
- Devolved administrations and major ALBs (NHS, MoJ, etc.) when nationally relevant
- Local government guidance with clear public-sector applicability (e.g. LGA)
- Cross-references already cited inside ingested sources (especially the AI Playbook)

### Identification methods

1. **Manual scan** — periodic review of known hubs (ATRS, ICO AI pages, NCSC AI collections).
2. **Citation mining** — extract outbound links from ingested documents; add unseen official sources as candidates.
3. **FAQ-driven discovery** — when a common question cannot be answered well, search for missing authoritative sources.
4. **Stakeholder suggestions** — departments, communities of practice, user research.
5. **Change monitoring** (later) — watch known URLs for updates / supersession.

### Minimum candidate record

Add to `sources.json` with at least:

```json
{
  "id": "slug",
  "title": "",
  "url": "",
  "organisation": "",
  "type": "guidance|standard|framework|code_of_practice|action_plan|regulator_guidance",
  "status": "candidate",
  "audience": [],
  "themes": [],
  "summary": "",
  "why_include": "",
  "related_faq_themes": [],
  "priority": 1,
  "discovered_via": "playbook-citation|manual-scan|faq-gap|stakeholder",
  "discovered_on": "YYYY-MM-DD"
}
```

### Exit criteria

- Candidate has a stable public URL and identifiable owning organisation.
- One-sentence rationale (`why_include`) exists.
- Priority set (1 = next, 2 = soon, 3 = later).

---

## Stage 2 — Verifying that we want to use them

### Goal

Decide whether a candidate becomes an accepted source for citation.

### Verification checklist (must pass)

Answer **yes/no/unknown** for each:

| # | Criterion | Pass if |
| --- | ---: | --- |
| V1 | **Public sector authority** | Published by UK government, regulator, NCSC, or clearly endorsed public-sector body |
| V2 | **Publicly accessible** | No login wall for the version we will cite |
| V3 | **Relevant to AI adoption/governance** | Speaks to using, buying, assuring, securing, or governing AI/algorithms in the public sector |
| V4 | **Current enough** | Not obviously superseded; if historical, mark as `superseded` and link successor |
| V5 | **Citable** | Stable enough URL/sections to quote without misrepresenting |
| V6 | **Licence / reuse** | Crown copyright / OGL or otherwise linkable with attribution |
| V7 | **Audience fit** | Useful to explorer users (policy, delivery, assurance, commercial, local government, etc.) |
| V8 | **Non-duplicative** | Adds substance beyond sources already ingested (or is the canonical home of a topic) |

### Decision outcomes

| Decision | `status` | Action |
| --- | --- | --- |
| Accept for ingestion | `accepted` | Queue for Stage 3 |
| Keep watching | `candidate` | Revisit date + note |
| Reject | `rejected` | Record reason; do not cite |
| Superseded | `superseded` | Point to successor; cite only with historical caveat |

### Decision log fields

```json
{
  "decision": "accepted|rejected|deferred|superseded",
  "decided_on": "YYYY-MM-DD",
  "decided_by": "name-or-role",
  "checklist": { "V1": "yes", "V2": "yes" },
  "notes": "Short rationale",
  "successor_id": null
}
```

### Human gate

**A human curator must accept a source before it is used in published FAQ answers.** LLMs may recommend; they must not silently promote candidates to citable status.

### Exit criteria

- Decision recorded on the source object.
- If accepted: owner assigned for ingestion; target themes listed.

---

## Stage 3 — Ingesting into the knowledge base

### Goal

Turn an accepted source into structured, citable knowledge the site (and later retrieval) can use.

### Ingestion steps

1. **Snapshot metadata** — title, org, published/updated dates, URL, document type, licence.
2. **Map structure** — list major sections / headings (table of contents).
3. **Extract claim units** — short passages that can answer real questions (prefer normative “must/should” guidance).
4. **Tag each unit** — themes, audience, related FAQ ids, risk level if stated.
5. **Create citation anchors** — section title + text-fragment start/end suitable for `:~:text=` deep links.
6. **Record relationships** — `cites`, `cited_by`, `supersedes`, `related_to` other sources.
7. **Quality check** — quotes are accurate; no paraphrase presented as quotation.

### Proposed unit schema

```json
{
  "unit_id": "ico-ai-data-protection--dpia-required",
  "source_id": "ico-ai-data-protection",
  "section": "Lawfulness and purpose limitation",
  "claim_type": "requirement|recommendation|definition|example|warning",
  "text": "Exact or clearly marked paraphrase",
  "is_quotation": true,
  "text_start": "phrase for deep link",
  "text_end": "optional end phrase",
  "themes": ["data-protection", "dpia"],
  "audiences": ["dpo", "delivery"],
  "confidence": "high|medium|low",
  "extracted_on": "YYYY-MM-DD"
}
```

### Storage (near-term vs later)

| Horizon | Approach |
| --- | --- |
| **Near-term (now)** | Keep source catalogue in `sources.json`; keep published answers in `src/_data/faq.js`; store extraction notes in `/content/sources/<id>.md` if needed |
| **Next** | Add `content/units/*.json` or a single `knowledge.json` of claim units |
| **Later** | Chunk + embed for retrieval-assisted drafting; human still approves published answers |

### Exit criteria

- Source marked `incorporated` in `sources.json`.
- At least 5 high-value claim units extracted (or documented why fewer).
- Deep-link strategy validated on 2–3 sample URLs in Chrome.

---

## Stage 4 — Revisiting FAQs around updated guidance

### Goal

Keep the FAQ set aligned with the corpus: refresh answers, add questions, retire obsolete ones.

### Triggers

- New source incorporated
- Existing source updated / superseded
- User research or analytics shows unanswered demand
- Conflict or gap newly identified

### FAQ review procedure

For each affected theme in `faq.md` / `src/_data/faq.js`:

1. **Re-read questions** — still asked? still worded in user language?
2. **Re-ground answers** — does the new source strengthen, change, or contradict the answer?
3. **Upgrade citations** — prefer primary/regulator sources where they are more authoritative than a summary playbook.
4. **Split or merge** — one question, one job; split if answers diverge by context.
5. **Add new questions** the source clearly answers that users will ask.
6. **Retire or caveat** questions that are no longer valid; never silently delete without a note in changelog.

### FAQ entry target shape (multi-source ready)

```json
{
  "id": "process-personal-data",
  "question": "Can I use AI to process personal data?",
  "status": "answered|partial|gap|conflicted",
  "answer_summary": "Plain-language synthesis",
  "citations": [
    {
      "source_id": "ai-playbook-uk-government",
      "section": "Principle 2",
      "snippet": "...",
      "url": "https://...#:~:text=...",
      "role": "primary|supporting|contrasting"
    }
  ],
  "gap_id": null,
  "conflict_id": null,
  "last_reviewed": "YYYY-MM-DD"
}
```

### Exit criteria

- Every incorporated source is linked from ≥1 FAQ **or** explicitly logged as “no FAQ coverage yet” with a reason.
- `last_reviewed` updated on touched FAQs.
- Changelog note listing added/changed/retired questions.

---

## Stage 5 — Answering questions and citing multiple sources

### Goal

Produce trustworthy answers that synthesise guidance and show evidence.

### Answer-writing rules

1. Start with a **direct answer** in plain English.
2. Follow with **what the guidance says**, using short snippets.
3. Cite **all material sources** used — not only the friendliest one.
4. Assign citation roles by question type (not by document prestige alone):
   - **`primary`** — the source that most clearly explains **how** to do the thing (steps, methods, frameworks, operational practice). Prefer Knowledge Hub how-tos and similar practical guidance when they exist.
   - **`supporting`** (secondary) — sources that mainly explain **if** something can, must, should, or should **not** be done (normative constraints). Playbook principles and regulator “must/should not” statements usually sit here when a how-to already covers method.
   - **`contrasting`** — material disagreement or tension; show both positions.
5. When sources agree on obligations but one is more practical, still prefer this order for **authority on legal/security claims**:
   - statute / regulator (e.g. ICO) for legal/data protection claims
   - NCSC / security code for security claims
   - mandatory standards (e.g. ATRS) for transparency obligations
   - then playbooks / how-tos for operational framing
6. If sources only partially cover the question, mark status `partial` and say what is missing.
7. Never present the explorer’s synthesis as law or as a replacement for organisational advice.

### Multi-source synthesis pattern

```text
Answer (1–3 sentences)
→ Agreed points (bullets + citations)
→ Nuances / conditions (bullets + citations)
→ What to do next (practical steps + who to ask: DPO, commercial, security, legal)
→ Links to full guidance
```

### LLM-assisted drafting (allowed)

LLMs may:

- draft answer summaries from approved claim units
- propose additional FAQ questions
- suggest citation text-fragments

LLMs must not:

- publish without curator review
- invent quotations or URLs
- resolve conflicts by picking a “winner” without labelling uncertainty

### Exit criteria

- FAQ status is `answered` only if ≥1 solid citation exists and summary matches citations.
- Multi-source answers label each citation’s role (`primary` / `supporting` / `contrasting`).

---

## Stage 6 — Identifying gaps in guidance

### Goal

Make “we don’t have a clear public answer” visible and useful.

### What counts as a gap

- A common user question with **no accepted source** that materially answers it
- Sources that **mention** a topic but give **no actionable guidance**
- Guidance that applies only to a subset (e.g. central government) when users ask about another (e.g. local authorities)
- Questions that require **organisation-specific policy** (security classifications, approved tools lists)

### Gap detection methods

1. **FAQ coverage matrix** — questions × sources; empty cells are gap candidates.
2. **Failed answer attempts** — curator or LLM cannot find a citable unit.
3. **User submissions** — “Was this helpful? Missing guidance?”
4. **Theme checklist** — ensure core themes (legal, ethics, security, procurement, transparency, assurance, skills) have at least one strong source.

### Gap record

```json
{
  "gap_id": "gap-approved-public-llm-tools",
  "question": "Which public generative AI tools are approved for official information?",
  "status": "open|mitigated|closed",
  "severity": "local-policy|no-public-guidance|out-of-scope|awaiting-source",
  "notes": "Playbook forbids unpublished official info in public tools; approved-tool lists are org-specific.",
  "related_faq_ids": ["chatgpt-official-info"],
  "candidate_source_ids": [],
  "owner": "curator",
  "opened_on": "YYYY-MM-DD"
}
```

### Product treatment of gaps

- Show gap questions in the UI with status **“No clear cross-government answer found”**.
- Explain nearest related guidance (if any).
- Suggest organisational contacts (DPO / security / commercial) where appropriate.
- Feed gaps back into Stage 1 discovery.

---

## Stage 7 — Identifying conflicting guidance

### Goal

Detect and explain disagreements or tensions between sources without false harmony.

### What counts as a conflict

- Direct contradiction (A says must; B says must not)
- Material tension (A encourages X; B strongly warns against X in same context)
- Scope clash presented as universal (central mandate vs local recommendation)
- Currency clash (newer source supersedes older advice still circulating)

### Conflict detection methods

1. **Same-question multi-cite review** — when two+ sources are attached to one FAQ, compare normative verbs and conditions.
2. **Theme pairwise review** — for high-risk themes (ADM, personal data, public LLMs), explicitly compare top sources.
3. **Supersession checks** — flag older documents still cited beside successors.
4. **LLM-assisted contradiction scan** — propose conflict candidates; human confirms.

### Conflict record

```json
{
  "conflict_id": "conflict-example",
  "title": "Short label",
  "status": "open|explained|resolved-by-supersession",
  "summary": "What appears to disagree",
  "positions": [
    {
      "source_id": "...",
      "section": "...",
      "stance": "Claim in one sentence",
      "citation_url": "..."
    }
  ],
  "likely_cause": "different-scope|different-time|different-audience|true-disagreement|ambiguity",
  "user_guidance": "How a practitioner should navigate this today",
  "related_faq_ids": [],
  "opened_on": "YYYY-MM-DD"
}
```

### Resolution policy

- Do **not** hide conflicts.
- Prefer explanation by **scope, audience, or currency** over declaring a single winner.
- If truly unresolved, say so and point to the more authoritative body for that claim type (e.g. ICO for UK GDPR).

---

## Stage 8 — Presenting this in a user-friendly way

### Goal

Help users answer questions, see gaps, and understand conflicts — without feeling like a raw database.

### Information architecture (proposed)

1. **Ask / browse questions** (primary)
   - Categories + progressive disclosure (current details pattern)
   - Later: search and free-text ask with retrieved citations
2. **Guidance catalogue**
   - Sources from `sources.json` with status, org, themes, “used in N FAQs”
3. **Gaps board**
   - Open gaps, severity, nearest related guidance
4. **Conflicts board**
   - Side-by-side positions + “what this means for you”
5. **About / how citations work**
   - Not official advice; how updates work; link to process

### FAQ answer UI pattern

For each question show:

| Block | Content |
| --- | --- |
| Status badge | Answered / Partial / Gap / Conflicted |
| Short answer | Synthesis |
| From the guidance | One card per citation (snippet, org, section, deep link) |
| Where sources differ | Only if `conflicted` — short explainer + link to conflict record |
| What’s missing | Only if `partial` or `gap` |
| Last reviewed | Date + sources counted |

### Gaps UI pattern

- List of unanswered / under-answered questions
- Filter by theme
- Clear CTA: “Suggest a source” (mailto or form — later)

### Conflicts UI pattern

- Two-column comparison on desktop; stacked on mobile
- Shared “practical navigation” panel beneath
- Links back to affected FAQs

### Trust & accessibility

- Use GOV.UK Frontend patterns already in the project
- Plain language; avoid legal tone unless quoting
- Make status badges text, not colour-only
- External guidance links open with clear “opens in new tab” affordance
- Show provenance on every answer

### Suggested delivery phases

| Phase | Ship |
| --- | --- |
| **A — now** | Single-source FAQs + `sources.json` backlog + this process |
| **B** | Multi-citation FAQ objects + status badges (answered/partial/gap) |
| **C** | Gaps board + conflict records linked from FAQs |
| **D** | Catalogue browse + lightweight search |
| **E** | Assisted ask (retrieve claim units → draft → always show citations); curator workflow for publish |

---

## Roles and cadence

| Role | Responsibility |
| --- | --- |
| **Product owner** | Priorities, scope, publish decisions |
| **Curator** | Source accept/reject, FAQ accuracy, conflict/gap confirmation |
| **Engineer** | Ingestion tooling, UI, deep links, data schemas |
| **LLM assistant** | Drafting, scanning, matrix building — never final authority |

**Suggested cadence**

- Weekly: triage new candidates (Stage 1–2)
- Per accepted source: full ingest + FAQ pass (Stage 3–5)
- Monthly: gap/conflict review (Stage 6–7)
- After each publish: spot-check UI and citation links (Stage 8)

---

## Definition of done (for any source update)

- [ ] Source decision recorded in `sources.json`
- [ ] Claim units extracted and spot-checked
- [ ] Affected FAQs reviewed; statuses set
- [ ] New gaps/conflicts logged or existing ones updated
- [ ] UI copy reflects citations / badges
- [ ] Changelog updated with date and summary
- [ ] At least one deep-link citation manually verified in browser

---

## Open decisions (to iterate)

1. Who is the named curator for v1?
2. Do we store claim units as separate JSON files or inside Eleventy data?
3. Should local-government-only guidance be in the main FAQ or a filtered “local” lens?
4. What is the public feedback channel for suggesting sources?
5. When free-text ask ships, do answers stay fully curated or become “draft with citations”?

---

## LLM prompt stub (for running this process)

Use when asking an LLM to help with a cycle:

```text
You are assisting with the UK public sector AI Guidance Explorer.
Follow src/about/process.md (published at /about/process/) strictly.
Work only with public UK public-sector sources.
Do not invent quotations or URLs.
Propose changes to sources.json / FAQ data as diffs or structured JSON.
Flag gaps and conflicts explicitly instead of smoothing them over.
Ask for human confirmation before treating any source as accepted or any FAQ as publishable.
Current task: <discover | verify | ingest | refresh-faqs | find-gaps | find-conflicts | draft-ui-copy>
Inputs: <paste sources.json excerpt, FAQ items, or URLs>
```

---

## Document history

| Date | Change |
| --- | --- |
| 2026-08-03 | Initial process proposal |
