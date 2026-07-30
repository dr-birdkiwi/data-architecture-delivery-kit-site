"use client";

import { useState } from "react";
import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";

const scenarios = {
  exact: { label: "Exact historical reproduction", direction: "Immutable history + versioned transformation", rationale: "Preserve the inputs and logic required to recreate a certified result as it appeared at the time.", consequences: ["Immutable source history", "Reference-data versions", "Reconciliation controls", "Replay tests"] },
  corrected: { label: "Corrected history is acceptable", direction: "Controlled snapshots + correction trail", rationale: "Prefer a simpler design while retaining enough history to explain restatements and trace corrections.", consequences: ["Snapshot policy", "Correction audit", "Restatement rules", "Retention controls"] },
  current: { label: "Only current results matter", direction: "Managed current-state analytics", rationale: "Avoid unnecessary historical machinery when the business needs only the latest trusted view.", consequences: ["Simpler ingestion", "Current-state models", "Lower overhead", "Faster delivery"] },
} as const;

type Scenario = keyof typeof scenarios;

const evidence = [
  ["01", "Declared", "A person or document states that a control exists."],
  ["02", "Structurally checked", "Required fields, relationships, and package contents are present."],
  ["03", "Statically verified", "Code or configuration passes a relevant deterministic check."],
  ["04", "Plan verified", "The proposed change has been evaluated in its actual deployment context."],
  ["05", "Operationally tested", "Runtime behavior, recovery, or failure handling has been exercised."],
];

export default function ExpertPage() {
  const [scenario, setScenario] = useState<Scenario>("exact");
  const selected = scenarios[scenario];

  return (
    <main>
      <SiteHeader current="offerings" />
      <section className="page-hero expert-hero"><span className="kicker">TECHNICAL DEEP DIVE</span><h1>Architecture decisions<br /><em>that show their work.</em></h1><p>A verifier-first delivery method for turning evidence, constraints, and expert playbooks into bounded architecture choices, explicit findings, and human-reviewed plans.</p><div className="expert-principle"><span>AI proposes</span><i>→</i><span>Rules constrain</span><i>→</i><span>Tools verify</span><i>→</i><b>Humans approve</b></div></section>

      <section className="method-section">
        <div className="section-intro"><span className="kicker">WHAT MAKES IT DIFFERENT</span><h2>More disciplined than an unconstrained AI answer.</h2><p>The model is useful for interpretation and generation. It is not treated as the authority on correctness, policy, evidence, or production readiness.</p></div>
        <div className="method-capabilities"><article><span>01 · EVIDENCE</span><h3>Grounded in supplied context</h3><p>Requirements and recommendations remain linked to their source, scope, confidence, and applicable version.</p></article><article><span>02 · DECISIONS</span><h3>Reasoning stays bounded</h3><p>Candidate designs are compared against declared priorities, permitted alternatives, and organization-specific constraints.</p></article><article><span>03 · VERIFICATION</span><h3>Claims require specific checks</h3><p>Schemas, policies, infrastructure tools, and evidence contracts verify what they can—and state what they cannot.</p></article><article><span>04 · ACCOUNTABILITY</span><h3>Humans own consequential choices</h3><p>The system can propose and escalate. Named people remain responsible for risk acceptance and production approval.</p></article></div>
      </section>

      <section className="expert-demo">
        <div className="demo-copy"><span className="kicker light">INTERACTIVE DECISION</span><h2>One requirement should change the design.</h2><p>This is the behavior the method is built to test: context changes the architecture coherently, while unrelated decisions remain stable.</p><div className="affects"><span>AFFECTS</span><b>History · Transformation · Reconciliation · Retention · Testing</b></div></div>
        <div className="demo-card">
          <span className="demo-label">How should historical reports behave after source data is corrected?</span>
          <div className="scenario-buttons">{(Object.keys(scenarios) as Scenario[]).map(key => <button key={key} onClick={() => setScenario(key)} className={scenario === key ? "active" : ""} aria-pressed={scenario === key}>{scenario === key ? "●" : "○"} {scenarios[key].label}</button>)}</div>
          <div className="demo-result"><span>CONDITIONAL DIRECTION</span><h3>{selected.direction}</h3><p>{selected.rationale}</p><div>{selected.consequences.map(item => <b key={item}>{item}</b>)}</div></div>
          <small>Structured judgment, not measured performance. Human review remains required.</small>
        </div>
      </section>

      <section className="evidence-section">
        <div className="section-intro"><span className="kicker">VALIDATION BOUNDARIES</span><h2>“Checked” must say what was actually checked.</h2><p>The method separates evidence levels so a declared intention cannot be mistaken for deployed or operational proof.</p></div>
        <div className="evidence-levels">{evidence.map(([number, title, body]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      </section>

      <section className="benchmark-band"><div><span className="kicker light">EVALUATION, NOT THEATRE</span><h2>The kit is challenged against blind scenarios and counterfactuals.</h2></div><div><article><strong>Blind evidence</strong><p>Generation cannot access hidden expected decisions or findings.</p></article><article><strong>Counterfactual change</strong><p>Freshness, team capability, portability, and recovery requirements are mutated independently.</p></article><article><strong>Human adjudication</strong><p>Experienced reviewers may override the oracle and record why.</p></article></div></section>

      <section className="repo-cta"><span>INSPECT THE SHOWCASE</span><h2>The public repository contains this website and its GitHub Pages deployment workflow.</h2><a className="button lime" href="https://github.com/dr-birdkiwi/data-architecture-delivery-kit-site" target="_blank" rel="noreferrer">View site source ↗</a></section>
      <SiteFooter />
    </main>
  );
}
