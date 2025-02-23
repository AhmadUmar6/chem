'use client'
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoColumn}>
          <img src="/logo.png" alt="Company Logo" className={styles.logo} />
        </div>  
        <div className={styles.siteMap}>
          <h3>SITE MAP</h3>
          <ul>
            {['About Us', 'Services', 'Contact Us'].map((item) => (
              <li key={item}>
                <Link href={`/${item.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.contact}>
          <h3>CONTACT US</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> P-8, Above Diverse Properties, Opposite Guttwala Commercial Hub, Main Sheikhupura Road, Faisalabad </p>
          <p><FontAwesomeIcon icon={faPhone} /> 03008690577</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> corporate@chemtechsolutions.co</p>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>&copy; {currentYear ? currentYear : 'Loading...'} ChemTech Solutions. All rights reserved.</p>
        <p>Developed by: <a href="https://ahmadumar.space" target="_blank" rel="noopener noreferrer" className={styles.developerLink}>AUF Devs</a></p>
      </div>
    </footer>
  );
}

