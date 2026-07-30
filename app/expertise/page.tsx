import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const expertise = [
  ["01 · DEPTH", "PhD-level technical judgment", "A Doctor of Philosophy in Computer Science, combined with 7+ years building secure cloud-native analytics platforms across digital assets, investment management, and banking."],
  ["02 · SCALE", "Production systems—not slideware", "Built and operated a Dremio and Apache Iceberg lakehouse with Superset supporting an approximately 570-model dbt estate on Kubernetes."],
  ["03 · GOVERNED AI", "Natural-language access without surrendering control", "Designed production MCP services for governed analytics through Claude, while deterministic controls ensure the model never writes SQL or accesses the database directly."],
  ["04 · DELIVERY", "Architecture carried through implementation", "Led platform transitions across GCP and AWS, and used AI agents to accelerate a 174-model warehouse migration backlog without delegating judgment to the model."],
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
        <h1>One senior data architect<br /><em>stays accountable.</em></h1>
        <p>I am Jiwei Li, PhD—a hands-on data platform architect with 7+ years across digital assets, investment management, and banking. I use AI to move faster without delegating contextual judgment, verification, or responsibility to the model.</p>
        <div className="expert-principle"><span>AI proposes</span><i>→</i><span>Experts decide</span><i>→</i><span>Tools verify</span><i>→</i><b>Humans approve</b></div>
      </section>

      <section className="expertise-section">
        <div className="section-intro">
          <span className="kicker">WHY CLIENTS BRING ME IN</span>
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
          <article><span>I REMAIN ACCOUNTABLE FOR</span><p>Business interpretation, consequential assumptions, architecture trade-offs, validation adequacy, risk recommendations, and the evidence required for human production approval.</p></article>
        </div>
      </section>

      <section className="knowledge-section">
        <div className="knowledge-copy">
          <span className="kicker">PROFESSIONAL KNOWLEDGE THAT COMPOUNDS</span>
          <h2>Experience becomes<br /><em>repeatable discipline.</em></h2>
          <p>My professional knowledge is codified into reusable standards, decision patterns, checks, and delivery practices. Each engagement benefits from accumulated experience without treating different companies as identical.</p>
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
          <p>A declared intention is not deployment proof. A valid configuration is not operational reliability. Those evidence levels remain separate.</p>
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
        <span>BRING SENIOR JUDGMENT TO YOUR DATA PROBLEM</span>
        <h2>Start with the business risk, uncertainty, or decision that needs expert attention.</h2>
        <a className="button lime" href="mailto:jiwei.li.phd@gmail.com?subject=Data%20architecture%20conversation">Discuss your data problem →</a>
      </section>

      <SiteFooter />
    </main>
  );
}
