import Image from "next/image";
import Navbar from "@/components/Navbar";
import FaqSection from "@/components/FaqSection";
import PrivacyBanner from "@/components/PrivacyBanner";

export default function Home() {
  return (
    <>
      {/* Skip to content */}
      <a
        href="#home"
        style={{
          position: "absolute",
          left: "-9999px",
          top: "auto",
          width: "1px",
          height: "1px",
          overflow: "hidden",
          zIndex: 9999,
          background: "var(--navy)",
          color: "#fff",
          padding: "8px 16px",
          borderRadius: "4px",
          fontWeight: 700,
        }}
      >
        Skip to main content
      </a>

      {/* ═══ NAV ═══ */}
      <Navbar />

      {/* ═══ HERO ═══ */}
      <section className="hero" id="home">
        <div className="hero-bg-circles" aria-hidden="true">
          <div className="hero-circle hero-c1"></div>
          <div className="hero-circle hero-c2"></div>
          <div className="hero-circle hero-c3"></div>
        </div>
        <div className="hero-inner">
          <div>
            <div className="hero-pill">
              <span className="pill-dot" aria-hidden="true"></span>
              Accelerating Enterprise Transformation Through Practical AI
            </div>
            <h1>
              From AI <span className="grad">Awareness</span>
              <br />
              to AI <span className="grad">Implementation</span>
          </h1>
            <p className="hero-sub">
            We help organisations assess readiness, build capability, redesign workflows, and embed AI into everyday business operations.
            </p>
            <div className="hero-btns">
              <a
                href="#contact"
                className="btn-white"
              >
                Book a Discovery Call
              </a>
              <a href="#services" className="btn-ghost">
              Explore Our Solutions
              </a>
            </div>
            <div className="hero-trust">
              {/* <span className="hero-trust-text">Trusted by</span>
              <span className="trust-chip">Driving AI Adoption Across Diverse Industries</span> */}
            </div>
          </div>
          <div className="hero-visual" aria-hidden="true">
            <div className="journey-step">
              <div className="j-num j-n1">1</div>
              <div className="j-text">
                <strong>AI Readiness Audit</strong>
                <span>Assess where your organisation stands today</span>
              </div>
              <div className="j-arrow">›</div>
            </div>
            <div className="journey-step">
              <div className="j-num j-n2">2</div>
              <div className="j-text">
                <strong>Executive Alignment</strong>
                <span>Build leadership conviction and strategy</span>
              </div>
              <div className="j-arrow">›</div>
            </div>
            <div className="journey-step">
              <div className="j-num j-n3">3</div>
              <div className="j-text">
                <strong>Team Capability Building</strong>
                <span>Function-specific AI workshops that stick</span>
              </div>
              <div className="j-arrow">›</div>
            </div>
            <div className="journey-step">
              <div className="j-num j-n4">4</div>
              <div className="j-text">
                <strong>Workflow Implementation</strong>
                <span>AI embedded into your actual processes</span>
              </div>
              <div className="j-arrow">›</div>
            </div>
            <div className="journey-step">
              <div className="j-num j-n5">5</div>
              <div className="j-text">
                <strong>Scale &amp; Sustain</strong>
                <span>support to maintain momentum</span>
              </div>
              <div className="j-arrow">›</div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ STATS BAR ═══ */}
      {/* <div className="stats-bar" role="region" aria-label="Key metrics">
        <div className="stats-inner">
          <div>
            <div className="stat-n">16+</div>
            <div className="stat-l">Years Industry Experience</div>
          </div>
          <div>
            <div className="stat-n">200+</div>
            <div className="stat-l">Professionals Trained</div>
          </div>
          <div>
            <div className="stat-n">10+</div>
            <div className="stat-l">Domains Served</div>
          </div>
          <div>
            <div className="stat-n">67%</div>
            <div className="stat-l">Avg. Process Time Saved</div>
          </div>
          <div>
            <div className="stat-n">90 min</div>
            <div className="stat-l">To First Working AI Tool</div>
            <div className="stat-source">Measured in-session</div>
          </div>
        </div>
      </div> */}

      {/* ═══ JOURNEY ═══ */}
      <section className="journey-section" id="journey">
        <div className="sec">
          <div className="sec-label">The Transformation Journey</div>
          <h2 className="sec-title">
            AI Transformation Is a Journey, Not an Event
          </h2>
          <p className="sec-sub">
            Most organisations get stuck after the awareness stage. Striikers is
            built to take you through all five stages — and stay with you until
            AI is embedded in how you work.
          </p>
          <div className="journey-flow">
            <div className="journey-cards">
              <div className="jcard jc1">
                <div className="jcard-icon" role="img" aria-label="Magnifying glass — audit">🔍</div>
                <div className="jcard-step">Stage 1</div>
                <div className="jcard-title">AI Audit</div>
                <div className="jcard-desc">
                  Map your current state. Find the highest-impact opportunities.
                  Build the roadmap.
                </div>
              </div>
              <div className="jcard jc2">
                <div className="jcard-icon" role="img" aria-label="Light bulb — awareness">💡</div>
                <div className="jcard-step">Stage 2</div>
                <div className="jcard-title">Awareness</div>
                <div className="jcard-desc">
                  Executive alignment, cross-functional briefings, and building
                  the case for change.
                </div>
              </div>
              <div className="jcard jc3">
                <div className="jcard-icon" role="img" aria-label="Graduation cap — capability">🎓</div>
                <div className="jcard-step">Stage 3</div>
                <div className="jcard-title">Capability</div>
                <div className="jcard-desc">
                  Function-specific AI workshops. Hands-on. Role-relevant.
                  Measured outcomes.
                </div>
              </div>
              <div className="jcard jc4">
                <div className="jcard-icon" role="img" aria-label="Gear — implementation">⚙️</div>
                <div className="jcard-step">Stage 4</div>
                <div className="jcard-title">Implementation</div>
                <div className="jcard-desc">
                  AI embedded into actual workflows. Agentic pipelines. Process
                  redesign.
                </div>
              </div>
              <div className="jcard jc5">
                <div className="jcard-icon" role="img" aria-label="Chart — scale">📈</div>
                <div className="jcard-step">Stage 5</div>
                <div className="jcard-title">Scale</div>
                <div className="jcard-desc">
                  Ongoing advisory, measurement, iteration, and
                  organisation-wide rollout.
                </div>
              </div>
            </div>
          </div>
          <p className="journey-note">
            You can enter at any stage.{" "}
            <strong>Most clients start with the AI Audit</strong> — it tells you
            exactly where to focus.
          </p>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section id="services" style={{ background: "#fff" }}>
        <div className="sec">
          <div className="sec-label">What We Do</div>
          <h2 className="sec-title">
            Four Core Services. One Complete Transformation.
          </h2>
          <p className="sec-sub">
            Each service maps to a stage in the journey. Engage one or all four —
            we design the engagement around where you are.
          </p>
          <div className="services-grid">
            {/* Service 1 */}
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
                <a href="#contact" className="svc-cta">
                  Book an Audit →
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="svc-card s2">
              <div className="svc-icon-row">
                <div className="svc-icon" role="img" aria-label="AI Awareness Workshops">🎯</div>
                <span className="svc-tag">Stage 2 + 3</span>
              </div>
              <div className="svc-title">
                AI Awareness &amp; Capability Workshops
              </div>
              <p className="svc-desc">
              Role-based AI capability programs designed to help teams move from awareness to practical adoption. Each engagement is tailored to the workflows, priorities, and business objectives of the function—ensuring measurable application beyond the workshop.
              </p>
              <ul className="svc-list">
                <li>
                  Available for: L&amp;D, HR, Finance, Operations, Sales,
                  Marketing, IT, Legal, Leadership, and more
                </li>
                <li>Executive AI Briefing (4 hours) — strategic alignment for leadership teams</li>
                <li>
                Practitioner Certification (1 day) — hands-on enablement for functional teams
                </li>
                <li>
                Agentic AI Intensive (2 days) — workflow redesign and transformation acceleration
                </li>
                <li>
                Pre-engagement assessment and customised action roadmap
                </li>
                <li>30-day adoption check-in and progress review</li>
              </ul>
              <div className="svc-price">
                <a href="#programs" className="svc-cta">See Programs →</a>
              </div>
            </div>

            {/* Service 3 */}
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
                <a href="#contact" className="svc-cta">
                  Discuss Project →
                </a>
              </div>
            </div>

            {/* Service 4 */}
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
                <a href="#contact" className="svc-cta">
                  Discuss Retainer →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DOMAINS ═══ */}
      <section className="domains" id="domains">
        <div className="sec">
          <div className="sec-label">Who We Serve</div>
          <h2 className="sec-title">
            AI Transformation Across Every Function
          </h2>
          <p className="sec-sub">
            Each domain gets a workshop built around its actual work — not
            recycled generic content. Real use cases, real tools, real outcomes
            for that team.
          </p>
          <div className="domains-grid">
            <div className="domain-card">
              <span className="domain-icon" role="img" aria-label="Marketing and Brand">📣</span>
              <div className="domain-name">Marketing &amp; Brand</div>
              <div className="domain-desc">
                Content strategy, copy generation, campaign automation, social
                listening and analytics.
              </div>
              <div className="domain-tags">
                <span className="dtag">Available</span>
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
                <span className="dtag">Available</span>
              </div>
            </div>
            <div className="domain-card">
              <span className="domain-icon" role="img" aria-label="Operations">⚙️</span>
              <div className="domain-name">Operations</div>
              <div className="domain-desc">
                SOP documentation, process optimisation, reporting dashboards,
                supply chain intelligence.
              </div>
              <div className="domain-tags">
                <span className="dtag">Available</span>
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
                <span className="dtag">Technical track</span>
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
                {/* <span className="dtag">Most Requested</span>
                <span className="dtag">67% time saved</span> */}
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
                <span className="dtag">High Impact</span>
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
                {/* <span className="dtag">4-hr format</span> */}
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
                <span className="dtag">Available</span>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: "28px" }}>
            <p style={{ fontSize: "15px", color: "var(--gray-600)" }}>
              Also available:{" "}
              <strong style={{ color: "var(--navy)" }}>Legal</strong>,{" "}
              <strong style={{ color: "var(--navy)" }}>Project Management</strong>,{" "}
              <strong style={{ color: "var(--navy)" }}>Supply Chain</strong>,{" "}
              <strong style={{ color: "var(--navy)" }}>Healthcare</strong>, and{" "}
              <strong style={{ color: "var(--navy)" }}>EdTech</strong>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ AI AUDIT DEEP DIVE ═══ */}
      <section className="audit-section" id="audit" style={{ padding: "88px 24px" }}>
        <div className="audit-inner">
          <div>
            <div className="sec-label">AI Readiness Audit</div>
            <h2 className="sec-title">
              Start Here. Know Exactly Where You Stand.
            </h2>
            <p className="sec-sub" style={{ marginBottom: "36px" }}>
              Before spending a rupee on AI training or tools, organisations need
              to know their current state. The Striikers AI Audit gives you that
              — and a clear, prioritised path forward.
            </p>
            <div className="audit-steps">
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
          <div className="audit-report-card">
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
            <a
              href="#contact"
         
              className="btn-audit-cta"
            >
              Book Your AI Audit →
            </a>
          </div>
        </div>
      </section>

      {/* ═══ PROGRAMS ═══ */}
      <section className="programs" id="programs">
        <div className="sec">
          <div className="sec-label">Workshop Programs</div>
          <h2 className="sec-title">
          Three Engagement Models. Every Function. Measurable Impact.
          </h2>
          <p className="sec-sub">
          Available across Marketing, Sales, L&D, HR, Finance, Operations, , IT, and more. Our proven delivery framework remains consistent while each engagement is tailored to the priorities, workflows, and outcomes of the function.
          </p>
          <div className="programs-grid">
            {/* Program 1 */}
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
                <a
                  href="#contact"
                  className="prog-btn prog-btn-out"
                >
                  Enquire Now
                </a>
              </div>
            </div>

            {/* Program 2 — Featured */}
            <div className="prog-card featured">
              <span className="prog-pop-badge">⭐ Recommended</span>
              <div className="prog-icon" role="img" aria-label="Trophy">🏆</div>
              <div className="prog-name">AI Practitioner Certification</div>
              <div className="prog-dur">1 Full Day · Up to 15 Participants</div>
              <p className="prog-desc">
              Designed for functional managers and practitioners who want to move beyond AI awareness into practical application. Participants work directly on their real workflows, build usable AI solutions, and leave with capabilities that can be applied immediately within their teams.
              </p>
              <ul className="prog-feats">
                <li>
                Function-specific use cases tailored to real business scenarios
                </li>
                <li>Build up to 5 practical AI solutions during the session</li>
                <li>Pre-program diagnostic to customise priorities and agenda</li>
                <li>Individual 30-day application and adoption plan</li>
                <li>Follow-up session to reinforce implementation and outcomes</li>
                <li>Certificate of completion</li>
              </ul>
              <div className="prog-price-row">
                <a
                  href="#contact"
                  className="prog-btn prog-btn-fill"
                >
                  Build AI Capability
                </a>
              </div>
            </div>

            {/* Program 3 */}
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
                <li>
                Day 1: Workflow assessment and AI integration planning by role
                </li>
                <li>
                Day 2: Agentic workflow design, automation, and implementation
                </li>
                <li>Exposure to 24+ tools across the functional lifecycle</li>
                <li>Build 8–10 working systems and practical use cases</li>
                <li>90-day function transformation roadmap</li>
                <li>90-day advisory support to sustain adoption and impact</li>
              </ul>
              <div className="prog-price-row">
                <a
                  href="#contact"
                  className="prog-btn prog-btn-out"
                >
                  Explore Transformation Program
                </a>
              </div>
            </div>
          </div>

          {/* Retainer Strip */}
          <div className="retainer-strip">
            <div className="ret-left">
              <h4>AI Advisory Partnership — Sustaining Transformation</h4>
              <p>
              A strategic partnership for organisations that want to maintain AI momentum, evaluate emerging tools, iterate on workflows, and keep leadership aligned. The fastest-transforming organisations don't stop at one workshop.
              </p>
            </div>
            <div className="ret-right" style={{ textAlign: "right", flexShrink: 0 }}>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, var(--navy), var(--blue))",
                  color: "#fff",
                  padding: "11px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "14px",
                  transition: "opacity .2s",
                }}
              >
                Discuss Retainer
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section className="about" id="about">
        {/* <div className="sec">
          <div className="about-grid">
            <div className="about-visual">
              <div className="about-card">
                <div className="about-initials" aria-hidden="true">SS</div>
                <div className="about-card-inner">
                  <div className="about-name">S. Srihari</div>
                  <div className="about-role">
                    Founder, Striikers · Hyderabad
                  </div>
                </div>
              </div>
              <div className="about-exp-chip">
                <div className="aec-num">16+</div>
                <div className="aec-label">Years in L&amp;D</div>
              </div>
            </div>
            <div className="about-text">
              <div className="sec-label">About the Founder</div>
              <h3>
                Built by a Practitioner.
                <br />
                Not a Theorist.
              </h3>
              <p>
                I spent 16 years in learning and development — at Tata STRIVE,
                Pearson, and as an independent consultant — before AI became
                something organisations needed to act on. That practitioner
                background is what makes Striikers different from every other AI
                training provider in India.
              </p>
              <p>
                I&apos;ve been in the room. I know what it takes to build a course
                under pressure, run a TNA with difficult stakeholders, and get
                SME sign-off on content. When I design an AI workshop, it&apos;s built
                around those realities — not around what looks good in a deck.
              </p>
              <p>
                After delivering AI integration programs for corporate teams
                across India, I expanded Striikers from L&amp;D-focused workshops
                into a full AI transformation practice covering every function of
                the organisation.
              </p>
              <div className="creds">
                <span className="cred">16 Years in L&amp;D</span>
                <span className="cred">Tata STRIVE</span>
                <span className="cred">Pearson</span>
                <span className="cred">SEBI Registered Analyst</span>
                <span className="cred">PMI AI-Powered PM Certified</span>
                <span className="cred">Prompt Engineering Certified</span>
                <span className="cred">Claude Certified Architect</span>
                <span className="cred">Hyderabad, India</span>
              </div>
              <a
                href="https://linkedin.com/in/sriharisslr"
            target="_blank"
            rel="noopener noreferrer"
                className="linkedin-link"
                aria-label="Connect with Srihari on LinkedIn"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </div>
          </div> */}

          {/* Co-Founder & Vice President */}
          {/* <div className="team-row">
            <div className="team-card">
              <div className="team-card-visual">
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=faces"
                  alt="A. Bharath — Co-Founder"
                  className="team-photo"
                />
                <div className="team-card-overlay">
                  <div className="team-name">A. Bharath</div>
                  <div className="team-role">Co-Founder</div>
                </div>
              </div>
              <div className="team-info">
                <p>
                  Strategic operations leader with deep expertise in enterprise
                  transformation and client engagement across Indian markets.
                </p>
                <div className="team-creds">
                  <span className="cred">Enterprise Strategy</span>
                  <span className="cred">Operations</span>
                  <span className="cred">Client Success</span>
                </div>
              </div>
            </div>

            <div className="team-card">
              <div className="team-card-visual">
                <img
                  src="/vp.png"
                  alt="R. Karthik — Vice President"
                  className="team-photo"
                />
                <div className="team-card-overlay">
                  <div className="team-name">R. Karthik</div>
                  <div className="team-role">Vice President</div>
                </div>
              </div>
              <div className="team-info">
                <p>
                  Technology and AI implementation specialist driving agentic
                  workflow builds and tool integration for enterprise clients.
                </p>
                <div className="team-creds">
                  <span className="cred">AI Implementation</span>
                  <span className="cred">Agentic Workflows</span>
                  <span className="cred">Tech Strategy</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* ═══ WORKBOOK ═══ */}
      {/* <section className="workbook">
        <div className="sec">
          <div className="workbook-box">
            <div className="wb-left">
              <span className="wb-badge">Self-Serve Tool</span>
              <div className="wb-title">
                AI Audit Workbook — For Individuals
              </div>
              <p className="wb-desc">
                Not ready for an organisational audit yet? Start here. The
                L&amp;D AI Audit Workbook is a 60-minute self-guided workbook
                that shows you exactly where AI can make the biggest difference
                in your specific role — with 20 copy-paste prompts built for
                practitioners.
              </p>
              <div className="wb-chips">
                <span className="wb-chip">10-page guided workbook</span>
                <span className="wb-chip">AI Opportunity Matrix</span>
                <span className="wb-chip">20 role-specific prompts</span>
                <span className="wb-chip">30-day action plan</span>
              </div>
            </div>
            <div className="wb-right">
              <a
                href="#contact"
                style={{
                  background: "linear-gradient(135deg, var(--navy), var(--blue))",
                  color: "#fff",
                  padding: "13px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 700,
                  fontSize: "15px",
                  display: "inline-block",
                  transition: "opacity .2s",
                }}
              >
                Get the Workbook →
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* ═══ FAQ ═══ */}
      <FaqSection />

      {/* ═══ CTA / CONTACT ═══ */}
      <section className="cta-section" id="contact">
        <div className="cta-inner">
          <h2>
            Ready to Start Your
            <br />
            AI Transformation?
          </h2>
          <p>
            Most organisations are closer than they think. The first step is
            knowing where you actually stand — and where to focus first.
          </p>
          <div className="cta-chips">
            <span className="cta-chip">AI Readiness Audit</span>
            <span className="cta-chip">Function Workshops</span>
            <a
              href="https://calendly.com/sriharisslr/discovery"
              className="cta-chip"
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              💬 15-min Discovery Call →
            </a>
          </div>
          <form
            className="contact-form"
            action="https://formspree.io/f/mojzagbj"
            method="POST"
            aria-label="Contact form"
          >
            <div className="cform-row">
              <div className="cform-field">
                <label htmlFor="cf-name">Your Name</label>
                <input
                  type="text"
                  id="cf-name"
                  name="name"
                  placeholder="Priya Sharma"
                  required
                  autoComplete="name"
                />
              </div>
              <div className="cform-field">
                <label htmlFor="cf-email">Work Email</label>
                <input
                  type="email"
                  id="cf-email"
                  name="email"
                  placeholder="priya@company.com"
                  required
                  autoComplete="email"
                />
              </div>
            </div>
            <div className="cform-row">
              <div className="cform-field">
                <label htmlFor="cf-company">Organisation</label>
                <input
                  type="text"
                  id="cf-company"
                  name="company"
                  placeholder="Company name"
                  autoComplete="organization"
                />
              </div>
              <div className="cform-field">
                <label htmlFor="cf-interest">I&apos;m interested in</label>
                <select id="cf-interest" name="interest">
                  <option value="">Select a service…</option>
                  <option value="audit">AI Readiness Audit</option>
                  <option value="workshop">Workshop / Training</option>
                  <option value="implementation">AI Implementation</option>
                  <option value="retainer">Advisory Retainer</option>
                  <option value="workbook">Workbook (Individual)</option>
                  <option value="certification">AI Practitioner Certification</option>
                  <option value="intensive">Agentic AI Transformation Intensive</option>
                  <option value="advisory">Executive AI Briefing</option>
                  <option value="discovery">Other</option>
                </select>
              </div>
            </div>
            <div className="cform-field">
              <label htmlFor="cf-message">
                Anything specific you&apos;d like to discuss? (optional)
              </label>
              <textarea
                id="cf-message"
                name="message"
                placeholder="Tell us about your organisation, team size, or what's prompted the interest in AI…"
              ></textarea>
            </div>
            <button type="submit" className="cform-submit">
              Send Message — We&apos;ll Respond Within 24 Hours
            </button>
          </form>
          <p className="cta-contact" style={{ marginTop: "20px" }}>
            Or email directly:{" "}
            <a href="mailto:strikers4you@gmail.com">strikers4you@gmail.com</a> ·
            Hyderabad, India · Supporting organisations anywhere their teams are
          </p>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-brand-logo-row">
                <div className="footer-logo-wrap">
            <Image
                    src="/logo.png"
                    alt="Striikers logo"
                    width={48}
                    height={48}
                    className="footer-logo"
                  />
                </div>
                <span className="footer-brand-wordmark">STRIIKERS</span>
              </div>
              <p>
              Helping organisations assess readiness, build capability, redesign workflows, and embed AI into everyday operations—turning AI potential into measurable business outcomes.
              </p>
              <div className="footer-contact-row">
                <a href="mailto:strikers4you@gmail.com" className="footer-contact-link">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  strikers4you@gmail.com
                </a>
                <a href="https://wa.me/917670958476" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp Us
                </a>
                <a href="https://linkedin.com/in" className="footer-contact-link" target="_blank" rel="noopener noreferrer">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="fcol">
              <h4>Services</h4>
              <ul>
                <li><a href="#audit">AI Readiness Audit</a></li>
                <li><a href="#services">AI Capability Building</a></li>
                <li><a href="#services">AI Workflow Transformation</a></li>
                <li><a href="#services">AI Advisory Partnership</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Programs</h4>
              <ul>
                <li><a href="#programs">Executive AI Strategy Briefing </a></li>
                <li><a href="#programs">AI Practitioner Certification</a></li>
                <li><a href="#programs">Agentic AI Transformation Intensive</a></li>
                <li><a href="#programs">AI Readiness Workbook</a></li>
                <li>
                  {/* <a href="#contact" style={{ color: "rgba(0,194,224,0.7)", fontStyle: "italic" }}>
                    Pricing on request →
                  </a> */}
                </li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Domains</h4>
              <ul>
                <li><a href="#domains">Sales &amp; Marketing</a></li>
                <li><a href="#domains">IT & Digital</a></li>
                <li><a href="#domains">Operations</a></li>
                <li><a href="#domains">Human Resources</a></li>
                <li><a href="#domains">Learning & Development</a></li>
                <li><a href="#domains">Finance & Risk </a></li>
                <li><a href="#domains">Leadership & Strategy</a></li>
              </ul>
            </div>
            <div className="fcol">
              <h4>Social Media</h4>
              <ul>
                <li>
                  <a href="mailto:strikers4you@gmail.com">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    Email
                  </a>
                </li>
                <li>
                  <a href="https://x.com/striikers" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    X (Twitter)
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/striikers" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/striikers" target="_blank" rel="noopener noreferrer">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
            
          </div>
          <div className="footer-bottom">
            <p>© 2026 Striikers · Hyderabad, India · All rights reserved</p>
            <p className="footer-tagline">
              From AI Awareness to AI Implementation.
            </p>
          </div>
        </div>
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="mobile-cta-bar" role="complementary" aria-label="Quick actions">
        <a href="https://calendly.com/sriharisslr/discovery">📞 Book a Call</a>
        <a href="#contact">✉ Send a Message</a>
        </div>

      {/* Privacy banner */}
      <PrivacyBanner />
    </>
  );
}
