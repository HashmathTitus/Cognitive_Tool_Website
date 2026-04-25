import { useEffect, useMemo, useState } from "react";
import AboutSection from "./components/AboutSection";
import DemoSection from "./components/DemoSection";
import DocumentsSection from "./components/DocumentsSection";
import FeaturesOverviewSection from "./components/FeaturesOverviewSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import HighlightsSection from "./components/HighlightsSection";
import LinksSection from "./components/LinksSection";
import MilestonesSection from "./components/MilestonesSection";
import Navbar from "./components/Navbar";
import ContactSection from "./components/ContactSection";
import ReferencesSection from "./components/ReferencesSection";
import ResearchDomainSection from "./components/ResearchDomainSection";
import TeamSection from "./components/TeamSection";
import ToolsSection from "./components/ToolsSection";
import { navItems } from "./data/content";

const sectionIds = navItems.map((item) => item.id);

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.5, 0.7],
        rootMargin: "-120px 0px -40% 0px",
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const navMemo = useMemo(() => navItems, []);

  return (
    <div className="min-h-screen">
      <Navbar items={navMemo} activeSection={activeSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <ResearchDomainSection />
        <HighlightsSection />
        <FeaturesOverviewSection />
        <ToolsSection />
        <MilestonesSection />
        <DocumentsSection />
        <TeamSection />
        <DemoSection />
        <LinksSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
