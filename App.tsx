import { ArrowRight, Check, CircleHelp, Image, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import Home from "./Home";
import Projects from "./Projects";

function SiteDemo({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const steps = [
    {
      icon: Image,
      label: "Project gallery",
      title: "See the work in context.",
      text: "Open the project archive to browse finished work, screenshots, and short explanations of what each build solved.",
      action: "Show me projects",
      actionHref: "/projects",
    },
    {
      icon: MessageCircle,
      label: "Project conversations",
      title: "Leave a thought on a project.",
      text: "Each project has a comment area, so customers can ask questions or share what they noticed about the work.",
      action: "Next feature",
    },
    {
      icon: Check,
      label: "Start a conversation",
      title: "Make the next step easy.",
      text: "When you are ready, use the contact form to send Ktony Sites a clear project brief directly from the site.",
      action: "Explore the site",
    },
  ];
  const currentStep = steps[step];
  const Icon = currentStep.icon;

  useEffect(() => {
    if (isPaused) return;
    const timer = window.setInterval(() => setStep((current) => (current + 1) % steps.length), 5200);
    return () => window.clearInterval(timer);
  }, [isPaused, steps.length]);

  function handleAction() {
    if (currentStep.actionHref) {
      window.location.href = currentStep.actionHref;
      return;
    }
    if (step < steps.length - 1) {
      setStep((current) => current + 1);
      return;
    }
    onClose();
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]" role="dialog" aria-modal="true" aria-labelledby="site-demo-title">
      <div className="pointer-events-auto absolute bottom-5 right-5 w-[min(360px,calc(100vw-2rem))] overflow-hidden border border-[#f7f8f5]/15 bg-[#16212b]/95 text-[#f7f8f5] shadow-[0_18px_60px_rgba(22,33,43,0.28)] backdrop-blur-xl" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} onFocus={() => setIsPaused(true)} onBlur={() => setIsPaused(false)}>
        <div className="flex items-center justify-between border-b border-[#f7f8f5]/10 px-5 py-3">
          <div className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-[#c6d45a]" /><span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#f7f8f5]/55">Ktony Sites / quick tour</span></div>
          <button type="button" className="flex size-7 items-center justify-center text-[#f7f8f5]/55 transition-colors hover:text-[#f7f8f5]" aria-label="Close site demo" onClick={onClose}><X size={15} /></button>
        </div>
        <div className="p-5">
          <div key={step} className="tour-slide flex items-start gap-3"><span className="flex size-9 shrink-0 items-center justify-center border border-[#c6d45a]/35 bg-[#c6d45a]/10 text-[#c6d45a]"><Icon size={17} /></span><div><p className="eyebrow text-[#c6d45a]">0{step + 1} / {currentStep.label}</p><h2 id="site-demo-title" className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.04em]">{currentStep.title}</h2></div></div>
          <p className="mt-4 text-sm leading-6 text-[#f7f8f5]/60">{currentStep.text}</p>
        </div>
        <div className="flex items-center justify-between gap-4 border-t border-[#f7f8f5]/10 px-5 py-4">
          <div className="flex gap-1.5" aria-label={`Demo step ${step + 1} of ${steps.length}`}>{steps.map((item, index) => <button key={item.label} type="button" aria-label={`Go to demo step ${index + 1}`} className={`h-1 transition-all ${index === step ? "w-6 bg-[#c6d45a]" : "w-1.5 bg-[#f7f8f5]/25"}`} onClick={() => setStep(index)} />)}</div>
          <button type="button" className="button-lime min-h-9 px-3 py-2 text-[9px]" onClick={handleAction}>{currentStep.action} <ArrowRight size={13} /></button>
        </div>
        <div className={`tour-progress h-0.5 bg-[#c6d45a] ${isPaused ? "tour-progress-paused" : ""}`} key={`${step}-${isPaused}`} />
      </div>
    </div>
  );
}

function LoadingScreen() {
  return (
    <div className="loading-screen" role="status" aria-live="polite">
      <div className="loading-mark"><span /><span /><span /></div>
      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#f7f8f5]/65">Preparing the experience</p>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [demoOpen, setDemoOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (loading || window.location.pathname === "/projects") return;
    const hasSeenDemo = window.localStorage.getItem("ktony-sites-demo-seen");
    if (!hasSeenDemo) setDemoOpen(true);
  }, [loading]);

  function closeDemo() {
    window.localStorage.setItem("ktony-sites-demo-seen", "true");
    setDemoOpen(false);
  }

  if (loading) return <LoadingScreen />;
  if (window.location.pathname === "/projects") return <Projects />;
  return <><Home /><button type="button" className="group fixed bottom-5 left-5 z-30 flex size-8 items-center justify-center border border-[#16212b]/15 bg-[#f7f8f5]/70 text-[#16212b]/35 opacity-45 shadow-sm backdrop-blur-sm transition-all hover:border-[#16212b]/40 hover:bg-[#f7f8f5] hover:text-[#16212b] hover:opacity-100 focus-visible:opacity-100" aria-label="Open site tour" title="Open site tour" onClick={() => setDemoOpen(true)}><CircleHelp size={15} strokeWidth={1.6} /></button>{demoOpen && <SiteDemo onClose={closeDemo} />}</>;
}

export default App;
