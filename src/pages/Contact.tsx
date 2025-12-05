import { Mail, MapPin, Phone, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import photoshoot from '@/assets/photoshoot.jpg';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail size={22} />,
      label: "Email",
      value: "ayobamieae@gmail.com",
      href: "mailto:ayobamieae@gmail.com",
      color: "bg-primary/10 text-primary"
    },
    {
      icon: <Phone size={22} />,
      label: "Phone",
      value: "+44 7867 027428",
      href: "tel:+447867027428",
      color: "bg-secondary/10 text-secondary"
    },
    {
      icon: <MapPin size={22} />,
      label: "Location",
      value: "Dudley, West Midlands, UK",
      href: null,
      color: "bg-accent/10 text-accent"
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={22} />,
      label: "GitHub",
      href: "https://github.com/Ayooluwabami",
      username: "@Ayooluwabami"
    },
    {
      icon: <Linkedin size={22} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ayobami-ekundayo",
      username: "ayobami-ekundayo"
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">Contact</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Let's <span className="text-gradient">Connect</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your vision. Let's create something amazing together.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto">
          {/* Main Contact Card */}
          <AnimatedSection delay={100}>
            <div className="bg-muted/30 rounded-2xl border border-border overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Image Section */}
                <div className="lg:col-span-2 relative h-64 lg:h-auto">
                  <img 
                    src={photoshoot} 
                    alt="Ayobami Edun" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent lg:bg-gradient-to-r" />
                  
                  {/* Mobile overlay content */}
                  <div className="absolute bottom-4 left-4 lg:hidden">
                    <h2 className="text-2xl font-bold text-white">Ayobami Edun</h2>
                    <p className="text-white/80">Backend Engineer</p>
                  </div>
                </div>

                {/* Contact Info Section */}
                <div className="lg:col-span-3 p-6 lg:p-10 space-y-6">
                  <div className="hidden lg:block">
                    <h2 className="text-2xl font-bold mb-1">Ayobami Edun</h2>
                    <p className="text-muted-foreground">Backend Engineer • API Architect</p>
                  </div>

                  {/* Contact Methods */}
                  <div className="space-y-3">
                    {contactMethods.map((method, index) => (
                      <motion.div
                        key={method.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {method.href ? (
                          <a 
                            href={method.href}
                            className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border 
                                     hover:border-primary/30 hover:shadow-elegant transition-all group"
                          >
                            <div className={`p-3 rounded-xl ${method.color} group-hover:scale-110 transition-transform`}>
                              {method.icon}
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">{method.label}</p>
                              <p className="font-medium">{method.value}</p>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-xl border border-border">
                            <div className={`p-3 rounded-xl ${method.color}`}>
                              {method.icon}
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider">{method.label}</p>
                              <p className="font-medium">{method.value}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>

                  {/* Availability */}
                  <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl border border-primary/20">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                      </span>
                      <div>
                        <p className="font-semibold">Currently Available</p>
                        <p className="text-sm text-muted-foreground">
                          Open to full-time roles and project collaborations
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Social Links */}
          <AnimatedSection delay={200}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="flex items-center justify-between p-5 bg-muted/30 rounded-xl border border-border 
                           hover:border-primary/30 hover:shadow-elegant transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary 
                                  group-hover:text-primary-foreground transition-colors">
                      {social.icon}
                    </div>
                    <div>
                      <p className="font-semibold">{social.label}</p>
                      <p className="text-sm text-muted-foreground">{social.username}</p>
                    </div>
                  </div>
                  <ArrowUpRight size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection delay={300}>
            <div className="text-center p-8 md:p-10 bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Build Something Great?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ayobamieae@gmail.com"
                  className="btn-primary flex items-center gap-2"
                >
                  <Mail size={18} />
                  Send an Email
                </a>
                <a
                  href="https://www.linkedin.com/in/ayobami-ekundayo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Linkedin size={18} />
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Contact;