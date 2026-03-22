"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "./LanguageContext";

const navItems = [
  { id: "home", es: "Inicio", en: "Home" },
  { id: "about", es: "Sobre mi", en: "About" },
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
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0.05,
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
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-4 pt-4 transition-transform duration-300 md:px-6 ${
        hidden && !open ? "-translate-y-[135%]" : "translate-y-0"
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-3">
        <div className="section-shell section-shell-react overflow-hidden rounded-[1.85rem] border border-cyan-300/18 bg-slate-950/72 p-2 shadow-[0_18px_50px_rgba(0,0,0,0.3)]">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              className="glass-chip inline-flex min-w-0 items-center gap-3 rounded-[1.35rem] border border-emerald-400/18 px-4 py-3 text-emerald-100"
            >
              <div className="rounded-2xl border border-emerald-400/18 bg-emerald-400/10 p-2.5">
                <ShieldCheck size={17} />
              </div>
              <div className="min-w-0">
                <p className="cyber-title truncate text-[11px] md:text-xs">David / Secure Node</p>
                <p className="truncate text-[10px] text-cyan-100/55">
                  {lang === "es" ? "Portfolio operativo" : "Operational portfolio"}
                </p>
              </div>
            </a>

            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-2 lg:flex">
              {navItems.map((item) => {
                const isActive = active === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`relative overflow-hidden rounded-[1.1rem] border px-4 py-3 text-[11px] tracking-[0.18em] transition ${
                      isActive
                        ? "border-cyan-300/20 bg-gradient-to-r from-cyan-300/18 to-emerald-400/16 text-white shadow-[0_0_24px_rgba(34,211,238,0.14)]"
                        : "border-transparent text-cyan-100/72 hover:border-cyan-300/14 hover:bg-cyan-300/8 hover:text-cyan-100"
                    }`}
                  >
                    <span className="relative z-10">{lang === "es" ? item.es : item.en}</span>
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <div className="glass-chip inline-flex items-center gap-2 rounded-[1.2rem] px-3 py-2 text-[10px] tracking-[0.18em] text-cyan-100/72">
                <span className="inline-flex h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
                {lang === "es" ? "Disponible" : "Available"}
              </div>
              <div className="glass-chip inline-flex items-center gap-1 rounded-[1.2rem] p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-[0.9rem] px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "en" ? "bg-cyan-300/18 text-cyan-100" : "text-cyan-100/58"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-[0.9rem] px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "es" ? "bg-emerald-400/18 text-emerald-100" : "text-cyan-100/58"
                  }`}
                  aria-label="Cambiar a Espanol"
                >
                  ES
                </button>
              </div>
            </div>

            <button
              type="button"
              className="glass-chip rounded-[1.15rem] p-3 text-cyan-100 lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="animated-content section-shell section-shell-react overflow-hidden rounded-[1.8rem] border border-cyan-300/18 bg-slate-950/90 p-4 shadow-[0_18px_50px_rgba(0,0,0,0.32)]">
            <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-[11px] tracking-[0.24em] text-cyan-100/55">CARD NAV</p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {lang === "es" ? "Navegacion del portfolio" : "Portfolio navigation"}
                </p>
              </div>
              <div className="glass-chip inline-flex items-center gap-1 rounded-[1.2rem] p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-[0.9rem] px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "en" ? "bg-cyan-300/18 text-cyan-100" : "text-cyan-100/58"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-[0.9rem] px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "es" ? "bg-emerald-400/18 text-emerald-100" : "text-cyan-100/58"
                  }`}
                >
                  ES
                </button>
              </div>
            </div>

            <nav className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className={`rounded-[1.25rem] border px-4 py-3 text-sm tracking-[0.08em] transition ${
                    active === item.id
                      ? "border-emerald-400/18 bg-emerald-400/12 text-emerald-100"
                      : "border-cyan-300/12 bg-slate-900/76 text-cyan-100/82 hover:bg-cyan-300/10"
                  }`}
                >
                  {lang === "es" ? item.es : item.en}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
