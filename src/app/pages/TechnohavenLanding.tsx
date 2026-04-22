import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, X, Menu, Send } from "lucide-react";
import logoImg from "../../assets/technohaven_logo.jpg";
import logo3D from "../../assets/technohaven_logo.jpg";
import preloaderImg from "../../assets/technohaven_logo01.jpg";
import { ShootingStarCursor } from "../components/ShootingStarCursor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ─── Images ───────────────────────────────────────────────────────────────────
const IMG_CODE = "https://images.unsplash.com/photo-1771931169282-4ebc82b973b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGNvZGUlMjBhcmNoaXRlY3R1cmUlMjBkYXJrJTIwY2luZW1hdGljJTIwZGlnaXRhbHxlbnwxfHx8fDE3NzQ3MDI4Njd8MA&ixlib=rb-4.1.0&q=80&w=1920";
const IMG_NETWORK = "https://images.unsplash.com/photo-1659738943718-16e431260fc2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBpbnRlZ3JhdGlvbiUyMG5ldHdvcmslMjBub2RlcyUyMGRhcmslMjBtaW5pbWFsfGVufDF8fHx8MTc3NDcwMjg2OHww&ixlib=rb-4.1.0&q=80&w=1920";
const IMG_INFRA = "https://images.unsplash.com/photo-1569482112573-a525a0986fa5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc2VydmVyJTIwc2NhbGluZyUyMGluZnJhc3RydWN0dXJlJTIwZGFyayUyMG1vb2R5fGVufDF8fHx8MTc3NDcwMjg2OHww&ixlib=rb-4.1.0&q=80&w=1920";
const IMG_SERVER = "https://images.unsplash.com/photo-1680992046626-418f7e910589?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbW9vZHklMjBzZXJ2ZXIlMjByb29tJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNzc0NzAzNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_KL = "https://images.unsplash.com/photo-1630983410779-88aba3aac0ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLdWFsYSUyMEx1bXB1ciUyMHNreWxpbmUlMjBuaWdodCUyMGRhcmslMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzc0NzAzNjgyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CYBER = "https://images.unsplash.com/photo-1719255417989-b6858e87359e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwZGFyayUyMGhhY2tlciUyMHRlcm1pbmFsfGVufDF8fHx8MTc3NDcwMzY4M3ww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_TEAM = "https://images.unsplash.com/photo-1758520144667-3041caeff3c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGRhcmt8ZW58MXx8fHwxNzc0NTk5MDEyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_DATA = "https://images.unsplash.com/photo-1762279389006-43963a0cee55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjB2aXN1YWxpemF0aW9uJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzc0NjQzMzIzfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_PROPTECH = "https://images.unsplash.com/photo-1748764720733-3bb4c52ab6f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwbHV4dXJ5JTIwcmVhbCUyMGVzdGF0ZSUyMHZpcnR1YWwlMjBzaG93cm9vbXxlbnwxfHx8fDE3NzQ3MDM2ODN8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_DIGITAL_TWIN = "https://images.unsplash.com/photo-1573153178631-49e3aa9e018b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHdpbiUyMGluZHVzdHJpYWwlMjBwbGF0Zm9ybSUyMGRhcmt8ZW58MXx8fHwxNzc0NzEyOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_ECOM = "https://images.unsplash.com/photo-1569398371172-f268f66a193b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBsdXh1cnklMjBtb2JpbGUlMjBhcHAlMjBkYXJrfGVufDF8fHx8MTc3NDcxMjkyNXww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_CLOUD = "https://images.unsplash.com/photo-1646361425122-88ca02b2515c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMG1pZ3JhdGlvbiUyMGVudGVycHJpc2UlMjBkYXJrJTIwbW9vZHl8ZW58MXx8fHwxNzc0NzEyOTI1fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_BLOCKCHAIN = "https://images.unsplash.com/photo-1639322537228-f710d846310a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0JTIwZGFya3xlbnwxfHx8fDE3NzQ3MTMwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_PMC = "https://images.unsplash.com/photo-1551836022-d5d88e9218df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";
const IMG_EFLOW = "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrZmxvdyUyMGF1dG9tYXRpb24lMjBvZmZpY2V8ZW58MXx8fHwxNzc0NzE0ODg3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_IT_SYSTEMS = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudCUyMGl0fGVufDF8fHx8MTc3NDcxNTQxN3ww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_VATPROMPT = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080";

// ─── Glass Styles ─────────────────────────────────────────────────────────────
const GLASS: React.CSSProperties = {
  background: "rgba(8, 10, 18, 0.92)",
  backdropFilter: "blur(100px) saturate(180%)",
  WebkitBackdropFilter: "blur(100px) saturate(180%)",
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.20), inset 1px 0 0 rgba(255,255,255,0.06), inset -1px 0 0 rgba(255,255,255,0.03), 0 32px 80px rgba(0,0,0,0.55), 0 0 0 0.5px rgba(255,255,255,0.04)",
};

const HEAVY_GLASS: React.CSSProperties = {
  background: "rgba(5, 6, 12, 0.94)",
  backdropFilter: "blur(120px) saturate(200%)",
  WebkitBackdropFilter: "blur(120px) saturate(200%)",
  border: "1px solid rgba(255,255,255,0.11)",
  boxShadow:
    "inset 0 1.5px 0 rgba(255,255,255,0.24), inset 0 -1px 0 rgba(255,255,255,0.04), inset 1px 0 0 rgba(255,255,255,0.07), 0 48px 120px rgba(0,0,0,0.70), 0 8px 32px rgba(0,0,0,0.4)",
};

const NAV_GLASS: React.CSSProperties = {
  background: "rgba(4, 5, 10, 0.92)",
  backdropFilter: "blur(80px) saturate(160%)",
  WebkitBackdropFilter: "blur(80px) saturate(160%)",
  borderBottom: "1px solid rgba(255,255,255,0.07)",
  boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
};

const LIGHT_GLASS: React.CSSProperties = {
  background: "rgba(12, 14, 24, 0.88)",
  backdropFilter: "blur(80px) saturate(160%)",
  WebkitBackdropFilter: "blur(80px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.07)",
  boxShadow:
    "inset 0 1px 0 rgba(255,255,255,0.12), 0 16px 48px rgba(0,0,0,0.4)",
};

