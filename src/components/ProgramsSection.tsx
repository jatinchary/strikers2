"use client";

import useInView from "@/hooks/useInView";

export default function ProgramsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="programs" id="programs">
      <div className="sec" ref={ref}>
        <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
          Workshop Programs
        </div>
        <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
          Three Engagement Models. Every Function. Measurable Impact.
        </h2>
        <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`}>
          Available across Marketing, Sales, L&amp;D, HR, Finance, Operations, IT, and more. Our proven delivery framework remains consistent while each engagement is tailored to the priorities, workflows, and outcomes of the function.
        </p>
        <div className={`programs-grid anim-stagger ${inView ? "in-view" : ""}`}>
          <div className="prog-card">
            <div className="prog-icon" role="img" aria-label="Executive">🏛️</div>
            <div className="prog-name">Executive AI Briefing</div>
            <div className="prog-dur"> 4 Hours · Leadership Cohort (Up to 8 Participants)</div>
            <p className="prog-desc">
              A strategic leadership session designed to align executives around AI opportunities, risks, and business priorities. Focused on decision-making—not tools—this briefing helps leadership teams build a practical roadmap for enterprise AI adoption.
            </p>
            <ul className="prog-feats">
              <li>Industry-specific AI landscape and business implications</li>
              <li>Opportunity identification and prioritisation framework</li>
              <li>Build vs buy vs partner strategic decisions</li>
              <li>Governance, compliance, and operating considerations</li>
              <li>Leadership roadmap with immediate next actions</li>
            </ul>
            <div className="prog-price-row">
              <a href="#contact" className="prog-btn prog-btn-out">Enquire Now</a>
            </div>
          </div>

          <div className="prog-card featured">
            <span className="prog-pop-badge">⭐ Recommended</span>
            <div className="prog-icon" role="img" aria-label="Trophy">🏆</div>
            <div className="prog-name">AI Practitioner Certification</div>
            <div className="prog-dur">1 Full Day · Up to 15 Participants</div>
            <p className="prog-desc">
              Designed for functional managers and practitioners who want to move beyond AI awareness into practical application. Participants work directly on their real workflows, build usable AI solutions, and leave with capabilities that can be applied immediately within their teams.
            </p>
            <ul className="prog-feats">
              <li>Function-specific use cases tailored to real business scenarios</li>
              <li>Build up to 5 practical AI solutions during the session</li>
              <li>Pre-program diagnostic to customise priorities and agenda</li>
              <li>Individual 30-day application and adoption plan</li>
              <li>Follow-up session to reinforce implementation and outcomes</li>
              <li>Certificate of completion</li>
            </ul>
            <div className="prog-price-row">
              <a href="#contact" className="prog-btn prog-btn-fill">Build AI Capability</a>
            </div>
          </div>

          <div className="prog-card">
            <span className="prog-pop-badge">⭐ Recommended</span>
            <div className="prog-icon" role="img" aria-label="Rocket">🚀</div>
            <div className="prog-name">Agentic AI Transformation Intensive</div>
            <div className="prog-dur">
              2 Full Days · Up to 20 Participants
            </div>
            <p className="prog-desc">
              An immersive transformation program designed for teams ready to redesign how work gets done. Participants move beyond using AI tools and begin embedding agentic workflows, automation, and AI-enabled operating models into core business processes.
            </p>
            <ul className="prog-feats">
              <li>Day 1: Workflow assessment and AI integration planning by role</li>
              <li>Day 2: Agentic workflow design, automation, and implementation</li>
              <li>Exposure to 24+ tools across the functional lifecycle</li>
              <li>Build 8–10 working systems and practical use cases</li>
              <li>90-day function transformation roadmap</li>
              <li>90-day advisory support to sustain adoption and impact</li>
            </ul>
            <div className="prog-price-row">
              <a href="#contact" className="prog-btn prog-btn-out">Explore Transformation Program</a>
            </div>
          </div>
        </div>

        <div className={`retainer-strip anim-fade-up ${inView ? "in-view" : ""}`}>
          <div className="ret-left">
            <h4>AI Advisory Partnership — Sustaining Transformation</h4>
            <p>
              A strategic partnership for organisations that want to maintain AI momentum, evaluate emerging tools, iterate on workflows, and keep leadership aligned. The fastest-transforming organisations don&apos;t stop at one workshop.
            </p>
          </div>
          <div className="ret-right">
            <a href="#contact" className="ret-cta">Discuss Retainer</a>
          </div>
        </div>
      </div>
    </section>
  );
}
