import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const solutionPreview = [
  ["Trusted reporting", "Make important reports explainable, reproducible, and easier to trust."],
  ["Data foundation for AI", "Make company data usable, governed, and ready for practical AI applications."],
  ["Platform modernization", "Move away from fragile or expensive systems without a risky big-bang rewrite."],
  ["Continuous data assurance", "Keep critical data accurate, fresh, and explainable after delivery."],
];

export default function LandingPage() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Expert-led data and AI systems</div>
          <h1>Get the data system you need<br /><em>without building a data team.</em></h1>
          <p>We design reliable reporting, analytics, and AI-ready data systems around your business. We can hand your team a clear implementation package, build the system with you, and continuously validate the data after launch.</p>
          <div className="actions">
            <a className="button primary" href="/data-architecture-delivery-kit-site/solutions/">Find your starting point <span>→</span></a>
            <a className="button ghost" href="/data-architecture-delivery-kit-site/how-it-works/">See how it works</a>
          </div>
          <div className="micro-proof"><b>No architecture expertise required.</b><span /> Doctorate-level professionals remain accountable for the technical judgment.</div>
        </div>

        <div className="decision-preview" aria-label="Example of a plain-English request becoming a focused architecture review">
          <div className="preview-top"><span>YOUR DATA PROBLEM</span><b>PLAIN ENGLISH</b></div>
          <blockquote>“Our finance reports are slow, expensive, and difficult to trust.”</blockquote>
          <div className="preview-divider"><span>WHAT WE RESOLVE</span></div>
          <div className="missed-grid">
            <article><i>01</i><strong>What matters</strong><small>Which data must the business trust?</small></article>
            <article><i>02</i><strong>What fits</strong><small>What works with your systems and budget?</small></article>
            <article><i>03</i><strong>Who owns it</strong><small>Build it together or hand it over?</small></article>
          </div>
          <div className="preview-result"><span>Clear design</span><i>→</i><span>Optional implementation</span><i>→</i><b>Continuous assurance</b></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Core product promise">
        <div><span>01</span><strong>Business-first design</strong></div>
        <div><span>02</span><strong>Optional implementation</strong></div>
        <div><span>03</span><strong>Doctorate-level expertise</strong></div>
        <div><span>04</span><strong>Continuous assurance</strong></div>
      </section>

      <section className="home-section solutions-preview">
        <div className="section-intro">
          <span className="kicker">BUILT AROUND YOUR PROBLEM</span>
          <h2>You bring the business problem.<br /><em>We take responsibility for the technical path.</em></h2>
          <p>You do not need to choose a warehouse, database, or AI stack. We translate the outcome you need into a design that fits your systems, risks, budget, and operating reality.</p>
        </div>
        <div className="solution-preview-grid">
          {solutionPreview.map(([title, body], index) => <a href="/data-architecture-delivery-kit-site/solutions/" key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p><b>Explore solution →</b></a>)}
        </div>
      </section>

      <section className="mistake-section">
        <div><span className="kicker light">WHY THIS MATTERS</span><h2>The costliest data mistakes happen <em>before</em> the first line of code.</h2></div>
        <div className="mistake-list">
          <article><span>Wrong problem</span><p>A polished system that does not solve the business need.</p></article>
          <article><span>Hidden constraint</span><p>A late security, audit, recovery, or data-residency surprise.</p></article>
          <article><span>Unoperable design</span><p>A platform that is technically elegant but too complex for the team.</p></article>
        </div>
      </section>

      <section className="home-cta">
        <span>FROM VAGUE NEED TO CLEAR NEXT STEP</span>
        <h2>See where we can remove the data burden.</h2>
        <div className="actions centered"><a className="button lime" href="/data-architecture-delivery-kit-site/solutions/">Explore solutions →</a><a className="text-link" href="/data-architecture-delivery-kit-site/how-it-works/">See the engagement</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
