import { ArrowLeft, ArrowUpRight, ImagePlus, MessageCircle, Pencil, Plus, Send, Trash2, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type PostedProject = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  images: string[];
  comments: string[];
};

type ProjectForm = Omit<PostedProject, "id" | "comments">;

const blankProject: ProjectForm = {
  title: "",
  category: "",
  description: "",
  image: "",
  images: [],
};

const starterProjects: PostedProject[] = [
  {
    id: 1,
    title: "Route / Path",
    category: "Digital presence",
    description: "A clear operations dashboard that brings live status, team activity, and critical alerts into one calm workspace.",
    image: "/manus-storage/tony-ken-network-v2_525cd75f.jpg",
    images: ["/manus-storage/tony-ken-network-v2_525cd75f.jpg"],
    comments: [],
  },
  {
    id: 2,
    title: "Fold / Form",
    category: "Product website",
    description: "A focused vehicle marketplace that helps customers browse stock quickly, compare details, and take the next step.",
    image: "/manus-storage/tony-ken-interface-v2_ba1fe302.jpg",
    images: ["/manus-storage/tony-ken-interface-v2_ba1fe302.jpg"],
    comments: [],
  },
  {
    id: 3,
    title: "Trust / Layer",
    category: "Security communication",
    description: "A polished customer portal that makes access, account actions, and service information feel simple and trustworthy.",
    image: "/manus-storage/tony-ken-security-v2_39cf273f.jpg",
    images: ["/manus-storage/tony-ken-security-v2_39cf273f.jpg"],
    comments: [],
  },
];

function readPostedProjects() {
  try {
    const saved = localStorage.getItem("tony-ken-projects");
    return saved ? (JSON.parse(saved) as PostedProject[]).map((project) => ({ ...project, images: project.images?.length ? project.images : [project.image].filter(Boolean), comments: project.comments ?? [] })) : starterProjects;
  } catch {
    return starterProjects;
  }
}

