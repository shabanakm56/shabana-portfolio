const links = ["Projects", "About", "Skills", "Education", "Contact"];
export default function Nav({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
        <a href="#top" className="font-semibold">{name}</a>
        <ul className="flex gap-4 text-sm text-muted sm:gap-6">
          {links.map((l) => (
            <li key={l} className={l === "About" || l === "Education" ? "hidden sm:block" : ""}>
              <a href={`#${l.toLowerCase()}`} className="transition-colors hover:text-brand">{l}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
