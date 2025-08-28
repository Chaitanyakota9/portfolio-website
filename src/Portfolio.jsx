import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Linkedin, ExternalLink, Star, Download, MapPin } from "lucide-react";
import photo from '../me.jpeg';
import aiLabelerImage from '../ai-labeler.jpg.webp';
import licensePlateImage from '../license-plate.png';
import hutaoBotImage from '../chatbot.jpg';
import emailExpenseAutoImage from '../email expense auto.png';
import emailSummarizerImage from '../email summarizer.png';

// Quick utility components
const Container = ({ children }) => (
  <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>
);

const SectionTitle = ({ kicker, title }) => (
  <div className="mb-8 text-center">
    <div className="text-sm font-semibold tracking-widest text-rose-500">{kicker}</div>
    <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
      {title}
    </h2>
  </div>
);

const Tag = ({ children }) => (
  <span className="rounded-full border px-2 py-1 text-xs font-medium transition hover:-translate-y-0.5">
    {children}
  </span>
);

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const projects = [
    {
      title: "AI-Image-Labeler (YOLOv8 + SAM)",
      githubLink: "https://github.com/Chaitanyakota9/AI-Image-Labeler",
      demoLink: null,
      tags: ["Computer Vision", "Auto-Labeling", "YOLOv8", "SAM"],
      image: aiLabelerImage,
      problem: "Manual annotation is time-consuming in CV datasets",
      solution: "Built auto-labeling pipeline using YOLOv8 + SAM",
      impact: "Reduced annotation time by 80% across 1k+ images",
    },
    {
      title: "License Plate Detection (YOLOv8 + EasyOCR)",
      githubLink: "https://github.com/Chaitanyakota9/license-plate-detection-using-yolov8-and-easyocr",
      demoLink: null,
      tags: ["Object Detection", "OCR", "EasyOCR"],
      image: licensePlateImage,
      problem: "Need for automated license plate recognition in traffic systems",
      solution: "Developed YOLOv8-based detection with EasyOCR text extraction",
      impact: "Achieved 95% accuracy in real-world traffic conditions",
    },
    {
      title: "Hutao Chatbot 💀✨",
      githubLink: "https://github.com/Chaitanyakota9/Hutao-chatbot",
      demoLink: "https://hutao-chatbot-e6rw.onrender.com",
      tags: ["Chatbot", "AI", "Web Development"],
      image: hutaoBotImage,
      problem: "Creating engaging conversational AI experiences",
      solution: "Built character-based chatbot with modern web interface",
      impact: "Deployed live with 500+ user interactions",
    },
  ];

  const tools = [
    { category: "Core AI/ML", skills: ["Python", "PyTorch", "TensorFlow", "YOLOv5/v8", "OpenCV"] },
    { category: "Backend & APIs", skills: ["FastAPI", "Django", "Node.js"] },
    { category: "Databases", skills: ["PostgreSQL", "MongoDB"] },
    { category: "DevOps/Deployment", skills: ["Docker", "AWS", "Vercel", "Render"] },
    { category: "Automation & Tools", skills: ["n8n", "Git", "VS Code"] },
  ];

  const automations = [
    {
      title: "AI Email Assistant",
      description: "Intelligent email processing with OpenAI GPT-4 analysis, automatic task extraction, and smart reply generation",
      tags: ["n8n", "AI", "OpenAI GPT-4", "Email Automation", "Task Management"],
      image: emailSummarizerImage,
      template: "https://github.com/Chaitanyakota9/portfolio-website/blob/main/My%20workflow%203.json",
    },
    {
      title: "Email Expense Auto-Processor",
      description: "Automated expense tracking and categorization from email receipts using n8n workflows",
      tags: ["n8n", "Automation", "Email Processing", "Expense Tracking"],
      image: emailExpenseAutoImage,
      template: "https://github.com/Chaitanyakota9/portfolio-website/blob/main/My%20workflow%205.json",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900 transition dark:bg-neutral-950 dark:text-white">
      {/* Top bar */}
      <div className="sticky top-0 z-40 border-b bg-white/70 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/70">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 to-fuchsia-600 font-black text-white shadow-md text-sm sm:text-base">CK</div>
              <span className="hidden sm:block text-sm font-medium opacity-70">AI masters student @ Uni Passau, Germany</span>
              <span className="sm:hidden text-xs font-medium opacity-70">AI Student</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-3">
              <a href="#projects" className="rounded-xl border px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">Projects</a>
              <a href="#research" className="hidden sm:block rounded-xl border px-3 py-1.5 text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">Research</a>
              <a href="#contact" className="rounded-xl border px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900">Contact</a>
              <button onClick={() => setDark(!dark)} className="rounded-xl border px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm hover:bg-neutral-50 dark:hover:bg-neutral-900" aria-label="Toggle theme">
                {dark ? "☀️" : "🌙"}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-40 -top-32 h-96 w-96 rounded-full bg-gradient-to-br from-rose-500/30 to-fuchsia-600/30 blur-3xl" />
        <Container>
          <div className="grid items-center gap-8 py-12 sm:gap-10 sm:py-16 lg:py-24 sm:grid-cols-2">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="order-2 sm:order-1">
              <p className="text-sm font-semibold tracking-widest text-rose-500">Hi folks! I'm Chaitanya</p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                AI & Deep Learning <span className="opacity-80">Engineer</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm sm:text-base opacity-80">
                M.Sc. Artificial Intelligence (Uni Passau, Germany)
              </p>
              <p className="mt-2 max-w-xl text-sm sm:text-base opacity-70">
                I design intelligent computer vision & NLP systems with real-world applications.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a href="mailto:chaitanya.kota24@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-white shadow-md transition hover:translate-y-[-2px] text-sm sm:text-base">
                  <Mail size={16} className="sm:w-[18px] sm:h-[18px]" /> Let's Talk
                </a>
                <a href="https://github.com/Chaitanyakota9" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm sm:text-base">
                  <Github size={16} className="sm:w-[18px] sm:h-[18px]" /> View Projects
                </a>
              </div>
            </motion.div>

            {/* Profile Photo */}
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 sm:order-2 relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border shadow-2xl sm:h-64 sm:w-64 lg:h-80 lg:w-80">
              <img 
                src={photo} 
                alt="Chaitanya Kota" 
                className="h-full w-full object-cover"
              />
              <div className="absolute -right-8 -top-8 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-fuchsia-500/40 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 sm:h-40 sm:w-40 rounded-full bg-rose-500/40 blur-2xl" />
            </motion.div>
          </div>
        </Container>
        <div className="border-y bg-neutral-50 py-3 text-center text-xs sm:text-sm dark:border-neutral-800 dark:bg-neutral-900">
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 lg:gap-4">
              {"PostgreSQL + Machine Learning + Deep Learning + FastAPI + NLP + Computer Vision".split(" + ").map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </div>
          </Container>
        </div>
        
        {/* Internship Banner */}
        <div className="bg-gradient-to-r from-rose-500 to-fuchsia-600 py-3 text-center text-white">
          <Container>
            <div className="flex items-center justify-center gap-2">
              <Star size={16} />
              <span className="text-sm font-semibold">Currently seeking 3-6 month internship in Germany</span>
              <span className="text-xs opacity-90">• Available immediately • EU-based • German work permit</span>
            </div>
          </Container>
        </div>
      </header>

      {/* About */}
      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionTitle kicker="About" title="Building things that learn & ship" />
          <div className="mx-auto max-w-3xl text-center text-base sm:text-lg opacity-90 px-4">
            I'm a Master's student in Artificial Intelligence at the University of Passau, Germany, with hands-on experience in Computer Vision, NLP, and intelligent automation. My research on real-time tracking and action recognition has been published in IEEE. I thrive in collaborative environments and have successfully delivered production-ready ML systems. Currently seeking an internship in Germany where I can apply these skills to industry-scale problems while contributing to innovative AI solutions.
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="border-y py-8 sm:py-12 dark:border-neutral-800">
        <Container>
          <SectionTitle kicker="Stack" title="Tools I work with" />
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tools.map((category) => (
              <div key={category.category} className="space-y-3">
                <h3 className="text-sm font-semibold text-rose-500 uppercase tracking-wider">{category.category}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center justify-center rounded-xl border p-2 text-xs font-medium opacity-80 dark:border-neutral-800">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Research */}
      <section id="research" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionTitle kicker="Research" title="Peer‑reviewed papers" />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
            <article className="group rounded-2xl border p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-rose-500">2023</div>
              <h3 className="text-lg sm:text-xl font-bold">Enhancing Real-Time Human Tracking using YOLONAS‑DeepSort Fusion Models</h3>
              <p className="mt-2 text-sm opacity-80">Enhanced YOLO-NAS with DeepSORT for multi-human tracking in crowded environments (IEEE 2023).</p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm text-rose-500" href="https://ieeexplore.ieee.org/document/10394864" target="_blank" rel="noreferrer">
                Read on IEEE Xplore <ExternalLink size={16} />
              </a>
            </article>
            <article className="group rounded-2xl border p-4 sm:p-6 transition hover:-translate-y-1 hover:shadow-md dark:border-neutral-800">
              <div className="mb-2 text-xs font-semibold uppercase tracking-widest text-rose-500">2024</div>
              <h3 className="text-lg sm:text-xl font-bold">Action Recognition for Intelligent Surveillance using LRCN with Attention Mechanisms</h3>
              <p className="mt-2 text-sm opacity-80">Developed LRCN with attention mechanisms for intelligent surveillance action recognition (IEEE 2024).</p>
              <a className="mt-3 inline-flex items-center gap-2 text-sm text-rose-500" href="https://ieeexplore.ieee.org/document/10469119" target="_blank" rel="noreferrer">
                Read on IEEE Xplore <ExternalLink size={16} />
              </a>
            </article>
          </div>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="border-y py-12 sm:py-16 lg:py-24 dark:border-neutral-800">
        <Container>
          <SectionTitle kicker="Projects" title="Showcase" />
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border p-4 sm:p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800"
              >
                <div className="mb-4 h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-bold">{p.title}</h3>
                <div className="mb-3 space-y-1 text-xs opacity-80">
                  <p><span className="font-semibold">Problem:</span> {p.problem}</p>
                  <p><span className="font-semibold">Solution:</span> {p.solution}</p>
                  <p><span className="font-semibold">Impact:</span> {p.impact}</p>
                </div>
                <div className="mb-4 flex flex-wrap gap-1 sm:gap-2">
                  {p.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <div className="flex gap-2">
                  {p.demoLink && (
                    <a
                      href={p.demoLink}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-600 transition"
                    >
                      View Demo <ExternalLink size={16} />
                    </a>
                  )}
                  <a
                    href={p.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-600 transition"
                  >
                    View on GitHub <ArrowRight size={16} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href="https://github.com/Chaitanyakota9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm transition hover:bg-neutral-50 dark:hover:bg-neutral-900">
              <Github size={18} /> View all projects
            </a>
          </div>
        </Container>
      </section>

      {/* Automations */}
      <section className="py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionTitle kicker="Smart Automations" title="Workflow Magic" />
        <div className="mx-auto max-w-3xl text-center text-base sm:text-lg opacity-90 px-4 mb-8">
          Built n8n-based workflow automations (email assistant, expense tracking) showing ability to integrate LLMs with real-world productivity apps.
        </div>
          <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {automations.map((a, idx) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative overflow-hidden rounded-2xl border p-4 sm:p-5 transition hover:-translate-y-1 hover:shadow-lg dark:border-neutral-800"
              >
                <div className="mb-4 h-32 sm:h-36 w-full rounded-xl overflow-hidden bg-gradient-to-br from-neutral-200 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700">
                  <img 
                    src={a.image} 
                    alt={a.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="mb-2 text-base sm:text-lg font-bold">{a.title}</h3>
                <p className="mb-3 text-sm opacity-80">{a.description}</p>
                <div className="mb-4 flex flex-wrap gap-1 sm:gap-2">
                  {a.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
                <a
                  href={a.template}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-rose-500 hover:text-rose-600 transition"
                >
                  View Template <ExternalLink size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 sm:py-16 lg:py-24">
        <Container>
          <SectionTitle kicker="Get in touch" title="Let's build something" />
          <div className="mx-auto flex max-w-lg flex-col items-center gap-4 text-center px-4">
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
              <a href="mailto:chaitanya.kota24@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-rose-500 px-4 py-2 text-white shadow-md transition hover:translate-y-[-2px] text-sm sm:text-base">
                <Mail size={16} className="sm:w-[18px] sm:h-[18px]" /> chaitanya.kota24@gmail.com
              </a>
              <a href="https://github.com/Chaitanyakota9" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm sm:text-base">
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/chaitanya-kota-451427310/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm sm:text-base">
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" /> LinkedIn
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-4">
              <a href="/cv-en.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm">
                <Download size={16} /> Download CV (EN)
              </a>
              <a href="/cv-de.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border px-4 py-2 transition hover:bg-neutral-50 dark:hover:bg-neutral-900 text-sm">
                <Download size={16} /> Lebenslauf (DE)
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm opacity-70">
              <MapPin size={14} />
              <span>Passau, Germany • Available for relocation</span>
            </div>
            <p className="mt-2 text-xs sm:text-sm opacity-70">© {new Date().getFullYear()} Chaitanya Kota · All rights reserved.</p>
          </div>
        </Container>
      </section>
    </div>
  );
}
