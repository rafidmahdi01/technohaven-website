import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown, Zap } from "lucide-react";

const navItems = [
  {
    label: "About Us",
    path: "/about",
    children: [
      { label: "Our Story", path: "/about#story" },
      { label: "Team", path: "/about#team" },
      { label: "Mission", path: "/about#mission" },
    ],
  },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Creative & Digital Experience", path: "/services#class1-a" },
      { label: "Operational Software & Automation", path: "/services#class1-b" },
      { label: "Cybersecurity & Compliance", path: "/services#class1-c" },
      { label: "High-End Infrastructure", path: "/services#class1-d" },
      { label: "Real Estate & PropTech", path: "/services#class2-a" },
      { label: "Wealth & Asset Management", path: "/services#class2-b" },
      { label: "Lifestyle & Membership", path: "/services#class2-c" },
      { label: "Corporate & Professional", path: "/services#class2-d" },
      { label: "Retail & Operations", path: "/services#class2-e" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
    children: [
      { label: "Locations", path: "/contact#locations" },
      { label: "Support Form", path: "/contact#support" },
      { label: "Email Us", path: "/contact#email" },
    ],
  },
  {
    label: "Special Offer",
    path: "/landing",
    children: [
      { label: "Our Offer", path: "/landing#offer" },
      { label: "Testimonials", path: "/landing#testimonials" },
      { label: "Get Started", path: "/landing#lead" },
    ],
  },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070d1f]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <span className="text-white font-semibold tracking-wide text-lg">
              Nexus<span className="text-blue-400">Tech</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" ref={dropdownRef}>
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                location.pathname === "/"
                  ? "text-blue-400 bg-blue-500/10"
                  : "text-gray-300 hover:text-white hover:bg-white/5"
              }`}
            >
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm transition-colors ${
                    location.pathname === item.path
                      ? "text-blue-400 bg-blue-500/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform ${activeDropdown === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {activeDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 w-64 bg-[#0f172a] border border-white/10 rounded-xl shadow-2xl shadow-black/50 py-2 z-50"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block px-4 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/landing#lead"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm hover:from-blue-500 hover:to-violet-500 transition-all shadow-lg shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#0a1628] border-t border-white/10 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            <Link to="/" className="block px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-sm">
              Home
            </Link>
            {navItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-lg text-white text-sm font-medium"
                >
                  {item.label}
                </Link>
                <div className="pl-4 space-y-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.label}
                      to={child.path}
                      className="block px-3 py-1.5 rounded-lg text-gray-400 hover:text-white text-sm"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-3">
              <Link
                to="/landing#lead"
                className="block w-full text-center px-5 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