// ─── Shared Typography Helpers ───────────��────────────────────────────────────
const FONT = "Inter,-apple-system,BlinkMacSystemFont,sans-serif";
const SIDE_PAD = "clamp(2.5rem, 8vw, 10rem)";
const labelStyle = (color = "rgba(100,170,255,0.65)"): React.CSSProperties => ({
  fontSize: "9px", letterSpacing: "0.46em", color, fontFamily: FONT, fontWeight: 300, textTransform: "uppercase",
});
const bodyText: React.CSSProperties = {
  fontSize: "12.5px", lineHeight: 1.95, color: "rgba(240,242,248,0.62)", fontFamily: FONT, fontWeight: 300,
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const SERVICES = [
  { num: "01", title: "Digital Strategy & Architecture", desc: "Technology blueprinting aligned to measurable business outcomes. We map your digital landscape, identify critical leverage points, and design a roadmap built for sustained competitive advantage — not quarterly optics.", tags: ["Strategic Consulting", "Tech Audits", "Roadmapping", "OKR Alignment"] },
  { num: "02", title: "Bespoke Web & Application Development", desc: "Custom digital products engineered from first principles — no templates, no off-the-shelf frameworks misapplied. Built with precision, documented with care, and maintained at the same standard as delivery.", tags: ["React / Next.js", "TypeScript", "Node.js", "Mobile (iOS + Android)"] },
  { num: "03", title: "AI & Machine Learning Systems", desc: "Proprietary intelligence embedded into core workflows. Predictive models, LLM integrations, RAG pipelines, and computer vision systems built for production at scale.", tags: ["LLM Integration", "Predictive Analytics", "Computer Vision", "MLflow"] },
  { num: "04", title: "Cloud Infrastructure & DevOps", desc: "Enterprise-grade infrastructure designed to scale without ceiling. Multi-cloud, Kubernetes-native, GitOps-driven — with SLAs that translate directly to business continuity.", tags: ["AWS / GCP / Azure", "Kubernetes", "Terraform", "CI/CD Pipelines"] },
  { num: "05", title: "Cybersecurity & Compliance", desc: "Zero-trust posture, penetration testing, VAPT audits, and full regulatory adherence — engineered into your product from day one.", tags: ["Zero-Trust", "VAPT Audits", "PDPA / GDPR", "ISO 27001"] },
  { num: "06", title: "System Integration & API Engineering", desc: "Seamless interoperability between disparate enterprise platforms. Custom middleware, REST and GraphQL APIs, and event-driven architectures that eliminate data silos.", tags: ["REST / GraphQL", "Custom Middleware", "Event-Driven", "ETL Pipelines"] },
  { num: "07", title: "Data Engineering & Analytics", desc: "End-to-end data pipelines, real-time analytics dashboards, and BI platforms engineered for decision-makers who act on them.", tags: ["Data Pipelines", "BI Dashboards", "Real-Time Analytics", "Snowflake"] },
];

const CLASS1_SERVICES = [
  { title: "Creative & Digital Experience", items: ["High-End Corporate Websites", "E-Commerce Applications", "Luxury Event Microsites", "Brand Identity Systems"] },
  { title: "Operational Software & Automation", items: ["Custom Operations Dashboards", "API Bridges & Middleware", "BI & Analytics Dashboards", "Workflow Automation"] },
  { title: "Cybersecurity & Compliance", items: ["VAPT Audits", "Ransomware Defense Architecture", "PDPA Tech Compliance Audits", "Zero-Trust Implementation"] },
  { title: "High-End Infrastructure", items: ["Legacy-to-Cloud Migrations", "Secure Remote Work (VDI)", "Commercial Network Architecture", "Disaster Recovery Planning"] },
];

const CLASS2_SERVICES = [
  { title: "Real Estate & PropTech", items: ["Virtual Showrooms", "Digital Twins", "Interactive Sales Tech", "Property Management Platforms"] },
  { title: "Wealth & Asset Management", items: ["Family Office Command Centers", "Art & Collectible Asset Systems", "Portfolio Analytics", "Risk Dashboards"] },
  { title: "Lifestyle & Membership", items: ["Private Club Applications", "Patient Recovery Apps", "Concierge Platforms", "Wellness Tracking"] },
  { title: "Corporate & Professional", items: ["Virtual Deal Room (VDR)", "Student Portfolio Platforms", "Board Management Software", "Legal Document Systems"] },
  { title: "Retail & Operations", items: ["Digital Signage CMS", "Recruitment Agency CRM", "Inventory Intelligence", "POS Integration"] },
];

const CASE_STUDIES = [
  { title: "IT Services Under PMC / PMO", category: "PMC / PMO", image: IMG_PMC, desc: "Full-spectrum project governance for large-scale IT procurement and deployment, covering BPR/BRS/SRS definition, tender and bid management, vendor onboarding, deployment supervision, UAT/OAT quality assurance, and AMC SLA planning. Proven delivery across mission-critical programs valued up to USD110 million.", tags: ["PMC", "PMO", "UAT/OAT"], stats: { metric: "USD110M", label: "Project Value" } },
  { title: "Blockchain Solutions", category: "Blockchain", image: IMG_BLOCKCHAIN, desc: "Pioneering enterprise-grade blockchain solutions for transparency and security. We build decentralized applications, smart contracts, and distributed ledger systems for government, finance, and supply chain verticals, ensuring data integrity and operational efficiency.", tags: ["Blockchain", "Smart Contracts", "DApps"], stats: { metric: "1M+", label: "Transactions Secured" } },
  { title: "E-Flow Workflow Automation", category: "Automation", image: IMG_EFLOW, desc: "Automated workflow solution to liberate organizations from tedious paperwork, saving time and money by automating routine business processes and validation checks. Pays for itself in less than 12 months.", tags: ["Workflow Automation", "E-Government", "Process Management"], stats: { metric: "<12 Months", label: "ROI" } },
  { title: "VATPrompt Automated VAT Compliance", category: "Tax Compliance", image: IMG_VATPROMPT, desc: "VATPrompt is a complete software application for automated VAT accounts management and reporting. It supports monthly return submission within a day following month-end, generates required forms from VAT accounting entries, provides up-to-date purchase/sales reporting, and integrates with IVAS, ERP, POS, and payment systems.", tags: ["VAT Compliance", "Return Filing", "System Integration"], stats: { metric: "1 Day", label: "Month-End Filing" } },
  { title: "IT Systems Design & Supervision", category: "Project Management", image: IMG_IT_SYSTEMS, desc: "Leader in IT Project Management Consulting (PMC), with extensive experience in large-scale system implementations for government and development partners like the World Bank and Asian Development Bank.", tags: ["Project Management", "PMC", "Govt. Projects"], stats: { metric: "20+", label: "Major Partners" } },
  { title: "Enterprise Digital Transformation", category: "Digital Strategy", image: IMG_DIGITAL_TWIN, desc: "End-to-end digital overhaul for a multinational conglomerate — migrating 23 legacy systems into a unified cloud-native architecture with real-time analytics, reducing operational overhead by 47%.", tags: ["Cloud Migration", "System Integration", "Analytics"], stats: { metric: "47%", label: "Cost Reduction" } },
  { title: "Luxury E-Commerce Platform", category: "Creative & Digital", image: IMG_ECOM, desc: "Bespoke headless commerce platform for a premium lifestyle brand — featuring AI-driven personalization, sub-200ms page loads, and a conversion rate that tripled within the first quarter.", tags: ["Next.js", "Headless CMS", "AI Personalization"], stats: { metric: "3×", label: "Conversion Lift" } },
  { title: "PropTech Virtual Showroom", category: "Real Estate Tech", image: IMG_PROPTECH, desc: "Immersive 3D virtual property tours with digital twin integration for a Kuala Lumpur luxury development — enabling remote buyers to explore, customize, and commit entirely online.", tags: ["Three.js", "Digital Twin", "WebGL"], stats: { metric: "92%", label: "Remote Pre-Sales" } },
  { title: "Zero-Trust Security Architecture", category: "Cybersecurity", image: IMG_CYBER, desc: "Complete zero-trust implementation for a regional banking institution — VAPT audits, identity mesh, micro-segmentation, and 24/7 SOC integration. Zero incidents in 18+ months.", tags: ["Zero-Trust", "VAPT", "SOC Integration"], stats: { metric: "0", label: "Security Incidents" } },
  { title: "Cloud Infrastructure at Scale", category: "DevOps & Cloud", image: IMG_CLOUD, desc: "Multi-region Kubernetes deployment across AWS and GCP for an ASEAN fintech — auto-scaling to 2.3M concurrent users with 99.99% uptime SLA and GitOps-driven CI/CD pipelines.", tags: ["Kubernetes", "Terraform", "Multi-Cloud"], stats: { metric: "99.99%", label: "Uptime SLA" } },
  { title: "AI-Powered Operations Dashboard", category: "Automation", image: IMG_DATA, desc: "Custom operations intelligence platform integrating 14 data sources — predictive maintenance alerts, anomaly detection, and executive decision support serving C-suite across 6 countries.", tags: ["Machine Learning", "Real-Time BI", "Python"], stats: { metric: "14", label: "Data Sources" } },
  { title: "Corporate Web & Brand System", category: "Web Development", image: IMG_TEAM, desc: "High-end corporate web presence and design system for an enterprise group — component-driven architecture, accessibility-first, performance-budgeted, deployed across 8 subsidiary brands.", tags: ["React", "Design System", "A11y"], stats: { metric: "8", label: "Brand Deployments" } },
  { title: "Secure Remote Work Infrastructure", category: "Infrastructure", image: IMG_SERVER, desc: "Enterprise VDI and secure remote work architecture for 4,000+ employees — zero-trust network access, endpoint management, and encrypted collaboration across Malaysia, Bangladesh, and Singapore.", tags: ["VDI", "Zero-Trust", "Endpoint Mgmt"], stats: { metric: "4K+", label: "Users Secured" } },
];

const TECH_STACK = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Motion"],
  Backend: ["Node.js", "Python", "Go", "Rust", "GraphQL", "gRPC"],
  Cloud: ["AWS", "Google Cloud", "Azure", "Terraform", "Kubernetes", "Docker"],
  Data: ["PostgreSQL", "MongoDB", "Redis", "Snowflake", "Apache Kafka", "Elasticsearch"],
  AI: ["OpenAI", "LangChain", "PyTorch", "TensorFlow", "Hugging Face", "MLflow"],
  Security: ["Vault", "OAuth 2.0", "SAML", "Cloudflare", "CrowdStrike", "Snyk"],
};



