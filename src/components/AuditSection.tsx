"use client";

import useInView from "@/hooks/useInView";

export default function AuditSection() {
  const { ref, inView } = useInView();

  return (
    <section className="audit-section" id="audit" style={{ padding: "88px 24px" }}>
      <div className="audit-inner" ref={ref}>
        <div>
          <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
            AI Readiness Audit
          </div>
          <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
            Start Here. Know Exactly Where You Stand.
          </h2>
          <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`} style={{ marginBottom: "36px" }}>
            Before spending a rupee on AI training or tools, organisations need
            to know their current state. The Striikers AI Audit gives you that
            — and a clear, prioritised path forward.
          </p>
          <div className={`audit-steps anim-stagger ${inView ? "in-view" : ""}`}>
            <div className="audit-step">
              <div className="audit-step-num">1</div>
              <div className="audit-step-text">
                <strong>Discovery Interviews (Week 1)</strong>
                <span>
                  Structured conversations with leadership and functional heads
                  across your organisation to understand current AI use,
                  appetite, and constraints.
                </span>
              </div>
            </div>
            <div className="audit-step">
              <div className="audit-step-num">2</div>
              <div className="audit-step-text">
                <strong>Function-by-Function Assessment (Week 2)</strong>
                <span>
                  Deep-dive into 4–8 key functions using the Striikers AI
                  Opportunity Matrix — scoring each process on effort,
                  frequency, and AI suitability.
                </span>
              </div>
            </div>
            <div className="audit-step">
              <div className="audit-step-num">3</div>
              <div className="audit-step-text">
                <strong>Synthesis &amp; Roadmap (Week 3)</strong>
                <span>
                  All findings synthesised into a board-ready report with a
                  prioritised 90-day AI roadmap, projected ROI, and recommended
                  engagement sequence.
                </span>
              </div>
            </div>
            <div className="audit-step">
              <div className="audit-step-num">4</div>
              <div className="audit-step-text">
                <strong>Executive Presentation</strong>
                <span>
                  Findings and strategic recommendations presented to leadership, with an executive discussion on priorities, roadmap decisions, and next-step actions.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`audit-report-card anim-scale-in ${inView ? "in-view" : ""}`}>
          <div className="audit-report-header">
            <div className="audit-report-title">
              AI Maturity Report — Sample Output
            </div>
            <div className="audit-report-badge">Confidential</div>
          </div>
          <div className="audit-gauge">
            <div className="gauge-label">
              <span>L&amp;D Function</span>
              <span>74 / 100</span>
            </div>
            <div className="gauge-bar">
              <div className="gauge-fill" style={{ width: "74%" }}></div>
            </div>
          </div>
          <div className="audit-gauge">
            <div className="gauge-label">
              <span>HR Function</span>
              <span>58 / 100</span>
            </div>
            <div className="gauge-bar">
              <div className="gauge-fill" style={{ width: "58%" }}></div>
            </div>
          </div>
          <div className="audit-gauge">
            <div className="gauge-label">
              <span>Finance Function</span>
              <span>42 / 100</span>
            </div>
            <div className="gauge-bar">
              <div className="gauge-fill" style={{ width: "42%" }}></div>
            </div>
          </div>
          <div className="audit-gauge">
            <div className="gauge-label">
              <span>Operations</span>
              <span>35 / 100</span>
            </div>
            <div className="gauge-bar">
              <div className="gauge-fill" style={{ width: "35%" }}></div>
            </div>
          </div>
          <div className="audit-gauge">
            <div className="gauge-label">
              <span>Marketing</span>
              <span>61 / 100</span>
            </div>
            <div className="gauge-bar">
              <div className="gauge-fill" style={{ width: "61%" }}></div>
            </div>
          </div>
          <div className="audit-deliverables">
            <div className="audit-del-title">Deliverables Included</div>
            <div className="audit-del-list">
              <div className="audit-del-item">
                <div className="del-check">✓</div>AI Opportunity Map
                (function × process × ROI)
              </div>
              <div className="audit-del-item">
                <div className="del-check">✓</div>90-day prioritised AI
                roadmap
              </div>
              <div className="audit-del-item">
                <div className="del-check">✓</div>Board-ready executive
                summary deck
              </div>
              <div className="audit-del-item">
                <div className="del-check">✓</div>Tool recommendations and
                budget guide
              </div>
              <div className="audit-del-item">
                <div className="del-check">✓</div>Recommended workshop
                sequence per function
              </div>
            </div>
          </div>
          <a href="#contact" className="btn-audit-cta">
            Book Your AI Audit →
          </a>
        </div>
      </div>
    </section>
  );
}
