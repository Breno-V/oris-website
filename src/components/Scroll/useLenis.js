"use client";
import { useEffect, useRef, useState } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis() {
  const lenisRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenisRef.current.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setReady(true); // Lenis pronto

    return () => lenisRef.current.destroy();
  }, []);

  return ready ? lenisRef.current : null;
}