import { researchHighlights } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function HighlightsSection() {
  return (
    <section id="research" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🔬"
          title="Research Highlights"
          subtitle="Core innovation blocks that define our multimodal dementia screening methodology."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {researchHighlights.map((card) => (
            <article
              key={card.title}
              className="card-base p-6 transition duration-300 hover:-translate-y-1 hover:border-mint-200"
            >
              <p className="text-2xl" aria-hidden="true">
                {card.emoji}
              </p>
              <h3 className="mt-4 text-xl font-bold text-mint-800">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
