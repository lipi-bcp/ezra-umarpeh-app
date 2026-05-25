import { Link } from "wouter";
import { ArrowLeft, Download, BookOpen, FileText } from "lucide-react";
import { BOOKLETS, LOOSE_LEAF, PACK_META, PACK_VERSION, itemPath } from "@/content/pack";

export default function PackContentsPage() {
  return (
    <article className="max-w-3xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to the hub
      </Link>

      <header className="mt-6 pb-8 border-b border-border">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          Pack contents · {PACK_VERSION}
        </div>
        <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight">
          Everything in the pack
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">
          Seven A5 saddle-stitch booklets plus five loose-leaf items. The whole pack is sourced from
          the Ezra Umarpeh Volunteer Academy Manual.
        </p>
        <div className="mt-6">
          <a
            href={PACK_META.contentsPdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 px-3 rounded-md border border-border bg-card text-sm font-medium hover:bg-accent transition-colors"
          >
            <Download className="w-4 h-4" /> Download Pack Contents PDF
          </a>
        </div>
      </header>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Booklets</h2>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {BOOKLETS.map((b) => (
            <li key={b.slug}>
              <Link
                href={itemPath(b)}
                className="flex items-start gap-4 py-4 hover:bg-accent/30 transition-colors px-2 -mx-2 rounded"
              >
                <span className="font-mono text-xs text-muted-foreground w-8 mt-1">{b.number}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium inline-flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-primary" /> {b.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{b.summary}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
                    {b.audience} · {b.pages}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="font-display text-xl tracking-tight">Loose-leaf items</h2>
        <ul className="mt-4 divide-y divide-border border-y border-border">
          {LOOSE_LEAF.map((l) => (
            <li key={l.slug}>
              <Link
                href={itemPath(l)}
                className="flex items-start gap-4 py-4 hover:bg-accent/30 transition-colors px-2 -mx-2 rounded"
              >
                <span className="font-mono text-xs text-muted-foreground w-8 mt-1">{l.number}</span>
                <div className="flex-1 min-w-0">
                  <div className="font-medium inline-flex items-center gap-2">
                    <FileText className="w-4 h-4 text-primary" /> {l.title}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{l.summary}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted-foreground/80">
                    {l.audience} · {l.pages}
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
