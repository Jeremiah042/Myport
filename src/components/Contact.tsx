import { Mail, Github, Linkedin, Instagram, Download } from "lucide-react";

const XIcon = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    name: "X",
    icon: XIcon,
    url: "https://x.com/jay_not_okocha",
    handle: "@jay_not_okocha",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/jayjay_not_okocha22",
    handle: "@Jegede jeremiah(jay_not_okocha)",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Jeremiah042",
    handle: "Jeremiah042",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/jegede-jeremiah",
    handle: "jegedejeremiah",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="section-heading">Get in Touch</p>
          <h2 className="section-title mb-6">Let's Work Together</h2>
          <p className="text-muted-foreground mb-8">
            I'm always open to discussing new projects, creative ideas, or opportunities 
            to be part of your vision. Feel free to reach out!
          </p>

          <a
            href="mailto:Jegedejeremiah12@gmail.com"
            className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-display font-medium hover:bg-foreground/90 transition-colors mb-12"
          >
            <Mail size={18} />
            Jegedejeremiah12@gmail.com
          </a>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 bg-card rounded-xl border border-border hover:border-accent transition-colors group"
              >
                <social.icon size={24} className="text-muted-foreground group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium text-foreground">{social.name}</span>
                <span className="text-xs text-muted-foreground">{social.handle}</span>
              </a>
            ))}
          </div>

          <a
            href="/JEGEDE_JEREMIAH_OLUWATOBI"
            download
            className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-display font-medium text-foreground hover:bg-card transition-colors"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
