import { ExternalLink, Github, Globe, Server, Shapes } from "lucide-react";
import { projectLinks } from "../data/content";
import SectionHeading from "./SectionHeading";

const iconMap = {
  "GitHub Repository": Github,
  "Frontend Deployment": Globe,
  "Backend API": Server,
  "Research Artifacts": Shapes,
};

export default function LinksSection() {
  return (
    <section id="links" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🔗"
          title="Project Links"
          subtitle="Quick access to code repositories, deployments, and research deliverables."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projectLinks.map((link) => {
            const Icon = iconMap[link.title] || Shapes;
            return (
              <article key={link.title} className="card-base p-6 transition hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint-100 text-mint-700">
                    <Icon size={22} />
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-mint-800">{link.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{link.description}</p>
                    <a
                      href={link.href}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-mint-700 hover:text-mint-900"
                    >
                      {link.cta}
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
