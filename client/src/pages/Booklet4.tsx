import { useEffect, useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, Printer, Share2, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { BlockRenderer, SaveToggle } from "@/components/BlockRenderer";
import { BOOKLET_4_META, BOOKLET_4_SECTIONS, getItemBySlug } from "@/content/pack";

export default function Booklet4() {
  const item = getItemBySlug("04-shabbos-yom-tov")!;
  const [activeId, setActiveId] = useState<string>(BOOKLET_4_SECTIONS[0].id);

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
      }
    }
  }, []);

  useEffect(() => {
    const sections = BOOKLET_4_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      Boolean,
    ) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const toc = useMemo(
    () => BOOKLET_4_SECTIONS.map((s) => ({ id: s.id, label: `${s.number}. ${s.title}` })),
    [],
  );

  const share = () => {
    if (navigator.share) {
      navigator
        .share({ title: "Booklet 4 — Shabbos & Yom Tov Preparation Guide", url: window.location.href })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

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
          <span>Booklet {item.number}</span>
          <span className="h-px w-8 bg-border" />
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-primary/15 text-primary">
            <Sparkles className="w-3 h-3" /> {BOOKLET_4_META.status}
          </span>
          <span className="text-muted-foreground/70">·</span>
          <span>{BOOKLET_4_META.version}</span>
        </div>

        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight">
          Shabbos & Yom Tov Preparation Guide
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          A specialist booklet for Shabbos shift volunteers. Use this guide to plan an Erev Shabbos
          shift, prepare the hospital room, and report cleanly after Shabbos.
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          <Meta label="Audience" value={BOOKLET_4_META.audience} />
          <Meta label="Pages" value={item.pages} />
          <Meta label="Last updated" value={BOOKLET_4_META.lastUpdated} />
          <Meta label="Format" value="A5 saddle-stitch" />
        </div>

        <div className="mt-7 flex flex-wrap gap-2 no-print">
          <SaveToggle slug={item.slug} />
          <Button variant="outline" onClick={share} className="bg-card">
            <Share2 className="w-4 h-4" /> Share
          </Button>
          <Button variant="outline" onClick={() => window.print()} className="bg-card">
            <Printer className="w-4 h-4" /> Print
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.message("PDF download will go here", {
                description:
                  "The approved digital and print-ready PDFs will be linked here once delivered to the hub.",
              })
            }
            className="bg-card"
          >
            <Download className="w-4 h-4" /> Download PDF
          </Button>
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-12">
        <div className="min-w-0 max-w-2xl">
          {BOOKLET_4_SECTIONS.map((s, idx) => (
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
                    storageKey={`ezra.booklet04.${s.id}.${b.kind}.${i}`}
                  />
                ))}
              </div>
              {idx === BOOKLET_4_SECTIONS.length - 1 && <ClosingNote />}
            </section>
          ))}
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
              Your checklist ticks are saved on this device. Refresh-safe, but private to your
              browser.
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

function ClosingNote() {
  return (
    <div className="mt-12 rounded-md border border-dashed border-border bg-card/70 px-5 py-4">
      <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Client verification
      </div>
      <p className="mt-2 text-[14.5px] leading-relaxed text-foreground/85">
        Before this booklet is printed, Ezra Umarpeh to confirm: hospital-specific permissions for
        candles, flames and electrical items; appliance lists per ward; and any additional
        site-specific or halachic steps required for the Erev Shabbos and Motzei Shabbos checklists.
      </p>
    </div>
  );
}
