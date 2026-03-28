import { Link } from "react-router";
import { ArrowRight, Shield, Globe, Cpu, BarChart3, Building2, Users, Award, CheckCircle, ChevronRight } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYWdlbmN5JTIwdGVjaG5vbG9neSUyMGhlcm98ZW58MXx8fHwxNzc0NzAxNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const creativeImg = "https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0NzAxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const cyberImg = "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3NDcwMTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const cloudImg = "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ2MzA4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const realEstateImg = "https://images.unsplash.com/photo-1748764720733-3bb4c52ab6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwdmlydHVhbCUyMHNob3dyb29tfGVufDF8fHx8MTc3NDcwMTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const wealthImg = "https://images.unsplash.com/photo-1762941177632-fe37c485c428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50JTIwZmluYW5jZSUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzc0NzAxNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "200+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Enterprise Clients" },
  { value: "12+", label: "Years of Excellence" },
];

const serviceHighlights = [
  {
    icon: Globe,
    title: "Creative & Digital Experience",
    desc: "High-end identity websites, e-commerce apps, and luxury event microsites.",
    color: "from-blue-500 to-cyan-500",
    image: creativeImg,
    path: "/services#class1-a",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Compliance",
    desc: "VAPT audits, ransomware defense, and PDPA compliance solutions.",
    color: "from-red-500 to-orange-500",
    image: cyberImg,
    path: "/services#class1-c",
  },
  {
    icon: Cpu,
    title: "High-End Infrastructure",
    desc: "Legacy-to-cloud migration, VDI setup, and commercial network architecture.",
    color: "from-violet-500 to-purple-500",
    image: cloudImg,
    path: "/services#class1-d",
  },
  {
    icon: Building2,
    title: "Real Estate & PropTech",
    desc: "Virtual showrooms, digital twins, and interactive sales gallery technology.",
    color: "from-emerald-500 to-teal-500",
    image: realEstateImg,
    path: "/services#class2-a",
  },
  {
    icon: BarChart3,
    title: "Wealth & Asset Management",
    desc: "Family office command centers and art collectible management systems.",
    color: "from-amber-500 to-yellow-500",
    image: wealthImg,
    path: "/services#class2-b",
  },
];

const whyUs = [
  "Enterprise-grade security & compliance built in",
  "Dedicated project managers for every engagement",
  "Agile delivery with transparent milestones",
  "Post-launch support & maintenance included",
  "Proven track record across 12+ industries",
  "Custom solutions — no off-the-shelf compromises",
];

export default function Home() {
  return (
    <div className="bg-[#070d1f] min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Hero" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070d1f] via-[#070d1f]/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070d1f] via-transparent to-transparent" />
        </div>

        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-violet-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Enterprise Technology Solutions
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: "1.1", fontWeight: 700 }}>
              Powering the Future of{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Digital Business
              </span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl">
              From high-end identity websites to enterprise cybersecurity — we deliver bespoke technology solutions that transform ambitious organizations into digital-first leaders.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/30"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/landing#lead"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-[#070d1f]/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="px-8 py-6 text-center">
                  <div className="text-white text-2xl font-bold">{stat.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs mb-4">
              What We Do
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700 }}>
              Two Pillars of Excellence
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our dual-track service model combines agency-style project delivery with scalable product solutions — tailored to your unique growth stage.
            </p>
          </div>

          {/* Two Class Overview */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="relative rounded-2xl overflow-hidden group border border-blue-500/20 hover:border-blue-500/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent" />
              <div className="relative p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs mb-4">Class 1</div>
                <h3 className="text-white text-xl font-semibold mb-3">Project-Based Services</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Agency-model engagements with dedicated teams, custom scoping, and tailored delivery timelines for complex enterprise needs.</p>
                <div className="space-y-2">
                  {["Creative & Digital Experience", "Operational Software & Automation", "Cybersecurity & Compliance", "High-End Infrastructure"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={13} className="text-blue-400 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Link to="/services" className="inline-flex items-center gap-1 text-blue-400 text-sm mt-6 hover:gap-2 transition-all group">
                  View All Services <ChevronRight size={14} />
                </Link>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden group border border-violet-500/20 hover:border-violet-500/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 to-transparent" />
              <div className="relative p-8">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/20 text-violet-300 text-xs mb-4">Class 2</div>
                <h3 className="text-white text-xl font-semibold mb-3">Product-Based Solutions</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">Ready-to-deploy, white-label platforms and industry-specific solutions that accelerate your time-to-market.</p>
                <div className="space-y-2">
                  {["Real Estate & PropTech", "Wealth & Asset Management", "Lifestyle & Membership", "Corporate & Professional", "Retail & Operations"].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-gray-300 text-sm">
                      <CheckCircle size={13} className="text-violet-400 shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
                <Link to="/services" className="inline-flex items-center gap-1 text-violet-400 text-sm mt-6 hover:gap-2 transition-all">
                  View All Solutions <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Service Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceHighlights.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  to={service.path}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all"
                >
                  <div className="h-44 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 h-44 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <Icon size={17} className="text-white" />
                    </div>
                    <h3 className="text-white text-base font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                    <div className="flex items-center gap-1 text-blue-400 text-xs mt-4 group-hover:gap-2 transition-all">
                      Learn more <ChevronRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
            {/* View All Card */}
            <Link
              to="/services"
              className="group flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/20 hover:border-white/40 p-8 text-center transition-colors min-h-[280px]"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-4 group-hover:border-white/40 transition-colors">
                <ArrowRight size={20} className="text-gray-400 group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-400 group-hover:text-white text-sm font-medium transition-colors">View All Services</p>
              <p className="text-gray-600 text-xs mt-1">22 specialized solutions</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-[#050b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-4">
                Why NexusTech
              </div>
              <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700 }}>
                Built for Businesses That Refuse to Compromise
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We don't believe in one-size-fits-all. Every solution we build starts with understanding your business deeply — your goals, constraints, and the competitive landscape you operate in.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {whyUs.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle size={15} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4 mt-10">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white text-sm hover:bg-white/10 transition-colors"
                >
                  <Users size={15} />
                  Meet Our Team
                </Link>
                <Link
                  to="/landing#lead"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm hover:from-blue-500 hover:to-violet-500 transition-all"
                >
                  <Award size={15} />
                  Start Your Project
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img src={creativeImg} alt="Creative" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-2xl bg-gradient-to-br from-blue-600/30 to-violet-600/30 border border-white/10 p-6 text-center">
                    <div className="text-white text-3xl font-bold mb-1">98%</div>
                    <div className="text-gray-400 text-xs">Client Retention Rate</div>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="rounded-2xl bg-gradient-to-br from-emerald-600/30 to-teal-600/30 border border-white/10 p-6 text-center">
                    <div className="text-white text-3xl font-bold mb-1">22</div>
                    <div className="text-gray-400 text-xs">Specialized Solutions</div>
                  </div>
                  <div className="rounded-2xl overflow-hidden h-48">
                    <img src={wealthImg} alt="Wealth" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative rounded-3xl overflow-hidden border border-white/10">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-violet-600/20" />
            <div className="relative px-8 py-16">
              <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", fontWeight: 700 }}>
                Ready to Transform Your Business?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Join 50+ enterprise clients who trust NexusTech to deliver world-class digital solutions. Let's build something extraordinary together.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/landing#lead"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/30"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/20 text-white hover:bg-white/5 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
