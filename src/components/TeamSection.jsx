import { Mail } from "lucide-react";
import { supervisors, teamMembers } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function TeamSection() {
  return (
    <section id="team" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="💚"
          title="Meet Our Team"
          subtitle="Academic supervisors and student researchers behind the multimodal cognitive screening platform."
        />

        <div className="space-y-6">
          <div className="grid gap-5 md:grid-cols-2">
            {supervisors.map((member) => (
              <article key={member.email} className="card-base p-6 text-center transition hover:-translate-y-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-full object-cover shadow-soft ring-4 ring-mint-50"
                  loading="lazy"
                />
                <h3 className="mt-4 text-2xl font-bold text-mint-800">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-700 hover:text-mint-900"
                >
                  <Mail size={16} />
                  {member.email}
                </a>
              </article>
            ))}
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {teamMembers.map((member) => (
              <article key={member.email} className="card-base p-6 text-center transition hover:-translate-y-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="mx-auto h-28 w-28 rounded-full object-cover shadow-soft ring-4 ring-mint-50"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-bold text-mint-800">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold text-slate-500">{member.role}</p>
                <a
                  href={`mailto:${member.email}`}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-mint-700 hover:text-mint-900"
                >
                  <Mail size={16} />
                  {member.email}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
