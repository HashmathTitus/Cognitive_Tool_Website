import { ArrowRight, Microscope, Sparkles } from "lucide-react";

const badges = ["Final Year Research Project", "Multimodal AI", "Healthcare Innovation"];

export default function HeroSection() {
  return (
    <section id="home" className="scroll-mt-24 pt-28 sm:pt-32">
      <div className="section-container">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <div className="mb-5 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-mint-200 bg-white px-3 py-1 text-xs font-semibold text-mint-700"
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-mint-900 sm:text-5xl lg:text-6xl">
              AI-Powered Cognitive Screening for Earlier Dementia Detection
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
              A multimodal research platform that analyzes speech, handwriting, cognitive performance,
              lifestyle, health-related indicators, and MRI-based dementia staging to support early risk
              screening and monitoring.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#research"
                className="inline-flex items-center gap-2 rounded-xl bg-mint-600 px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-mint-700"
              >
                View Research
                <ArrowRight size={16} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-xl border border-mint-200 bg-white px-5 py-3 text-sm font-bold text-mint-700 transition hover:border-mint-300 hover:bg-mint-50"
              >
                Explore Features
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-3 -top-3 h-28 w-28 rounded-3xl bg-mint-200/70 blur-2xl" />
            <div className="absolute -bottom-6 -right-4 h-36 w-36 rounded-full bg-mint-300/60 blur-2xl" />

            <div className="card-base relative overflow-hidden p-6 sm:p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-mint-100/60 via-white to-mint-50/20" />
              <div className="relative">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-mint-600 text-white">
                  <Microscope size={24} />
                </div>
                <h3 className="text-2xl font-extrabold text-mint-800">Multimodal Dementia Research Platform</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Integrated AI modules for speech behavior, handwriting dynamics, health indicators,
                  and cognitive task outcomes in a single web-based screening workflow.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-mint-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">Modalities</p>
                    <p className="mt-1 text-lg font-bold text-mint-800">4+ Integrated Streams</p>
                  </div>
                  <div className="rounded-xl border border-mint-100 bg-white p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-mint-600">Goal</p>
                    <p className="mt-1 text-lg font-bold text-mint-800">Earlier Risk Insight</p>
                  </div>
                </div>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-mint-100 px-3 py-2 text-sm font-semibold text-mint-700">
                  <Sparkles size={15} />
                  Research-ready prototype for academic evaluation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
