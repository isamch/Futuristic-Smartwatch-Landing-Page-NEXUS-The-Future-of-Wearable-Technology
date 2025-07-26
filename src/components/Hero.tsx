import { useRef, useEffect } from 'react';
import { ChevronDown, Play } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current && shapeRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        shapeRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div ref={shapeRef} className="absolute inset-0">
          <svg className="absolute top-0 left-0 w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#06B6D4', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.1 }} />
              </linearGradient>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.4 }} />
                <stop offset="100%" style={{ stopColor: '#06B6D4', stopOpacity: 0.2 }} />
              </linearGradient>
            </defs>
            <circle cx="200" cy="200" r="150" fill="url(#grad1)" className="animate-pulse" />
            <circle cx="800" cy="300" r="200" fill="url(#grad2)" className="animate-pulse" style={{ animationDelay: '1s' }} />
            <circle cx="600" cy="700" r="180" fill="url(#grad1)" className="animate-pulse" style={{ animationDelay: '2s' }} />
          </svg>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="animate-fadeInUp">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            NEXUS
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 text-gray-300">
            The Future of Time
          </p>
          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto">
            Experience the next evolution in wearable technology. Seamlessly integrated AI, 
            holographic display, and quantum processing in a design that transcends time.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10">Order Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-gray-600 rounded-full font-semibold text-lg hover:border-cyan-400 transition-all duration-300 hover:bg-cyan-400/10">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-gray-400" />
      </div>
    </section>
  );
};

export default Hero;