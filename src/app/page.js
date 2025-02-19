'use client'
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import Maps from '../components/Maps';
import styles from './page.module.css';

const Section = ({ children, className = '' }) => (
  <motion.section
    initial={{ opacity: 0, y: 0 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className={`${styles.section} ${className}`}
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/hero3.png"
            alt="Background"
            fill
            style={{ objectFit: 'cover', filter: 'blur(1px)', WebkitBackdropFilter: 'blur(4px)', backdropFilter: 'blur(4px)' }}
            quality={90}
            priority={true}
            loading="lazy" // Changed from "eager" to "lazy" for quicker loading
          />
        </div>
        <div className={styles.heroText}>
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className={styles.headerTitle}
          >
            Chemtech Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.headerSubtitle}
          >
            Aiming to become one of the leading water treatment companies in Pakistan.
          </motion.p>
        </div>
      </header>

      <Section className={styles.aboutSection}>
        <div className={styles.aboutContainer}>
          <div className={styles.leftBox}>
            <h2 className={styles.sectionTitle2}>We aspire to deliver exceptional water treatment solutions that transform the quality of life for our clients and communities.</h2>
            <Link href="/about-us" className={styles.readMoreLink}>
              Read More <FaChevronRight />
            </Link>
          </div>
          <div className={styles.rightText}>
            <p>Our dedication to superior water treatment technology and unparalleled customer service has established us as a trusted leader in Pakistan's environmental solutions sector. We take pride in our ability to deliver cutting-edge water treatment systems while fostering employee growth.</p>
          </div>
        </div>
      </Section>

      <Section className={styles.servicesSection}>
        <div className={styles.servicesContainer}>
          <h2 className={styles.sectionTitle}>Services We Provide</h2>
          <div className={styles.servicesGrid}>
            <motion.div 
              className={styles.serviceItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.serviceContent}>
                <h3>Chemical Solutions</h3>
                <div className={styles.serviceLine}></div>
                <p>Supplying environment friendly chemicals for boilers, cooling towers, RO Plants and Close circuit Systems.</p>
              </div>
            </motion.div>
            <motion.div 
              className={styles.serviceItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.serviceContent}>
                <h3>Testing & Monitoring</h3>
                <div className={styles.serviceLine}></div>
                <p>Providing services for testing and monitoring of utilities plants.</p>
              </div>
            </motion.div>
            <motion.div 
              className={styles.serviceItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.serviceContent}>
                <h3>Energy Audits</h3>
                <div className={styles.serviceLine}></div>
                <p>Energy Audits of the plants and Utilities areas, identifying cost/energy saving projects.</p>
              </div>
            </motion.div>
            <motion.div 
              className={styles.serviceItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.serviceContent}>
                <h3>Plant Consultancy</h3>
                <div className={styles.serviceLine}></div>
                <p>Providing consultancy during/for construction, economization, rationalization of plants.</p>
              </div>
            </motion.div>
            <motion.div 
              className={styles.serviceItem}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <div className={styles.serviceContent}>
                <h3>Feasibility Studies</h3>
                <div className={styles.serviceLine}></div>
                <p>Feasibility studies of power plants and utilities areas.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className={styles.contactSection}>
        <div className={styles.contactContainer}>
          <div className={styles.contactContent}>
            <h2 className={styles.sectionTitle}>Get In Touch</h2>
          </div>
          <div className={styles.mapContainer}>
            <Maps />
          </div>
        </div>
      </Section>
    </div>
  );
}
