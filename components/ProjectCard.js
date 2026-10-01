const Row = ({ label, children }) => (
  <div className="grid gap-1 sm:grid-cols-[8rem_1fr] sm:gap-4">
    <dt className="font-medium text-muted">{label}</dt>
    <dd>{children}</dd>
  </div>
);

export default function ProjectCard({ p }) {
  return (
    <article className={`rounded-lg border bg-panel p-6 transition-colors hover:border-brand ${p.featured ? "border-brand" : "border-line"}`}>
      <h3 className="text-xl font-bold">{p.name}</h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <li key={s} className="rounded bg-bg px-2 py-0.5 text-sm text-muted">{s}</li>
        ))}
      </ul>
      <dl className="mt-5 space-y-3 text-[0.95rem] leading-relaxed">
        <Row label="Problem">{p.problem}</Row>
        <Row label="Solution">{p.solution}</Row>
        <Row label="My role">{p.contribution}</Row>
        <Row label="Outcome"><span className="font-medium text-accent">{p.outcome}</span></Row>
      </dl>
    </article>
  );
}
