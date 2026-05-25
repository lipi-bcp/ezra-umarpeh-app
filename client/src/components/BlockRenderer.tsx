import { useEffect, useState } from "react";
import { Check, Info, Sparkles, AlertTriangle, BookmarkPlus, BookmarkCheck } from "lucide-react";
import type { SectionBlock } from "@/content/pack";
import { cn } from "@/lib/utils";

type CalloutTone = "key" | "important" | "tip" | "note";

const CALLOUT_STYLES: Record<
  CalloutTone,
  { icon: React.ComponentType<{ className?: string }>; tint: string; ring: string; label: string }
> = {
  key: {
    icon: Sparkles,
    tint: "bg-primary/8 text-foreground",
    ring: "border-l-4 border-primary",
    label: "Key message",
  },
  important: {
    icon: AlertTriangle,
    tint: "bg-[oklch(0.97_0.04_70)] text-foreground",
    ring: "border-l-4 border-[oklch(0.65_0.16_55)]",
    label: "Important rule",
  },
  tip: {
    icon: Info,
    tint: "bg-secondary text-foreground",
    ring: "border-l-4 border-muted-foreground/40",
    label: "Tip",
  },
  note: {
    icon: Info,
    tint: "bg-card text-foreground",
    ring: "border-l-4 border-border",
    label: "Note",
  },
};

export function BlockRenderer({ block, storageKey }: { block: SectionBlock; storageKey: string }) {
  switch (block.kind) {
    case "paragraph":
      return (
        <p className="text-[15px] leading-relaxed text-foreground/90">{block.text}</p>
      );
    case "list":
      return (
        <ul className="list-disc pl-5 space-y-1.5 text-[15px] leading-relaxed text-foreground/90">
          {block.items.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      );
    case "checklist":
      return <Checklist items={block.items} storageKey={storageKey} />;
    case "steps":
      return (
        <ol className="space-y-2.5">
          {block.items.map((t, i) => (
            <li key={i} className="flex gap-3">
              <span className="shrink-0 w-7 h-7 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center text-xs font-medium font-display">
                {i + 1}
              </span>
              <span className="text-[15px] leading-relaxed text-foreground/90 pt-0.5">{t}</span>
            </li>
          ))}
        </ol>
      );
    case "callout": {
      const tone = (block.tone in CALLOUT_STYLES ? block.tone : "note") as CalloutTone;
      const s = CALLOUT_STYLES[tone];
      const Icon = s.icon;
      return (
        <div className={cn("rounded-r-md pl-4 pr-5 py-4 flex gap-3", s.tint, s.ring)}>
          <Icon className="w-4 h-4 mt-0.5 text-primary" />
          <div>
            <div className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium">
              {s.label}
            </div>
            <div className="font-display text-base mt-0.5">{block.title}</div>
            <p className="text-[14.5px] leading-relaxed mt-1 text-foreground/85">{block.text}</p>
          </div>
        </div>
      );
    }
    case "table":
      return (
        <div className="overflow-x-auto rounded-md border border-border">
          <table className="w-full text-[14.5px]">
            <thead>
              <tr className="bg-secondary/60">
                {block.columns.map((c, i) => (
                  <th
                    key={i}
                    className="text-left font-medium text-[12px] uppercase tracking-[0.14em] text-muted-foreground px-4 py-2.5"
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, ri) => (
                <tr key={ri} className="border-t border-border">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-3 align-top leading-relaxed text-foreground/90">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "footnote":
      return (
        <div className="mt-2 text-[13px] leading-relaxed text-muted-foreground border-t border-dashed border-border pt-3 italic">
          <span className="not-italic font-medium text-foreground/80">Editor’s note · </span>
          {block.text}
        </div>
      );
  }
}

function Checklist({ items, storageKey }: { items: string[]; storageKey: string }) {
  const [checked, setChecked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (raw) setChecked(JSON.parse(raw));
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {}
  }, [checked, storageKey]);

  return (
    <ul className="space-y-2">
      {items.map((t, i) => {
        const isChecked = !!checked[i];
        return (
          <li key={i}>
            <button
              type="button"
              onClick={() => setChecked((c) => ({ ...c, [i]: !c[i] }))}
              className={cn(
                "w-full flex items-start gap-3 text-left p-3 rounded-md border transition-colors",
                isChecked
                  ? "border-primary/40 bg-primary/5"
                  : "border-border hover:border-primary/40 bg-card",
              )}
            >
              <span
                className={cn(
                  "shrink-0 mt-0.5 w-5 h-5 rounded-sm border flex items-center justify-center transition-colors",
                  isChecked ? "bg-primary border-primary text-primary-foreground" : "border-border bg-background",
                )}
              >
                {isChecked && <Check className="w-3.5 h-3.5" />}
              </span>
              <span
                className={cn(
                  "text-[15px] leading-relaxed",
                  isChecked ? "text-muted-foreground line-through" : "text-foreground/90",
                )}
              >
                {t}
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export function SaveToggle({ slug }: { slug: string }) {
  const key = "ezra.saved";
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(key) || "[]");
      setSaved(list.includes(slug));
    } catch {}
  }, [slug]);

  const toggle = () => {
    try {
      const list: string[] = JSON.parse(localStorage.getItem(key) || "[]");
      const next = list.includes(slug) ? list.filter((s) => s !== slug) : [...list, slug];
      localStorage.setItem(key, JSON.stringify(next));
      setSaved(next.includes(slug));
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "inline-flex items-center gap-2 h-10 px-4 rounded-md border text-sm transition-colors",
        saved
          ? "border-primary/50 bg-primary/10 text-primary"
          : "border-border hover:border-primary/40",
      )}
    >
      {saved ? <BookmarkCheck className="w-4 h-4" /> : <BookmarkPlus className="w-4 h-4" />}
      {saved ? "Saved" : "Save for later"}
    </button>
  );
}
