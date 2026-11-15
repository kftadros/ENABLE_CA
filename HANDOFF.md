# ENABLE site: handoff to Claude Code

Static site for **ENABLE** (enableca.org), a student-led accessibility initiative in Irvine, CA.
Goal: get this onto Vercel as a preliminary site.

## What's here

| Path | What it is |
|---|---|
| `index.html`, `our-work.html`, `findings.html`, `team.html`, `get-involved.html`, `privacy.html` | The six pages. Plain HTML, no build step. |
| `styles.css` | Shared base styles. Most layout is inline on the elements. |
| `images/` | Web-sized logos, headshots and graphics used by the pages. |
| `originals/` | Full-size logo and headshot sources, not referenced by the pages. Do not deploy. |
| `vercel.json` | Clean URLs (`/team` serves `team.html`). |

Design source: the "ENABLE website" Design canvas, https://claude.ai/artifact/Nev4WK5LpFqKBSD3pVaVKy
These pages were exported from it. Text and layout match it.

## Deploy

No framework. In Vercel: import the repo, Framework Preset "Other", no build command, output directory = repo root.
Exclude `originals/`, this file and `Irvine_Accessibility_Audit.txt` from the deploy (`.vercelignore`).
Then point the domain `enableca.org` at the project.

## To do

1. **Wire the Report a Barrier form** (`get-involved.html`, script at the bottom).
   `ENDPOINT` is empty, so submitting opens the visitor's email app with the report prefilled.
   Set it to a real destination that emails enableca.org@gmail.com (form service or a Vercel function).
   The photo upload only works once an endpoint accepts `multipart/form-data`.
   Then add one line to `privacy.html` naming where reports are stored.
2. **No analytics or tracking cookies.** `privacy.html` promises none.
3. **Accessibility pass.** Run Lighthouse and axe, plus a keyboard-only pass. Target WCAG 2.1 AA.
   Nothing has been tested with real tools yet.
4. **Phone widths.** Layouts wrap, and Home looked right at 390px, but check all six pages.
5. Optional: move repeated inline styles into `styles.css`, add a favicon and Open Graph tags.

## Rules to keep

- **Preliminary only.** No claimed findings, statistics, testimonials or completed projects,
  except `findings.html`: the preliminary digital accessibility findings (November 2026), taken only from
  `Irvine_Accessibility_Audit.txt`. Keep it labelled preliminary, and do not add facts that are not in that report.
- **Do not add or rewrite content.** Bios and alt text were supplied by the team.
- Keep the skip link, visible focus rings, one `h1` per page, labelled form fields, and alt text as written.
- No autoplay or motion. Never show status by colour alone.
- The three photos on Home and Our Work (curb ramp, laptop, pavilion) are AI-generated illustrations
  and are labelled "(illustration)" in their alt text. The owner has not decided whether to keep them.

## Design tokens

- Font: Montserrat 400/600/700/800, body 17px, line-height 1.55
- Navy `#0F2A4A`, gold `#E3A823` (decorative only, fails contrast as text), off-white `#FAF7EF`,
  light blue `#E6F3F8`, body text `#2D3741`, focus and current-page blue `#1D4ED8`
- Cards: 10px radius, 1px `#EDE6D6` border. Content max width 1200px.

## Facts

- Contact: enableca.org@gmail.com
- Team: Kareem Tadros (Navigation), Shrika Sachinkumar (Engineering), Kayla Sarkissian (Engineering),
  Presly Tong (Advocacy), Hagi Tran (Language)
