import React from 'react';
import styles from './DifferentiatorsSection.module.css';

const diffCards = [
  {
    num: "01",
    label: "NOT JUST LECTURES",
    title: "A Complete System",
    desc: "Bootcamp Ensures Daily Testing → Analysis → Revision"
  },
  {
    num: "02",
    label: "SPECIFIC FOCUS",
    title: "Exam-Specific Focus",
    desc: "Designed Exclusively for NEET PG, INI-CET and FMGE, Not a Generic Crash Course"
  },
  {
    num: "03",
    label: "STRUCTURED DAY-BY-DAY SCHEDULE",
    title: "Accountability & Discipline",
    desc: "Keeps Procrastination away & Ensures Course Completion"
  },
  {
    num: "04",
    label: "UNLIKE TRADITIONAL CLASSES",
    title: "Mentorship-Driven Learning",
    desc: "This Program Emphasizes Strategy, Consistency & Mental Conditioning along with Academics"
  },
  {
    num: "05",
    label: "FROM CONCEPTS TO PRACTICE",
    title: "End-to-End Prep",
    desc: "From Concepts → Practice → PYQs → GTs → Rapid Revision. Everything is Covered under One Roof"
  }
];

export default function DifferentiatorsSection() {
  return (
    <section className={styles.sectionContainer}>
      
      
      <div className={styles.darkBanner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerLeft}>
            <div className={styles.accentBar}></div>
            <h2>Why Students Choose coreBTR Bootcamp</h2>
          </div>
          <div className={styles.bannerRight}>
            <p className={styles.bannerSmallText}>Because they get what they need:</p>
            <ul className={styles.bannerList}>
              <li><span className={styles.yellowDot}></span> The right teacher</li>
              <li><span className={styles.yellowDot}></span> The right system</li>
              <li><span className={styles.yellowDot}></span> The right environment</li>
            </ul>
            <p className={styles.bannerBoldText}>And at CoreBTR Bootcamp, they get all three.</p>
          </div>
        </div>
      </div>

      
      <div className={styles.contentContainer}>
        
        <div className={styles.headerBox}>
          <span className={styles.sectionLabel}>— WHAT'S INSIDE</span>
          <h2 className={styles.mainTitle}>
            What Makes It <span className={styles.highlightText}>Different</span><br/>
            From Other Offline Classes
          </h2>
        </div>

        <div className={styles.cardsGrid}>
          {diffCards.map((card, idx) => (
            <div key={idx} className={styles.diffCard}>
              <div className={styles.cardNumber}>{card.num}</div>
              <div className={styles.cardText}>
                <span className={styles.cardLabel}>{card.label}</span>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className={styles.goalBanner}>
          <p>At CoreBTR Bootcamp - We guide you all the way until you achieve your goal</p>
        </div>

      </div>
    </section>
  );
}
