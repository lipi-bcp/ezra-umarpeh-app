import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import PackItemPage from "./pages/PackItemPage";
import PackContentsPage from "./pages/PackContentsPage";
import DesignSystemPage from "./pages/DesignSystemPage";
import VerificationListPage from "./pages/VerificationListPage";
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
              <Route path="/pack-contents" component={PackContentsPage} />
              <Route path="/design-system" component={DesignSystemPage} />
              <Route path="/verification-list" component={VerificationListPage} />
              <Route path="/booklets/:slug" component={PackItemPage} />
              <Route path="/loose-leaf/:slug" component={PackItemPage} />
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
