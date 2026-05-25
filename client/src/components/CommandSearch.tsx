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
import { BookOpen, FileText, BookText } from "lucide-react";
import { ALL_ITEMS, buildSearchIndex, getItemBySlug, itemPath } from "@/content/pack";

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

  // Split records into top-level items vs section hits
  const topLevel = records.filter((r) => !r.sectionId);
  const sectionHits = records.filter((r) => !!r.sectionId);

  const goItem = (slug: string, sectionId?: string) => {
    const item = getItemBySlug(slug);
    if (!item) return;
    const path = itemPath(item) + (sectionId ? `#${sectionId}` : "");
    setLocation(path);
    onOpenChange(false);
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput
        placeholder="Search the whole pack — booklets, loose-leaf, sections…"
        value={query}
        onValueChange={setQuery}
      />
      <CommandList>
        <CommandEmpty>No matches in the pack.</CommandEmpty>

        <CommandGroup heading="Jump to">
          <CommandItem
            value="pack contents overview"
            onSelect={() => {
              setLocation("/pack-contents");
              onOpenChange(false);
            }}
          >
            <BookText className="w-4 h-4 text-primary" /> Pack contents
          </CommandItem>
          <CommandItem
            value="design system"
            onSelect={() => {
              setLocation("/design-system");
              onOpenChange(false);
            }}
          >
            <BookText className="w-4 h-4 text-primary" /> Design system
          </CommandItem>
          <CommandItem
            value="client verification list"
            onSelect={() => {
              setLocation("/verification-list");
              onOpenChange(false);
            }}
          >
            <BookText className="w-4 h-4 text-primary" /> Client verification list
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Booklets">
          {topLevel
            .filter((r) => r.itemGroup === "booklet")
            .map((r) => (
              <CommandItem
                key={r.id}
                value={`${r.title} ${r.excerpt}`}
                onSelect={() => goItem(r.itemSlug)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="flex items-center gap-2 w-full">
                  <BookOpen className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{r.title}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/15 text-primary">
                    Live
                  </span>
                </div>
                <div className="text-xs text-muted-foreground line-clamp-2 pl-6">{r.excerpt}</div>
              </CommandItem>
            ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Loose-leaf">
          {topLevel
            .filter((r) => r.itemGroup === "loose-leaf")
            .map((r) => (
              <CommandItem
                key={r.id}
                value={`${r.title} ${r.excerpt}`}
                onSelect={() => goItem(r.itemSlug)}
                className="flex flex-col items-start gap-1 py-3"
              >
                <div className="flex items-center gap-2 w-full">
                  <FileText className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{r.title}</span>
                  <span className="ml-auto text-[10px] uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/15 text-primary">
                    Live
                  </span>
                </div>
                <div className="text-xs text-muted-foreground line-clamp-2 pl-6">{r.excerpt}</div>
              </CommandItem>
            ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Sections">
          {sectionHits.map((r) => (
            <CommandItem
              key={r.id}
              value={`${r.title} ${r.itemTitle} ${r.excerpt}`}
              onSelect={() => goItem(r.itemSlug, r.sectionId)}
              className="flex flex-col items-start gap-1 py-3"
            >
              <div className="flex items-center gap-2 w-full">
                <span className="text-sm">{r.title}</span>
                <span className="ml-auto text-[10px] uppercase tracking-wider text-muted-foreground">
                  {r.itemGroup === "booklet" ? "Booklet" : "Loose-leaf"} {r.itemNumber}
                </span>
              </div>
              <div className="text-xs text-muted-foreground line-clamp-2">{r.excerpt}</div>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />
        <div className="px-3 py-2 text-[11px] text-muted-foreground">
          {ALL_ITEMS.length} items · {records.length - ALL_ITEMS.length} sections indexed
        </div>
      </CommandList>
    </CommandDialog>
  );
}
