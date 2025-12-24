import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Projects } from './components/Projects';
import { Governance } from './components/Governance';
import { Chatbot } from './components/Chatbot';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  useEffect(() => {
    // Scroll to top on initial load
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Projects />
        <Governance />
        <Contact />
        <Chatbot />
      </main>
      <Footer />
    </div>
  );
}
