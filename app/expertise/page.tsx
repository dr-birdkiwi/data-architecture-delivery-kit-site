import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const expertise = [
  ["01 · DEPTH", "Doctorate-level technical judgment", "Strong foundations in computer science, data architecture, distributed systems, analytics, and the reasoning required to evaluate unfamiliar technology responsibly."],
  ["02 · EXPERIENCE", "Production—not theoretical—architecture", "Designs are judged against failure, recovery, change, cost, governance, and the capabilities of the people who must operate them."],
  ["03 · OWNERSHIP", "Architecture through operation", "We can remain involved from discovery and design through implementation, migration, validation, handover, and continuing assurance."],
  ["04 · INDEPENDENCE", "Technology follows the requirement", "Recommendations are driven by workload, risk, existing systems, team capability, and economics—not by a preferred vendor or fashionable architecture."],
];

const evidence = [
  ["01", "Declared", "A person or document states that a requirement or control exists."],
  ["02", "Structurally checked", "Required fields, relationships, and package contents are present."],
  ["03", "Statically verified", "Code or configuration passes a relevant deterministic check."],
  ["04", "Plan verified", "A proposed change has been evaluated in its real deployment context."],
  ["05", "Operationally tested", "Runtime behavior, recovery, or failure handling has been exercised."],
];

const principles = [
  ["No silent assumptions", "Material uncertainty remains visible. High-risk unknowns are asked, discovered, made conditional, or escalated."],
  ["No automatic authority", "AI can generate and compare. Named people remain responsible for consequential choices and production approval."],
  ["No empty green checks", "Every validation claim states what was checked, how it was checked, and what remains unproven."],
  ["No knowledge trap", "Decisions, operating procedures, recovery steps, and ownership are documented so the system does not depend on one person."],
  ["No forced replacement", "Existing systems and contracts are treated as constraints and assets, not automatic reasons to rebuild everything."],
  ["No client-data reuse", "Client-specific evidence and decisions remain separate from generalized professional knowledge and reusable delivery practices."],
];

export default function ExpertisePage() {
  return (
    <main>
      <SiteHeader current="expertise" />

      <section className="page-hero expertise-hero">
        <span className="kicker">SENIOR JUDGMENT, PRODUCTION DISCIPLINE</span>
        <h1>Experienced data professionals<br /><em>stay accountable.</em></h1>
        <p>AI helps us research, generate, test, and document faster. It does not replace the contextual judgment, verification, and responsibility required for consequential data systems.</p>
        <div className="expert-principle"><span>AI proposes</span><i>→</i><span>Experts decide</span><i>→</i><span>Tools verify</span><i>→</i><b>Humans approve</b></div>
      </section>

      <section className="expertise-section">
        <div className="section-intro">
          <span className="kicker">WHY CLIENTS BRING US IN</span>
          <h2>Senior thinking.<br /><em>Practical execution.</em></h2>
          <p>The value is not a diagram or a list of tools. It is disciplined judgment that remains useful when the system meets production constraints, organizational reality, and change.</p>
        </div>
        <div className="expertise-grid">
          {expertise.map(([label, title, body]) => (
            <article key={label}><span>{label}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="accountability-band">
        <div>
          <span className="kicker light">AI-ACCELERATED, HUMAN-ACCOUNTABLE</span>
          <h2>Use the speed.<br /><em>Keep the judgment.</em></h2>
        </div>
        <div className="responsibility-split">
          <article><span>AI HELPS WITH</span><p>Discovery, research, candidate generation, implementation, tests, documentation, and identifying inconsistencies.</p></article>
          <article><span>PROFESSIONALS OWN</span><p>Business interpretation, consequential assumptions, architecture trade-offs, validation adequacy, risk acceptance, and production approval.</p></article>
        </div>
      </section>

      <section className="knowledge-section">
        <div className="knowledge-copy">
          <span className="kicker">PROFESSIONAL KNOWLEDGE THAT COMPOUNDS</span>
          <h2>Experience becomes<br /><em>repeatable discipline.</em></h2>
          <p>Our professional knowledge is codified into reusable standards, decision patterns, checks, and delivery practices. Every engagement benefits from accumulated experience without treating different companies as identical.</p>
          <div className="knowledge-tags"><span>Decision patterns</span><span>Failure scenarios</span><span>Architecture checks</span><span>Delivery practices</span><span>Review evidence</span></div>
        </div>
        <aside className="knowledge-card">
          <span>THE OPERATING PRINCIPLE</span>
          <blockquote>“Move quickly where the choice is reversible. Slow down where being wrong creates business risk.”</blockquote>
          <p>Low-risk implementation can be accelerated. High-impact uncertainty remains visible and receives the appropriate human authority.</p>
        </aside>
      </section>

      <section className="evidence-section">
        <div className="section-intro">
          <span className="kicker">VALIDATION BOUNDARIES</span>
          <h2>“Checked” must say<br /><em>what was actually checked.</em></h2>
          <p>A declared intention is not deployment proof. A valid configuration is not operational reliability. We keep those evidence levels separate.</p>
        </div>
        <div className="evidence-levels">
          {evidence.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </section>

      <section className="principles-section">
        <div className="section-intro">
          <span className="kicker light">WORKING PRINCIPLES</span>
          <h2>Trust is built by making<br /><em>the boundaries visible.</em></h2>
        </div>
        <div className="principles-grid">
          {principles.map(([title, body]) => <article key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="repo-cta">
        <span>TRANSPARENT DELIVERY DISCIPLINE</span>
        <h2>Inspect the public framework without exposing client-specific knowledge or evidence.</h2>
        <a className="button lime" href="https://github.com/dr-birdkiwi/data-architecture-delivery-kit" target="_blank" rel="noreferrer">Open the public framework ↗</a>
      </section>

      <SiteFooter />
    </main>
  );
}
