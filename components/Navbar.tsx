"use client";

import { useEffect, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { id: "home", label: "Inicio" },
  { id: "about", label: "Sobre mi" },
  { id: "stack", label: "Stack" },
  { id: "projects", label: "Proyectos" },
  { id: "focus", label: "Enfoque" },
  { id: "contact", label: "Contacto" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      {
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      },
    );

    for (const item of navItems) {
      const section = document.getElementById(item.id);
      if (section) {
        observer.observe(section);
      }
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const body = document.body;
    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
    return () => {
      body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40 px-4 pt-4 md:px-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border border-emerald-400/35 bg-slate-950/85 px-4 py-3 md:bg-slate-950/75 md:backdrop-blur-md">
        <a href="#home" className="flex items-center gap-2 text-emerald-200">
          <ShieldCheck size={18} />
          <span className="cyber-title text-xs md:text-sm">David / Secure Node</span>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-md px-3 py-2 text-xs tracking-[0.16em] transition ${
                active === item.id
                  ? "bg-emerald-400/20 text-emerald-200"
                  : "text-cyan-100/80 hover:bg-cyan-300/10 hover:text-cyan-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md border border-cyan-300/40 p-2 text-cyan-100 md:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label={open ? "Cerrar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-full max-w-6xl rounded-xl border border-cyan-300/30 bg-slate-950/92 p-3 md:hidden"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-3 text-sm transition ${
                    active === item.id
                      ? "bg-emerald-400/20 text-emerald-200"
                      : "text-cyan-100/85 hover:bg-cyan-300/10"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
