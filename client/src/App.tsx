import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/language-context";

import Home from "@/pages/home";
import SectionalDoors from "@/pages/sectional-doors";
import RollerDoors from "@/pages/roller-doors";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";

// Automation pages
import AutomationSommer from "@/pages/automation-sommer"; // Автоматика за секционни врати
import AutomationSomfy from "@/pages/automation-somfy";   // Автоматика за ролетни врати

import IndustrialDoors from "@/pages/industrial-doors";
import IndustrialRollerDoors from "@/pages/industrial-roller-doors";
import IndustrialSectionalDoors from "@/pages/industrial-sectional-doors";
import PedestrianDoorsSteelSlats from "@/pages/pedestrian-doors-steel";
import PedestrianDoorsThermalInsulated from "@/pages/pedestrian-doors-thermal";
import RollerDoorsSteel from "@/pages/roller-doors-steel";
import RollerDoorsThermal from "@/pages/roller-doors-thermal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sectional-doors" component={SectionalDoors} />
      <Route path="/roller-doors-steel" component={RollerDoorsSteel} />
      <Route path="/roller-doors-thermal" component={RollerDoorsThermal} />
      <Route path="/roller-doors" component={RollerDoors} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      {/* Automation Routes */}
      <Route path="/automation-sommer" component={AutomationSommer} />
      <Route path="/automation-somfy" component={AutomationSomfy} />

      <Route path="/industrial-roller-doors" component={IndustrialRollerDoors} />
      <Route path="/industrial-sectional-doors" component={IndustrialSectionalDoors} />
      <Route path="/industrial-doors" component={IndustrialDoors} />
      <Route path="/pedestrian-doors-steel" component={PedestrianDoorsSteelSlats} />
      <Route path="/pedestrian-doors-thermal" component={PedestrianDoorsThermalInsulated} />
      
      {/* 404 Not Found */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
