"use client";

import useInView from "@/hooks/useInView";

export default function CtaSection() {
  const { ref, inView } = useInView();

  return (
    <section className="cta-section" id="contact">
      <div className="cta-inner" ref={ref}>
        <h2 className={`anim-fade-up ${inView ? "in-view" : ""}`}>
          Ready to Start Your
          <br />
          AI Transformation?
        </h2>
        <p className={`anim-fade-up ${inView ? "in-view" : ""}`}>
          Most organisations are closer than they think. The first step is
          knowing where you actually stand — and where to focus first.
        </p>
        <div className={`cta-chips anim-fade-up ${inView ? "in-view" : ""}`}>
          <span className="cta-chip">AI Readiness Audit</span>
          <span className="cta-chip">Function Workshops</span>
          <a
            href="https://calendly.com/sriharisslr/discovery"
            className="cta-chip"
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
            Send Message 
          </button>
        </form>
        <p className="cta-contact" style={{ marginTop: "20px" }}>
          Or email directly:{" "}
          <a href="mailto:strikers4you@gmail.com">connect@striikers.com</a> 
        </p>
      </div>
    </section>
  );
}
