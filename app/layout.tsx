// app/layout.tsx
import './globals.css'
import Link from 'next/link'

// 1. SEO: Metadata
export const metadata = {
  title: 'Catalyst Classes | Admissions Open 2026-27',
  description: 'Personalised learning, accredited faculty, smaller batches, and periodic assessments for Grades 1-12. CBSE, ICSE, IB, IGCSE, JEE & NEET coaching.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* 2. Sticky Header & Simplified Navigation */}
        <header className="sticky top-0 z-50 bg-light shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center gap-2">
                <div className="w-10 h-10 bg-sapphire rounded-full flex items-center justify-center text-light font-bold">C</div>
                <span className="font-bold text-xl text-sapphire">Catalyst Classes</span>
              </div>

              {/* Nav Links (Semantic HTML) */}
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-700 hover:text-sapphire font-medium transition">Home</Link>
                <Link href="#courses" className="text-gray-700 hover:text-sapphire font-medium transition">Courses</Link>
                <Link href="#testimonials" className="text-gray-700 hover:text-sapphire font-medium transition">Testimonials</Link>
                <Link href="#faq" className="text-gray-700 hover:text-sapphire font-medium transition">FAQs</Link>
                <Link href="#contact" className="text-gray-700 hover:text-sapphire font-medium transition">Contact</Link>
              </nav>

              {/* Search & CTA */}
              <div className="flex items-center gap-4">
                <input 
                  type="search" 
                  placeholder="Search..." 
                  className="hidden lg:block px-3 py-1 border border-gray-300 rounded-md focus:outline-none focus:border-sapphire text-sm"
                />
                <a href="#admission-form" className="bg-accent hover:bg-orange-600 text-light px-5 py-2 rounded-md font-bold transition shadow-lg">
                  Enroll Now
                </a>
              </div>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer id="contact" className="bg-dark text-light py-12">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Contact Us</h3>
              <p className="mb-2">Email: info@catalystclasses.org</p>
              <p className="mb-2">Phone: +91-630-032-8535</p>
              <p>Phone: +91-781-593-8002</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">Our Branches</h3>
              <p className="mb-2"><strong>Kondapur:</strong> 503, 504, 5th floor, SMR Vinay Iconia Plaza, Hyderabad.</p>
              <p><strong>Manikonda:</strong> Plot no 53, 54, Second floor, Lanco Hills Rd, Hyderabad.</p>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-800 text-sm text-gray-400">
            © 2026 Catalyst Classes. All Rights Reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}
