"use client";

import { useState, useEffect } from "react";

export default function PrivacyBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("privacyOk")) {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    localStorage.setItem("privacyOk", "1");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="privacy-banner"
      role="dialog"
      aria-label="Privacy notice"
      aria-live="polite"
    >
      <p>
        We collect contact information you submit via this site solely to respond
        to your enquiry — in line with India&apos;s Digital Personal Data Protection
        Act, 2023. We do not sell or share your data.{" "}
        <a href="mailto:strikers4you@gmail.com?subject=Data Privacy Request">
          Data requests →
        </a>
      </p>
      <button onClick={dismiss} aria-label="Accept and close privacy notice">
        Got it
      </button>
    </div>
  );
}
