import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const steps = [
  ["01", "Start with a conversation", "Explain what is not working, who needs the data, and what a good outcome looks like. Technical terminology is optional."],
  ["02", "Understand the real environment", "We review the systems, evidence, constraints, risks, and people already involved so the solution fits the company—not a blank slide."],
  ["03", "Compare responsible options", "We ask only the questions that materially change the design, then compare credible directions against cost, risk, speed, and operating burden."],
  ["04", "Choose the delivery scope", "You can take a complete implementation package to your own team, ask us to build the system, or combine both approaches."],
  ["05", "Implement and verify", "When implementation is included, delivery is staged, reviewable, tested, and designed for safe handover rather than a risky one-shot launch."],
  ["06", "Keep the data trustworthy", "Optional continuous assurance monitors critical data expectations, surfaces quality problems, and keeps ownership and response actions clear."],
];

export default function HowItWorksPage() {
  return (
    <main>
      <SiteHeader current="how" />
      <section className="page-hero how-hero"><span className="kicker">HOW IT WORKS</span><h1>One accountable path<br /><em>from problem to dependable data.</em></h1><p>Start with a business problem. We turn it into a responsible design, implement as much as you need, and can continue validating the data after the system is live.</p></section>
      <section className="process-shell">
        <div className="process-line" aria-label="Five-step architecture delivery process">{steps.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h2>{title}</h2><p>{body}</p></div></article>)}</div>
        <aside className="process-aside">
          <span>STARTING REQUEST</span><blockquote>“We need a better reporting platform.”</blockquote>
          <div className="mini-flow"><b>Business need</b><i>↓</i><b>Responsible design</b><i>↓</i><b>Build or handoff</b><i>↓</i><strong>Continuous assurance</strong></div>
        </aside>
      </section>
      <section className="question-example">
        <div><span className="kicker light">A BETTER QUESTION</span><h2>Not “Which database do you want?”</h2><p>Instead, ask the question that exposes a business consequence and changes the design.</p></div>
        <article><span>HIGH-IMPACT QUESTION</span><h3>If the data system fails, how long can reporting wait—and how much data could the business afford to lose?</h3><div><b>WHY IT MATTERS</b><p>The answer changes recovery design, redundancy, backup frequency, operating responsibility, and cost.</p></div></article>
      </section>
      <section className="context-states"><div><span className="kicker">NO SILENT GUESSES</span><h2>Every important belief has a status.</h2></div><div className="state-grid"><span><i className="green" />Confirmed</span><span><i className="blue" />Discovered</span><span><i className="purple" />Inferred</span><span><i className="amber" />Defaulted</span><span><i className="red" />Contradictory</span><span><i className="gray" />Unknown</span></div></section>
      <section className="next-page"><span>NEXT: YOUR DELIVERY OPTIONS</span><h2>Choose a blueprint, a working system, or an ongoing partnership.</h2><a className="button primary" href="/data-architecture-delivery-kit-site/what-you-get/">What you get →</a></section>
      <SiteFooter />
    </main>
  );
}
