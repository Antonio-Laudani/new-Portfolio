//import React, { useEffect } from 'react'; //test
import Navbar from './components/navbar/navbar';
import LavaLamp from './components/lava-bg/lavalamp';
import HeroSection from './pages/hero-section/hero-section';
import ProjectSection from './pages/project-section/project-section';
import AboutSection from './pages/about-section/about';
import ContactSection from './pages/contact-section/contact-section';
import Footer from './components/footer/footer';
import Popup from './components/popup-message/popup';
import { useErrorMessage } from './hooks/errorMessage/errorMessage';
import './index.css';

function App() {
    const { error, clearError } = useErrorMessage(); //aggiungi showError tra error e clearerror per testare

  // ⚠️ TEST POPUP - DECOMMENTA PER TESTARE ⚠️
  //useEffect(() => {
    // setTimeout(() => {
      //showError("Errore di rete: impossibile connettersi al server");
     //}, 2000);
   //}, [showError]);
  return (
    <>
      <LavaLamp />
      <Navbar />
      <HeroSection />
      <ProjectSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      {error && <Popup message={error} onClose={clearError} />} {/* Popup globale per errori */}
    </>
  );
}

export default App;