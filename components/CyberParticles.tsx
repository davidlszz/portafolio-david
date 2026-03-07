"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

export default function CyberParticles() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    void initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setReady(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      fpsLimit: 60,
      fullScreen: { enable: false },
      detectRetina: true,
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true },
        },
        modes: {
          grab: { distance: 120, links: { opacity: 0.3 } },
        },
      },
      particles: {
        color: { value: ["#00ff88", "#00e5ff"] },
        links: {
          color: "#00e5ff",
          distance: 130,
          enable: true,
          opacity: 0.2,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: { default: "out" },
          random: false,
          speed: 0.7,
          straight: false,
        },
        number: {
          density: { enable: true, width: 800, height: 800 },
          value: 55,
        },
        opacity: { value: { min: 0.2, max: 0.6 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 2.5 } },
      },
      pauseOnBlur: true,
      pauseOnOutsideViewport: true,
      background: { color: "transparent" },
    }),
    [],
  );

  if (!ready) {
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
