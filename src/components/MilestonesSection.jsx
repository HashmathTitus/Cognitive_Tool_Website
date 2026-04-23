import { milestones } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function MilestonesSection() {
  return (
    <section id="milestones" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🍃"
          title="Project Milestones"
          subtitle="Chronological track of major deliverables and evaluations across the final-year research lifecycle."
        />

        <div className="mx-auto max-w-5xl">
          {milestones.map((item, index) => (
            <div key={item.title} className="grid grid-cols-[46px_1fr] gap-4 sm:grid-cols-[68px_1fr] sm:gap-6">
              <div className="relative flex justify-center">
                <span className="z-10 mt-1 inline-flex h-5 w-5 rounded-full border-4 border-mint-100 bg-mint-500" />
                {index < milestones.length - 1 ? (
                  <span className="absolute left-1/2 top-7 h-[calc(100%-1px)] w-[3px] -translate-x-1/2 bg-slate-900" />
                ) : null}
              </div>
              <article className="card-base mb-6 p-6">
                <h3 className="text-2xl font-bold text-mint-800">{item.title}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{item.month}</p>
                <p className="mt-3 leading-relaxed text-slate-600">{item.summary}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
