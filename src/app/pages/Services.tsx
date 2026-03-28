import { Link } from "react-router";
import {
  Globe, Cpu, Shield, Server, Home, TrendingUp, Star, Briefcase, ShoppingBag,
  Monitor, Smartphone, Calendar, BarChart, Link2, Brain, Search, Lock, Cloud,
  Network, Box, Users, FileText, Heart, Package, Megaphone, UserCheck, ArrowRight, CheckCircle,
} from "lucide-react";

const class1 = [
  {
    id: "class1-a",
    category: "A. Creative & Digital Experience",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    services: [
      {
        num: "01",
        icon: Monitor,
        title: 'High-End Corporate "Identity" Websites',
        desc: "Custom-crafted digital identities for enterprises that demand premium aesthetics and performance. Full brand expression through sophisticated web design.",
        features: ["Custom UI/UX design", "CMS integration", "SEO optimization", "Performance tuning"],
      },
      {
        num: "02",
        icon: Smartphone,
        title: "E-Commerce Mobile App Development",
        desc: "Native and cross-platform e-commerce applications built for conversion — from luxury retail to B2B procurement platforms.",
        features: ["iOS & Android native", "Payment gateway integration", "Inventory management", "Analytics dashboard"],
      },
      {
        num: "03",
        icon: Calendar,
        title: "Luxury Event Microsites & Digital RSVP",
        desc: "Bespoke digital experiences for high-profile events — invitation management, RSVP portals, and immersive event branding.",
        features: ["Custom invitation system", "Guest list management", "Live event integration", "Post-event recap pages"],
      },
    ],
  },
  {
    id: "class1-b",
    category: "B. Operational Software & Automation",
    icon: Cpu,
    color: "from-violet-500 to-purple-500",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    services: [
      {
        num: "04",
        icon: BarChart,
        title: "Custom Operations Dashboard (ERP Lite)",
        desc: "Tailored operational command centers that consolidate your business data, workflows, and KPIs into a single intelligent interface.",
        features: ["Multi-department modules", "Real-time reporting", "Role-based access", "API integration"],
      },
      {
        num: "05",
        icon: Link2,
        title: "Custom API Bridge (System Integrator)",
        desc: "Seamlessly connect disparate enterprise systems — from legacy ERPs to modern SaaS tools — through custom-built API middleware.",
        features: ["REST & GraphQL APIs", "Legacy system connectors", "Data transformation", "Error monitoring"],
      },
      {
        num: "06",
        icon: Brain,
        title: '"Bass" Business Intelligence (BI) Dashboard',
        desc: "Advanced analytics platforms that transform raw business data into actionable intelligence — with predictive insights and drill-down reporting.",
        features: ["Data visualization", "Predictive analytics", "Custom KPI tracking", "Scheduled reports"],
      },
    ],
  },
  {
    id: "class1-c",
    category: "C. Cybersecurity & Compliance",
    icon: Shield,
    color: "from-red-500 to-orange-500",
    tagColor: "bg-red-500/10 text-red-400 border-red-500/20",
    services: [
      {
        num: "07",
        icon: Search,
        title: "VAPT Audit (Vulnerability Assessment & Penetration Testing)",
        desc: "Comprehensive security assessments that identify and remediate vulnerabilities before adversaries can exploit them.",
        features: ["Network penetration testing", "Web app security audit", "Social engineering tests", "Detailed remediation report"],
      },
      {
        num: "08",
        icon: Lock,
        title: "Ransomware Defense & Disaster Recovery",
        desc: "End-to-end ransomware protection strategies combined with bulletproof disaster recovery planning and implementation.",
        features: ["Endpoint protection", "Backup architecture", "IR playbooks", "Recovery time objectives"],
      },
      {
        num: "09",
        icon: FileText,
        title: "PDPA Tech Compliance Audit",
        desc: "Full Personal Data Protection Act compliance assessment and implementation — protecting your business from regulatory risk.",
        features: ["Data flow mapping", "Policy drafting", "Staff training", "Ongoing compliance monitoring"],
      },
    ],
  },
  {
    id: "class1-d",
    category: "D. High-End Infrastructure",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    services: [
      {
        num: "10",
        icon: Cloud,
        title: 'Legacy-to-Cloud "Lift & Shift" Migration',
        desc: "Seamless migration of legacy infrastructure to modern cloud environments — minimizing downtime and maximizing performance.",
        features: ["Cloud readiness assessment", "Zero-downtime migration", "Cost optimization", "Post-migration support"],
      },
      {
        num: "11",
        icon: Monitor,
        title: "Secure Remote Work (VDI) Setup",
        desc: "Virtual Desktop Infrastructure deployments that enable secure, high-performance remote working across distributed teams.",
        features: ["VDI architecture design", "Security hardening", "MFA integration", "24/7 monitoring"],
      },
      {
        num: "12",
        icon: Network,
        title: "Commercial Network Architecture",
        desc: "Enterprise-grade network design and implementation for offices, data centers, and multi-site organizations.",
        features: ["Network design", "SD-WAN deployment", "Firewall configuration", "Network monitoring"],
      },
    ],
  },
];

