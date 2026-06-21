import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ServicesSection from "@/components/ServicesSection";
import DomainsSection from "@/components/DomainsSection";
import AuditSection from "@/components/AuditSection";
import ProgramsSection from "@/components/ProgramsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import MobileCtaBar from "@/components/MobileCtaBar";
import PrivacyBanner from "@/components/PrivacyBanner";

export default function Home() {
  return (
    <>
      <a
        href="#home"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          zIndex: 9999,
          background: "var(--navy)",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          fontWeight: 700,
        }}
      >
        Skip to main content
      </a>

      <Navbar />
      <HeroSection />
      <JourneySection />
      <ServicesSection />
      <DomainsSection />
      <AuditSection />
      <ProgramsSection />
      <FaqSection />
      <CtaSection />
      <Footer />
      <MobileCtaBar />
      <PrivacyBanner />
    </>
  );
}
