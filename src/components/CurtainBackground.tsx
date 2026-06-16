import React, { useEffect, useRef, useMemo, useCallback } from 'react';

const LINE_COUNT = 24;
const SEGMENTS = 8;

const useIsVisible = (ref: React.RefObject<HTMLElement | null>) => {
  const [visible, setVisible] = React.useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);

  return visible;
};

const LinePath = React.memo(({ line, mouseRef, dims, segments }: any) => {
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    let animId: number;

    const updatePath = (time: number) => {
      let d = `M ${line.baseX} 0`;

      for (let i = 1; i <= segments; i++) {
        const y = (dims.height / segments) * i;
        const ambientX = Math.sin(time * line.speed + (y * 0.001) + line.offset) * 20;

        const dx = mouseRef.current.x - (line.baseX + ambientX);
        const dy = mouseRef.current.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        let interactionX = 0;
        if (dist < 400) {
          const power = Math.pow(1 - dist / 400, 1.5);
          interactionX = dx * power * 0.5;
        }

        const finalX = line.baseX + ambientX + interactionX;
        const prevY = (dims.height / segments) * (i - 1);
        d += ` Q ${finalX} ${prevY} ${finalX} ${y}`;
      }

      if (pathRef.current) pathRef.current.setAttribute('d', d);
      animId = requestAnimationFrame(updatePath);
    };

    animId = requestAnimationFrame(updatePath);
    return () => cancelAnimationFrame(animId);
  }, [line, segments]);

  return (
    <path
      ref={pathRef}
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth={line.strokeWidth}
      filter={line.blur ? 'url(#blurFilter)' : undefined}
      style={{ opacity: line.opacity }}
    />
  );
});

export const CurtainBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dimsRef = useRef({ width: 1200, height: 800 });
  const visible = useIsVisible(containerRef);

  const lines = useMemo(() => {
    return Array.from({ length: LINE_COUNT }).map((_, i) => {
      const depth = Math.random();
      return {
        id: i,
        baseX: (1200 / (LINE_COUNT - 1)) * i,
        opacity: depth * 0.15 + 0.05,
        strokeWidth: depth * 0.5 + 0.2,
        blur: depth < 0.3 ? 1 : 0,
        offset: Math.random() * Math.PI * 2,
        speed: 0.0003 + Math.random() * 0.0004,
      };
    });
  }, []);

  useEffect(() => {
    if (!visible) return;

    const handleResize = () => {
      dimsRef.current = { width: window.innerWidth, height: window.innerHeight };
      if (svgRef.current) {
        svgRef.current.setAttribute('viewBox', `0 0 ${window.innerWidth} ${window.innerHeight}`);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [visible]);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none">
      <svg
        ref={svgRef}
        className="w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
            <stop offset="50%" stopColor="rgba(59, 130, 246, 0.8)" />
            <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
          </linearGradient>
          <filter id="blurFilter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
          </filter>
        </defs>
        {visible && lines.map((line) => (
          <LinePath
            key={line.id}
            line={line}
            mouseRef={mouseRef}
            dims={dimsRef}
            segments={SEGMENTS}
          />
        ))}
      </svg>
    </div>
  );
};
