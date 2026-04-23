import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({ items, activeSection }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    setOpen(false);
    const section = document.getElementById(id);
    if (!section) return;

    const headerOffset = 86;
    const top = section.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-mint-100/60 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="section-container flex h-20 items-center justify-between">
        <button
          className="text-left text-3xl font-extrabold tracking-tight text-mint-700"
          onClick={() => handleNav("home")}
          type="button"
        >
          CogniCare
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNav(item.id)}
                className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                  isActive
                    ? "bg-mint-100 text-mint-800"
                    : "text-slate-600 hover:bg-mint-50 hover:text-mint-700"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex rounded-xl border border-mint-200 p-2 text-mint-700 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle Menu"
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-mint-100 bg-white px-4 pb-4 pt-2 shadow-soft lg:hidden">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {items.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNav(item.id)}
                  className={`rounded-xl px-3 py-2 text-left text-sm font-semibold ${
                    isActive
                      ? "bg-mint-100 text-mint-800"
                      : "bg-white text-slate-600 hover:bg-mint-50 hover:text-mint-700"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
