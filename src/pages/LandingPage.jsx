import { Link } from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
//, { useState } from 'react';

export default function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="navbar-container">
        <div className="navbar-logo">
          <a className="" href="/" data-discover="true">
            <img alt="website logo" src="https://cdn.dribbble.com/userupload/47577791/file/25dd269a09491e2a44c8437764fb5473.png" />
          </a>
        </div>
        <nav className="web-nav">
          <a className="" href="/" data-discover="true">Home</a>
          <a className="" href="#" target="_blank" rel="noreferrer">About Dr. ZV</a>
          <Link className="" to="/corebtr-offline" data-discover="true">CoreBTR Offline</Link>
          <a aria-current="page" className="active" href="/corebtr-bootcamp" data-discover="true">CoreBTR Bootcamp</a>
          <div className="dropdown-container">
            <button className="dropdown-trigger">
              <span className="dropdown-text">CoreBTR Books</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="arrow-icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
            </button>
          </div>
          <div className="dropdown-container">
            <button className="dropdown-trigger">
              <span className="dropdown-text">Buy New Plans</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="arrow-icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
            </button>
          </div>
          <div className="dropdown-container">
            <button className="dropdown-trigger">
              <span className="dropdown-text">Schedules</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="arrow-icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
            </button>
          </div>
          <div className="dropdown-container">
            <button className="dropdown-trigger">
              <span className="dropdown-text">Results</span>
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="arrow-icon " height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path></svg>
            </button>
          </div>
          <a className="" href="/blogs" data-discover="true">Blogs</a>
          <Link className="login-signup-cta" to="/login">Login | Signup</Link>
        </nav>
        <div className="hamburger">
          <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <a className="" href="#" data-discover="true">Home</a>
            <a className="" href="#" target="_blank" rel="noreferrer">About Dr. ZV</a>
            <a className="" href="#" data-discover="true">CoreBTR Offline</a>
            <a aria-current="page" className="active" href="#" data-discover="true">CoreBTR Bootcamp</a>
            <div className="dropdown-container">
              <button className="dropdown-trigger">
                <span className="dropdown-text">CoreBTR Books</span>
              </button>
            </div>
            <div className="dropdown-container">
              <button className="dropdown-trigger">
                <span className="dropdown-text">Buy New Plans</span>
              </button>
            </div>
            <div className="dropdown-container">
              <button className="dropdown-trigger">
                <span className="dropdown-text">Schedules</span>
              </button>
            </div>
            <div className="dropdown-container">
              <button className="dropdown-trigger">
                <span className="dropdown-text">Results</span>
              </button>
            </div>
            <a className="" href="#" data-discover="true">Blogs</a>
            <Link className="login-signup-cta" to="/login">Login | Signup</Link>
          </nav>
        )}
      </header>

      <div className="adt-wrapper">
        <button className="adt-trigger" aria-label="Open app download">
          <span className="adt-trigger__label">Get The App</span>
          <span className="adt-trigger__bottom-row">
            <span className="adt-trigger__icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="5" y="2" width="14" height="20" rx="3" stroke="currentColor" strokeWidth="2"></rect><circle cx="12" cy="18" r="1" fill="currentColor"></circle><line x1="9" y1="6" x2="15" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line></svg>
            </span>
            <span className="adt-trigger__arrow">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
            </span>
          </span>
        </button>
        <div className="adt-panel ">
          <div className="adt-panel__inner">
            <p className="adt-panel__headline">Scan to get the</p>
            <p className="adt-panel__subheadline">CoreBTR App</p>
            <div className="adt-panel__qr">
              <svg height="120" width="120" viewBox="0 0 37 37" role="img"><path fill="#FFFFFF" d="M0,0 h37v37H0z" shapeRendering="crispEdges"></path><path fill="#000000" d="M4 4h7v1H4zM17 4h2v1H17zM20 4h1v1H20zM22 4h3v1H22zM26,4 h7v1H26zM4 5h1v1H4zM10 5h1v1H10zM12 5h1v1H12zM14 5h1v1H14zM18 5h7v1H18zM26 5h1v1H26zM32,5 h1v1H32zM4 6h1v1H4zM6 6h3v1H6zM10 6h1v1H10zM19 6h1v1H19zM21 6h1v1H21zM26 6h1v1H26zM28 6h3v1H28zM32,6 h1v1H32zM4 7h1v1H4zM6 7h3v1H6zM10 7h1v1H10zM13 7h3v1H13zM17 7h2v1H17zM22 7h1v1H22zM24 7h1v1H24zM26 7h1v1H26zM28 7h3v1H28zM32,7 h1v1H32zM4 8h1v1H4zM6 8h3v1H6zM10 8h1v1H10zM13 8h1v1H13zM16 8h4v1H16zM21 8h2v1H21zM26 8h1v1H26zM28 8h3v1H28zM32,8 h1v1H32zM4 9h1v1H4zM10 9h1v1H10zM12 9h1v1H12zM19 9h1v1H19zM21 9h1v1H21zM23 9h1v1H23zM26 9h1v1H26zM32,9 h1v1H32zM4 10h7v1H4zM12 10h1v1H12zM14 10h1v1H14zM16 10h1v1H16zM18 10h1v1H18zM20 10h1v1H20zM22 10h1v1H22zM24 10h1v1H24zM26,10 h7v1H26zM12 11h1v1H12zM14 11h2v1H14zM17 11h2v1H17zM23 11h2v1H23zM8 12h4v1H8zM14 12h1v1H14zM16 12h1v1H16zM20 12h1v1H20zM26 12h2v1H26zM31 12h1v1H31zM4 13h4v1H4zM11 13h5v1H11zM20 13h1v1H20zM22 13h1v1H22zM26 13h3v1H26zM30,13 h3v1H30zM7 14h1v1H7zM9 14h6v1H9zM17 14h1v1H17zM22 14h1v1H22zM25 14h1v1H25zM28 14h1v1H28zM32,14 h1v1H32zM4 15h1v1H4zM9 15h1v1H9zM11 15h2v1H11zM15 15h2v1H15zM18 15h2v1H18zM22 15h1v1H22zM25 15h1v1H25zM28 15h2v1H28zM31,15 h2v1H31zM7 16h1v1H7zM10 16h1v1H10zM15 16h2v1H15zM20 16h1v1H20zM22 16h3v1H22zM27 16h1v1H27zM32,16 h1v1H32zM5 17h1v1H5zM7 17h2v1H7zM13 17h5v1H13zM21 17h1v1H21zM26 17h1v1H26zM28 17h1v1H28zM30,17 h3v1H30zM6 18h1v1H6zM9 18h2v1H9zM12 18h2v1H12zM15 18h1v1H15zM17 18h1v1H17zM20 18h1v1H20zM22 18h1v1H22zM24 18h1v1H24zM28 18h1v1H28zM32,18 h1v1H32zM6 19h2v1H6zM11 19h1v1H11zM14 19h1v1H14zM17 19h1v1H17zM20 19h4v1H20zM26 19h2v1H26zM29 19h1v1H29zM31 19h1v1H31zM4 20h1v1H4zM6 20h2v1H6zM10 20h1v1H10zM12 20h1v1H12zM14 20h1v1H14zM17 20h2v1H17zM20 20h1v1H20zM22 20h2v1H22zM4 21h3v1H4zM11 21h1v1H11zM15 21h2v1H15zM18 21h2v1H18zM22 21h1v1H22zM26 21h5v1H26zM32,21 h1v1H32zM6 22h1v1H6zM9 22h4v1H9zM19 22h1v1H19zM22 22h1v1H22zM24 22h1v1H24zM28 22h1v1H28zM30 22h1v1H30zM32,22 h1v1H32zM7 23h2v1H7zM12 23h3v1H12zM16 23h2v1H16zM19 23h2v1H19zM22 23h1v1H22zM27 23h1v1H27zM4 24h3v1H4zM8 24h1v1H8zM10 24h1v1H10zM12 24h1v1H12zM16 24h6v1H16zM23 24h7v1H23zM31 24h1v1H31zM12 25h1v1H12zM14 25h2v1H14zM17 25h1v1H17zM22 25h3v1H22zM28 25h1v1H28zM30 25h1v1H30zM32,25 h1v1H32zM4 26h7v1H4zM12 26h1v1H12zM16 26h1v1H16zM18 26h1v1H18zM22 26h3v1H22zM26 26h1v1H26zM28 26h1v1H28zM32,26 h1v1H32zM4 27h1v1H4zM10 27h1v1H10zM12 27h1v1H12zM19 27h3v1H19zM23 27h2v1H23zM28 27h2v1H28zM32,27 h1v1H32zM4 28h1v1H4zM6 28h3v1H6zM10 28h1v1H10zM12 28h2v1H12zM17 28h4v1H17zM23 28h6v1H23zM31 28h1v1H31zM4 29h1v1H4zM6 29h3v1H6zM10 29h1v1H10zM13 29h2v1H13zM22 29h1v1H22zM27 29h1v1H27zM31 29h1v1H31zM4 30h1v1H4zM6 30h3v1H6zM10 30h1v1H10zM13 30h1v1H13zM16 30h2v1H16zM20 30h6v1H20zM30,30 h3v1H30zM4 31h1v1H4zM10 31h1v1H10zM17 31h1v1H17zM20 31h2v1H20zM24 31h1v1H24zM27 31h1v1H27zM29 31h1v1H29zM31,31 h2v1H31zM4 32h7v1H4zM15 32h1v1H15zM18 32h2v1H18zM21 32h2v1H21zM24 32h3v1H24zM28 32h2v1H28zM31 32h1v1H31z" shapeRendering="crispEdges"></path></svg>
            </div>
            <p className="adt-panel__hint">Point your camera at the QR code</p>
            <div className="adt-panel__divider">
              <span className="adt-panel__divider-line"></span>
              <span className="adt-panel__divider-text">OR</span>
              <span className="adt-panel__divider-line"></span>
            </div>
            <div className="adt-panel__stores">
              <a href="#" target="_blank" rel="noreferrer" className="adt-panel__store-btn ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path></svg>
                App Store
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="adt-panel__store-btn ">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.64.22.99.14l12.45-7.19-2.78-2.79-10.66 9.84zM.79 1.07C.3 1.6 0 2.37 0 3.37v17.26c0 1 .3 1.77.8 2.3l.12.11 9.68-9.68v-.23L.91.96.79 1.07zm19.53 10.16L17.6 9.5l-2.79 2.79 2.93 2.93 1.58-.91c.9-.52.9-1.57 0-2.09v.01zM3.18.25l12.45 7.19-2.78 2.78L2.19.38c.3-.17.68-.18.99-.13z"></path></svg>
                Google Play
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="capsule-container">Interested in CoreBTR ?</div>

      <div>
        <section className="bch bch--expand" aria-label="Bootcamp Hero">
          <div className="bch__base"></div>
          <div className="bch__img-wrap">
            <img alt="Dr. Zainab Vora" className="bch__img" src="https://cdn.dribbble.com/userupload/47126326/file/a48085bc495e7b166b68b527cfcd1c4b.png" />
            <div className="bch__img-fade bch__img-fade--top"></div>
            <div className="bch__img-fade bch__img-fade--left"></div>
            <div className="bch__img-fade bch__img-fade--right"></div>
            <div className="bch__img-fade bch__img-fade--bottom"></div>
          </div>
          <div className="bch__intro-name">
            <span className="bch__intro-sub">CoreBTR BOOTCAMP</span>
            <span className="bch__intro-doc">Dr. Zainab Vora</span>
          </div>
          <div className="bch__right">
            <span className="bch__r-by">by</span>
            <span className="bch__r-name">Dr. Zainab Vora</span>
            <span className="bch__r-cta">When concepts click <br /> everything changes</span>
          </div>
          <div className="bch__right">
            <span className="bch__r-cta2">REGISTRATION CLOSED FOR <br /> NEET PG BOOTCAMP</span>
          </div>
          <div className="bch__left-title">
            <span className="bch__left-title-text">CoreBTR<br />BOOTCAMP</span>
            <span className="bch__r-place">at Vidya Jeevan, Greater Noida</span>
          </div>
          <p className="bch__tagline">Crack the exam. Own the rank.</p>
          <div className="bch__scroll"><span></span></div>
          <div className="bch__mob-top">
            <span className="bch__mob-top-text">CoreBTR</span>
            <span className="bch__mob-top-text">BOOTCAMP</span>
          </div>
          <div className="bch__mob-bottom">
            <span className="bch__mob-bottom-name">Dr. Zainab Vora</span>
            <span className="bch__mob-bottom-sub">at Vidya Jeevan, Greater Noida</span>
            <span className="bch__mob-bottom-cta">When concepts click, everything changes</span>
            <span className="bch__mob-cta">REGISTRATION CLOSED FOR NEET PG BOOTCAMP</span>
          </div>
        </section>

        <div className="bootcamp-container">
          <div className="bootcamp-content">
            <h1>Core<span>BTR</span> Bootcamp</h1>
            <h3>Learn with Dr. Zainab Vora. Transform with the System.</h3>
            <p>This is where concepts finally make sense. Where revision becomes structured and where your preparation starts moving in the right direction. <b>At coreBTR Bootcamp, </b> you’re not just attending classes, you’re learning directly under<b> Dr. Zainab Vora</b>, with a system designed to help you <b>stay consistent, focused, and exam-ready.</b> You don’t just study more, you study better. <b>Start Learning Smarter.</b></p>
          </div>
        </div>

        <div className="corebtr-programs-container">
          <div className="corebtr-programs-header">
            <h2>Core<span>BTR</span> NEET PG T&amp;D Bootcamp at Vidya Jeevan</h2>
            <h3>Starts From 28th May till 30th Aug 2026</h3>
            <h3> 3 Months offline Test &amp; Discussion Program </h3>
            <p className="corebtr-programs-lead">An intensive, high-impact offline program for serious<b> NEET PG Aspirants.<br /> Designed for focused learning,</b> disciplined preparation, and a completely distraction-free environment.</p>
          </div>
          <div className="corebtr-programs-grid">
            <div className="corebtr-programs-card program1">
              <h3 className="corebtr-programs-title">Program 1</h3>
              <p className="corebtr-programs-subtitle">Live Classes + Personal Cubicle with Desktop for CBT / self study</p>
              <ul className="corebtr-programs-list">
                <li>Subject wise computer based test followed by live discussion</li>
                <li>Grand Tests (every 15 days) followed by live discussion</li>
                <li>Weekly doubt solving sessions</li>
                <li>Daily Mini Tests on CBT Desktop</li>
                <li>Personal Desktop access for self study</li>
              </ul>
              <div className="corebtr-programs-fees">
                <div className="corebtr-programs-fees-label">Fees: <span className="corebtr-programs-fees-amount">Rs 37,000</span></div>
              </div>
              <a aria-current="page" className="corebtr-programs-enroll-btn active" href="/corebtr-bootcamp" data-discover="true">Registration Closed</a>
            </div>
            <div className="corebtr-programs-card program2">
              <h3 className="corebtr-programs-title">Program 2</h3>
              <p className="corebtr-programs-subtitle">Relay Classes + Personal Cubicle for self study (No desktop)</p>
              <ul className="corebtr-programs-list">
                <li>Subject wise computer based test on Desktop followed by discussion through relay</li>
                <li>GT (every 15 days) followed by discussion through relay</li>
                <li>Weekly doubt solving sessions through relay</li>
                <li>Daily Mini Tests on own device</li>
                <li>Personal cubicle space for self study <b>(No desktop)</b></li>
              </ul>
              <div className="corebtr-programs-fees">
                <div className="corebtr-programs-fees-label">Fees: <span className="corebtr-programs-fees-amount">Rs 32,000</span></div>
              </div>
              <a aria-current="page" className="corebtr-programs-enroll-btn active" href="/corebtr-bootcamp" data-discover="true">Registration Closed</a>
            </div>
          </div>
          <div className="corebtr-programs-registration-box">
            <h3>Registrations will be on First come-first serve basis</h3>
            <div className="corebtr-programs-registration-time">Registration may close anytime without prior notice <br />No refund / No transfer after registration</div>
          </div>
        </div>

        <div className="corebtr-programs-registration-imp">
          <h3>Important Notice</h3>
          <ul>
            <li>Seats cannot be cancelled or transferred to anyone, including friends.</li>
            <li>Seats cannot be shifted to any online plans.</li>
            <li>Registrations made using someone else’s account will not be accepted.</li>
            <li>Registration will be accepted only your own account and name</li>
          </ul>
        </div>

        <div className="corebtr-programs-schedule">
          <h2>Core<span>BTR</span> NEET PG T&amp;D Bootcamp Schedule</h2>
          <a className="corebtr-programs-schedule-btn" href="/neetpg-bootcamp-schedule" data-discover="true">Check Schedule</a>
        </div>

        <div className="bootcamp-highlights-sections">
          <section className="bootcamp-highlights">
            <div className="bootcamp-highlights-image">
              <img alt="coreBTR BootCamp Class 2026 - Top" src="https://cdn.dribbble.com/userupload/47178593/file/1bfaa70f0c6507317a6cb8d3c9100c74.png" />
              <p className="bootcamp-highlights-subtitle-top">Learn The BTR Way : <span className="bootcamp-highlights-yellow">19 Subjects | System-Wise | High-Yield</span></p>
            </div>
            <div className="bootcamp-highlights-content">
              <h2 className="bootcamp-highlights-title">Concepts. Clarity. Confidence.</h2>
              <p className="bootcamp-highlights-description">With <strong>Dr. Zainab Vora</strong>, learning is not about memorizing more—it’s about understanding better. Complex topics are simplified with integrated, system-wise learning across all 19 subjects.</p>
              <ul className="bootcamp-highlights-points">
                <li>High-yield focus for NEET PG, INI-CET &amp; FMGE</li>
                <li>System-wise structured preparation</li>
                <li>Built for retention, recall &amp; real exam pressure</li>
              </ul>
              <p className="bootcamp-highlights-tagline">This is not just teaching. <span>This is the BTR approach.</span></p>
            </div>
            <div className="bootcamp-highlights-image">
              <img alt="coreBTR BootCamp Class 2026 - Bottom" src="https://cdn.dribbble.com/userupload/47178594/file/67a6d44caf08a8edf187a3f80c9938cb.png" />
              <p className="bootcamp-highlights-subtitle-top"><span className="bootcamp-highlights-yellow">Real Exam Environment. Real Preparation.</span></p>
            </div>
            <div className="bootcamp-highlights-content">
              <h2 className="bootcamp-highlights-title">Consistent Testing. Real Progress.</h2>
              <p className="bootcamp-highlights-description"><strong> After completing each subject,</strong> you’ll take structured tests to assess your understanding and identify gaps. On non-class days, daily mini tests ensure you stay in the habit of solving MCQs</p>
              <p className="bootcamp-highlights-tagline">So practice becomes consistent,<span> not occasional.</span></p>
            </div>
          </section>
        </div>

        <div className="bootcamp-features-container">
          <section className="bootcamp-features-sections">
            <div className="bootcamp-features-what-you-get">
              <div className="bfc-header bfc-visible">
                <div className="bootcamp-features-eyebrow">
                  <span className="bootcamp-features-eyebrow-line"></span>
                  <span className="bootcamp-features-eyebrow-text">WHAT'S INSIDE</span>
                </div>
                <h2 className="bootcamp-features-section-heading">Why Students Prefer Core<span>BTR</span> Bootcamp</h2>
                <p className="bootcamp-features-lead">Great preparation is built on both the right learning and the right environment. <b>At coreBTR Bootcamp, structured teaching goes hand in hand with discipline, guidance, and a system designed to keep you consistent.</b> That's what makes the experience at Vidya Jeevan Experience Centre different—<b>it's not just a venue</b> but <b>a thoughtfully built ecosystem shaped by the journeys of thousands of students.</b></p>
              </div>
              <div className="bfc-split-panel bfc-visible">
                <div className="bfc-pointers">
                  <button className="bfc-pointer-item" aria-label="View A System That Keeps You on Track">
                    <div className="bfc-pointer-chip">
                      <span className="bfc-pointer-num">01</span>
                    </div>
                    <div className="bfc-pointer-content">
                      <div className="bfc-pointer-title-row">
                        <h3 className="bfc-pointer-title">A System That Keeps You on Track</h3>
                        <span className="bfc-pointer-arrow">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                      </div>
                      <p className="bfc-pointer-body">Even the best teaching needs the right structure to deliver results. That's where the bootcamp system supports you.</p>
                    </div>
                  </button>
                  <button className="bfc-pointer-item" aria-label="View An Environment Built for Focus">
                    <div className="bfc-pointer-chip">
                      <span className="bfc-pointer-num">02</span>
                    </div>
                    <div className="bfc-pointer-content">
                      <div className="bfc-pointer-title-row">
                        <h3 className="bfc-pointer-title">An Environment Built for Focus</h3>
                        <span className="bfc-pointer-arrow">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                      </div>
                      <p className="bfc-pointer-body">At the Vidya Jeevan Experience Centre, everything is designed to help you stay distraction-free, consistent, and fully focused on your goal.</p>
                    </div>
                  </button>
                  <button className="bfc-pointer-item bfc-pointer-active" aria-label="View Structured, Disciplined Preparation">
                    <div className="bfc-pointer-chip">
                      <span className="bfc-pointer-num">03</span>
                    </div>
                    <div className="bfc-pointer-content">
                      <div className="bfc-pointer-title-row">
                        <h3 className="bfc-pointer-title">Structured, Disciplined Preparation</h3>
                        <span className="bfc-pointer-arrow bfc-arrow-active">
                          <svg width="18" height="18" viewBox="0 0 20 20" fill="none"><path d="M5 10h10M11 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        </span>
                      </div>
                      <p className="bfc-pointer-body">A clear plan, regular testing, and continuous feedback—so you always know where you stand and what to improve.</p>
                    </div>
                  </button>
                </div>
                <div className="bfc-image-panel">
                  <div className="bfc-image-inner">
                    <img alt="Structured, Disciplined Preparation" className="bfc-fade-img" src="https://cdn.dribbble.com/userupload/47178228/file/e1c7ff641f9c14e673d2ac4662ab7e95.jpg" />
                    <div className="bfc-image-overlay"></div>
                    <div className="bfc-image-badge">
                      <span className="bfc-badge-num">03</span>
                      <span className="bfc-badge-label">Structured, Disciplined Preparation</span>
                    </div>
                  </div>
                  <div className="bfc-dots">
                    <button className="bfc-dot" aria-label="Go to slide 1"></button>
                    <button className="bfc-dot" aria-label="Go to slide 2"></button>
                    <button className="bfc-dot bfc-dot-active" aria-label="Go to slide 3"></button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section className="ms-section">
          <div className="ms-container">
            <div className="ms-header ms-visible">
              <div className="ms-eyebrow">
                <span className="ms-eyebrow-line"></span>
                <span className="ms-eyebrow-text">MEET YOUR MENTORS</span>
                <span className="ms-eyebrow-line"></span>
              </div>
              <h1 className="ms-h1">Mentorship That Keeps<br />You <span className="ms-h1-accent">Steady</span></h1>
              <p className="ms-subhead">Guided by Dr. Zainab Vora along with Dr.Ravi Sharma &amp; Dr.Apurv Mehra, you stay consistent, focused, and steady through every phase.</p>
            </div>
            <div className="ms-grid ms-visible">
              <div className="ms-card" style={{ '--accent': '#1767be', '--accent-light': '#e8f0fb', '--delay': '0s' }}>
                <div className="ms-img-wrap">
                  <img alt="Dr. Zainab Vora" className="ms-img" src="https://cdn.dribbble.com/userupload/47178187/file/97918da2ccaa81da8481b22b60b4d074.jpg?w=400&amp;h=500&amp;fit=crop&amp;crop=faces" />
                </div>
                <div className="ms-card-body">
                  <div className="ms-card-bar"></div>
                  <h3 className="ms-card-name">Dr. Zainab Vora</h3>
                  <p className="ms-card-desc">Mentor who guides students with clear concepts, smart strategy, and constant support to help them stay focused and succeed..</p>
                </div>
              </div>
              <div className="ms-card ms-card--active" style={{ '--accent': '#1d204b', '--accent-light': '#eeeffe', '--delay': '0.12s' }}>
                <div className="ms-img-wrap">
                  <img alt="Dr. Ravi Sharma" className="ms-img" src="https://cdn.dribbble.com/userupload/47178186/file/69fa3c9175036c06e72074ba55f6e82d.jpg?w=400&amp;h=500&amp;fit=crop&amp;crop=faces" />
                </div>
                <div className="ms-card-body">
                  <div className="ms-card-bar"></div>
                  <h3 className="ms-card-name">Dr. Ravi Sharma</h3>
                  <p className="ms-card-desc">Bringing calm, discipline, and mental strength to keep you grounded under pressure.</p>
                </div>
              </div>
              <div className="ms-card" style={{ '--accent': '#c47d00', '--accent-light': '#fff6e0', '--delay': '0.24s' }}>
                <div className="ms-img-wrap">
                  <img alt="Dr. Apurv Mehra" className="ms-img" src="https://cdn.dribbble.com/userupload/47177977/file/93930f214f7f5feffa36f87aa9d58bd2.jpg?w=400&amp;h=700&amp;fit=crop&amp;crop=faces" />
                </div>
                <div className="ms-card-body">
                  <div className="ms-card-bar"></div>
                  <h3 className="ms-card-name">Dr. Apurv Mehra</h3>
                  <p className="ms-card-desc">Guiding you with resilience, focus, and real-world perspective. Because preparation isn't just academic—it's mental.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="bfc-footer-note bfc-visible">
          <div className="bfc-footer-inner">
            <div className="bfc-footer-left">
              <div className="bfc-footer-accent"></div>
              <h3 className="bfc-footer-title">Why Students Choose coreBTR Bootcamp</h3>
            </div>
            <div className="bfc-footer-right">
              <p className="bfc-footer-intro">Because they get what they need:</p>
              <ul className="bfc-footer-bullets">
                <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right teacher</li>
                <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right system</li>
                <li className="bfc-footer-bullet"><span className="bfc-bullet-dot"></span>The right environment</li>
              </ul>
              <p className="bfc-footer-closing">And at CoreBTR Bootcamp, they get all three.</p>
            </div>
          </div>
        </div>

        <section className="wd2-section">
          <div className="wd2-inner">
            <div className="wd2-header">
              <div className="wd2-eyebrow">
                <div className="wd2-eyebrow-line"></div>
                <span className="wd2-eyebrow-text">WHAT'S INSIDE</span>
              </div>
              <h2 className="wd2-heading">What Makes It <span className="wd2-heading-accent">Different</span><br />From Other Offline Classes</h2>
            </div>
            <div className="wd2-grid">
              <div className="wd2-card wd2-blue wd2-in" style={{ '--i': 0 }}>
                <div className="wd2-card-num">01</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">Not Just Lectures</span>
                  <h3 className="wd2-card-title">A Complete System</h3>
                  <p className="wd2-card-desc">Bootcamp Ensures Daily Testing + Analysis + Revision</p>
                </div>
              </div>
              <div className="wd2-card wd2-gold wd2-in" style={{ '--i': 1 }}>
                <div className="wd2-card-num">02</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">Specific Focus</span>
                  <h3 className="wd2-card-title">Exam-Specific Focus</h3>
                  <p className="wd2-card-desc">Designed Exclusively for NEET PG, INI-CET and FMGE, Not a Generic Crash Course</p>
                </div>
              </div>
              <div className="wd2-card wd2-blue wd2-in" style={{ '--i': 2 }}>
                <div className="wd2-card-num">03</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">Structured Day-by-Day Schedule</span>
                  <h3 className="wd2-card-title">Accountability &amp; Discipline</h3>
                  <p className="wd2-card-desc">Keeps Procrastination away &amp; Ensures Course Completion</p>
                </div>
              </div>
              <div className="wd2-card wd2-gold wd2-in" style={{ '--i': 3 }}>
                <div className="wd2-card-num">04</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">Unlike Traditional Classes</span>
                  <h3 className="wd2-card-title">Mentorship-Driven Learning</h3>
                  <p className="wd2-card-desc">This Program Emphasizes Strategy, Consistency &amp; Mental Conditioning along with Academics</p>
                </div>
              </div>
              <div className="wd2-card wd2-blue wd2-in" style={{ '--i': 4 }}>
                <div className="wd2-card-num">05</div>
                <div className="wd2-card-body">
                  <span className="wd2-card-tag">From Concepts to Practice </span>
                  <h3 className="wd2-card-title">End-to-End Prep</h3>
                  <p className="wd2-card-desc">From Concepts -&gt; Practice -&gt; PYQs -&gt; GTs -&gt; Rapid Revision, Everything is Covered under One Roof</p>
                </div>
              </div>
              <div className="wd2-banner wd2-in" style={{ '--i': 5 }}>
                <p className="wd2-banner-quote">At CoreBTR Bootcamp - <strong>We guide you all the way until you achieve your goal</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="parking-notice">
          <div className="parking-notice-card">
            <div className="parking-icon">⚠️</div>
            <h3>Parking Information</h3>
            <div className="parking-item">
              <h4>No On-Campus Parking</h4>
              <p>Parking facilities are not available within the Vidya Jeevan premises.</p>
            </div>
            <div className="parking-item">
              <h4>Parking at Your Own Risk</h4>
              <p>Vehicles parked outside the premises are solely the responsibility of their owners. Vidya Jeevan, its management, and staff shall not be liable for any loss, theft, damage, or other incidents involving parked vehicles.</p>
            </div>
          </div>
        </section>

        <div className="bootcamp-cta-container">
          <section className="bootcamp-cta-info">
            <div className="bootcamp-cta-info-label">Join the Bootcamp</div>
            <p className="bootcamp-cta-info-CTA">If you’re ready to stop feeling lost and start seeing progress - this is where it begins.</p>
            <p className="bootcamp-cta-info-CTA">Start Your Transformation with CoreBTR Bootcamp</p>
            <a aria-current="page" className="active" href="/corebtr-bootcamp" data-discover="true">Join the Bootcamp</a>
          </section>
        </div>
      </div>

      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <div className="footer-logo">
              <a className="" href="/" data-discover="true">
                <img alt="website logo" src="https://cdn.dribbble.com/userupload/47577791/file/25dd269a09491e2a44c8437764fb5473.png" />
              </a>
            </div>
            <div className="footer-social">
              <a aria-label="Instagram" className="social-icon" href="#" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a aria-label="YouTube" className="social-icon" href="#" target="_blank" rel="noreferrer">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
              </a>
            </div>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Explore</h3>
            <ul className="footer-links">
              <li><a className="" href="/" data-discover="true">Home</a></li>
              <li><a className="" href="/blogs" data-discover="true">Blogs</a></li>
              <li><a className="" href="/reviews" data-discover="true">Reviews</a></li>
              <li><a className="" href="/gallery" data-discover="true">Gallery</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Study Resources</h3>
            <ul className="footer-links">
              <li><a className="" href="/workbooks" data-discover="true"> Workbooks &amp; Notes</a></li>
              <li><a className="" href="/pyqs-book" data-discover="true"> PYQs Book</a></li>
              <li><Link className="" to="/corebtr-offline" data-discover="true">CoreBTR Offline</Link></li>
              <li><a aria-current="page" className="active" href="/corebtr-bootcamp" data-discover="true">CoreBTR Bootcamp</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Plans &amp; Purchases</h3>
            <ul className="footer-links">
              <li><a className="" href="/solo-plans" data-discover="true">Solo Plans</a></li>
              <li><a className="" href="/group-plans" data-discover="true">Group Plans</a></li>
              <li><a className="" href="/shipping-delivery" data-discover="true">Shipping &amp; Delivery</a></li>
              <li><a className="" href="/cancellation-refund" data-discover="true">Cancellation &amp; Refund</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Support</h3>
            <ul className="footer-links">
              <li><a className="" href="/contact" data-discover="true">Contact Us</a></li>
              <li><a className="" href="/faq" data-discover="true">FAQ's</a></li>
              <li><a className="" href="/device-policy" data-discover="true">Device Policy</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3 className="footer-title">Legal &amp; Updates</h3>
            <ul className="footer-links">
              <li><a className="" href="/privacy-policy" data-discover="true">Privacy Policy</a></li>
              <li><a className="" href="/terms" data-discover="true">Terms &amp; Conditions</a></li>
              <li><a className="" href="/fair-usage-policy" data-discover="true"> Fair Usage Policy</a></li>
              <li><a className="" href="/newsletter-form" data-discover="true">Newsletter</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 CoreBTR, All rights reserved. | <span>Designed &amp; Managed By:</span> <a className="" href="#" target="_blank" rel="noreferrer">Himanshu sagar</a></p>
        </div>
      </footer>
    </>
  );
}
