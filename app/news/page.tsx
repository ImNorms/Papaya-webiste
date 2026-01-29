import React from 'react';
import Link from 'next/link';
import AboutDropdown from '../../components/AboutDropdown';

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-papaya-green text-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white flex items-center">
              <div className="w-10 h-10 bg-papaya-yellow rounded-full flex items-center justify-center text-papaya-green font-bold mr-2">PA</div>
              Papaya Academy News
            </Link>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Home</Link>
            <AboutDropdown />
            <Link href="/news" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Academics</Link>
            <Link href="/news" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Admissions</Link>
            <Link href="/news" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Events</Link>
            <Link href="/news" className="text-white hover:text-papaya-yellow font-medium transition-colors duration-200">Contact</Link>
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

      {/* Top Stories Section */}
      <div className="bg-papaya-green text-white py-3">
        <div className="container mx-auto px-4 flex items-center">
          <span className="bg-red-600 px-3 py-1 text-sm font-bold mr-4">Top Stories</span>
          <p className="text-sm">Latest updates on school events and achievements...</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Featured Story */}
              <div className="md:col-span-2 bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-300 relative">
                  <img src="/school-enrollment.jpg" alt="School Enrollment" className="w-full h-full object-cover" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-papaya-yellow text-papaya-green px-2 py-1 text-xs font-bold">BREAKING</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">Important Notice</span>
                  <h2 className="text-2xl font-bold mt-2 mb-3">
                    <Link href="/news/enrollment-2024-2025" className="text-gray-800 hover:text-papaya-green">
                      Enrollment for School Year 2024-2025 Now Open
                    </Link>
                  </h2>
                  <p className="text-gray-600 mb-4">
                    Registration for the upcoming school year is now open. Parents can enroll their children from March 20-30, 2024. Required documents and forms are available at the school office...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 18, 2024</span>
                    <Link href="/news/enrollment-2024-2025" className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Card 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  <img src="/math-competition.jpg" alt="Math Competition" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">Academic Achievement</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">
                    <Link href="/news/math-competition" className="text-gray-800 hover:text-papaya-green">
                      Students Excel in Regional Math Competition
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our Grade 6 students brought home 3 medals from the Regional Mathematics Competition...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 15, 2024</span>
                    <Link href="/news/math-competition" className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Card 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  <img src="/family-day.jpg" alt="Family Day" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">School Event</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">
                    <Link href="/news/family-day-2024" className="text-gray-800 hover:text-papaya-green">
                      Annual Family Day Celebration
                    </Link>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Join us for our annual Family Day on April 5, 2024! Fun activities, games, and food stalls await...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 12, 2024</span>
                    <Link href="/news/family-day-2024" className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>

              {/* News Card 4 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  <img src="/teacher-award.jpg" alt="Teacher Award" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">Teacher Spotlight</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">
                    Ms. Reyes Named Outstanding Teacher of the Year
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our Grade 4 English teacher has been recognized for her innovative teaching methods...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 10, 2024</span>
                    <button className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>

              {/* News Card 5 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  <img src="/computer-lab.jpg" alt="Computer Lab" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">Facility Update</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">
                    New Computer Lab Now Open
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We're excited to announce the opening of our new computer lab equipped with 20 modern computers...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 8, 2024</span>
                    <button className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>

              {/* News Card 6 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-300">
                  <img src="/exam-schedule.jpg" alt="Exam Schedule" className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <span className="text-sm text-papaya-green font-semibold">Reminder</span>
                  <h3 className="text-lg font-bold mt-2 mb-3">
                    Quarterly Exams Schedule Released
                  </h3>
                  <p className="text-gray-600 mb-4">
                    The schedule for the final quarterly examinations has been posted. Exams will run from March 25-29...
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">March 5, 2024</span>
                    <button className="text-papaya-green hover:text-papaya-yellow font-medium">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Load More Button */}
            <div className="text-center mt-8">
              <button className="bg-papaya-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-200">
                Load More Articles
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Stay Connected */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
              <p className="text-gray-600 mb-4">Follow us for the latest updates</p>
              <div className="flex space-x-3">
                <button className="w-10 h-10 bg-papaya-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                  <span className="text-sm font-bold">f</span>
                </button>
                <button className="w-10 h-10 bg-papaya-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                  <span className="text-sm font-bold">t</span>
                </button>
                <button className="w-10 h-10 bg-papaya-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                  <span className="text-sm font-bold">i</span>
                </button>
                <button className="w-10 h-10 bg-papaya-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all duration-200">
                  <span className="text-sm font-bold">y</span>
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-600 hover:text-papaya-green">Academic Calendar</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-papaya-green">Student Handbook</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-papaya-green">School Policies</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-papaya-green">Parent Portal</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-papaya-green">Library Resources</Link></li>
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-papaya-green pl-3">
                  <p className="font-semibold">Family Day</p>
                  <p className="text-sm text-gray-600">April 5, 2024</p>
                </div>
                <div className="border-l-4 border-papaya-green pl-3">
                  <p className="font-semibold">Quarterly Exams</p>
                  <p className="text-sm text-gray-600">March 25-29, 2024</p>
                </div>
                <div className="border-l-4 border-papaya-green pl-3">
                  <p className="font-semibold">Graduation Ceremony</p>
                  <p className="text-sm text-gray-600">April 15, 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
