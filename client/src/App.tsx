import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Booklet4 from "./pages/Booklet4";
import ComingSoonItem from "./pages/ComingSoonItem";
import SiteShell from "./components/SiteShell";
import CommandSearch from "./components/CommandSearch";

function App() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster richColors closeButton position="bottom-right" />
          <SiteShell onOpenSearch={() => setSearchOpen(true)}>
            <Switch>
              <Route path="/" component={() => <Home onOpenSearch={() => setSearchOpen(true)} />} />
              <Route path="/about" component={About} />
              <Route path="/booklets/04-shabbos-yom-tov" component={Booklet4} />
              <Route path="/booklets/:slug" component={ComingSoonItem} />
              <Route path="/loose-leaf/:slug" component={ComingSoonItem} />
              <Route path="/404" component={NotFound} />
              <Route component={NotFound} />
            </Switch>
          </SiteShell>
          <CommandSearch open={searchOpen} onOpenChange={setSearchOpen} />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
