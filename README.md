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

## Notes

- Built with Eleventy and GOV.UK Frontend
- No crown crest or GDS Transport font (not hosted on GOV.UK)
- FAQ answers cite playbook snippets and deep-link with Chrome text fragments (`:~:text=`)
