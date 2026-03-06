import React, { useEffect, useRef, useState, useMemo } from 'react';

export const CurtainBackground = () => {
  const containerRef = useRef<SVGSVGElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 });
  const requestRef = useRef<number>();
  const timeRef = useRef<number>(0);

  const lineCount = 50;
  const segments = 10; // Number of control points per line

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const animate = (time: number) => {
      timeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  // Generate initial line data
  const lines = useMemo(() => {
    return Array.from({ length: lineCount }).map((_, i) => {
      const depth = Math.random();
      return {
        id: i,
        baseX: (dimensions.width / (lineCount - 1)) * i,
        opacity: depth * 0.15 + 0.05,
        strokeWidth: depth * 0.5 + 0.2,
        blur: depth < 0.3 ? 1 : 0,
        offset: Math.random() * Math.PI * 2,
        speed: 0.0003 + Math.random() * 0.0004
      };
    });
  }, [lineCount, dimensions.width]);

  return (
    <svg
      ref={containerRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
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
      {lines.map((line) => (
        <LinePath 
          key={line.id} 
          line={line} 
          mouse={mouse} 
          dimensions={dimensions} 
          segments={segments}
        />
      ))}
    </svg>
  );
};

const LinePath = ({ line, mouse, dimensions, segments }: any) => {
  const [path, setPath] = useState('');

  useEffect(() => {
    let animId: number;
    
    const updatePath = (time: number) => {
      let d = `M ${line.baseX} 0`;
      
      for (let i = 1; i <= segments; i++) {
        const y = (dimensions.height / segments) * i;
        
        // Ambient wave - slower and more organic
        const ambientX = Math.sin(time * line.speed + (y * 0.001) + line.offset) * 20;
        
        // Mouse interaction - pull toward cursor
        const dx = mouse.x - (line.baseX + ambientX);
        const dy = mouse.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const maxDist = 400;
        
        let interactionX = 0;
        if (dist < maxDist) {
          const power = Math.pow(1 - dist / maxDist, 1.5);
          interactionX = dx * power * 0.5;
        }
        
        const finalX = line.baseX + ambientX + interactionX;
        
        // Smooth curve using quadratic bezier
        const prevY = (dimensions.height / segments) * (i - 1);
        d += ` Q ${finalX} ${prevY} ${finalX} ${y}`;
      }
      
      setPath(d);
      animId = requestAnimationFrame(updatePath);
    };

    animId = requestAnimationFrame(updatePath);
    return () => cancelAnimationFrame(animId);
  }, [line, mouse, dimensions, segments]);

  return (
    <path
      d={path}
      fill="none"
      stroke="url(#lineGradient)"
      strokeWidth={line.strokeWidth}
      filter={line.blur ? 'url(#blurFilter)' : undefined}
      style={{ opacity: line.opacity }}
    />
  );
};
