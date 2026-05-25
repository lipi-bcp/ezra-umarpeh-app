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
          About this hub · For Ezra Umarpeh
        </span>
        <h1 className="mt-3 font-display text-4xl tracking-tight leading-tight">
          A searchable, shareable home for the volunteer pack
        </h1>
        <p className="mt-4 text-muted-foreground text-[15px] leading-relaxed">
          The Volunteer Resource Hub is the digital companion to the printed Ezra Umarpeh
          Volunteer Pack — seven A5 booklets and five loose-leaf items, all sourced from the
          Volunteer Academy Manual and set in a single design system.
        </p>
      </header>

      <Section title="What this hub is">
        <p>
          A single, searchable home for the whole pack. Volunteers and coordinators can find a
          procedure quickly, share a deep link to a specific section, print a booklet on demand,
          and download the print-ready PDF for the print shop. The pack is also fully usable on a
          phone in a hospital corridor.
        </p>
        <p>
          Every booklet on this site mirrors the printed A5 booklet. The on-this-page contents
          stays sticky on desktop, callouts and checklists are styled the same as in print, and
          each item has its own download for the print-ready PDF.
        </p>
      </Section>

      <Section title="How we built it">
        <p>
          The Ezra Umarpeh wheelchair-and-heart mark anchors the brand. Headings are set in
          Fraunces, an editorial serif with a calm, dignified tone. Body copy is set in Inter
          Tight for clarity at small sizes. The background is a warm ivory, with an olive-green
          accent drawn from the logo.
        </p>
        <p>
          Each booklet has its own accent colour — sage, forest, slate, Ezra olive, amber, plum
          and crimson — so volunteers can identify booklets at a glance both in print and on the
          shelf.
        </p>
        <p>
          The source manual is the source of truth. We have rebuilt broken lists into proper
          lists, restarted numbered steps at 1 within each procedure, standardised terminology
          (for example, “hospital room” as the primary term), and reorganised material so each
          booklet stands on its own.
        </p>
      </Section>

      <Section title="Editorial gaps we have flagged">
        <p>
          We have not invented procedures. Where the source manual was not explicit, the gap is
          flagged in the booklet rather than guessed — most notably the Motzei Shabbos clear-up
          checklist in Booklet 4, which is assembled only from related appliance, cleanliness,
          stock-management and reporting procedures already in the manual.
        </p>
        <p>
          The full list of editorial decisions lives in the Editor’s Notes that ship with the
          pack. The Client Verification List details every operational item that needs Ezra
          Umarpeh sign-off before print — the named safeguarding lead, the live QR systems,
          approved cleaning products, the office phone number, and so on.
        </p>
      </Section>

      <Section title="What to do next">
        <p>
          Use the verification list to confirm operational details, then approve the pack for
          print. The hub will remain in sync with the printed pack and can be extended over time
          with additional sections, translations, or volunteer-specific views.
        </p>
      </Section>

      <div className="mt-12 grid sm:grid-cols-2 gap-3">
        <Link
          href="/pack-contents"
          className="group p-5 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors flex items-center justify-between"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-primary">Pack contents</div>
            <div className="font-display text-lg mt-1">See every booklet</div>
          </div>
          <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-0.5 transition-transform" />
        </Link>
        <Link
          href="/verification-list"
          className="group p-5 rounded-md border border-border bg-card hover:border-primary/40 transition-colors flex items-center justify-between"
        >
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              Before print
            </div>
            <div className="font-display text-lg mt-1">Client verification list</div>
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
