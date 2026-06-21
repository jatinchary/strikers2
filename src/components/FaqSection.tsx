"use client";

import { useState } from "react";
import useInView from "@/hooks/useInView";

const FAQ_ITEMS = [
  {
    q: "We already ran a ChatGPT awareness session. How is this different?",
    a: "Most one-off awareness sessions end with good intentions and no implementation. Striikers is designed specifically to move organisations from that stuck point — through function-specific capability building, actual workflow redesign, and ongoing measurement. We start where the awareness session left off.",
  },
  {
    q: "Is this only for IT or tech teams?",
    a: "Not at all. AI transformation is a business initiative, not just a technology initiative. While we support IT and digital teams, much of our work focuses on functions such as Sales, Marketing L&D, HR, Finance, Operations, , and executive leadership. Every engagement is tailored to the team's workflows, priorities, and business objectives, ensuring practical adoption and measurable business impact.",
  },
  {
    q: "What size organisations do you work with?",
    a: "We work with organisations across a wide range of industries and stages of AI maturity. Whether you're exploring AI opportunities for the first time or looking to scale adoption across multiple functions, our approach is tailored to your goals, priorities, and business context.",
  },
  {
    q: "Do participants need any prior AI knowledge?",
    a: "No prior AI experience is required. Our programs are designed to accommodate participants at different levels of familiarity, from first-time users to experienced professionals exploring advanced applications.",
  },
  {
    q: "Where do you deliver — only Hyderabad?",
    a: "We deliver programs onsite, virtually, and through hybrid formats—anywhere your teams are located. Whether you're bringing together a local team or a distributed workforce, our programs are designed to create a seamless, engaging, and impactful learning experience.",
  },
  {
    q: "What's the best way to start?",
    a: "Most clients start with a 15-minute discovery call — it costs nothing and helps us both figure out whether there's a fit and where to begin. If you already know you want the Audit, you can book it directly. If you're not sure, the call will give you clarity on exactly what engagement makes sense for your organisation.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="sec" ref={ref}>
        <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
          Frequently Asked Questions
        </div>
        <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
          Questions Business Leaders Ask
        </h2>
        <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`}>
          Insights into the most common questions leadership teams have when evaluating AI transformation, capability building, and enterprise adoption.
        </p>
        <div className={`faq-list anim-stagger ${inView ? "in-view" : ""}`}>
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} className={`faq-item${openIndex === i ? " open" : ""}`}>
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
