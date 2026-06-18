import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';
import { ResumeViewer } from '../components/ResumeViewer';

export const ResumePage = () => {
  return (
    <div className="relative flex min-h-svh flex-col overflow-hidden bg-[#050505]">
      <div className="pointer-events-none absolute top-0 right-0 h-[40%] w-[40%] rounded-full bg-blue-500/5 blur-[120px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl min-h-0 flex-1 flex-col px-5 pt-24 pb-5 sm:px-6 sm:pt-28 lg:px-10">
        {/* Compact header */}
        <header className="mb-4 shrink-0 space-y-4 sm:mb-5">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-600 transition-colors hover:text-zinc-300"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Back to home
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between"
          >
            <div className="space-y-2">
              <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-blue-400/80">
                Document / CV
              </p>
              <h1 className="font-serif text-3xl font-light italic tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
                Professional{' '}
                <span className="text-zinc-500 not-italic">Resume</span>
              </h1>
            </div>
            <Link
              to="/contact"
              className="group inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-800/70 bg-zinc-900/40 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-400 transition-all hover:border-zinc-700 hover:text-zinc-200"
            >
              <Mail className="h-3.5 w-3.5 text-blue-400" />
              Contact
            </Link>
          </motion.div>
        </header>

        {/* Viewer fills remaining viewport */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
          className="flex min-h-0 flex-1 flex-col"
          style={{ minHeight: 'calc(100svh - 11.5rem)' }}
        >
          <ResumeViewer
            pdfUrl="/resume.pdf"
            title="Mohammad Aneeq — Resume"
            className="h-full min-h-[calc(100svh-11.5rem)]"
          />
        </motion.div>
      </div>
    </div>
  );
};
