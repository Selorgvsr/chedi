import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { LandSection } from "./components/LandSection";
import { FarmersSection } from "./components/FarmersSection";
import { ContractModels } from "./components/ContractModels";
import { SubscriptionLand } from "./components/SubscriptionLand";
import { IntegratedFarming } from "./components/IntegratedFarming";
import { RevenueStreams } from "./components/RevenueStreams";
import { Footer } from "./components/Footer";

// Detailed Pages
import { AboutPage } from "./components/AboutPage";
import { ProjectsPage } from "./components/ProjectsPage";
import { ContactPage } from "./components/ContactPage";
import { LandPage } from "./components/LandPage";
import { FarmersPage } from "./components/FarmersPage";
import { ContractFarmingPage } from "./components/ContractFarmingPage";
import { SubscriptionPage } from "./components/SubscriptionPage";
import { IntegratedFarmingPage } from "./components/IntegratedFarmingPage";
import { RevenueStreamsPage } from "./components/RevenueStreamsPage";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  const [route, setRoute] = useState(
    window.location.hash || "#/",
  );

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash || "#/");
      window.scrollTo(0, 0);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () =>
      window.removeEventListener(
        "hashchange",
        handleHashChange,
      );
  }, []);

  const renderContent = () => {
    switch (route) {
      case "#/land":
        return <LandPage />;
      case "#/farmers":
        return <FarmersPage />;
      case "#/contract-farming":
        return <ContractFarmingPage />;
      case "#/subscription-land":
        return <SubscriptionPage />;
      case "#/integrated-farming":
        return <IntegratedFarmingPage />;
      case "#/revenue-streams":
        return <RevenueStreamsPage />;
      case "#/about":
        return <AboutPage />;
      case "#/projects":
        return <ProjectsPage />;
      case "#/contact":
        return <ContactPage />;
      case "#/":
      default:
        return (
          <>
            <Hero />
            <HowItWorks />
            <LandSection />
            <FarmersSection />
            <ContractModels />
            <SubscriptionLand />
            <IntegratedFarming />
            <RevenueStreams />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#004733] selection:bg-[#004733] selection:text-white flex flex-col antialiased">
      <Navbar />
      <main className="flex-grow pt-20 relative z-0">
        {renderContent()}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}