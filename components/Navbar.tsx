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
        <div className="section-shell overflow-hidden rounded-[1.85rem] border border-white/10 bg-[rgba(18,20,24,0.78)] p-2 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
          <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="flex items-center justify-between gap-3">
            <a
              href="#home"
              className="inline-flex min-w-0 items-center gap-3 rounded-[1.35rem] border border-white/10 bg-white/5 px-4 py-3 text-white"
            >
              <div className="rounded-2xl border border-white/10 bg-[color:var(--panel-strong)] p-2.5 text-[color:var(--accent)]">
                <ShieldCheck size={17} />
              </div>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold uppercase tracking-[0.28em] md:text-xs">
                  David Lopez
                </p>
                <p className="truncate text-[10px] text-white/45">
                  {lang === "es" ? "Infraestructura + seguridad" : "Infrastructure + security"}
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
                    className={`relative overflow-hidden rounded-full border px-4 py-3 text-[11px] tracking-[0.18em] transition ${
                      isActive
                        ? "border-white/12 bg-white/9 text-white shadow-[0_12px_30px_rgba(0,0,0,0.16)]"
                        : "border-transparent text-white/55 hover:border-white/10 hover:bg-white/6 hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">{lang === "es" ? item.es : item.en}</span>
                  </a>
                );
              })}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-[10px] tracking-[0.18em] text-white/65">
                <span className="inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)] shadow-[0_0_12px_rgba(255,138,85,0.72)]" />
                {lang === "es" ? "Disponible" : "Available"}
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "en" ? "bg-white/12 text-white" : "text-white/46"
                  }`}
                  aria-label="Switch to English"
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "es" ? "bg-[color:var(--accent)]/20 text-[color:var(--accent)]" : "text-white/46"
                  }`}
                  aria-label="Cambiar a Espanol"
                >
                  ES
                </button>
              </div>
            </div>

            <button
              type="button"
              className="rounded-[1.15rem] border border-white/10 bg-white/5 p-3 text-white lg:hidden"
              onClick={() => setOpen((current) => !current)}
              aria-label={open ? "Cerrar menu" : "Abrir menu"}
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="animated-content section-shell overflow-hidden rounded-[1.8rem] border border-white/10 bg-[rgba(18,20,24,0.92)] p-4 shadow-[0_18px_50px_rgba(0,0,0,0.32)] backdrop-blur-xl">
            <div className="mb-4 grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <p className="text-[11px] tracking-[0.24em] text-white/42">FIELD NAV</p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {lang === "es" ? "Navegacion del portfolio" : "Portfolio navigation"}
                </p>
              </div>
              <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "en" ? "bg-white/12 text-white" : "text-white/46"
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => setLang("es")}
                  className={`rounded-full px-3 py-2 text-[11px] tracking-[0.14em] transition ${
                    lang === "es" ? "bg-[color:var(--accent)]/20 text-[color:var(--accent)]" : "text-white/46"
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
                      ? "border-white/12 bg-white/8 text-white"
                      : "border-white/8 bg-white/5 text-white/72 hover:bg-white/8"
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
