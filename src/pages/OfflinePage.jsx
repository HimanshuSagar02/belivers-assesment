import React, { useState } from 'react';

export default function OfflinePage() {
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
          <a className="active" href="/corebtr-offline" data-discover="true" aria-current="page">CoreBTR Offline</a>
          <a className="" href="/corebtr-bootcamp" data-discover="true">CoreBTR Bootcamp</a>
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
          <a className="" href="#" data-discover="true">Blogs</a>
          <a className="login-signup-cta" href="/login">Login | Signup</a>
        </nav>
        <div className="hamburger">
          <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path></svg>
          </button>
        </div>
        {isMobileMenuOpen && (
          <nav className="mobile-nav">
            <a className="" href="/" data-discover="true">Home</a>
            <a className="" href="#" target="_blank" rel="noreferrer">About Dr. ZV</a>
            <a className="active" href="/corebtr-offline" data-discover="true">CoreBTR Offline</a>
            <a aria-current="page" className="" href="/corebtr-bootcamp" data-discover="true">CoreBTR Bootcamp</a>
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
            <a className="login-signup-cta" href="/login">Login | Signup</a>
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
        <div className="btr-offline-container">
          <div className="btr-offline-banner">
            <img alt="coreBTR Offline by Dr. Zainab Vora" src="https://cdn.dribbble.com/userupload/47138330/file/22e4881842fa5a52a3255f80d9874680.jpg" />
          </div>
          <div className="btr-offline-content">
            <h1><span>Core</span>BTR Offline</h1>
            <h4>Revise Smart. Recall Fast. Rank Better</h4>
            <p><b>CoreBTR Offline</b> is a focused, face-to-face crash revision program designed for NEET PG aspirants who want clarity, confidence, and quick recall before the exam. Built strictly around <b>PYQs and high-yield facts,</b> CoreBTR helps you revise all 19 subjects in a structured, no-nonsense manner.<br />This is not theory overload - it's about <b>what to remember, how to apply, and what not to miss.</b></p>
            <h6>"Kahani tumhaari hai, Ho sake toh kamaal likhna."</h6>
          </div>
          <div className="btr-offline-venues-section">
            <h2 className="btr-offline-venues-title">CoreBTR 3-Day Offline NEET PG Crash Course <br /><span>Venues &amp; Dates</span></h2>
            <div className="btr-offline-venues-grid">
              <div className="btr-offline-venue-card-wrapper">
                <div className="btr-offline-venue-card" style={{ "--delay": "0s", backgroundImage: "url(https://cdn.dribbble.com/userupload/47138862/file/92bdb222e6fe2257afb9d7f6165f9b11.webp)" }}>
                  <div className="btr-offline-venue-overlay"></div>
                  <div className="btr-offline-venue-content">
                    <div className="btr-offline-venue-city">Delhi</div>
                    <div className="btr-offline-venue-dates">27th - 29th July</div>
                    <a href="#" target="_blank" className="btr-offline-venue-location" rel="noreferrer"><span>Venue - </span> Vidya Jeevan Experience Centre, Greater Noida</a>
                  </div>
                </div>
              </div>
              <div className="btr-offline-venue-card-wrapper">
                <div className="btr-offline-venue-card" style={{ "--delay": "0.08s", backgroundImage: "url(https://cdn.dribbble.com/userupload/47138864/file/ca63000f77fa3d05469dec2109801326.jpg)" }}>
                  <div className="btr-offline-venue-overlay"></div>
                  <div className="btr-offline-venue-content">
                    <div className="btr-offline-venue-city">Hyderabad</div>
                    <div className="btr-offline-venue-dates">1st - 3rd July</div>
                    <a href="#" target="_blank" className="btr-offline-venue-location" rel="noreferrer"><span>Venue - </span> Bharatiya Vidya Bhavan's Auditorium, 5-9-1105, Kulapati Munshi Sadan, King Koti Rd, Basheer Bagh, Hyderabad, Telangana 500001</a>
                  </div>
                </div>
              </div>
              <div className="btr-offline-venue-card-wrapper">
                <div className="btr-offline-venue-card" style={{ "--delay": "0.16s", backgroundImage: "url(https://cdn.dribbble.com/userupload/47138865/file/c6355e85ea8e38f3b879170fcacadc9a.jpg)" }}>
                  <div className="btr-offline-venue-overlay"></div>
                  <div className="btr-offline-venue-content">
                    <div className="btr-offline-venue-city">Chennai</div>
                    <div className="btr-offline-venue-dates">3rd - 5th August</div>
                    <a href="#" target="_blank" className="btr-offline-venue-location" rel="noreferrer"><span>Venue - </span> Kamarajar Arangam, 26XX+MQ5, Anna Salai, Teynampet, Thiru Vi Ka Kudiyiruppu, Teynampet, Chennai, Tamil Nadu 600006</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="btr-offline-cta-label">
              <a className="btr-offline-cta-book" href="#" target="_blank" rel="noreferrer">Registrations Closed</a>
            </div>
          </div>
          <div className="btr-offline-highlights-sections">
            <section className="btr-offline-highlights">
              <div className="btr-offline-highlights-content">
                <div className="btr-offline-eyebrow">
                  <span className="btr-offline-eyebrow-line"></span>
                  <span className="btr-offline-eyebrow-text">Overview</span>
                </div>
                <h2 className="btr-offline-section-heading">What You'll Learn 3-Day Offline NEET PG <span>Crash Course</span></h2>
                <p className="btr-offline-lead">A PYQ-focused crash revision program covering all 19 subjects with high-yield facts, must-know images, and live face-to-face sessions.</p>
              </div>
              <div className="btr-offline-highlight-grid">
                <div className="btr-offline-highlight-card">
                  <ul className="btr-offline-highlight-list">
                    <li>19 Subjects Crash Course - Complete rapid revision</li>
                    <li>PYQ-Based Approach - Focus only on what actually gets asked</li>
                    <li>High-Yield NEET PG Topics</li>
                    <li>BTR Core Facts like IPC / Milestones / Staging / Scores</li>
                    <li>Medicine High-Yield Topics like ABG / ECG / Fluid analysis / Stroke localization</li>
                    <li>Must-Know Images from all subjects</li>
                    <li>Face-to-Face Live Sessions with direct interaction</li>
                    <li>Printed BTR Booklet provided for revision support</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
          <div className="btr-offline-highlight-image">
            <img alt="coreBTR Offline Course images" src="https://cdn.dribbble.com/userupload/47137540/file/11e028e5dee519a0282473a5583c6fe4.jpg" />
          </div>
        </div>
        <div className="offline-details-container">
          <div className="offline-details-wrapper">
            <div className="offline-details-header">
              <div className="offline-details-tagline">
                <h4>Best for Students close to the exam who need a final push</h4>
              </div>
            </div>
            <div className="offline-details-features">
              <div className="offline-details-feature-item">
                <span className="offline-details-feature-icon">▶</span>
                <span className="offline-details-feature-text">3-day face-to-face Crash Course with Dr. Zainab</span>
              </div>
              <div className="offline-details-feature-item">
                <span className="offline-details-feature-icon">▶</span>
                <span className="offline-details-feature-text">Complimentary workbook for Recall drilling</span>
              </div>
              <div className="offline-details-feature-item">
                <span className="offline-details-feature-icon">▶</span>
                <span className="offline-details-feature-text">High-yield, exam-centric Topics only</span>
              </div>
              <div className="offline-details-feature-item">
                <span className="offline-details-feature-icon">▶</span>
                <span className="offline-details-feature-text">Conducted in multiple cities</span>
              </div>
              <div className="offline-details-feature-item">
                <span className="offline-details-feature-icon">▶</span>
                <span className="offline-details-feature-text">Doubt-clearing + confidence Boosting sessions</span>
              </div>
            </div>
          </div>
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
              <li><a className="active" href="/corebtr-offline" data-discover="true" aria-current="page">CoreBTR Offline</a></li>
              <li><a className="" href="/corebtr-bootcamp" data-discover="true">CoreBTR Bootcamp</a></li>
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
