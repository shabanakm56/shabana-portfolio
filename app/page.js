import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import { profile, projects, skills, education, certifications } from "../data/content";

const Entry = ({ e }) => (
  <li className="flex flex-col justify-between gap-1 border-b border-line py-3 sm:flex-row">
    <div>
      <p className="font-medium">{e.title}</p>
      <p className="text-sm text-muted">{e.place}{e.note ? ` · ${e.note}` : ""}</p>
    </div>
    <p className="text-sm text-muted">{e.when}</p>
  </li>
);

export default function Home() {
  return (
    <>
      <Nav name={profile.name} />
      <main>
        <Hero p={profile} />
        <Section id="projects" title="Projects">
          <div className="grid gap-6">{projects.map((p) => <ProjectCard key={p.name} p={p} />)}</div>
        </Section>
        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 leading-relaxed text-muted">
            {profile.about.map((t) => <p key={t}>{t}</p>)}
          </div>
        </Section>
        <Section id="skills" title="Skills">
          <div className="grid gap-6 sm:grid-cols-3">
            {Object.entries(skills).map(([group, items]) => (
              <div key={group}>
                <h3 className="mb-3 font-semibold text-brand">{group}</h3>
                <ul className="space-y-1.5 text-muted">{items.map((i) => <li key={i}>{i}</li>)}</ul>
              </div>
            ))}
          </div>
        </Section>
        <Section id="education" title="Education & Certifications">
          <div className="grid gap-10 md:grid-cols-2">
            <ul>{education.map((e) => <Entry key={e.title} e={e} />)}</ul>
            <ul>{certifications.map((e) => <Entry key={e.title} e={e} />)}</ul>
          </div>
        </Section>
        <Section id="contact" title="Contact">
          <p className="mb-5 max-w-lg text-muted">Open to web development and data analytics roles. The fastest way to reach me is email.</p>
          <ul className="space-y-2">
            <li><a className="text-brand underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a></li>
            <li><a className="hover:text-brand" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></li>
            <li><a className="hover:text-brand" href={profile.linkedin}>LinkedIn</a></li>
            <li><a className="hover:text-brand" href={profile.github}>GitHub</a></li>
            <li className="text-muted">{profile.location}</li>
          </ul>
        </Section>
      </main>
      <footer className="border-t border-line py-6 text-center text-sm text-muted">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
