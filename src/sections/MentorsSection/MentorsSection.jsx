import React from 'react';
import styles from './MentorsSection.module.css';

import imgZainab from '../../assets/mentor-zainab.png';
import imgRavi from '../../assets/mentor-ravi.png';
import imgApurv from '../../assets/mentor-apurv.png';

const mentors = [
  {
    id: 1,
    name: "Dr. Zainab Vora",
    desc: "Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed..",
    image: imgZainab
  },
  {
    id: 2,
    name: "Dr. Ravi Sharma",
    desc: "Bringing calm, discipline, and mental strength to keep you grounded under pressure.",
    image: imgRavi
  },
  {
    id: 3,
    name: "Dr. Apurv Mehra",
    desc: "Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.",
    image: imgApurv
  }
];

export default function MentorsSection() {
  return (
    <section className={styles.mentorsSection}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className={styles.sectionLabel}>— MEET YOUR MENTORS</span>
          <h2 className={styles.mainTitle}>
            Mentorship That Keeps You <span className={styles.highlightText}>Steady</span>
          </h2>
          <p className={styles.headerDesc}>
            Guided by Dr. Zainab Vora along with Dr. Ravi Sharma & Dr. Apurv Mehra you stay consistent, focused, and steady through every phase.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {mentors.map((mentor) => (
            <div key={mentor.id} className={styles.mentorCard}>
              <div className={styles.imageWrapper}>
                <img src={mentor.image} alt={mentor.name} className={styles.mentorImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.accentLine}></div>
                <h3 className={styles.mentorName}>{mentor.name}</h3>
                <p className={styles.mentorDesc}>{mentor.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
