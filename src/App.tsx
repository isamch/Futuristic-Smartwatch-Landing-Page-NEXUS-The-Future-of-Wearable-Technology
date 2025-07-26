import React, { useEffect } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Technology from './components/Technology';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="bg-slate-900 text-white overflow-x-hidden">
      <Hero />
      <Features />
      <Technology />
      <Gallery />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;