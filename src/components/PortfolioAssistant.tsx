import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import { PROJECTS, EXPERIENCES, EDUCATION, SKILLS } from '../constants';

const SYSTEM_INSTRUCTION = `
You are Mohammad Aneeq's AI Portfolio Assistant. Your goal is to help recruiters, clients, and engineers understand Mohammad's work, skills, and background.

Mohammad Aneeq is a Full Stack Developer specializing in Node.js, React, and MongoDB. He is currently pursuing a Diploma in Computer Engineering at Jamia Millia Islamia.

Here is the data from his portfolio:

PROJECTS:
${PROJECTS.map(p => `- ${p.title}: ${p.description}. Tech: ${p.tags.join(', ')}. Features: ${p.features.join(', ')}`).join('\n')}

EXPERIENCE:
${EXPERIENCES.map(e => `- ${e.role} at ${e.company} (${e.period}): ${e.description.join('. ')}`).join('\n')}

EDUCATION:
${EDUCATION.map(ed => `- ${ed.degree} from ${ed.institution} (${ed.period})`).join('\n')}

SKILLS:
- Languages: ${SKILLS.languages.join(', ')}
- Frameworks: ${SKILLS.frameworks.join(', ')}
- Tools: ${SKILLS.tools.join(', ')}

Guidelines:
1. Be professional, concise, and helpful.
2. If asked about a project, provide specific details about its features and tech stack.
3. If asked about his contact info, mention his email (aneeqmohd1233@gmail.com), GitHub (maneeq166), and LinkedIn.
4. Keep the tone sophisticated, technical, and slightly futuristic—matching his new high-tech portfolio aesthetic.
5. If you don't know the answer, politely say you can only provide information based on Mohammad's portfolio data.
`;

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export const PortfolioAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', text: "Systems online. I am Mohammad's digital twin. How can I assist your exploration of his engineering trajectory?" }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
          topP: 0.95,
          topK: 40,
        }
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "Sorry, I encountered an error. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 z-[100] w-16 h-16 bg-zinc-100 text-zinc-900 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:bg-white transition-all"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Sparkles className="w-6 h-6" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-28 right-8 z-[100] w-[90vw] md:w-[450px] h-[600px] bg-[#0A0A0A] border border-zinc-800 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-8 border-b border-zinc-800 flex items-center gap-4 bg-zinc-900/40">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl font-light text-zinc-100">Digital Twin</h3>
                <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-zinc-500">Neural Interface Active</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 border ${
                    msg.role === 'user' ? 'bg-zinc-900 border-zinc-800' : 'bg-blue-500/10 border-blue-500/20'
                  }`}>
                    {msg.role === 'user' ? <User className="w-5 h-5 text-zinc-400" /> : <Bot className="w-5 h-5 text-blue-400" />}
                  </div>
                  <div className={`max-w-[80%] p-6 rounded-[2rem] text-sm leading-relaxed font-light ${
                    msg.role === 'user' 
                      ? 'bg-zinc-900 text-zinc-300 rounded-tr-none border border-zinc-800' 
                      : 'bg-zinc-900/40 text-zinc-400 rounded-tl-none border border-zinc-800/50'
                  }`}>
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="bg-zinc-900/40 p-6 rounded-[2rem] rounded-tl-none border border-zinc-800/50">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-500/50" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-8 border-t border-zinc-800 bg-zinc-900/40">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Initiate query..."
                  className="w-full pl-6 pr-16 py-5 bg-zinc-900 border border-zinc-800 rounded-2xl text-sm text-zinc-100 focus:outline-none focus:border-blue-500/50 transition-all font-light"
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-3 p-3 bg-zinc-100 text-zinc-900 rounded-xl hover:bg-white disabled:opacity-50 transition-all group"
                >
                  <Send className="w-4 h-4 group-hover:rotate-[-45deg] transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
