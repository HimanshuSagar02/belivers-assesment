import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
// from 'react';
import styles from './Navbar.module.css';

import logo from '../../assets/logo.png';

export default function Navbar() {
  return (
    <header className={styles.navbarContainer}>
      <div className={styles.navbarLogo}>
        <a href="/" data-discover="true">
          <img alt="website logo" src={logo} />
        </a>
      </div>

      <nav className={styles.webNav}>
        <a href="/" data-discover="true">Home</a>
        <a href="https://drzainabvora.com/about" target="_blank" rel="noreferrer">About Dr. ZV</a>
        <Link to="/corebtr-offline" data-discover="true">CoreBTR Offline</Link>
        <a href="/corebtr-bootcamp" aria-current="page" className={styles.active} data-discover="true">CoreBTR Bootcamp</a>

        <div className={styles.dropdownContainer}>
          <button className={styles.dropdownTrigger} type="button">
            <span className={styles.dropdownText}>CoreBTR Books</span>
            <svg className={styles.arrowIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
          </button>
        </div>

        <div className={styles.dropdownContainer}>
          <button className={styles.dropdownTrigger} type="button">
            <span className={styles.dropdownText}>Buy New Plans</span>
            <svg className={styles.arrowIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
          </button>
        </div>

        <div className={styles.dropdownContainer}>
          <button className={styles.dropdownTrigger} type="button">
            <span className={styles.dropdownText}>Schedules</span>
            <svg className={styles.arrowIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
          </button>
        </div>

        <div className={styles.dropdownContainer}>
          <button className={styles.dropdownTrigger} type="button">
            <span className={styles.dropdownText}>Results</span>
            <svg className={styles.arrowIcon} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
          </button>
        </div>

        <a href="/blogs" data-discover="true">Blogs</a>
        <Link to="/login" className={styles.loginSignupCta}>Login | Signup</Link>
      </nav>

      <div className={styles.hamburger}>
        <button className={styles.hamburgerBtn} type="button">
          <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
        </button>
      </div>
    </header>
  );
}
