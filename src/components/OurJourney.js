import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faIndustry, 
  faSnowflake, 
  faTint,
  faWater,
  faTemperatureHigh,
  faGears,
  faIndustryAlt,
  faFaucet
} from '@fortawesome/free-solid-svg-icons';
import styles from './OurJourney.module.css';

export default function OurJourney({ scrollToSection }) {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (section) => {
    setActiveSection(section);
    scrollToSection(section);
  };

  const products = [
    { 
      icon: faIndustry, 
      name: 'Industrial Boilers'
    },
    { 
      icon: faTemperatureHigh, 
      name: 'Commercial Boilers'
    },
    { 
      icon: faSnowflake, 
      name: 'Industrial Cooling'
    },
    { 
      icon: faGears, 
      name: 'HVAC Systems'
    },
    { 
      icon: faTint, 
      name: 'RO Plants'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className={styles.container}
    >
    

      <motion.div className={styles.ourJourney}>
        <h2>About Us</h2>
        <p>
          ChemTech Solutions, led by Chief Executive Officer Muhammad Saeed Akhtar, is a pioneering force 
          in industrial chemical and engineering solutions. Since our establishment, we have been at the 
          forefront of delivering cutting-edge technology solutions for industrial processes, specializing 
          in boiler systems, cooling solutions, and water treatment technologies.
        </p>

        <div className={styles.services}>
          {products.map((product, index) => (
            <motion.div
              whileHover={{ scale: 1.05 }}
              className={styles.serviceItem}
              key={index}
            >
              <FontAwesomeIcon 
                icon={product.icon} 
                className={styles.serviceIcon} 
              />
              <div className={styles.serviceName}>{product.name}</div>
            </motion.div>
          ))}
        </div>

        <p>
          At ChemTech Solutions, we take pride in our team of highly skilled engineers, chemists, 
          and technical experts. Our state-of-the-art facilities and dedication to research and 
          development ensure that we remain at the cutting edge of technological advancement in our field, 
          delivering superior solutions that meet the evolving needs of modern industry.
        </p>
      </motion.div>
    </motion.div>
  );
}