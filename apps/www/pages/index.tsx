import { useRef, useEffect } from 'react'
import { useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import supabase from '../lib/supabaseClient'
import Head from 'next/head'

// Parallax effect hook
function useParallax(ref: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const offset = window.scrollY * 0.3;
        ref.current.style.backgroundPosition = `center ${offset}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);
}

// Fade-in on scroll
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

// --- NAVBAR ---
const Navbar = () => (
  <nav className="sticky top-0 z-50 w-full bg-[#0B1D3A] border-b border-[#1D3A1D] flex items-center justify-between px-8 py-4">
    <div className="text-2xl font-bold text-white">LOGO</div>
    <div className="flex gap-8 text-white text-lg">
      <a href="#solutions" className="hover:text-green-400 transition">Solutions</a>
      <a href="#about" className="hover:text-green-400 transition">About</a>
      <a href="#contact" className="hover:text-green-400 transition">Contact</a>
    </div>
  </nav>
)

// --- HERO SECTION ---
const Hero = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
    className="w-full bg-[#0B1D3A] pt-20 pb-16 flex flex-col md:flex-row items-center justify-between px-8 gap-12"
  >
    <div className="flex-1 max-w-xl">
      {/* TODO: Customize headline and subheadline */}
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
        Modern Automation, <span className="text-[#1D3A1D]">Reimagined</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-200 mb-8">
        Cut costs, improve accuracy, and scale smarter with next-gen AI-first workflows.
      </p>
    </div>
    <div className="flex-1 flex justify-center items-center">
      {/* TODO: Replace with animation or product image */}
      <div className="w-80 h-80 bg-[#1D3A1D] rounded-2xl flex items-center justify-center text-white text-3xl font-bold opacity-80">
        IMAGE/ANIMATION
      </div>
    </div>
  </motion.section>
)

// --- CTA SECTION ---
const CTASection = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
    viewport={{ once: true }}
    className="w-full flex flex-col items-center py-12 bg-[#0B1D3A]"
  >
    <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">Ready to get started?</h2>
    <button className="bg-[#1D3A1D] text-white px-8 py-3 rounded-2xl text-lg font-bold hover:bg-green-900 transition">
      Get Started
    </button>
  </motion.section>
)

// --- FEATURES GRID ---
const features = [
  {
    title: 'Discovery',
    desc: 'Assessing where inefficiencies exist and where innovation can drive results',
  },
  {
    title: 'Solution Vetting',
    desc: 'We screen AI tools and software to confirm real impact before implementation',
  },
  {
    title: 'Implementation',
    desc: 'Implementing solutions and pushing them across the finish line',
  },
  {
    title: 'Strategy',
    desc: 'Bringing clarity to the big picture and identifying paths for growth',
  },
  {
    title: 'Education',
    desc: 'Equipping teams with the knowledge to adapt and thrive',
  },
];

const FeaturesGrid = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    viewport={{ once: true }}
    className="w-full py-16 flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">Why Choose Us?</h2>
    <div className="w-full max-w-5xl flex flex-col gap-8 items-center">
      {/* Top feature centered */}
      <div className="flex justify-center w-full">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl w-full max-w-md transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/20 hover:brightness-125 hover:ring-2 hover:ring-green-400/60">
          <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">{features[0].title}</h3>
          <p className="text-gray-200">{features[0].desc}</p>
        </div>
      </div>
      {/* 2x2 grid below */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
        {features.slice(1).map((f, i) => (
          <div key={i} className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:bg-white/20 hover:brightness-125 hover:ring-2 hover:ring-green-400/60">
            <h3 className="text-xl font-semibold text-white mb-2 drop-shadow">{f.title}</h3>
            <p className="text-gray-200">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.section>
)

// --- TESTIMONIALS/LOGOS ---
const Testimonials = () => (
  <motion.section
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.4 }}
    viewport={{ once: true }}
    className="w-full py-16 bg-[#0B1D3A] flex flex-col items-center"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About</h2>
    <p className="text-lg text-gray-200 mb-10 text-center max-w-2xl mx-auto">At Bloom Advisors, we help small and midsize businesses stay competitive in a world of rapid technological change. As larger companies are moving quickly to adopt AI, we make sure local businesses have the same chance to grow and compete.  Because our founders come from working in and around small business, we understand the deep impact these companies have on families, communities, and local economies. Our goal is to empower business owners with tailored systems, long term strategies, and the confidence to use emerging technologies. We focus on practical and scalable products that emowers your team, instead of replacing them.  Whether you're launching a new venture or looking to modernize your current business, we're here to help you grow it.</p>
    <div className="flex flex-wrap gap-8 justify-center items-center">
      {/* TODO: Replace with real logos or testimonials */}
      <div className="w-40 h-16 bg-[#1D3A1D] rounded-2xl flex items-center justify-center text-white text-lg font-bold opacity-80">LOGO 1</div>
      <div className="w-40 h-16 bg-[#1D3A1D] rounded-2xl flex items-center justify-center text-white text-lg font-bold opacity-80">LOGO 2</div>
      <div className="w-40 h-16 bg-[#1D3A1D] rounded-2xl flex items-center justify-center text-white text-lg font-bold opacity-80">LOGO 3</div>
    </div>
  </motion.section>
)

// --- NEW AI QUESTIONNAIRE FORM ---
const industryOptions = [
  "Retail",
  "Hospitality",
  "Professional Services",
  "Construction",
  "Real Estate",
  "Healthcare",
  "Logistics/Trucking",
  "Manufacturing",
  "Education",
  "Nonprofit",
  "Other",
];
const teamSizeOptions = [
  "Just me",
  "2–10",
  "11–50",
  "51–100",
  "100+",
];
const aiKnowledgeOptions = [
  "Almost nothing — I need it explained in simple terms",
  "I've heard about it but haven't used any tools",
  "I've tried a few things (like ChatGPT, Zapier, etc.)",
  "I'm already using some AI-powered workflows",
];
const opennessOptions = [
  "Very open — I'm actively looking for help",
  "Curious, but not sure how it fits",
  "Open, but need someone to guide me",
  "Not interested right now",
];
const automationAreas = [
  "Processing invoices or purchase orders",
  "Managing inventory or supply levels",
  "Filing or tagging incoming emails",
  "Generating documents or reports",
  "Customer service (e.g., auto replies, FAQs)",
  "Scheduling or calendar management",
  "Social media or marketing content",
  "Data entry or spreadsheet cleanup",
  "None of these / Not sure yet",
];

const AIQuestionnaireForm = ({ setShowSuccessMessage }: { setShowSuccessMessage: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [formData, setFormData] = useState({
    business_name: '',
    industry: '',
    company_size: '',
    areas_of_interest: [] as string[],
    ai_knowledge_level: '',
    openness_to_automation: '',
    comments: '',
    your_name: '',
    email: '',
    phone_number: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckbox = (area: string) => {
    setFormData((prev) => {
      const exists = prev.areas_of_interest.includes(area);
      return {
        ...prev,
        areas_of_interest: exists
          ? prev.areas_of_interest.filter((a) => a !== area)
          : [...prev.areas_of_interest, area],
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const dataToSend: Record<string, any> = {
      business_name: formData.business_name.trim() || null,
      industry: formData.industry || null,
      company_size: formData.company_size || null,
      areas_of_interest: formData.areas_of_interest.length > 0 ? formData.areas_of_interest : null,
      ai_knowledge_level: formData.ai_knowledge_level || null,
      openness_to_automation: formData.openness_to_automation || null,
      comments: formData.comments.trim() || null,
      your_name: formData.your_name.trim() || null,
      email: formData.email.trim() || null,
      phone_number: formData.phone_number.trim() || null,
      submitted_at: new Date(),
    };

    console.log('Submitting data to Supabase:', dataToSend);

    try {
      const { data, error } = await supabase
        .from('questionnaire_submissions')
        .insert([dataToSend]);

      if (error) {
        console.error("Supabase error:", error);
        alert("Submission failed: " + error.message);
        setIsSubmitting(false);
        return;
      }

      console.log("Submission successful:", data);
      setFormData({
        business_name: '',
        industry: '',
        company_size: '',
        areas_of_interest: [],
        ai_knowledge_level: '',
        openness_to_automation: '',
        comments: '',
        your_name: '',
        email: '',
        phone_number: '',
      });
      setShowSuccessMessage(true);
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("Something went wrong: " + (err instanceof Error ? err.message : String(err)));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full">
      <form onSubmit={handleSubmit} className="max-w-xl w-full rounded-2xl p-8 flex flex-col gap-6 shadow-lg mt-12">
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Industry</label>
          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
          >
            <option value="">Select...</option>
            {industryOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Team Size</label>
          <select
            name="company_size"
            value={formData.company_size}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
          >
            <option value="">Select...</option>
            {teamSizeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Areas Interested in Automating</label>
          <div className="flex flex-col gap-2">
            {automationAreas.map((area) => (
              <label key={area} className="flex items-center gap-2 text-[#c8cacc]">
                <input
                  type="checkbox"
                  checked={formData.areas_of_interest.includes(area)}
                  onChange={() => handleCheckbox(area)}
                  className="accent-green-700 w-5 h-5 rounded"
                />
                <span>{area}</span>
              </label>
            ))}
          </div>
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Current AI Knowledge Level</label>
          <select
            name="ai_knowledge_level"
            value={formData.ai_knowledge_level}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
          >
            <option value="">Select...</option>
            {aiKnowledgeOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Openness to Automation</label>
          <select
            name="openness_to_automation"
            value={formData.openness_to_automation}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none"
          >
            <option value="">Select...</option>
            {opennessOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Business Name</label>
          <input
            type="text"
            name="business_name"
            value={formData.business_name}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none placeholder-gray-600"
          />
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Your Name</label>
          <input
            type="text"
            name="your_name"
            id="your_name"
            value={formData.your_name}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none placeholder-gray-600"
          />
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none placeholder-gray-600"
          />
        </div>
        <div>
          <label className="block text-white mb-1 text-lg font-medium">Phone Number</label>
          <input
            type="text"
            name="phone_number"
            value={formData.phone_number}
            onChange={handleChange}
            className="w-full p-3 rounded-2xl bg-[#c8cacc] text-[#0a0e14] border-none focus:ring-2 focus:ring-green-700 focus:outline-none placeholder-gray-600"
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 rounded-2xl font-bold text-white text-lg mt-4"
          style={{
            background: 'linear-gradient(90deg, #0B1D3A 0%, #1D3A1D 100%)',
            boxShadow: '0 2px 8px 0 rgba(0,0,0,0.15)',
            border: 'none',
          }}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

// --- FOOTER ---
const Footer = () => (
  <footer className="w-full pt-4 pb-2">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-8 gap-8">
      <div className="text-gray-400 text-center w-full">&copy; {new Date().getFullYear()} Bloom Advisory</div>
    </div>
  </footer>
)

// --- CONTACT SECTION ---
const ContactSection = () => (
  <motion.section
    id="contact"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
    className="w-full py-20 px-6 flex flex-col items-center"
  >
    <div className="max-w-4xl w-full bg-white/5 backdrop-blur-sm rounded-2xl p-12 text-center shadow-lg flex flex-col items-center gap-6 border border-white/10">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Contact Us</h2>
      <p className="text-lg text-gray-200 mb-2">We'd love to hear from you. Reach out anytime!</p>
      <div className="flex flex-col gap-4 w-full text-lg items-center">
        <div className="flex items-center gap-3 justify-center">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0V8a4 4 0 00-8 0v4m8 0v4a4 4 0 01-8 0v-4" /></svg>
          <a href="mailto:drew.blomquist@bloomadvisory.com" className="text-white hover:text-green-400 transition">drew.blomquist@bloomadvisory.com</a>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
          <a href="tel:4174934330" className="text-white hover:text-green-400 transition">417-493-4330</a>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2A5.75 5.75 0 0 0 2 7.75v8.5A5.75 5.75 0 0 0 7.75 22h8.5A5.75 5.75 0 0 0 22 16.25v-8.5A5.75 5.75 0 0 0 16.25 2h-8.5Zm0 1.5h8.5A4.25 4.25 0 0 1 20.5 7.75v8.5A4.25 4.25 0 0 1 16.25 20.5h-8.5A4.25 4.25 0 0 1 3.5 16.25v-8.5A4.25 4.25 0 0 1 7.75 3.5Zm7.25 2.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 1.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z"/></svg>
          <a href="https://instagram.com/bloomadvisory.ai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition">@bloomadvisory.ai</a>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.92c-.8.36-1.67.61-2.58.72a4.48 4.48 0 0 0 1.97-2.48 8.94 8.94 0 0 1-2.83 1.08A4.48 4.48 0 0 0 16.11 4c-2.5 0-4.52 2.02-4.52 4.51 0 .35.04.7.11 1.03-3.76-.19-7.1-1.99-9.33-4.73a4.51 4.51 0 0 0-.61 2.27c0 1.57.8 2.96 2.02 3.77-.74-.02-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.63 4.45-.38.1-.78.16-1.19.16-.29 0-.57-.03-.84-.08.57 1.77 2.23 3.06 4.2 3.1A9.01 9.01 0 0 1 2 19.54a12.73 12.73 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.77 0-.19-.01-.37-.02-.56.88-.64 1.64-1.44 2.24-2.35Z"/></svg>
          <a href="https://twitter.com/bloomadvisoryai" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition">@bloomadvisoryai</a>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /></svg>
          <a href="https://drewblomquist.substack.com/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-400 transition">Substack</a>
        </div>
      </div>
    </div>
  </motion.section>
)

// --- PAGE ---
export default function Home() {
  const bgRef = useRef(null);
  useParallax(bgRef);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  // Make toast disappear after 5 seconds
  useEffect(() => {
    if (showSuccessMessage) {
      const timeout = setTimeout(() => setShowSuccessMessage(false), 5000);
      return () => clearTimeout(timeout);
    }
  }, [showSuccessMessage]);

  return (
    <>
      <Head>
        <title>Bloom Advisory.ai</title>
      </Head>
      <div
        ref={bgRef}
        className="min-h-screen w-full font-sans relative"
      >
        <div className="fixed top-0 left-0 w-full h-full -z-10 opacity-80 blur-[60px] brightness-110" style={{ backgroundImage: "url('/images/B2GBackground.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }} />
        {/* Success Toast for Questionnaire */}
        {showSuccessMessage && (
          <div
            className="fixed z-50 bottom-8 right-8 bg-[#111827] text-white px-10 py-6 rounded-3xl shadow-2xl text-center text-xl font-semibold transition-opacity duration-500"
            style={{ minWidth: '380px', maxWidth: '95%', opacity: showSuccessMessage ? 1 : 0 }}
          >
            Thanks! We'll review your responses soon.
          </div>
        )}
        {/* NAVBAR */}
        <nav className="w-full py-6 px-6 max-w-7xl mx-auto flex justify-between items-center">
          <span className="text-4xl font-bold glass-logo-text" style={{ color: '#0B9444' }}>Bloom Advisory</span>
          <div className="flex gap-8 text-gray-100 text-lg">
            <a href="#about" className="hover:text-green-300 transition">About Us</a>
            <a href="#features" className="hover:text-green-300 transition">Features</a>
            <a href="#form" className="hover:text-green-300 transition">Get Started</a>
            <a href="#contact" className="hover:text-green-300 transition">Contact</a>
          </div>
        </nav>

        {/* HERO SECTION */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full pt-24 pb-16 px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg rounded-2xl">
              Don&apos;t know where to start with AI?
            </h1>
            <p className="text-3xl md:text-5xl text-[#BFBFBF] mb-8 drop-shadow rounded-2xl">
              Welcome to Bloom Advisory.
            </p>
          </div>
        </motion.section>

        {/* FEATURES SECTION */}
        <FeaturesGrid />

        {/* QUESTIONNAIRE SECTION */}
        <motion.section
          id="form"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full py-20 px-6 flex flex-col items-center"
        >
          <div
            className="max-w-xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Check out our survey</h2>
            <AIQuestionnaireForm setShowSuccessMessage={setShowSuccessMessage} />
          </div>
        </motion.section>

        {/* TESTIMONIALS/PLACEHOLDER SECTION */}
        <motion.section
          id="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="w-full py-20 px-6 flex flex-col items-center"
        >
          <div className="max-w-4xl w-full bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-12 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About</h2>
            <p className="text-lg text-gray-200 mb-2 max-w-2xl mx-auto">At Bloom Advisors, we help small and midsize businesses stay competitive in a world of rapid technological change. As larger companies are moving quickly to adopt AI, we make sure local businesses have the same chance to grow and compete.  Because our founders come from working in and around small business, we understand the deep impact these companies have on families, communities, and local economies. Our goal is to empower business owners with tailored systems, long term strategies, and the confidence to use emerging technologies. We focus on practical and scalable products that emowers your team, instead of replacing them.  Whether you're launching a new venture or looking to modernize your current business, we're here to help you grow it.</p>
          </div>
        </motion.section>

        {/* CONTACT SECTION */}
        <ContactSection />

        {/* FOOTER */}
        <Footer />

        {/* Update global style for professional matte grassy logo effect */}
        <style jsx global>{`
          .grassy-logo-text {
            color: #3d5c2b;
            background:
              linear-gradient(120deg, #4e7c2f 0%, #3d5c2b 60%, #6ea03a 100%),
              url('data:image/svg+xml;utf8,<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"><filter id="noise"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="2"/></filter><rect width="20" height="20" filter="url(%23noise)" opacity="0.18"/></svg>');
            background-size: cover, 120px 120px;
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            filter: brightness(1.05) contrast(1.1);
            text-shadow:
              0 2px 8px #1a2a1d55,
              0 1px 0 #6ea03a44;
            letter-spacing: 0.04em;
            line-height: 1.1;
          }
          .glass-logo-text {
            background: linear-gradient(120deg, #0B1D3A 0%, #1D3A1D 100%);
            background-clip: text;
            -webkit-background-clip: text;
            color: transparent;
            padding: 0.25em 0.8em;
            border-radius: 1.25rem;
            background-color: rgba(255,255,255,0.08);
            box-shadow: 0 4px 32px 0 rgba(0,0,0,0.18), 0 1.5px 8px 0 rgba(29,58,29,0.10);
            border: 1.5px solid rgba(255,255,255,0.18);
            backdrop-filter: blur(16px) saturate(1.2);
            -webkit-backdrop-filter: blur(16px) saturate(1.2);
            display: inline-block;
            letter-spacing: 0.04em;
            line-height: 1.1;
            transition: box-shadow 0.2s, background 0.2s;
          }
        `}</style>
      </div>
    </>
  )
}
