import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteConfig } from '@/content/site';
import { Mail, Linkedin, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string, isRoute: boolean = false) => {
    if (href === '/') {
      if (location.pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        navigate('/');
        window.scrollTo(0, 0);
      }
      return;
    }

    if (isRoute) {
      navigate(href);
      window.scrollTo(0, 0);
    } else {
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#071A2B] text-white pt-12 pb-10 border-t border-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          {/* Left Brand */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#E6F9FC] text-[#08C4D4] border border-[#08C4D4]/40 flex items-center justify-center font-mono text-sm font-black">
              AV
            </div>
            <span className="font-sans text-base font-extrabold tracking-tight text-white uppercase">
              ANGELO VENCIO
            </span>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap items-center gap-6 font-sans text-xs font-bold text-gray-400 uppercase tracking-wider">
            <button onClick={() => handleNavClick('/', true)} className="hover:text-[#08C4D4] transition-colors">Home</button>
            <button onClick={() => handleNavClick('/works', true)} className="hover:text-[#08C4D4] transition-colors">Work</button>
            <button onClick={() => handleNavClick('#capabilities')} className="hover:text-[#08C4D4] transition-colors">Solution</button>
            <button onClick={() => handleNavClick('#about')} className="hover:text-[#08C4D4] transition-colors">About</button>
            <button onClick={() => handleNavClick('#contact')} className="hover:text-[#08C4D4] transition-colors">Contact</button>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4 text-gray-400">
            <a href={siteConfig.contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#08C4D4] transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-[#08C4D4] transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-[#08C4D4] transition-colors" aria-label="Website">
              <Globe className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 font-mono gap-2">
          <p>© 2025 Angelo Vencio. All rights reserved.</p>
          <p>AI Creative Systems / eCommerce / Growth</p>
        </div>

      </div>
    </footer>
  );
};
