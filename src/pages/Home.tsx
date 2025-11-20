import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Code, Sparkles, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "radial-gradient(circle at 20% 50%, hsl(210 100% 50% / 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(160 84% 39% / 0.15) 0%, transparent 50%)",
               }}
          />
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <AnimatedSection>
              <div className="mb-6 inline-flex items-center gap-2 px-5 py-2.5 bg-muted/80 backdrop-blur-sm rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 transition-all">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="relative inline-block">
                  <span className="text-gradient animate-float">Ayobami</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                    <path d="M1 9C75 3 225 3 299 9" stroke="url(#gradient)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="hsl(210, 100%, 50%)" />
                        <stop offset="100%" stopColor="hsl(160, 84%, 39%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <p className="text-xl md:text-3xl text-muted-foreground mb-4 font-light">
                Software Developer
              </p>
              <p className="text-base md:text-lg text-muted-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                Crafting scalable backend architectures and robust APIs. Specialized in Node.js, TypeScript, 
                and modern cloud solutions. Based in Dudley, UK 🇬🇧
              </p>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <Link 
                  to="/projects" 
                  className="group px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold
                           shadow-elegant hover:shadow-hover transition-all hover:scale-105 flex items-center gap-2"
                >
                  View My Work
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="px-8 py-4 bg-muted hover:bg-muted/80 rounded-full font-semibold
                           border-2 border-border hover:border-primary transition-all hover:scale-105 flex items-center gap-2"
                >
                  <Mail size={20} />
                  Get in Touch
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={400}>
              <div className="flex justify-center gap-6">
                <a 
                  href="https://github.com/Ayooluwabami" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110 hover:shadow-elegant"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/ayobami-ekundayo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110 hover:shadow-elegant"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="https://medium.com/@ayobamieae" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110 hover:shadow-elegant"
                  aria-label="Medium"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground/40 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-8 bg-background rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-elegant group">
                <div className="inline-flex p-4 bg-primary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Code className="text-primary" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gradient">50+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="text-center p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-elegant group">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-accent" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gradient">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="text-center p-8 bg-background rounded-2xl border border-border hover:border-secondary/50 transition-all hover:shadow-elegant group">
                <div className="inline-flex p-4 bg-secondary/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Rocket className="text-secondary" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gradient">99.9%</h3>
                <p className="text-muted-foreground">API Uptime</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Build Something <span className="text-gradient">Amazing</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold
                         shadow-elegant hover:shadow-hover transition-all hover:scale-105"
              >
                Start a Conversation
                <ArrowRight size={20} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;
