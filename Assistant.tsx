import { Bot, MessageCircle, Send, Sparkles, X } from "lucide-react";
import { FormEvent, useState } from "react";

type ChatMessage = {
  id: number;
  role: "assistant" | "user";
  text: string;
  action?: { label: string; href: string };
};

const quickPrompts = ["What can you build?", "Show me recent projects", "How do we start?"];

function getReply(input: string): ChatMessage {
  const query = input.toLowerCase();
  if (query.includes("project") || query.includes("work") || query.includes("portfolio")) {
    return { id: Date.now() + Math.random(), role: "assistant", text: "I can show you the project archive, including screenshots, short descriptions, and customer comments.", action: { label: "Open projects", href: "/projects" } };
  }
  if (query.includes("service") || query.includes("build") || query.includes("offer") || query.includes("website")) {
    return { id: Date.now() + Math.random(), role: "assistant", text: "Ktony Sites designs and builds responsive business websites, product interfaces, and clear digital systems. The work combines content structure, visual direction, frontend development, accessibility, and security-minded details." };
  }
  if (query.includes("price") || query.includes("cost") || query.includes("budget")) {
    return { id: Date.now() + Math.random(), role: "assistant", text: "Every project is shaped around its goals, content, and complexity. The best next step is to share what you are building, who it is for, and what the current website needs to improve.", action: { label: "Share a brief", href: "#contact" } };
  }
  if (query.includes("process") || query.includes("start") || query.includes("begin")) {
    return { id: Date.now() + Math.random(), role: "assistant", text: "We start by clarifying the opportunity, shape the experience around it, and then build a responsive, accessible site ready for launch.", action: { label: "See the approach", href: "#approach" } };
  }
  if (query.includes("contact") || query.includes("talk") || query.includes("email") || query.includes("hire")) {
    return { id: Date.now() + Math.random(), role: "assistant", text: "You can send Ktony Sites a project brief from the contact section. Include your goal, current challenge, and the kind of clients you want to reach.", action: { label: "Start a project", href: "#contact" } };
  }
  return { id: Date.now() + Math.random(), role: "assistant", text: "I can help with services, recent projects, pricing guidance, the process, or starting a project. Try one of the prompts below." };
}

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: 1, role: "assistant", text: "Hi. I can help you find the right part of Ktony Sites." },
  ]);

  function sendMessage(text = input) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((current) => [...current, { id: Date.now() + Math.random(), role: "user", text: trimmed }, getReply(trimmed)]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage();
  }

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {open && (
        <section className="assistant-panel w-[min(380px,calc(100vw-2rem))] overflow-hidden border border-[#16212b]/15 bg-[#f7f8f5] text-[#16212b] shadow-[0_18px_60px_rgba(22,33,43,0.22)]" aria-label="Ktony Sites AI assistant">
          <div className="flex items-center justify-between bg-[#16212b] px-5 py-4 text-[#f7f8f5]">
            <div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center bg-[#c6d45a] text-[#16212b]"><Bot size={18} /></span><div><p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#c6d45a]">Ktony Sites / assistant</p><p className="mt-1 text-sm font-medium">Here to help you find your way</p></div></div>
            <button type="button" className="flex size-8 items-center justify-center text-[#f7f8f5]/60 hover:text-[#f7f8f5]" aria-label="Close assistant" onClick={() => setOpen(false)}><X size={16} /></button>
          </div>
          <div className="assistant-messages max-h-72 space-y-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message) => <div key={message.id} className={message.role === "user" ? "ml-8" : "mr-5"}><div className={message.role === "user" ? "bg-[#16212b] px-3 py-2.5 text-sm leading-5 text-[#f7f8f5]" : "border border-[#16212b]/10 bg-white px-3 py-2.5 text-sm leading-5 text-[#16212b]/75"}>{message.text}</div>{message.action && <a className="mt-2 inline-flex items-center gap-1 font-mono text-[9px] uppercase tracking-[0.1em] text-[#5f7480] hover:text-[#16212b]" href={message.action.href}>{message.action.label} <Sparkles size={12} /></a>}</div>)}
          </div>
          {messages.length === 1 && <div className="flex flex-wrap gap-2 px-4 pb-3">{quickPrompts.map((prompt) => <button key={prompt} type="button" className="border border-[#16212b]/15 px-2.5 py-2 text-left font-mono text-[9px] uppercase tracking-[0.05em] text-[#5f7480] hover:border-[#16212b]/40 hover:text-[#16212b]" onClick={() => sendMessage(prompt)}>{prompt}</button>)}</div>}
          <form className="flex gap-2 border-t border-[#16212b]/10 p-3" onSubmit={handleSubmit}><input value={input} onChange={(event) => setInput(event.target.value)} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-[#16212b]/40" placeholder="Ask about the site..." aria-label="Ask the assistant" /><button type="submit" className="flex size-9 shrink-0 items-center justify-center bg-[#c6d45a] text-[#16212b]" aria-label="Send message"><Send size={15} /></button></form>
        </section>
      )}
      <button type="button" className="flex size-12 items-center justify-center border border-[#f7f8f5]/70 bg-[#16212b] text-[#c6d45a] shadow-[0_8px_28px_rgba(22,33,43,0.22)] transition-transform hover:-translate-y-1" aria-label={open ? "Close AI assistant" : "Open AI assistant"} title="Ask Ktony Sites" onClick={() => setOpen((current) => !current)}>{open ? <X size={19} /> : <MessageCircle size={19} />}</button>
    </div>
  );
}
