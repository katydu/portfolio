import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  return <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-blue-600">
          Alex Chen
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(item => <a key={item.name} href={item.href} className="text-gray-600 hover:text-blue-600 transition-colors">
              {item.name}
            </a>)}
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Get in Touch
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-600" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMenuOpen && <nav className="md:hidden bg-white px-4 py-4 shadow-md">
          {navItems.map(item => <a key={item.name} href={item.href} className="block py-2 text-gray-600 hover:text-blue-600 transition-colors" onClick={toggleMenu}>
              {item.name}
            </a>)}
          <a href="#contact" className="block py-2 mt-2 bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 transition-colors text-center" onClick={toggleMenu}>
            Get in Touch
          </a>
        </nav>}
    </header>;
};