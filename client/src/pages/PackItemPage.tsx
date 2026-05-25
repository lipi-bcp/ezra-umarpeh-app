import { useEffect, useMemo, useState } from "react";
import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Printer, Share2, Download, BookOpen, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BlockRenderer, SaveToggle } from "@/components/BlockRenderer";
import {
  ALL_ITEMS,
  BOOKLETS,
  LOOSE_LEAF,
  PACK_VERSION,
  PackItem,
  getItemBySlug,
  itemPath,
} from "@/content/pack";

const accentBadge: Record<PackItem["accent"], string> = {
  ezra: "bg-primary/15 text-primary",
  sage: "bg-emerald-100 text-emerald-800",
  forest: "bg-green-100 text-green-900",
  slate: "bg-slate-200 text-slate-800",
  amber: "bg-amber-100 text-amber-900",
  plum: "bg-fuchsia-100 text-fuchsia-900",
  crimson: "bg-rose-100 text-rose-900",
  neutral: "bg-muted text-foreground/80",
};

export default function PackItemPage() {
  const [, bookletParams] = useRoute("/booklets/:slug");
  const [, looseParams] = useRoute("/loose-leaf/:slug");
  const slug = bookletParams?.slug ?? looseParams?.slug ?? "";
  const item = getItemBySlug(slug);

  if (!item) {
    return (
      <div className="py-24 text-center">
        <h1 className="font-display text-2xl">Item not found</h1>
        <p className="mt-2 text-muted-foreground">The requested item is not in this pack.</p>
        <Link href="/" className="mt-6 inline-flex items-center gap-2 text-primary">
          <ArrowLeft className="w-4 h-4" /> Back to the hub
        </Link>
      </div>
    );
  }

  const sections = item.sections;
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [item.slug]);

  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );
    els.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [item.slug, sections]);

  const toc = useMemo(
    () => sections.map((s) => ({ id: s.id, label: `${s.number}. ${s.title}` })),
    [sections],
  );

  const peers = item.group === "booklet" ? BOOKLETS : LOOSE_LEAF;
  const idx = peers.findIndex((p) => p.slug === item.slug);
  const prev = idx > 0 ? peers[idx - 1] : undefined;
  const next = idx >= 0 && idx < peers.length - 1 ? peers[idx + 1] : undefined;

  const share = () => {
    if (navigator.share) {
      navigator
        .share({ title: `${item.title} — Ezra Umarpeh`, url: window.location.href })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  const Icon = item.group === "booklet" ? BookOpen : FileText;
  const groupLabel = item.group === "booklet" ? "Booklet" : "Loose-leaf";

  return (
    <article>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to the hub
      </Link>

      <header className="mt-6 pb-8 border-b border-border">
        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Icon className="w-3.5 h-3.5" /> {groupLabel} {item.number}
          </span>
          <span className="h-px w-8 bg-border" />
          <span
            className={
              "inline-flex items-center gap-1.5 px-2 py-0.5 rounded " + accentBadge[item.accent]
            }
          >
            Live
          </span>
          <span className="text-muted-foreground/70">·</span>
          <span>{PACK_VERSION}</span>
        </div>

        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight">
          {item.title}
        </h1>
        {item.subtitle && (
          <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{item.subtitle}.</p>
        )}

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          <Meta label="Audience" value={item.audience} />
          <Meta label="Pages" value={item.pages} />
          <Meta label="Group" value={groupLabel} />
          <Meta label="Format" value={item.group === "booklet" ? "A5 saddle-stitch" : "Loose-leaf"} />
        </div>

        <div className="mt-7 flex flex-wrap gap-2 no-print">
          <SaveToggle slug={item.slug} />
          <Button variant="outline" onClick={share} className="bg-card">
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button variant="outline" onClick={() => window.print()} className="bg-card">
            <Printer className="w-4 h-4" /> Print
          </Button>
          <a
            href={item.pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 px-3 rounded-md border border-border bg-card text-sm font-medium hover:bg-accent transition-colors"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
        <div className="min-w-0 max-w-2xl">
          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              className="scroll-mt-24 pb-12 mb-12 border-b border-border last:border-0 last:pb-0 last:mb-0"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-primary text-3xl tracking-tight">{s.number}</span>
                <h2 className="font-display text-2xl sm:text-[26px] tracking-tight leading-snug">
                  {s.title}
                </h2>
              </div>
              {s.intro && (
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground max-w-prose">
                  {s.intro}
                </p>
              )}
              <div className="mt-6 space-y-5">
                {s.blocks.map((b, i) => (
                  <BlockRenderer
                    key={i}
                    block={b}
                    storageKey={`ezra.${item.slug}.${s.id}.${b.kind}.${i}`}
                  />
                ))}
              </div>
            </section>
          ))}

          <nav className="mt-4 grid sm:grid-cols-2 gap-3 no-print">
            {prev ? (
              <Link
                href={itemPath(prev)}
                className="group rounded-md border border-border bg-card hover:border-primary/40 transition-colors p-4"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Previous
                </div>
                <div className="mt-1 inline-flex items-center gap-2 font-medium">
                  <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                  {prev.title}
                </div>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={itemPath(next)}
                className="group rounded-md border border-border bg-card hover:border-primary/40 transition-colors p-4 sm:text-right"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Next
                </div>
                <div className="mt-1 inline-flex items-center gap-2 font-medium sm:justify-end">
                  {next.title}
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary" />
                </div>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-[92px]">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              On this page
            </div>
            <ul className="space-y-1.5 text-sm">
              {toc.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={
                      "block py-1.5 pl-3 border-l-2 transition-colors " +
                      (activeId === s.id
                        ? "border-primary text-foreground"
                        : "border-border text-muted-foreground hover:text-foreground")
                    }
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-[11px] text-muted-foreground leading-relaxed">
              Checklist ticks are saved on this device. Refresh-safe, private to your browser.
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm">{value}</div>
    </div>
  );
}

// Re-export ALL_ITEMS so tree-shaking does not drop content imports
export const _allItemsCount = ALL_ITEMS.length;
