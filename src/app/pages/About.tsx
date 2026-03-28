import { Link } from "react-router";
import { ArrowRight, Target, Eye, Heart, Award, Users, Lightbulb } from "lucide-react";

const teamImg = "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwcHJvZmVzc2lvbmFscyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ3MDE0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const team = [
  {
    name: "Marcus Chen",
    role: "Chief Executive Officer",
    bio: "20+ years in enterprise technology. Former CTO at Fortune 500 firms.",
    avatar: "MC",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Sophia Lim",
    role: "Chief Technology Officer",
    bio: "Cybersecurity expert. Led digital transformation for 30+ organizations.",
    avatar: "SL",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Daniel Park",
    role: "Head of Creative",
    bio: "Award-winning UX designer with a passion for luxury digital experiences.",
    avatar: "DP",
    gradient: "from-rose-500 to-pink-500",
  },
  {
    name: "Aisha Rahman",
    role: "VP of Product Solutions",
    bio: "PropTech and fintech specialist with 15 years of product leadership.",
    avatar: "AR",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "James Wu",
    role: "Head of Infrastructure",
    bio: "Cloud architect specializing in enterprise-grade migrations and VDI.",
    avatar: "JW",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Elena Torres",
    role: "Director of Client Success",
    bio: "Ensures every client achieves measurable ROI from their investment.",
    avatar: "ET",
    gradient: "from-sky-500 to-blue-500",
  },
];

const values = [
  {
    icon: Target,
    title: "Precision",
    desc: "We obsess over the details that make the difference between good and exceptional.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Eye,
    title: "Transparency",
    desc: "Open communication at every step — no surprises, no hidden costs.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Heart,
    title: "Partnership",
    desc: "We treat your business goals as our own. Your success is our success.",
    color: "from-rose-500 to-pink-500",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Constantly pushing boundaries to deliver solutions that lead the market.",
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Award,
    title: "Excellence",
    desc: "Gold-standard delivery across every project, every time.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Users,
    title: "People-First",
    desc: "Technology serves people. We never lose sight of the human element.",
    color: "from-sky-500 to-blue-500",
  },
];

const milestones = [
  { year: "2013", event: "Founded as a boutique digital design studio in Singapore." },
  { year: "2015", event: "Expanded into enterprise software development and systems integration." },
  { year: "2017", event: "Launched cybersecurity practice — VAPT audits and compliance advisory." },
  { year: "2019", event: "Introduced Product-Based Solutions for PropTech and FinTech sectors." },
  { year: "2021", event: "Grew to 100+ professionals across Singapore, Malaysia, and Thailand." },
  { year: "2023", event: "Achieved ISO 27001 certification and expanded to Class 2 solutions suite." },
  { year: "2026", event: "Serving 50+ enterprise clients across 12+ industries regionally." },
];

export default function About() {
  return (
    <div className="bg-[#070d1f] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img src={teamImg} alt="Team" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#070d1f]/60 via-[#070d1f]/80 to-[#070d1f]" />
        </div>
        <div className="absolute top-1/2 right-10 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6">
              About NexusTech
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: "1.1" }}>
              The Technology Partner Built for Enterprise Ambition
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Since 2013, NexusTech has been the silent engine behind some of Southeast Asia's most transformative digital ventures — from luxury real estate platforms to enterprise cybersecurity deployments.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section id="story" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-4">
                Our Story
              </div>
              <h2 className="text-white mb-6" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
                From Studio to Enterprise Technology Leader
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  NexusTech was born in 2013 out of a simple belief: that enterprises in Southeast Asia deserved technology partners who could think strategically, execute flawlessly, and scale without compromise.
                </p>
                <p>
                  What started as a team of four designers and developers in a Tanjong Pagar shophouse has grown into a 100+ strong organization spanning Singapore, Malaysia, and Thailand — serving everyone from boutique private equity firms to regional conglomerates.
                </p>
                <p>
                  Today, we operate across two strategic pillars: project-based agency services for bespoke digital creation, and product-based solution suites for industries that need speed without sacrificing depth.
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {milestones.map((m, i) => (
                <div key={m.year} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-violet-600 flex items-center justify-center text-white text-xs font-semibold shrink-0">
                      {i + 1}
                    </div>
                    {i < milestones.length - 1 && (
                      <div className="w-px h-full bg-white/10 mt-2 min-h-[1.5rem]" />
                    )}
                  </div>
                  <div className="pb-4">
                    <span className="text-blue-400 text-xs font-medium">{m.year}</span>
                    <p className="text-gray-300 text-sm mt-0.5">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="py-24 bg-[#050b18]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs mb-4">
              Our Mission
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              Guiding Principles
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Three pillars define how we approach every client engagement, product build, and strategic decision.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: "🎯",
                title: "Mission",
                text: "To empower organizations with purpose-built technology that drives measurable growth, competitive advantage, and long-term resilience.",
              },
              {
                icon: "🔭",
                title: "Vision",
                text: "To become Southeast Asia's most trusted technology partner — where innovation meets accountability, and ambition meets execution.",
              },
              {
                icon: "💡",
                title: "Purpose",
                text: "We exist to close the gap between what businesses dream of achieving and what technology can actually deliver — today, not someday.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/2 p-8 text-center hover:border-white/20 transition-colors"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-white text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="text-center mb-12">
            <h3 className="text-white text-xl font-semibold">Core Values</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="flex gap-4 p-5 rounded-xl border border-white/10 bg-white/2 hover:border-white/20 transition-colors">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${v.color} flex items-center justify-center shrink-0`}>
                    <Icon size={18} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1">{v.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs mb-4">
              The Team
            </div>
            <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
              Leadership That Delivers
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Our leadership team brings decades of combined experience across technology, design, security, and business strategy.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:border-white/20 transition-colors group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white font-semibold text-lg mb-4`}>
                  {member.avatar}
                </div>
                <h3 className="text-white font-semibold mb-0.5">{member.name}</h3>
                <p className="text-blue-400 text-xs mb-3">{member.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/landing#lead"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
            >
              Work With Us
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
