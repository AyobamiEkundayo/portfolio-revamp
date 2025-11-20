import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/cv', label: 'CV' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-elegant py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
          <Link to="/" className="hover:scale-105 transition-transform duration-300">
            <Logo size="md" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-all duration-300 relative group ${
                  isActive(link.to) 
                    ? 'text-primary font-semibold' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  isActive(link.to) ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            <Link 
              to="/contact" 
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold
                       hover:shadow-elegant transition-all hover:scale-105 hover:bg-primary/90"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-30 md:hidden transition-all duration-500 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setMobileMenuOpen(false)}
        />
        <div className="relative h-full flex flex-col items-center justify-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-2xl font-semibold transition-all duration-300 ${
                isActive(link.to) ? 'text-primary scale-110' : 'text-foreground/70'
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: mobileMenuOpen ? 'slideUp 0.5s ease-out forwards' : 'none'
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold
                     hover:shadow-elegant transition-all"
            style={{
              animationDelay: `${navLinks.length * 100}ms`,
              animation: mobileMenuOpen ? 'slideUp 0.5s ease-out forwards' : 'none'
            }}
          >
            Get in touch
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
