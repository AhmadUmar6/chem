"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FaPhoneAlt } from 'react-icons/fa';
import styles from './Header.module.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <img src="/logo.png" alt="CMT advocates" className={styles.logo} />
        </Link>
      </div>
      <nav className={styles.desktopNav}>
        <Link href="/">Home</Link>
        {['About Us', 'Products', 'Contact Us'].map((item) => (
          <Link key={item} href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
            {item}
          </Link>
        ))}
      </nav>
      <div 
        className={styles.callNowWrapper} 
        onMouseEnter={toggleDropdown} 
        onMouseLeave={toggleDropdown}
      >
        <button className={styles.callNow}>
          <FaPhoneAlt className={styles.callIcon} /> Call Now
        </button>
        {dropdownOpen && (
          <div className={styles.dropdown}>
            <div>Faisalabad:</div>
            <a href="tel:+92512855890-2">+92 300 8690577</a>
          </div>
        )}
      </div>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle menu">
        <div className={`${styles.hamburger} ${menuOpen ? styles.open : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
      {menuOpen && (
        <nav className={styles.mobileNav}>
          {['About Us', 'Products', 'Contact Us'].map((item) => (
            <Link 
              key={item} 
              href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
              onClick={toggleMenu}
            >
              {item}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
