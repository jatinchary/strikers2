"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface NavLink {
  label: string;
  href: string;
  cta?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Domains", href: "#domains" },
  { label: "Programs", href: "#programs" },
  { label: "Get Started", href: "#contact", cta: true },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="nav-links">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.cta ? "nav-cta" : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <div
        className={`mobile-nav${mobileOpen ? " open" : ""}`}
        id="mobile-nav"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={closeMobile}
          >
            {link.label}{link.cta ? " →" : ""}
          </a>
        ))}
      </div>
    </>
  );
}
