import { ArrowRight, Check, CircleHelp, Image, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";
import Home from "./Home";
import Projects from "./Projects";

const siteBase = import.meta.env.BASE_URL;

function SiteDemo({ onClose }: { onClose: () => void }) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const steps = [
    {
      icon: Image,
      label: "Project gallery",
      title: "See the work in context.",
      text: "Explore previous work and read a little about the thinking behind each project.",
      action: "Show me projects",
      actionHref: `${siteBase}projects`,
    },
    {
      icon: MessageCircle,
      label: "The approach",
      title: "Clear thinking, carefully built.",
      text: "See how research, interface design, accessibility, and dependable frontend development come together in each project.",
      action: "Next step",
    },
    {
      icon: Check,
      label: "Start a conversation",
      title: "Make the next step easy.",
      text: "Share your goal and the challenge you want the website to solve. Your email app will open with a project brief ready to send.",
      action: "Explore the site",
      actionHref: "#contact",
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
      onClose();
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

function App() {
  if (window.location.pathname.replace(/\/+$/, "") === `${siteBase.replace(/\/+$/, "")}/projects`) return <Projects />;
  return <><Toaster position="top-right" richColors /><Home /></>;
}

export default App;
