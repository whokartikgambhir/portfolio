import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "gambirkartik5@gmail.com",
      href: "mailto:gambirkartik5@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91-9599741784",
      href: "tel:+91-9599741784"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "Visit GitHub",
      href: "https://github.com/whokartikgambhir"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://www.linkedin.com/in/kartik-gambhir-034b43169/"
    },
    {
      icon: Twitter,
      label: "Twitter",
      value: "Connect on Twitter",
      href: "https://x.com/KartikGambhir18"
    }
  ];

  return (
    <section id="contact" className="mt-40 py-40 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Feel free to reach out via any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">

          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="w-full glass hover:glow-accent transition-all duration-300 hover:scale-105"
            >
              <CardContent className="p-6">
                <a
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-foreground hover:text-primary transition-colors duration-200"
                >
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary/20 to-accent/20">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-muted-foreground">{info.value}</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};