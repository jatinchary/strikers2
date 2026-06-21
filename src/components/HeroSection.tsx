export default function HeroSection() {
  return (
    <section className="hero" id="home">
      <div className="hero-bg-circles" aria-hidden="true">
        <div className="hero-circle hero-c1"></div>
        <div className="hero-circle hero-c2"></div>
        <div className="hero-circle hero-c3"></div>
      </div>
      <div className="hero-inner">
        <div>
          <div className="hero-pill anim-hero-delay">
            <span className="pill-dot" aria-hidden="true"></span>
            Accelerating Enterprise Transformation Through Practical AI
          </div>
          <h1 className="anim-hero-delay">
            From AI <span className="grad">Awareness</span>
            <br />
            to AI <span className="grad">Implementation</span>
          </h1>
          <p className="hero-sub anim-hero-delay">
            We help organisations assess readiness, build capability, redesign workflows, and embed AI into everyday business operations.
          </p>
          <div className="hero-btns anim-hero-delay">
            <a href="#contact" className="btn-white">Book a Discovery Call</a>
            <a href="#services" className="btn-ghost">Explore Our Solutions</a>
          </div>
        </div>
        <div className="hero-visual anim-hero-visual" aria-hidden="true">
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
  );
}
