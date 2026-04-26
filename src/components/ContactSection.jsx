import { Mail, MapPin, Github } from "lucide-react";
import { useState } from "react";
import SectionHeading from "./SectionHeading";

const contactItems = [
  {
    label: "Email",
    value: "cognicare7@gmail.com",
    href: "mailto:cognicare7@gmail.com",
    icon: Mail,
  },
  // {
  //   label: "Location",
  //   value: "Sri Lanka Institute of Information Technology, Malabe",
  //   icon: MapPin,
  // },
  // {
  //   label: "GitHub Repository",
  //   value: "https://github.com/HimeshaSenaratne/research_proj_cognicare.git",
  //   href: "https://github.com/HimeshaSenaratne/research_proj_cognicare.git",
  //   icon: Github,
  // },
];

const initialForm = {
  fullName: "",
  email: "",
  institution: "",
  subject: "",
  message: "",
};

export default function ContactSection() {
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    const body = [
      `Full Name: ${formData.fullName}`,
      `Email: ${formData.email}`,
      `Institution / Organization: ${formData.institution || "Not provided"}`,
      "",
      "Message:",
      formData.message,
    ].join("\n");

    const mailtoUrl = `mailto:cognicare7@gmail.com?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
    setFormData(initialForm);
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-mint-100/55 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="@"
          title="Contact Us"
          subtitle="We are committed to advancing early dementia detection through multimodal AI research. Feel free to contact our team for research collaboration, academic inquiries, project demonstrations, or technical discussions."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="card-base p-6 sm:p-8">
            <div className="space-y-4">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 rounded-2xl border border-mint-100 bg-mint-50/70 p-4"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-mint-700 shadow-soft">
                      <Icon size={20} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint-700/80">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="mt-1 inline-block text-sm leading-relaxed text-slate-600 transition hover:text-mint-700 sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          <article className="card-base p-6 sm:p-8">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Full Name *</span>
                  <input
                    required
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-mint-100 bg-mint-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-mint-300 focus:ring-2 focus:ring-mint-200"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-slate-700">Email *</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-2xl border border-mint-100 bg-mint-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-mint-300 focus:ring-2 focus:ring-mint-200"
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Institution / Organization
                </span>
                <input
                  type="text"
                  name="institution"
                  value={formData.institution}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-mint-100 bg-mint-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-mint-300 focus:ring-2 focus:ring-mint-200"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Subject *</span>
                <input
                  required
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-mint-100 bg-mint-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-mint-300 focus:ring-2 focus:ring-mint-200"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">Message *</span>
                <textarea
                  required
                  name="message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-mint-100 bg-mint-50/60 px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-mint-300 focus:ring-2 focus:ring-mint-200"
                />
              </label>

              <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  className="rounded-2xl bg-mint-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-mint-700"
                >
                  Send Message
                </button>

                {submitted ? (
                  <p className="text-sm font-medium text-mint-700">
                    Thank you. Your message has been recorded.
                  </p>
                ) : null}
              </div>
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}
