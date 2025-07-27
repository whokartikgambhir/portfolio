import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { TechStack } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--gradient-hero))] pointer-events-none" />
      <div className="fixed inset-0 bg-[linear-gradient(to_right,transparent_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)] pointer-events-none opacity-10" />
      
      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
