import { navItems } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-mint-600 to-mint-800 py-8 text-mint-50">
      <div className="section-container flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-2xl font-extrabold">CogniCare</p>
          <p className="mt-1 max-w-xl text-sm text-mint-100">
            Empowering earlier cognitive screening through multimodal AI research.
          </p>
          <p className="mt-3 text-xs text-mint-100/90">© {year} CogniCare Research Team</p>
        </div>

        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-semibold text-mint-100">
          {navItems.slice(1, 7).map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
