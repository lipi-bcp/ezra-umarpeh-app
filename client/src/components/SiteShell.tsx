import { ReactNode, useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  Search,
  Printer,
  Share2,
  Menu,
  X,
  BookOpen,
  FileText,
  Sparkles,
  ListChecks,
  Palette,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOKLETS, LOOSE_LEAF, itemPath } from "@/content/pack";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const LOGO_URL = "/manus-storage/ezra-logo_27d423de.png";

type Props = {
  children: ReactNode;
  onOpenSearch: () => void;
};

export default function SiteShell({ children, onOpenSearch }: Props) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader
        onOpenSearch={onOpenSearch}
        onToggleNav={() => setMobileOpen((v) => !v)}
        mobileOpen={mobileOpen}
      />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8 lg:gap-12 pt-6 lg:pt-10">
        <aside
          className={cn(
            "lg:sticky lg:top-[88px] lg:self-start lg:max-h-[calc(100vh-96px)] lg:overflow-y-auto",
            "lg:block",
            mobileOpen ? "block" : "hidden",
          )}
        >
          <SidebarNav />
        </aside>

        <main className="min-w-0 pb-24">{children}</main>
      </div>

      <SiteFooter />
    </div>
  );
}

function SiteHeader({
  onOpenSearch,
  onToggleNav,
  mobileOpen,
}: {
  onOpenSearch: () => void;
  onToggleNav: () => void;
  mobileOpen: boolean;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center gap-4">
        <button
          aria-label="Toggle navigation"
          onClick={onToggleNav}
          className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        <Link href="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="Ezra Umarpeh" className="h-9 w-auto" />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold tracking-tight">
              Volunteer Resource Hub
            </span>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
              Ezra Umarpeh · Pack v1.0
            </span>
          </span>
        </Link>

        <div className="flex-1" />

        <button
          onClick={onOpenSearch}
          className="hidden md:inline-flex items-center gap-2 h-10 pl-3 pr-2 rounded-md border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors w-[320px]"
        >
          <Search className="w-4 h-4" />
          <span>Search the pack…</span>
          <span className="ml-auto inline-flex items-center gap-1 text-[10px] uppercase tracking-wider">
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">⌘</kbd>
            <kbd className="px-1.5 py-0.5 rounded border border-border bg-background">K</kbd>
          </span>
        </button>

        <button
          onClick={onOpenSearch}
          aria-label="Search"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-accent transition-colors"
        >
          <Search className="w-5 h-5" />
        </button>

        <Button
          variant="ghost"
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => {
            if (navigator.share) {
              navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
            } else {
              navigator.clipboard.writeText(window.location.href);
              toast.success("Link copied to clipboard");
            }
          }}
        >
          <Share2 className="w-4 h-4" /> Share
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="hidden md:inline-flex"
          onClick={() => window.print()}
        >
          <Printer className="w-4 h-4" /> Print
        </Button>
      </div>
    </header>
  );
}

function SidebarNav() {
  const [location] = useLocation();

  return (
    <nav className="text-sm py-2 lg:py-0">
      <SectionLabel>Pack overview</SectionLabel>
      <ul className="mb-6">
        <SidebarLink href="/" active={location === "/"} icon={<Sparkles className="w-3.5 h-3.5" />}>
          Home
        </SidebarLink>
        <SidebarLink
          href="/pack-contents"
          active={location === "/pack-contents"}
          icon={<ListChecks className="w-3.5 h-3.5" />}
        >
          Pack contents
        </SidebarLink>
        <SidebarLink
          href="/design-system"
          active={location === "/design-system"}
          icon={<Palette className="w-3.5 h-3.5" />}
        >
          Design system
        </SidebarLink>
        <SidebarLink
          href="/verification-list"
          active={location === "/verification-list"}
          icon={<ShieldCheck className="w-3.5 h-3.5" />}
        >
          Verification list
        </SidebarLink>
        <SidebarLink
          href="/about"
          active={location === "/about"}
          icon={<FileText className="w-3.5 h-3.5" />}
        >
          About this hub
        </SidebarLink>
      </ul>

      <SectionLabel>Booklets</SectionLabel>
      <ul className="mb-6">
        {BOOKLETS.map((b) => {
          const href = itemPath(b);
          return (
            <SidebarLink
              key={b.slug}
              href={href}
              active={location === href}
              icon={<BookOpen className="w-3.5 h-3.5" />}
            >
              <span className="font-mono text-[10px] text-muted-foreground mr-2">{b.number}</span>
              {b.title}
            </SidebarLink>
          );
        })}
      </ul>

      <SectionLabel>Loose-leaf</SectionLabel>
      <ul>
        {LOOSE_LEAF.map((l) => {
          const href = itemPath(l);
          return (
            <SidebarLink
              key={l.slug}
              href={href}
              active={location === href}
              icon={<FileText className="w-3.5 h-3.5" />}
            >
              <span className="font-mono text-[10px] text-muted-foreground mr-2">{l.number}</span>
              {l.title}
            </SidebarLink>
          );
        })}
      </ul>

      <div className="mt-8 px-3 py-3 rounded-md border border-dashed border-border bg-card/70 text-[12px] text-muted-foreground leading-relaxed">
        Pack v1.0 — May 2026. All seven booklets and five loose-leaf items are produced from the
        Volunteer Academy Manual. Use the verification list before print.
      </div>
    </nav>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="px-3 mb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground/80 font-medium">
      {children}
    </div>
  );
}

function SidebarLink({
  href,
  active,
  children,
  icon,
}: {
  href: string;
  active?: boolean;
  children: ReactNode;
  icon?: ReactNode;
}) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "group flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
          active
            ? "bg-accent text-accent-foreground"
            : "hover:bg-accent/60 text-foreground/85 hover:text-foreground",
        )}
      >
        <span className="text-muted-foreground group-hover:text-primary transition-colors">
          {icon}
        </span>
        <span className="flex-1 truncate">{children}</span>
      </Link>
    </li>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid sm:grid-cols-2 gap-6 text-sm text-muted-foreground">
        <div>
          <div className="font-display text-foreground text-base">
            Ezra Umarpeh Volunteer Resource Hub
          </div>
          <div className="mt-1">
            Pack v1.0 · May 2026 · For volunteer, trainer and coordinator use.
          </div>
        </div>
        <div className="sm:text-right">
          <div>
            Source manual is the authoritative reference. Content shown here is an editorial rebuild
            from the Volunteer Academy Manual.
          </div>
          <div className="mt-1">Seven booklets · five loose-leaf items · one verification list.</div>
        </div>
      </div>
    </footer>
  );
}
