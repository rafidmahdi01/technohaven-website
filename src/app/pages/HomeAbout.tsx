import { Link } from "react-router";
import { ArrowRight, Shield, Globe, Cpu, BarChart3, Building2, Users, Award, CheckCircle, ChevronRight, Target, Eye, Heart, Lightbulb } from "lucide-react";

const heroImg = "https://images.unsplash.com/photo-1622258418550-46a51f29f084?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkaWdpdGFsJTIwYWdlbmN5JTIwdGVjaG5vbG9neSUyMGhlcm98ZW58MXx8fHwxNzc0NzAxNDE1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const creativeImg = "https://images.unsplash.com/photo-1730206562928-0efd62560435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRpZ2l0YWwlMjBkZXNpZ24lMjBzdHVkaW8lMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzc0NzAxNDI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const cyberImg = "https://images.unsplash.com/photo-1768839721176-2fa91fdce725?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMGRhdGElMjBwcm90ZWN0aW9ufGVufDF8fHx8MTc3NDcwMTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const cloudImg = "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMGluZnJhc3RydWN0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzQ2MzA4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080";
const realEstateImg = "https://images.unsplash.com/photo-1748764720733-3bb4c52ab6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZWFsJTIwZXN0YXRlJTIwdmlydHVhbCUyMHNob3dyb29tfGVufDF8fHx8MTc3NDcwMTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const wealthImg = "https://images.unsplash.com/photo-1762941177632-fe37c485c428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWFsdGglMjBtYW5hZ2VtZW50JTIwZmluYW5jZSUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzc0NzAxNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080";
const teamImg = "https://images.unsplash.com/photo-1683770997177-0603bd44d070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB0ZWFtJTIwcHJvZmVzc2lvbmFscyUyMG9mZmljZXxlbnwxfHx8fDE3NzQ3MDE0MTZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

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
    icon: Users,
    title: "Wealth & Asset Management",
    desc: "Family office dashboards, asset tracking, and investment analytics platforms.",
    color: "from-amber-500 to-orange-500",
    image: wealthImg,
    path: "/services#class2-b",
  },
];

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
    title: "Precision Engineering",
    desc: "Every line of code, every pixel, every interaction is engineered with surgical precision. We don't build—we architect.",
  },
  {
    icon: Eye,
    title: "Uncompromising Excellence",
    desc: "Good is not good enough. We iterate, optimize, and perfect until the work is indistinguishable from art.",
  },
  {
    icon: Heart,
    title: "Client-Centric Partnership",
    desc: "Your success is our success. We embed ourselves in your business, becoming an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation at Scale",
    desc: "Cutting-edge technology meets practical business sense. We solve tomorrow's problems today.",
  },
];

const FONT = "Inter,-apple-system,BlinkMacSystemFont,sans-serif";
const SIDE_PAD = "clamp(2.5rem, 8vw, 10rem)";

const labelStyle = (color = "rgba(100,170,255,0.65)"): React.CSSProperties => ({
  fontSize: "9px",
  letterSpacing: "0.46em",
  color,
  fontFamily: FONT,
  fontWeight: 300,
  textTransform: "uppercase",
});

const bodyText: React.CSSProperties = {
  fontSize: "12.5px",
  lineHeight: 1.95,
  color: "rgba(240,242,248,0.62)",
  fontFamily: FONT,
  fontWeight: 300,
};

