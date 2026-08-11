# AI Guidance Explorer

Prototype catalogue of UK public sector AI guidance, starting with an FAQ drawn from the [AI Playbook for the UK Government](https://www.gov.uk/government/publications/ai-playbook-for-the-uk-government/artificial-intelligence-playbook-for-the-uk-government-html).

## Run locally

```bash
npm install
npm start
```

Open [http://localhost:8080](http://localhost:8080).

## Build

```bash
npm run build
```

Static output is written to `_site/`.

## Deploy to AWS Amplify

This repo is set up for Amplify Hosting as a static site.

1. Push the branch you want to deploy to GitHub.
2. In the [Amplify console](https://console.aws.amazon.com/amplify/), choose **Create new app** → **Host web app**.
3. Connect this GitHub repository and select the branch.
4. Amplify will pick up `amplify.yml` automatically:
   - install: `npm ci` (Node 20)
   - build: `npm run build`
   - publish: `_site/`
5. Save and deploy. The app URL will appear when the build succeeds.

No Amplify backend or environment variables are required for this prototype.

## Notes

- Built with Eleventy and GOV.UK Frontend
- No crown crest or GDS Transport font (not hosted on GOV.UK)
- FAQ answers live at `/faq/<question-slug>/` and cite snippets with Chrome text fragments (`:~:text=`)
- About pages live at `/about/` and `/about/process/` (content from `src/about/*.md`)
- Placeholder favicon / app icons: drop `brand/icon.svg` (or `.png`) and run `npm run icons` to regenerate `src/assets/icons/` + `site.webmanifest`. Manifest copy lives in `brand/icons.config.json`.
- Google Analytics: set `gaMeasurementId` in `src/_data/site.js` (e.g. `G-XXXXXXXXXX`). Leave empty to disable tracking.

## Icons

```bash
# put your master artwork here:
#   brand/icon.svg   (preferred)
#   brand/icon.png   (1024×1024 square also fine)

npm run icons
```

The script prints the `<head>` tags to paste if they are missing. This project already has them in `src/_includes/layouts/base.njk`.

## Citation roles (multi-source answers)

When an FAQ cites more than one source:

| Role in data (`citations[].role`) | Meaning |
| --- | --- |
| **`primary`** | The source that most clearly explains **how** to do something (steps, methods, frameworks, operational practice). Prefer Knowledge Hub how-tos and similar practical guidance when available. |
| **`supporting`** (shown as **Secondary**) | Sources that mainly explain **if** something can, must, should, or should **not** be done (normative / policy constraints). Playbook principles, regulator rules, and “must/should not” statements usually sit here when a how-to exists. |
| **`contrasting`** | Positions that disagree or sit in material tension; show both and do not force a single winner. |

Do not demote a how-to to secondary just because a playbook is older or more “official” if the question is about practical method. Prefer the more authoritative body for legal/security claims when the question is about obligations rather than method.

See also Stage 5 in [`src/about/process.md`](src/about/process.md).
