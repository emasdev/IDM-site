import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
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

  const openStudyModal = () => {
    setStudyModalKey((k) => k + 1);
    setStudyModalOpen(true);
  };

  const openContactModal = () => {
    setContactModalKey((k) => k + 1);
    setContactModalOpen(true);
  };

  return (
    <>
      <Navbar onOpenContact={openContactModal} />
      <main>
        <HeroSection onOpenStudy={openStudyModal} />
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

      <WhatsAppButton />
    </>
  );
}