const class2 = [
  {
    id: "class2-a",
    category: "A. Real Estate & PropTech",
    icon: Home,
    color: "from-sky-500 to-blue-500",
    tagColor: "bg-sky-500/10 text-sky-400 border-sky-500/20",
    services: [
      {
        num: "13",
        icon: Box,
        title: 'Virtual Showroom & "Digital Twins"',
        desc: "Immersive virtual property experiences — 3D digital twins, interactive floor plans, and VR-ready showroom platforms for developers.",
        features: ["3D digital twin creation", "VR/AR integration", "Interactive floor plans", "Lead capture integration"],
      },
      {
        num: "14",
        icon: Globe,
        title: "Interactive Sales Gallery Tech",
        desc: "Digital sales gallery solutions that transform property show suites into data-driven, interactive selling environments.",
        features: ["Touch-screen interfaces", "CRM integration", "Real-time availability", "Analytics dashboard"],
      },
    ],
  },
  {
    id: "class2-b",
    category: "B. Wealth & Asset Management",
    icon: TrendingUp,
    color: "from-amber-500 to-yellow-500",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    services: [
      {
        num: "15",
        icon: Briefcase,
        title: 'Family Office "Command Center"',
        desc: "Unified wealth management platform for family offices — consolidating portfolios, reporting, and communications in one secure hub.",
        features: ["Portfolio consolidation", "Multi-asset class tracking", "Secure document vault", "Reporting & analytics"],
      },
      {
        num: "16",
        icon: Star,
        title: "Art & Collectible Asset Management System",
        desc: "Specialized platform for managing, valuing, and transacting high-value art and collectible portfolios.",
        features: ["Asset cataloguing", "Valuation tracking", "Provenance records", "Insurance management"],
      },
    ],
  },
  {
    id: "class2-c",
    category: "C. Lifestyle & Membership",
    icon: Star,
    color: "from-rose-500 to-pink-500",
    tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    services: [
      {
        num: "17",
        icon: Users,
        title: "Private Club Membership App (White Label)",
        desc: "Fully brandable membership platform for private clubs, co-working spaces, and exclusive communities — digital membership cards, events, and benefits.",
        features: ["White-label branding", "Digital membership cards", "Event booking", "Member communications"],
      },
      {
        num: "18",
        icon: Heart,
        title: '"Concierge" Patient Recovery App',
        desc: "Premium patient journey management platform for private hospitals and healthcare providers — from discharge to full recovery.",
        features: ["Recovery tracking", "Medication reminders", "Telehealth integration", "Care team messaging"],
      },
    ],
  },
  {
    id: "class2-d",
    category: "D. Corporate & Professional",
    icon: Briefcase,
    color: "from-violet-500 to-indigo-500",
    tagColor: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    services: [
      {
        num: "19",
        icon: Lock,
        title: 'Virtual "Deal Room" (VDR) Software',
        desc: "Secure, enterprise-grade virtual data rooms for M&A transactions, fundraising, and confidential document sharing.",
        features: ["Bank-grade encryption", "Granular access controls", "Audit trails", "Watermarking"],
      },
      {
        num: "20",
        icon: FileText,
        title: "Student Portfolio & Talent Platform",
        desc: "Digital portfolio and talent discovery platform connecting universities, students, and employers in a seamless ecosystem.",
        features: ["Portfolio builder", "Talent discovery engine", "Skills assessment", "Employer dashboard"],
      },
    ],
  },
  {
    id: "class2-e",
    category: "E. Retail & Operations",
    icon: ShoppingBag,
    color: "from-emerald-500 to-green-500",
    tagColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    services: [
      {
        num: "21",
        icon: Megaphone,
        title: "Digital Signage Content Management System (CMS)",
        desc: "Centralized platform for managing digital signage networks across retail stores, offices, hotels, and public venues.",
        features: ["Multi-screen management", "Content scheduling", "Analytics", "Remote monitoring"],
      },
      {
        num: "22",
        icon: UserCheck,
        title: "Recruitment Agency Management System (Internal CRM)",
        desc: "Purpose-built CRM for recruitment agencies — managing candidates, clients, placements, and commissions in one platform.",
        features: ["Candidate pipeline", "Client management", "Placement tracking", "Commission calculations"],
      },
    ],
  },
];

