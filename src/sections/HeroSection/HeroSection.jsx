import React from 'react';
import styles from './HeroSection.module.css';

import portrait from '../../assets/hero-portrait.png';

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBase} />

      <div className={styles.heroContent}>
        <div className={styles.leftTitle}>
          <span className={styles.leftTitleText}>CoreBTR<br />BOOTCAMP</span>
          <span className={styles.rPlace}>at Vidya Jeevan, Greater Noida</span>
        </div>

        <div className={styles.imageBlock}>
          <div className={styles.imgWrap}>
            <img src={portrait} alt="Dr. Zainab Vora" className={styles.heroImg} />
            <div className={styles.imgFadeTop} />
            <div className={styles.imgFadeLeft} />
            <div className={styles.imgFadeRight} />
            <div className={styles.imgFadeBottom} />
          </div>
          <div className={styles.introName}>
            <span className={styles.introSub}>CoreBTR BOOTCAMP</span>
            <span className={styles.introDoc}>Dr. Zainab Vora</span>
          </div>
        </div>

        <div className={styles.rightPanel}>
          <div className={styles.rightGroup}>
            <span className={styles.rBy}>by</span>
            <span className={styles.rName}>Dr. Zainab Vora</span>
            <span className={styles.rCta}>When concepts click <br /> everything changes</span>
          </div>
          <div className={styles.rightGroup}>
            <span className={styles.rCta2}>REGISTRATION CLOSED FOR <br /> NEET PG BOOTCAMP</span>
          </div>
        </div>
      </div>

      <p className={styles.tagline}>Crack the exam. Own the rank.</p>
      <div className={styles.scroll}><span /></div>

      <div className={styles.mobTop}>
        <span className={styles.mobTopText}>CoreBTR</span>
        <span className={styles.mobTopText}>BOOTCAMP</span>
      </div>

      <div className={styles.mobBottom}>
        <span className={styles.mobBottomName}>Dr. Zainab Vora</span>
        <span className={styles.mobBottomSub}>at Vidya Jeevan, Greater Noida</span>
        <span className={styles.mobBottomCta}>When concepts click, everything changes</span>
        <span className={styles.mobCta}>REGISTRATION CLOSED FOR NEET PG BOOTCAMP</span>
      </div>
    </section>
  );
}
