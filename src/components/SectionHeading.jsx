export default function SectionHeading({ icon, title, subtitle }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
      <p className="mb-2 text-2xl sm:text-3xl" aria-hidden="true">
        {icon}
      </p>
      <h2 className="text-3xl font-extrabold tracking-tight text-mint-800 sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p> : null}
    </div>
  );
}
