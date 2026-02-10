import { useMobileMenu } from '../../hooks/mobileMenu/mobileMenu';
import '../../styles/navbar/navbar.css';

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 w-full px-4 py-4 md:px-10 flex items-center justify-between z-50">
      <span className="nav-brand text-lg font-semibold relative z-10">
        Portfolio
      </span>
      
      {/* Desktop Links */}
      <div className="nav-links hidden md:flex gap-8 text-sm md:text-base relative z-1">
        <a href="#work" className="hover:opacity-70 transition">Work</a>
        <a href="#About" className="hover:opacity-70 transition">About</a>
        <a href="#contact" className="hover:opacity-70 transition">Contact</a>
      </div>
      
      {/* Hamburger Icon */}
      <button 
        onClick={toggleMenu}
        className="md:hidden relative z-50 w-6 h-5 flex flex-col justify-between cursor-pointer"
        aria-label="Toggle menu"
      >
        <span 
          className={`hamburger-line block w-full h-0.5 bg-white rounded transition-all duration-300 ${
            isOpen ? 'rotate-45 translate-y-2' : ''
          }`}
        ></span>
        <span 
          className={`hamburger-line block w-full h-0.5 bg-white rounded transition-all duration-300 ${
            isOpen ? 'opacity-0' : ''
          }`}
        ></span>
        <span 
          className={`hamburger-line block w-full h-0.5 bg-white rounded transition-all duration-300 ${
            isOpen ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></span>
      </button>

      {/* Mobile Menu */}
      <div 
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
        className={`md:hidden fixed inset-0 flex flex-col items-center justify-start gap-8 pt-24 transition-all duration-300 bg-[#090933]/30 backdrop-blur-md ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        id="mobileMenu"
      >
        <a href="#work" onClick={closeMenu} className="mobile-link text-white/85 hover:text-white hover:scale-105 transition-all text-2xl font-medium">Work</a>
        <a href="#About" onClick={closeMenu} className="mobile-link text-white/85 hover:text-white hover:scale-105 transition-all text-2xl font-medium">About</a>
        <a href="#contact" onClick={closeMenu} className="mobile-link text-white/85 hover:text-white hover:scale-105 transition-all text-2xl font-medium">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;