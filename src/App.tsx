import { useState, useEffect } from 'react';
import './index.css';
import { Github, Linkedin, Mail, Code, Sun, Moon, MapPin, Phone, ExternalLink, ChevronDown, Database, Server, Braces } from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import SkillBadge from './components/SkillBadge';
import CVSection from './components/CVSection';
import AnimatedSection from './components/AnimatedSection';
import Logo from './components/Logo';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Dark Mode Toggle */}
      <button
        className="fixed bottom-6 right-6 z-50 p-4 bg-primary text-primary-foreground rounded-full 
                 shadow-elegant hover:shadow-hover transition-all hover:scale-110"
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      {/* Floating Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border shadow-sm py-3' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
          <a href="#" className="hover:scale-105 transition-transform duration-300">
            <Logo size="md" />
          </a>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">About</a>
            <a href="#projects" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Projects</a>
            <a href="#skills" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">Skills</a>
            <a href="#cv" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">CV</a>
            <a 
              href="#contact" 
              className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold
                       hover:shadow-elegant transition-all hover:scale-105"
            >
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: "radial-gradient(circle at 20% 50%, hsl(210 100% 50% / 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(160 84% 39% / 0.1) 0%, transparent 50%)",
               }}
          />
        </div>

        <div className="container mx-auto px-4 z-10 pt-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                </span>
                Available for opportunities
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up">
              Hi, I'm <span className="text-gradient">Ayobami</span>
            </h1>
            
            <p className="text-xl md:text-3xl mb-4 text-muted-foreground animate-slide-up" style={{animationDelay: '0.1s'}}>
              Software Developer
            </p>

            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-slide-up" 
               style={{animationDelay: '0.2s'}}>
              Crafting robust backend systems and scalable architectures. Specialized in Node.js, TypeScript, 
              and RESTful API development with a passion for clean code and innovative solutions.
            </p>

            <div className="flex justify-center gap-4 mb-12 animate-slide-up" style={{animationDelay: '0.3s'}}>
              <a 
                href="https://github.com/Ayooluwabami" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110" 
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/ayobami-ekundayo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110" 
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="https://medium.com/@ayobamieae" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110" 
                aria-label="Medium Blog"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
              <a 
                href="mailto:ayobamieae@gmail.com" 
                className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-all hover:scale-110" 
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{animationDelay: '0.4s'}}>
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold
                         hover:shadow-hover transition-all hover:scale-105 flex items-center gap-2"
              >
                View My Work
                <ChevronDown size={20} />
              </button>
              <a
                href="#contact"
                className="px-8 py-4 bg-muted text-foreground rounded-full font-semibold
                         hover:bg-accent hover:text-accent-foreground transition-all hover:scale-105"
              >
                Get In Touch
              </a>
            </div>

            {/* Location Badge */}
            <div className="mt-12 flex justify-center items-center gap-6 text-sm text-muted-foreground animate-fade-in">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Dudley, West Midlands, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink size={16} className="text-primary" />
                <a href="https://my-portfolio-iota-hazel.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  my-portfolio-iota-hazel.vercel.app
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-muted-foreground" />
        </div>
      </header>

      {/* About Section */}
      <section className="py-32 bg-muted/30" id="about">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase text-center">About Me</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                Building digital solutions <br className="hidden md:block" />that <span className="text-gradient">matter</span>
              </h2>
              <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg">
                Passionate about building scalable systems and solving complex problems
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                <div className="group p-10 rounded-2xl bg-background border border-border hover:border-primary/50 
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant text-center">
                  <Code className="mx-auto mb-6 text-primary group-hover:scale-110 transition-transform" size={48} />
                  <h3 className="font-bold text-xl mb-3">Backend Development</h3>
                  <p className="text-muted-foreground leading-relaxed">Building robust and scalable server-side applications</p>
                </div>

                <div className="group p-10 rounded-2xl bg-background border border-border hover:border-primary/50 
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant text-center">
                  <svg className="mx-auto mb-6 text-secondary group-hover:scale-110 transition-transform" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                  <h3 className="font-bold text-xl mb-3">API Architecture</h3>
                  <p className="text-muted-foreground leading-relaxed">Designing RESTful APIs and microservices</p>
                </div>

                <div className="group p-10 rounded-2xl bg-background border border-border hover:border-primary/50 
                            transition-all duration-300 hover:-translate-y-2 hover:shadow-elegant text-center">
                  <svg className="mx-auto mb-6 text-accent group-hover:scale-110 transition-transform" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="3" y1="9" x2="21" y2="9"/>
                    <line x1="9" y1="21" x2="9" y2="9"/>
                  </svg>
                  <h3 className="font-bold text-xl mb-3">Database Design</h3>
                  <p className="text-muted-foreground leading-relaxed">Optimizing data structures and queries</p>
                </div>
              </div>

              <div className="bg-background p-10 md:p-16 rounded-3xl shadow-elegant border border-border">
                <p className="text-muted-foreground leading-relaxed text-xl mb-6">
                  I am a passionate <span className="font-semibold text-foreground">Backend Engineer</span> with a solid foundation in 
                  JavaScript, TypeScript, and backend frameworks like Node.js, NestJS, and ExpressJS. 
                </p>
                <p className="text-muted-foreground leading-relaxed text-xl">
                  Experienced in building secure, scalable, and user-centric applications with robust database 
                  management using MongoDB, MySQL, and PostgreSQL. Adept at developing RESTful APIs, payment integrations, 
                  and role-based access systems while maintaining high standards for security and performance. 
                  Excels in collaborative environments and has a proven record of delivering impactful technical solutions.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-background">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase text-center">Portfolio</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg">
              A selection of projects showcasing my technical expertise and problem-solving abilities
            </p>
          </AnimatedSection>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              <AnimatedSection delay={100}>
                <ProjectCard
                  title="Jotem Agro"
                  description="A comprehensive agricultural platform connecting farmers with markets, providing real-time pricing, and facilitating seamless transactions for agricultural products."
                  tech={["React", "Node.js", "TypeScript", "Tailwind CSS"]}
                  link="https://www.jotemagro.com/"
                  featured
                />
              </AnimatedSection>

              <AnimatedSection delay={150}>
                <ProjectCard
                  title="DriveWell App"
                  description="Backend infrastructure for a driver wellness and performance tracking application, featuring real-time monitoring, analytics, and comprehensive reporting systems."
                  tech={["Node.js", "Restana", "MySQL", "Redis"]}
                  link="https://www.drivewellapp.com/"
                  github="https://github.com/Ayooluwabami"
                  featured
                />
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <ProjectCard
                  title="CarCare API"
                  description="RESTful API for managing users, mechanics, and services in a car care application with comprehensive authentication and authorization."
                  tech={["Express.js", "TypeScript", "MongoDB"]}
                  link="https://github.com/Ayooluwabami/carcare"
                  github="https://github.com/Ayooluwabami/carcare"
                />
              </AnimatedSection>

              <AnimatedSection delay={250}>
                <ProjectCard
                  title="Spurt Gaming Website"
                  description="Real-time platform enabling secure game matchmaking, payments, and user interactions with responsive design."
                  tech={["React", "Vue.js", "TypeScript", "Tailwind CSS"]}
                  link="https://spurt-games-two.vercel.app/"
                />
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <ProjectCard
                  title="AnythingCar"
                  description="GPS-based car hire platform with armed security escort options and marketplace for vehicles and spare parts."
                  tech={["Express.js", "TypeScript", "MongoDB"]}
                  link="https://github.com/Ayooluwabami/anythingcar"
                  github="https://github.com/Ayooluwabami/anythingcar"
                />
              </AnimatedSection>

              <AnimatedSection delay={350}>
                <ProjectCard
                  title="Scissor URL Shortener"
                  description="URL shortening service with custom URLs, QR code generation, and comprehensive analytics tracking."
                  tech={["Node.js", "Express.js", "MongoDB"]}
                  link="https://github.com/Ayooluwabami/scissor-backend"
                  github="https://github.com/Ayooluwabami/scissor-backend"
                />
              </AnimatedSection>

              <AnimatedSection delay={400}>
                <ProjectCard
                  title="Restaurant Chatbot"
                  description="Intelligent chatbot for discovering nearby restaurants with reviews, ratings, and personalized recommendations."
                  tech={["React", "Node.js", "MySQL"]}
                  link="https://github.com/Ayooluwabami/restaurant_chatbot"
                  github="https://github.com/Ayooluwabami/restaurant_chatbot"
                />
              </AnimatedSection>

              <AnimatedSection delay={450}>
                <ProjectCard
                  title="Blogging API"
                  description="RESTful web service for managing blogs with user authentication and comprehensive CRUD operations."
                  tech={["Node.js", "Express.js", "MongoDB"]}
                  link="https://github.com/Ayooluwabami/Blogging-API"
                  github="https://github.com/Ayooluwabami/Blogging-API"
                />
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <ProjectCard
                  title="Library Management System"
                  description="Complete library system with book borrowing, return tracking, and session management using MongoDB."
                  tech={["Express.js", "MongoDB", "Mongoose"]}
                  link="https://github.com/Ayooluwabami/library-management-system"
                  github="https://github.com/Ayooluwabami/library-management-system"
                />
              </AnimatedSection>
            </div>

            <AnimatedSection delay={550}>
              <div className="text-center mt-12">
                <a
                  href="https://github.com/Ayooluwabami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-muted hover:bg-primary 
                           hover:text-primary-foreground rounded-full font-semibold transition-all hover:scale-105"
                >
                  <Github size={20} />
                  View All Projects on GitHub
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-32 bg-muted/30" id="skills">
        <div className="container mx-auto px-6 md:px-8">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase text-center">Tech Stack</p>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg">
              Technologies and tools I work with to build exceptional software
            </p>
          </AnimatedSection>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              <AnimatedSection delay={100}><SkillBadge name="Node.js" icon={<Server />} category="Runtime" /></AnimatedSection>
              <AnimatedSection delay={120}><SkillBadge name="Express.js" icon={<Server />} category="Framework" /></AnimatedSection>
              <AnimatedSection delay={140}><SkillBadge name="NestJS" icon={<Server />} category="Framework" /></AnimatedSection>
              <AnimatedSection delay={160}><SkillBadge name="TypeScript" icon={<Code />} category="Language" /></AnimatedSection>
              <AnimatedSection delay={180}><SkillBadge name="JavaScript" icon={<Braces />} category="Language" /></AnimatedSection>
              <AnimatedSection delay={200}><SkillBadge name="React" icon={<Code />} category="Frontend" /></AnimatedSection>
              <AnimatedSection delay={220}><SkillBadge name="MongoDB" icon={<Database />} category="Database" /></AnimatedSection>
              <AnimatedSection delay={240}><SkillBadge name="MySQL" icon={<Database />} category="Database" /></AnimatedSection>
              <AnimatedSection delay={260}><SkillBadge name="PostgreSQL" icon={<Database />} category="Database" /></AnimatedSection>
              <AnimatedSection delay={280}><SkillBadge name="Redis" icon={<Database />} category="Cache" /></AnimatedSection>
              <AnimatedSection delay={300}><SkillBadge name="Git" icon={<Github />} category="Version Control" /></AnimatedSection>
              <AnimatedSection delay={320}><SkillBadge name="Postman" icon={<ExternalLink />} category="API Testing" /></AnimatedSection>
              <AnimatedSection delay={340}><SkillBadge name="Swagger" icon={<ExternalLink />} category="Documentation" /></AnimatedSection>
              <AnimatedSection delay={360}><SkillBadge name="Vite" icon={<Code />} category="Build Tool" /></AnimatedSection>
              <AnimatedSection delay={380}><SkillBadge name="HTML & CSS" icon={<Code />} category="Frontend" /></AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CV Section */}
      <CVSection />

      {/* Contact Section */}
      <section className="py-32 bg-background" id="contact">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="text-sm font-semibold text-primary mb-4 tracking-wide uppercase text-center">Get In Touch</p>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
                Let's Work <span className="text-gradient">Together</span>
              </h2>
              <p className="text-center text-muted-foreground mb-20 max-w-2xl mx-auto text-lg">
                Interested in collaborating or have a project in mind? I'd love to hear from you.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-3 gap-6">
              <AnimatedSection delay={100}>
                <div className="p-10 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 hover:shadow-elegant transition-all hover:-translate-y-2 text-center">
                  <Phone className="mx-auto mb-6 text-primary" size={40} />
                  <h3 className="font-bold text-lg mb-3">Phone</h3>
                  <a href="tel:+447867027428" className="text-muted-foreground hover:text-primary transition-colors">
                    +44 7867 027428
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="p-10 rounded-2xl bg-muted/50 border border-border hover:border-secondary/50 hover:shadow-elegant transition-all hover:-translate-y-2 text-center">
                  <MapPin className="mx-auto mb-6 text-secondary" size={40} />
                  <h3 className="font-bold text-lg mb-3">Location</h3>
                  <p className="text-muted-foreground">Dudley, West Midlands, UK</p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="p-10 rounded-2xl bg-muted/50 border border-border hover:border-accent/50 hover:shadow-elegant transition-all hover:-translate-y-2 text-center">
                  <Mail className="mx-auto mb-6 text-accent" size={40} />
                  <h3 className="font-bold text-lg mb-3">Email</h3>
                  <a href="mailto:ayobamieae@gmail.com" className="text-muted-foreground hover:text-accent transition-colors">
                    ayobamieae@gmail.com
                  </a>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection delay={400}>
              <div className="mt-16 text-center">
                <a
                  href="mailto:ayobamieae@gmail.com"
                  className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground 
                           rounded-full font-semibold text-lg hover:shadow-hover transition-all hover:scale-105"
                >
                  <Mail size={20} />
                  Send Me an Email
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2025 Ayobami Ekundayo. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="https://github.com/Ayooluwabami" target="_blank" rel="noopener noreferrer" 
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ayobami-ekundayo" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://medium.com/@ayobamieae" target="_blank" rel="noopener noreferrer"
                 className="text-muted-foreground hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
