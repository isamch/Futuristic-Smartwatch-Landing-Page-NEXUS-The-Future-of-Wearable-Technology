import { useEffect, useRef } from 'react';
import { Cpu, Layers, Wifi, Battery } from 'lucide-react';

const Technology = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideInRight');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.tech-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const techSpecs = [
    {
      icon: Cpu,
      title: "Quantum Processor",
      specs: ["12-core Neural Engine", "50 TOPS AI Performance", "3nm Architecture"],
      description: "Revolutionary quantum computing technology that processes information at unprecedented speeds."
    },
    {
      icon: Layers,
      title: "Advanced Materials",
      specs: ["Titanium Carbide Frame", "Sapphire Crystal Display", "Graphene Conductors"],
      description: "Aerospace-grade materials engineered for durability and premium aesthetics."
    },
    {
      icon: Wifi,
      title: "Next-Gen Connectivity",
      specs: ["6G Ready", "Satellite Integration", "Mesh Networking"],
      description: "Stay connected anywhere on Earth with advanced communication protocols."
    },
    {
      icon: Battery,
      title: "Infinite Power",
      specs: ["Kinetic Harvesting", "Solar Integration", "Wireless Charging"],
      description: "Multiple energy sources ensure your device never runs out of power."
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Advanced Technology
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Pushing the boundaries of what's possible with cutting-edge innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {techSpecs.map((tech, index) => (
            <div
              key={index}
              className="tech-item group relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 hover:border-purple-400/50 transition-all duration-500 hover:transform hover:scale-105">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-cyan-400 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <tech.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors duration-300">
                      {tech.title}
                    </h3>
                    
                    <div className="mb-4">
                      {tech.specs.map((spec, specIndex) => (
                        <div key={specIndex} className="flex items-center gap-2 mb-2">
                          <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
                          <span className="text-gray-300">{spec}</span>
                        </div>
                      ))}
                    </div>
                    
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;