import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { projects } from "./projectData";

const siteBase = import.meta.env.BASE_URL;

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#16212b]">
      <header className="bg-[#16212b] text-[#f7f8f5]">
        <div className="container flex min-h-[76px] items-center justify-between border-b border-[#f7f8f5]/15">
          <a href={siteBase} aria-label="Ktony Sites home" className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="stamp-mark flex size-9 items-center justify-center border border-[#f7f8f5]/40 bg-[#c6d45a] text-[#16212b]">TK</span>
            Ktony Sites
          </a>
          <a href={siteBase} className="button-ghost border-[#f7f8f5]/30 text-[#f7f8f5] hover:border-[#f7f8f5] hover:bg-[#f7f8f5]/5"><ArrowLeft size={14} /> Back home</a>
        </div>
      </header>

      <main>
        <section className="paper-grid border-b border-[#16212b]/15 bg-[#e7eceb] py-20 sm:py-28">
          <div className="container">
            <p className="eyebrow text-[#5f7480]">Previous work / Portfolio</p>
            <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h1 className="section-title max-w-4xl">Different kinds of websites, thoughtfully shaped.</h1>
              <p className="max-w-sm text-[17px] leading-7 text-[#16212b]/65">A selection of my work across e-commerce, banking, business systems, point of sale, blogs, hospitality, and more.</p>
            </div>
          </div>
        </section>

        <section className="container py-14 sm:py-20" aria-labelledby="projects-heading">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#16212b]/20 pb-5 sm:flex-row sm:items-end">
            <div><p className="eyebrow text-[#5f7480]">Browse by website type</p><h2 id="projects-heading" className="mt-2 text-sm text-[#16212b]/55">{projects.length} projects across different industries</h2></div>
            <a href={`${siteBase}#contact`} className="button-ink self-start">Discuss a project <ArrowUpRight size={15} /></a>
          </div>

          <div className="grid gap-x-8 gap-y-14 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.index} className="group border-b border-[#16212b]/20 pb-8">
                <div className="signal-corner relative aspect-[1.35/1] overflow-hidden bg-[#dbe3e4]">
                  <img src={project.image} alt={project.imageAlt} className="project-image h-full w-full object-cover" loading="eager" decoding="async" />
                  <span className="absolute left-5 top-5 bg-[#f7f8f5]/95 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#16212b]">{project.category}</span>
                  <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-[#c6d45a] text-[#16212b]"><ArrowUpRight size={17} /></span>
                </div>
                <div className="flex items-start justify-between gap-5 pt-5">
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5f7480]">{String(index + 1).padStart(2, "0")} / Previous work</p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">{project.title}</h3>
                    <p className="mt-3 max-w-lg text-sm leading-6 text-[#16212b]/65">{project.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-6 border-t border-[#16212b]/15 pt-5 sm:grid-cols-[0.7fr_1.3fr]">
                  <div><p className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#5f7480]">Focus</p><ul className="mt-3 flex flex-wrap gap-2">{project.services.map((service) => <li key={service} className="border border-[#16212b]/15 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.06em] text-[#16212b]/70">{service}</li>)}</ul></div>
                  <p className="border-l-2 border-[#c6d45a] pl-4 text-sm leading-6 text-[#16212b]/70"><Check className="mb-2 text-[#5f7480]" size={15} />{project.result}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#16212b] py-16 text-[#f7f8f5] sm:py-20">
          <div className="container flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div><p className="eyebrow text-[#c6d45a]">Have a real brief?</p><h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight tracking-[-0.06em] sm:text-5xl">Let&apos;s make something useful for your business.</h2></div>
            <a href="mailto:ktony7854@gmail.com" className="button-lime shrink-0">Email Tony <Mail size={15} /></a>
          </div>
        </section>
      </main>
      <footer className="bg-[#16212b] text-[#f7f8f5]/55">
          <div className="container flex flex-col justify-between gap-4 border-t border-[#f7f8f5]/15 py-5 font-mono text-[9px] uppercase tracking-[0.14em] sm:flex-row"><a href={siteBase} className="hover:text-[#c6d45a]">Ktony Sites / Nairobi, Kenya</a><span>© Ktony Sites / {new Date().getFullYear()}</span></div>
      </footer>
    </div>
  );
}
