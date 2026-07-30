type Page = "home" | "solutions" | "how" | "outcomes" | "offerings";

export default function SiteHeader({ current }: { current: Page }) {
  return (
    <header className="site-header landing-header">
      <a className="brand" href="/data-architecture-delivery-kit-site/" aria-label="Data Architecture Delivery Kit home">
        <span className="brand-mark">DA</span>
        <span>Data Architecture Delivery</span>
      </a>
      <nav aria-label="Primary navigation">
        <a className={current === "solutions" ? "active" : ""} href="/data-architecture-delivery-kit-site/solutions/" aria-current={current === "solutions" ? "page" : undefined}>Solutions</a>
        <a className={current === "how" ? "active" : ""} href="/data-architecture-delivery-kit-site/how-it-works/" aria-current={current === "how" ? "page" : undefined}>How it works</a>
        <a className={current === "outcomes" ? "active" : ""} href="/data-architecture-delivery-kit-site/what-you-get/" aria-current={current === "outcomes" ? "page" : undefined}>What you get</a>
        <a className={current === "offerings" ? "active" : ""} href="/data-architecture-delivery-kit-site/offerings/" aria-current={current === "offerings" ? "page" : undefined}>Technical deep dive</a>
      </nav>
    </header>
  );
}