export default function HomeAbout() {
  return (
    <div style={{ background: "#000", color: "rgba(240,242,248,0.9)", fontFamily: FONT }}>
      {/* ─── HERO SECTION ─── */}
      <section style={{ padding: `8rem ${SIDE_PAD} 4rem`, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative" }}>
        <div>
          <h1 style={{ fontSize: "clamp(3rem, 12vw, 6.5rem)", lineHeight: 1.05, fontWeight: 200, marginBottom: "2rem", color: "#fff" }}>
            TECHNOHAVEN MALAYSIA
          </h1>
          <p style={{ ...bodyText, fontSize: "clamp(12.5px, 2vw, 14px)", maxWidth: "600px", marginBottom: "3rem" }}>
            Enterprise technology solutions engineered for Malaysia's most ambitious enterprises. From digital transformation to cybersecurity, infrastructure, and innovation—we engineer success at scale.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <Link to="/services" style={{ padding: "0.9rem 2rem", background: "rgba(100,170,255,0.15)", border: "1px solid rgba(100,170,255,0.3)", borderRadius: "6px", color: "rgba(100,170,255,0.9)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", transition: "all 0.3s", fontSize: "12px", fontWeight: 500 }}>
              Explore Services <ArrowRight size={14} />
            </Link>
            <Link to="/contact" style={{ padding: "0.9rem 2rem", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "6px", color: "rgba(240,242,248,0.7)", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.6rem", transition: "all 0.3s", fontSize: "12px", fontWeight: 500 }}>
              Start a Project
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: "2rem", marginTop: "4rem" }}>
          {stats.map((s, i) => (
            <div key={i}>
              <div style={{ ...labelStyle("rgba(100,170,255,0.65)"), marginBottom: "0.5rem" }}>{s.label}</div>
              <div style={{ fontSize: "2rem", fontWeight: 600, color: "#fff" }}>{s.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── SERVICE HIGHLIGHTS ─── */}
      <section style={{ padding: `6rem ${SIDE_PAD}`, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ ...labelStyle(), marginBottom: "2rem" }}>Our Capabilities</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, fontWeight: 200, marginBottom: "4rem", color: "#fff" }}>
          Enterprise Solutions Engineered for Malaysia
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
          {serviceHighlights.map((s, i) => {
            const Icon = s.icon;
            return (
              <Link key={i} to={s.path} style={{ textDecoration: "none", display: "flex", flexDirection: "column", padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", transition: "all 0.3s", color: "inherit" }}>
                <div style={{ width: "48px", height: "48px", background: `linear-gradient(135deg, var(--c1), var(--c2))`, borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem", "--c1": s.color.split(" ")[0], "--c2": s.color.split(" ")[1] } as any}>
                  <Icon size={24} style={{ color: "#fff" }} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.8rem", color: "#fff" }}>{s.title}</h3>
                <p style={{ ...bodyText, flex: 1 }}>{s.desc}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1rem", color: "rgba(100,170,255,0.7)", fontSize: "12px", fontWeight: 500 }}>
                  Learn More <ChevronRight size={14} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section style={{ padding: `6rem ${SIDE_PAD}`, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ ...labelStyle(), marginBottom: "2rem" }}>About Technohaven Malaysia</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, fontWeight: 200, marginBottom: "1.5rem", color: "#fff" }}>
          Enterprise Technology. Malaysian Excellence.
        </h2>
        <p style={{ ...bodyText, maxWidth: "700px", marginBottom: "3rem", fontSize: "13px" }}>
          Technohaven Malaysia is a collective of architects, strategists, and engineers obsessed with translating enterprise complexity into elegant, scalable digital solutions. Serving Malaysia's most ambitious enterprises, we architect systems for digital transformation, cybersecurity, infrastructure, and innovation that don't just meet requirements—they redefine what's possible.
        </p>

        {/* Values Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", marginBottom: "4rem" }}>
          {values.map((v, i) => {
            const Icon = v.icon;
            return (
              <div key={i} style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px" }}>
                <Icon size={28} style={{ color: "rgba(100,170,255,0.7)", marginBottom: "1rem" }} />
                <h3 style={{ fontSize: "1.1rem", fontWeight: 500, marginBottom: "0.8rem", color: "#fff" }}>{v.title}</h3>
                <p style={{ ...bodyText, fontSize: "12px" }}>{v.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── TEAM SECTION ─── */}
      <section style={{ padding: `6rem ${SIDE_PAD}`, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        <div style={{ ...labelStyle(), marginBottom: "2rem" }}>Our Team</div>
        <h2 style={{ fontSize: "clamp(2.5rem, 8vw, 4rem)", lineHeight: 1.1, fontWeight: 200, marginBottom: "4rem", color: "#fff" }}>
          Leadership & Expertise
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
          {team.map((member, i) => (
            <div key={i} style={{ padding: "2rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", textAlign: "center" }}>
              <div style={{ width: "80px", height: "80px", background: `linear-gradient(135deg, var(--c1), var(--c2))`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "1.4rem", fontWeight: 600, color: "#fff", "--c1": member.gradient.split(" ")[0], "--c2": member.gradient.split(" ")[1] } as any}>
                {member.avatar}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.4rem", color: "#fff" }}>{member.name}</h3>
              <p style={{ fontSize: "11px", color: "rgba(100,170,255,0.7)", textTransform: "uppercase", letterSpacing: "0.3em", marginBottom: "1rem" }}>{member.role}</p>
              <p style={{ ...bodyText, fontSize: "12px" }}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA SECTION ─── */}
      <section style={{ padding: `4rem ${SIDE_PAD}`, borderTop: "1px solid rgba(255,255,255,0.05)", textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "clamp(1.8rem, 5vw, 3rem)", lineHeight: 1.2, fontWeight: 200, marginBottom: "1.5rem", color: "#fff" }}>
          Ready to Build Something Extraordinary?
        </h2>
        <p style={{ ...bodyText, maxWidth: "500px", margin: "0 auto 2rem" }}>
          Let's discuss how Techohaven can architect your next digital transformation.
        </p>
        <Link to="/contact" style={{ padding: "1rem 2.5rem", background: "rgba(100,170,255,0.15)", border: "1px solid rgba(100,170,255,0.3)", borderRadius: "6px", color: "rgba(100,170,255,0.9)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.8rem", transition: "all 0.3s", fontSize: "13px", fontWeight: 500 }}>
          Start Your Project <ArrowRight size={16} />
        </Link>
      </section>
    </div>
  );
}
