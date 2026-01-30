"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Montserrat } from 'next/font/google';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Tag, 
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

// --- IMPORTS (Adjust based on your folder structure) ---
import ScrollReveal from '../../components/ScrollReveal'; 
import Footer from '../../components/Footer'; 
import AboutDropdown from '../../components/AboutDropdown'; 

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

// --- MOCK DATA ---
const NEWS_DATA = [
  {
    id: 1,
    title: "Enrollment for School Year 2024-2025 Now Open",
    category: "Admissions",
    date: "March 18, 2024",
    image: "/images/1.jpg", // Ensure this exists
    excerpt: "Registration for the upcoming school year is now open. Parents can enroll their children from March 20-30, 2024. Early bird discounts available.",
    isFeatured: true
  },
  {
    id: 2,
    title: "Students Excel in Regional Math Competition",
    category: "Academic",
    date: "March 15, 2024",
    image: "/images/3.jpg",
    excerpt: "Our Grade 6 students brought home 3 gold medals from the Regional Mathematics Competition, surpassing 50 other schools.",
    isFeatured: false
  },
  {
    id: 3,
    title: "Annual Family Day Celebration Set for April",
    category: "Events",
    date: "March 12, 2024",
    image: "/images/gallery/community1.jpg",
    excerpt: "Join us for our annual Family Day! Fun activities, food stalls, and games await students and parents alike.",
    isFeatured: false
  },
  {
    id: 4,
    title: "New Computer Lab Facilities Inaugurated",
    category: "Facilities",
    date: "March 08, 2024",
    image: "/images/jeep.jpg",
    excerpt: "We are excited to announce the opening of our state-of-the-art computer lab equipped with 30 new workstations.",
    isFeatured: false
  },
  {
    id: 5,
    title: "Ms. Reyes Named Teacher of the Year",
    category: "Faculty",
    date: "March 05, 2024",
    image: "/images/1.jpg",
    excerpt: "Recognizing excellence in teaching and dedication to student growth. Congratulations to Ms. Reyes!",
    isFeatured: false
  }
];

const CATEGORIES = ["All", "Admissions", "Academic", "Events", "Facilities", "Faculty"];

export default function NewsPage() {
  const [isHovered, setIsHovered] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter logic
  const filteredNews = activeCategory === "All" 
    ? NEWS_DATA 
    : NEWS_DATA.filter(item => item.category === activeCategory);

  const featuredStory = NEWS_DATA.find(item => item.isFeatured);
  const standardStories = filteredNews.filter(item => !item.isFeatured || activeCategory !== "All");

  return (
    <div className={`min-h-screen flex flex-col bg-gray-50 ${montserrat.className}`}>
      
      {/* --- HEADER (Reused from Main Page) --- */}
      <header className="bg-papaya-green text-white relative z-50 shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white flex-shrink-0">
              <Image 
                src="/images/papaya.jpg" 
                alt="Papaya Academy Logo" 
                width={40} 
                height={40} 
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">Papaya Academy News</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="nav-link text-base font-medium hover:text-[#F2C94C] transition-colors">Home</Link>
            <AboutDropdown />
            <Link href="/programs" className="nav-link text-base font-medium hover:text-[#F2C94C] transition-colors">Programs</Link>
            <Link href="/news" className="nav-link text-base font-medium hover:text-[#F2C94C] transition-colors">News</Link>
            <Link href="/contact" className="nav-link text-base font-medium hover:text-[#F2C94C] transition-colors">Contact</Link>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-[#F2C94C] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="bg-gradient-to-br from-papaya-green to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-down">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Latest News & Updates</h1>
              <p className="text-xl text-green-100 mb-8">
                Stay informed about the latest happenings at Papaya Academy
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* --- MAIN NEWS AREA --- */}
            <div className="lg:col-span-3">
              
              {/* --- CATEGORIES FILTER --- */}
              <ScrollReveal animation="fade-up" delay={200}>
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {CATEGORIES.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                          activeCategory === category
                            ? 'bg-papaya-green text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* --- FEATURED STORY --- */}
              {featuredStory && activeCategory === "All" && (
                <ScrollReveal animation="fade-up" delay={300}>
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 hover:shadow-xl transition-shadow duration-300">
                    <div className="h-64 bg-gray-200 relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="bg-papaya-yellow text-papaya-green px-3 py-1 text-xs font-bold">FEATURED</span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h2 className="text-2xl font-bold text-white mb-2">{featuredStory.title}</h2>
                        <p className="text-white/90 text-sm">{featuredStory.excerpt}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {featuredStory.date}
                          </span>
                          <span className="flex items-center">
                            <Tag className="w-4 h-4 mr-1" />
                            {featuredStory.category}
                          </span>
                        </div>
                        <Link 
                          href={`/news/${featuredStory.id}`}
                          className="text-papaya-green hover:text-papaya-yellow font-medium flex items-center"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              )}

              {/* --- STANDARD NEWS GRID --- */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {standardStories.map((story, index) => (
                  <ScrollReveal 
                    key={story.id} 
                    animation="fade-up" 
                    delay={400 + (index * 100)}
                  >
                    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                      <div className="h-48 bg-gray-200 relative">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center space-x-2 mb-3">
                          <span className="bg-papaya-green/10 text-papaya-green px-2 py-1 text-xs font-medium">
                            {story.category}
                          </span>
                          <span className="text-gray-500 text-sm">{story.date}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{story.title}</h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-3">{story.excerpt}</p>
                        <Link 
                          href={`/news/${story.id}`}
                          className="text-papaya-green hover:text-papaya-yellow font-medium flex items-center text-sm"
                        >
                          Read More <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* --- LOAD MORE --- */}
              <ScrollReveal animation="fade-up" delay={800}>
                <div className="text-center mt-12">
                  <button className="bg-papaya-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200">
                    Load More Articles
                  </button>
                </div>
              </ScrollReveal>
            </div>

            {/* --- SIDEBAR --- */}
            <div className="lg:col-span-1">
              <ScrollReveal animation="slide-right" delay={500}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-bold text-papaya-green mb-4">Search News</h3>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Search articles..." 
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-papaya-green"
                    />
                    <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={600}>
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-bold text-papaya-green mb-4">Follow Us</h3>
                  <div className="flex space-x-3">
                    <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Youtube className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="slide-right" delay={700}>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-bold text-papaya-green mb-4">Upcoming Events</h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-papaya-green pl-3">
                      <p className="font-semibold text-sm">Family Day</p>
                      <p className="text-xs text-gray-600">April 5, 2024</p>
                    </div>
                    <div className="border-l-4 border-papaya-green pl-3">
                      <p className="font-semibold text-sm">Quarterly Exams</p>
                      <p className="text-xs text-gray-600">March 25-29, 2024</p>
                    </div>
                    <div className="border-l-4 border-papaya-green pl-3">
                      <p className="font-semibold text-sm">Graduation</p>
                      <p className="text-xs text-gray-600">April 15, 2024</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <Footer />
    </div>
  );
}
