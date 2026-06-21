"use client";

import useInView from "@/hooks/useInView";

export default function JourneySection() {
  const { ref, inView } = useInView();

  return (
    <section className="journey-section" id="journey">
      <div className="sec" ref={ref}>
        <div className={`sec-label anim-fade-up ${inView ? "in-view" : ""}`}>
          The Transformation Journey
        </div>
        <h2 className={`sec-title anim-fade-up ${inView ? "in-view" : ""}`}>
          AI Transformation Is a Journey, Not an Event
        </h2>
        <p className={`sec-sub anim-fade-up ${inView ? "in-view" : ""}`}>
          Most organisations get stuck after the awareness stage. Striikers is
          built to take you through all five stages — and stay with you until
          AI is embedded in how you work.
        </p>
        <div className={`journey-flow anim-stagger ${inView ? "in-view" : ""}`}>
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
        <p className={`journey-note anim-fade-up ${inView ? "in-view" : ""}`}>
          You can enter at any stage.{" "}
          <strong>Most clients start with the AI Audit</strong> — it tells you
          exactly where to focus.
        </p>
      </div>
    </section>
  );
}
