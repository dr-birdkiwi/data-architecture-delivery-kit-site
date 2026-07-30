type Page = "home" | "services" | "work" | "expertise";

export default function SiteHeader({ current }: { current: Page }) {
  return (
    <header className="site-header landing-header">
      <a className="brand" href="/data-architecture-delivery-kit-site/" aria-label="Arc & Datum home">
        <span className="brand-mark" aria-hidden="true"><span className="brand-arc" /><span className="brand-datum" /></span>
        <span>Arc &amp; Datum</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className={current === "services" ? "active" : ""} href="/data-architecture-delivery-kit-site/services/" aria-current={current === "services" ? "page" : undefined}>Services</a>
        <a className={current === "work" ? "active" : ""} href="/data-architecture-delivery-kit-site/work/" aria-current={current === "work" ? "page" : undefined}>Selected work</a>
        <a className={current === "expertise" ? "active" : ""} href="/data-architecture-delivery-kit-site/expertise/" aria-current={current === "expertise" ? "page" : undefined}>Expertise</a>
        <a className="nav-cta" href="mailto:jiwei.li.phd@gmail.com?subject=Data%20architecture%20conversation">Discuss your data problem</a>
      </nav>
    </header>
  );
}
