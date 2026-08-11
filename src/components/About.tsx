 import Jegede_Jeremiah from "@/assets/Jegede_Jeremiah.png";

const skills = [
  { name: "Html", level: 98},
  { name: "Css", level: 98},
  { name: "JavaScript", level: 95 },
  { name: "Git & GitHub", level: 90 },
  { name: "React", level: 87 },
  { name: "TypeScript", level: 85 },
  { name: "Next.js", level: 82},
  { name: "Tailwind CSS", level: 78 },
];


const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
        <p className="section-heading">About Me</p>
      <div className="opacity-0 animate-fade-in-up flex-shrink-0" style={{ animationDelay: "0.5s" }}>
            <img
              src={Jegede_Jeremiah}
              alt="jegede Jeremiah"
              className="object-cover"
              style={{
                width: "300px",
                height: "450px",
                borderRadius: "10px",
                alignContent: "center",
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
          </div>
            <h2 className="section-title mb-6">
              Crafting Digital Experiences
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm Jegede Jeremiah, a frontend developer based in Nigeria with a deep passion for 
                building web applications that are not just functional, but delightful to use. 
                With over 2 years of hands-on experience, I've developed a keen eye for design 
                and a commitment to writing clean, maintainable code.
              </p>
              <p>
                My journey in tech started with curiosity and free online courses from FreeCodeCamp. 
                Today, I'm an intern at OmniBiz Africa, where I work with the Omnibiz team building 
                Retail solutions that simplify B2B marketplace.
              </p>
              <p>
                I believe great software is built at the intersection of thoughtful design, 
                solid engineering, and genuine empathy for users. Every project I take on is an 
                opportunity to create something meaningful.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Technical Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-accent rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-display font-semibold text-lg mb-4">Tools & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {["VS Code", "Vercel", "Vite", "Chakra UI", "Shadcn UI", "Azure DevOps", "GitHub", "Supabase"].map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-card text-sm rounded-lg border border-border"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
