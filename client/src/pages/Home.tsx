/**
 * Ezra Umarpeh Volunteer Resource Hub — Home
 * Editorial hero, pack overview, Booklet 4 spotlight, source-note panel.
 * Status: Only Booklet 4 is approved. All other items show Coming soon.
 */
import { Link } from "wouter";
import { ArrowUpRight, Search, BookOpen, ClipboardList, ShieldCheck, Flame, FileText, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKLETS, LOOSE_LEAF, PackItem } from "@/content/pack";
import { cn } from "@/lib/utils";

const HERO_IMAGE = "/manus-storage/ezra-hero_28ff3f37.jpg";
const BOOKLET_COVER_IMAGE = "/manus-storage/ezra-booklet-cover_a2199c7f.jpg";
const CARE_IMAGE = "/manus-storage/ezra-care_cacf5a57.jpg";

type Props = {
  onOpenSearch: () => void;
};

export default function Home({ onOpenSearch }: Props) {
  const approved = BOOKLETS.find((b) => b.status === "approved-sample")!;

  return (
    <div>
      <Hero onOpenSearch={onOpenSearch} />

      <Section
        kicker="Pack status"
        title="One approved sample. The rest is in production."
        intro="The Booklet 4 sample has been redesigned around Ezra Umarpeh’s brand and editorial voice. The remaining six booklets and five loose-leaf items have not yet been produced from the source manual, so they appear here as Coming soon — never as fabricated content."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusStat label="Booklets approved" value="1 of 7" />
          <StatusStat label="Loose-leaf items approved" value="0 of 5" />
          <StatusStat label="Pack version" value="v1.0 · May 2026" />
        </div>
      </Section>

      <BookletSpotlight booklet={approved} />

      <Section
        kicker="Booklets"
        title="The seven-booklet pack"
        intro="Each booklet is designed for A5 saddle-stitch print and as a hyperlinked digital PDF, with a distinct accent so volunteers and coordinators can identify them at a glance."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {BOOKLETS.map((b, i) => (
            <BookletCard key={b.slug} item={b} index={i} />
          ))}
        </div>
      </Section>

      <Section
        kicker="Loose-leaf"
        title="Single sheets and cards"
        intro="Designed to match the pack. The room inspection sheet and stock checklist are intended to be laminated and reused; the QR card is wallet-sized."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {LOOSE_LEAF.map((l, i) => (
            <LooseLeafCard key={l.slug} item={l} index={i} />
          ))}
        </div>
      </Section>

      <EditorialApproach />
    </div>
  );
}

function Hero({ onOpenSearch }: { onOpenSearch: () => void }) {
  return (
    <section className="relative -mx-4 sm:-mx-6 lg:mx-0 lg:rounded-2xl overflow-hidden border-b lg:border lg:border-border bg-card">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-0">
        <div className="px-6 sm:px-10 lg:px-12 py-12 lg:py-16 flex flex-col justify-between min-h-[420px]">
          <div className="flex items-center gap-3">
            <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
              Volunteer Resource Hub
            </span>
            <span className="h-px w-12 bg-primary/40" />
            <span className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Internal preview · v1.0
            </span>
          </div>

          <div className="mt-8 lg:mt-10 max-w-xl">
            <h1 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight">
              Caring with excellence,
              <span className="block text-primary">written down where it’s needed.</span>
            </h1>
            <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground">
              A searchable, shareable home for Ezra Umarpeh’s seven-booklet volunteer pack and
              loose-leaf items. Built on the source manual; redesigned for the field, the hub and
              the hospital room.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              onClick={onOpenSearch}
              className="h-11 px-5 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Search className="w-4 h-4" /> Search the pack
              <kbd className="ml-2 text-[10px] uppercase tracking-wider bg-primary-foreground/15 px-1.5 py-0.5 rounded">
                ⌘ K
              </kbd>
            </Button>
            <Link
              href="/booklets/04-shabbos-yom-tov"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border bg-background hover:border-primary/50 transition-colors text-sm"
            >
              Read the approved sample
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[480px]">
          <img
            src={HERO_IMAGE}
            alt="A volunteer delivering an olive-green Shabbos tote bag to a hospital patient at dusk"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/10 to-background/40 lg:via-transparent" />
        </div>
      </div>
    </section>
  );
}

function StatusStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-5 py-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-2 font-display text-2xl tracking-tight">{value}</div>
    </div>
  );
}

