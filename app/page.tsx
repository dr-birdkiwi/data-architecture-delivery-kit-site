import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const contextGaps = [
  ["Unstated business rules", "The model cannot infer which number is authoritative, which exception matters, or what a wrong answer would cost."],
  ["Fragmented real-world evidence", "Requirements live across systems, documents, incidents, policies, and the memories of people who know the business."],
  ["Trade-offs with consequences", "A design can be technically valid yet too expensive, too fragile, or too complex for the people expected to operate it."],
  ["Accountability after launch", "The model does not own an outage, explain a financial discrepancy, recover corrupted data, or answer to the business."],
];

export default function LandingPage() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Frontier AI meets accountable data expertise</div>
          <h1>AI can generate a data system.<br /><em>It cannot know whether it is the right one.</em></h1>
          <p>Frontier models can produce SQL, pipelines, cloud configuration, and architecture in minutes. But they only reason over the context they receive—and the requirements that matter most are often unstated, scattered, or invisible to an inexperienced team.</p>
          <div className="actions">
            <a className="button primary" href="/data-architecture-delivery-kit-site/solutions/">See the problems we solve <span>→</span></a>
            <a className="button ghost" href="/data-architecture-delivery-kit-site/offerings/">Why experts still matter</a>
          </div>
          <div className="micro-proof"><b>AI reduces the delivery effort.</b><span /> It does not remove the need for judgment or accountability.</div>
        </div>

        <div className="decision-preview" aria-label="Example of a plain-English request becoming a focused architecture review">
          <div className="preview-top"><span>WHAT THE MODEL RECEIVES</span><b>INCOMPLETE CONTEXT</b></div>
          <blockquote>“Build us a modern data platform for reporting and AI.”</blockquote>
          <div className="preview-divider"><span>WHAT THE REQUEST DOES NOT SAY</span></div>
          <div className="missed-grid">
            <article><i>01</i><strong>Business meaning</strong><small>Which number is authoritative?</small></article>
            <article><i>02</i><strong>Failure tolerance</strong><small>What if data is late, wrong, or lost?</small></article>
            <article><i>03</i><strong>Operating reality</strong><small>Who can run and recover it?</small></article>
          </div>
          <div className="preview-result"><span>Plausible output</span><i>→</i><span>Hidden assumptions</span><i>→</i><b>Production risk</b></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Core product promise">
        <div><span>01</span><strong>Frontier-model speed</strong></div>
        <div><span>02</span><strong>Expert context discovery</strong></div>
        <div><span>03</span><strong>Production-aware judgment</strong></div>
        <div><span>04</span><strong>Continuous assurance</strong></div>
      </section>

      <section className="home-section solutions-preview">
        <div className="section-intro">
          <span className="kicker">THE CONTEXT PROBLEM</span>
          <h2>The hardest part is not generating code.<br /><em>It is knowing what the AI must know.</em></h2>
          <p>A reliable data system depends on business semantics, failure consequences, historical behavior, security boundaries, existing systems, cost limits, and team capability. People without data experience often do not know which of those facts will change the design.</p>
        </div>
        <div className="solution-preview-grid">
          {contextGaps.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="mistake-section">
        <div><span className="kicker light">WHAT THE LLM ERA CHANGED</span><h2>You may need fewer data professionals.<br /><em>You do not need zero.</em></h2></div>
        <div className="mistake-list">
          <article><span>Before frontier AI</span><p>A full team spent substantial time researching, coding, testing, documenting, and operating the system.</p></article>
          <article><span>With frontier AI</span><p>Models accelerate research, implementation, debugging, documentation, and the comparison of possible solutions.</p></article>
          <article><span>What remains human</span><p>Experts uncover missing context, judge trade-offs, verify business correctness, and remain accountable when reality differs from the plan.</p></article>
        </div>
      </section>

      <section className="home-cta">
        <span>EXPERTISE WITHOUT A PERMANENT DATA TEAM</span>
        <h2>Use the specialist judgment you need—only for as long as you need it.</h2>
        <div className="actions centered"><a className="button lime" href="/data-architecture-delivery-kit-site/solutions/">See where we can help →</a><a className="text-link" href="/data-architecture-delivery-kit-site/offerings/">See the technical depth</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
