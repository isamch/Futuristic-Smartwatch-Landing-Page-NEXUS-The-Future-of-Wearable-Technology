import React, { useEffect, useRef } from 'react';
import { Brain, Zap, Shield, Heart, Smartphone, Globe } from 'lucide-react';

const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInUp');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.feature-card');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Brain,
      title: "Neural AI Assistant",
      description: "Advanced AI that learns your habits and anticipates your needs with quantum-powered processing."
    },
    {
      icon: Zap,
      title: "Unlimited Battery",
      description: "Revolutionary energy harvesting technology provides continuous power from kinetic motion."
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Military-grade encryption with quantum key distribution for ultimate data protection."
    },
    {
      icon: Heart,
      title: "Biometric Monitoring",
      description: "Comprehensive health tracking with predictive analytics and real-time vital signs."
    },
    {
      icon: Smartphone,
      title: "Holographic Display",
      description: "3D holographic interface that projects information directly into your field of view."
    },
    {
      icon: Globe,
      title: "Universal Connectivity",
      description: "Seamless integration with IoT devices, smart cities, and global communication networks."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every component engineered to perfection, every feature designed to enhance your life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-cyan-400/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
              
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;