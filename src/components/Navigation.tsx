import { useState, useEffect } from "react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#techStack", label: "Tech Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 glass border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex flex-wrap justify-center gap-6 text-center">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className={`relative font-bold text-white transition-colors duration-300 hover:text-primary ${
                activeSection === item.href.slice(1)
                  ? "text-primary"
                  : "text-white"
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
              )}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};