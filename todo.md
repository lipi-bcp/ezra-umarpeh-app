# Resource Hub — v2 (full pack)

The full Ezra Umarpeh Volunteer Pack is now produced. The hub moves from the shell concept to a populated reference site.

- [ ] Re-read current site files: `content/pack.ts`, `App.tsx`, `Booklet4.tsx`, `ComingSoonItem.tsx`, `Home.tsx`, `About.tsx`, `SiteShell.tsx`, `CommandSearch.tsx`.
- [ ] Rebuild `content/pack.ts` so every booklet (1–7) and every loose-leaf item (L1–L5) carries real section data and a populated search index.
- [ ] Replace the bespoke Booklet4 page with a data-driven `BookletDetail.tsx` so all seven booklets render through one component.
- [ ] Replace `ComingSoonItem.tsx` with `LooseleafDetail.tsx` for the five loose-leaf items.
- [ ] Wire routes for `/booklet/:slug` and `/loose-leaf/:slug` in `App.tsx`; keep a permanent redirect from `/booklet/4` and from any old "Coming Soon" paths.
- [ ] Update Home: remove Coming Soon treatment, show 7 booklets + 5 loose-leaf items as live, add a Pack-pages section.
- [ ] Add `/pack/contents`, `/pack/design-system`, `/pack/verification` pages, fed from the pack meta content.
- [ ] Expand CommandSearch index to cover every booklet section + every loose-leaf item.
- [ ] Upload all booklet + loose-leaf + meta PDFs to webdev assets and wire Download PDF buttons.
- [ ] QA: keyboard, focus rings, mobile, brand consistency. Checkpoint and deliver.
