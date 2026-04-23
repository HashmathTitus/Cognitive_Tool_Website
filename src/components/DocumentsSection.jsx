import { FileText } from "lucide-react";
import { documentGroups } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function DocumentsSection() {
  return (
    <section id="docs" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="📄"
          title="Project Documents"
          subtitle="Structured document access for proposal artifacts, reports, presentations, and deployment deliverables."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {documentGroups.map((group) => (
            <article key={group.group} className="card-base p-6">
              <h3 className="text-xl font-bold text-mint-800">{group.group}</h3>
              <div className="mt-4 space-y-3">
                {group.docs.map((doc) => (
                  <div
                    key={doc.title}
                    className="rounded-xl border border-mint-100 bg-mint-50/50 p-4 transition hover:border-mint-200"
                  >
                    <div className="flex items-center gap-3">
                      <FileText size={18} className="text-mint-600" />
                      <p className="font-semibold text-slate-700">{doc.title}</p>
                    </div>
                    <div className="mt-3 flex gap-4 text-sm font-semibold text-mint-700">
                      <a href={doc.viewUrl} className="hover:text-mint-900">
                        View
                      </a>
                      <a href={doc.downloadUrl} className="hover:text-mint-900">
                        Download
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
