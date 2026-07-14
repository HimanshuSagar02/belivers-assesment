import React from 'react';
import styles from './IntroSection.module.css';

export default function IntroSection() {
  return (
    <section className={styles.introSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>CoreBTR Bootcamp</h2>
        <h3 className={styles.subtitle}>Learn with Dr. Zainab Vora. Transform with the System.</h3>
        
        <p className={styles.description}>
          This is where concepts finally make sense. Where revision becomes structured and where your preparation starts moving in the right direction. At <strong>coreBTR Bootcamp</strong>, you're not just attending classes, you're learning directly under <strong>Dr. Zainab Vora</strong>, with a system designed to help you <strong>stay consistent</strong>, focused, and exam-ready. You don't just study more, you study better. <strong>Start Learning Smarter.</strong>
        </p>

        <div className={styles.courseDetails}>
          <h2 className={styles.courseTitle}><span>CoreBTR</span> NEET PG T&D Bootcamp at Vidya Jeevan</h2>
          <p className={styles.dates}>Starts From 28th May till 30th Aug 2026</p>
          <p className={styles.duration}>3 Months offline Test & Discussion Program</p>
          <p className={styles.tagline}>An intensive, high-impact offline program for serious <strong>NEET PG Aspirants</strong>.</p>
          <p className={styles.tagline}>Designed for <strong>focused learning</strong>, disciplined preparation, and a completely distraction-free environment.</p>
        </div>
      </div>
    </section>
  );
}
