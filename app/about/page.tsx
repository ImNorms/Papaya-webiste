import Image from 'next/image';
import Link from 'next/link';
import AboutDropdown from '../../components/AboutDropdown';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-papaya-green text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-papaya-yellow rounded-full flex items-center justify-center text-papaya-green font-bold mr-2">PA</div>
              Papaya Academy
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Home</Link>
            <AboutDropdown />
            <Link href="/news" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">News</Link>
            <Link href="/programs" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Programs</Link>
            <Link href="/contact" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Contact</Link>
          </nav>
          <div className="flex items-center">
            <button className="text-white hover:text-papaya-yellow md:hidden transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
            <button className="ml-4 text-white hover:text-papaya-yellow transition-colors duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-papaya-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Papaya Academy</h1>
          <p className="text-xl max-w-3xl mx-auto">Empowering underprivileged children through quality education in the Philippines</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-papaya-green mb-8 text-center">Our Mission</h2>
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
                    <li>• Compassion and Empathy</li>
                    <li>Excellence in Education</li>
                    <li>Community Empowerment</li>
                    <li>Sustainable Impact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-papaya-green mb-12 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Humble Beginnings</h3>
                <p className="text-gray-600 mb-4">
                  Founded in 2020, Papaya Academy started as a small initiative to provide basic education 
                  to children in the Payatas community of Manila. What began as a single classroom has grown 
                  into a comprehensive educational institution serving hundreds of students annually.
                </p>
                <p className="text-gray-600">
                  Our name "Papaya" was chosen by our first group of students, symbolizing growth, 
                  nourishment, and the sweet fruits of education.
                </p>
              </div>
              <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                <Image 
                  src="/images/classroom.jpg" 
                  alt="Papaya Academy Classroom" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-papaya-green mb-12 text-center">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Maria Santos', role: 'Founder & Director', image: '/images/team1.jpg' },
              { name: 'Juan Dela Cruz', role: 'Head of Education', image: '/images/team2.jpg' },
              { name: 'Ana Reyes', role: 'Community Outreach', image: '/images/team3.jpg' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden border-4 border-papaya-green">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                <p className="text-papaya-green">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-papaya-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Be part of our journey to transform lives through education
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/donate" 
              className="bg-papaya-yellow text-papaya-green px-8 py-3 rounded-md font-semibold hover:bg-opacity-90 transition-all duration-200"
            >
              Donate Now
            </Link>
            <Link 
              href="/volunteer" 
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-200"
            >
              Volunteer
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
