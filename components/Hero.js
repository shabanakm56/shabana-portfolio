export default function Hero({ p }) {
  return (
    <section id="top" className="mx-auto max-w-5xl px-5 pb-10 pt-16 sm:pt-28">
      <div className="rise">
        <p className="mb-4 text-lg font-medium text-brand">{p.title}</p>
        <h1 className="text-6xl font-extrabold leading-none tracking-tight sm:text-8xl">{p.name}</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{p.tagline}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-md bg-brand px-5 py-2.5 font-medium text-bg transition hover:opacity-90">View projects</a>
          <a href={`mailto:${p.email}`} className="rounded-md border border-line px-5 py-2.5 font-medium transition hover:border-brand">Email me</a>
        </div>
      </div>
    </section>
  );
}
