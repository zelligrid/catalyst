// app/page.tsx
'use client'; // Required for the form handling logic

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', phone: '', currentClass: '' });
  const [submitted, setSubmitted] = useState(false);

  // Form validation and submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation is handled by HTML5 (required, pattern)
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // Here you would normally send data to your backend/CRM
  };

  return (
    <div className="flex flex-col">
      
      {/* 1. Hero Section & Form (Above the Fold) */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Benefit-Driven Copy & Prominent CTA */}
          <div>
            <span className="bg-orange-100 text-accent font-bold px-3 py-1 rounded-full text-sm uppercase tracking-wide">
              Limited Seats — Apply Now
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-dark mt-4 leading-tight">
              Admissions Open <span className="text-sapphire">2026-27</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Get complete program details, batch information, and personalized academic guidance for your child's success.
            </p>
            <ul className="mt-8 space-y-3 text-lg font-medium text-gray-700">
              <li className="flex items-center gap-2">✅ Tuition classes for grades 1–12</li>
              <li className="flex items-center gap-2">✅ Small batch sizes & expert faculty</li>
              <li className="flex items-center gap-2">✅ Proven track record of toppers</li>
            </ul>
            <div className="mt-10">
              {/* Prominent CTA scrolling to form */}
              <a href="#admission-form" className="bg-sapphire hover:bg-sapphire-dark text-light text-center px-8 py-4 rounded-lg font-bold text-lg shadow-xl transition block w-full md:w-auto md:inline-block">
                Get Course Details Now
              </a>
            </div>
          </div>

          {/* Right Side: Simplified Form with Autofill & Validation */}
          <div id="admission-form" className="bg-offwhite p-8 rounded-2xl shadow-2xl border border-gray-100">
            <h2 className="text-2xl font-bold text-sapphire mb-6">Enroll for CBSE Coaching Programs</h2>
            
            {submitted ? (
              <div className="bg-green-100 text-green-800 p-6 rounded-lg text-center">
                <h3 className="font-bold text-xl mb-2">Thank You!</h3>
                <p>We have received your details. Our team will contact you shortly regarding your admission for Class {formData.currentClass}.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-bold mb-1">Student Name *</label>
                  <input 
                    type="text" 
                    required 
                    autoComplete="name"
                    placeholder="Enter student's full name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sapphire focus:border-sapphire outline-none"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-bold mb-1">Mobile Number *</label>
                  <input 
                    type="tel" 
                    required 
                    pattern="[0-9]{10}"
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sapphire outline-none"
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-1">Current Class *</label>
                  <select 
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sapphire outline-none bg-white"
                    onChange={(e) => setFormData({...formData, currentClass: e.target.value})}
                  >
                    <option value="">Select Class</option>
                    <option value="1-5">Grades 1-5</option>
                    <option value="6-8">Grades 6-8</option>
                    <option value="9-10">Grades 9-10</option>
                    <option value="11-12">Grades 11-12</option>
                  </select>
                </div>

                <button type="submit" className="w-full bg-accent hover:bg-orange-600 text-light font-bold text-lg py-4 rounded-lg mt-4 shadow-lg transition">
                  Submit Details
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 2. Courses Section */}
      <section id="courses" className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-dark mb-4">Programs Designed for Every Journey</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">From foundational learning to competitive exams, we have a track designed for your child's success.</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Cards */}
            {[
              { title: 'CBSE / ICSE', desc: 'Expert coaching focused on strong fundamentals and academic excellence.' },
              { title: 'JEE / NEET', desc: 'Intensive preparation with expert guidance ensuring deep conceptual understanding.' },
              { title: 'IB / IGCSE', desc: 'Comprehensive academic support aligned with international standards.' },
              { title: 'Foundation (8-10)', desc: 'NCERT-focused learning and early development of problem-solving skills.' },
              { title: 'SAT / IELTS', desc: 'Expert-led coaching to enhance test performance for global university admissions.' },
              { title: 'Pre-School & Day Care', desc: 'A thoughtfully designed early-learning environment nurturing young minds.' }
            ].map((course, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition border-t-4 border-sapphire text-left">
                <h3 className="text-xl font-bold mb-3">{course.title}</h3>
                <p className="text-gray-600">{course.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Testimonials */}
      <section id="testimonials" className="py-20 bg-sapphire text-light">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Parents Say</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <p className="italic mb-4">"My son is studying in Catalyst classes and he is very happy with the class teacher. His learning curve has improved a lot."</p>
              <p className="font-bold text-accent">— Ajay Pekde</p>
            </div>
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <p className="italic mb-4">"Teaching is well structured. Teacher works on the concepts and ensured one-on-one attention to each student."</p>
              <p className="font-bold text-accent">— Meghna Basavaraj</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQs (Addresses Content Audit) */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="group bg-offwhite p-6 rounded-lg cursor-pointer">
              <summary className="font-bold text-lg list-none flex justify-between items-center">
                What grades do you offer tuition for?
                <span className="text-sapphire group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">We offer coaching programs for Grades 1 through 12 across various boards including CBSE, ICSE, IB, and IGCSE.</p>
            </details>
            <details className="group bg-offwhite p-6 rounded-lg cursor-pointer">
              <summary className="font-bold text-lg list-none flex justify-between items-center">
                Where are your branches located?
                <span className="text-sapphire group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600">We have two branches: Manikonda (Lanco Hills Rd) and Kondapur (SMR Vinay Iconia Plaza), Hyderabad.</p>
            </details>
          </div>
        </div>
      </section>

    </div>
  )
}
