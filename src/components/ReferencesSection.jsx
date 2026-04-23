import { references } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function ReferencesSection() {
  return (
    <section id="references" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="📚"
          title="References"
          subtitle="Selected literature and reports guiding the dementia screening and multimodal AI methodology."
        />

        <div className="card-base mx-auto max-w-5xl p-6 sm:p-8">
          <ol className="space-y-4">
            {references.map((reference, index) => (
              <li key={reference} className="grid grid-cols-[32px_1fr] gap-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                <span className="font-bold text-mint-700">[{index + 1}]</span>
                <span>{reference}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
