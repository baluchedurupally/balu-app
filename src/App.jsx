import { useEffect, useState } from "react";
import { resume } from "./data/resume";
import Section from "./components/Section";
import Timeline from "./components/Timeline";
import Chip from "./components/Chip";

function NavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block rounded-xl px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
    >
      {children}
    </a>
  );
}

export default function App() {
  const profileUrl = `${import.meta.env.BASE_URL}profile.png`;

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* HEADER */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
              <img
                src={profileUrl}
                alt={`${resume.name} profile`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold">{resume.name}</div>
              <div className="text-xs text-slate-500">
                Cloud & AI Engineering (Azure • .NET)
              </div>
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 md:flex">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <a
              href="#contact"
              className="rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            type="button"
          >
            <span className="mr-2">Menu</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 z-20 bg-black/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            {/* Menu panel */}
            <div className="relative z-30 md:hidden">
              <div id="mobile-menu" className="mx-auto max-w-5xl px-4 pb-4">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <MobileNavLink href="#about" onClick={() => setMobileOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="#skills" onClick={() => setMobileOpen(false)}>
                    Skills
                  </MobileNavLink>
                  <MobileNavLink href="#experience" onClick={() => setMobileOpen(false)}>
                    Experience
                  </MobileNavLink>
                  <MobileNavLink href="#projects" onClick={() => setMobileOpen(false)}>
                    Projects
                  </MobileNavLink>
                  <MobileNavLink href="#education" onClick={() => setMobileOpen(false)}>
                    Education
                  </MobileNavLink>

                  <div className="mt-2 border-t border-slate-200 pt-2">
                    <a
                      href="#contact"
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-xl bg-slate-900 px-3 py-2 text-center text-sm font-medium text-white hover:bg-slate-800"
                    >
                      Contact
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-5xl px-4">
        {/* HERO */}
        <section className="py-10 md:py-12">
          <div className="grid gap-8 md:grid-cols-[1.2fr_.8fr] md:items-center">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
                {resume.name}
              </h1>

              {/* Title appears once */}
              <p className="mt-2 text-lg text-slate-700">{resume.title}</p>
              <p className="mt-2 text-sm text-slate-600">{resume.location}</p>

              {/* Only email chip */}
              <div className="mt-5 flex flex-wrap gap-2">
                <Chip>{resume.email}</Chip>
              </div>

              {/* LinkedIn + Credly only */}
              <div className="mt-6 flex flex-wrap gap-3">
                {resume.links
                  .filter((l) => l.label !== "Email")
                  .map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {l.label}
                    </a>
                  ))}
              </div>

              <p className="mt-6 text-sm text-slate-700">{resume.targetRoles}</p>
            </div>

            {/* Focus Areas card */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                  <img src={profileUrl} alt="" className="h-full w-full object-cover" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">Focus areas</div>
                  <ul className="mt-2 list-disc pl-5 text-sm text-slate-700 space-y-1">
                    <li>Azure cloud-native platforms & modernization</li>
                    <li>.NET backend engineering & distributed systems</li>
                    <li>DevOps automation, reliability, cost optimization</li>
                    <li>GenAI integrations (Azure OpenAI / AI Foundry)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <Section id="about" title="About">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <ul className="space-y-3 text-sm text-slate-700">
              {resume.summary.map((p, i) => (
                <li key={i}>{p}</li>
              ))}
            </ul>
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" title="Skills">
          <div className="grid gap-4 md:grid-cols-2">
            {resume.skills.map((s) => (
              <div
                key={s.group}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-sm font-semibold text-slate-900">{s.group}</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((x) => (
                    <Chip key={x}>{x}</Chip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Experience">
          <Timeline items={resume.experience} />
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Notable Projects">
          <div className="space-y-6">
            {resume.projects.map((p) => (
              <div
                key={p.name}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">{p.name}</div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700">
                  {p.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="space-y-4">
            {resume.education.map((e) => (
              <div
                key={e.degree}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="text-base font-semibold text-slate-900">{e.degree}</div>
                <div className="mt-1 text-sm text-slate-700">{e.school}</div>
                <div className="text-sm text-slate-600">
                  {e.location} • {e.dates}
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-sm text-slate-700">
              <div className="flex flex-wrap gap-2">
                <a
                  className="rounded-xl border border-slate-200 bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
                  href={`mailto:${resume.email}`}
                >
                  Email
                </a>
                <a
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100"
                  href={`tel:${resume.phone.replace(/\s/g, "")}`}
                >
                  Call
                </a>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                © {new Date().getFullYear()} {resume.name} • Hosted on GitHub Pages
              </div>
            </div>
          </div>
        </Section>
      </main>
    </div>
  );
}
