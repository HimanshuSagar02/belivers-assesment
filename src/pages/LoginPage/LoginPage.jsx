import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

import sketchImage from '../../assets/vidya-jeevan-sketch.jpg';

export default function LoginPage() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.formSection}>
        <div className={styles.formWrapper}>
          <div className={styles.logoRow}>
            <Link to="/" className={styles.logoLink}>
              <h1 className={styles.logo}>coreBTR<sup>+</sup></h1>
            </Link>
          </div>
          
          <h2 className={styles.title}>Log in with Phone</h2>
          <p className={styles.subtitle}>Enter your phone number to receive OTP</p>

          <form className={styles.loginForm} onSubmit={(e) => e.preventDefault()}>
            <div className={styles.inputGroup}>
              <div className={styles.codeColumn}>
                <label>Code</label>
                <select className={styles.selectInput}>
                  <option>IN +91 (IN)</option>
                </select>
              </div>
              <div className={styles.phoneColumn}>
                <label>Phone Number</label>
                <input type="text" placeholder="9876543210" className={styles.textInput} />
              </div>
            </div>

            <div className={styles.checkboxGroup}>
              <input type="checkbox" id="remember" className={styles.checkbox} />
              <label htmlFor="remember">
                <span className={styles.checkTitle}>Remember me on this device.</span>
                <span className={styles.checkDesc}>Select this only if you're using a trusted device. Shared or public devices are not recommended.</span>
              </label>
            </div>

            <button type="submit" className={styles.submitBtn}>Get OTP</button>
          </form>

          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a> | <a href="#">Pricing Details</a> | <a href="#">About Us</a> | <br/>
            <a href="#">Terms &amp; Conditions</a> | <a href="#">Cancellation &amp; Refund Policy</a> | <br/>
            <a href="#">Shipping &amp; Delivery Policy</a> | <a href="#">Contact Us</a>
          </div>
        </div>
      </div>

      <div className={styles.imageSection}>
        <img src={sketchImage} alt="Vidya Jeevan Sketch" className={styles.sketchImage} />
      </div>
    </div>
  );
}
