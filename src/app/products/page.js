"use client";
import Image from 'next/image';
import styles from './products.module.css';
import Service from '../../components/Service';

export default function OurServices() {
  return (
    <div className={styles.ourServicesPage}>
      <div className={styles.imageContainer}>
        <Image
          src="/boiler.png"
          alt="Our Services"
          className={styles.serviceImage}
          width={1920}
          height={800}
          priority
          loading="eager"
        />
      </div>
      <div id="Service" className={styles.sec2}>
        <Service />
      </div>
    </div>
  );
}
