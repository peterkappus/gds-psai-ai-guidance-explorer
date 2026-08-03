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
- FAQ answers cite playbook snippets and deep-link with Chrome text fragments (`:~:text=`)
- About pages live at `/about/` and `/about/process/` (content from `src/about/*.md`)