function BookletSpotlight({ booklet }: { booklet: PackItem }) {
  return (
    <section className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-stretch">
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
            Approved sample
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight">
            Booklet 04 — Shabbos & Yom Tov Preparation Guide
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The first booklet redesigned and approved as a sample. It demonstrates the cover system,
            procedure numbering, checklist style, callouts and the warm, values-led voice that the
            rest of the pack will follow.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Meta label="Audience" value={booklet.audience} />
            <Meta label="Pages" value={booklet.pages} />
            <Meta label="Version" value="v1.0 · May 2026" />
            <Meta label="Status" value="Approved sample" tone="approved" />
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={`/booklets/${booklet.slug}`}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
            >
              Open Booklet 4
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-primary/50 transition-colors text-sm"
            >
              Why a sample first
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden border border-border bg-card min-h-[280px] lg:min-h-[420px]">
          <img
            src={BOOKLET_COVER_IMAGE}
            alt="Printed A5 saddle-stitched booklet on a linen tablecloth with olive sprigs"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Meta({ label, value, tone }: { label: string; value: string; tone?: "approved" }) {
  return (
    <div>
      <dt className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm">
        {tone === "approved" ? (
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/15 text-primary text-xs uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {value}
          </span>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}

function Section({
  kicker,
  title,
  intro,
  children,
}: {
  kicker: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 lg:mt-24">
      <div className="max-w-3xl">
        <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
          {kicker}
        </span>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight">{title}</h2>
        {intro && (
          <p className="mt-3 text-muted-foreground leading-relaxed text-[15px]">{intro}</p>
        )}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}

const BOOKLET_ICONS = [Sparkles, ShieldCheck, ClipboardList, Flame, FileText, BookOpen, ShieldCheck];

function BookletCard({ item, index }: { item: PackItem; index: number }) {
  const Icon = BOOKLET_ICONS[index % BOOKLET_ICONS.length];
  const approved = item.status === "approved-sample";

  return (
    <Link
      href={`/booklets/${item.slug}`}
      className={cn(
        "group relative flex flex-col h-full p-5 rounded-xl border bg-card transition-all overflow-hidden",
        approved
          ? "border-primary/30 hover:border-primary/60 shadow-[0_1px_0_oklch(0.68_0.158_122.5/0.15)]"
          : "border-border hover:border-primary/40",
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className={cn(
              "w-9 h-9 rounded-md flex items-center justify-center",
              approved
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="w-4 h-4" />
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              Booklet {item.number}
            </div>
            <div className="font-display text-lg tracking-tight leading-snug mt-0.5">
              {item.title}
            </div>
          </div>
        </div>
        <StatusPill status={item.status} />
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {item.summary}
      </p>

      <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
        <span>{item.audience}</span>
        <ArrowUpRight
          className={cn(
            "w-4 h-4 transition-transform",
            "group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
            approved ? "text-primary" : "",
          )}
        />
      </div>
    </Link>
  );
}

function LooseLeafCard({ item, index }: { item: PackItem; index: number }) {
  return (
    <Link
      href={`/loose-leaf/${item.slug}`}
      className="group flex flex-col h-full p-5 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors"
    >
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Loose-leaf · {item.number}
        </div>
        <StatusPill status={item.status} />
      </div>
      <div className="mt-3 font-display text-lg tracking-tight leading-snug">{item.title}</div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
      <div className="mt-auto pt-4 text-xs text-muted-foreground border-t border-border/60 mt-5 flex items-center justify-between">
        <span>{item.pages}</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </Link>
  );
}

function StatusPill({ status }: { status: PackItem["status"] }) {
  if (status === "approved-sample") {
    return (
      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-primary/15 text-primary font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
        Approved sample
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-muted text-muted-foreground">
      <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
      Coming soon
    </span>
  );
}

function EditorialApproach() {
  return (
    <section className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
      <div className="relative rounded-xl overflow-hidden border border-border bg-card min-h-[280px]">
        <img
          src={CARE_IMAGE}
          alt="Hands passing a small kraft paper bag sealed with a heart sticker across a reception counter"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
          Editorial approach
        </span>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl tracking-tight">
          Preserved content, rebuilt for the way volunteers actually work.
        </h2>
        <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
          <p>
            The original manual content is the source of truth. Broken lists have been rebuilt,
            procedure numbering has been restarted within each procedure, terminology has been
            standardised, and operational points have been organised into a clearer A5 booklet
            format.
          </p>
          <p>
            No new procedures have been invented. Where the source was not explicit — including the
            Motzei Shabbos clear-up — the gap is flagged in the booklet rather than guessed.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            Read the cover note in full
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
