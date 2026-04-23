import SectionHeading from "./SectionHeading";

export default function DemoSection() {
  return (
    <section id="demo" className="scroll-mt-24 py-20 sm:py-24">
      <div className="section-container">
        <SectionHeading
          icon="🎥"
          title="UI Demo Video"
          subtitle="A walkthrough of the user workflow, module interactions, and result interpretation dashboard."
        />

        <div className="card-base mx-auto max-w-4xl overflow-hidden p-3 sm:p-4">
          <div className="aspect-video overflow-hidden rounded-xl border border-mint-100">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="CogniCare Demo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
