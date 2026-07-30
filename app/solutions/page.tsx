import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const solutions = [
  { code: "REPORT", title: "Trusted reporting", symptom: "Reports arrive late, disagree with one another, or cannot be explained after data changes.", decisions: ["History and replay", "Reconciliation", "Audit evidence", "Certified outputs"], result: "A reporting design built around correctness and trust—not only dashboard speed." },
  { code: "ANALYZE", title: "Analytics foundation", symptom: "Teams depend on spreadsheets, one-off extracts, or a warehouse that has grown without clear ownership.", decisions: ["Source ingestion", "Shared definitions", "Access model", "Operating simplicity"], result: "A manageable foundation for analytics, reporting, and self-service use." },
  { code: "CHANGE", title: "Platform modernization", symptom: "The current platform is expensive, fragile, slow to change, or approaching a technology deadline.", decisions: ["Target direction", "Migration sequence", "Coexistence", "Rollback"], result: "A phased transition that protects existing consumers while reducing risk." },
  { code: "SCALE", title: "High-scale lakehouse", symptom: "Data volume, workloads, or engine diversity have outgrown a single warehouse-centric approach.", decisions: ["Open storage", "Compute engines", "Governance", "Operational ownership"], result: "A scalable architecture whose flexibility is matched to the team’s ability to run it." },
];

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader current="solutions" />
      <section className="page-hero solutions-hero"><span className="kicker">SOLUTIONS</span><h1>Start with the problem.<br /><em>Not the stack.</em></h1><p>Choose the situation closest to yours. The process adapts to your business, existing systems, risk, budget, and team—not a predetermined technology answer.</p></section>
      <section className="solution-cards">
        {solutions.map((solution, index) => <article key={solution.code}>
          <div className="solution-card-head"><span>{String(index + 1).padStart(2, "0")}</span><b>{solution.code}</b></div>
          <h2>{solution.title}</h2>
          <div className="solution-symptom"><span>YOU MAY BE HERE IF</span><p>{solution.symptom}</p></div>
          <div className="decision-tags">{solution.decisions.map(item => <span key={item}>{item}</span>)}</div>
          <div className="solution-result"><span>THE AIM</span><p>{solution.result}</p></div>
        </article>)}
      </section>
      <section className="brownfield-note"><div><span className="kicker light">REAL COMPANIES ARE BROWNFIELD</span><h2>Your current systems are part of the answer.</h2></div><p>Existing contracts, skills, pipelines, security standards, incidents, and migration tolerance are treated as design inputs. Modernization does not automatically mean replacement.</p></section>
      <section className="next-page"><span>NEXT: SEE THE PROCESS</span><h2>How does a rough request become a responsible plan?</h2><a className="button primary" href="/data-architecture-delivery-kit-site/how-it-works/">How it works →</a></section>
      <SiteFooter />
    </main>
  );
}
