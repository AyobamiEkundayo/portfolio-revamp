import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Sparkles, Rocket } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import photoshoot from '@/assets/photoshoot.jpg';
import working from '@/assets/working.jpg';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="absolute inset-0 opacity-30" 
               style={{
                 backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               }}
          />
          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
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
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  Hi, I'm{' '}
                  <span className="relative inline-block">
                    <span className="text-gradient">Ayobami</span>
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-light">
                  Backend Engineer
                </p>
                <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-xl leading-relaxed">
                  Crafting scalable backend architectures and robust APIs. Specialized in Node.js, TypeScript, 
                  and modern cloud solutions. Based in Dudley, UK 🇬🇧
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
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
                <div className="flex justify-center lg:justify-start gap-4">
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
                    href="mailto:ayobamieae@gmail.com" 
                    className="p-3 rounded-full bg-muted/50 hover:bg-muted transition-all hover:scale-110 hover:shadow-elegant"
                    aria-label="Email"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </AnimatedSection>
            </div>

            {/* Right - Profile Image */}
            <AnimatedSection delay={200}>
              <div className="relative flex justify-center lg:justify-end">
                <div className="relative">
                  {/* Decorative elements */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary to-accent rounded-3xl opacity-20" />
                  
                  {/* Main image */}
                  <div className="relative w-72 h-96 md:w-80 md:h-[28rem] rounded-3xl overflow-hidden border-2 border-border shadow-2xl">
                    <img 
                      src={photoshoot} 
                      alt="Ayobami Edun - Backend Engineer" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  
                  {/* Floating card */}
                  <div className="absolute -bottom-6 -left-6 bg-background/95 backdrop-blur-sm p-4 rounded-2xl shadow-elegant border border-border">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
                      <span className="font-medium text-sm">Open to work</span>
                    </div>
                  </div>
                </div>
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
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatedSection delay={100}>
              <div className="text-center p-8 bg-background rounded-2xl border border-border hover:border-accent/50 transition-all hover:shadow-elegant group">
                <div className="inline-flex p-4 bg-accent/10 rounded-full mb-4 group-hover:scale-110 transition-transform">
                  <Sparkles className="text-accent" size={32} />
                </div>
                <h3 className="text-4xl font-bold mb-2 text-gradient">3+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
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

      {/* Working Image Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl blur-xl" />
                <img 
                  src={working} 
                  alt="Ayobami working at desk" 
                  className="relative w-full rounded-3xl shadow-2xl border border-border"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Passionate About <span className="text-gradient">Building</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Results-oriented Backend Engineer with expertise in designing scalable architectures, 
                  optimising database performance, and integrating secure payment and authentication systems.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Experienced with MongoDB, MySQL, and PostgreSQL, with a proven ability to deliver 
                  production-ready APIs in agile environments.
                </p>
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all"
                >
                  Learn more about me
                  <ArrowRight size={20} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-muted/50" />
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
