import React from 'react';
import styles from './FooterSection.module.css';
import logo from '../../assets/logo.png';

export default function FooterSection() {
  return (
    <footer className={styles.footerWrapper}>
      
      
      <div className={styles.container}>
        <div className={styles.parkingAlert}>
          <div className={styles.alertHeader}>
            <span className={styles.warningIcon}>⚠️</span>
            <h3>Parking Information</h3>
          </div>
          
          <div className={styles.alertContent}>
            <h4>No On-Campus Parking</h4>
            <p>Parking facilities are not available within the Vidya Jeevan premises.</p>
            
            <h4>Parking at Your Own Risk</h4>
            <p>Vehicles parked outside the premises are solely the responsibility of their owners. Vidya Jeevan, its management, and staff shall not be liable for any loss, theft, damage, or other incidents involving parked vehicles.</p>
          </div>
        </div>
      </div>

      
      <div className={styles.container}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaHeaderRow}>
            <div className={styles.line}></div>
            <span className={styles.ctaLabel}>JOIN THE BOOTCAMP</span>
            <div className={styles.line}></div>
          </div>
          
          <h2 className={styles.ctaTitle}>If you're ready to stop feeling lost and start seeing progress - this is where it begins.</h2>
          <p className={styles.ctaSubtitle}>Start Your Transformation with CoreBTR Bootcamp</p>
          
          <button className={styles.joinBtn}>Join the Bootcamp</button>
        </div>
      </div>

      
      <div className={styles.mainFooter}>
        <div className={`${styles.container} ${styles.footerGrid}`}>
          
          <div className={styles.footerLogoCol}>
            <img src={logo} alt="CoreBTR" className={styles.footerLogo} />
            <div className={styles.socialIcons}>
              
              <div className={styles.iconCircle}>in</div>
              <div className={styles.iconCircle}>yt</div>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Explore</h4>
            <a href="#">Home</a>
            <a href="#">Blogs</a>
            <a href="#">Reviews</a>
            <a href="#">Gallery</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Study Resources</h4>
            <a href="#">Workbooks & Notes</a>
            <a href="#">PYQs Book</a>
            <a href="#">CoreBTR Offline</a>
            <a href="#">CoreBTR Bootcamp</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Plans & Purchases</h4>
            <a href="#">Solo Plans</a>
            <a href="#">Group Plans</a>
            <a href="#">Shipping & Delivery</a>
            <a href="#">Cancellation & Refund</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Support</h4>
            <a href="#">Contact Us</a>
            <a href="#">FAQ's</a>
            <a href="#">Device Policy</a>
          </div>

          <div className={styles.footerCol}>
            <h4>Legal & Updates</h4>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Fair Usage Policy</a>
            <a href="#">Newsletter</a>
          </div>

        </div>
        
        <div className={styles.copyright}>
          <p>© 2026 <strong>CoreBTR</strong>. All rights reserved. | Designed & Managed By: <strong>Himanshu sagar</strong></p>
        </div>
      </div>
      
    </footer>
  );
}
