# Ezra Umarpeh Volunteer Resource Hub — Build TODO

Scope agreed with client: build a hub **shell** that fully shows the approved Booklet 4 sample, and clearly marks every other booklet and loose-leaf item as "Coming Soon — awaiting production". Do **not** invent content for unproduced items.

## Design system and shell
- [ ] Apply Ezra Umarpeh brand tokens (olive green, deep green, neutral grey, ivory) in `client/src/index.css`
- [ ] Add Fraunces (display) + Inter Tight (UI) from Google Fonts in `client/index.html`
- [ ] Build top header with logo, brand wordmark, search trigger, share/print
- [ ] Build persistent sidebar with booklet index (1–7) + loose-leaf section + manual
- [ ] Build footer with version line and "Internal volunteer reference" note

## Home page
- [ ] Editorial hero using `ezra-hero` image with overlay copy from cover note
- [ ] Pack overview grid: 7 booklet cards + 5 loose-leaf cards, each with status badge
- [ ] Only Booklet 4 shows status "Approved sample"; all others show "Coming soon — awaiting production"
- [ ] Quick-search input that opens command palette
- [ ] "What this hub is" explainer derived from the client cover note

## Booklet 4 detail page
- [ ] Status badge: "Approved sample", version, last updated, audience
- [ ] Sticky on-this-page TOC
- [ ] Sections: Shabbos & Yom Tov awareness, items checklist, Shabbos kettle, fridge/freezer Shabbos mode, hot warmer/lights/AC, Erev Shabbos checklist, Motzei Shabbos checklist
- [ ] Tick-box checklists, numbered procedures restarting at 1, callout styles
- [ ] Clear footnote flag on the Motzei Shabbos section (source limitation)
- [ ] Save + share + print buttons (toast stubs where not implemented)
- [ ] Download links to the Booklet 4 digital + print-ready PDFs

## Coming-soon detail pages (one shared template)
- [ ] Booklets 1, 2, 3, 5, 6, 7 and the 5 loose-leaf items all route to a shared "Coming soon" page
- [ ] Page shows: booklet number, working title, audience, intended contents (from cover note), status, expected next step
- [ ] No fabricated procedural content

## Search + share
- [ ] Cmd/Ctrl + K command palette: searches across Booklet 4 sections + booklet titles + loose-leaf titles
- [ ] Web Share API where available, copy-link fallback, print stylesheet basics
- [ ] Toast confirmations using sonner

## Cover note / about
- [ ] About page that renders the client cover note copy
- [ ] Editorial approach explainer (preserved source content, not invented)
- [ ] Client verification list reminder

## QA + delivery
- [ ] No invisible text, no orphan routes, all "Coming Soon" CTAs clearly disabled or labelled
- [ ] Responsive on mobile (volunteers in the field)
- [ ] Save checkpoint
- [ ] Deliver site preview URL + summary to user
