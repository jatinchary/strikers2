"use client";

import useInView from "@/hooks/useInView";

export default function ServicesSection() {
  const { ref, inView } = useInView();

  return (
    <section id="services" style={{ background: "#fff" }}>
      <div className="sec" ref={ref}>
        <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
          What We Do
        </div>
        <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
          Four Core Services. One Complete Transformation.
        </h2>
        <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`}>
          Each service maps to a stage in the journey. Engage one or all four —
          we design the engagement around where you are.
        </p>
        <div className={`services-grid anim-stagger ${inView ? "in-view" : ""}`}>
          <div className="svc-card s1">
            <div className="svc-icon-row">
              <div className="svc-icon" role="img" aria-label="AI Readiness Audit">🔍</div>
              <span className="svc-tag">Stage 1</span>
            </div>
            <div className="svc-title">AI Readiness Audit</div>
            <p className="svc-desc">
              A structured diagnostic that maps your organisation&apos;s current AI
              maturity across people, process, and technology — and gives you a
              clear, prioritised roadmap for what to do next.
            </p>
            <ul className="svc-list">
              <li>Function-by-function AI opportunity mapping</li>
              <li>Technology and data readiness assessment</li>
              <li>People and skills gap analysis</li>
              <li>Prioritised 90-day AI roadmap</li>
              <li>Executive briefing deck with board-ready findings</li>
              <li>ROI model: projected time and cost savings per function</li>
            </ul>
            <div className="svc-price">
              <a href="#contact" className="svc-cta">Book an Audit →</a>
            </div>
          </div>

          <div className="svc-card s2">
            <div className="svc-icon-row">
              <div className="svc-icon" role="img" aria-label="AI Awareness Workshops">🎯</div>
              <span className="svc-tag">Stage 2 + 3</span>
            </div>
            <div className="svc-title">AI Awareness &amp; Capability Workshops</div>
            <p className="svc-desc">
              Role-based AI capability programs designed to help teams move from awareness to practical adoption. Each engagement is tailored to the workflows, priorities, and business objectives of the function—ensuring measurable application beyond the workshop.
            </p>
            <ul className="svc-list">
              <li>Available for: L&amp;D, HR, Finance, Operations, Sales, Marketing, IT, Leadership, and more</li>
              <li>Executive AI Briefing (4 hours) — strategic alignment for leadership teams</li>
              <li>Practitioner Certification (1 day) — hands-on enablement for functional teams</li>
              <li>Agentic AI Intensive (2 days) — workflow redesign and transformation acceleration</li>
              <li>Pre-engagement assessment and customised action roadmap</li>
              <li>30-day adoption check-in and progress review</li>
            </ul>
            <div className="svc-price">
              <a href="#programs" className="svc-cta">See Programs →</a>
            </div>
          </div>

          <div className="svc-card s3">
            <div className="svc-icon-row">
              <div className="svc-icon" role="img" aria-label="AI Workflow Implementation">⚙️</div>
              <span className="svc-tag">Stage 4</span>
            </div>
            <div className="svc-title">AI Workflow Implementation</div>
            <p className="svc-desc">
              Beyond training — Striikers works with your teams to redesign and
              rebuild actual workflows using AI and agentic systems. Real
              implementation. Measurable outcomes. Permanent change.
            </p>
            <ul className="svc-list">
              <li>Process mapping and redesign using AI tools</li>
              <li>Agentic workflow builds — from pilot to production</li>
              <li>Tool selection, integration, and setup</li>
              <li>SOP documentation for AI-enabled processes</li>
              <li>Team handover and capability transfer</li>
              <li>30/60/90-day outcome measurement</li>
            </ul>
            <div className="svc-price">
              <a href="#contact" className="svc-cta">Discuss Project →</a>
            </div>
          </div>

          <div className="svc-card s4">
            <div className="svc-icon-row">
              <div className="svc-icon" role="img" aria-label="AI Advisory Retainer">📈</div>
              <span className="svc-tag">Stage 5</span>
            </div>
            <div className="svc-title">AI Advisory Retainer</div>
            <p className="svc-desc">
              Ongoing strategic partnership. Keeps your leadership and
              functional teams ahead of the curve — tool evaluation, process
              iteration, team upskilling, and board-level AI strategy.
            </p>
            <ul className="svc-list">
              <li>Monthly strategy sessions with Leadership</li>
              <li>Continuous tool evaluation and adoption support</li>
              <li>Quarterly AI maturity assessment</li>
              <li>Priority access for new workshops and programs</li>
              <li>On-call advisory for AI decisions and experiments</li>
              <li>Annual AI roadmap review and refresh</li>
            </ul>
            <div className="svc-price">
              <a href="#contact" className="svc-cta">Discuss Retainer →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
