'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#F5E6D3]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/chai-brewing.png"
          alt="Chai brewing background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Gradient Overlay - Warm and Elegant */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5E6D3]/95 via-[#E4D5C4]/90 to-[#D4A574]/85" />

        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238B5A3C' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Logo */}
        <div className={`mb-8 md:mb-12 flex justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 animate-float">
            <Image
              src="/images/newlogo.png"
              alt="Chah E Piaa De Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className={`heading-xl mb-6 md:mb-8 text-gradient-warm transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          CHAH E PIAA DE
        </h1>

        {/* Tagline */}
        <p className={`text-xl md:text-2xl lg:text-3xl font-medium text-[#3E2723] mb-4 md:mb-6 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ fontFamily: 'Poppins, sans-serif' }}>
          जहाँ हर घूंट में है दिल की बात
        </p>

        <p className={`text-base md:text-lg lg:text-xl text-[#8B5A3C] mb-10 md:mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Where every sip tells a story of warmth, tradition, and togetherness
        </p>

        {/* CTA Button */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button className="btn-primary group relative overflow-hidden">
            <span className="relative z-10">EXPLORE OUR MENU</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A574] to-[#8B5A3C] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
          </button>

          <button className="btn-secondary group">
            <span className="group-hover:tracking-[0.2em] transition-all duration-300">VISIT US</span>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-4 md:left-12 lg:left-24 opacity-20 animate-float">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="28" stroke="#8B5A3C" strokeWidth="2" strokeDasharray="4 4" />
          </svg>
        </div>

        <div className="absolute bottom-1/4 right-4 md:right-12 lg:right-24 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="38" stroke="#D4A574" strokeWidth="2" strokeDasharray="6 6" />
          </svg>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-[0.2em] text-[#8B5A3C] font-semibold">Scroll</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#8B5A3C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
