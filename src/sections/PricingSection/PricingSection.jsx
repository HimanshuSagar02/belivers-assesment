import React from 'react';
import styles from './PricingSection.module.css';

export default function PricingSection() {
  return (
    <section className={styles.pricingSection}>
      <div className={styles.container}>
        
        <div className={styles.cardsWrapper}>
          
          <div className={`${styles.card} ${styles.cardOrange}`}>
            <div className={styles.cardHeaderOrange}>
              <h3>Program 1</h3>
            </div>
            <p className={styles.cardSubtext}>Live Classes + Personal Cubicle with Desktop for CBT / self study</p>
            
            <ul className={styles.featureList}>
              <li><span>✔</span> Subject wise computer based test followed by live discussion</li>
              <li><span>✔</span> Grand Tests (every 15 days) followed by live discussion</li>
              <li><span>✔</span> Weekly doubt solving sessions</li>
              <li><span>✔</span> Daily Mini Tests on CBT Desktop</li>
              <li><span>✔</span> Personal Desktop access for self study</li>
            </ul>

            <div className={styles.priceContainer}>
              <p>Fees: <strong>Rs 37,000</strong></p>
            </div>
            
            <button className={`${styles.registerBtn} ${styles.btnOrange}`}>REGISTRATION CLOSED</button>
          </div>

          
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <div className={styles.cardHeaderBlue}>
              <h3>Program 2</h3>
            </div>
            <p className={styles.cardSubtext}>Relay Classes + Personal Cubicle for self study (No desktop)</p>
            
            <ul className={styles.featureList}>
              <li><span>✔</span> Subject wise computer based test on Desktop followed by discussion through relay</li>
              <li><span>✔</span> GT (every 15 days) followed by discussion through relay</li>
              <li><span>✔</span> Weekly doubt solving sessions through relay</li>
              <li><span>✔</span> Daily Mini Tests on own device</li>
              <li><span>✔</span> Personal cubicle space for self study (No desktop)</li>
            </ul>

            <div className={styles.priceContainer}>
              <p>Fees: <strong>Rs 32,000</strong></p>
            </div>
            
            <button className={`${styles.registerBtn} ${styles.btnBlue}`}>REGISTRATION CLOSED</button>
          </div>
        </div>

        
        <div className={styles.fcfsBanner}>
          <h3>Registrations will be on First come-first serve basis</h3>
          <p className={styles.yellowText}>Registration may close anytime without prior notice</p>
          <p className={styles.yellowText}>No refund / No transfer after registration</p>
        </div>

        <div className={styles.importantNotice}>
          <h4 className={styles.noticeTitle}>Important Notice</h4>
          <ul className={styles.noticeList}>
            <li>Seats cannot be cancelled or transferred to anyone, including friends.</li>
            <li>Seats cannot be shifted to any online plans.</li>
            <li>Registrations made using someone else's account will not be accepted.</li>
            <li>Registration will be accepted only your own account and name.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
