import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  fillContainer = false,
  ...props
}: {
  children?: any;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  fillContainer?: boolean;
  [key: string]: any;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement;
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number>(0);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  };

  const resizeCanvas = () => {
    if (!canvas || !ctx) return;

    const width = fillContainer
      ? containerRef.current?.clientWidth ?? window.innerWidth
      : window.innerWidth;
    const height = fillContainer
      ? containerRef.current?.clientHeight ?? window.innerHeight
      : window.innerHeight;

    w = canvas.width = width;
    h = canvas.height = height;
    ctx.filter = `blur(${blur}px)`;
  };

  const init = () => {
    canvas = canvasRef.current!;
    ctx = canvas.getContext("2d")!;
    resizeCanvas();
    nt = 0;
    render();
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];
  const drawWave = (n: number) => {
    nt += getSpeed();
    for (i = 0; i < n; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth || 50;
      ctx.strokeStyle = waveColors[i % waveColors.length];
      for (x = 0; x < w; x += 5) {
        var y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + h * 0.5); // adjust for height, currently at 50% of the container
      }
      ctx.stroke();
      ctx.closePath();
    }
  };

  const render = () => {
    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, w, h);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    init();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    let resizeObserver: ResizeObserver | undefined;
    if (fillContainer && containerRef.current) {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      cancelAnimationFrame(animationIdRef.current);
      window.removeEventListener("resize", handleResize);
      resizeObserver?.disconnect();
    };
  }, [fillContainer, blur]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    // I'm sorry but i have got to support it on safari.
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  const containerClasses = fillContainer
    ? `relative h-full w-full overflow-hidden${containerClassName ? ` ${containerClassName}` : ""}`
    : `flex h-screen flex-col items-center justify-center${containerClassName ? ` ${containerClassName}` : ""}`;

  return (
    <div ref={containerRef} className={containerClasses}>
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      {children ? (
        <div
          className={`relative z-10${className ? ` ${className}` : ""}`}
          {...props}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};
