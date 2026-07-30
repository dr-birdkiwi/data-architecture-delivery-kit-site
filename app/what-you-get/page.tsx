import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const deliverables = [
  ["Decision-ready blueprint", "Context, options, architecture decisions, risks, costs, operating responsibilities, and an implementation roadmap."],
  ["Optional working implementation", "Infrastructure, pipelines, models, integrations, access controls, monitoring, and delivery stages shaped to the agreed scope."],
  ["Reusable technical assets", "Source-controlled configuration, infrastructure code, tests, deployment instructions, and implementation artifacts your team can own."],
  ["Verification evidence", "Clear records of what was declared, structurally checked, statically verified, plan-verified, or operationally exercised."],
  ["Documentation and handover", "Decision records, diagrams, operating runbooks, recovery procedures, training, and explicit ownership boundaries."],
  ["Continuous data assurance", "Ongoing validation of critical data expectations, quality signals, regressions, incidents, and agreed remediation responsibilities."],
];

export default function WhatYouGetPage() {
  return (
    <main>
      <SiteHeader current="outcomes" />
      <section className="page-hero output-hero"><span className="kicker">WHAT YOU GET</span><h1>Choose how far<br /><em>we take the solution.</em></h1><p>Use the design with your own team, ask us to implement it, or continue with ongoing data validation and quality assurance. The handoff point is your choice.</p></section>
      <section className="package-preview">
        <div className="package-window">
          <div className="package-bar"><span>DELIVERY PACKAGE</span><b>CONDITIONAL PASS</b></div>
          <div className="package-title"><div><span>PROJECT</span><strong>Finance reporting modernization</strong></div><div><span>DIRECTION</span><strong>Hybrid archive + managed serving</strong></div></div>
          <div className="package-metrics"><article><span>CONFIRMED</span><strong>14</strong><small>context facts</small></article><article><span>OPEN</span><strong>3</strong><small>human decisions</small></article><article><span>HIGH</span><strong>2</strong><small>material risks</small></article></div>
          <div className="package-findings"><article><b>BLOCKER</b><span>Recovery target has no accountable owner.</span></article><article><b className="major">MAJOR</b><span>Reference-data history is not preserved.</span></article><article><b className="clear">CLEAR</b><span>Public access is prohibited and evidenced.</span></article></div>
        </div>
          <div className="package-copy"><span className="kicker">BUILT FOR USE</span><h2>More than a slide deck.<br />More honest than an AI answer.</h2><p>Whether you receive a blueprint or a working implementation, important claims show their source, confidence, owner, and validation status. A green check never silently means “safe for production.”</p><div className="boundary-box"><strong>Source</strong><i>·</i><strong>Confidence</strong><i>·</i><strong>Owner</strong><i>·</i><strong>Status</strong></div></div>
      </section>
      <section className="deliverable-grid">{deliverables.map(([title, body], index) => <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>)}</section>
      <section className="honesty-band"><div><span className="kicker light">YOUR CHOICE OF HANDOFF</span><h2>Own the implementation—or keep us alongside it.</h2></div><div><p><b>Self-implemented:</b> your team receives the decisions, technical assets, controls, roadmap, and evidence needed to proceed.</p><p><b>Delivered and assured:</b> we implement the agreed scope and can continue validating critical data quality after launch. Business risk and production approval remain human decisions.</p></div></section>
      <section className="next-page"><span>NEXT: TECHNICAL DEPTH</span><h2>See the method, controls, and interactive example.</h2><a className="button primary" href="/data-architecture-delivery-kit-site/offerings/">Technical deep dive →</a></section>
      <SiteFooter />
    </main>
  );
}
