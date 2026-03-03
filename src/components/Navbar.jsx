import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header>
      <nav className="nav-container">
        <div className="logo">LX<span>.</span></div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? "nav-links active" : "nav-links"}>
          <li><a href="#sobre" onClick={closeMenu}>Sobre Mim</a></li>
          <li><a href="#tecnologias" onClick={closeMenu}>Tecnologias</a></li>
          <li><a href="#projetos" onClick={closeMenu}>Projetos</a></li>
          <li><a href="#contato" onClick={closeMenu}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}