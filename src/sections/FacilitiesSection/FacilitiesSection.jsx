import React from 'react';
import styles from './FacilitiesSection.module.css';


import auditoriumImg from '../../assets/sabr-auditorium.png';
import cbtRoomsImg from '../../assets/cbt-rooms.png';

export default function FacilitiesSection() {
  return (
    <section className={styles.facilitiesSection}>
      <div className={styles.container}>
        
        
        <div className={styles.imageBanner}>
          <img src={auditoriumImg} alt="Sabr Auditorium" className={styles.bannerImage} />
        </div>

        
        <div className={styles.textContent}>
          <h2>Concepts. Clarity. Confidence.</h2>
          <p className={styles.description}>
            With <strong>Dr. Zainab Vora</strong>, learning is not about memorizing more—it's about understanding better. Complex topics are simplified with integrated, system-wise learning across all 19 subjects.
          </p>
          
          <ul className={styles.checkList}>
            <li>
              <span className={styles.checkIcon}>✔</span> 
              <div>
                High-yield focus for NEET PG, INI-CET & FMGE
                <ul className={styles.subList}>
                  <li><span className={styles.checkIcon}>✔</span> System-wise structured preparation</li>
                </ul>
              </div>
            </li>
            <li>
              <span className={styles.checkIcon}>✔</span> 
              Built for retention, recall & real exam pressure
            </li>
          </ul>

          <p className={styles.footerText}>
            This is not just teaching. <span className={styles.highlightText}>This is the BTR approach.</span>
          </p>
        </div>

        
        <div className={styles.imageBanner}>
          <img src={cbtRoomsImg} alt="CBT Rooms" className={styles.bannerImage} />
        </div>

      </div>
    </section>
  );
}
