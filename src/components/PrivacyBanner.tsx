"use client";

import { useSyncExternalStore } from "react";

function subscribeToStorage(cb: () => void) {
  window.addEventListener("storage", cb);
  return () => window.removeEventListener("storage", cb);
}

function getSnapshot() {
  if (typeof window === "undefined") return false;
  return !localStorage.getItem("privacyOk");
}

export default function PrivacyBanner() {
  const visible = useSyncExternalStore(subscribeToStorage, getSnapshot, () => false);

  const dismiss = () => {
    localStorage.setItem("privacyOk", "1");
    window.dispatchEvent(new Event("storage"));
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
