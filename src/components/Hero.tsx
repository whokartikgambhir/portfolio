import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Twitter } from "lucide-react";
import codingAnimation from "@/assets/coding-animation.gif";

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold">
  <span className="gradient-text">Kartik Gambhir</span>
</h1>
<h2 className="text-3xl lg:text-4xl font-semibold text-foreground/80">
  Software Developer
</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Hi, I'm Kartik, a passionate Software Developer with 3.5+ years
                of experience building scalable, event-driven backend systems.
                I've led development for high-performance applications and
                open-source projects like PaperTraderX. Currently, I’m diving
                into Web3 and blockchain, with a goal to bridge backend
                engineering with decentralized technologies. Outside of work,
                you’ll find me exploring new tech, contributing to open-source
                or spending time with my closed ones.
              </p>

              {/* CTA Buttons */}
              <div className="flex gap-4 justify-center lg:justify-start">
  <Button asChild size="lg" className="glow-primary hover:scale-105 transition-all duration-300">
    <a href="#projects">View Projects</a>
  </Button>
  <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-all duration-300">
    <a href="https://drive.google.com/file/d/1E2-Nns6vzwu9bVW5MNojuIxQ5EqFzqjJ/view" target="_blank" rel="noopener noreferrer">
      <Download className="mr-2 h-5 w-5" />
      Download CV
    </a>
  </Button>
</div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start mt-2">
                <Button
                  asChild
                  variant="ghost"
                  className="p-3 hover:scale-110 hover:glow-accent transition-all duration-300"
                >
                  <a
                    href="https://github.com/whokartikgambhir"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-7 w-7" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="p-3 hover:scale-110 hover:glow-accent transition-all duration-300"
                >
                  <a
                    href="https://www.linkedin.com/in/kartik-gambhir-034b43169/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="h-7 w-7" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="p-3 hover:scale-110 hover:glow-accent transition-all duration-300"
                >
                  <a
                    href="https://x.com/KartikGambhir18"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter className="h-7 w-7" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Animation */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl animate-glow"></div>
              <div className="relative animate-float">
              <img
  src={codingAnimation}
  alt="Coding Animation"
  className="w-[360px] sm:w-[420px] md:w-[480px] lg:w-[540px] h-auto"
/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};