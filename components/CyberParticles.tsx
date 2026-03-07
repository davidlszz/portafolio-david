"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function CyberParticles() {
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px), (pointer: coarse)");
    const onChange = () => setIsMobile(media.matches);

    onChange();
    media.addEventListener("change", onChange);

    return () => media.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, [isMobile]);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 45,
      fullScreen: { enable: false },
      detectRetina: false,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 110, links: { opacity: 0.25 } },
        },
      },
      particles: {
        color: { value: ["#00ff88", "#00e5ff"] },
        links: {
          color: "#00e5ff",
          distance: 120,
          enable: true,
          opacity: 0.16,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 0.45,
          straight: false,
        },
        number: {
          density: { enable: true, width: 900, height: 900 },
          value: 36,
        },
        opacity: { value: { min: 0.18, max: 0.5 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2 } },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      background: { color: "transparent" },
    }),
    [],
  );

  if (isMobile || !ready) {
    return null;
  }

  return (
    <Particles
      id="cyber-particles"
      options={options}
      className="pointer-events-none absolute inset-0 -z-10"
    />
  );
}
