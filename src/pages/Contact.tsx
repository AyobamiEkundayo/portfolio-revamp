import { Mail, MapPin, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import photoshoot from '@/assets/photoshoot.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Let's create something amazing together!
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Main Contact Card */}
          <AnimatedSection delay={100}>
            <div className="bg-gradient-to-br from-muted/50 to-background rounded-3xl border border-border overflow-hidden shadow-elegant">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image Section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <img 
                    src={photoshoot} 
                    alt="Ayobami Edun" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent lg:bg-gradient-to-r" />
                </div>

                {/* Contact Info Section */}
                <div className="lg:col-span-3 p-8 lg:p-12 space-y-8">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">Ayobami Edun</h2>
                    <p className="text-muted-foreground text-lg">Backend Engineer</p>
                  </div>

                  {/* Contact Details */}
                  <div className="space-y-4">
                    <a 
                      href="mailto:ayobamieae@gmail.com"
                      className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border 
                               hover:border-primary/50 hover:shadow-elegant transition-all group"
                    >
                      <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                        <Mail size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-medium">ayobamieae@gmail.com</p>
                      </div>
                    </a>

                    <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border">
                      <div className="p-3 bg-accent/10 rounded-xl text-accent">
                        <Phone size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="font-medium">+44 7867 027428</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border">
                      <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">Dudley, West Midlands, UK</p>
                      </div>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-4">
                    <a
                      href="https://github.com/Ayooluwabami"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 bg-background/50 rounded-xl border border-border hover:border-primary/50 
                               hover:shadow-elegant transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Github size={20} />
                      GitHub
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ayobami-ekundayo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 p-4 bg-background/50 rounded-xl border border-border hover:border-primary/50 
                               hover:shadow-elegant transition-all flex items-center justify-center gap-2 font-medium"
                    >
                      <Linkedin size={20} />
                      LinkedIn
                    </a>
                  </div>

                  {/* Availability */}
                  <div className="p-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl border border-border">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                      </span>
                      <div>
                        <p className="font-semibold">Currently Available</p>
                        <p className="text-sm text-muted-foreground">
                          Open to full-time opportunities and collaborations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Call to Action */}
          <AnimatedSection delay={200}>
            <div className="mt-12 text-center">
              <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-border">
                <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Whether you have a project in mind or just want to chat about technology, 
                  I'd love to hear from you.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://github.com/Ayooluwabami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-full font-medium 
                             border border-border hover:border-primary/50 transition-all flex items-center gap-2"
                  >
                    <Github size={18} />
                    View GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayobami-ekundayo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full font-medium 
                             transition-all flex items-center gap-2"
                  >
                    <Linkedin size={18} />
                    Connect on LinkedIn
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;
