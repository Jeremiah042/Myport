import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <p className="section-heading">Career</p>
        <h2 className="section-title mb-12">Experience & Education</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Briefcase size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl">Work Experience</h3>
            </div>

            <div className="relative border-l-2 border-border space-y-12">
              {/* Experience 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent" />

                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    February 2026 - Present
                  </span>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  Frontend Developer Intern
                </h4>
                <p className="text-muted-foreground font-medium mb-3">
                  OmniRetail Africa · Hybrid
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Currently working with the OmniBiz team
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Using React, TypeScript, Next.js with Azure DevOps (git) for version control
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "TypeScript", "Next.js", "Azure DevOps"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Experience 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent" />

                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    June 2025 - January 2026
                  </span>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  Tech Support
                </h4>
                <p className="text-muted-foreground font-medium mb-3">
                  Banfy Limited · Remote
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Worked as a Tech Support for Banfy Limited
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Work with internal teams to escalate and resolve customer issues
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Using Grafana, MixPanel, Zoho Desk, FreshDesk, Slack, Jira, Bitbucket, FAQ  integration.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Tailwind CSS", "JavaScript", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
      
 {/* Experience 3 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent" />

                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    May 2023 - October 2023
                  </span>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  Software Development
                </h4>
                <p className="text-muted-foreground font-medium mb-3">
                  Infosight Limited · Remote
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  Foundation in Software Development
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  UI/UX Design 
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Using Javascript, HTML, CSS, Framer Motion, Figma, Adobe XD, Git, Github.
                  </li>
                </ul>

                <div className="flex flex-wrap gap-2 mt-4">
                  {["React", "Tailwind CSS", "JavaScript", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-xl">Education</h3>
            </div>

            <div className="relative border-l-2 border-border space-y-12">
              {/* Education 1 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent" />

                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    2020 - July 2024
                  </span>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  B.Sc Computing and Mathematical Science
                </h4>
                <p className="text-muted-foreground font-medium mb-3">
                  Crawford University, Igesa, Faith City, Ogun State, Nigeria.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Relevant Coursework: Web Development Fundamentals, Computer Programming
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    Self-taught through FreeCodeCamp and other online resources
                  </li>
                </ul>
              </div>

              {/* Education 2 */}
              <div className="relative pl-8">
                <div className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full bg-accent" />

                <div className="mb-2">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded">
                    Sep 2024 - Present
                  </span>
                </div>
                <h4 className="font-display font-semibold text-lg text-foreground">
                  AltSchool Africa
                </h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                   Cyber Security Professional Certificate
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
