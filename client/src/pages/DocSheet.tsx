import { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowLeft, Download } from "lucide-react";

type Props = {
  kicker: string;
  title: string;
  intro: string;
  pdfUrl: string;
  children: ReactNode;
};

export default function DocSheet({ kicker, title, intro, pdfUrl, children }: Props) {
  return (
    <article className="max-w-3xl">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" /> Back to the hub
      </Link>

      <header className="mt-6 pb-8 border-b border-border">
        <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{kicker}</div>
        <h1 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight">
          {title}
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground leading-relaxed">{intro}</p>
        <div className="mt-6">
          <a
            href={pdfUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center gap-2 px-3 rounded-md border border-border bg-card text-sm font-medium hover:bg-accent transition-colors"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
      </header>

      <div className="mt-8 prose prose-neutral max-w-none text-[15px] leading-relaxed">
        {children}
      </div>
    </article>
  );
}
