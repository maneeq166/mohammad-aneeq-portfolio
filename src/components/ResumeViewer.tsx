import { useState } from 'react';
import { motion } from 'motion/react';
import { Download, ExternalLink, FileText, AlertTriangle } from 'lucide-react';

interface ResumeViewerProps {
  pdfUrl: string;
  title?: string;
  className?: string;
}

export const ResumeViewer = ({
  pdfUrl,
  title = 'Resume',
  className = '',
}: ResumeViewerProps) => {
  const [loadError, setLoadError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const pdfSrc = `${pdfUrl}#view=Fit&toolbar=0&navpanes=0`;

  return (
    <div
      className={`group relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-zinc-800/50 bg-zinc-950/40 transition-colors duration-500 hover:border-zinc-700/60 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/25 to-transparent" />

      {/* Toolbar */}
      <div className="flex shrink-0 flex-col gap-3 border-b border-zinc-800/50 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-5">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-zinc-800/80 bg-zinc-900/60">
            <FileText className="h-4 w-4 text-blue-400" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium text-zinc-200">{title}</p>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-600">
              PDF · Page fit
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <motion.a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-9 flex-1 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/60 px-3.5 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-400 transition-colors hover:border-zinc-700 hover:text-zinc-100 sm:flex-none"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Open
          </motion.a>
          <motion.a
            href={pdfUrl}
            download
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex min-h-9 flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-b from-blue-500 to-blue-700 px-3.5 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-white ring-1 ring-white/20 ring-inset transition-colors hover:from-blue-400 hover:to-blue-600 sm:flex-none"
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </motion.a>
        </div>
      </div>

      {/* PDF Viewer — fills remaining height */}
      <div className="relative min-h-0 flex-1 bg-[#080808]">
        {!loaded && !loadError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-600">
                Loading document
              </span>
            </div>
          </div>
        )}

        {loadError ? (
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="flex max-w-sm flex-col items-center gap-4 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/10">
                <AlertTriangle className="h-5 w-5 text-amber-400" />
              </div>
              <p className="text-sm font-light leading-relaxed text-zinc-400">
                Preview isn&apos;t available in this browser. Open or download the PDF
                instead.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2">
                <motion.a
                  href={pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-300 transition-colors hover:border-zinc-700"
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                  Open PDF
                </motion.a>
                <motion.a
                  href={pdfUrl}
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-2.5 text-[10px] font-mono uppercase tracking-[0.18em] text-white transition-colors hover:bg-blue-400"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download
                </motion.a>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            src={pdfSrc}
            title={title}
            className={`absolute inset-0 h-full w-full border-0 ${loaded ? 'block' : 'hidden'}`}
            onLoad={() => setLoaded(true)}
            onError={() => setLoadError(true)}
          />
        )}
      </div>

      {/* Frame accents */}
      <div className="pointer-events-none absolute top-0 left-0 h-6 w-6 rounded-tl-2xl border-t border-l border-zinc-700/30" />
      <div className="pointer-events-none absolute top-0 right-0 h-6 w-6 rounded-tr-2xl border-t border-r border-zinc-700/30" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-6 w-6 rounded-bl-2xl border-b border-l border-zinc-700/30" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-6 w-6 rounded-br-2xl border-b border-r border-zinc-700/30" />
    </div>
  );
};
