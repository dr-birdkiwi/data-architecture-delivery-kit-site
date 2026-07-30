import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

const solutionPreview = [
  ["Trusted reporting", "Make important reports explainable, reproducible, and easier to trust."],
  ["Analytics foundation", "Give teams reliable answers without building more platform than they can operate."],
  ["Platform modernization", "Move away from fragile or expensive systems without a risky big-bang rewrite."],
  ["Lakehouse at scale", "Balance openness, performance, governance, and operating reality at high volume."],
];

export default function LandingPage() {
  return (
    <main>
      <SiteHeader current="home" />

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span /> A better way to design data platforms</div>
          <h1>Turn your data problem<br /><em>into the right data system.</em></h1>
          <p>Whether you need trusted reports, a new analytics platform, or a large-scale lakehouse, start by describing the business need in plain English. We uncover the requirements people usually miss, compare sensible designs, and produce a plan your team can challenge.</p>
          <div className="actions">
            <a className="button primary" href="/data-architecture-delivery-kit-site/solutions/">Find your starting point <span>→</span></a>
            <a className="button ghost" href="/data-architecture-delivery-kit-site/how-it-works/">See how it works</a>
          </div>
          <div className="micro-proof"><b>No architecture expertise required.</b><span /> Start with the business need.</div>
        </div>

        <div className="decision-preview" aria-label="Example of a plain-English request becoming a focused architecture review">
          <div className="preview-top"><span>YOUR DATA PROBLEM</span><b>PLAIN ENGLISH</b></div>
          <blockquote>“Our finance reports are slow, expensive, and difficult to trust.”</blockquote>
          <div className="preview-divider"><span>WHAT THE PROCESS SURFACES</span></div>
          <div className="missed-grid">
            <article><i>01</i><strong>Correctness</strong><small>Must old reports reproduce exactly?</small></article>
            <article><i>02</i><strong>Recovery</strong><small>What failure can the business tolerate?</small></article>
            <article><i>03</i><strong>Team fit</strong><small>Who will operate the result?</small></article>
          </div>
          <div className="preview-result"><span>5 focused questions</span><i>→</i><span>2–3 viable directions</span><i>→</i><b>1 reviewable plan</b></div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Core product promise">
        <div><span>01</span><strong>Plain-English input</strong></div>
        <div><span>02</span><strong>Context-aware choices</strong></div>
        <div><span>03</span><strong>Evidence-backed plan</strong></div>
        <div><span>04</span><strong>Clear next step</strong></div>
      </section>

      <section className="home-section solutions-preview">
        <div className="section-intro">
          <span className="kicker">BUILT AROUND YOUR PROBLEM</span>
          <h2>You bring the need.<br /><em>The method finds the shape.</em></h2>
          <p>There is no universal “best” data stack. The right direction depends on correctness, speed, scale, cost, existing systems, and the people who must run it.</p>
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
        <h2>See how the decisions come together.</h2>
        <div className="actions centered"><a className="button lime" href="/data-architecture-delivery-kit-site/solutions/">Explore solutions →</a><a className="text-link" href="/data-architecture-delivery-kit-site/how-it-works/">See how it works</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
