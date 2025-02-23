import React from 'react';
import styles from './ContactForm.module.css';
import { Phone, Mail, Clock } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1 className={styles.title}>Get in Touch</h1>
        <p className={styles.subtitle}>
          We're here to help with all your chemical solution needs. 
          Reach out to us through any of these channels.
        </p>
      </div>
      
      <div className={styles.rightSection}>
        <div className={styles.contactCard}>
          <div className={styles.contactItem}>
            <Phone className={styles.icon} size={24} />
            <div className={styles.contactText}>
              <h3>Phone</h3>
              <p>+92 300 8690577</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <Mail className={styles.icon} size={24} />
            <div className={styles.contactText}>
              <h3>Email</h3>
              <p>corporate@chemtechsolutions.co</p>
            </div>
          </div>

          <div className={styles.contactItem}>
            <Clock className={styles.icon} size={24} />
            <div className={styles.contactText}>
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
