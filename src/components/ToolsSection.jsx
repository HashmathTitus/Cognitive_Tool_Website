import { technologies } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function ToolsSection() {
  return (
    <section id="tools" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🛠️"
          title="Tools & Technologies"
          subtitle="Technology stack used to build, train, deploy, and evaluate the multimodal research platform."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {technologies.map((tech) => (
            <article
              key={tech.name}
              className="card-base flex h-full flex-col items-center p-5 text-center transition hover:-translate-y-1 hover:border-mint-200"
            >
              <p className="text-3xl" aria-hidden="true">
                {tech.emoji}
              </p>
              <h3 className="mt-3 text-lg font-bold text-mint-800">{tech.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{tech.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
