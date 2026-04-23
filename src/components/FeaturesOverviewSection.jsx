import { keyFeatures } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function FeaturesOverviewSection() {
  return (
    <section id="features" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🌱"
          title="Key Features Overview"
          subtitle="A structured view of the major functional modules in the research prototype."
        />

        <div className="mx-auto max-w-5xl">
          {keyFeatures.map((feature, index) => (
            <div key={feature.title} className="grid grid-cols-[56px_1fr] gap-4 sm:grid-cols-[80px_1fr] sm:gap-6">
              <div className="relative flex justify-center">
                <span className="z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border-4 border-mint-100 bg-mint-500 text-sm font-bold text-white">
                  {index + 1}
                </span>
                {index < keyFeatures.length - 1 ? (
                  <span className="absolute left-1/2 top-10 h-[calc(100%-10px)] w-[3px] -translate-x-1/2 bg-mint-200" />
                ) : null}
              </div>
              <article className="card-base mb-8 p-6">
                <h3 className="text-xl font-bold text-mint-800">{feature.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{feature.description}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
