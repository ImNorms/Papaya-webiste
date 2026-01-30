import React from 'react';
import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

const WhatWeDo = () => {
  return (
    <section className="py-16 bg-papaya-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          {/* Left Column - Text Content */}
          <div className="md:w-1/2">
            
            {/* Title: Slides in from the left */}
            <ScrollReveal animation="slide-left">
              <h2 className="text-3xl md:text-4xl font-bold text-papaya-green mb-6">
                What we do
              </h2>
            </ScrollReveal>

            {/* Paragraph: Fades up after the title */}
            <ScrollReveal animation="fade-up" delay={200}>
              <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                Papaya Academy is a private charity school in Rodriguez (Montalban), Rizal. It Offers not just quality education but also free lunch, transportation, books, uniforms, school supplies, free tuition and educational tours for the less fortunate children. We provide education to impoverished elementary students around Payatas dump and Rodriguez, Rizal
              </p>
            </ScrollReveal>

            {/* Button: Fades up last */}
            <ScrollReveal animation="fade-up" delay={400}>
              <Link 
                href="/about" 
                className="inline-block bg-papaya-green hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-md transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                ABOUT PAPAYA ACADEMY
              </Link>
            </ScrollReveal>
          </div>
          
          {/* Right Column - Video Placeholder */}
          <div className="md:w-1/2 w-full">
            {/* Video Box: Slides in from the right to meet the text */}
            <ScrollReveal animation="slide-right" delay={200}>
              <div className="bg-gray-200 rounded-lg overflow-hidden aspect-video shadow-lg relative group">
                <div className="w-full h-full flex items-center justify-center bg-gray-800 text-white transition-colors duration-500 group-hover:bg-gray-700">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <p className="text-lg font-medium">Watch Our Story</p>
                    <p className="text-sm opacity-75">Learn more about Papaya Academy</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
