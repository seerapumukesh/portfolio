# Mukesh Seerapu — portfolio

Static portfolio deployed from this repository to https://mukeshseerapu.vercel.app/.

## Editing

- `index.html`: introduction, experience, skills, education, and contact.
- `site-content.js`: engineering case studies and public dashboard descriptions.
- `portfolio.css`: responsive visual design across the home page, project listing, and articles.
- `portfolio.js`: accessible mobile navigation, project filtering, and report rendering.
- `data.js` and `legacy-content.js`: engineering article listing.
- `reports/`: preview images of the author's actual public Tableau workbooks.

## Adding a report

Add an entry to `window.PORTFOLIO_REPORTS` in `site-content.js`, following the existing examples. Include the public HTTPS report URL, preview image, useful alternative text, business question, approach, and what the visitor can explore. Use a screenshot of the real report. Power BI entries use the same format. Only publish material approved for public sharing; do not include confidential datasets or authenticated sharing links.

Report previews link to the interactive workbook in a new tab. This keeps the portfolio fast and usable on small screens without loading two large Tableau applications on the landing page.

## Content provenance

Career history, education, and professional results come from the pre-existing portfolio (commit `cd239e0`). They are self-reported career outcomes, not calculations from the public Tableau datasets. Professional platform details are generalized summaries. Public Tableau examples are separate portfolio work published in April 2024.

- Netflix: https://public.tableau.com/app/profile/mukesh.seerapu/viz/Netflix_17121816818000/Netflix
- Stock analysis: https://public.tableau.com/app/profile/mukesh.seerapu/viz/StockAnalysis-04_04_2024/StockAnalysis

The stock dashboard contains historical data and is not a live market feed. No public Power BI report link was supplied for this revision; Power BI is represented by the existing professional delivery experience.

## Deployment

No build step or runtime dependencies are needed. Vercel's existing Git integration deploys `main`. Preserve existing HTML article URLs so bookmarks continue to work.