// ─── Preloader ─────────────────────────────────────────────────────────────────
function Preloader({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    let n = 0;
    const id = setInterval(() => {
      n += 1;
      setCount(n);
      if (n >= 100) {
        clearInterval(id);
        setTimeout(() => { setExiting(true); setTimeout(onComplete, 850); }, 350);
      }
    }, 16);
    return () => clearInterval(id);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[300] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${preloaderImg})`, backgroundSize: "80%", backgroundPosition: "center", backgroundRepeat: "no-repeat", opacity: 0.8 }}
      animate={exiting ? { y: "-100%" } : { y: "0%" }}
      transition={{ duration: 0.85, ease: [0.76, 0, 0.24, 1] }}
    >
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(13,26,48,0.55) 0%, rgba(2,2,4,0.82) 70%)", pointerEvents: "none" }} />
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }}
        style={{ fontSize: "9px", letterSpacing: "0.5em", color: "rgba(255,255,255,0.25)", fontFamily: FONT, textTransform: "uppercase", position: "absolute", top: "2.5rem" }}
      >Technohaven</motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
        style={{ position: "absolute", bottom: "3rem", fontSize: "10px", letterSpacing: "0.3em", color: "rgba(255,255,255,0.2)", fontFamily: FONT, fontWeight: 300 }}
      >Loading...{count}%completed</motion.p>
    </motion.div>
  );
}

// ��── Canvas Network Background ─────────────────────────────────────────────────
function NetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stateRef = useRef({ mouse: { x: 0, y: 0 }, scroll: 0, raf: 0, particles: [] as { x: number; y: number; vx: number; vy: number; size: number; hub: boolean }[] });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true })!;
    if (!ctx) return;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const W = canvas.width, H = canvas.height;
      const count = Math.min(120, Math.floor((W * H) / 9000));
      stateRef.current.particles = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.32, vy: (Math.random() - 0.5) * 0.32,
        size: i < count * 0.15 ? Math.random() * 2.5 + 2.5 : Math.random() * 1.5 + 0.6,
        hub: i < count * 0.15,
      }));
    };

    init();
    window.addEventListener("resize", init);
    const onMouse = (e: MouseEvent) => { stateRef.current.mouse = { x: e.clientX, y: e.clientY }; };
    const onScroll = () => { stateRef.current.scroll = window.scrollY; };
    window.addEventListener("mousemove", onMouse);
    window.addEventListener("scroll", onScroll, { passive: true });

    let lastTime = 0;
    const draw = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.67, 2.5);
      lastTime = time;
      const { mouse, scroll, particles } = stateRef.current;
      const W = canvas.width, H = canvas.height;
      ctx.clearRect(0, 0, W, H);
      const mx = (mouse.x / (W || 1) - 0.5) * 22;
      const my = (mouse.y / (H || 1) - 0.5) * 22;
      const sy = scroll * -0.14;

      particles.forEach(p => {
        p.x += p.vx * dt; p.y += p.vy * dt;
        if (p.x < -60) p.x = W + 60; if (p.x > W + 60) p.x = -60;
        if (p.y < -60) p.y = H + 60; if (p.y > H + 60) p.y = -60;
      });

      const maxDist = 210;
      for (let i = 0; i < particles.length; i++) {
        const pi = particles[i];
        const px = pi.x + mx, py = pi.y + my + sy;
        for (let j = i + 1; j < particles.length; j++) {
          const pj = particles[j];
          const dx = pi.x - pj.x, dy = pi.y - pj.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * (pi.hub || pj.hub ? 0.55 : 0.30);
            ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(pj.x + mx, pj.y + my + sy);
            ctx.strokeStyle = `rgba(80,165,255,${alpha})`; ctx.lineWidth = pi.hub || pj.hub ? 1.0 : 0.55; ctx.stroke();
          }
        }
      }

      particles.forEach(p => {
        const px = p.x + mx, py = p.y + my + sy;
        const mdx = p.x - mouse.x, mdy = p.y - mouse.y;
        const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
        const prox = Math.max(0, 1 - mdist / 260);
        if (p.hub) {
          const grad = ctx.createRadialGradient(px, py, 0, px, py, p.size * 4 + prox * 10);
          grad.addColorStop(0, `rgba(120,195,255,${0.9 + prox * 0.1})`);
          grad.addColorStop(0.35, `rgba(70,155,255,${0.5 + prox * 0.15})`);
          grad.addColorStop(1, "rgba(50,120,255,0)");
          ctx.beginPath(); ctx.arc(px, py, p.size * 4 + prox * 10, 0, Math.PI * 2); ctx.fillStyle = grad; ctx.fill();
          ctx.beginPath(); ctx.arc(px, py, p.size, 0, Math.PI * 2); ctx.fillStyle = `rgba(180,220,255,${0.95})`; ctx.fill();
        } else {
          ctx.beginPath(); ctx.arc(px, py, p.size + prox * 1.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${120 + prox * 60},${180 + prox * 30},255,${0.7 + prox * 0.3})`; ctx.fill();
        }
      });

      stateRef.current.raf = requestAnimationFrame(draw);
    };
    stateRef.current.raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", init);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(stateRef.current.raf);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0, pointerEvents: "none" }} />;
}

