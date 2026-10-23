import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, Copy, Check, HelpCircle, ArrowRight } from 'lucide-react';
import { ChatMessage, CareerPath, StudentProfile } from '../types';

interface AIChatAgentProps {
  studentProfile: StudentProfile | null;
  currentCareer: CareerPath | null;
  onSelectMilestonePrompt?: (prompt: string) => void;
}

const DEFAULT_MESSAGES: ChatMessage[] = [
  {
    id: 'msg-welcome',
    sender: 'agent',
    text: "Hello! I am **PathFinder**, your personal AI Career Guide Mentor. Whether you're wondering how to get your first internship without prior work experience, deciding between tech tracks, or polishing your resume, I'm here to give you practical, 100% free guidance. What's on your mind today?",
    timestamp: 'Just now',
    quickReplies: [
      'How do I get an internship with no experience?',
      'Explain the Google X-Y-Z resume bullet formula',
      'What beginner portfolio project should I build?',
      'How to answer "Tell me about yourself" in interviews'
    ]
  }
];

export const AIChatAgent: React.FC<AIChatAgentProps> = ({
  studentProfile,
  currentCareer,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const saved = localStorage.getItem('pathfinder_chat_history');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return DEFAULT_MESSAGES;
      }
    }
    return DEFAULT_MESSAGES;
  });

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    localStorage.setItem('pathfinder_chat_history', JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/gemini/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          studentProfile,
          currentCareer,
          history: messages.slice(-6),
        }),
      });

      if (!response.ok) {
        throw new Error('Network response failed');
      }

      const data = await response.json();
      const agentReply: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: data.reply || "I'm here to help. Could you clarify your question?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: data.suggestions || [
          'What are the best free resources for beginners?',
          'How do I balance coursework with career projects?'
        ]
      };

      setMessages((prev) => [...prev, agentReply]);
    } catch (err: any) {
      console.error('Chat error:', err);
      // Resilient fallback reply
      const fallbackReply: ChatMessage = {
        id: `agent-${Date.now()}`,
        sender: 'agent',
        text: `Here is practical advice for college students:
1. **Focus on proof-of-work:** Deploy 2 solid projects on free hosting (Vercel/Render) and link them on your resume.
2. **Network early:** Reach out to alumni on LinkedIn for 10-minute informational chats.
3. **Use free courses:** Master fundamentals through Harvard CS50, freeCodeCamp, and Kaggle Learn instead of paying for bootcamps.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        quickReplies: [
          'How do I structure my resume?',
          'What project should I build next?'
        ]
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleClearHistory = () => {
    setMessages(DEFAULT_MESSAGES);
    localStorage.removeItem('pathfinder_chat_history');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-[75vh] overflow-hidden">
        {/* Chat header */}
        <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-2xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm font-bold text-slate-900">PathFinder AI Career Mentor</h3>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.2 rounded border border-emerald-100">
                  Ready to Help
                </span>
              </div>
              <p className="text-xs text-slate-500">
                Personalized advice for {studentProfile?.name || 'College Student'} 
                {currentCareer ? ` · Focusing on ${currentCareer.title}` : ''}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleClearHistory}
            className="text-xs text-slate-400 hover:text-slate-600 px-2.5 py-1 rounded-md hover:bg-slate-200/50 transition-colors"
          >
            Clear Chat
          </button>
        </div>

        {/* Message scroll list */}
        <div className="flex-1 p-6 overflow-y-auto space-y-5 bg-slate-50/30">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex gap-3 max-w-[88%] ${msg.sender === 'user' ? 'ml-auto flex-row-reverse' : ''}`}
            >
              {/* Avatar */}
              <div
                className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center text-xs ${
                  msg.sender === 'user'
                    ? 'bg-slate-800 text-white'
                    : 'bg-indigo-600 text-white shadow-2xs'
                }`}
              >
                {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
              </div>

              {/* Message content bubble */}
              <div className="space-y-2">
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-indigo-600 text-white rounded-tr-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs shadow-2xs'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{msg.text}</div>

                  <div
                    className={`mt-2 flex items-center justify-between text-[10px] ${
                      msg.sender === 'user' ? 'text-indigo-200' : 'text-slate-400'
                    }`}
                  >
                    <span>{msg.timestamp}</span>
                    {msg.sender === 'agent' && (
                      <button
                        type="button"
                        onClick={() => handleCopy(msg.id, msg.text)}
                        className="hover:text-slate-700 flex items-center gap-1 transition-colors cursor-pointer"
                        title="Copy text"
                      >
                        {copiedId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

                {/* Quick reply suggestion buttons */}
                {msg.quickReplies && msg.quickReplies.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {msg.quickReplies.map((reply) => (
                      <button
                        type="button"
                        key={reply}
                        onClick={() => handleSend(reply)}
                        className="text-[11px] font-medium text-indigo-700 bg-indigo-50/90 hover:bg-indigo-100 px-2.5 py-1 rounded-lg border border-indigo-100 transition-colors cursor-pointer text-left"
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex gap-3 max-w-[80%]">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 text-white shrink-0 flex items-center justify-center">
                <Sparkles className="w-4 h-4 animate-spin" />
              </div>
              <div className="p-3.5 bg-white border border-slate-200 rounded-2xl rounded-tl-xs shadow-2xs text-xs text-slate-500 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-indigo-600 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1">AI Mentor thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input box */}
        <div className="p-4 border-t border-slate-200 bg-white">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask anything: e.g. How do I prepare for campus career fairs?"
              className="flex-1 px-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-xl focus:outline-hidden focus:ring-2 focus:ring-indigo-500 bg-white"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-40 text-white font-semibold rounded-xl text-xs sm:text-sm transition-all flex items-center gap-1.5 shadow-2xs active:scale-95 cursor-pointer shrink-0"
            >
              <span>Send</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span>Powered by Gemini 3.8 Flash & verified open-education databases</span>
            <span>100% Free · No paid tier required</span>
          </div>
        </div>
      </div>
    </div>
  );
};
