import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowRight, Clock, Sparkles } from "lucide-react";
import { ALL_ITEMS, BOOKLETS, LOOSE_LEAF, getItemBySlug } from "@/content/pack";
import NotFound from "@/pages/NotFound";

export default function ComingSoonItem() {
  const [matchBooklet, bParams] = useRoute("/booklets/:slug");
  const [matchLoose, lParams] = useRoute("/loose-leaf/:slug");
  const slug = matchBooklet ? bParams?.slug : matchLoose ? lParams?.slug : undefined;
  if (!slug) return <NotFound />;
  const item = getItemBySlug(slug);
  if (!item) return <NotFound />;

  const idx = ALL_ITEMS.findIndex((i) => i.slug === item.slug);
  const prev = idx > 0 ? ALL_ITEMS[idx - 1] : undefined;
  const next = idx < ALL_ITEMS.length - 1 ? ALL_ITEMS[idx + 1] : undefined;

  const list = item.group === "booklet" ? BOOKLETS : LOOSE_LEAF;
  const others = list.filter((i) => i.slug !== item.slug).slice(0, 4);

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
          <span>{item.group === "booklet" ? "Booklet" : "Loose-leaf"} {item.number}</span>
          <span className="h-px w-8 bg-border" />
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-muted text-muted-foreground">
            <Clock className="w-3 h-3" /> Coming soon
          </span>
        </div>

        <h1 className="mt-4 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight">
          {item.title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{item.summary}</p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
          <Meta label="Audience" value={item.audience} />
          <Meta label="Pages" value={item.pages} />
          <Meta label="Group" value={item.group === "booklet" ? "Booklet" : "Loose-leaf"} />
          <Meta label="Status" value="Awaiting production" />
        </div>
      </header>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-12">
        <div className="min-w-0 max-w-2xl">
          <div className="rounded-md border border-dashed border-primary/30 bg-primary/5 px-5 py-5 flex gap-3">
            <Sparkles className="w-4 h-4 mt-0.5 text-primary shrink-0" />
            <div className="text-[14.5px] leading-relaxed">
              <div className="font-display text-base">Why nothing is shown here yet</div>
              <p className="mt-1 text-foreground/85">
                The Booklet 4 sample is the agreed test piece. The remaining booklets and loose-leaf
                items are scheduled to be produced from the source manual using the same editorial
                system, only after the Booklet 4 sample is approved. No procedural content has been
                drafted or invented for this item.
              </p>
            </div>
          </div>

          <section className="mt-10">
            <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
              Intended contents
            </span>
            <h2 className="mt-3 font-display text-2xl tracking-tight">
              What this {item.group === "booklet" ? "booklet" : "sheet"} will cover
            </h2>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              The outline below comes from the client cover note. Final order, wording and emphasis
              will follow the source manual once produced.
            </p>
            <ul className="mt-5 space-y-2">
              {item.intendedContents.map((c, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-md border border-border bg-card text-[15px] leading-relaxed"
                >
                  <span className="shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-foreground/90">{c}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
              Next step
            </span>
            <h2 className="mt-3 font-display text-2xl tracking-tight">
              Approve the sample to unlock the rest of the pack
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Once the Booklet 4 sample is approved, this item will be produced from the source
              manual using the same cover, typography, callouts, checklist style and editorial
              voice. It will then replace this placeholder in full.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href="/booklets/04-shabbos-yom-tov"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
              >
                Open the approved sample
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 h-11 px-5 rounded-md border border-border hover:border-primary/50 transition-colors text-sm"
              >
                Read the cover note
              </Link>
            </div>
          </section>

          <nav className="mt-16 grid grid-cols-2 gap-4">
            {prev ? (
              <Link
                href={`${prev.group === "booklet" ? "/booklets" : "/loose-leaf"}/${prev.slug}`}
                className="group p-4 rounded-md border border-border hover:border-primary/40 transition-colors"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Previous
                </div>
                <div className="mt-1 text-sm group-hover:text-primary transition-colors">{prev.title}</div>
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`${next.group === "booklet" ? "/booklets" : "/loose-leaf"}/${next.slug}`}
                className="group p-4 rounded-md border border-border hover:border-primary/40 transition-colors text-right"
              >
                <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Next
                </div>
                <div className="mt-1 text-sm group-hover:text-primary transition-colors">{next.title}</div>
              </Link>
            ) : null}
          </nav>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-[92px]">
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
              Also in the pack
            </div>
            <ul className="space-y-2">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link
                    href={`${o.group === "booklet" ? "/booklets" : "/loose-leaf"}/${o.slug}`}
                    className="block p-3 rounded-md border border-border bg-card hover:border-primary/40 transition-colors text-sm"
                  >
                    <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      {o.group === "booklet" ? "Booklet" : "Loose-leaf"} {o.number}
                    </div>
                    <div className="mt-1 font-display tracking-tight">{o.title}</div>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/booklets/04-shabbos-yom-tov"
                  className="block p-3 rounded-md border border-primary/30 bg-primary/5 hover:bg-primary/10 transition-colors text-sm"
                >
                  <div className="text-[10px] uppercase tracking-[0.16em] text-primary">
                    Approved sample
                  </div>
                  <div className="mt-1 font-display tracking-tight">
                    Booklet 04 — Shabbos & Yom Tov
                  </div>
                </Link>
              </li>
            </ul>
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
