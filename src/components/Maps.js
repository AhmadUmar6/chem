import React from 'react';
import styles from './Maps.module.css';

export default function Maps() {
  return (
    <div className={styles.mapsContainer}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d839.0635513867524!2d73.19274132438306!3d31.46627003294934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39226fb28bcea623%3A0x2136e9daaf79c116!2sDiverse%20Properties!5e0!3m2!1sen!2s!4v1739545978268!5m2!1sen!2s"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.address}>
          <h3>Chemtech Solutions Private Limited</h3>
          <p>P-8, Above Diverse Properties, Main Sheikhupura Road, Faisalabad.</p>
        </div>
      </div>
    </div>
  );
}
