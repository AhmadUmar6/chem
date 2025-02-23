import React, { useState, useRef } from 'react';
import {
  FaFlask, FaTint, FaSnowflake, FaFilter,
  FaThermometerHalf, FaWrench, FaShieldAlt, FaWater,
  FaRecycle, FaIndustry, FaChevronDown, FaSearch
} from 'react-icons/fa';
import styles from './Service.module.css';

const products = {
  boilerRange: [
    { product: 'MK3103', function: 'All-in one, Neotannin & ammonia based, high performance for steam systems & RC with operating pressures ≤150 bars', icon: <FaThermometerHalf /> },
    { product: 'MK3105', function: 'All-in one, Neotannin & amines based, high performance for steam systems & RC with operating pressures ≤150 bars', icon: <FaThermometerHalf /> },
    { product: 'MK3124', function: 'All-in one, Neotannin based, high performance for steam systems with operating pressures ≤150 bars', icon: <FaThermometerHalf /> },
    { product: 'MK3135', function: 'Amines based RC treatment', icon: <FaFlask /> },
    { product: 'MK9133', function: 'Hot water antifoam', icon: <FaTint /> }
  ],
  coolingSystemRange: [
    { product: 'MK3201', function: 'Non-Oxidizing Biocide for industrial water treatment', icon: <FaIndustry /> },
    { product: 'MK3202', function: 'Non-Oxidizing Biocide for industrial water treatment', icon: <FaIndustry /> },
    { product: 'MK3204', function: 'Bromide based biocide', icon: <FaShieldAlt /> },
    { product: 'MK3205', function: 'Non-Oxidizing Biocide for industrial water treatment', icon: <FaIndustry /> },
    { product: 'MK3215', function: 'Multi-functional scale inhibitor, corrosion inhibitor and dispersant for cooling systems', icon: <FaSnowflake /> },
    { product: 'MK3220', function: 'Multi-functional scale inhibitor, corrosion inhibitor and dispersant for cooling systems', icon: <FaSnowflake /> },
    { product: 'MK3230', function: 'Non-ionic surfactant, Dispersant', icon: <FaWater /> },
    { product: 'MK3306', function: 'Multi-functional scale and corrosion inhibitor for primary and secondary urban closed cooling and/or heating systems', icon: <FaWrench /> },
    { product: 'MK3515', function: 'Liquid Grade Acidic Passivator and Cleaner', icon: <FaFlask /> }
  ],
  roRange: [
    { product: 'MK3701', function: 'Alkaline Multi-functional Antiscalant for Reverse Osmosis (RO)', icon: <FaFilter /> },
    { product: 'MK3702', function: 'Acidic Multi-functional Antiscalant for Reverse Osmosis (RO)', icon: <FaFilter /> },
    { product: 'MK3710', function: 'Alkaline, liquid cleaner for membrane filtration plants', icon: <FaRecycle /> },
    { product: 'MK3722', function: 'Acidic Multi-functional Antiscalant for Reverse Osmosis (RO)', icon: <FaFilter /> },
    { product: 'MK3725', function: 'Acidic Multi-functional Antiscalant for Reverse Osmosis (RO)', icon: <FaFilter /> },
    { product: 'MK3740', function: 'Filter aid Organic Polyelectrolyte', icon: <FaWater /> }
  ]
};

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProduct, setActiveProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const productsRef = useRef(null);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setActiveProduct(null);
    
    if (productsRef.current) {
      productsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleProductSelect = (category, index) => {
    const id = `${category}-${index}`;
    setActiveProduct(activeProduct === id ? null : id);
  };

  const handleRequestDocumentation = (e) => {
    e.stopPropagation(); // Prevent card from collapsing when clicking the button
    window.open('/details.pdf', '_blank');
  };

  const getCategoryTitle = (key) => {
    switch(key) {
      case 'boilerRange': return 'Servivap Boiler Range';
      case 'coolingSystemRange': return 'Servivap Cooling System Range';
      case 'roRange': return 'Servivap RO Range';
      default: return '';
    }
  };

  const filteredProducts = () => {
    const filtered = {};
    
    Object.entries(products).forEach(([category, list]) => {
      const filteredList = list.filter(item => 
        item.product.toLowerCase().includes(searchTerm.toLowerCase()) || 
        item.function.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (filteredList.length > 0) {
        filtered[category] = filteredList;
      }
    });
    
    return Object.keys(filtered).length > 0 ? filtered : products;
  };

  const renderProductCards = (categoryKey, productList) => {
    if (activeCategory !== 'all' && activeCategory !== categoryKey) return null;
    
    return (
      <div key={categoryKey} className={styles.categorySection}>
        <h2 className={styles.categoryTitle}>{getCategoryTitle(categoryKey)}</h2>
        <div className={styles.productGrid}>
          {productList.map((item, index) => {
            const id = `${categoryKey}-${index}`;
            const isActive = activeProduct === id;
            
            return (
              <div 
                key={id}
                className={`${styles.productCard} ${isActive ? styles.active : ''}`}
                onClick={() => handleProductSelect(categoryKey, index)}
              >
                <div className={styles.cardContent}>
                  <div className={styles.iconContainer}>
                    {React.cloneElement(item.icon, { className: styles.icon })}
                  </div>
                  <h3 className={styles.productCode}>{item.product}</h3>
                  <div className={styles.expandButton}>
                    <FaChevronDown className={`${styles.chevron} ${isActive ? styles.rotated : ''}`} />
                  </div>
                </div>
                
                {isActive && (
                  <div className={styles.detailsContainer}>
                    <p className={styles.productFunction}>{item.function}</p>
                    <button 
                      className={styles.requestButton}
                      onClick={handleRequestDocumentation}
                    >
                      Details
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const noResultsFound = searchTerm && Object.keys(filteredProducts()).length === 0;

  return (
    <div className={styles.productsSection}>
      <div className={styles.heroSection}>
        <div className={styles.heroContent}>
          <FaFlask className={styles.heroIcon} />
          <h1 className={styles.heroTitle}>ChemTech Solutions</h1>
          <p className={styles.heroSubtitle}>Advanced Chemical Products for Industry</p>
          
          <div className={styles.searchContainer}>
            <input 
              type="text" 
              placeholder="Search products..." 
              className={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className={styles.searchIcon} />
          </div>
        </div>
      </div>
      
      <div className={styles.categoryNav} ref={productsRef}>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'all' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All Products
        </button>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'boilerRange' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('boilerRange')}
        >
          Boiler Range
        </button>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'coolingSystemRange' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('coolingSystemRange')}
        >
          Cooling System Range
        </button>
        <button 
          className={`${styles.categoryButton} ${activeCategory === 'roRange' ? styles.active : ''}`}
          onClick={() => handleCategoryChange('roRange')}
        >
          RO Range
        </button>
      </div>
      
      <div className={styles.productsContainer}>
        {noResultsFound ? (
          <div className={styles.noResults}>
            <p>No products found matching "{searchTerm}"</p>
            <button 
              className={styles.resetButton}
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </button>
          </div>
        ) : (
          Object.entries(filteredProducts()).map(([category, list]) => 
            renderProductCards(category, list)
          )
        )}
      </div>
    </div>
  );
}