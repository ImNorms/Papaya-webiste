"use client";

import { useState } from 'react';
import ScrollReveal from '../../components/ScrollReveal';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export default function AboutPage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`min-h-screen ${montserrat.className}`}>
      <Header />
      
      {/* Hero Section */}
      <section className="bg-papaya-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-down">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Papaya Academy</h1>
            <p className="text-xl max-w-3xl mx-auto">Empowering underprivileged children through quality education in the Philippines</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-down">
              <h2 className="text-3xl font-bold text-papaya-green mb-8 text-center">Our Mission</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-papaya-light p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6">
                  At Papaya Academy, we believe that every child deserves access to quality education, 
                  regardless of their socioeconomic background. Our mission is to break the cycle of 
                  poverty through education by providing comprehensive learning programs that empower 
                  children to build a better future for themselves and their communities.
                </p>
                <div className="grid md:grid-cols-2 gap-8 mt-10">
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-papaya-green mb-3">Our Vision</h3>
                    <p className="text-gray-600">
                      A world where every child has the opportunity to reach their full potential through education.
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-sm">
                    <h3 className="text-xl font-semibold text-papaya-green mb-3">Our Values</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Excellence in Education</li>
                      <li>• Compassion and Care</li>
                      <li>• Community Partnership</li>
                      <li>• Integrity and Transparency</li>
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="our-story" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="fade-down">
              <h2 className="text-3xl font-bold text-papaya-green mb-8 text-center">Our Story</h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-lg text-gray-700 mb-6">
                  Papaya Academy was founded with a simple yet powerful vision: to provide quality education 
                  to children living in extreme poverty around the Payatas rubbish dump in Manila. What started 
                  as a small initiative has grown into a comprehensive educational institution serving hundreds 
                  of children each year.
                </p>
                <p className="text-lg text-gray-700 mb-6">
                  Through the generous support of donors and partners, we've been able to expand our programs 
                  to include not just academic education, but also nutrition, healthcare, and family support services. 
                  Our holistic approach ensures that every child receives the comprehensive care they need to thrive.
                </p>
                <div className="text-center mt-8">
                  <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="bg-papaya-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                  >
                    {isExpanded ? 'Show Less' : 'Read More'}
                  </button>
                </div>
                {isExpanded && (
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-lg text-gray-700">
                      Today, Papaya Academy stands as a beacon of hope in the community, demonstrating that 
                      with dedication, compassion, and proper support, every child can achieve their dreams 
                      regardless of their circumstances. We continue to grow and evolve, always seeking new 
                      ways to better serve our students and their families.
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-down">
            <h2 className="text-3xl font-bold text-papaya-green mb-12 text-center">Our Leadership Team</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Dr. Maria Santos",
                role: "Executive Director",
                description: "Leading our mission with over 20 years of educational experience."
              },
              {
                name: "John Reyes",
                role: "Academic Director",
                description: "Ensuring quality education and innovative teaching methods."
              },
              {
                name: "Sarah Chen",
                role: "Operations Director",
                description: "Managing daily operations and community partnerships."
              }
            ].map((member, index) => (
              <ScrollReveal key={index} animation="fade-up" delay={200 + (index * 100)}>
                <div className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 bg-papaya-green rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-papaya-green font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-16 bg-papaya-light">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-down">
            <h2 className="text-3xl font-bold text-papaya-green mb-12 text-center">Our Partners & Sponsors</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ScrollReveal key={item} animation="fade-up" delay={200 + (item * 50)}>
                <div className="bg-white p-6 rounded-lg flex items-center justify-center h-24 shadow-sm">
                  <div className="text-gray-400 text-center">
                    <div className="w-12 h-12 bg-gray-200 rounded mx-auto mb-2"></div>
                    <p className="text-xs">Partner {item}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
