"use client";

import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "We already ran a ChatGPT awareness session. How is this different?",
    a: "Most one-off awareness sessions end with good intentions and no implementation. Striikers is designed specifically to move organisations from that stuck point — through function-specific capability building, actual workflow redesign, and ongoing measurement. We start where the awareness session left off.",
  },
  {
    q: "Is this only for IT or tech teams?",
    a: "No — in fact, most of our work is with non-technical functions: L&D, HR, Finance, Operations, and C-Suite. Each workshop is rebuilt around the specific work of that team, not generic AI theory. If anything, technical teams are a smaller portion of our work.",
  },
  {
    q: "What size organisations do you work with?",
    a: "We work with mid-size and large Indian enterprises — typically 200 to 5,000+ employees. The AI Audit scales with org size. Workshop programs can run for teams of 4 to 20 participants. We're not the right fit for individual freelancers or very small startups.",
  },
  {
    q: "Do participants need any prior AI knowledge?",
    a: "None at all. The Practitioner Certification is designed for people who are curious but have never built anything with AI. The pre-workshop diagnostic we run helps us meet participants exactly where they are. By the end of Day 1, participants have built 5 working AI tools — starting from zero.",
  },
  {
    q: "Where do you deliver — only Hyderabad?",
    a: "We deliver onsite across India (Mumbai, Bangalore, Delhi, Pune, Chennai, Hyderabad) and virtually for distributed or remote teams. Travel is billed separately for outstation engagements. Virtual delivery works just as well for all formats.",
  },
  {
    q: "What's the best way to start?",
    a: "Most clients start with a 15-minute discovery call — it costs nothing and helps us both figure out whether there's a fit and where to begin. If you already know you want the Audit, you can book it directly. If you're not sure, the call will give you clarity on exactly what engagement makes sense for your organisation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="sec">
        <div className="sec-label">Common Questions</div>
        <h2 className="sec-title">Questions Enterprises Usually Ask</h2>
        <p className="sec-sub">
          Answers to the things leadership teams want to know before they engage.
        </p>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? " open" : ""}`}>
              <button
                className="faq-q"
                aria-expanded={openIndex === i}
                onClick={() => toggle(i)}
              >
                {item.q}
                <span className="faq-q-icon" aria-hidden="true">+</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
