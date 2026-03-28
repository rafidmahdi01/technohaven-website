import { Link } from "react-router";
import { useRef, useEffect } from "react";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const curtainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!footerRef.current || !curtainRef.current) return;

    const onScroll = () => {
      const rect = footerRef.current!.getBoundingClientRect();
      const vh = window.innerHeight;
      // Calculate progress: 0 when footer is at bottom of viewport, 1 when fully scrolled past top
      const progress = Math.min(1, Math.max(0, (vh - rect.top) / rect.height));
      curtainRef.current!.style.transform = `translateY(${-progress * 100}%)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#050b18] border-t border-white/10 relative overflow-hidden">
      {/* Scroll-driven curtain reveal */}
      <div
        ref={curtainRef}
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 10,
          background: "#0a0a0f",
          willChange: "transform",
        }}
      />
      
      {/* Footer content */}
      <div className="relative z-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/technohaven_logo.png" alt="Technohaven Malaysia Logo" className="h-8 w-auto" />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              TECHNOHAVEN MALAYSIA - Enterprise technology solutions engineered for Malaysia's most ambitious enterprises.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Linkedin size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Twitter size={15} />
              </a>
              <a href="#" className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <Github size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Creative & Digital", path: "/services#class1-a" },
                { label: "Software & Automation", path: "/services#class1-b" },
                { label: "Cybersecurity", path: "/services#class1-c" },
                { label: "Cloud Infrastructure", path: "/services#class1-d" },
                { label: "PropTech Solutions", path: "/services#class2-a" },
                { label: "Wealth Management Tech", path: "/services#class2-b" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", path: "/#about" },
                { label: "Our Values", path: "/#our-values" },
                { label: "Team", path: "/#team" },
                { label: "Mission", path: "/#mission" },
                { label: "Special Offer", path: "/landing" },
                { label: "Testimonials", path: "/landing#testimonials" },
              ].map((item) => (
                <li key={item.label}>
                  <Link to={item.path} className="text-gray-500 hover:text-gray-300 text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-sm font-semibold mb-4 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                <span className="text-gray-500 text-sm">123 Tech Avenue, Innovation District, Singapore 018960</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-blue-400 shrink-0" />
                <a href="tel:+6561234567" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">+65 6123 4567</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-blue-400 shrink-0" />
                <a href="mailto:hello@nexustech.sg" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">hello@nexustech.sg</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm">© 2026 Technohaven Malaysia. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
}
