import React, { useEffect, useRef } from 'react';
import { ArrowRight, Star, Users, Award } from 'lucide-react';

const CTA = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.cta-element');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Star, value: "5.0", label: "User Rating" },
    { icon: Users, value: "1M+", label: "Happy Customers" },
    { icon: Award, value: "50+", label: "Awards Won" }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="cta-element mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Ready for the Future?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join millions who have already stepped into tomorrow. The NEXUS smartwatch 
            is more than a device—it's your gateway to a smarter, more connected life.
          </p>
        </div>

        <div className="cta-element mb-12">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="group relative px-12 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full font-semibold text-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25">
              <span className="relative z-10 flex items-center gap-3">
                Pre-Order Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <div className="text-center">
              <p className="text-2xl font-bold text-white mb-1">$899</p>
              <p className="text-gray-400">Limited Time Price</p>
            </div>
          </div>
        </div>

        <div className="cta-element">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;