function ServiceCard({ service, accent }: { service: any; accent: string }) {
  const Icon = service.icon;
  return (
    <div className="rounded-2xl border border-white/10 bg-white/2 p-6 hover:border-white/20 transition-all group">
      <div className="flex items-start gap-4 mb-4">
        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center shrink-0`}>
          <Icon size={17} className="text-white" />
        </div>
        <div>
          <span className="text-gray-600 text-xs">{service.num}</span>
          <h4 className="text-white text-sm font-semibold leading-snug">{service.title}</h4>
        </div>
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4">{service.desc}</p>
      <div className="space-y-1.5">
        {service.features.map((f: string) => (
          <div key={f} className="flex items-center gap-2">
            <CheckCircle size={11} className="text-blue-400 shrink-0" />
            <span className="text-gray-500 text-xs">{f}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="bg-[#070d1f] min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-64 h-64 bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs mb-6">
              22 Specialized Solutions
            </div>
            <h1 className="text-white mb-6" style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: "1.1" }}>
              Services Built for Enterprise Scale
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Two distinct service tracks — project-based agency engagements and product-based solution suites — covering every dimension of your digital transformation.
            </p>
          </div>

          {/* Class tabs overview */}
          <div className="grid md:grid-cols-2 gap-4 mt-12 max-w-2xl mx-auto">
            <a href="#class1" className="flex items-center gap-3 p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white text-xs font-bold">1</div>
              <div>
                <div className="text-white text-sm font-medium">Project-Based Services</div>
                <div className="text-gray-500 text-xs">Agency Model — 12 services</div>
              </div>
            </a>
            <a href="#class2" className="flex items-center gap-3 p-4 rounded-xl border border-violet-500/20 bg-violet-500/5 hover:bg-violet-500/10 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center text-white text-xs font-bold">2</div>
              <div>
                <div className="text-white text-sm font-medium">Product-Based Solutions</div>
                <div className="text-gray-500 text-xs">Solution Model — 10 services</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Class 1 */}
      <section id="class1" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-white font-bold text-lg">1</div>
            <div>
              <h2 className="text-white text-2xl font-bold">Class 1: Project-Based Services</h2>
              <p className="text-gray-500 text-sm">Agency Model — Bespoke engagements with dedicated teams</p>
            </div>
          </div>

          <div className="space-y-20">
            {class1.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.id} id={category.id}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <CatIcon size={16} className="text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {category.services.map((service) => (
                      <ServiceCard key={service.num} service={service} accent={category.color} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* Class 2 */}
      <section id="class2" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center text-white font-bold text-lg">2</div>
            <div>
              <h2 className="text-white text-2xl font-bold">Class 2: Product-Based Solutions</h2>
              <p className="text-gray-500 text-sm">Solution Model — Ready-to-deploy platforms for specific industries</p>
            </div>
          </div>

          <div className="space-y-20">
            {class2.map((category) => {
              const CatIcon = category.icon;
              return (
                <div key={category.id} id={category.id}>
                  <div className="flex items-center gap-3 mb-8">
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                      <CatIcon size={16} className="text-white" />
                    </div>
                    <h3 className="text-white text-lg font-semibold">{category.category}</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    {category.services.map((service) => (
                      <ServiceCard key={service.num} service={service} accent={category.color} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#050b18]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.5rem)", fontWeight: 700 }}>
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-gray-400 mb-8">
            Our experts will assess your needs and recommend the perfect solution stack — with no commitment required.
          </p>
          <Link
            to="/landing#lead"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
          >
            Request Free Assessment
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
