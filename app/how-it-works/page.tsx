import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const steps = [
  ["01", "Tell us the business problem", "Explain what is not working, who needs the data, and what a good outcome looks like. Technical terminology is optional."],
  ["02", "Review what already exists", "Documents, systems, policies, workload facts, and known constraints become attributed context—not loose chat history."],
  ["03", "Answer only what changes decisions", "The method asks a small round of focused questions and explains why each answer matters."],
  ["04", "Compare credible directions", "Multiple viable designs are evaluated against correctness, risk, cost, speed, team fit, and existing commitments."],
  ["05", "Approve a reviewable plan", "Your team receives decisions, assumptions, risks, implementation stages, and explicit items that still need an owner."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader current="how" />
      <section className="page-hero how-hero"><span className="kicker">HOW IT WORKS</span><h1>Complexity stays inside.<br /><em>Clarity reaches you.</em></h1><p>The process does not ask you to become a data architect. It progressively discovers what matters, makes uncertainty visible, and keeps consequential choices with accountable people.</p></section>
      <section className="process-shell">
        <div className="process-line" aria-label="Five-step architecture delivery process">{steps.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>
        <aside className="process-aside">
          <span>STARTING REQUEST</span><blockquote>“We need a better reporting platform.”</blockquote>
          <div className="mini-flow"><b>Business need</b><i>↓</i><b>Missing context</b><i>↓</i><b>Design choices</b><i>↓</i><strong>Reviewable plan</strong></div>
        </aside>
      </section>
      <section className="question-example">
        <div><span className="kicker light">A BETTER QUESTION</span><h2>Not “Which database do you want?”</h2><p>Instead, ask the question that exposes a business consequence and changes the design.</p></div>
        <article><span>HIGH-IMPACT QUESTION</span><h3>If the data system fails, how long can reporting wait—and how much data could the business afford to lose?</h3><div><b>WHY IT MATTERS</b><p>The answer changes recovery design, redundancy, backup frequency, operating responsibility, and cost.</p></div></article>
      </section>
      <section className="context-states"><div><span className="kicker">NO SILENT GUESSES</span><h2>Every important belief has a status.</h2></div><div className="state-grid"><span><i className="green" />Confirmed</span><span><i className="blue" />Discovered</span><span><i className="purple" />Inferred</span><span><i className="amber" />Defaulted</span><span><i className="red" />Contradictory</span><span><i className="gray" />Unknown</span></div></section>
      <section className="next-page"><span>NEXT: THE OUTPUT</span><h2>What does your team receive at the end?</h2><a className="button primary" href="/data-architecture-delivery-kit-site/what-you-get/">What you get →</a></section>
      <SiteFooter />
    </main>
  );
}
