"use client";
import ContactForm from '../../components/ContactForm';
import Maps from '../../components/Maps';
import styles from './Contact.module.css';

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <div id="ContactForm" className={styles.formSection}>
        <ContactForm />
      </div>
      <div id='Maps' className={styles.mapSection}>
        <Maps />
      </div>
    </div>
  );
}