import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const solutions = [
  { code: "TRUST", title: "Make reporting trustworthy", symptom: "Reports arrive late, disagree with one another, or cannot be explained after the underlying data changes.", decisions: ["Reliable history", "Reconciliation", "Business definitions", "Audit evidence"], result: "Reports that arrive when expected, agree on important numbers, and can be explained when challenged." },
  { code: "USE", title: "Make scattered data useful", symptom: "Teams depend on spreadsheets, one-off extracts, or disconnected systems that make routine questions difficult to answer.", decisions: ["Source integration", "Shared definitions", "Access model", "Operating simplicity"], result: "A manageable data foundation for reporting, analysis, and better business decisions." },
  { code: "AI", title: "Prepare data for practical AI", symptom: "The company wants AI capability, but important data is fragmented, unreliable, poorly governed, or difficult to retrieve safely.", decisions: ["Trusted sources", "Access boundaries", "Quality controls", "AI-ready interfaces"], result: "A governed data foundation that supports useful AI applications without exposing sensitive information." },
  { code: "CHANGE", title: "Modernize without disruption", symptom: "The current platform is expensive, fragile, difficult to change, or no longer able to support growing data and workload needs.", decisions: ["Target direction", "Migration sequence", "Coexistence", "Rollback"], result: "A phased transition that improves the platform while protecting existing users and operations." },
  { code: "ASSURE", title: "Keep critical data healthy", symptom: "Data problems are discovered by users, quality checks are inconsistent, or nobody can confidently explain whether important outputs remain correct.", decisions: ["Critical datasets", "Validation coverage", "Ownership", "Incident response"], result: "Continuous validation, visible quality signals, and a clear response path when important data changes or fails." },
];

export default function SolutionsPage() {
  return (
    <main>
      <SiteHeader current="solutions" />
      <section className="page-hero solutions-hero"><span className="kicker">SOLUTIONS</span><h1>Tell us what is not working.<br /><em>We will find the technical path.</em></h1><p>You do not need to know which database, warehouse, or AI platform to choose. Start with the situation closest to yours; the solution adapts to your business and existing environment.</p></section>
      <section className="solution-cards">
        {solutions.map((solution, index) => <article key={solution.code}>
          <div className="solution-card-head"><span>{String(index + 1).padStart(2, "0")}</span><b>{solution.code}</b></div>
          <h2>{solution.title}</h2>
          <div className="solution-symptom"><span>YOU MAY BE HERE IF</span><p>{solution.symptom}</p></div>
          <div className="decision-tags">{solution.decisions.map(item => <span key={item}>{item}</span>)}</div>
          <div className="solution-result"><span>THE AIM</span><p>{solution.result}</p></div>
        </article>)}
      </section>
      <section className="brownfield-note"><div><span className="kicker light">BUILT AROUND REALITY</span><h2>Your current systems are part of the solution.</h2></div><p>We account for existing tools, contracts, skills, security requirements, budgets, and migration limits. Improvement does not automatically mean replacement.</p></section>
      <section className="next-page"><span>NEXT: SEE THE ENGAGEMENT</span><h2>See how we move from a business problem to a delivered solution.</h2><a className="button primary" href="/data-architecture-delivery-kit-site/how-it-works/">How it works →</a></section>
      <SiteFooter />
    </main>
  );
}
