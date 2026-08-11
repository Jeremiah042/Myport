import { ExternalLink } from "lucide-react";
import pumpExchange from "@/assets/projects/pump-exchange.jpg";
import exclusiveBusiness from "@/assets/projects/exclusive-business.jpg";
import taskLite from "@/assets/projects/task-lite.jpg";
import clipboardPro from "@/assets/projects/clipboard-pro.jpg";
import fitcheck from "@/assets/projects/fitcheck.jpg";

const projects = [
  // {
  //   title: "EduManage",
  //   description: "A comprehensive education management platform for Nigeria Schools.",
  //   image: null,
  //   url: "https://edumanageng.lovable.app",
  //   tech: ["React", "TypeScript", "Supabase", "Tailwind css"],
  //   year: "2026",
  // },
  {
    title: "Pump Exchange",
    description: "A cryptocurrency trading platform with live price updates and secure transactions.",
    image: pumpExchange,
    url: "https://pumpexchange.vercel.app/",
    tech: ["Next.js", "TypeScript", "API Integration"],
    year: "2026",
  },
  {
    title: "FitCheck BMI",
    description: "A health and fitness app that calculates and visualizes BMI metrics.",
    image: fitcheck,
    url: "https://fitcheck-pro.vercel.app/",
    tech: ["React", "TypeScript", "CSS"],
    year: "2026",
  },
  {
    title: "Exclusive Business",
    description: "A modern e-commerce platform featuring product listings, cart functionality, and responsive design.",
    image: exclusiveBusiness,
    url: "https://exclusive-business.vercel.app/",
    tech: ["React", "CSS", "JavaScript"],
    year: "2025",
  },
  {
    title: "TaskLite Pro",
    description: "A lightweight task management app for organizing your daily to-dos efficiently.",
    image: taskLite,
    url: "https://task-lite-pro.vercel.app/",
    tech: ["React", "TypeScript", "Tailwind"],
    year: "2025",
  },
  {
    title: "ClipBoard+",
    description: "A developer tool for managing and saving code snippets for quick access.",
    image: clipboardPro,
    url: "https://clipboard-pro.vercel.app/",
    tech: ["React", "JavaScript", "LocalStorage"],
    year: "2025",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden bg-secondary flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <span className="font-display font-bold text-2xl text-muted-foreground">{project.title}</span>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-display font-semibold text-lg text-foreground">
                    {project.title}
                  </h3>
                  <ExternalLink size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-medium px-2 py-1 bg-secondary text-secondary-foreground rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">{project.year} · Web Development</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
