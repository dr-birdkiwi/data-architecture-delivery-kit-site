import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const contextGaps = [
  ["AI sees only what you provide", "The decisive business rules, failure risks, and operating constraints are often unstated or scattered across the company."],
  ["Plausible is not production-ready", "Valid-looking code can still produce conflicting numbers, fragile pipelines, or a system the team cannot operate."],
  ["Reliability needs an owner", "A model does not reconcile discrepancies, recover failed systems, or accept responsibility when important data is wrong."],
];

export default function LandingPage() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Data architecture, delivery &amp; continuous assurance</div>
          <h1>Build a data system<br /><em>your business can trust.</em></h1>
          <p>We help companies design, deliver, modernize, and continuously assure reliable data platforms—without requiring them to build every capability in-house.</p>
          <div className="actions">
            <a className="button primary" href="/data-architecture-delivery-kit-site/services/">Explore our services <span>→</span></a>
            <a className="button ghost" href="/data-architecture-delivery-kit-site/expertise/">Why expertise matters</a>
          </div>
          <div className="micro-proof"><b>DOCTORATE-LEVEL EXPERTISE</b><span /><strong>Production experience</strong><span /><strong>Design through ongoing assurance</strong></div>
        </div>

        <div className="decision-preview" aria-label="Example of a plain-English request becoming a focused architecture review">
          <div className="preview-top"><span>WHAT AI SEES</span><b>ONE SENTENCE</b></div>
          <blockquote>“Build us a modern data platform for reporting and AI.”</blockquote>
          <div className="preview-divider"><span>WHAT EXPERTS SURFACE</span></div>
          <div className="missed-grid">
            <article><i>01</i><strong>Business meaning</strong><small>Which number is authoritative?</small></article>
            <article><i>02</i><strong>Failure tolerance</strong><small>What if data is late, wrong, or lost?</small></article>
            <article><i>03</i><strong>Operating reality</strong><small>Who can run and recover it?</small></article>
          </div>
          <div className="preview-result"><span>Complete context</span><i>→</i><span>Better decisions</span><i>→</i><b>Reliable system</b></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Core product promise">
        <div><span>DESIGN</span><strong>Make the right decisions</strong></div>
        <div><span>DELIVER</span><strong>Turn decisions into a working system</strong></div>
        <div><span>ASSURE</span><strong>Keep critical data trustworthy</strong></div>
      </section>

      <section className="home-section solutions-preview">
        <div className="section-intro">
          <span className="kicker">WHY EXPERTS STILL MATTER</span>
          <h2>AI can generate a data system.<br /><em>It cannot know whether it is the right one.</em></h2>
          <p>Frontier models move quickly, but only from the context they receive. Experienced professionals identify the missing facts that change the design—and the plausible answers that should not be trusted.</p>
        </div>
        <div className="solution-preview-grid">
          {contextGaps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="mistake-section">
        <div><span className="kicker light">THE ECONOMICS CHANGED</span><h2>Fewer data professionals.<br /><em>Not zero.</em></h2></div>
        <div className="mistake-list">
          <article><span>Before AI</span><p>Large teams performed nearly every design and implementation step manually.</p></article>
          <article><span>With AI</span><p>Models accelerate research, implementation, testing, and documentation.</p></article>
          <article><span>Still human</span><p>Experts establish context, judge trade-offs, verify correctness, and own the outcome.</p></article>
        </div>
      </section>

      <section className="home-cta">
        <span>EXPERTISE WITHOUT AN ENTIRE DATA DEPARTMENT</span>
        <h2>Bring in doctorate-level data judgment exactly where your business needs it.</h2>
        <div className="actions centered"><a className="button lime" href="/data-architecture-delivery-kit-site/services/">See how we can help →</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
