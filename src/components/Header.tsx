import { useState, useEffect, useRef } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { fadeInUp, staggerAnimation } from '../utils/animations';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Animate header entrance on mount
    if (headerRef.current) {
      fadeInUp(headerRef.current, { duration: 0.8, delay: 0.2 });
    }
    
    // Animate logo
    if (logoRef.current) {
      fadeInUp(logoRef.current, { duration: 0.6, delay: 0.4 });
    }
    
    // Animate navigation items
    if (navRef.current) {
      const navItems = Array.from(navRef.current.querySelectorAll('a'));
      staggerAnimation(navItems, { delay: 0.6, stagger: 0.1 });
    }
    
    // Animate mobile button
    if (mobileButtonRef.current) {
      fadeInUp(mobileButtonRef.current, { duration: 0.6, delay: 0.8 });
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Education',
    href: '#education'
  }, {
    name: 'Knowledge',
    href: '#knowledge'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header ref={headerRef} className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a ref={logoRef} href="#" className="text-xl font-bold text-pink-400 dark:text-pink-300">
          Welcome to Min-Ting Tu's Portfolio
        </a>
        {/* Desktop Navigation */}
        <nav ref={navRef} className="hidden md:flex space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
              {item.name}
            </a>)}
          <a href="#contact" className="text-white px-4 py-2 rounded-md bg-pink-400 dark:bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-600 transition-colors">
            Get in Touch
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button ref={mobileButtonRef} className="md:hidden text-gray-600 dark:text-gray-300" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white dark:bg-gray-800 px-4 py-4 shadow-md">
          {navItems.map(item => <a key={item.name} href={item.href} className="block py-2 text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-colors" onClick={toggleMenu}>
              {item.name}
            </a>)}
          <a href="#contact" className="block py-2 mt-2 text-white px-4 rounded-md bg-pink-400 dark:bg-pink-500 hover:bg-pink-500 dark:hover:bg-pink-600 transition-colors text-center" onClick={toggleMenu}>
            Get in Touch
          </a>
        </nav>}
    </header>;
};