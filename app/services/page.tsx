import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const engagementModels = [
  {
    number: "01",
    label: "ADVISORY",
    title: "Design with me",
    body: "Your team implements. I assess the situation, make consequential decisions explicit, compare credible directions, and provide a roadmap your engineers can act on.",
    includes: ["Architecture assessment", "Decision records", "Risk register", "Implementation roadmap"],
  },
  {
    number: "02",
    label: "DELIVERY",
    title: "Let me deliver",
    body: "I turn the agreed direction into a working system: infrastructure, pipelines, models, controls, testing, migration, documentation, and a clean transfer of ownership.",
    includes: ["Detailed design", "Implementation", "Validation", "Handover"],
  },
  {
    number: "03",
    label: "ONGOING PARTNERSHIP",
    title: "Retain a fractional architect",
    body: "A continuing retainer keeps senior judgment available after launch, with a monthly architecture review, defined response windows, ongoing data-quality and cost analysis, and a prioritized improvement backlog.",
    includes: ["Monthly architecture review", "Defined response coverage", "Quality and cost assurance", "Improvement backlog"],
  },
];

const serviceAreas = [
  {
    number: "01",
    title: "Assess and architect",
    when: "Requirements are unclear, the current platform no longer fits, or leadership needs a defensible technical direction.",
    work: "I examine the business need, existing systems, data, risks, operating capability, and constraints before comparing responsible architecture options.",
    outcome: "A practical target architecture, explicit decisions and trade-offs, and a sequenced roadmap aligned with the business.",
  },
  {
    number: "02",
    title: "Build and integrate",
    when: "Data is scattered, reporting is manual, or analytics and AI need a reliable production foundation.",
    work: "I build the infrastructure, ingestion, transformations, business models, access patterns, reporting foundations, controls, and delivery practices required by the agreed scope.",
    outcome: "A working, documented data system that your team can understand, operate, and extend.",
  },
  {
    number: "03",
    title: "Modernize and migrate",
    when: "The current estate is fragile, costly, difficult to change, or unable to support growing data and workload needs.",
    work: "I design a phased transition with coexistence, historical validation, reconciliation, rollback, and protection for existing consumers.",
    outcome: "A safer route to a more capable platform without treating replacement as the only form of improvement.",
  },
  {
    number: "04",
    title: "Validate and assure",
    when: "Important numbers disagree, pipeline success does not prove data correctness, or evidence is required for finance, risk, or audit.",
    work: "I establish controls for accuracy, completeness, freshness, lineage, reconciliation, recovery, and ownership of material failures.",
    outcome: "Trusted outputs with visible quality signals and explainable evidence when results are challenged.",
  },
  {
    number: "05",
    title: "Operate and improve",
    when: "Reliability problems consume the team, specialist capability is missing, or the platform needs continuing technical ownership.",
    work: "I monitor critical expectations, investigate incidents, review architecture, control performance and cost, test recovery, and plan upgrades.",
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

const diagnosticOutputs = [
  ["01", "Context", "A concise view of the business objective, current environment, constraints, assumptions, and unresolved facts."],
  ["02", "Risk", "The most consequential reliability, correctness, security, cost, and operating risks—not a generic checklist."],
  ["03", "Decisions", "The architecture choices that need attention now, credible alternatives, and the evidence still required."],
  ["04", "Next steps", "A prioritized action plan that your team can use, whether or not I continue into delivery."],
];

const frequentlyAsked = [
  ["Do you only advise?", "No. I can stop after an independent assessment, work alongside your engineers, or carry the agreed design through implementation, validation, documentation, and handover."],
  ["Do you replace our existing platform?", "Only when replacement is justified. Existing systems, skills, contracts, migration risk, and business continuity are treated as real design constraints."],
  ["Who actually performs the work?", "I lead the architecture and remain directly involved in the work described in the engagement. There is no automatic junior handoff or undisclosed outsourcing."],
  ["What happens after launch?", "An ongoing partnership can cover scheduled architecture reviews, quality and cost analysis, incident investigation, and improvement planning. Coverage and response windows are defined explicitly; 24/7 support is not implied."],
  ["How is sensitive information handled?", "Client-specific evidence, decisions, and implementation details remain separated from reusable professional knowledge. Access and data-handling boundaries are agreed before evidence is reviewed."],
  ["What is the first step?", "Send a short description of what is unreliable, expensive, slow, or blocked. I will use an initial conversation to determine whether a focused diagnostic is appropriate."],
];

export default function ServicesPage() {
  return (
    <main>
      <SiteHeader current="services" />

      <section className="page-hero services-hero">
        <span className="kicker">FROM FIRST DECISION TO DAILY RELIABILITY</span>
        <h1>One accountable architect—<br /><em>from decision to operation.</em></h1>
        <p>Work directly with me for focused advice, complete delivery, or continuing fractional architecture. The engagement starts where your team needs senior judgment and ends at the handoff point you choose.</p>
      </section>

      <section className="diagnostic-section" id="diagnostic">
        <div className="diagnostic-intro">
          <span className="kicker light">THE LOW-RISK STARTING POINT</span>
          <h2>Data Architecture<br /><em>Diagnostic.</em></h2>
          <p>A bounded first engagement for companies that know something is wrong, costly, risky, or blocked—but do not yet have a complete requirements document or agreed solution.</p>
          <a className="button lime" href="mailto:jiwei.li.phd@gmail.com?subject=Data%20Architecture%20Diagnostic">Discuss a diagnostic →</a>
        </div>
        <div className="diagnostic-output">
          {diagnosticOutputs.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}
        </div>
      </section>

      <section className="engagement-section">
        <div className="section-intro">
          <span className="kicker">CHOOSE THE RIGHT LEVEL OF SUPPORT</span>
          <h2>Use my judgment.<br /><em>Choose the handoff point.</em></h2>
          <p>Implementation is optional. Keep delivery in-house, ask me to build the agreed solution, or retain me as a fractional architect for continuing quality, reliability, and cost assurance.</p>
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
          <span className="kicker light">WHAT I CAN TAKE RESPONSIBILITY FOR</span>
          <h2>Five connected services.<br /><em>One dependable outcome.</em></h2>
        </div>
        <div className="service-rows">
          {serviceAreas.map((service) => (
            <article key={service.number}>
              <span>{service.number}</span>
              <h3>{service.title}</h3>
              <div><b>YOU MAY NEED THIS WHEN</b><p>{service.when}</p></div>
              <div><b>WHAT I DO</b><p>{service.work}</p></div>
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
        <p>I account for existing technology, contracts, skills, security requirements, budgets, and migration limits. Improvement does not automatically mean replacement.</p>
      </section>

      <section className="faq-section">
        <div className="section-intro">
          <span className="kicker">BEFORE WE WORK TOGETHER</span>
          <h2>Clear boundaries<br /><em>make a small practice dependable.</em></h2>
          <p>The engagement should be understandable before access is granted or technical work begins.</p>
        </div>
        <div className="faq-list">
          {frequentlyAsked.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}
        </div>
      </section>

      <section className="start-section" id="start">
        <span>START WITH THE BUSINESS PROBLEM</span>
        <h2>Tell me what is unreliable, expensive, slow, or preventing the business from moving forward.</h2>
        <p>You do not need to arrive with a technology choice or a complete requirements document. A useful first conversation begins with the problem, who it affects, and what happens if it remains unsolved.</p>
        <a className="button lime" href="mailto:jiwei.li.phd@gmail.com?subject=Data%20architecture%20conversation">Email me about your data problem →</a>
      </section>

      <SiteFooter />
    </main>
  );
}
