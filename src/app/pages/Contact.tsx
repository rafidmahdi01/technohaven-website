import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, HeadphonesIcon } from "lucide-react";

const locations = [
  {
    city: "Singapore (HQ)",
    address: "123 Tech Avenue, #08-01 Innovation Tower, Tanjong Pagar, Singapore 018960",
    phone: "+65 6123 4567",
    email: "sg@nexustech.sg",
    hours: "Mon–Fri, 9:00 AM – 6:00 PM SGT",
    flag: "🇸🇬",
  },
  {
    city: "Kuala Lumpur",
    address: "Level 28, Menara Etiqa, 3 Jalan Pinang, Kuala Lumpur 50450, Malaysia",
    phone: "+60 3 8888 9999",
    email: "kl@nexustech.sg",
    hours: "Mon–Fri, 9:00 AM – 6:00 PM MYT",
    flag: "🇲🇾",
  },
  {
    city: "Bangkok",
    address: "31F, One Bangkok Tower, Wireless Road, Pathumwan, Bangkok 10330, Thailand",
    phone: "+66 2 123 4567",
    email: "bkk@nexustech.sg",
    hours: "Mon–Fri, 9:00 AM – 6:00 PM ICT",
    flag: "🇹🇭",
  },
];

const supportTypes = [
  {
    icon: MessageSquare,
    title: "General Inquiry",
    desc: "Questions about our services, pricing, or company.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: HeadphonesIcon,
    title: "Technical Support",
    desc: "Existing client needing technical assistance.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Send,
    title: "New Project",
    desc: "Ready to kick off a new engagement with us.",
    color: "from-emerald-500 to-teal-500",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    type: "General Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="bg-[#070d1f] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6">
              Get In Touch
            </div>
            <h1 className="text-white mb-4" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: "1.1" }}>
              Let's Start a Conversation
            </h1>
            <p className="text-gray-400 leading-relaxed">
              Whether you're exploring options or ready to start — our team is here to help. Reach us at any of our regional offices or through our support form.
            </p>
          </div>
        </div>
      </section>

      {/* Support Types */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-5 mb-20">
            {supportTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/2 hover:border-white/20 transition-colors">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${type.color} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{type.title}</h4>
                    <p className="text-gray-500 text-xs">{type.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Form + Info */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Support Form */}
            <div id="support" className="lg:col-span-3">
              <h2 className="text-white text-xl font-semibold mb-2">Send Us a Message</h2>
              <p className="text-gray-500 text-sm mb-8">We respond within 1 business day.</p>

              {submitted ? (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-10 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={28} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 text-sm">Thank you for reaching out. One of our team members will be in touch within 1 business day.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", type: "General Inquiry", message: "" }); }}
                    className="mt-6 px-6 py-2.5 rounded-lg border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs mb-2">Full Name *</label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-2">Email Address *</label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-400 text-xs mb-2">Company</label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-xs mb-2">Phone</label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+65 9xxx xxxx"
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-2">Inquiry Type</label>
                    <select
                      name="type"
                      value={form.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#0f172a] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                    >
                      <option>General Inquiry</option>
                      <option>Technical Support</option>
                      <option>New Project</option>
                      <option>Pricing & Proposal</option>
                      <option>Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-400 text-xs mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your project or question..."
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 text-sm focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div id="email" className="lg:col-span-2 space-y-6">
              <div>
                <h3 className="text-white text-base font-semibold mb-1">Direct Email</h3>
                <p className="text-gray-500 text-sm mb-4">For specific departments:</p>
                <div className="space-y-3">
                  {[
                    { label: "General", email: "hello@nexustech.sg" },
                    { label: "Sales", email: "sales@nexustech.sg" },
                    { label: "Support", email: "support@nexustech.sg" },
                    { label: "Security", email: "security@nexustech.sg" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/2">
                      <span className="text-gray-500 text-xs">{item.label}</span>
                      <a href={`mailto:${item.email}`} className="text-blue-400 text-xs hover:text-blue-300 transition-colors">
                        {item.email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/2 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-blue-400" />
                  <span className="text-white text-sm font-medium">Response Times</span>
                </div>
                <div className="space-y-2">
                  {[
                    { label: "General inquiries", time: "Within 1 business day" },
                    { label: "Support tickets", time: "Within 4 hours" },
                    { label: "Critical incidents", time: "Within 1 hour" },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between">
                      <span className="text-gray-500 text-xs">{item.label}</span>
                      <span className="text-gray-300 text-xs">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="locations" className="py-20 bg-[#050b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-4">
              Our Offices
            </div>
            <h2 className="text-white text-2xl font-bold">Regional Locations</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc) => (
              <div key={loc.city} className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:border-white/20 transition-colors">
                <div className="text-3xl mb-4">{loc.flag}</div>
                <h3 className="text-white font-semibold mb-4">{loc.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-gray-500 text-xs leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone size={13} className="text-blue-400 shrink-0" />
                    <a href={`tel:${loc.phone}`} className="text-gray-400 text-xs hover:text-white transition-colors">{loc.phone}</a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail size={13} className="text-blue-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="text-gray-400 text-xs hover:text-white transition-colors">{loc.email}</a>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Clock size={13} className="text-blue-400 mt-0.5 shrink-0" />
                    <span className="text-gray-500 text-xs">{loc.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
