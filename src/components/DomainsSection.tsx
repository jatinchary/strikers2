"use client";

import useInView from "@/hooks/useInView";

export default function DomainsSection() {
  const { ref, inView } = useInView();

  return (
    <section className="domains" id="domains">
      <div className="sec" ref={ref}>
        <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
          Who We Serve
        </div>
        <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
          AI Transformation Across Every Function
        </h2>
        <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`}>
          Each domain gets a workshop built around its actual work — not
          recycled generic content. Real use cases, real tools, real outcomes
          for that team.
        </p>
        <div className={`domains-grid anim-stagger ${inView ? "in-view" : ""}`}>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Marketing and Brand">📣</span>
            <div className="domain-name">Marketing &amp; Brand</div>
            <div className="domain-desc">
              Content strategy, copy generation, campaign automation, social
              listening and analytics.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">Available</span> */}
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Sales and Customer Experience">🛒</span>
            <div className="domain-name">Sales &amp; CX</div>
            <div className="domain-desc">
              Proposal generation, CRM intelligence, call prep, objection
              handling, customer insights.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">Available</span> */}
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Operations">⚙️</span>
            <div className="domain-name">Project Management & Operations</div>
            <div className="domain-desc">
              SOP documentation, process optimisation, reporting dashboards,
              supply chain intelligence.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">Available</span> */}
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="IT and Digital">💻</span>
            <div className="domain-name">IT &amp; Digital</div>
            <div className="domain-desc">
              Agentic workflows, AI tooling strategy, prompt engineering,
              developer AI enablement.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">Technical track</span> */}
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Learning and Development">🎓</span>
            <div className="domain-name">Learning &amp; Development</div>
            <div className="domain-desc">
              Content creation, needs analysis, assessment design, evaluation —
              rebuilt with AI.
            </div>
            <div className="domain-tags">
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Human Resources">👥</span>
            <div className="domain-name">Human Resources</div>
            <div className="domain-desc">
              JD writing, screening, onboarding, performance reviews, HR
              analytics — all AI-enabled.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">High Impact</span> */}
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="C-Suite and Leadership">💼</span>
            <div className="domain-name">C-Suite &amp; Leadership</div>
            <div className="domain-desc">
              Executive AI literacy, strategic decision frameworks, board-level
              AI governance.
            </div>
            <div className="domain-tags">
            </div>
          </div>
          <div className="domain-card">
            <span className="domain-icon" role="img" aria-label="Finance and Risk">📊</span>
            <div className="domain-name">Finance &amp; Risk</div>
            <div className="domain-desc">
              Reporting automation, risk modelling, audit documentation,
              financial narrative generation.
            </div>
            <div className="domain-tags">
              {/* <span className="dtag">Available</span> */}
            </div>
          </div>
        </div>
        <div className={`domain-extra anim-fade-up ${inView ? "in-view" : ""}`}>
          <p>
            Also available:{" "}
            <strong>Supply Chain</strong>,{" "}
            <strong>EdTech</strong>, and{" "}
            <strong>Healthcare</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
