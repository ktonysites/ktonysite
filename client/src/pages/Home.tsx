/*
 * Signal / Surface: neo-editorial portfolio composition for Tony Ken.
 * Use asymmetry, technical labels, signal-lime highlights, and short physical interactions.
 */
import { useEffect, useMemo, useState, type FormEvent } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Brackets,
  Check,
  Code2,
  ExternalLink,
  Fingerprint,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  MousePointer2,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Terminal,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/_core/hooks/useAuth";

const heroImage = "manus-storage/tony-ken-hero-systems_4497caad.jpg";
const markImage = "manus-storage/tony-ken-mark_73945108.png";
const projectImages = {
  network: "manus-storage/tony-ken-network-v2_525cd75f.jpg",
  interface: "manus-storage/tony-ken-interface-v2_ba1fe302.jpg",
  security: "manus-storage/tony-ken-security-v2_39cf273f.jpg",
};

const navItems = [
  { label: "Services", href: "#profile", id: "profile" },
  { label: "Work", href: "#work", id: "work" },
  { label: "Approach", href: "#approach", id: "approach" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const capabilities = [
  {
    index: "01",
    icon: Code2,
    title: "Conversion-ready builds",
    description: "Responsive websites with clear journeys, strong calls to action, and frontend craft that keeps the experience fast and dependable.",
    tags: ["React", "JavaScript", "Launch-ready"],
  },
  {
    index: "02",
    icon: Layers3,
    title: "Distinctive design systems",
    description: "A visual direction that helps the right clients recognize your value quickly and remember you after the first visit.",
    tags: ["UX systems", "Art direction", "Motion"],
  },
  {
    index: "03",
    icon: ShieldCheck,
    title: "Trust built in",
    description: "Security-aware thinking, accessible structure, and clear communication for businesses that need their website to feel credible.",
    tags: ["CCNA", "Cybersecurity", "Accessibility"],
  },
];

const projects = [
  {
    index: "A / 01",
    category: "Digital presence / clarity",
    title: "Route / Signal",
    description: "A capability-led website direction that makes a technical offer easier to understand, trust, and act on.",
    image: projectImages.network,
    imageAlt: "Abstract network routing lines with a highlighted signal path",
    accent: "lime",
    services: ["Positioning", "Information design", "Responsive UI"],
    result: "A clearer path from first visit to qualified conversation.",
  },
  {
    index: "B / 02",
    category: "Product website / conversion",
    title: "Fold / Form",
    description: "A sharper interface system for a digital product that needs a stronger point of view and a calmer path to action.",
    image: projectImages.interface,
    imageAlt: "Editorial abstract interface composition with black card and lime marker",
    accent: "blue",
    services: ["Visual direction", "UX systems", "Interaction design"],
    result: "A flexible visual language that supports growth without losing character.",
  },
  {
    index: "C / 03",
    category: "Trust / security communication",
    title: "Trust / Layer",
    description: "A human-first communication layer for businesses that need to explain expertise, readiness, and responsibility clearly.",
    image: projectImages.security,
    imageAlt: "Abstract threat-model diagram on tactile paper with a lime marker",
    accent: "coral",
    services: ["Content structure", "Security UX", "Narrative systems"],
    result: "Technical confidence made easier for prospective clients to understand.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Clarify the opportunity",
    text: "We define what the website needs to achieve, who it needs to persuade, and where the current experience is losing momentum.",
  },
  {
    number: "02",
    title: "Shape the experience",
    text: "I turn the strategy into a clear visual system, content structure, and responsive interface that gives every important message a job.",
  },
  {
    number: "03",
    title: "Build for launch",
    text: "The final pass brings the details together: accessible states, responsive behavior, performance-minded frontend code, and a confident handoff.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  // The useAuth hook provides authentication state.
  // To implement login/logout, call logout(), or start login from an event
  // handler: onClick={() => startLogin()} (imported from "@/const"). Never call
  // startLogin() during render (no href={startLogin()}) — it mints a one-time
  // nonce cookie and must run only at the moment of navigation.
  let { user, loading, error, isAuthenticated, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");
  const [scrolled, setScrolled] = useState(false);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0 });

  const sectionIds = useMemo(() => navItems.map((item) => item.id), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (!element) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(element);
      observers.push(observer);
    });
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      }),
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    document.querySelectorAll(".reveal-section").forEach((section) => revealObserver.observe(section));
    return () => {
      observers.forEach((observer) => observer.disconnect());
      revealObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionIds]);

  useEffect(() => {
    if (!contactOpen && !selectedProject) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setContactOpen(false);
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [contactOpen, selectedProject]);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const brief = String(formData.get("brief") ?? "").trim();
    const subject = `Website enquiry from ${name || "a prospective client"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Project brief:",
      brief,
    ].join("\\n");
    window.location.href = `mailto:ktony7854@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    toast.success("Your email app is ready with the project brief.");
  }

  function openContact() {
    setContactOpen(true);
    setSubmitted(false);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8f5] text-[#16212b]">
      <header className={`absolute inset-x-0 top-0 z-40 text-[#f7f8f5] transition-[background-color,box-shadow,backdrop-filter] duration-300 ${scrolled ? "bg-[#16212b]/95 shadow-[0_8px_24px_rgba(22,33,43,0.16)] backdrop-blur-md" : "bg-[#16212b]"}`}>
        <div className="container flex min-h-[76px] items-center justify-between border-b border-[#f7f8f5]/15">
          <a href="#top" aria-label="Tony Ken home" className="group flex items-center gap-3">
            <span className="stamp-mark relative flex size-9 items-center justify-center border border-[#f7f8f5]/40 bg-[#c6d45a] p-1 transition-transform duration-200 group-hover:rotate-6">
              <svg viewBox="0 0 40 40" aria-hidden="true" className="tk-emblem size-full">
                <path d="M5 5h30v30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 10v20M11 20h9l9-10M20 20l9 10" fill="none" stroke="currentColor" strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2.5" />
              </svg>
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em]">Tony Ken</span>
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="nav-link font-mono text-[10px] uppercase tracking-[0.14em]"
                data-active={activeSection === item.id}
              >
                {item.label}
              </a>
            ))}
            <button type="button" className="button-lime min-h-10 px-4" onClick={openContact}>
              Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.8} />
            </button>
          </nav>

          <button
            type="button"
            className="flex size-10 items-center justify-center border border-[#f7f8f5]/25 md:hidden"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {menuOpen && (
          <div className="container border-b border-[#f7f8f5]/15 bg-[#16212b] pb-5 md:hidden">
            <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="font-mono text-[11px] uppercase tracking-[0.15em] text-[#f7f8f5]/75 transition-colors hover:text-[#c6d45a]"
                  data-active={activeSection === item.id}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <button type="button" className="button-lime mt-2 w-full" onClick={() => { setMenuOpen(false); openContact(); }}>
                Let&apos;s talk <ArrowUpRight size={14} strokeWidth={1.8} />
              </button>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-[#16212b] pt-[76px] text-[#f7f8f5]">
          <div className="pointer-events-none absolute inset-0 opacity-[0.055] paper-grid" />
          <div className="container relative grid min-h-[calc(100vh-76px)] items-center gap-14 pb-24 pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:pb-20 lg:pt-20">
            <div className="relative z-10 max-w-3xl">
              <div className="reveal-up flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[#c6d45a]">
                <span className="relative flex size-2 items-center justify-center">
                  <span className="signal-pulse absolute size-2 rounded-full bg-[#c6d45a]/50" />
                  <span className="relative size-1.5 rounded-full bg-[#c6d45a]" />
                </span>
                Available for selected projects
              </div>
              <p className="reveal-up reveal-up-delay-1 mt-12 font-mono text-[10px] uppercase tracking-[0.18em] text-[#f7f8f5]/45">
                Nairobi, Kenya / web development / modern web design
              </p>
              <h1 className="display-title reveal-up reveal-up-delay-1 mt-5 max-w-[9ch]">
                Websites <span className="text-[#c6d45a]">that work harder.</span>
              </h1>
              <p className="reveal-up reveal-up-delay-2 mt-8 max-w-lg text-[17px] leading-8 text-[#f7f8f5]/70 sm:text-[19px]">
                I design and build modern websites for businesses that need more enquiries, clearer positioning, and a digital front door their customers can trust.
              </p>
              <div className="reveal-up reveal-up-delay-3 mt-10 flex flex-wrap items-center gap-3">
                <button type="button" className="button-lime" onClick={openContact}>
                  Plan your website <ArrowUpRight size={15} strokeWidth={1.8} />
                </button>
                <button type="button" className="button-ghost border-[#f7f8f5]/30 text-[#f7f8f5] hover:border-[#f7f8f5] hover:bg-[#f7f8f5]/5" onClick={() => scrollToId("work")}>
                  See selected work <ArrowDown size={15} strokeWidth={1.8} />
                </button>
              </div>
              <div className="reveal-up reveal-up-delay-3 mt-14 flex flex-wrap gap-x-9 gap-y-3 border-t border-[#f7f8f5]/15 pt-5 font-mono text-[10px] uppercase tracking-[0.12em] text-[#f7f8f5]/45">
                <span>Nairobi, Kenya / UTC+3</span>
                <span>Kenya + international clients</span>
                <span>Strategy / Design / Build</span>
              </div>
            </div>

            <div className="relative flex min-h-[420px] items-center justify-center lg:min-h-[620px]">
              <div className="absolute right-0 top-[10%] hidden h-px w-[47%] bg-[#c6d45a]/50 lg:block" />
              <div className="absolute bottom-[10%] left-0 hidden h-px w-[34%] bg-[#f7f8f5]/20 lg:block" />
              <div className="absolute left-[9%] top-[18%] hidden h-24 w-24 border border-[#f7f8f5]/20 lg:block" />
              <div className="absolute bottom-[12%] right-[8%] hidden h-16 w-16 border-r border-b border-[#c6d45a]/65 lg:block" />
              <div
                className="signal-corner hero-visual hero-parallax relative aspect-[3/2] w-full max-w-[680px] overflow-hidden border border-[#f7f8f5]/30 bg-[#5f7480]/20 p-3 shadow-[24px_24px_0_rgba(198,212,90,0.14)]"
                style={{ transform: `perspective(1200px) rotateX(${heroTilt.y}deg) rotateY(${heroTilt.x}deg)` }}
                onMouseMove={(event) => {
                  const rect = event.currentTarget.getBoundingClientRect();
                  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
                  const y = ((event.clientY - rect.top) / rect.height - 0.5) * -3;
                  setHeroTilt({ x, y });
                }}
                onMouseLeave={() => setHeroTilt({ x: 0, y: 0 })}
              >
                <img src={heroImage} alt="Abstract systems object made from glass, metal, and signal lines" className="h-full w-full object-cover" />
                <div className="absolute inset-3 bg-gradient-to-r from-[#16212b]/20 via-transparent to-transparent" />
                <div className="absolute left-7 top-7 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-[#f7f8f5]/75">
                  <ScanLine size={13} className="text-[#c6d45a]" />
                  Signal / 001
                </div>
                <div className="absolute bottom-6 right-6 max-w-[180px] border-l border-[#c6d45a] pl-3 font-mono text-[9px] uppercase leading-5 tracking-[0.12em] text-[#f7f8f5]/75">
                  Map the complex.<br />Make it feel simple.
                </div>
              </div>
              <div className="absolute bottom-4 left-0 hidden items-center gap-3 font-mono text-[9px] uppercase tracking-[0.14em] text-[#f7f8f5]/40 sm:flex lg:left-[8%]">
                <MousePointer2 size={14} /> Move over the system
              </div>
            </div>
          </div>
          <div className="container relative flex items-center justify-between border-t border-[#f7f8f5]/15 py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-[#f7f8f5]/45">
            <span>TK / 2026</span>
            <span className="hidden sm:block">Nairobi / East Africa / Beyond</span>
            <span>01—∞</span>
          </div>
        </section>

        <section id="profile" className="reveal-section paper-noise relative scroll-mt-8 overflow-hidden bg-[#f7f8f5] py-24 sm:py-32">
          <div className="system-rail pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—01</span><i /></div>
          <div className="pointer-events-none absolute right-[6%] top-[18%] hidden opacity-[0.11] lg:block">
            <img src={markImage} alt="" className="size-44 grayscale" />
            <span className="mt-2 block font-mono text-[9px] uppercase tracking-[0.16em] text-[#5f7480]">TK / system stamp</span>
          </div>
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <div>
                <p className="rule-label eyebrow text-[#5f7480]">01 / Services</p>
                <div className="mt-12 hidden text-[120px] font-bold leading-none tracking-[-0.12em] text-[#16212b]/[0.07] lg:block">TK</div>
              </div>
              <div className="max-w-4xl">
                <p className="eyebrow text-[#6f716d]">What your website should do</p>
                <h2 className="section-title mt-5 max-w-4xl">Your website should do more than look good.</h2>
                <div className="mt-10 grid gap-8 text-[17px] leading-8 text-[#5f7480] md:grid-cols-[1fr_0.8fr] md:gap-14">
                  <p>
                    It should help the right people understand your offer, trust your team, and take the next step. I combine clear content structure, modern visual direction, and robust frontend development to make that journey feel effortless.
                  </p>
                  <p className="text-[#16212b]/65">
                    You get a technical partner based in Nairobi who can think beyond the homepage — from responsive behavior and accessibility to the security-minded details that make a digital presence feel dependable.
                  </p>
                </div>
                <div className="mt-12 flex flex-wrap gap-2">
                  {[
                    "Clear by default",
                    "Responsive by nature",
                    "Secure in spirit",
                    "Distinct on purpose",
                  ].map((item) => (
                    <span key={item} className="border border-[#16212b]/20 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#16212b]/65">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-24 grid border-y border-[#16212b]/20 md:grid-cols-3">
              {capabilities.map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <article key={capability.index} className={`group relative py-8 md:px-7 md:py-10 ${index < capabilities.length - 1 ? "border-b border-[#16212b]/20 md:border-b-0 md:border-r" : ""}`}>
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-[10px] tracking-[0.15em] text-[#6f716d]">{capability.index}</span>
                      <Icon size={22} strokeWidth={1.4} className="text-[#5f7480] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6" />
                    </div>
                    <h3 className="mt-16 max-w-[10ch] text-2xl font-semibold leading-[1.05] tracking-[-0.04em]">{capability.title}</h3>
                    <p className="mt-5 max-w-xs text-sm leading-6 text-[#16212b]/60">{capability.description}</p>
                    <div className="mt-8 flex flex-wrap gap-2">
                      {capability.tags.map((tag) => <span key={tag} className="font-mono text-[9px] uppercase tracking-[0.09em] text-[#5f7480]">/{tag}</span>)}
                    </div>
                  </article>
                );
              })}
            </div>
            <div className="mt-10 flex flex-col gap-6 border-b border-[#16212b]/20 pb-8 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3"><span className="kenya-code" aria-hidden="true"><i /><i /><i /></span><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5f7480]">Nairobi-based / Kenya + East Africa / remote-ready</p></div>
              <p className="max-w-md text-sm leading-6 text-[#16212b]/60">Built for local businesses, regional teams, and ambitious founders who need a digital presence that can travel.</p>
            </div>
          </div>
        </section>

        <section className="reveal-section relative overflow-hidden bg-[#5f7480] py-20 text-[#f7f8f5] sm:py-28">
          <div className="system-rail system-rail-light pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—02</span><i /></div>
          <div className="pointer-events-none absolute -right-12 top-10 size-64 rounded-full border border-[#f7f8f5]/15 sm:size-96" />
          <div className="pointer-events-none absolute -right-4 top-20 size-44 rounded-full border border-[#c6d45a]/35 sm:size-72" />
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.55fr] lg:items-end">
              <div>
                <p className="rule-label eyebrow text-[#c6d45a]">Working principle</p>
                <p className="mt-10 max-w-sm font-mono text-[11px] uppercase leading-6 tracking-[0.13em] text-[#f7f8f5]/55">The interface is not decoration. It is the visible edge of the system.</p>
              </div>
              <p className="max-w-4xl text-[clamp(2rem,5vw,5.6rem)] font-semibold leading-[0.98] tracking-[-0.065em]">Make the complex feel <span className="text-[#c6d45a]">quietly obvious.</span></p>
            </div>
            <div className="mt-20 flex flex-wrap items-center justify-between gap-8 border-t border-[#f7f8f5]/20 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-[#f7f8f5]/55">
              <span>Design / Code / Context</span>
              <span className="flex items-center gap-2 text-[#c6d45a]"><Sparkles size={14} /> Built for attention, not interruption</span>
            </div>
          </div>
        </section>

        <section id="work" className="reveal-section relative scroll-mt-8 bg-[#e7eceb] py-24 sm:py-32">
          <div className="system-rail pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—03</span><i /></div>
          <div className="container">
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="rule-label eyebrow text-[#5f7480]">02 / Selected builds</p>
                <h2 className="section-title mt-5 max-w-2xl">Show the work. Make the next step obvious.</h2>
              </div>
              <p className="max-w-xs text-sm leading-6 text-[#16212b]/60 md:pb-2">Capability-led examples of the kind of digital presence, product experience, and trust layer I can build for your business.</p>
            </div>

            <div className="mt-16 grid gap-4 lg:grid-cols-12">
              {projects.map((project, index) => (
                <article key={project.index} className={`project-card group relative cursor-pointer border-b border-[#16212b]/20 pb-5 ${index === 0 ? "lg:col-span-7" : index === 1 ? "lg:col-span-5 lg:mt-20" : "lg:col-span-6 lg:ml-[8.333%]"}`} onClick={() => setSelectedProject(project)} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") setSelectedProject(project); }} role="button" tabIndex={0}>
                  <div className="signal-corner relative aspect-[1.35/1] overflow-hidden bg-[#dbe3e4]">
                    <img src={project.image} alt={project.imageAlt} className="project-image h-full w-full object-cover" />
                    <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-200 group-hover:opacity-100">
                      <span className="absolute left-[21%] top-[33%] size-2 rounded-full bg-[#c6d45a] shadow-[0_0_0_4px_rgba(198,212,90,0.22)]" />
                      <span className="absolute bottom-[24%] right-[28%] size-1.5 rounded-full bg-[#c6d45a]" />
                      <span className="absolute left-[21%] top-[33%] h-px w-[45%] origin-left rotate-[18deg] bg-[#c6d45a]/80" />
                      <span className="absolute bottom-[22%] left-[18%] font-mono text-[8px] uppercase tracking-[0.13em] text-[#16212b]/70 group-hover:text-[#f7f8f5]/80">node / 0{index + 1}</span>
                      <span className="absolute right-5 top-1/2 h-px w-14 bg-[#16212b]/35 group-hover:bg-[#c6d45a]/80" />
                    </div>
                    <div className="absolute left-5 top-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.15em] text-[#16212b]/65 transition-colors group-hover:text-[#f7f8f5]/80">
                      <span className={`size-2 rounded-full ${project.accent === "lime" ? "bg-[#c6d45a]" : project.accent === "blue" ? "bg-[#5f7480]" : "bg-[#cb786a]"}`} />
                      {project.category}
                    </div>
                    <div className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-[#f7f8f5]/90 text-[#16212b] transition-transform duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={17} strokeWidth={1.8} />
                    </div>
                  </div>
                  <div className="flex items-start justify-between gap-8 px-2 pb-2 pt-6">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] opacity-50">{project.index}</p>
                      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">{project.title}</h3>
                      <p className="mt-3 max-w-md text-sm leading-6 opacity-65">{project.description}</p>
                    </div>
                    <span className="hidden shrink-0 font-mono text-[9px] uppercase tracking-[0.1em] opacity-50 sm:block">View →</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="credentials" className="reveal-section relative scroll-mt-8 bg-[#16212b] py-24 text-[#f7f8f5] sm:py-32">
          <div className="system-rail system-rail-light pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—04</span><i /></div>
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              <div>
                <p className="rule-label eyebrow text-[#c6d45a]">03 / Why work with me</p>
                <h2 className="section-title mt-5 max-w-md">A developer who thinks beyond the homepage.</h2>
                <p className="mt-7 max-w-sm text-sm leading-7 text-[#f7f8f5]/55">You get design taste, frontend discipline, and a security-minded perspective in one build partner — useful when your website needs to earn trust before the first conversation.</p>
              </div>
              <div className="divide-y divide-[#f7f8f5]/15 border-y border-[#f7f8f5]/15">
                <div className="group grid gap-8 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
                  <div className="flex items-center gap-4"><Network size={22} strokeWidth={1.4} className="text-[#c6d45a]" /><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f7f8f5]/45">CCNA foundation / 01</span></div>
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-medium tracking-[-0.04em]">Cisco Certified Network Associate</h3><p className="mt-2 text-sm text-[#f7f8f5]/50">CCNA foundation for network-aware digital work.</p></div><Check size={18} className="mt-1 shrink-0 text-[#c6d45a]" /></div>
                </div>
                <div className="group grid gap-8 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
                  <div className="flex items-center gap-4"><Fingerprint size={22} strokeWidth={1.4} className="text-[#c6d45a]" /><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f7f8f5]/45">Cybersecurity / 02</span></div>
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-medium tracking-[-0.04em]">Cybersecurity certified</h3><p className="mt-2 text-sm text-[#f7f8f5]/50">Security-minded approach to systems, risk, and trust.</p></div><Check size={18} className="mt-1 shrink-0 text-[#c6d45a]" /></div>
                </div>
                <div className="group grid gap-8 py-8 sm:grid-cols-[0.7fr_1.3fr] sm:items-center">
                  <div className="flex items-center gap-4"><Terminal size={22} strokeWidth={1.4} className="text-[#c6d45a]" /><span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#f7f8f5]/45">Web practice / 03</span></div>
                  <div className="flex items-start justify-between gap-4"><div><h3 className="text-2xl font-medium tracking-[-0.04em]">Modern web designer</h3><p className="mt-2 text-sm text-[#f7f8f5]/50">Websites that pair sharp visual language with durable frontend craft.</p></div><ArrowUpRight size={19} className="mt-1 shrink-0 text-[#c6d45a] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="approach" className="reveal-section paper-noise relative scroll-mt-8 bg-[#f7f8f5] py-24 sm:py-32">
          <div className="system-rail pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—05</span><i /></div>
          <div className="container">
            <div className="grid gap-14 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
              <div><p className="rule-label eyebrow text-[#5f7480]">04 / How we work</p></div>
              <div>
                <h2 className="section-title max-w-3xl">A clear path from first conversation to launch.</h2>
                <div className="mt-14 divide-y border-y border-[#16212b]/20">
                  {processSteps.map((step) => (
                    <div key={step.number} className="grid gap-5 py-8 sm:grid-cols-[80px_1fr] sm:gap-10">
                      <span className="font-mono text-[11px] text-[#5f7480]">{step.number}</span>
                      <div><h3 className="text-2xl font-semibold tracking-[-0.04em]">{step.title}</h3><p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#16212b]/60">{step.text}</p></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="reveal-section relative scroll-mt-8 overflow-hidden border-t border-[#16212b]/20 bg-[#f7f8f5] py-24 sm:py-32">
          <div className="system-rail pointer-events-none absolute left-0 top-1/2 hidden -translate-y-1/2 lg:flex"><span>TK—06</span><i /></div>
          <div className="pointer-events-none absolute -right-24 top-20 size-72 rounded-full border border-[#16212b]/10" />
          <div className="pointer-events-none absolute right-12 top-32 size-3 rounded-full bg-[#c6d45a] shadow-[0_0_0_8px_rgba(198,212,90,0.24)]" />
          <div className="container relative">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-end">
              <div>
                <div className="flex items-center gap-3"><p className="rule-label eyebrow text-[#16212b]/65">05 / Start a project</p><span className="bg-[#c6d45a] px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em]">Nairobi / remote-ready</span></div>
                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,9vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]">Ready for a website that brings the right work closer?</h2>
              </div>
              <div className="lg:pb-2">
                <p className="max-w-sm text-[17px] leading-7 text-[#16212b]/70">Start with the business goal, the current website problem, and the kind of clients you want to reach. I&apos;ll help shape the next move.</p>
                <button type="button" className="button-ink mt-8" onClick={openContact}>Plan my website <ArrowRight size={15} strokeWidth={1.8} /></button>
              </div>
            </div>
            <div className="mt-24 flex flex-col justify-between gap-8 border-t border-[#16212b]/25 pt-5 font-mono text-[10px] uppercase tracking-[0.14em] sm:flex-row sm:items-center">
              <a href="mailto:ktony7854@gmail.com" className="flex items-center gap-3 transition-opacity hover:opacity-60"><Mail size={15} /> ktony7854@gmail.com</a>
              <div className="flex items-center gap-5"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="Tony Ken on GitHub" className="transition-opacity hover:opacity-60"><Github size={16} /></a><a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Tony Ken on LinkedIn" className="transition-opacity hover:opacity-60"><Linkedin size={16} /></a><span className="text-[#16212b]/55">© Tony Ken / 2026</span></div>
            </div>
          </div>
        </section>
      </main>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#16212b]/75 p-3 backdrop-blur-sm sm:items-center sm:p-8" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title" onClick={() => setSelectedProject(null)}>
          <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto bg-[#f7f8f5] p-4 text-[#16212b] shadow-2xl sm:p-6" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-6 top-6 z-10 flex size-10 items-center justify-center border border-[#16212b]/25 bg-[#f7f8f5]/90" aria-label="Close project details" onClick={() => setSelectedProject(null)}><X size={17} /></button>
            <div className="signal-corner relative aspect-[1.7/1] overflow-hidden bg-[#dbe3e4]"><img src={selectedProject.image} alt={selectedProject.imageAlt} className="h-full w-full object-cover" /></div>
            <div className="grid gap-8 px-1 pb-3 pt-8 sm:grid-cols-[0.9fr_1.1fr]">
              <div><p className="eyebrow text-[#5f7480]">{selectedProject.index} / {selectedProject.category}</p><h2 id="project-dialog-title" className="mt-4 text-4xl font-semibold tracking-[-0.06em]">{selectedProject.title}</h2></div>
              <div><p className="text-[15px] leading-7 text-[#16212b]/65">{selectedProject.description}</p><p className="mt-6 border-l-2 border-[#c6d45a] pl-4 text-sm leading-6">{selectedProject.result}</p><div className="mt-7 flex flex-wrap gap-2">{selectedProject.services.map((service) => <span key={service} className="border border-[#16212b]/20 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.1em] text-[#5f7480]">{service}</span>)}</div></div>
            </div>
          </div>
        </div>
      )}

      {contactOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#16212b]/75 p-3 backdrop-blur-sm sm:items-center sm:p-8" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title" onClick={() => setContactOpen(false)}>
          <div className="relative w-full max-w-2xl bg-[#f7f8f5] p-6 text-[#16212b] shadow-2xl sm:p-10" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="absolute right-5 top-5 flex size-10 items-center justify-center border border-[#16212b]/25" aria-label="Close contact form" onClick={() => setContactOpen(false)}><X size={17} /></button>
            {!submitted ? (
              <form onSubmit={handleContactSubmit}>
                <p className="eyebrow text-[#5f7480]">Project brief / open channel</p>
                <h2 id="contact-dialog-title" className="mt-4 max-w-md text-4xl font-semibold tracking-[-0.06em]">Give the idea a little shape.</h2>
                <p className="mt-4 max-w-lg text-sm leading-6 text-[#16212b]/60">A few useful details are enough to start. I&apos;ll bring the structure.</p>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5f7480]">Your name<input required name="name" className="mt-2 block w-full border-b border-[#16212b]/30 bg-transparent px-0 py-3 text-base font-sans normal-case tracking-normal text-[#16212b] outline-none placeholder:text-[#16212b]/35 focus:border-[#5f7480]" placeholder="Tony / team / studio" /></label>
                  <label className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#5f7480]">Your email<input required type="email" name="email" className="mt-2 block w-full border-b border-[#16212b]/30 bg-transparent px-0 py-3 text-base font-sans normal-case tracking-normal text-[#16212b] outline-none placeholder:text-[#16212b]/35 focus:border-[#5f7480]" placeholder="you@yourdomain.com" /></label>
                </div>
                <label className="mt-6 block font-mono text-[10px] uppercase tracking-[0.12em] text-[#5f7480]">What are we making?<textarea required name="brief" rows={4} className="mt-2 block w-full resize-none border-b border-[#16212b]/30 bg-transparent px-0 py-3 text-base font-sans normal-case tracking-normal text-[#16212b] outline-none placeholder:text-[#16212b]/35 focus:border-[#5f7480]" placeholder="A new site, a sharper product, a system that needs to make sense…" /></label>
                <div className="mt-8 flex flex-wrap items-center justify-between gap-4"><span className="max-w-xs font-mono text-[9px] uppercase tracking-[0.1em] text-[#16212b]/45">Submitting opens your email app with the enquiry addressed to Tony.</span><button type="submit" className="button-ink">Send the brief <ArrowUpRight size={15} /></button></div>
              </form>
            ) : (
              <div className="py-8"><div className="flex size-12 items-center justify-center bg-[#c6d45a]"><Check size={22} /></div><h2 id="contact-dialog-title" className="mt-7 text-4xl font-semibold tracking-[-0.06em]">Signal received.</h2><p className="mt-4 max-w-md text-base leading-7 text-[#16212b]/65">Your email app should now have a ready-to-send enquiry addressed to ktony7854@gmail.com. If it did not open, email the brief directly from your inbox.</p><button type="button" className="button-ghost mt-8" onClick={() => setContactOpen(false)}>Close panel <X size={14} /></button></div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
