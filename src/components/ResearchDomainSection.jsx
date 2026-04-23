import { useState } from "react";
import { domainTabs } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function ResearchDomainSection() {
  const [activeTab, setActiveTab] = useState(domainTabs[0].id);
  const selected = domainTabs.find((tab) => tab.id === activeTab);

  return (
    <section id="domain" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="📚"
          title="Research Domain"
          subtitle="The academic foundation of our project, from background motivation to measurable research objectives."
        />

        <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2">
          {domainTabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab.id
                  ? "bg-mint-600 text-white"
                  : "border border-mint-200 bg-white text-mint-700 hover:bg-mint-50"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div className="card-base mx-auto mt-6 max-w-4xl p-6 sm:p-8">
          <h3 className="text-2xl font-bold text-mint-800">{selected.title}</h3>

          {selected.content ? (
            <p className="mt-4 leading-relaxed text-slate-600">{selected.content}</p>
          ) : (
            <ul className="mt-4 space-y-2">
              {selected.points?.map((point) => (
                <li key={point} className="flex gap-2 text-slate-600">
                  <span className="mt-1 h-2 w-2 rounded-full bg-mint-500" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
