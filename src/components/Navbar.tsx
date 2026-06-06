"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        id="topnav"
        role="navigation"
        aria-label="Main navigation"
        style={{
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,30,.1)" : "none",
        }}
      >
        <div className="nav-inner">
          <a className="brand" href="#" aria-label="Striikers — home">
            <div className="brand-logo-wrap">
              <Image
                src="/logo.png"
                alt="Striikers logo"
                width={96}
                height={96}
                className="brand-logo"
                priority
              />
            </div>
            <span className="brand-wordmark">STRIIKERS</span>
          </a>

          <button
            className={`hamburger${mobileOpen ? " open" : ""}`}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="nav-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#domains">Domains</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact" className="nav-cta">Get Started</a></li>
          </ul>
        </div>
      </nav>

      <div
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
        <a href="#services" onClick={closeMobile}>Services</a>
        <a href="#domains" onClick={closeMobile}>Domains</a>
        <a href="#programs" onClick={closeMobile}>Programs</a>
        <a href="#about" onClick={closeMobile}>About</a>
        <a href="#contact" onClick={closeMobile}>Get Started →</a>
      </div>
    </>
  );
}
