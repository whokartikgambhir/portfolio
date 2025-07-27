import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Projects = () => {
  const projects = [
    {
      title: "PaperTraderX – Waitlist & Referral System",
      description: (
        <>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground text-sm">
            <li>
              Engineered a backend for early access sign-ups with referral
              tracking and automated confirmation emails using BullMQ for
              retries and delivery logging.
            </li>
            <li>
              Designed a responsive waitlist page with referral code support,
              delivering a seamless sign-up experience for users.
            </li>
          </ul>
        </>
      ),
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "BullMQ",
        "React",
        "Tailwind",
      ],
      github: "https://github.com/PaperTraderX/paperTraderX-waitlist",
      live: "https://papertraderx-waitlist.netlify.app/",
    },
    {
      title: "Git Inspector – GitHub PR Analytics Platform",
      description: (
        <>
          <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground text-sm">
            <li>
              Developed a real-time PR analytics dashboard with activity
              tracking, timing metrics and developer comparisons.
            </li>
            <li>
              Built a secure GitHub PAT authentication, Redis caching for API
              rate optimization and comprehensive tests and documentation to
              support open-source adoption.
            </li>
          </ul>
        </>
      ),
      technologies: [
        "Node.js",
        "MongoDB",
        "AWS",
        "Redis",
        "Express.js",
        "CodePipeline",
      ],
      github: "https://github.com/whokartikgambhir/git-inspector-backend",
      live: null,
    },
    {
      title: "100xDevs",
      description:
        "Active contributor to 100xDevs community projects and learning initiatives.",
      technologies: ["Next.js", "Redis", "TypeScript"],
      github: "https://github.com/100xDevs-hkirat",
      live: null,
    },
  ];

  return (
    <section id="projects" className="pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for creating meaningful digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="w-full glass overflow-hidden hover:glow-primary transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader>
                <CardTitle className="text-xl gradient-text">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-muted-foreground">
                  {project.description}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="border-primary/20 hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3 pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="min-w-[120px] px-4 py-2 text-xs"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        size="sm"
                        className="min-w-[120px] px-4 py-2 text-xs glow-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};