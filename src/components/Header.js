import React, {useState} from 'react'

const Header = ({ activeLink, setActiveLink }) => {

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setTimeout(() => {
        document.querySelector(`#section${index}`).scrollIntoView({ behavior: 'smooth' });
      }, 1000);
  };

  return (
    <nav className="navbar">
      <ul className="link-group">
        <li className={`link ${activeLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}><a href="#section0">home</a></li>
        <li className={`link ${activeLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}><a href="#section1">my projects</a></li>
        <li className={`link ${activeLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}><a href="#section2">about me</a></li>
        <li className={`link ${activeLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}><a href="#section3">contact me</a></li>
      </ul>
    </nav>
  );
}

export default Header;

