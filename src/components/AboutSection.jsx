import { aboutCards } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🧬"
          title="About The Project"
          subtitle="Our project is an AI-driven cognitive screening platform designed to support early identification of dementia-related risk using multiple data sources. The system combines speech behavior analysis, handwriting analysis, cognitive assessments, health/lifestyle indicators, and MRI-based dementia staging with explainable heatmaps to produce a comprehensive screening outcome."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {aboutCards.map((item) => (
            <article
              key={item.title}
              className="card-base h-full p-6 transition duration-300 hover:-translate-y-1 hover:border-mint-200"
            >
              <p className="mb-4 text-2xl" aria-hidden="true">
                {item.emoji}
              </p>
              <h3 className="text-lg font-bold text-mint-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
