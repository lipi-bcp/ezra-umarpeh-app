/**
 * Ezra Umarpeh Volunteer Resource Hub — Home
 * Pack v1.0 — all booklets and loose-leaf items live.
 * Editorial hero, pack status, booklet grid, loose-leaf grid, source approach.
 */
import { Link } from "wouter";
import {
  ArrowUpRight,
  Search,
  BookOpen,
  ClipboardList,
  ShieldCheck,
  Flame,
  FileText,
  Sparkles,
  HeartHandshake,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKLETS, LOOSE_LEAF, PackItem, itemPath, PACK_VERSION } from "@/content/pack";
import { cn } from "@/lib/utils";

type Props = {
  onOpenSearch: () => void;
};

export default function Home({ onOpenSearch }: Props) {
  return (
    <div>
      <Hero onOpenSearch={onOpenSearch} />

      <Section
        kicker="Pack status"
        title="The full volunteer pack is now live."
        intro="All seven booklets and five loose-leaf items have been produced from the Ezra Umarpeh Volunteer Academy Manual, set on the approved Booklet 4 design system and ready for the verification list before print."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatusStat label="Booklets" value={`${BOOKLETS.length} of ${BOOKLETS.length}`} />
          <StatusStat label="Loose-leaf items" value={`${LOOSE_LEAF.length} of ${LOOSE_LEAF.length}`} />
          <StatusStat label="Pack version" value={PACK_VERSION} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/pack-contents"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border bg-card hover:border-primary/40 text-sm transition-colors"
          >
            View pack contents <ArrowUpRight className="w-4 h-4" />
          </Link>
          <Link
            href="/verification-list"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border bg-card hover:border-primary/40 text-sm transition-colors"
          >
            Verification list <ShieldCheck className="w-4 h-4" />
          </Link>
          <Link
            href="/design-system"
            className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border bg-card hover:border-primary/40 text-sm transition-colors"
          >
            Design system <Sparkles className="w-4 h-4" />
          </Link>
        </div>
      </Section>

      <BookletSpotlight />

      <Section
        kicker="Booklets"
        title="Seven booklets, one continuous design system"
        intro="Each booklet is A5 saddle-stitch, with its own accent colour and audience. Together they form a complete onboarding journey for new volunteers and a working reference for active ones."
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
          {LOOSE_LEAF.map((l) => (
            <LooseLeafCard key={l.slug} item={l} />
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
              {PACK_VERSION}
            </span>
          </div>

          <div className="mt-8 lg:mt-10 max-w-xl">
            <h1 className="font-display text-[clamp(2.2rem,4.4vw,3.6rem)] leading-[1.05] tracking-tight">
              Caring with excellence,
              <span className="block text-primary">written down where it’s needed.</span>
            </h1>
            <p className="mt-5 text-base sm:text-[17px] leading-relaxed text-muted-foreground">
              A searchable, shareable home for Ezra Umarpeh’s complete volunteer pack — seven A5
              booklets and five loose-leaf items, rebuilt from the source manual for the field, the
              hub and the hospital room.
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
              href="/pack-contents"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border bg-background hover:border-primary/50 transition-colors text-sm"
            >
              Browse pack contents
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="relative min-h-[320px] lg:min-h-[480px] bg-gradient-to-br from-primary/15 via-primary/5 to-primary/25 flex items-center justify-center overflow-hidden">
          <svg
            aria-hidden="true"
            viewBox="0 0 200 200"
            className="w-40 h-40 lg:w-56 lg:h-56 text-primary/70"
            fill="currentColor"
          >
            <path d="M100 30c-22 0-40 18-40 40 0 30 40 70 40 70s40-40 40-70c0-22-18-40-40-40zm0 56a16 16 0 1 1 0-32 16 16 0 0 1 0 32z" />
          </svg>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/5 to-background/30 lg:via-transparent" />
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

function BookletSpotlight() {
  const featured = BOOKLETS.find((b) => b.slug === "04-shabbos-yom-tov") ?? BOOKLETS[0];
  return (
    <section className="mt-16 lg:mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-12 items-stretch">
        <div className="order-2 lg:order-1 flex flex-col justify-center">
          <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
            Reference sample
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl tracking-tight">
            Booklet 04 — Shabbos & Yom Tov Preparation Guide
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The booklet that set the design system for the rest of the pack. It demonstrates the
            cover treatment, procedure numbering, checklist style, callouts and the warm,
            values-led voice carried through every other booklet.
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
            <Meta label="Audience" value={featured.audience} />
            <Meta label="Pages" value={featured.pages} />
            <Meta label="Version" value={PACK_VERSION} />
            <Meta label="Status" value="Live" tone="approved" />
          </dl>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={itemPath(featured)}
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
            >
              Open Booklet 4
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-primary/50 transition-colors text-sm"
            >
              How the hub is built
            </Link>
          </div>
        </div>

        <div className="order-1 lg:order-2 relative rounded-xl overflow-hidden border border-border bg-gradient-to-br from-primary/10 via-card to-primary/20 min-h-[280px] lg:min-h-[420px] flex items-center justify-center">
          <div className="text-center px-8">
            <div className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
              Booklet 04
            </div>
            <div className="mt-4 font-display text-3xl lg:text-4xl tracking-tight leading-tight text-foreground/80">
              Shabbos &amp; Yom&nbsp;Tov
              <br />
              Preparation Guide
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-8 h-px bg-primary/40" />
              Ezra Umarpeh
              <span className="w-8 h-px bg-primary/40" />
            </div>
          </div>
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

const BOOKLET_ICONS = [
  HeartHandshake,
  BookOpen,
  ClipboardList,
  Flame,
  FileText,
  GraduationCap,
  ShieldCheck,
];

function BookletCard({ item, index }: { item: PackItem; index: number }) {
  const Icon = BOOKLET_ICONS[index % BOOKLET_ICONS.length];
  return (
    <Link
      href={itemPath(item)}
      className={cn(
        "group relative flex flex-col h-full p-5 rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:-translate-y-0.5 overflow-hidden",
      )}
    >
      <div className="flex items-start gap-3">
        <div
          className="w-9 h-9 rounded-md flex items-center justify-center text-white"
          style={{ background: item.accent }}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Booklet {item.number}
          </div>
          <div className="font-display text-lg tracking-tight leading-snug mt-0.5 truncate">
            {item.title}
          </div>
        </div>
      </div>

      <p className="mt-4 text-sm text-muted-foreground leading-relaxed line-clamp-3">
        {item.summary}
      </p>

      <div className="mt-5 pt-4 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground">
        <span>
          {item.audience} · {item.pages}
        </span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-primary" />
      </div>
    </Link>
  );
}

function LooseLeafCard({ item }: { item: PackItem }) {
  return (
    <Link
      href={itemPath(item)}
      className="group flex flex-col h-full p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:-translate-y-0.5 transition-all"
    >
      <div className="flex items-center justify-between">
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          Loose-leaf · {item.number}
        </div>
        <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-primary/15 text-primary font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Live
        </span>
      </div>
      <div className="mt-3 font-display text-lg tracking-tight leading-snug">{item.title}</div>
      <p className="mt-2 text-sm text-muted-foreground line-clamp-3">{item.summary}</p>
      <div className="mt-auto pt-4 text-xs text-muted-foreground border-t border-border/60 mt-5 flex items-center justify-between">
        <span>{item.pages}</span>
        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-primary" />
      </div>
    </Link>
  );
}

function EditorialApproach() {
  return (
    <section className="mt-16 lg:mt-24 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-stretch">
      <div className="relative rounded-xl overflow-hidden border border-border bg-gradient-to-tr from-primary/15 via-card to-primary/10 min-h-[280px] flex items-center justify-center">
        <svg
          aria-hidden="true"
          viewBox="0 0 120 120"
          className="w-32 h-32 text-primary/60"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M60 95s-30-18-30-42a18 18 0 0 1 30-13 18 18 0 0 1 30 13c0 24-30 42-30 42z" />
          <circle cx="60" cy="48" r="4" fill="currentColor" />
        </svg>
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
            No new procedures have been invented. Where the source was not explicit — including
            the Motzei Shabbos clear-up — the gap is flagged in the booklet rather than guessed.
            The full list of editorial decisions lives in the Editor’s Notes that ship with the
            pack.
          </p>
        </div>
        <div className="mt-6">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-primary/50 transition-colors text-sm"
          >
            Read about the hub
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
