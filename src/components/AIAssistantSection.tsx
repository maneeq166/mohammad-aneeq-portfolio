import React, { memo, useState, useCallback, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, RotateCcw } from 'lucide-react';
import { FEATURED_QA_PAIRS } from '../data/qa';

type Message = { role: 'user' | 'assistant'; content: string };

const PROMPT_LABELS: Record<string, string> = {
  'Tell me about yourself.': 'About me',
  'What are you currently working on?': 'Current work',
  'Which project are you most proud of?': 'Top project',
  'Why are you interested in AI Engineering?': 'AI interest',
  'Are you available for freelance or contract work?': 'Freelance',
  'Why should someone hire you?': 'Why hire me',
  "What's your tech stack?": 'Tech stack',
  'What are your career goals?': 'Career goals',
  'How can I contact you?': 'Contact me',
};

function formatMessage(text: string): React.ReactNode {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return parts.map((part, i) => {
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      const isExternal = href.startsWith('http');

      return (
        <a
          key={i}
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          className="font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-2 transition-colors hover:text-blue-300"
        >
          {label}
        </a>
      );
    }

    return <span key={i}>{part}</span>;
  });
}

const TypingIndicator = () => (
  <div className="flex items-center gap-1 px-4 py-3">
    {[0, 1, 2].map((i) => (
      <motion.span
        key={i}
        className="h-1.5 w-1.5 rounded-full bg-zinc-500"
        animate={{ opacity: [0.35, 1, 0.35], y: [0, -3, 0] }}
        transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
      />
    ))}
  </div>
);

export const AIAssistantSection = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    requestAnimationFrame(() => {
      scrollRef.current?.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setIsTyping(false);
    }
  }, [isOpen]);

  const handlePrompt = useCallback(
    (question: string, answer: string) => {
      if (isTyping) return;

      setMessages((prev) => [...prev, { role: 'user', content: question }]);
      setIsTyping(true);

      const delay = 500 + Math.random() * 400;
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
      }, delay);
    },
    [isTyping]
  );

  const handleReset = () => {
    setMessages([]);
    setIsTyping(false);
  };

  const hasConversation = messages.length > 0;

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-[100] flex h-12 items-center gap-2.5 rounded-full border border-zinc-800/80 bg-zinc-950/90 px-4 text-zinc-300 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl transition-colors hover:border-zinc-700 hover:text-zinc-100 sm:bottom-8 sm:right-8 sm:h-auto sm:px-5 sm:py-3"
            aria-label="Open portfolio assistant"
          >
            <MessageCircle className="h-4 w-4 text-blue-400" />
            <span className="hidden text-[10px] font-mono uppercase tracking-[0.2em] sm:inline">
              Ask me
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ type: 'spring', damping: 28, stiffness: 320 }}
            className="fixed bottom-6 right-6 z-[100] flex w-[calc(100vw-3rem)] max-w-[400px] flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#050505] shadow-[0_24px_80px_-20px_rgba(0,0,0,0.85)] sm:bottom-8 sm:right-8"
            style={{ maxHeight: 'min(560px, calc(100vh - 6rem))' }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

            {/* Header */}
            <div className="flex items-start justify-between gap-3 border-b border-zinc-800/60 px-4 py-3.5 sm:px-5">
              <div className="min-w-0">
                <h2 className="font-instrument-serif text-lg leading-tight text-zinc-100 sm:text-xl">
                  Portfolio Assistant
                </h2>
                <p className="mt-0.5 text-[10px] font-mono uppercase tracking-[0.18em] text-zinc-600">
                  Answers about my work
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {hasConversation && (
                  <button
                    type="button"
                    onClick={handleReset}
                    className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-300"
                    aria-label="Clear conversation"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full text-zinc-500 transition-colors hover:bg-zinc-900 hover:text-zinc-100"
                  aria-label="Close assistant"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-3 overflow-y-auto px-4 py-4 sm:px-5"
            >
              {!hasConversation && !isTyping && (
                <div className="rounded-xl border border-zinc-800/50 bg-zinc-900/30 px-4 py-3.5">
                  <p className="text-sm font-light leading-relaxed text-zinc-400">
                    Hi — I can answer questions about Mohammad&apos;s experience,
                    projects, stack, and career goals. Pick a topic below to get
                    started.
                  </p>
                </div>
              )}

              <AnimatePresence initial={false}>
                {messages.map((msg, i) => (
                  <motion.div
                    key={`${msg.role}-${i}-${msg.content.slice(0, 24)}`}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                        msg.role === 'user'
                          ? 'rounded-tr-md border border-blue-500/20 bg-blue-500/10 text-zinc-200'
                          : 'rounded-tl-md border border-zinc-800/70 bg-zinc-900/60 font-light text-zinc-300'
                      }`}
                    >
                      {msg.role === 'assistant'
                        ? formatMessage(msg.content)
                        : msg.content}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-tl-md border border-zinc-800/70 bg-zinc-900/60">
                    <TypingIndicator />
                  </div>
                </motion.div>
              )}
            </div>

            {/* Suggested prompts */}
            <div className="border-t border-zinc-800/60 px-4 py-3 sm:px-5">
              <p className="mb-2 text-[9px] font-mono uppercase tracking-[0.2em] text-zinc-600">
                Suggested
              </p>
              <div className="flex flex-wrap gap-1.5">
                {FEATURED_QA_PAIRS.map((qa) => (
                  <button
                    key={qa.question}
                    type="button"
                    disabled={isTyping}
                    onClick={() => handlePrompt(qa.question, qa.answer)}
                    className="rounded-full border border-zinc-800/70 bg-zinc-900/40 px-3 py-1.5 text-[11px] text-zinc-400 transition-colors hover:border-zinc-700 hover:bg-zinc-900 hover:text-zinc-200 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    {PROMPT_LABELS[qa.question] ?? qa.question}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
