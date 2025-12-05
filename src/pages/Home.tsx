import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowRight, Download, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import photoshoot from '@/assets/photoshoot.jpg';

const Home = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 100, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          {/* Gradient orbs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-float-delayed" />
          <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] bg-accent/10 rounded-full blur-[80px] animate-float" />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
               style={{
                 backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
                 backgroundSize: '60px 60px'
               }}
          />
        </div>

        <div className="container mx-auto px-6 z-10 pt-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-muted/50 backdrop-blur-sm rounded-full text-sm font-medium border border-border">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                  </span>
                  Open to opportunities
                </span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight"
              >
                Hi, I'm{' '}
                <span className="text-gradient">Ayobami</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <p className="text-lg sm:text-xl text-muted-foreground mb-2 font-medium">
                  Backend Engineer • API Architect • System Designer
                </p>
                <p className="text-muted-foreground mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                  I build scalable, high-performance backend systems in{' '}
                  <span className="text-foreground font-medium">Node.js</span>,{' '}
                  <span className="text-foreground font-medium">TypeScript</span>,{' '}
                  <span className="text-foreground font-medium">NestJS</span>,{' '}
                  and cloud platforms. Based in the UK 🇬🇧
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              >
                <Link to="/projects" className="btn-primary flex items-center gap-2">
                  View Projects
                  <ArrowRight size={18} />
                </Link>
                <Link to="/cv" className="btn-secondary flex items-center gap-2">
                  <Download size={18} />
                  Download CV
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center lg:justify-start gap-3"
              >
                {[
                  { href: "https://github.com/Ayooluwabami", icon: <Github size={20} />, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/ayobami-ekundayo", icon: <Linkedin size={20} />, label: "LinkedIn" },
                  { href: "mailto:ayobamieae@gmail.com", icon: <Mail size={20} />, label: "Email" }
                ].map((social) => (
                  <a 
                    key={social.label}
                    href={social.href} 
                    target={social.href.startsWith('http') ? "_blank" : undefined}
                    rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="p-3 rounded-xl bg-muted/50 hover:bg-primary hover:text-primary-foreground 
                             transition-all duration-300 border border-border hover:border-primary"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Right - Profile Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative flex justify-center order-1 lg:order-2"
            >
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-3xl blur-2xl" />
                
                {/* Main image */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-96 rounded-2xl overflow-hidden border border-border shadow-2xl">
                  <img 
                    src={photoshoot} 
                    alt="Ayobami Edun - Backend Engineer" 
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                </div>
                
                {/* Status card */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -left-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-elegant border border-border"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                    <span className="text-sm font-medium">Available for hire</span>
                  </div>
                </motion.div>

                {/* Experience badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7 }}
                  className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-sm px-4 py-3 rounded-xl shadow-elegant border border-border"
                >
                  <p className="text-2xl font-bold text-gradient">3+</p>
                  <p className="text-xs text-muted-foreground">Years Exp.</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={scrollToContent}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
        >
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown size={20} className="animate-bounce" />
        </motion.button>
      </section>

      {/* About Preview Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">About Me</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Results-oriented Backend Engineer building systems that{' '}
                <span className="text-gradient">make a difference</span>
              </h2>
            </AnimatedSection>
            
            <AnimatedSection delay={100}>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With expertise in JavaScript, TypeScript, and modern frameworks like NestJS, Express.js, and Restana, 
                I specialize in designing scalable architectures, optimizing database performance, and integrating 
                secure payment and authentication systems. I've delivered production-ready APIs achieving{' '}
                <span className="text-foreground font-semibold">99.9% transaction accuracy</span> and{' '}
                <span className="text-foreground font-semibold">25% faster response times</span>.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { value: "99.9%", label: "API Uptime" },
                  { value: "50+", label: "Institutions Served" },
                  { value: "30%", label: "Performance Gain" },
                  { value: "40%", label: "Security Improved" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-background rounded-xl border border-border">
                    <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <div className="mt-8 flex justify-center">
                <Link 
                  to="/about" 
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all link-underline"
                >
                  Learn more about my journey
                  <ArrowRight size={18} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Let's Build Something <span className="text-gradient">Amazing</span> Together
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2">
                  Start a Conversation
                  <ArrowRight size={18} />
                </Link>
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
      </section>
    </div>
  );
};

export default Home;