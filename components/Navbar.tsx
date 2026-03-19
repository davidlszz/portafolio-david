"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, ShieldCheck, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

const navItems = [
  { id: "home", es: "Inicio", en: "Home" },
  { id: "about", es: "Sobre m\u00ed", en: "About" },
  { id: "stack", es: "Stack", en: "Stack" },
  { id: "projects", es: "Proyectos", en: "Projects" },
  { id: "focus", es: "Enfoque", en: "Focus" },
  { id: "contact", es: "Contacto", en: "Contact" },
] as const;

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const { lang, setLang } = useLanguage();

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
    let ticking = false;

    const updateNavbar = () => {
      const currentY = window.scrollY;

      if (!open) {
        if (currentY > 140 && currentY > lastScrollY.current + 4) {
          setHidden(true);
        } else if (currentY < lastScrollY.current - 4 || currentY < 80) {
          setHidden(false);
        }
      }

      lastScrollY.current = currentY;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

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
    <header
      className={`fixed inset-x-0 top-0 z-40 px-4 pt-4 transition-transform duration-300 md:px-6 ${
        hidden && !open ? "-translate-y-[140%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-xl border border-emerald-400/35 bg-slate-950/85 px-4 py-3 md:bg-slate-950/75 md:backdrop-blur-md">
        <a href="#home" className="flex items-center gap-2 text-emerald-200">
          <ShieldCheck size={18} />
          <span className="cyber-title text-xs md:text-sm">David / Secure Node</span>
        </a>

        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            onClick={() => setLang("en")}
            className={`rounded-md px-3 py-1 text-[11px] tracking-[0.14em] ${
              lang === "en" ? "bg-cyan-300/20 text-cyan-100" : "text-cyan-100/65"
            }`}
            aria-label="Switch to English"
          >
            EN
          </button>
          <button
            type="button"
            onClick={() => setLang("es")}
            className={`rounded-md px-3 py-1 text-[11px] tracking-[0.14em] ${
              lang === "es" ? "bg-emerald-400/20 text-emerald-200" : "text-cyan-100/65"
            }`}
            aria-label={"Cambiar a Espa\u00f1ol"}
          >
            ES
          </button>
        </div>

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
              {lang === "es" ? item.es : item.en}
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
            <div className="mb-2 flex gap-2">
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-md px-3 py-2 text-xs ${lang === "en" ? "bg-cyan-300/20 text-cyan-100" : "text-cyan-100/70"}`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLang("es")}
                className={`rounded-md px-3 py-2 text-xs ${lang === "es" ? "bg-emerald-400/20 text-emerald-200" : "text-cyan-100/70"}`}
              >
                {"Espa\u00f1ol"}
              </button>
            </div>
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
                  {lang === "es" ? item.es : item.en}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
