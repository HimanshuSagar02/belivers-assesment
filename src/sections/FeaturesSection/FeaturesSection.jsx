import React, { useState } from 'react';
import styles from './FeaturesSection.module.css';

import img1 from '../../assets/feature-cbt.png';
import img2 from '../../assets/feature-campus.png';
import img3 from '../../assets/feature-classroom.png';

const featureList = [
  {
    id: 1,
    num: "01",
    title: "A System That Keeps You on Track",
    description: "Even the best teaching needs the right structure to deliver results. That's where the bootcamp system supports you.",
    image: img1
  },
  {
    id: 2,
    num: "02",
    title: "An Environment Built for Focus",
    description: "At the Vidya Jeevan Experience Centre, everything is designed to help you stay distraction-free, consistent, and fully focused on your goal.",
    image: img2
  },
  {
    id: 3,
    num: "03",
    title: "Structured, Disciplined Preparation",
    description: "A clear plan, regular testing, and continuous feedback—so you always know where you stand and what to improve.",
    image: img3
  }
];

export default function FeaturesSection() {
  const [activeId, setActiveId] = useState(3); 
  const activeFeature = featureList.find(f => f.id === activeId);

  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        
        
        <div className={styles.header}>
          <span className={styles.sectionLabel}>— WHAT'S INSIDE</span>
          <h2 className={styles.mainTitle}>Why Students Prefer CoreBTR Bootcamp</h2>
          <p className={styles.headerDesc}>
            Great preparation is built on both the right learning and the right environment. At coreBTR Bootcamp, structured teaching goes hand in hand with discipline, guidance, and a system designed to keep you consistent. That's what makes the experience at Vidya Jeevan Experience Centre different—it's not just a venue but a thoughtfully built ecosystem shaped by the journeys of thousands of students.
          </p>
        </div>

        
        <div className={styles.gridContainer}>
          
          
          <div className={styles.listColumn}>
            {featureList.map((feature) => (
              <div 
                key={feature.id}
                className={`${styles.listItem} ${activeId === feature.id ? styles.activeItem : ''}`}
                onClick={() => setActiveId(feature.id)}
              >
                <div className={styles.numberBadge}>{feature.num}</div>
                <div className={styles.itemContent}>
                  <div className={styles.itemTitleRow}>
                    <h3>{feature.title}</h3>
                    <span className={styles.arrow}>→</span>
                  </div>
                  <p className={styles.itemDesc}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <img src={activeFeature.image} alt={activeFeature.title} className={styles.mainImage} />
              
              
              <div className={styles.imageOverlay}>
                <div className={styles.overlayBadge}>{activeFeature.num}</div>
                <span className={styles.overlayTitle}>{activeFeature.title}</span>
              </div>
              
              
              <div className={styles.carouselDots}>
                {featureList.map(f => (
                  <button 
                    key={f.id} 
                    className={`${styles.dot} ${activeId === f.id ? styles.activeDot : ''}`}
                    onClick={() => setActiveId(f.id)}
                    aria-label={`Go to slide ${f.num}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
