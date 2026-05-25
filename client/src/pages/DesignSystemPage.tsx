import DocSheet from "./DocSheet";
import { PACK_META, PACK_VERSION } from "@/content/pack";

const swatches = [
  { name: "Ezra olive (primary)", value: "#8AA82E", text: "white" },
  { name: "Forest", value: "#3B5A2A", text: "white" },
  { name: "Sage", value: "#7C9B5E", text: "white" },
  { name: "Amber", value: "#B7771F", text: "white" },
  { name: "Slate", value: "#4B5563", text: "white" },
  { name: "Plum", value: "#6B2C5F", text: "white" },
  { name: "Crimson", value: "#9B2C2C", text: "white" },
  { name: "Ivory background", value: "#F8F5EE", text: "black" },
  { name: "Ink (body)", value: "#1F2937", text: "white" },
];

export default function DesignSystemPage() {
  return (
    <DocSheet
      kicker={`Design system · ${PACK_VERSION}`}
      title="Pack design system"
      intro="A summary of the typographic, colour and editorial rules used across every booklet and loose-leaf item, so the pack stays consistent in print and on screen."
      pdfUrl={PACK_META.designSystemPdfUrl}
    >
      <h2>Typography</h2>
      <p>
        Display headings use <strong>Fraunces</strong>, an editorial serif with a calm, dignified
        tone. Body copy and UI use <strong>Inter Tight</strong> for clarity at small sizes. Monospace
        labels use the system mono stack for callout tags and section numbers.
      </p>
      <ul>
        <li>Booklet titles: Fraunces, 32 / 36 pt, tracking −1.</li>
        <li>Section headings: Fraunces, 22 pt with a coloured section number to the left.</li>
        <li>Body: Inter Tight, 10.5 / 14.5 pt, measure ~62 characters.</li>
        <li>Callouts: Inter Tight medium, ivory background with a coloured rule.</li>
      </ul>

      <h2>Colour</h2>
      <p>
        Each booklet has a single accent colour drawn from the Ezra Umarpeh palette. The same palette
        powers status badges and section numbers on the website.
      </p>
      <div className="not-prose grid grid-cols-2 sm:grid-cols-3 gap-3 my-4">
        {swatches.map((s) => (
          <div
            key={s.name}
            className="rounded-md p-4"
            style={{ background: s.value, color: s.text === "white" ? "#fff" : "#111" }}
          >
            <div className="text-[11px] uppercase tracking-[0.14em] opacity-80">{s.name}</div>
            <div className="font-mono text-sm">{s.value}</div>
          </div>
        ))}
      </div>

      <h2>Editorial rules</h2>
      <ul>
        <li>Content is sourced strictly from the Ezra Umarpeh Volunteer Academy Manual.</li>
        <li>Checklists are paramount: actionable, single-line, present tense.</li>
        <li>Callouts label themselves: Key, Important, Tip, or Note.</li>
        <li>Footnotes carry source pointers, never new procedures.</li>
        <li>British English throughout; Yiddish / Hebrew terms italicised on first use.</li>
      </ul>

      <h2>Layout</h2>
      <p>
        Booklets are A5 saddle-stitch in multiples of four pages. Loose-leaf items are A4 (or wallet
        card for the QR card). The website mirrors the same hierarchy: section number, title,
        intro, then content blocks. The on-this-page TOC stays sticky on desktop.
      </p>
    </DocSheet>
  );
}