export default function Projects() {
  const [projects, setProjects] = useState<PostedProject[]>(readPostedProjects);
  const [formOpen, setFormOpen] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<number | null>(null);
  const [projectForm, setProjectForm] = useState<ProjectForm>(blankProject);
  const [commentDrafts, setCommentDrafts] = useState<Record<number, string>>({});

  useEffect(() => {
    localStorage.setItem("tony-ken-projects", JSON.stringify(projects));
  }, [projects]);

  function openNewProject() {
    setEditingProjectId(null);
    setProjectForm(blankProject);
    setFormOpen(true);
  }

  function openEditProject(project: PostedProject) {
    setEditingProjectId(project.id);
    setProjectForm({ title: project.title, category: project.category, description: project.description, image: project.image, images: project.images ?? [project.image].filter(Boolean) });
    setFormOpen(true);
  }

  function handlePhotoChange(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => setProjectForm((current) => ({ ...current, image: String(reader.result), images: [String(reader.result), ...current.images] })));
    reader.readAsDataURL(file);
  }

  function handleScreenshotsChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => setProjectForm((current) => ({ ...current, images: [...current.images, String(reader.result)] })));
      reader.readAsDataURL(file);
    });
    event.target.value = "";
  }

  function removeScreenshot(index: number) {
    setProjectForm((current) => {
      const images = current.images.filter((_, imageIndex) => imageIndex !== index);
      return { ...current, images, image: images[0] ?? "" };
    });
  }

  function saveProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const images = projectForm.images.length ? projectForm.images : [projectForm.image || "/manus-storage/tony-ken-interface-v2_ba1fe302.jpg"];
    const details = { ...projectForm, images, image: images[0], title: projectForm.title.trim(), category: projectForm.category.trim(), description: projectForm.description.trim() };
    if (editingProjectId !== null) {
      setProjects((current) => current.map((project) => project.id === editingProjectId ? { ...project, ...details } : project));
    } else {
      setProjects((current) => [{ ...details, id: Date.now(), comments: [] }, ...current]);
    }
    setFormOpen(false);
    setProjectForm(blankProject);
  }

  function removeProject(id: number) {
    setProjects((current) => current.filter((project) => project.id !== id));
  }

  function addComment(event: FormEvent<HTMLFormElement>, projectId: number) {
    event.preventDefault();
    const text = commentDrafts[projectId]?.trim();
    if (!text) return;
    setProjects((current) => current.map((project) => project.id === projectId ? { ...project, comments: [...(project.comments ?? []), text] } : project));
    setCommentDrafts((current) => ({ ...current, [projectId]: "" }));
  }

  return (
    <div className="min-h-screen bg-[#f7f8f5] text-[#16212b]">
      <header className="bg-[#16212b] text-[#f7f8f5]">
        <div className="container flex min-h-[76px] items-center justify-between border-b border-[#f7f8f5]/15">
          <a href="/" className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em]">
            <span className="stamp-mark flex size-9 items-center justify-center border border-[#f7f8f5]/40 bg-[#c6d45a] text-[#16212b]">TK</span>
            Ktony Sites
          </a>
          <a href="/" className="button-ghost border-[#f7f8f5]/30 text-[#f7f8f5] hover:border-[#f7f8f5] hover:bg-[#f7f8f5]/5"><ArrowLeft size={14} /> Back home</a>
        </div>
      </header>

      <main>
        <section className="paper-grid border-b border-[#16212b]/15 bg-[#e7eceb] py-20 sm:py-28">
          <div className="container">
            <p className="eyebrow text-[#5f7480]">06 / Recent projects</p>
            <div className="mt-6 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <h1 className="section-title max-w-4xl">Work worth making visible.</h1>
              <p className="max-w-sm text-[17px] leading-7 text-[#16212b]/65">A living collection of recent web, product, and communication work. Each project starts with a business problem and ends with a clearer customer experience.</p>
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-24">
          <div className="mb-10 flex flex-col justify-between gap-5 border-b border-[#16212b]/20 pb-5 sm:flex-row sm:items-center">
            <div><p className="eyebrow text-[#5f7480]">Project archive</p><p className="mt-2 text-sm text-[#16212b]/55">{projects.length} projects published</p></div>
            <button type="button" className="button-ink self-start" onClick={openNewProject}><Plus size={15} /> Post a project</button>
          </div>

          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((project, index) => (
              <article key={project.id} className="group border-b border-[#16212b]/20 pb-8">
                <div className={`signal-corner relative grid aspect-[1.35/1] gap-1 overflow-hidden bg-[#dbe3e4] ${(project.images ?? []).length > 1 ? "grid-cols-2" : ""}`}>
                  {(project.images ?? [project.image]).filter(Boolean).slice(0, 4).map((image, imageIndex) => <img key={`${project.id}-${imageIndex}`} src={image} alt={`${project.title} screenshot ${imageIndex + 1}`} className="project-image h-full min-h-0 w-full object-cover" />)}
                  {(project.images ?? []).length > 4 && <span className="absolute bottom-5 left-5 bg-[#f7f8f5]/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#16212b]">+{project.images.length - 4} more</span>}
                  <span className="absolute left-5 top-5 bg-[#f7f8f5]/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.13em] text-[#16212b]">{project.category}</span>
                  <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-[#c6d45a] text-[#16212b]"><ArrowUpRight size={17} /></span>
                  {(project.images ?? []).length > 1 && <span className="absolute bottom-5 left-5 bg-[#16212b]/80 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[#f7f8f5]">{project.images.length} screenshots</span>}
                </div>
                <div className="flex items-start justify-between gap-5 pt-5">
                  <div className="min-w-0"><p className="font-mono text-[10px] uppercase tracking-[0.14em] text-[#5f7480]">{String(index + 1).padStart(2, "0")} / Published work</p><h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">{project.title}</h2><p className="mt-3 max-w-lg text-sm leading-6 text-[#16212b]/65">{project.description}</p></div>
                  <div className="flex shrink-0 gap-2"><button type="button" className="flex size-9 items-center justify-center border border-[#16212b]/20 text-[#16212b]/55 hover:border-[#5f7480] hover:text-[#5f7480]" aria-label={`Edit ${project.title}`} onClick={() => openEditProject(project)}><Pencil size={15} /></button><button type="button" className="flex size-9 items-center justify-center border border-[#16212b]/20 text-[#16212b]/55 hover:border-[#cb786a] hover:text-[#cb786a]" aria-label={`Remove ${project.title}`} onClick={() => removeProject(project.id)}><Trash2 size={15} /></button></div>
                </div>
                <div className="mt-7 border-t border-[#16212b]/15 pt-5">
                  <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.12em] text-[#5f7480]"><MessageCircle size={14} /> {(project.comments ?? []).length} comments</div>
                  {(project.comments ?? []).length > 0 && <div className="mt-4 space-y-2">{(project.comments ?? []).map((comment, commentIndex) => <p key={`${project.id}-${commentIndex}`} className="border-l-2 border-[#c6d45a] pl-3 text-sm leading-6 text-[#16212b]/65">{comment}</p>)}</div>}
                  <form className="mt-4 flex gap-2" onSubmit={(event) => addComment(event, project.id)}><input aria-label={`Comment on ${project.title}`} value={commentDrafts[project.id] ?? ""} onChange={(event) => setCommentDrafts((current) => ({ ...current, [project.id]: event.target.value }))} className="min-w-0 flex-1 border-b border-[#16212b]/25 bg-transparent px-0 py-2 text-sm outline-none placeholder:text-[#16212b]/40 focus:border-[#5f7480]" placeholder="Leave a comment..." /><button type="submit" className="flex size-9 shrink-0 items-center justify-center border border-[#16212b]/20 hover:border-[#16212b]" aria-label={`Post comment on ${project.title}`}><Send size={14} /></button></form>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      {formOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[#16212b]/75 p-3 backdrop-blur-sm sm:items-center sm:p-8" role="dialog" aria-modal="true" aria-labelledby="post-project-title">
          <form className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto bg-[#f7f8f5] p-6 shadow-2xl sm:p-10" onSubmit={saveProject}>
            <button type="button" className="absolute right-5 top-5 flex size-10 items-center justify-center border border-[#16212b]/25" aria-label="Close project form" onClick={() => setFormOpen(false)}><X size={17} /></button>
            <p className="eyebrow text-[#5f7480]">Project archive / {editingProjectId === null ? "new entry" : "edit entry"}</p>
            <h2 id="post-project-title" className="mt-4 text-4xl font-semibold tracking-[-0.06em]">{editingProjectId === null ? "Add recent work." : "Edit project details."}</h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="form-label">Project title<input required value={projectForm.title} onChange={(event) => setProjectForm((current) => ({ ...current, title: event.target.value }))} placeholder="Northstar / Studio" /></label>
              <label className="form-label">Category<input required value={projectForm.category} onChange={(event) => setProjectForm((current) => ({ ...current, category: event.target.value }))} placeholder="Product website" /></label>
            </div>
            <label className="form-label mt-6">Description<textarea required value={projectForm.description} onChange={(event) => setProjectForm((current) => ({ ...current, description: event.target.value }))} rows={4} placeholder="What was made, and why did it matter?" /></label>
            <div className="mt-6 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end"><label className="form-label">Cover image URL <span className="normal-case tracking-normal text-[#16212b]/40">(optional)</span><input value={projectForm.image.startsWith("data:") ? "Uploaded photo" : projectForm.image} onChange={(event) => setProjectForm((current) => ({ ...current, image: event.target.value, images: [event.target.value, ...current.images.slice(1)] }))} type="url" placeholder="https://..." /></label><label className="button-ghost"><ImagePlus size={15} /> Upload cover<input className="sr-only" type="file" accept="image/*" onChange={handlePhotoChange} /></label></div>
            <div className="mt-5 flex flex-wrap items-center gap-3"><label className="button-ghost w-full justify-center sm:w-auto"><Plus size={15} /> Add project screenshots<input className="sr-only" type="file" accept="image/*" multiple onChange={handleScreenshotsChange} /></label><span className="font-mono text-[9px] uppercase tracking-[0.1em] text-[#16212b]/45">Add several images to show the finished project</span></div>
            {projectForm.images.length > 0 && <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">{projectForm.images.map((image, index) => <div key={`${image}-${index}`} className="group relative aspect-video overflow-hidden bg-[#dbe3e4]"><img src={image} alt={`Screenshot preview ${index + 1}`} className="h-full w-full object-cover" /><button type="button" className="absolute right-1 top-1 flex size-7 items-center justify-center bg-[#f7f8f5]/90" aria-label={`Remove screenshot ${index + 1}`} onClick={() => removeScreenshot(index)}><X size={13} /></button></div>)}</div>}
            <div className="mt-8 flex justify-end gap-3"><button type="button" className="button-ghost" onClick={() => setFormOpen(false)}>Cancel</button><button type="submit" className="button-ink">{editingProjectId === null ? "Publish project" : "Save changes"} <ArrowUpRight size={15} /></button></div>
          </form>
        </div>
      )}
    </div>
  );
}
