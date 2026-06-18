import { memo, useRef, type MouseEvent } from "react";
import { motion, useTransform, useMotionValue, useSpring } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { WavyBackground } from "./ui/wavy-background";
import { MagneticButton } from "./ui/magnetic-button";

const WAVE_COLORS = ["#3b82f6", "#60a5fa", "#2563eb", "#93c5fd", "#1d4ed8"];
const WAVE_GRADIENT = `linear-gradient(125deg, ${WAVE_COLORS.join(", ")})`;
const WAVE_GRADIENT_INVERSE = `linear-gradient(305deg, ${[...WAVE_COLORS].reverse().join(", ")})`;

export const Hero = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 30, stiffness: 120 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;
    mouseX.set(x);
    mouseY.set(y);
  };

  const spotlightX = useTransform(mouseXSpring, [0, 1], ["30%", "70%"]);
  const spotlightY = useTransform(mouseYSpring, [0, 1], ["30%", "70%"]);
  const waveTextX = useTransform(mouseXSpring, [0, 1], [-12, 12]);
  const waveTextY = useTransform(mouseYSpring, [0, 1], [-6, 6]);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#050505] px-5 py-24 sm:px-6 lg:px-10"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <WavyBackground
          fillContainer
          colors={WAVE_COLORS}
          waveOpacity={0.12}
          blur={20}
          speed="slow"
          backgroundFill="#050505"
        />

        <motion.div
          style={{
            left: spotlightX,
            top: spotlightY,
            x: "-50%",
            y: "-50%",
          }}
          className="absolute w-[800px] h-[800px] bg-blue-500/5 blur-[160px] rounded-full"
        />

        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
          className="group relative overflow-hidden rounded-2xl border border-zinc-800/50 px-5 py-12 transition-colors duration-700 hover:border-zinc-700/80 sm:px-10 sm:py-16 md:px-16 md:py-20 lg:px-24 lg:py-24"
        >
          <div className="flex flex-col items-center text-center">
            <div className="space-y-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-400/80">
                {/* Portfolio / Software Engineering */}
              </p>
              <h1 className="font-serif text-5xl font-light italic leading-[1.05] tracking-tight text-zinc-100 sm:text-6xl md:text-7xl lg:text-8xl">
                Mohammad Aneeq
                <motion.span
                  className="hero-wave-text mt-3 block bg-clip-text font-instrument-serif text-4xl font-normal not-italic tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
                  style={{
                    backgroundImage: WAVE_GRADIENT,
                    x: waveTextX,
                    y: waveTextY,
                  }}
                >
                  Full-Stack Developer
                </motion.span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="hero-wave-text mx-auto mt-8 max-w-2xl bg-clip-text text-base font-light leading-relaxed text-transparent md:text-lg"
              style={{
                backgroundImage: WAVE_GRADIENT_INVERSE,
                x: waveTextX,
                y: waveTextY,
              }}
            >
              I build scalable web applications and backend systems using modern
              technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <MagneticButton strength={0.35} maxDistance={48}>
                <Link
                  to="/resume"
                  className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-blue-500 to-blue-700 px-5 py-2.5 text-sm font-medium text-white ring-1 ring-white/20 ring-inset transition-transform duration-150 active:scale-[0.98]"
                >
                  View Resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </MagneticButton>

              <MagneticButton strength={0.25} maxDistance={40}>
                <a
                  href="#projects"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/60 px-5 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-zinc-100"
                >
                  Explore Work
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-zinc-700/30 rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-zinc-700/30 rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-zinc-700/30 rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-zinc-700/30 rounded-br-2xl" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-4 text-center sm:flex"
      >
        <div className="h-12 w-px bg-linear-to-b from-zinc-800 to-transparent" />
        <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-600">
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
});
