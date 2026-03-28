import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, CheckCircle, Star, Quote, Zap, Shield, Clock, Users, Gift, ChevronDown } from "lucide-react";

const testimonials = [
  {
    name: "Jonathan Tan",
    role: "CEO, Prestige Real Estate Group",
    rating: 5,
    text: "NexusTech delivered our virtual showroom platform in record time. The quality of the 3D digital twins exceeded every expectation — our sales team calls it a game-changer. We've cut show suite operational costs by 40%.",
    avatar: "JT",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dr. Claire Ng",
    role: "Medical Director, Apex Healthcare",
    rating: 5,
    text: "The Concierge Patient Recovery App has transformed our post-operative care model. Patients are more engaged, our care team has better visibility, and we've seen a 60% reduction in avoidable re-admissions.",
    avatar: "CN",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Michael Ong",
    role: "Managing Partner, Meridian Family Office",
    rating: 5,
    text: "Our Family Office Command Center from NexusTech gives us consolidated visibility across all asset classes for the first time. The security architecture they implemented is genuinely bank-grade.",
    avatar: "MO",
    gradient: "from-amber-500 to-yellow-500",
  },
  {
    name: "Priya Sharma",
    role: "CISO, TechCorp Asia",
    rating: 5,
    text: "The VAPT audit uncovered 23 critical vulnerabilities that our previous vendor had missed entirely. NexusTech's remediation guidance was clear, actionable, and we were fully secured within 6 weeks.",
    avatar: "PS",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "David Liew",
    role: "COO, Elevate Retail Group",
    rating: 5,
    text: "Managing 200+ digital signage screens across our outlets used to be a nightmare. The NexusTech CMS made it effortless — we now update all screens in real-time from a single dashboard.",
    avatar: "DL",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "Sarah Koh",
    role: "Head of HR, Global Recruitment Partners",
    rating: 5,
    text: "The recruitment CRM was built precisely for our workflow — candidate pipelines, commission tracking, and client management all in one place. It's replaced four separate tools we were using.",
    avatar: "SK",
    gradient: "from-sky-500 to-blue-500",
  },
];

