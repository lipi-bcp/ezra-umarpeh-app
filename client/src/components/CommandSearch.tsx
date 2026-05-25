import { useEffect, useMemo, useState } from "react";
import { useLocation } from "wouter";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { buildSearchIndex } from "@/content/pack";

type Props = {
  open: boolean;
  onOpenChange: (v: boolean) => void;
};

export default function CommandSearch({ open, onOpenChange }: Props) {
  const [, setLocation] = useLocation();
  const records = useMemo(() => buildSearchIndex(), []);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        onOpenChange(!open);
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [open, onOpenChange]);

  const bookletSections = records.filter((r) => r.id.startsWith("04#"));
  const items = records.filter((r) => !r.id.startsWith("04#"));

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search Booklet 4 sections, booklets and loose-leaf items…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No matches in the current pack preview.</CommandEmpty>

        <CommandGroup heading="Booklet 4 — Shabbos & Yom Tov (approved sample)">
          {bookletSections.map((r) => (
            <CommandItem
              key={r.id}
              value={`${r.title} ${r.excerpt}`}
              onSelect={() => {
                setLocation(`/booklets/04-shabbos-yom-tov#${r.sectionId}`);
                onOpenChange(false);
              }}
              className="flex flex-col items-start gap-1 py-3"
            >
              <div className="flex items-center gap-2 w-full">
                <span className="text-sm font-medium">{r.title}</span>
                <span className="ml-auto text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/15 text-primary">
                  Approved
                </span>
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">{r.excerpt}</div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Pack contents">
          {items.map((r) => (
            <CommandItem
              key={r.id}
              value={`${r.title} ${r.excerpt}`}
              onSelect={() => {
                const isBooklet = !r.itemSlug.startsWith("loose-");
                setLocation(`${isBooklet ? "/booklets" : "/loose-leaf"}/${r.itemSlug}`);
                onOpenChange(false);
              }}
              className="flex flex-col items-start gap-1 py-3"
            >
              <div className="flex items-center gap-2 w-full">
                <span className="text-sm">{r.title}</span>
                <span
                  className={
                    "ml-auto text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded " +
                    (r.status === "approved-sample"
                      ? "bg-primary/15 text-primary"
                      : "bg-muted text-muted-foreground")
                  }
                >
                  {r.status === "approved-sample" ? "Approved" : "Coming soon"}
                </span>
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">{r.excerpt}</div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
