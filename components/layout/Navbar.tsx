import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { ConsultationModal } from '../ui/ConsultationModal';

const navLinks = [
  { href: '/', label: 'HOME', isRoute: true },
  { href: '/works', label: 'WORK', isRoute: true },
  { href: '#capabilities', label: 'SOLUTION', isRoute: false },
  { href: '#about', label: 'ABOUT', isRoute: false },
  { href: '#contact', label: 'CONTACT', isRoute: false },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('HOME');

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname === '/works') {
      setActiveSection('WORK');
      return;
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 15);

      if (location.pathname !== '/') return;

      const scrollPos = window.scrollY + 140;

      const sections = [
        { id: 'contact', label: 'CONTACT' },
        { id: 'about', label: 'ABOUT' },
        { id: 'capabilities', label: 'SOLUTION' },
        { id: 'challenge', label: 'SOLUTION' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section.label);
            return;
          }
        }
      }

      if (window.scrollY < 200) {
        setActiveSection('HOME');
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (link: { href: string; label: string; isRoute: boolean }) => {
    setMobileMenuOpen(false);
    setActiveSection(link.label);

    if (link.href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo(0, 0);
      }
      return;
    }

    if (link.isRoute) {
      navigate(link.href);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        navigate(`/${link.href}`);
      } else {
        const id = link.href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -70;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-16 flex items-center transition-all duration-150 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-xs'
            : 'bg-white border-b border-gray-100/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            
            {/* Logo Mark (Left) */}
            <Link
              to="/"
              onClick={() => {
                setActiveSection('HOME');
                if (location.pathname === '/') {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="flex items-center gap-2 sm:gap-3 group"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E6F9FC] text-[#08C4D4] border border-[#08C4D4]/40 flex items-center justify-center font-mono text-xs sm:text-sm font-black group-hover:bg-[#08C4D4] group-hover:text-white transition-all shadow-xs shrink-0">
                AV
              </div>
              <span className="font-sans text-xs sm:text-base font-extrabold tracking-tight text-[#071A2B] uppercase group-hover:text-[#08C4D4] transition-colors duration-100 whitespace-nowrap">
                ANGELO VENCIO
              </span>
            </Link>

            {/* Nav Links (Center) — Cyan underline only stays on active section (no line animation on mouse hover) */}
            <nav className="hidden md:flex items-center gap-7 relative py-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.label;

                return (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link)}
                    className={`font-sans text-xs font-bold tracking-wider py-1.5 px-1 transition-colors duration-150 relative uppercase ${
                      isActive
                        ? 'text-[#08C4D4] font-extrabold'
                        : 'text-gray-600 hover:text-[#08C4D4]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#08C4D4] rounded-full"
                        transition={{ type: 'spring', stiffness: 600, damping: 35 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right Button: Book Consultation */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold hover:bg-[#00AEBE] hover:shadow-md active:scale-95 transition-all duration-150"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setModalOpen(true)}
                className="px-3.5 py-1.5 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold"
              >
                Consultation
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#071A2B] hover:text-[#08C4D4] focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white/98 backdrop-blur-xl md:hidden pt-20 px-6 flex flex-col justify-between pb-10 border-b border-gray-100 animate-in fade-in duration-150">
          <div className="space-y-6">
            <div className="font-mono text-xs text-gray-400 tracking-widest uppercase mb-4 pb-2 border-b border-gray-100">
              Navigation
            </div>
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className={`block text-left font-sans text-xl font-bold transition-colors w-full uppercase py-1 ${
                  activeSection === link.label ? 'text-[#08C4D4]' : 'text-[#071A2B] hover:text-[#08C4D4]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="space-y-4 pt-6 border-t border-gray-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setModalOpen(true);
              }}
              className="w-full text-center py-3 rounded-full bg-[#08C4D4] text-white font-sans text-xs font-bold tracking-wide"
            >
              Book a Consultation →
            </button>
          </div>
        </div>
      )}

      {/* Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};
