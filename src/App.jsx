import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import CtaSection from "./components/CtaSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";
import StudyOrderModal from "./components/StudyOrderModal";
import ContactInfoModal from "./components/ContactInfoModal";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [studyModalOpen, setStudyModalOpen] = useState(false);
  const [studyModalKey, setStudyModalKey] = useState(0);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactModalKey, setContactModalKey] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const hasScrolled = currentY > 18;
      const isScrollingUp = currentY < lastScrollY.current || currentY < 12;

      setScrolled(hasScrolled);
      setNavVisible(isScrollingUp || currentY < 12);
      setShowScrollTop(currentY > 420);
      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openStudyModal = () => {
    setStudyModalKey((k) => k + 1);
    setStudyModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalKey((k) => k + 1);
    setContactModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar
        onOpenContact={openContactModal}
        scrolled={scrolled}
        navVisible={navVisible}
      />
      <main>
        <HeroSection onOpenStudy={openStudyModal} />
        <CtaSection onOpenStudy={openStudyModal} />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <MapSection />
      </main>
      <Footer />

      <StudyOrderModal
        key={studyModalKey}
        show={studyModalOpen}
        onClose={() => setStudyModalOpen(false)}
      />
      <ContactInfoModal
        key={contactModalKey}
        show={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <button
        type="button"
        className={`scroll-top-button ${showScrollTop ? "is-visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Volver arriba"
      >
        <i className="fas fa-arrow-up" />
      </button>

      <WhatsAppButton />
    </>
  );
}
