# Video script: AI Guidance Explorer

**Audience:** Policy-makers and public-sector practitioners working with AI  
**Length:** ~5–10 minutes  
**Channels:** YouTube and LinkedIn  
**Tone:** Conversational, practical, honest about limits  

---

## Cue card (print this / put beside camera)

Use **only these prompts** while recording. Glance down between thoughts — not mid-sentence. Full script below is a safety net if you dry up.

### Talk to camera
- **Hook** — 30+ sources → one FAQ; see overlap / conflict / gaps
- **Who** — Peter; clarity + better outcomes with tech
- **Problem** — lots of guidance; should vs must; hard to find & compare
- **Who cares** — practitioners *and* policy-makers
- **Origin** — agency AI policy work; own time; agentic coding → Explorer
- **Disclaimer** — own time; no gov involvement or endorsement
- **What** — 30+ catalogue; 15 incorporated; claims → FAQ + verbatim + deep links
- **Also** — sources index; Guidance map for policy
- **Caveat** — doesn’t replace official docs

### While demoing (say the idea, not the clicks)
- **Search** — type → filter; “I have a question…”
- **Answer** — synthesis + citations; primary = how; supporting = must/should
- **Deep link** — lands on the passage
- **Conflict** — contrasting callout + how to navigate; signal for publishers
- **Sources** — filterable index; watchlist + incorporated; detail pages
- **Map** — crown jewel; conflicts by topic + cause; alignments primary/normative
- **Process** *(optional)* — lifecycle to maintain, not one-off scrape

### How it’s made / close
- **Stack** — agentic tools + Eleventy; like psaI Tools Catalogue
- **Design** — LLM at *design time*; static site = cheap to host
- **Data** — JSON sources, claims, FAQs *(flash file if useful)*
- **Honest limits** — may need a DB; more sources = cost; gaps still manual
- **Next** — PoC; real FAQs for gaps; hope for formal adoption
- **Outro** — open source / GitHub; not official advice; like & share; get in touch

### Filming tips (no teleprompter)
1. **Record in sections** — stop between cue-card blocks; stitch later. Natural > perfect continuity.
2. **Second take for demos** — voiceover the SPEAK lines over a clean click-path; eye contact only on talking-head bits.
3. **One sticky note per section** — huge font, 3–5 words, off-lens (below or beside camera).
4. **Look at the lens after each bullet** — finish the thought to camera, *then* glance at the next cue.
5. **Accept paraphrasing** — if you hit the beats above, wording can wander; that’s the point.

---

### How to read the full script (below)

| Label | Meaning |
|-------|---------|
| **SPEAK** | Suggested wording if you need it — not mandatory verbatim |
| **DEMO** | Actions to perform on screen — do not read these aloud unless noted |

Do the **DEMO** step, then cover the matching cue-card beats (or use **SPEAK** if stuck).

### On-screen assets to prepare
- Homepage with find-as-you-type FAQ
- One “clean” answer page (aligned citations)
- One conflicted answer page
- Sources index + a single source page
- Guidance map (conflicts + alignments)
- Optional: briefly open `sources.json` / a claim unit JSON
- About / process page (optional)
- End card: GitHub link, psaI Tools Catalogue, disclaimer

---

## 1. Hook (0:00–0:40)

**DEMO:** Title card or talking-head; site not required yet.

**SPEAK:**
> Here's how I brought together over 30 pieces of public-sector AI guidance into a single FAQ — and built a tool that shows where they overlap, conflict, or leave gaps.
>
> I am Peter. I help organisations get more clarity and deliver better outcomes using cutting-edge technology (like AI, wink).

---

## 2. The problem (0:40–1:30)

**DEMO:** Stay on talking-head, or optional B-roll of a crowded GOV.UK guidance page / long PDF — no clicking required.

**SPEAK:**
> If you work with AI in the public sector, you already know: there is a *lot* of guidance and policy out there.
>
> Some of it is advice you *should* follow. Some of it is strict policy you *must* follow. Finding the right bit for the question in front of you is hard. Spotting where two official documents pull in different directions is harder still.
>
> That matters for practitioners shipping services — and it matters for policy-makers who want a coherent body of guidance.
>
> Thanks to large language models, we can build tools that help make sense of it. While helping one government agency think through its AI policy, I spent some of my own time — with an agentic coding tool — building what I'm calling the **AI Guidance Explorer**.

