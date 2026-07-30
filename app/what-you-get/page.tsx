import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const deliverables = [
  ["Context brief", "Confirmed facts, discovered evidence, assumptions, conflicts, defaults, and unresolved unknowns."],
  ["Focused questions", "A short decision-driven discovery round with rationale, impact, owner, and blocking status."],
  ["Candidate designs", "Two or more credible directions compared against the priorities that matter to your company."],
  ["Decision records", "Selected choices, rejected alternatives, consequences, confidence, and accountable owners."],
  ["Risk register", "Correctness, security, recovery, cost, migration, and operating risks that require attention."],
  ["Implementation roadmap", "Phased work, dependencies, validation gates, rollback thinking, and unresolved approvals."],
];

export default function WhatYouGetPage() {
  return (
    <main>
      <SiteHeader current="outcomes" />
      <section className="page-hero output-hero"><span className="kicker">WHAT YOU GET</span><h1>A decision package.<br /><em>Not an AI answer.</em></h1><p>The output is designed to be inspected, challenged, corrected, and handed to the people responsible for implementation and approval.</p></section>
      <section className="package-preview">
        <div className="package-window">
          <div className="package-bar"><span>ARCHITECTURE PACKAGE</span><b>CONDITIONAL PASS</b></div>
          <div className="package-title"><div><span>PROJECT</span><strong>Finance reporting modernization</strong></div><div><span>DIRECTION</span><strong>Hybrid archive + managed serving</strong></div></div>
          <div className="package-metrics"><article><span>CONFIRMED</span><strong>14</strong><small>context facts</small></article><article><span>OPEN</span><strong>3</strong><small>human decisions</small></article><article><span>HIGH</span><strong>2</strong><small>material risks</small></article></div>
          <div className="package-findings"><article><b>BLOCKER</b><span>Recovery target has no accountable owner.</span></article><article><b className="major">MAJOR</b><span>Reference-data history is not preserved.</span></article><article><b className="clear">CLEAR</b><span>Public access is prohibited and evidenced.</span></article></div>
        </div>
        <div className="package-copy"><span className="kicker">DESIGNED FOR REVIEW</span><h2>See what is known.<br />See what is not.</h2><p>A green check never means “safe for production.” Each important item states where it came from, how certain it is, who owns it, and whether it remains unresolved.</p><div className="boundary-box"><strong>Source</strong><i>·</i><strong>Confidence</strong><i>·</i><strong>Owner</strong><i>·</i><strong>Status</strong></div></div>
      </section>
      <section className="deliverable-grid">{deliverables.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</section>
      <section className="honesty-band"><div><span className="kicker light">A HANDOFF, NOT A VERDICT</span><h2>The package makes the next conversation better.</h2></div><div><p><b>Ready for discussion:</b> the context, alternatives, trade-offs, risks, and implementation sequence are visible in one place.</p><p><b>Still owned by people:</b> business risk, security acceptance, funding, and production approval remain explicit human decisions.</p></div></section>
      <section className="next-page"><span>NEXT: TECHNICAL DEPTH</span><h2>See the method, controls, and interactive example.</h2><a className="button primary" href="/data-architecture-delivery-kit-site/offerings/">Technical deep dive →</a></section>
      <SiteFooter />
    </main>
  );
}
