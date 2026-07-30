import type { Metadata } from "next";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Selected work — Arc & Datum",
  description: "Anonymized examples of production data architecture, governed AI access, and analytical platform migration led by Jiwei Li, PhD.",
};

const caseStudies = [
  {
    number: "01",
    label: "GLOBAL DIGITAL-ASSET EXCHANGE",
    title: "A production analytical lakehouse and BI platform",
    context: "A global derivatives business needed a scalable analytical platform for a large transformation estate, governed business intelligence, sensitive data, and production recovery—not another isolated reporting tool.",
    role: "Architecture and delivery across platform runtime, storage, query, transformation, BI, identity, data protection, migration, and operational readiness.",
    delivered: ["Dremio analytical query layer", "Apache Iceberg lakehouse storage", "EKS and Kubernetes runtime", "Approximately 570 dbt models", "Canonical daily fact tables", "Superset BI with Okta SSO", "PII masking controls", "Cross-availability-zone recovery runbook"],
    evidence: "The example describes implemented platform components and operating controls. It does not turn their existence into an unsupported performance, cost, or reliability claim.",
  },
  {
    number: "02",
    label: "GOVERNED ENTERPRISE AI",
    title: "Natural-language data access without direct model authority",
    context: "Users needed a more accessible way to explore enterprise data through Claude, while preserving authorization, auditability, and deterministic control over what could reach analytical systems.",
    role: "Designed and shipped production Model Context Protocol services that placed governed tools and user identity between the model and the underlying data platforms.",
    delivered: ["Production MCP services", "Per-user governed access", "Dremio and Superset integrations", "Controlled analytical operations", "Auditable tool boundaries", "No model-authored SQL", "No direct model-to-database access", "Human ownership of consequential use"],
    evidence: "The model could interpret requests and select approved tools. Deterministic services—not the model—controlled database interaction and authorization boundaries.",
  },
  {
    number: "03",
    label: "PLATFORM TRANSITION",
    title: "A phased analytical migration accelerated by AI agents",
    context: "A substantial model backlog had to move between analytical platforms without assuming that generated code, successful compilation, or a green pipeline proved equivalent business results.",
    role: "Led platform transitions across GCP and AWS and developed an incremental Redshift-to-Dremio migration approach for an approximately 174-model backlog.",
    delivered: ["Incremental migration plan", "AI-assisted implementation", "Model-by-model review", "Compatibility handling", "Validation and reconciliation boundaries", "Coexistence with the existing platform", "Human review of generated changes", "Controlled promotion into production"],
    evidence: "AI agents reduced repetitive implementation effort. Architecture choices, exceptions, reconciliation adequacy, and production approval remained human decisions.",
  },
];

export default function WorkPage() {
  return (
    <main>
      <SiteHeader current="work" />

      <section className="page-hero work-hero">
        <span className="kicker">SELECTED WORK · ANONYMIZED</span>
        <h1>Architecture judged by<br /><em>what reaches production.</em></h1>
        <p>These examples show the scale, constraints, controls, and delivery responsibility behind my work. Client names and identifying details remain private.</p>
      </section>

      <section className="case-study-section">
        {caseStudies.map((study) => (
          <article className="case-study" key={study.number}>
            <header><span>{study.number}</span><b>{study.label}</b></header>
            <div className="case-study-main">
              <h2>{study.title}</h2>
              <div className="case-narrative">
                <section><span>THE SITUATION</span><p>{study.context}</p></section>
                <section><span>MY RESPONSIBILITY</span><p>{study.role}</p></section>
              </div>
            </div>
            <div className="case-delivery">
              <span>DELIVERED</span>
              <ul>{study.delivered.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
            <aside><span>EVIDENCE BOUNDARY</span><p>{study.evidence}</p></aside>
          </article>
        ))}
      </section>

      <section className="work-principle">
        <div><span className="kicker light">THE STANDARD</span><h2>Concrete enough to inspect.<br /><em>Honest about what remains unproven.</em></h2></div>
        <p>I separate implemented components, validation evidence, operational testing, and business outcomes. A technology list is not presented as proof of reliability.</p>
      </section>

      <section className="start-section">
        <span>START WITH YOUR SITUATION</span>
        <h2>Bring the problem, the constraints, and what is at risk—not a preselected technology stack.</h2>
        <p>The first conversation is used to determine whether a focused diagnostic, advisory engagement, delivery project, or ongoing partnership is appropriate.</p>
        <a className="button lime" href="mailto:jiwei.li.phd@gmail.com?subject=Data%20architecture%20conversation">Discuss your data problem →</a>
      </section>

      <SiteFooter />
    </main>
  );
}