// ─── Navbar ────────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = ["Home", "About", "Services", "Work", "Contact"];

  function goTo(section: string) {
    setOpen(false);
    if (section === "Home") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)", ...(scrolled ? NAV_GLASS : { background: "transparent" }) }}>
        <div style={{ maxWidth: "1440px", margin: "0 auto", padding: `0 ${SIDE_PAD}`, height: "72px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button onClick={() => goTo("Home")} style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", padding: 0 }}>
            <div className="p-[0px] m-[0px]" style={{ fontSize: "16px", letterSpacing: "0.42em", color: "rgba(240,242,248,0.92)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", lineHeight: 1.35 }}>Technohaven</div>

          </button>
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "1px solid rgba(255,255,255,0.08)", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.45rem 1rem", transition: "all 0.3s", color: open ? "rgba(240,242,248,0.85)" : "rgba(240,242,248,0.5)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(100,170,255,0.3)"; e.currentTarget.style.color = "rgba(240,242,248,0.85)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = open ? "rgba(240,242,248,0.85)" : "rgba(240,242,248,0.5)"; }}
          >
            <span style={{ fontSize: "9px", letterSpacing: "0.3em", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>{open ? "Close" : "Menu"}</span>
            {open ? <X size={14} /> : <Menu size={14} />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "fixed", inset: 0, zIndex: 199, background: "#000", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: `120px ${SIDE_PAD} 2.5rem` }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              {links.map((l, i) => (
                <motion.button
                  key={l}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => goTo(l)}
                  style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", fontFamily: FONT, fontWeight: 300, fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)", letterSpacing: "0.04em", color: "rgba(240,242,248,0.9)", textTransform: "uppercase", padding: "0.15em 0", transition: "color 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "rgba(100,170,255,0.9)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,242,248,0.9)")}
                >{l}</motion.button>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}
            >
              <div style={{ display: "flex", gap: "clamp(2rem, 6vw, 5rem)" }}>
                {["Facebook", "Instagram", "LinkedIn"].map(s => (
                  <span key={s} style={{ fontSize: "9px", letterSpacing: "0.25em", color: "rgba(240,242,248,0.58)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>{s}</span>
                ))}
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: "9px", letterSpacing: "0.25em", color: "rgba(240,242,248,0.58)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>Privacy Policy</div>
                <div style={{ fontSize: "9px", letterSpacing: "0.25em", color: "rgba(240,242,248,0.58)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>Terms & Conditions</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// ─── Hero ──────────────────────────────────────────────────────────────────────
function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!heroRef.current || !heroTextRef.current) return;
    const ctx = gsap.context(() => {
      // Parallax: hero text moves up slower than scroll
      gsap.to(heroTextRef.current, {
        y: -120,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.8,
        },
      });
      // Fade out hero on scroll
      gsap.to(heroRef.current, {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "60% top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} style={{ position: "relative", height: "100svh", minHeight: "620px", display: "flex", flexDirection: "column", justifyContent: "center", zIndex: 1 }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(5,7,18,0) 0%, rgba(5,7,18,0.3) 100%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,6,12,0.6) 0%, rgba(5,6,12,0.0) 45%)", pointerEvents: "none" }} />
      <div ref={heroTextRef} style={{ position: "relative", maxWidth: "1440px", width: "100%", marginLeft: "auto", marginRight: "auto", marginTop: "5vh", padding: `0 ${SIDE_PAD}` }}>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.2rem, 7vw, 7rem)", fontWeight: 100, letterSpacing: "-0.02em", lineHeight: 0.92, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", marginBottom: "0.3rem" }}>
          Bridging Legacy<br />Engineering
        </motion.h1>
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35, duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: "clamp(2.2rem, 7vw, 7rem)", fontWeight: 100, letterSpacing: "-0.02em", lineHeight: 0.92, color: "rgba(100,170,255,0.80)", fontFamily: FONT, textTransform: "uppercase", marginBottom: "2.5rem" }}>
          And Commercial<br />Agility.
        </motion.h1>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.9 }}
          style={{ display: "flex", alignItems: "center", gap: "3rem", flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div style={{ width: "36px", height: "1px", background: "rgba(100,170,255,0.5)" }} />
            <p style={{ fontSize: "11px", letterSpacing: "0.2em", color: "rgba(240,242,248,0.62)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>
              One Unified Global Force. Complete Digital Transformation.
            </p>
          </div>
          <button onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: "0.6rem", background: "none", border: "none", cursor: "pointer", fontSize: "10px", letterSpacing: "0.28em", color: "rgba(240,242,248,0.5)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "color 0.3s", padding: 0 }}
            onMouseEnter={e => (e.currentTarget.style.color = "rgba(100,170,255,0.85)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,242,248,0.5)")}>
            Explore <ArrowUpRight size={13} strokeWidth={1.5} />
          </button>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", cursor: "pointer" }}>
        <span style={{ fontSize: "7px", letterSpacing: "0.5em", paddingLeft: "0.5em", color: "rgba(240,242,248,0.4)", fontFamily: FONT, textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: "22px", height: "36px", borderRadius: "11px", border: "1.5px solid rgba(240,242,248,0.3)", display: "flex", justifyContent: "center", paddingTop: "7px" }}>
          <motion.div animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(100,170,255,0.8)" }} />
        </div>
      </motion.div>
    </section>
  );
}

// ─── About: Dual-Hub Story ─────────────────────────────────────────────────────
interface StoryPanelProps { id?: string; label: string; number: string; heading: string; body: string; bullets: string[]; image: string; imageLeft: boolean; }

function StoryPanel({ id, label, number, heading, body, bullets, image, imageLeft }: StoryPanelProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    if (!panelRef.current || !imgRef.current) return;
    const ctx = gsap.context(() => {
      // GSAP parallax on the image — slow vertical shift as you scroll through
      gsap.fromTo(imgRef.current, { y: -40 }, {
        y: 40,
        ease: "none",
        scrollTrigger: {
          trigger: panelRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6,
        },
      });
    }, panelRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={panelRef} id={id} style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", alignItems: "center", padding: "6rem 0", background: "linear-gradient(to bottom, rgba(5,6,12,0.7) 0%, rgba(5,6,12,0.88) 15%, rgba(5,6,12,0.88) 85%, rgba(5,6,12,0.7) 100%)" }}>
      <div style={{ maxWidth: "1440px", margin: "0 auto", padding: `0 ${SIDE_PAD}`, width: "100%", display: "flex", gap: "2px" }} className={imageLeft ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"}>
        <motion.div initial={{ opacity: 0, x: imageLeft ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: "0 0 55%", position: "relative", ...GLASS, overflow: "hidden" }} className="min-h-[300px] md:min-h-[480px]">
          <img ref={imgRef} src={image} alt={heading}
            style={{ width: "100%", height: "calc(100% + 80px)", objectFit: "cover", objectPosition: "center", display: "block", opacity: 0.78, marginTop: "-40px" }} />
          <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 80px rgba(5,6,12,0.5)" }} />
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "rgba(255,255,255,0.20)" }} />
          <div style={{ position: "absolute", bottom: "1.5rem", right: "1.5rem", fontSize: "clamp(4rem, 10vw, 7rem)", fontWeight: 100, color: "rgba(255,255,255,0.05)", fontFamily: FONT, lineHeight: 1, letterSpacing: "-0.04em", userSelect: "none" }}>{number}</div>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: imageLeft ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ flex: 1, ...GLASS, padding: "clamp(2rem, 5vw, 4rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p style={{ ...labelStyle(), marginBottom: "2.5rem" }}>{number} — {label}</p>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 3.2rem)", fontWeight: 200, letterSpacing: "0.03em", lineHeight: 1.05, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", marginBottom: "1.75rem", whiteSpace: "pre-line" }}>{heading}</h2>
          <div style={{ width: "28px", height: "1px", background: "rgba(100,170,255,0.4)", marginBottom: "1.75rem" }} />
          <p style={{ ...bodyText, maxWidth: "42ch", marginBottom: "2.5rem" }}>{body}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem" }}>
            {bullets.map(b => (
              <div key={b} style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div style={{ width: "14px", height: "1px", background: "rgba(100,170,255,0.45)", flexShrink: 0 }} />
                <span style={{ fontSize: "11px", letterSpacing: "0.06em", color: "rgba(240,242,248,0.65)", fontFamily: FONT, fontWeight: 300 }}>{b}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── About Sub-Nav ─────────────────────────────────────────────────────────────
function AboutSubSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Our Story", content: "Founded in 2019, Technohaven emerged from the conviction that elite engineering and commercial agility need not be mutually exclusive. What began as a boutique consultancy in Kuala Lumpur has evolved into a dual-hub enterprise spanning Southeast Asia and South Asia — delivering institutional-grade technology to organizations that refuse to compromise." },
    { label: "Team", content: "Our team comprises 120+ engineers, architects, and strategists distributed across Kuala Lumpur and Dhaka. Every member is selected through a rigorous multi-stage vetting process that evaluates not just technical acuity, but systemic thinking, communication precision, and an uncompromising commitment to craft." },
    { label: "Mission", content: "To deliver technology that operates at the intersection of engineering excellence and commercial pragmatism. We exist to prove that the highest standards of technical integrity can coexist with — and in fact accelerate — business velocity, market responsiveness, and sustainable growth." },
  ];

  return (
    <section style={{ position: "relative", zIndex: 1, padding: `5rem ${SIDE_PAD}`, background: "rgba(5,6,12,0.88)" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}
          style={{ ...HEAVY_GLASS, overflow: "hidden" }}>
          <div style={{ height: "1.5px", background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.0) 100%)" }} />
          <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
            {tabs.map((t, i) => (
              <button key={t.label} onClick={() => setActiveTab(i)}
                style={{ flex: 1, padding: "1.2rem 1rem", background: activeTab === i ? "rgba(100,170,255,0.06)" : "transparent", border: "none", borderRight: i < tabs.length - 1 ? "1px solid rgba(255,255,255,0.055)" : "none", cursor: "pointer", fontSize: "9px", letterSpacing: "0.3em", color: activeTab === i ? "rgba(100,170,255,0.85)" : "rgba(240,242,248,0.55)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.3s" }} >
                {t.label}
              </button>
            ))}
          </div>
          <div style={{ padding: "2.5rem" }}>
            <AnimatePresence mode="wait">
              <motion.p key={activeTab} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}
                style={{ ...bodyText, maxWidth: "60ch" }}>
                {tabs[activeTab].content}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── GSAP Marquee Divider ──────────────────────────────────────────────────────
function MarqueeDivider({ text, reverse = false }: { text: string; reverse?: boolean }) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      const inner = marqueeRef.current!.querySelector("[data-marquee-inner]") as HTMLElement;
      if (!inner) return;
      gsap.fromTo(inner, { xPercent: reverse ? -50 : 0 }, {
        xPercent: reverse ? 0 : -50,
        ease: "none",
        scrollTrigger: {
          trigger: marqueeRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        },
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, [reverse]);

  const repeated = Array(8).fill(text).join(" — ");

  return (
    <div ref={marqueeRef} style={{ position: "relative", zIndex: 1, overflow: "hidden", padding: "2.5rem 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
      <div data-marquee-inner style={{ whiteSpace: "nowrap", display: "inline-block", width: "max-content" }}>
        <span style={{ fontSize: "clamp(1.2rem, 3vw, 2.5rem)", fontWeight: 100, letterSpacing: "0.15em", color: "rgba(240,242,248,0.06)", fontFamily: FONT, textTransform: "uppercase" }}>
          {repeated}
        </span>
      </div>
    </div>
  );
}

// ─── GSAP Reveal Line ─────────────────────────────────────────────────────────
function RevealLine() {
  const lineRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(lineRef.current, { scaleX: 0 }, {
        scaleX: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: lineRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={lineRef} style={{ position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", padding: `0 ${SIDE_PAD}`, transformOrigin: "left center" }}>
      <div style={{ height: "1px", background: "linear-gradient(to right, rgba(100,170,255,0.0), rgba(100,170,255,0.3), rgba(100,170,255,0.0))" }} />
    </div>
  );
}

// ─── Tech Stack Section ────────────────────────────────────────────────────────
function TechStackSection() {
  const [activeTab, setActiveTab] = useState<string>("Frontend");
  const categories = Object.keys(TECH_STACK);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    if (!headingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current, { x: -60, opacity: 0 }, {
        x: 0, opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section style={{ position: "relative", zIndex: 1, padding: `7rem ${SIDE_PAD}`, background: "rgba(5,6,12,0.15)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ marginBottom: "4rem" }}>
          <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>Technology Arsenal</p>
          <h2 ref={headingRef} style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 100, letterSpacing: "0.04em", lineHeight: 1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase" }}>
            Our Stack
          </h2>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }}
          style={{ ...HEAVY_GLASS, overflow: "hidden" }}>
          <div style={{ height: "1.5px", background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.0) 100%)" }} />

          {/* Tabs */}
          <div style={{ display: "flex", flexWrap: "wrap", borderBottom: "1px solid rgba(255,255,255,0.055)" }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveTab(cat)}
                style={{ padding: "1rem 1.5rem", background: activeTab === cat ? "rgba(100,170,255,0.06)" : "transparent", border: "none", borderBottom: activeTab === cat ? "1px solid rgba(100,170,255,0.5)" : "1px solid transparent", cursor: "pointer", fontSize: "9px", letterSpacing: "0.28em", color: activeTab === cat ? "rgba(100,170,255,0.85)" : "rgba(240,242,248,0.55)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.3s" }} >
                {cat}
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: "2.5rem" }}>
            <AnimatePresence mode="wait">
              <motion.div key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
                style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: "1rem" }}>
                {TECH_STACK[activeTab as keyof typeof TECH_STACK].map(tech => (
                  <div key={tech} style={{ ...LIGHT_GLASS, padding: "1.2rem 1rem", textAlign: "center" }}>
                    <span style={{ fontSize: "11px", letterSpacing: "0.08em", color: "rgba(240,242,248,0.55)", fontFamily: FONT, fontWeight: 300 }}>{tech}</span>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Services Matrix (Tabbed) ──────────────────────────────────────────────────
function ServicesMatrixSection() {
  const [activeClass, setActiveClass] = useState<1 | 2>(1);
  const matrixHeadingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!matrixHeadingRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(matrixHeadingRef.current, { y: 50, opacity: 0, skewY: 2 }, {
        y: 0, opacity: 1, skewY: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: matrixHeadingRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });
    return () => ctx.revert();
  }, []);
  const data = activeClass === 1 ? CLASS1_SERVICES : CLASS2_SERVICES;

  return (
    <section style={{ position: "relative", zIndex: 1, padding: `7rem ${SIDE_PAD}`, background: "rgba(5,6,12,0.88)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div ref={matrixHeadingRef} style={{ marginBottom: "4rem" }}>
          <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>The Services Matrix</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 100, letterSpacing: "0.04em", lineHeight: 1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase" }}>
            Dual<br />Modalities
          </h2>
        </div>

        {/* Class Toggle */}
        <div style={{ display: "flex", gap: "0", marginBottom: "3rem" }}>
          {[1, 2].map(c => (
            <button key={c} onClick={() => setActiveClass(c as 1 | 2)}
              style={{ padding: "1rem 2rem", ...LIGHT_GLASS, border: activeClass === c ? "1px solid rgba(100,170,255,0.3)" : "1px solid rgba(255,255,255,0.07)", cursor: "pointer", fontSize: "9px", letterSpacing: "0.3em", color: activeClass === c ? "rgba(100,170,255,0.9)" : "rgba(240,242,248,0.55)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.35s", background: activeClass === c ? "rgba(100,170,255,0.08)" : "rgba(12,14,24,0.38)" }}>
              Class {c}: {c === 1 ? "Project-Based" : "Product-Based"}
            </button>
          ))}
        </div>
      </div>

      {/* Kasané-style horizontal sliding deck */}
      <AnimatePresence mode="wait">
        <motion.div key={activeClass} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.35 }}>
          <div style={{ overflow: "hidden", width: "100%", position: "relative" }}>
            <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to right, rgba(5,6,12,1), transparent)", zIndex: 2, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "80px", background: "linear-gradient(to left, rgba(5,6,12,1), transparent)", zIndex: 2, pointerEvents: "none" }} />
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } }}
              style={{ display: "flex", gap: "6px", width: "fit-content" }}
            >
              {[...data, ...data].map((cat, idx) => (
                <div key={`${cat.title}-${idx}`}
                  style={{ ...GLASS, padding: "2rem 2.2rem", minWidth: "320px", maxWidth: "340px", flexShrink: 0 }}>
                  <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>{String((idx % data.length) + 1).padStart(2, "0")}</p>
                  <h3 style={{ fontSize: "clamp(1rem, 1.8vw, 1.25rem)", fontWeight: 200, letterSpacing: "0.04em", color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", marginBottom: "1.5rem" }}>{cat.title}</h3>
                  <div style={{ width: "20px", height: "1px", background: "rgba(100,170,255,0.35)", marginBottom: "1.25rem" }} />
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                    {cat.items.map(item => (
                      <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                        <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(100,170,255,0.35)", flexShrink: 0 }} />
                        <span style={{ fontSize: "11px", color: "rgba(240,242,248,0.65)", fontFamily: FONT, fontWeight: 300 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

// ─── Services Accordion ────────────────────────────────────────────────────────
function ServicesSection() {
  const [open, setOpen] = useState<number | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!accordionRef.current) return;
    const ctx = gsap.context(() => {
      const items = accordionRef.current!.querySelectorAll("[data-gsap-accordion-item]");
      gsap.fromTo(items, { opacity: 0, x: -40 }, {
        opacity: 1, x: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: accordionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, accordionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="services" style={{ position: "relative", zIndex: 1, padding: `7rem ${SIDE_PAD}`, background: "rgba(5,6,12,0.88)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} style={{ marginBottom: "5rem" }}>
          <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>Services & Methodology</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 100, letterSpacing: "0.04em", lineHeight: 1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase" }}>
            What We<br />Engineer
          </h2>
        </motion.div>

        <div ref={accordionRef} style={{ ...HEAVY_GLASS, padding: "0 0" }}>
          <div style={{ height: "1.5px", background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.0) 100%)" }} />
          {SERVICES.map((s, i) => (
            <div key={s.num} data-gsap-accordion-item style={{ borderBottom: i < SERVICES.length - 1 ? "1px solid rgba(255,255,255,0.055)" : "none" }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.75rem 2.5rem", textAlign: "left", gap: "1.5rem", transition: "background 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(100,170,255,0.03)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "2rem", flex: 1, minWidth: 0 }}>
                  <span style={{ fontSize: "9.5px", letterSpacing: "0.28em", color: "rgba(100,170,255,0.65)", fontFamily: FONT, fontWeight: 300, flexShrink: 0 }}>{s.num}</span>
                  <span style={{ fontSize: "clamp(0.9rem, 2.2vw, 1.35rem)", fontWeight: 200, letterSpacing: "0.04em", color: open === i ? "#EEEEF2" : "rgba(240,242,248,0.58)", fontFamily: FONT, textTransform: "uppercase", transition: "color 0.35s", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{s.title}</span>
                </div>
                <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }} style={{ flexShrink: 0 }}>
                  <ChevronDown size={15} color="rgba(100,170,255,0.55)" strokeWidth={1.5} />
                </motion.div>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: "hidden" }}>
                    <div style={{ padding: "0 2.5rem 2rem", paddingLeft: "calc(2.5rem + 2rem + 9.5px + 0.5rem)" }}>
                      <div style={{ borderLeftWidth: "1px", borderLeftStyle: "solid", borderLeftColor: "rgba(100,170,255,0.2)", paddingLeft: "2rem" }}>
                        <p style={{ ...bodyText, maxWidth: "72ch", marginBottom: "1.5rem", fontSize: "15px", lineHeight: "1.85" }}>{s.desc}</p>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                          {s.tags.map(tag => (
                            <span key={tag} style={{ fontSize: "10px", letterSpacing: "0.28em", color: "rgba(100,170,255,0.55)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", padding: "0.4rem 0.9rem", border: "1px solid rgba(100,170,255,0.18)", background: "rgba(100,170,255,0.05)" }}>{tag}</span>
                          ))}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem" }}>
                          <span style={{ fontSize: "10.5px", letterSpacing: "0.35em", color: "rgba(100,170,255,0.45)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>Enquire</span>
                          <ArrowUpRight size={13} color="rgba(100,170,255,0.45)" strokeWidth={1.5} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div style={{ height: "1px", background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.10) 50%, rgba(255,255,255,0.0) 100%)" }} />
        </div>
      </div>
    </section>
  );
}

// ─── Sliding Deck Case Studies ─────────────────────────────────────────────────
function CaseStudiesSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = CASE_STUDIES.length;
  const caseHeadingRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!caseHeadingRef.current) return;
    const ctx = gsap.context(() => {
      const h2 = caseHeadingRef.current!.querySelector("h2");
      if (h2) {
        gsap.fromTo(h2, { scale: 0.85, opacity: 0 }, {
          scale: 1, opacity: 1,
          duration: 0.8,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: caseHeadingRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent(prev => (prev + dir + total) % total);
  };

  const goTo = (idx: number) => {
    setDirection(idx > current ? 1 : -1);
    setCurrent(idx);
  };

  // Auto-advance
  useEffect(() => {
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [current]);

  const cs = CASE_STUDIES[current];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? "60%" : "-60%", opacity: 0, scale: 0.92, rotateY: d > 0 ? 6 : -6 }),
    center: { x: "0%", opacity: 1, scale: 1, rotateY: 0 },
    exit: (d: number) => ({ x: d > 0 ? "-40%" : "40%", opacity: 0, scale: 0.88, rotateY: d > 0 ? -4 : 4 }),
  };

  return (
    <section id="work" style={{ position: "relative", zIndex: 1, padding: `7rem ${SIDE_PAD}`, background: "rgba(5,6,12,0.88)", overflow: "hidden" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div ref={caseHeadingRef}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "4rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>Selected Work</p>
            <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 100, letterSpacing: "0.04em", lineHeight: 1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase" }}>
              Case Studies
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Counter */}
            <span style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(240,242,248,0.5)", fontFamily: FONT, fontWeight: 300, fontVariantNumeric: "tabular-nums" }}>
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button onClick={() => go(-1)}
                style={{ ...LIGHT_GLASS, width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid rgba(255,255,255,0.07)", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(100,170,255,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                <ArrowUpRight size={14} color="rgba(240,242,248,0.6)" strokeWidth={1.5} style={{ transform: "rotate(-135deg)" }} />
              </button>
              <button onClick={() => go(1)}
                style={{ ...LIGHT_GLASS, width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", border: "1px solid rgba(255,255,255,0.07)", transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(100,170,255,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}>
                <ArrowUpRight size={14} color="rgba(240,242,248,0.6)" strokeWidth={1.5} style={{ transform: "rotate(-45deg)" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Sliding Deck Card */}
        <div style={{ position: "relative", perspective: "1200px" }}>
          {/* Background stacked cards (visual depth) */}
          <div style={{ position: "absolute", top: "12px", left: "12px", right: "12px", bottom: "-6px", ...GLASS, opacity: 0.3, borderRadius: 0 }} />
          <div style={{ position: "absolute", top: "6px", left: "6px", right: "6px", bottom: "-3px", ...GLASS, opacity: 0.5, borderRadius: 0 }} />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ ...HEAVY_GLASS, overflow: "hidden", position: "relative", transformStyle: "preserve-3d" }}
            >
              {/* Top specular */}
              <div style={{ height: "1.5px", background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.28) 30%, rgba(255,255,255,0.18) 70%, rgba(255,255,255,0.0) 100%)" }} />

              <div className="flex flex-col lg:flex-row">
                {/* Image panel */}
                <div style={{ flex: "0 0 50%", position: "relative", overflow: "hidden" }} className="h-[280px] lg:h-[480px]">
                  <motion.img
                    key={cs.image}
                    src={cs.image}
                    alt={cs.title}
                    initial={{ scale: 1.12, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.75 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 40%, rgba(5,6,12,0.95) 100%)" }} className="hidden lg:block" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(5,6,12,0.95) 0%, transparent 50%)" }} className="lg:hidden" />
                  <div style={{ position: "absolute", inset: 0, boxShadow: "inset 0 0 80px rgba(5,6,12,0.4)" }} />

                  {/* Category badge */}
                  <div style={{ position: "absolute", top: "1.5rem", left: "1.5rem", ...LIGHT_GLASS, padding: "0.4rem 1rem" }}>
                    <span style={{ fontSize: "8px", letterSpacing: "0.35em", color: "rgba(100,170,255,0.8)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase" }}>{cs.category}</span>
                  </div>

                  {/* Big stat overlay */}
                  <div style={{ position: "absolute", bottom: "1.5rem", left: "1.5rem" }}>
                    <div style={{ fontSize: "clamp(3rem, 8vw, 5rem)", fontWeight: 100, lineHeight: 1, color: "rgba(100,170,255,0.25)", fontFamily: FONT, letterSpacing: "-0.04em" }}>{cs.stats.metric}</div>
                    <div style={{ fontSize: "8px", letterSpacing: "0.35em", color: "rgba(100,170,255,0.45)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", marginTop: "0.25rem" }}>{cs.stats.label}</div>
                  </div>
                </div>

                {/* Content panel */}
                <div style={{ flex: 1, padding: "clamp(2rem, 4vw, 3.5rem)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  {/* Number */}
                  <p style={{ fontSize: "9px", letterSpacing: "0.4em", color: "rgba(100,170,255,0.5)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", marginBottom: "2rem" }}>
                    Project {String(current + 1).padStart(2, "0")}
                  </p>

                  {/* Title */}
                  <h3 style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 200, letterSpacing: "0.03em", lineHeight: 1.1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", marginBottom: "1.5rem" }}>
                    {cs.title}
                  </h3>

                  {/* Divider */}
                  <div style={{ width: "28px", height: "1px", background: "rgba(100,170,255,0.4)", marginBottom: "1.5rem" }} />

                  {/* Description */}
                  <p style={{ ...bodyText, maxWidth: "48ch", marginBottom: "2rem" }}>
                    {cs.desc}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
                    {cs.tags.map(tag => (
                      <span key={tag} style={{ fontSize: "8px", letterSpacing: "0.28em", color: "rgba(100,170,255,0.55)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", padding: "0.3rem 0.75rem", border: "1px solid rgba(100,170,255,0.18)", background: "rgba(100,170,255,0.05)" }}>{tag}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <button style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "none", border: "1px solid rgba(100,170,255,0.2)", cursor: "pointer", padding: "0.65rem 1.4rem", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(100,170,255,0.6)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.3s", alignSelf: "flex-start" }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(100,170,255,0.5)"; e.currentTarget.style.background = "rgba(100,170,255,0.08)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(100,170,255,0.2)"; e.currentTarget.style.background = "transparent"; }}>
                    View Case Study <ArrowUpRight size={11} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dot navigation + progress */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", marginTop: "2.5rem" }}>
          {CASE_STUDIES.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              style={{ position: "relative", width: i === current ? "32px" : "8px", height: "3px", background: i === current ? "transparent" : "rgba(255,255,255,0.08)", border: "none", cursor: "pointer", transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)", padding: 0, overflow: "hidden" }}>
              {i === current && (
                <>
                  <div style={{ position: "absolute", inset: 0, background: "rgba(100,170,255,0.15)" }} />
                  <motion.div
                    key={`progress-${current}`}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 6, ease: "linear" }}
                    style={{ position: "absolute", inset: 0, background: "rgba(100,170,255,0.7)", transformOrigin: "left" }}
                  />
                </>
              )}
            </button>
          ))}
        </div>

        {/* Thumbnail strip */}
        <div style={{ display: "flex", gap: "2px", marginTop: "1.5rem", justifyContent: "center" }}>
          {CASE_STUDIES.map((study, i) => (
            <button key={study.title} onClick={() => goTo(i)}
              style={{ width: "clamp(80px, 12vw, 130px)", height: "48px", position: "relative", overflow: "hidden", border: i === current ? "1px solid rgba(100,170,255,0.4)" : "1px solid rgba(255,255,255,0.05)", cursor: "pointer", opacity: i === current ? 1 : 0.4, transition: "all 0.35s", padding: 0, background: "transparent" }}
              onMouseEnter={e => { if (i !== current) e.currentTarget.style.opacity = "0.7"; }}
              onMouseLeave={e => { if (i !== current) e.currentTarget.style.opacity = "0.4"; }}>
              <img src={study.image} alt={study.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", opacity: 0.6 }} />
              <div style={{ position: "absolute", inset: 0, background: "rgba(5,6,12,0.4)" }} />
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─── Contact & Landing Section ──────────────────────────────��──────────────────
function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const contactHeadRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!contactHeadRef.current) return;
    const ctx = gsap.context(() => {
      const h2 = contactHeadRef.current!.querySelector("h2");
      const label = contactHeadRef.current!.querySelector("p");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: contactHeadRef.current,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
      if (label) tl.fromTo(label, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" });
      if (h2) tl.fromTo(h2, { opacity: 0, y: 40, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: "power3.out" }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);


  const inputStyle: React.CSSProperties = {
    width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", padding: "0.9rem 1.2rem", color: "rgba(240,242,248,0.8)", fontFamily: FONT, fontWeight: 300, fontSize: "12px", letterSpacing: "0.04em", outline: "none", transition: "border-color 0.3s",
  };

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, padding: `7rem ${SIDE_PAD}`, background: "rgba(4,5,10,0.88)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div ref={contactHeadRef} style={{ marginBottom: "4rem" }}>
          <p style={{ ...labelStyle(), marginBottom: "1.5rem" }}>Initiate an Engagement</p>
          <h2 style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontWeight: 100, letterSpacing: "0.04em", lineHeight: 1, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase" }}>
            Let's Build<br />Together.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row" style={{ gap: "2px" }}>
          {/* Left: Landing Elements */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            style={{ flex: 1, display: "flex", flexDirection: "column", gap: "2px" }}>

            {/* Special Offer */}
            <div style={{ ...HEAVY_GLASS, padding: "2.5rem", position: "relative", overflow: "hidden" }}>
              <div style={{ height: "1.5px", position: "absolute", top: 0, left: 0, right: 0, background: "linear-gradient(to right, rgba(100,170,255,0.0) 0%, rgba(100,170,255,0.5) 50%, rgba(100,170,255,0.0) 100%)" }} />
              <p style={{ ...labelStyle("rgba(100,170,255,0.8)"), marginBottom: "1.25rem" }}>Limited Engagement</p>
              <h3 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 200, letterSpacing: "0.03em", color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", marginBottom: "1rem" }}>
                Complimentary<br />Architecture Audit
              </h3>
              <p style={{ ...bodyText, maxWidth: "40ch", marginBottom: "1.5rem" }}>
                A 90-minute deep-dive into your current technology landscape. Identify critical leverage points, hidden risks, and immediate optimization opportunities — at no cost, no obligation.
              </p>
              <button style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "none", border: "1px solid rgba(100,170,255,0.25)", cursor: "pointer", padding: "0.7rem 1.5rem", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(100,170,255,0.7)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.3s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(100,170,255,0.6)"; e.currentTarget.style.background = "rgba(100,170,255,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(100,170,255,0.25)"; e.currentTarget.style.background = "transparent"; }}>
                Claim Audit <ArrowUpRight size={11} strokeWidth={1.5} />
              </button>
            </div>


          </motion.div>

          {/* Right: Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.1 }}
            style={{ flex: 1, ...HEAVY_GLASS, padding: "2.5rem", position: "relative", overflow: "hidden" }}>
            <div style={{ height: "1.5px", position: "absolute", top: 0, left: 0, right: 0, background: "linear-gradient(to right, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.24) 50%, rgba(255,255,255,0.0) 100%)" }} />

            <p style={{ ...labelStyle(), marginBottom: "2rem" }}>Contact Us</p>

            {submitted ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: "center", padding: "3rem 0" }}>
                <p style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 200, color: "#EEEEF2", fontFamily: FONT, textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: "1rem" }}>Thank You.</p>
                <p style={{ ...bodyText }}>We'll respond within 24 hours.</p>
              </motion.div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <input type="text" placeholder="Full Name" value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = "rgba(100,170,255,0.35)")} onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                <input type="email" placeholder="Email Address" value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  style={inputStyle} onFocus={e => (e.currentTarget.style.borderColor = "rgba(100,170,255,0.35)")} onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                <textarea placeholder="Tell us about your project..." rows={5} value={formData.message} onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  style={{ ...inputStyle, resize: "none" }} onFocus={e => (e.currentTarget.style.borderColor = "rgba(100,170,255,0.35)")} onBlur={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")} />
                <button onClick={() => setSubmitted(true)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", padding: "0.9rem", background: "rgba(100,170,255,0.1)", border: "1px solid rgba(100,170,255,0.25)", cursor: "pointer", fontSize: "9px", letterSpacing: "0.3em", color: "rgba(100,170,255,0.8)", fontFamily: FONT, fontWeight: 300, textTransform: "uppercase", transition: "all 0.3s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(100,170,255,0.18)"; e.currentTarget.style.borderColor = "rgba(100,170,255,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(100,170,255,0.1)"; e.currentTarget.style.borderColor = "rgba(100,170,255,0.25)"; }}>
                  Send Enquiry <Send size={12} strokeWidth={1.5} />
                </button>
              </div>
            )}

            {/* Locations */}
            <div style={{ marginTop: "2.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.055)" }}>
              <p style={{ ...labelStyle(), marginBottom: "1.25rem", fontSize: "8px" }}>Global Locations</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { city: "Kuala Lumpur", detail: "Level 23, Menara TH · Jalan Sultan Ismail" },
                  { city: "Dhaka", detail: "Gulshan Avenue · Dhaka 1212" },
                ].map(loc => (
                  <div key={loc.city}>
                    <span style={{ fontSize: "11px", color: "rgba(240,242,248,0.5)", fontFamily: FONT, fontWeight: 300 }}>{loc.city}</span>
                    <p style={{ fontSize: "10px", color: "rgba(240,242,248,0.5)", fontFamily: FONT, fontWeight: 300 }}>{loc.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────────────────────
function FooterSection() {
  const footerRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = footerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { setRevealed(entry.isIntersecting); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "WORK", id: "work" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <div ref={footerRef} style={{ position: "relative", zIndex: 1, overflow: "hidden" }}>
      <motion.div
        initial={{ y: 0 }}
        animate={revealed ? { y: "-100%" } : { y: 0 }}
        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        style={{ position: "absolute", inset: 0, zIndex: 10, background: "#0a0a0f" }}
      />
      <footer style={{ position: "relative", zIndex: 1, background: "#f5f5f5", color: "#1a1a1a", fontFamily: `'Playfair Display', Georgia, serif` }}>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "5rem", paddingBottom: "2.5rem", paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD }}>
          <h2 style={{ fontSize: "clamp(14px, 2.5vw, 28px)", letterSpacing: "0.55em", fontWeight: 400, color: "#1a1a1a", fontFamily: `'Playfair Display', Georgia, serif`, textTransform: "uppercase", margin: 0, whiteSpace: "nowrap" }}>
            TECHNOHAVEN
          </h2>
        </div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "clamp(1.5rem, 4vw, 3.5rem)", paddingBottom: "2.5rem", paddingLeft: SIDE_PAD, paddingRight: SIDE_PAD, flexWrap: "wrap" }}>
          {navLinks.map(l => (
            <button key={l.label}
              onClick={() => { const el = document.getElementById(l.id); el ? el.scrollIntoView({ behavior: "smooth" }) : window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: "10px", letterSpacing: "0.25em", color: "#555", fontFamily: FONT, fontWeight: 500, textTransform: "uppercase", transition: "color 0.3s", padding: "0.25rem 0" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#000")}
              onMouseLeave={e => (e.currentTarget.style.color = "#555")}
            >{l.label}</button>
          ))}
        </div>
        <div style={{ height: "1px", background: "#ddd", margin: `0 ${SIDE_PAD}` }} />
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: `1.25rem ${SIDE_PAD}`, flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#888", fontFamily: FONT, fontWeight: 400, margin: 0, textTransform: "uppercase" }}>
            © 2026 Technohaven · All Rights Reserved
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {[
              <svg key="ig" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>,
              <svg key="yt" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 001.94-2A29 29 0 0023 12a29 29 0 00-.46-5.58z" /><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" /></svg>,
              <svg key="fb" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>,
              <svg key="li" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>,
            ].map((icon, i) => (
              <a key={i} href="#" style={{ color: "#888", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#333")}
                onMouseLeave={e => (e.currentTarget.style.color = "#888")}
              >{icon}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

// ─── Page Root ─────────────────────────────────────────────────────────────────
export default function TechnohavenLanding() {
  const [ready, setReady] = useState(false);

  return (
    <>
      <NetworkCanvas />

      <AnimatePresence>
        {!ready && <Preloader onComplete={() => setReady(true)} />}
      </AnimatePresence>

      <div style={{ background: "transparent", color: "#EEEEF2", fontFamily: FONT, overflowX: "hidden" }}>
        {ready && <ShootingStarCursor />}

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: ready ? 1 : 0 }} transition={{ duration: 0.9, ease: "easeOut" }}>
        <Navbar />
        <HeroSection />

        {/* About: Dual-Hub Story */}
        <StoryPanel
          id="about"
          number="01" label="The Engine"
          heading={"Technohaven\nDhaka"}
          body="35 years of engineering gravity. Deep-tech, systemic infrastructure, and foundational security — the bedrock upon which every deployment stands. Where institutional-grade code is forged at scale."
          bullets={["Systemic Infrastructure Design", "Foundational Security Architecture", "Deep-Tech R&D Laboratory", "120+ Senior Engineers"]}
          image={IMG_SERVER} imageLeft={false}
        />

        <StoryPanel
          number="02" label="The Architect"
          heading={"Technohaven\nMalaysia"}
          body="Rapid commercial deployment, agile frontends, and premium user experiences. The bridge between engineering gravity and market velocity — built for the speed of Southeast Asian commerce."
          bullets={["Commercial Deployment Velocity", "Premium UX Engineering", "Agile Frontend Architecture", "ASEAN Market Access"]}
          image={IMG_KL} imageLeft={true}
        />

        <StoryPanel
          number="03" label="The Synthesis"
          heading={"Flawless\nIntegration"}
          body="Malaysia provides premium market access and commercial agility. Dhaka provides the technological gravity and engineering depth. Together — a singular, unified force delivering complete digital transformation without compromise."
          bullets={["Unified Delivery Pipeline", "Cross-Hub Quality Assurance", "24/7 Follow-the-Sun Support", "Cost-Optimized Excellence"]}
          image={IMG_TEAM} imageLeft={false}
        />

        <AboutSubSection />
        <MarqueeDivider text="Engineering Excellence · Digital Transformation · Future-Proof Architecture" />
        <TechStackSection />
        <RevealLine />
        <ServicesMatrixSection />
        <MarqueeDivider text="Project-Based · Product-Based · Enterprise-Grade · Bespoke Solutions" reverse />
        <ServicesSection />
        <RevealLine />
        <CaseStudiesSection />
        <RevealLine />
        <ContactSection />
        <FooterSection />
      </motion.div>
    </div>
    </>
  );
}
