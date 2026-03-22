"use client";

import { useEffect, useRef } from "react";

interface NoiseOverlayProps {
  alpha?: number;
}

export default function NoiseOverlay({ alpha = 18 }: NoiseOverlayProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) {
      return;
    }

    const context = canvas.getContext("2d", { alpha: true });
    if (!context) {
      return;
    }

    const size = 168;
    let frame = 0;
    let animationId = 0;

    const draw = () => {
      canvas.width = size;
      canvas.height = size;

      const imageData = context.createImageData(size, size);
      const data = imageData.data;

      for (let index = 0; index < data.length; index += 4) {
        const value = Math.random() * 255;
        data[index] = value;
        data[index + 1] = value;
        data[index + 2] = value;
        data[index + 3] = alpha;
      }

      context.putImageData(imageData, 0, 0);
    };

    const loop = () => {
      if (frame % 3 === 0) {
        draw();
      }

      frame += 1;
      animationId = window.requestAnimationFrame(loop);
    };

    draw();
    animationId = window.requestAnimationFrame(loop);

    return () => {
      window.cancelAnimationFrame(animationId);
    };
  }, [alpha]);

  return <canvas ref={canvasRef} aria-hidden="true" className="noise-overlay" />;
}
