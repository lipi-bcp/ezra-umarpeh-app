import { Link } from "wouter";
import { ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-xl py-16">
      <span className="text-[10px] uppercase tracking-[0.22em] text-primary font-medium">
        Page not found
      </span>
      <h1 className="mt-3 font-display text-4xl tracking-tight">This page isn’t part of the pack.</h1>
      <p className="mt-4 text-muted-foreground leading-relaxed">
        The link may be from a future version of the pack, or the URL may be slightly off. Try the
        hub overview, or use search to find a booklet or loose-leaf item.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href="/"
          className="inline-flex items-center gap-2 h-10 px-4 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
        >
          <ArrowLeft className="w-4 h-4" /> Back to the hub
        </Link>
        <span className="inline-flex items-center gap-2 h-10 px-4 rounded-md border border-border text-sm text-muted-foreground">
          <Search className="w-4 h-4" /> Press ⌘ K to search
        </span>
      </div>
    </div>
  );
}
