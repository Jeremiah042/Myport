import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <div className="max-w-3xl">
          <p className="section-heading mb-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Frontend Developer
          </p>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Hi, I'm{" "}
            <span className="accent-underline">Jegede Jeremiah</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            A passionate frontend developer with 2+ years of experience crafting 
            beautiful, responsive, and user-friendly web experiences using React, 
            Next.js, and TypeScript.
          </p>
          <div 
            className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-display font-medium hover:bg-foreground/90 transition-colors"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-display font-medium text-foreground hover:bg-secondary transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
