"use client";
import { useEffect, useState } from 'react';

export function useActiveSection(sectionIds: string[], offsetPx: number = 140) {
  const [activeId, setActiveId] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    if (sectionIds.length === 0) return;

    let ticking = false;

    const compute = () => {
      const scrollY = window.scrollY + offsetPx;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (top <= scrollY) current = id;
      }
      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(compute);
        ticking = true;
      }
    };

    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [sectionIds.join('|'), offsetPx]);

  return activeId;
}
