type Page = "home" | "services" | "expertise";

export default function SiteHeader({ current }: { current: Page }) {
  return (
    <header className="site-header landing-header">
      <a className="brand" href="/data-architecture-delivery-kit-site/" aria-label="Data Architecture Delivery home">
        <span className="brand-mark">DA</span>
        <span>Data Architecture Delivery</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className={current === "services" ? "active" : ""} href="/data-architecture-delivery-kit-site/services/" aria-current={current === "services" ? "page" : undefined}>Services</a>
        <a className={current === "expertise" ? "active" : ""} href="/data-architecture-delivery-kit-site/expertise/" aria-current={current === "expertise" ? "page" : undefined}>Expertise</a>
        <a className="nav-cta" href="mailto:hello@dataarchitecture.example">Discuss your data problem</a>
      </nav>
    </header>
  );
}
