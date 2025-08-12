import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const TechStack = () => {
  const skillCategories = [
    {
      title: "Backend & Frameworks",
      skills: ["Express.js", "NestJS", "WebSockets", "BullMQ", "REST APIs"],
    },
    {
      title: "Languages & Runtime",
      skills: ["Golang", "JavaScript", "TypeScript", "Node.js"],
    },
    {
      title: "Architecture & Observability",
      skills: [
        "Serverless Architecture",
        "Microservices",
        "Kafka",
        "AWS Lambda",
        "API Gateway",
        "S3",
        "CI/CD",
        "Docker",
        "Kubernetes",
        "Grafana",
        "Prometheus",
      ],
    },
    {
      title: "Databases & Caching",
      skills: [
        "MongoDB",
        "DocumentDB",
        "MySQL",
        "Amazon Aurora",
        "Redis",
        "Sequelize",
      ],
    },
    {
      title: "Tools & Collaboration",
      skills: ["Git", "Postman", "JIRA", "VS Code"],
    },
    {
      title: "Soft Skills & Leadership",
      skills: [
        "Team Leadership",
        "Mentoring",
        "Code Review",
        "Agile",
        "Problem Solving",
        "Communication",
      ],
    },
  ];

  return (
    <section
      id="techStack"
      className="py-20 bg-gradient-to-b from-background to-background/50"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Here's a curated list of technologies I've used to architect
            scalable, secure and high-performance backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="w-full glass hover:glow-primary transition-all duration-300 hover:scale-105 h-full"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl gradient-text">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};