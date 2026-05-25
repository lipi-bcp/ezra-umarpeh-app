# Design ideas — Ezra Umarpeh Volunteer Resource Hub

The site adapts the Booklet 4 client cover note into a searchable, shareable resource hub for volunteer-facing material. The brand anchor is the supplied Ezra Umarpeh logo: olive-green wheelchair mark with a heart, soft grey wordmark, and a warm community-care voice. The colour direction must stay close to that identity: olive/lime green `#86A817`, deep green `#5E7810`, neutral grey `#929497`, ivory off-white, and a single warm accent.

<response>
<text>
**Approach A — “Hospital-Calm Editorial”**

* **Design Movement**: Editorial healthcare publishing meets Swiss documentary design. Inspired by quiet, dignified hospital wayfinding and printed care manuals.
* **Core Principles**: calm clarity, generous breathing room, dignity over decoration, print-feel typography in a digital surface.
* **Color Philosophy**: Ivory `#F7F6F1` base with Ezra olive `#86A817` as the only saturated accent. Deep green `#3F5A0E` for headings, warm grey `#5B5F63` for body. Emotional intent: trustworthy, unhurried, kind.
* **Layout Paradigm**: Asymmetric two-column editorial. Left rail holds booklet metadata (number, audience, status); right column is long-form content. Sticky table of contents on desktop. No centred hero stack.
* **Signature Elements**: a thin olive vertical rule that separates rail and content; a small wheelchair-heart glyph echo as section bullets; numbered procedure circles that match the printed booklet.
* **Interaction Philosophy**: nothing flashy. Hover states reveal a quiet olive underline; cards lift 2px; checklists tick with a soft scale-in.
* **Animation**: 160–220ms ease-out for cards, 120ms for buttons, staggered 40ms reveals on lists. No parallax, no scroll-jacking.
* **Typography System**: Fraunces (display, semi-bold) + Inter Tight (body, 400/500/600). Headings tracked tight; body 16px with 1.55 line-height. Numerals tabular for checklists.
</text>
<probability>0.07</probability>
</response>

<response>
<text>
**Approach B — “Community Care Magazine”**

* **Design Movement**: Warm community magazine; reminiscent of Jewish community publications and modern non-profit annual reports.
* **Core Principles**: warmth, storytelling, photographic feel, human-first.
* **Color Philosophy**: Cream `#FAF6EC`, olive `#86A817`, deep forest `#2E4A12`, terracotta accent `#C56A3E` used sparingly for highlights/CTA. Emotional intent: hospitable, dignified, community-rooted.
* **Layout Paradigm**: Magazine grid with a tall hero spread, oversized booklet covers, pull-quotes from the manual, and a feature-story treatment for each booklet.
* **Signature Elements**: rounded photo cards with subtle grain, hand-drawn olive sprig divider, kicker labels in small-caps.
* **Interaction Philosophy**: scroll-revealed story sections, gentle cross-fades between booklet covers, hover-tilt on cards.
* **Animation**: 220–320ms ease-out, soft fades, no aggressive springs.
* **Typography System**: Playfair Display (display) + Source Serif 4 (subhead) + Inter (UI). Mixed serif/sans gives a community-publication feel.
</text>
<probability>0.06</probability>
</response>

<response>
<text>
**Approach C — “Operational Field Manual”**

* **Design Movement**: Modern operations console meets hospital signage. Inspired by Linear, GitHub docs, and TfL wayfinding clarity.
* **Core Principles**: scannable, searchable, command-palette first, mobile-ready for volunteers in the field.
* **Color Philosophy**: Near-white `#FBFBF9`, Ezra olive `#86A817`, slate `#3B3F45`. Status colours used only where genuinely operational. Emotional intent: dependable, professional, in-the-moment.
* **Layout Paradigm**: Persistent left sidebar with booklet index, top utility bar with search + share, content body with sticky on-this-page, checklist-first formatting.
* **Signature Elements**: command palette `Cmd/Ctrl + K` search, status badges (Draft / Approved / For verification), procedure step circles, “save to phone” share row.
* **Interaction Philosophy**: keyboard-first, instant search, quiet motion. Everything important is reachable in two clicks.
* **Animation**: 120–200ms ease-out. No animation on keyboard-driven actions.
* **Typography System**: Geist (UI/body) + Geist Mono (procedure codes/labels) + Fraunces (booklet titles for warmth).
</text>
<probability>0.08</probability>
</response>

## Selected direction

**Approach C — Operational Field Manual**, lightly warmed with Approach A’s editorial calm. Rationale: the cover note explicitly asks for a *searchable, shareable resource hub* used by volunteers, often on a phone, in a hospital. Command-palette search, sidebar navigation, and checklist-first content match real volunteer behaviour. The warmth comes from Fraunces booklet titles, the olive-and-cream brand, and Ezra Umarpeh’s caring voice, so the result is professional but never cold.

## File-level reminders for this direction

* Header: brand mark left, search trigger centre, share + print right.
* Sidebar: booklet index (1–7) + loose-leaf items + manual.
* Booklet page: status badge, audience, last updated, version, sticky on-this-page, checklists with real tick boxes, “Save / Share” row.
* Tone: dignified, practical, community-care.
* Avoid: purple gradients, centred hero stacks, generic rounded-2xl card spam, Inter-only typography.