const offerFeatures = [
  "Free 2-hour strategy consultation (valued at $800)",
  "Complimentary technology audit report",
  "Custom solution roadmap for your business",
  "No-obligation pricing proposal within 48 hours",
  "Priority onboarding if you decide to proceed",
  "30-day satisfaction guarantee on all projects",
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on complexity. A corporate website takes 4–8 weeks, while a full enterprise platform can take 3–6 months. We provide detailed timelines during the discovery phase.",
  },
  {
    q: "Do you work with startups or only enterprises?",
    a: "Our primary focus is growth-stage businesses and enterprises. However, we do evaluate high-potential startups on a case-by-case basis — especially in PropTech, FinTech, and HealthTech.",
  },
  {
    q: "What does the free consultation include?",
    a: "A 2-hour session with a senior solutions architect who will review your current technology stack, understand your business goals, and recommend a high-level solution approach — with no commitment required.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. All projects include a 30-day hypercare period post-launch, followed by flexible support packages (monthly retainer or incident-based) tailored to your needs.",
  },
  {
    q: "Are your solutions compliant with regional regulations?",
    a: "Absolutely. All our solutions are built with PDPA (Singapore), PDPA (Thailand), and GDPR compliance in mind. Our cybersecurity team ensures regulatory alignment throughout.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function LandingPage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#070d1f] min-h-screen">
      {/* Hero / Special Offer */}
      <section id="offer" className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs mb-6">
                <Gift size={12} />
                Limited Time Offer — Q1 2026
              </div>
              <h1 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: "1.1" }}>
                Start Your Digital Transformation with a{" "}
                <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                  Free Strategy Session
                </span>
              </h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                For a limited time, we're offering qualified businesses a complimentary 2-hour strategy consultation — valued at $800 — with zero obligation. Discover exactly what technology can do for your growth.
              </p>

              <div className="space-y-3 mb-10">
                {offerFeatures.map((f) => (
                  <div key={f} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{f}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { icon: Clock, label: "2-Hour Session", sub: "Deep dive" },
                  { icon: Shield, label: "No Obligation", sub: "Zero pressure" },
                  { icon: Users, label: "Senior Experts", sub: "Not sales reps" },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="text-center p-4 rounded-xl border border-white/10 bg-white/2">
                      <Icon size={20} className="text-blue-400 mx-auto mb-2" />
                      <div className="text-white text-xs font-medium">{item.label}</div>
                      <div className="text-gray-600 text-xs">{item.sub}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Lead Capture Form */}
            <div id="lead" className="relative">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 blur-lg" />
              <div className="relative rounded-2xl border border-white/10 bg-[#0a1628] p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-emerald-400" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">You're Booked!</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Thank you, {form.name}! A senior consultant will reach out within 24 hours to confirm your free strategy session.
                    </p>
                    <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20">
                      <p className="text-blue-300 text-xs">
                        Check your inbox at <strong>{form.email}</strong> for a confirmation email.
                      </p>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center gap-2 mb-2">
                      <Zap size={16} className="text-amber-400" />
                      <span className="text-amber-400 text-sm font-medium">Claim Your Free Session</span>
                    </div>
                    <h2 className="text-white text-xl font-bold mb-1">Book a Consultation</h2>
                    <p className="text-gray-500 text-xs mb-6">Complete in 60 seconds. We'll do the rest.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your full name *"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="Business email address *"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          required
                          placeholder="Company name *"
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                      </div>
                      <div>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-gray-400 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        >
                          <option value="">Interested in... (optional)</option>
                          <option>Corporate Website</option>
                          <option>E-Commerce App</option>
                          <option>Cybersecurity</option>
                          <option>Cloud Infrastructure</option>
                          <option>PropTech Solution</option>
                          <option>Wealth Management Tech</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Briefly describe your challenge or goal..."
                          className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30"
                      >
                        Claim My Free Session
                        <ArrowRight size={17} />
                      </button>
                    </form>
                    <p className="text-gray-600 text-xs text-center mt-4">
                      No spam. No pressure. 100% confidential.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-10 border-y border-white/10 bg-[#050b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center">
            {[
              { value: "200+", label: "Projects Delivered" },
              { value: "50+", label: "Enterprise Clients" },
              { value: "98%", label: "Satisfaction Rate" },
              { value: "12+", label: "Years Experience" },
              { value: "3", label: "Regional Offices" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white text-2xl font-bold">{stat.value}</div>
                <div className="text-gray-600 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs mb-4">
              Client Stories
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Hear from the organizations that have transformed their businesses with NexusTech.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:border-white/20 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white text-sm font-semibold`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-white text-sm font-medium">{t.name}</div>
                      <div className="text-gray-500 text-xs">{t.role}</div>
                    </div>
                  </div>
                  <Quote size={16} className="text-gray-700 shrink-0" />
                </div>
                <StarRating count={t.rating} />
                <p className="text-gray-400 text-sm leading-relaxed mt-3">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#050b18]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-white text-2xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-400 text-sm">Everything you need to know before booking your consultation.</p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/2 transition-colors"
                >
                  <span className="text-white text-sm font-medium">{faq.q}</span>
                  <ChevronDown
                    size={16}
                    className={`text-gray-500 shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-orange-600/10 to-transparent" />
            <div className="relative px-8 py-16">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs mb-6">
                <Clock size={12} />
                Offer Valid Until March 31, 2026
              </div>
              <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
                Don't Leave Free Strategy on the Table
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                This offer won't be available forever. Book your free 2-hour session today and get a clear roadmap for your digital transformation.
              </p>
              <a
                href="#lead"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-medium hover:from-amber-400 hover:to-orange-400 transition-all shadow-lg shadow-amber-500/30"
              >
                Claim Free Session Now
                <ArrowRight size={18} />
              </a>
              <p className="text-gray-600 text-xs mt-4">No credit card. No commitment. 100% free.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
