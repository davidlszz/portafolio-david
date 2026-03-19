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
  const [progress, setProgress] = useState(0);
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
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      const nextProgress = maxScroll > 0 ? Math.min(100, (currentY / maxScroll) * 100) : 0;

      if (!open) {
        if (currentY > 140 && currentY > lastScrollY.current + 4) {
          setHidden(true);
        } else if (currentY < lastScrollY.current - 4 || currentY < 80) {
          setHidden(false);
        }
      }

      setProgress(nextProgress);
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
      <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-2xl border border-emerald-400/30 bg-slate-950/82 shadow-[0_16px_48px_rgba(0,0,0,0.28)] md:bg-slate-950/70 md:backdrop-blur-md">
        <div
          className="h-[2px] bg-gradient-to-r from-cyan-300/65 via-emerald-300/80 to-cyan-300/65 transition-[width] duration-200"
          style={{ width: `${progress}%` }}
        />

        <div className="flex items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex min-w-0 items-center gap-3 text-emerald-200">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-2">
              <ShieldCheck size={17} />
            </div>
            <div className="min-w-0">
              <p className="cyber-title truncate text-[11px] md:text-xs">David / Secure Node</p>
              <p className="truncate text-[10px] text-cyan-100/55">
                {lang === "es" ? "Portfolio operativo" : "Operational portfolio"}
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <div className="mr-2 inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/8 px-3 py-1 text-[10px] tracking-[0.2em] text-cyan-100/70">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(0,255,136,0.85)]" />
              {lang === "es" ? "Disponible" : "Available"}
            </div>
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

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = active === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative rounded-md px-3 py-2 text-xs tracking-[0.16em] transition ${
                    isActive
                      ? "bg-emerald-400/18 text-emerald-200"
                      : "text-cyan-100/78 hover:bg-cyan-300/10 hover:text-cyan-100"
                  }`}
                >
                  <span>{lang === "es" ? item.es : item.en}</span>
                  {isActive && (
                    <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent" />
                  )}
                </a>
              );
            })}
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
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-3 w-full max-w-6xl rounded-2xl border border-cyan-300/25 bg-slate-950/94 p-3 shadow-[0_16px_48px_rgba(0,0,0,0.24)]"
          >
            <div className="mb-3 flex items-center justify-between gap-3 rounded-xl border border-cyan-300/15 bg-slate-900/75 px-3 py-3">
              <div>
                <p className="text-xs tracking-[0.2em] text-cyan-100/65">
                  {lang === "es" ? "MODO" : "MODE"}
                </p>
                <p className="text-sm font-semibold text-white">
                  {lang === "es" ? "Navegaci\u00f3n del portfolio" : "Portfolio navigation"}
                </p>
              </div>
              <div className="flex gap-2">
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
            </div>

            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-3 py-3 text-sm transition ${
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