---

## 3. What it is (1:30–2:30)

**DEMO:**
1. Open the AI Guidance Explorer homepage.
2. Optionally click through to About for a second — keep it brief.

**SPEAK:**
> Quick disclaimer: I've built this tool in my own time without any involvement or endorsement from any government body.
>
> It catalogues over 30 pieces of UK public-sector AI guidance. Fifteen of those are fully *incorporated* into the tool.
>
> By “incorporated” I mean: we used an agentic workflow to read the guidance, reflect on the questions it could answer, break it into citable claims, and generate FAQ answers. Answers are paraphrased from the guidance, backed by verbatim extracts, with links that take you straight to the source.
>
> There's also a sources catalogue — searchable and filterable — with a description page for each document.
>
> And for policy-makers especially: a **Guidance map** that surfaces where sources align, where they contrast, and where we still have gaps.
>
> None of this replaces the official documents. It helps you find them, compare them, and see the shape of the landscape.

---

## 4. Demo: finding answers (2:30–4:30)

### 4a. Find as you type

**DEMO:**
1. Go to the Questions homepage.
2. Click the search / find-as-you-type field.
3. Type slowly: `DPIA` or `prompt injection`.
4. Pause so viewers see the list filter live.
5. Hover or highlight one matching question (don't open yet).

**SPEAK:**
> Start on the questions page. Type a few characters — and the FAQ filters as you go. That's the practitioner path: “I have a question; what does the guidance say?”

### 4b. Answer page + deep link

**DEMO:**
1. Open a “clean” answered question (aligned citations, not conflicted).
2. Scroll to show: short answer, then citation cards.
3. Point out primary vs supporting roles if visible.
4. Click a citation deep link.
5. On the destination page, show the highlighted / landed passage if the browser supports it.
6. Tab back to the explorer.

**SPEAK:**
> Open an answer. You get a short synthesis, then cards for each citation: organisation, section, snippet. Roles matter here — **primary** for how to do the thing, **supporting** for normative can / must / should.
>
> Click through to the source. The deep link should land you on the relevant passage, not just the document homepage.

### 4c. Contrasting guidance

**DEMO:**
1. From search or browse, open a **conflicted** FAQ (e.g. DPIA thresholds, or telling users AI is in a service).
2. Scroll to the contrasting / “where sources differ” block.
3. Briefly show contrasting citation cards and the navigator guidance.
4. Do **not** click away unless you want a quick peek at related questions.

**SPEAK:**
> Now a question marked as conflicted.
>
> You'll see contrasting citations called out, a short explanation of the tension, and guidance on how a practitioner might navigate it today. That's useful on the ground — and it's a signal for publishers who want better alignment across products.

---

## 5. Demo: sources and the guidance map (4:30–6:30)

### 5a. Sources catalogue

**DEMO:**
1. Open **Sources** from the nav.
2. Toggle one or two filters (status, type, or theme).
3. Open one incorporated source’s detail page.
4. Scroll enough to show metadata / summary — then return via nav.

**SPEAK:**
> The sources page is a comprehensive index: incorporated documents and items still on the watchlist. Filter by status, type, themes. Each source has its own page with metadata, related themes, and how it shows up in the FAQ.

### 5b. Guidance map (crown jewel)

**DEMO:**
1. Open **Guidance map**.
2. Click the **Open conflicts** stat (or scroll to “Where guidance contrasts”).
3. Expand one conflict row (click the conflict title).
4. Point at: cause tag, source chips, detail panel (summary / navigate / positions).
5. Scroll or click **Aligned questions** to “Where guidance aligns”.
6. Show topic eyebrows and a row with Primary / Normative columns.
7. Optional: click a question link, then come straight back.

**SPEAK:**
> This is the bit I'm most excited about for policy-makers.
>
> The Guidance map is a curator-facing view: open conflicts, topic by topic — what appears to disagree, likely cause — scope, audience, currency, ambiguity — which sources are involved, and related questions.
>
> And where guidance *aligns*: questions where multiple sources agree, with primary versus normative sources broken out.
>
> The intent is simple: help policy writers and guidance publishers see problem areas and cohesive areas — so the corpus gets clearer over time, not noisier.

### 5c. Process (optional)

**DEMO:**
1. Open **About** → source lifecycle / process page.
2. Scroll the stage table briefly — 5–10 seconds max.

**SPEAK:**
> The agent also helped draft a lifecycle for discovering, triaging, ingesting, and refreshing guidance — so this isn't just a one-off scrape; it's a maintainable process.

---

## 6. How it's made (6:30–7:45)

**DEMO:**
1. Optional: show GitHub repo README for 2–3 seconds.
2. Optional: open `sources.json` or a `content/units/*.json` file — scroll a small snippet, don't narrate every field.
3. Optional: flash [psaI Tools Catalogue](https://psaitools.peterkappus.com) in the browser.
4. Return to talking-head or explorer homepage.

**SPEAK:**
> I built this with agentic coding tools on top of **Eleventy** — a static site generator. If you've seen my other work, this sits in the same family as the psaI Tools Catalogue — same idea: small, focused public-sector tooling, shippable as a static site.
>
> Important design choice: **almost all of the LLM work happens at design time**, not at runtime. We ingest, claim-extract, and draft FAQ answers offline. What you browse is a static website. That keeps hosting cheap and predictable — no per-page inference bill for every visitor.
>
> Under the hood, sources and claim units live as structured JSON: source records in the catalogue, claim packs per document, FAQ objects with ranked citations and conflict links.

---

## 7. Reservations (7:45–8:45)

**DEMO:** Talking-head (or freeze on guidance map / homepage as B-roll). No clicks needed.

**SPEAK:**
> It's not all rainbows and unicorns.
>
> As complexity grows, flat files may stop being enough — we may need a proper database.
>
> As we add more sources, it gets more expensive — in curator time and in model use — to re-check every question against every document for overlap and contrast.
>
> Gaps still need human judgement. We don't yet have a canonical, human-reviewed question set, so “what's missing?” is still partly manual. I believe that's solvable — but we shouldn't pretend the tool invents gaps on its own today.

---

## 8. Next steps and close (8:45–10:00)

**DEMO:**
1. End card on screen: GitHub URL, psaI Tools Catalogue link, “Not official advice”.
2. Optional: leave Guidance map or homepage faintly behind the card.

**SPEAK:**
> For now, this is a useful proof of concept and an interesting prototype. I hope it helps teams looking at AI guidance in the public sector — practitioners finding answers with citations, and policy-makers seeing alignment and conflict more clearly.
>
> I'd love to ground the FAQ in real questions teams actually ask, so we can find genuine gaps. And I'd be glad to see something like this formally adopted or stewarded by public-sector organisations.
>
> It's all open source on GitHub — link in the description.
>
> Important caveat: this is not official government advice or guidance. Always refer to the official sources before you make decisions about tools and services in the public sector.
>
> If you have questions or comments, get in touch. Like, subscribe, and share with colleagues if this was useful. Thanks for watching — see you in the next one.

---

## Shot list (quick reference)

| # | DEMO (do this) | SPEAK (about this) |
|---|----------------|--------------------|
| 1 | Talking head / title card | Hook + intro |
| 2 | Homepage (brief) | What it is + disclaimer |
| 3 | FAQ type-ahead | Find as you type |
| 4 | Answer → source highlight | Citations + deep links |
| 5 | Conflicted FAQ | Contrasting guidance |
| 6 | Sources index + source page | Catalogue |
| 7 | Guidance map expand + align | Policy / curator view |
| 8 | Optional: process / JSON / Eleventy | How it's made |
| 9 | End card | GitHub, disclaimer, CTA |

## Description blurb (YouTube / LinkedIn)

AI Guidance Explorer — a prototype that turns UK public-sector AI guidance into a cited FAQ, and maps where sources align or conflict.

Built for practitioners who need answers with deep links, and for policy-makers who need a clearer view of the guidance landscape.

Not official advice. Always check the source documents.

Open source: [GitHub repo URL]  
Related: [psaI Tools Catalogue](https://psaitools.peterkappus.com)
