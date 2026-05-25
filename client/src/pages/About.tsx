import { Link } from "wouter";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <article className="max-w-3xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to the hub
      </Link>

      <header className="mt-6 pb-6 border-b border-border">
        <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
          Cover note · For the client
        </span>
        <h1 className="mt-3 font-display text-4xl tracking-tight leading-tight">
          Booklet 4 — Shabbos & Yom Tov Preparation Guide
        </h1>
        <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
          This hub is a concept preview built on top of the approved Booklet 4 sample. Its purpose
          is to demonstrate how the seven-booklet pack and loose-leaf items will work as a
          searchable, shareable resource for volunteers and coordinators — before the rest of the
          pack is produced.
        </p>
      </header>

      <Section title="What you’re looking at">
        <p>
          Booklet 4 is presented here as a first, fully-designed sample of the pack. It’s a
          deliberately compact piece — eight A5 pages, suitable for saddle-stitch printing — chosen
          because it puts the system through its paces: procedures, checklists, callouts, a small
          table, and the warm, values-led voice the source manual already has.
        </p>
        <p>
          The aim is to agree the visual direction and editorial approach here, on a manageable
          piece, before applying the same system to the rest of the seven-booklet pack and the
          loose-leaf items.
        </p>
      </Section>

      <Section title="How we arrived at this design">
        <p>
          The cover and section openers carry the Ezra Umarpeh wheelchair-and-heart mark, paired
          with a calm, editorial typography system — a humanist sans for body text and a confident
          serif display for headings — set on a warm ivory background.
        </p>
        <p>
          We’ve borrowed the website’s colour cues without leaning on a corporate palette: an olive
          green as the primary accent, deep green for emphasis, and quiet neutrals for the
          operational content. The booklet feels like a community-rooted reference, not a corporate
          brochure, and reads cleanly at A5.
        </p>
        <p>
          Inside, the source manual is the source of truth. Where the original had broken bullet
          lists, duplicated headings or continuous step numbering across unrelated procedures, we’ve
          rebuilt every list as a proper list, restarted numbered steps at 1 within each procedure,
          and standardised terminology (for example, “hospital room” as the primary term, with
          “Shabbos room” used only where the room’s Shabbos function is specifically meant).
        </p>
      </Section>

      <Section title="One thing to flag in this sample">
        <p>
          The source manual does not contain a dedicated Motzei Shabbos section. The Motzei Shabbos
          clear-up checklist in Booklet 4 has been assembled only from related appliance,
          cleanliness, stock-management and reporting procedures already present in the manual, and
          it is clearly marked as such in the booklet. We recommend that Ezra Umarpeh review this
          page specifically and confirm whether additional steps should be added before final
          print.
        </p>
      </Section>

      <Section title="What we’d like from you">
        <p>
          A review of Booklet 4 as a printable A5 booklet: the visual direction, the editorial
          voice, the depth and ordering of the content, and the flagged Motzei Shabbos section.
        </p>
        <p>
          Once it’s approved, we will produce the remaining six booklets — About Ezra Umarpeh, the
          Volunteer Handbook, Hospital Room Operations, Reporting & Incidents, the Trainer’s Pack,
          and Health, Safety & Safeguarding — plus the five loose-leaf items, using the same system
          and editorial rules.
        </p>
        <p>
          A short Client Verification List will accompany the final pack, listing items we
          recommend you double-check before printing — accommodation arrangements, phone numbers,
          form URLs, named role titles, and anything else that may have changed.
        </p>
      </Section>

      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        <Link
          href="/booklets/04-shabbos-yom-tov"
          className="group p-5 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-between"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-primary">Approved sample</div>
            <div className="font-display text-lg mt-1">Read Booklet 04</div>
          </div>
          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href="/"
          className="group p-5 rounded-md border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Overview</div>
            <div className="font-display text-lg mt-1">See the pack</div>
          </div>
          <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </article>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-2xl tracking-tight">{title}</h2>
      <div className="mt-3 space-y-4 text-[15px] leading-relaxed text-foreground/90">{children}</div>
    </section>
  );
}
