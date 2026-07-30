import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const reasonsToCall = [
  ["Important numbers do not agree", "Finance, operations, and reporting produce different answers—and nobody can explain which one is authoritative."],
  ["A platform decision is stuck", "A migration, modernization, or AI initiative has too many plausible options and too little decision-grade context."],
  ["Senior ownership is missing", "The team can implement, but needs experienced judgment on architecture, reliability, governance, cost, or recovery."],
];

const selectedWork = [
  ["ANALYTICAL PLATFORM", "Lakehouse at production scale", "Dremio, Apache Iceberg, Superset, Kubernetes, and an approximately 570-model dbt estate."],
  ["GOVERNED AI", "Natural-language data access with hard boundaries", "Production MCP services for Claude, with deterministic controls between the model and enterprise data."],
  ["PLATFORM MIGRATION", "AI-accelerated, human-governed transition", "A phased migration approach for an approximately 174-model analytical backlog across cloud platforms."],
];

export default function LandingPage() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Independent data architecture, delivery &amp; assurance</div>
          <h1>Build a data system<br /><em>your business can trust.</em></h1>
          <p>I help companies design, deliver, modernize, and continuously assure reliable data platforms—without the cost and delay of assembling an entire specialist team.</p>
          <div className="actions">
            <a className="button primary" href="/data-architecture-delivery-kit-site/services/">Explore services <span>→</span></a>
            <a className="button ghost" href="/data-architecture-delivery-kit-site/work/">See selected work</a>
          </div>
          <div className="micro-proof"><b>PHD IN COMPUTER SCIENCE</b><span /><strong>7+ years in production data platforms</strong><span /><strong>Finance and digital assets</strong></div>
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
          <span className="kicker">WHEN TO BRING ME IN</span>
          <h2>Your data problem is important.<br /><em>The right answer is not obvious.</em></h2>
          <p>I work where business meaning, technical trade-offs, and operating risk meet—before a plausible answer becomes an expensive commitment.</p>
        </div>
        <div className="solution-preview-grid">
          {reasonsToCall.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="mistake-section">
        <div><span className="kicker light">THE ECONOMICS CHANGED</span><h2>Fewer data professionals.<br /><em>Not zero.</em></h2></div>
        <div className="mistake-list">
          <article><span>Before AI</span><p>Large teams performed nearly every design and implementation step manually.</p></article>
          <article><span>With AI</span><p>Models accelerate research, implementation, testing, and documentation.</p></article>
          <article><span>Still human</span><p>A named expert must establish context, judge trade-offs, verify correctness, and remain accountable for the outcome.</p></article>
        </div>
      </section>

      <section className="home-section work-preview-section">
        <div className="section-intro">
          <span className="kicker">SELECTED EXPERIENCE</span>
          <h2>Not theoretical architecture.<br /><em>Work carried into production.</em></h2>
          <p>Selected examples are anonymized to protect client confidentiality. Each shows the scale, controls, and operating reality behind the recommendation.</p>
        </div>
        <div className="work-preview-grid">
          {selectedWork.map(([label, title, body]) => <article key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
        <a className="inline-cta" href="/data-architecture-delivery-kit-site/work/">Review the selected work <span>→</span></a>
      </section>

      <section className="home-cta">
        <span>SENIOR EXPERTISE WITHOUT AN ENTIRE DATA DEPARTMENT</span>
        <h2>Start with a focused diagnostic of the risks, decisions, and next steps that matter most.</h2>
        <div className="actions centered"><a className="button lime" href="/data-architecture-delivery-kit-site/services/#diagnostic">See the Architecture Diagnostic →</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
