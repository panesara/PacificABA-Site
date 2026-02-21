import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import ComingSoon from "./pages/ComingSoon";

function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />

      <Route path={"/faq"}>
        {() => (
          <ComingSoon
            title="Frequently Asked Questions"
            description="Find answers to common questions about our ABA programs and services."
          />
        )}
      </Route>
      <Route path={"/about"}>
        {() => (
          <ComingSoon
            title="About Us"
            description="Learn more about Pacific ABA Academy, our team, and our mission."
          />
        )}
      </Route>
      <Route path={"/careers"}>
        {() => (
          <ComingSoon
            title="Careers"
            description="Join our team of dedicated professionals making a difference in children's lives."
          />
        )}
      </Route>
      <Route path={"/downloads"}>
        {() => (
          <ComingSoon
            title="Downloads"
            description="Access forms, resources, and helpful documents for our programs."
          />
        )}
      </Route>
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
