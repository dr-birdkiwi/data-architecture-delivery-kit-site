import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const engagementModels = [
  {
    number: "01",
    label: "ADVISORY",
    title: "Design with us",
    body: "Your team implements. We assess the situation, make the consequential decisions explicit, compare credible directions, and provide a roadmap your engineers can act on.",
    includes: ["Architecture assessment", "Decision records", "Risk register", "Implementation roadmap"],
  },
  {
    number: "02",
    label: "DELIVERY",
    title: "Let us deliver",
    body: "We turn the agreed direction into a working system: infrastructure, pipelines, models, controls, testing, migration, documentation, and a clean transfer of ownership.",
    includes: ["Detailed design", "Implementation", "Validation", "Handover"],
  },
  {
    number: "03",
    label: "ONGOING PARTNERSHIP",
    title: "Keep us alongside",
    body: "We continue protecting the platform after launch through data-quality assurance, reliability reviews, incident analysis, optimization, and architectural evolution.",
    includes: ["Continuous validation", "Reliability support", "Cost review", "Improvement planning"],
  },
];

const serviceAreas = [
  {
    number: "01",
    title: "Assess and architect",
    when: "Requirements are unclear, the current platform no longer fits, or leadership needs a defensible technical direction.",
    work: "We examine the business need, existing systems, data, risks, operating capability, and constraints before comparing responsible architecture options.",
    outcome: "A practical target architecture, explicit decisions and trade-offs, and a sequenced roadmap aligned with the business.",
  },
  {
    number: "02",
    title: "Build and integrate",
    when: "Data is scattered, reporting is manual, or analytics and AI need a reliable production foundation.",
    work: "We build the infrastructure, ingestion, transformations, business models, access patterns, reporting foundations, controls, and delivery practices required by the agreed scope.",
    outcome: "A working, documented data system that your team can understand, operate, and extend.",
  },
  {
    number: "03",
    title: "Modernize and migrate",
    when: "The current estate is fragile, costly, difficult to change, or unable to support growing data and workload needs.",
    work: "We design a phased transition with coexistence, historical validation, reconciliation, rollback, and protection for existing consumers.",
    outcome: "A safer route to a more capable platform without treating replacement as the only form of improvement.",
  },
  {
    number: "04",
    title: "Validate and assure",
    when: "Important numbers disagree, pipeline success does not prove data correctness, or evidence is required for finance, risk, or audit.",
    work: "We establish controls for accuracy, completeness, freshness, lineage, reconciliation, recovery, and ownership of material failures.",
    outcome: "Trusted outputs with visible quality signals and explainable evidence when results are challenged.",
  },
  {
    number: "05",
    title: "Operate and improve",
    when: "Reliability problems consume the team, specialist capability is missing, or the platform needs continuing technical ownership.",
    work: "We monitor critical expectations, investigate incidents, review architecture, control performance and cost, test recovery, and plan upgrades.",
    outcome: "A healthier platform that keeps adapting as the business, data, and operating environment change.",
  },
];

const engagementOutputs = [
  ["Context", "Confirmed facts, assumptions, constraints, contradictions, and open decisions."],
  ["Direction", "Architecture alternatives, selected decisions, trade-offs, and responsibilities."],
  ["Delivery", "An implementation plan or working technical scope, depending on the engagement."],
  ["Evidence", "Risks, validation results, known limits, and items requiring human approval."],
  ["Ownership", "Documentation, runbooks, handover, and a clear operating model."],
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader current="services" />

      <section className="page-hero services-hero">
        <span className="kicker">FROM FIRST DECISION TO DAILY RELIABILITY</span>
        <h1>One data partner—<br /><em>from architecture to operation.</em></h1>
        <p>Choose focused advice, complete delivery, or an ongoing partnership. We meet you at your current stage and help build data capability that can grow with the business.</p>
      </section>

      <section className="engagement-section">
        <div className="section-intro">
          <span className="kicker">CHOOSE THE RIGHT LEVEL OF SUPPORT</span>
          <h2>Use our judgment.<br /><em>Choose the handoff point.</em></h2>
          <p>Implementation is optional. Keep delivery in-house, ask us to build the agreed solution, or retain us for continuing quality and reliability assurance.</p>
        </div>
        <div className="engagement-grid">
          {engagementModels.map((model) => (
            <article key={model.number}>
              <div><span>{model.number}</span><b>{model.label}</b></div>
              <h3>{model.title}</h3>
              <p>{model.body}</p>
              <ul>{model.includes.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="service-lifecycle">
        <div className="lifecycle-heading">
          <span className="kicker light">WHAT WE CAN TAKE RESPONSIBILITY FOR</span>
          <h2>Five connected services.<br /><em>One dependable outcome.</em></h2>
        </div>
        <div className="service-rows">
          {serviceAreas.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <div><b>YOU MAY NEED THIS WHEN</b><p>{service.when}</p></div>
              <div><b>WHAT WE DO</b><p>{service.work}</p></div>
              <div className="outcome"><b>THE OUTCOME</b><p>{service.outcome}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="deliverable-section">
        <div className="section-intro">
          <span className="kicker">BUILT TO BE USED</span>
          <h2>More than a recommendation.<br /><em>Clear enough to act on.</em></h2>
          <p>The depth changes with the engagement, but important context, decisions, evidence, and ownership remain visible throughout.</p>
        </div>
        <div className="deliverable-list">
          {engagementOutputs.map(([title, body], index) => (
            <article key={title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="brownfield-note">
        <div><span className="kicker light">BUILT AROUND REALITY</span><h2>Your current systems are part of the solution.</h2></div>
        <p>We account for existing technology, contracts, skills, security requirements, budgets, and migration limits. Improvement does not automatically mean replacement.</p>
      </section>

      <section className="start-section" id="start">
        <span>START WITH THE BUSINESS PROBLEM</span>
        <h2>Tell us what is unreliable, expensive, slow, or preventing the business from moving forward.</h2>
        <p>You do not need to arrive with a technology choice or a complete requirements document. A useful first conversation begins with the problem, who it affects, and what happens if it remains unsolved.</p>
        <a className="button lime" href="mailto:hello@arcanddatum.example?subject=Data%20architecture%20conversation">Email us about your data problem →</a>
      </section>

      <SiteFooter />
    </main>
  );
}
