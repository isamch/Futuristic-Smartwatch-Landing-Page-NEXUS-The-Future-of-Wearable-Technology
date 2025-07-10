import React, { useEffect, useRef } from 'react';

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-scaleIn');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.gallery-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const galleryItems = [
    {
      title: "Elegant Design",
      image: "https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Crafted with precision and attention to detail"
    },
    {
      title: "Advanced Interface",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Intuitive controls meet cutting-edge technology"
    },
    {
      title: "Lifestyle Integration",
      image: "https://images.pexels.com/photos/1181233/pexels-photo-1181233.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Seamlessly fits into your daily routine"
    },
    {
      title: "Premium Materials",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Aerospace-grade components for durability"
    },
    {
      title: "Smart Features",
      image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "AI-powered insights for better living"
    },
    {
      title: "Future Ready",
      image: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Built for tomorrow's connected world"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Experience Excellence
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every angle tells a story of innovation and craftsmanship
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className="gallery-item group relative overflow-hidden rounded-2xl"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 bg-gradient-to-br from-slate-700 to-slate-800 hover:transform hover:scale-105 transition-all duration-500">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;