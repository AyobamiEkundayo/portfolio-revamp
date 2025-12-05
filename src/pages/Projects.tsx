import { useState } from 'react';
import { Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "DriveWell Backend",
      description: "Backend infrastructure for a driver wellness and car documentation platform serving Nigerian users. Built high-performance APIs handling payments, document management, and real-time analytics with Redis caching.",
      tech: ["Node.js", "Restana", "TypeScript", "MySQL", "Redis", "Google Cloud", "Paystack", "Piggyvest"],
      link: "https://www.drivewellapp.com/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "backend",
      role: "Lead Backend Developer",
      impact: "99.9% transaction accuracy, 20% faster load times"
    },
    {
      title: "SchoolHub Nigeria",
      description: "Multi-tenant SaaS platform backend serving 50+ educational institutions across Nigeria. Architected microservices for student management, grading, and administrative workflows with secure role-based access.",
      tech: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "JWT", "Docker"],
      link: "https://github.com/Ayooluwabami",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "backend",
      role: "Lead Backend Developer at AI4AI",
      impact: "30% performance improvement, 40% fewer security incidents"
    },
    {
      title: "Jote Magro E-commerce",
      description: "Comprehensive e-commerce platform with advanced product management, secure Stripe payment integration, real-time inventory tracking, and optimized checkout flows.",
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Express.js"],
      link: "https://www.jotemagro.com/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "fullstack"
    },
    {
      title: "Spurt Gaming Platform",
      description: "Real-time gaming platform with secure matchmaking, integrated payment systems, and interactive user experiences. Features responsive design with real-time WebSocket updates.",
      tech: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "Node.js", "WebSocket"],
      link: "https://spurt-games-two.vercel.app/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "fullstack"
    },
    {
      title: "CarCare API",
      description: "RESTful API for managing users, mechanics, and services in a car care application. Features role-based access control, service booking, and mechanic scheduling.",
      tech: ["Express.js", "TypeScript", "MongoDB", "JWT"],
      link: "https://github.com/Ayooluwabami/carcare",
      github: "https://github.com/Ayooluwabami/carcare",
      category: "backend"
    },
    {
      title: "AnythingCar Platform",
      description: "GPS-based car hire platform with mobile app integration. Allows vehicle owners to register cars for hire with armed security escort options and a marketplace for cars and spare parts.",
      tech: ["Express.js", "TypeScript", "MongoDB", "GPS API"],
      link: "https://github.com/Ayooluwabami/anythingcar",
      github: "https://github.com/Ayooluwabami/anythingcar",
      category: "backend"
    },
    {
      title: "Scissor URL Shortener",
      description: "URL shortening service with custom URLs, QR code generation, and comprehensive analytics dashboard. Includes click tracking and geographic data.",
      tech: ["Node.js", "Express.js", "MongoDB", "QR Generation"],
      link: "https://github.com/Ayooluwabami/scissor-backend",
      github: "https://github.com/Ayooluwabami/scissor-backend",
      category: "backend"
    },
    {
      title: "Restaurant Chatbot",
      description: "Intelligent chatbot for discovering nearby restaurants with reviews and ratings. Features natural language processing and location-based search.",
      tech: ["React", "Node.js", "MySQL", "NLP"],
      link: "https://github.com/Ayooluwabami/restaurant_chatbot",
      github: "https://github.com/Ayooluwabami/restaurant_chatbot",
      category: "fullstack"
    },
    {
      title: "Blogging API",
      description: "RESTful web service for blog management and user authentication. CRUD operations with comprehensive Swagger documentation.",
      tech: ["Node.js", "Express.js", "MongoDB", "Swagger"],
      link: "https://github.com/Ayooluwabami/Blogging-API",
      github: "https://github.com/Ayooluwabami/Blogging-API",
      category: "backend"
    },
    {
      title: "Library Management System",
      description: "Comprehensive library system with book borrowing, return tracking, user authentication, and session management.",
      tech: ["Express.js", "MongoDB", "Mongoose", "JWT"],
      link: "https://github.com/Ayooluwabami/library-management-system",
      github: "https://github.com/Ayooluwabami/library-management-system",
      category: "backend"
    }
  ];

  const categories = [
    { value: 'all', label: 'All Projects' },
    { value: 'featured', label: 'Featured' },
    { value: 'backend', label: 'Backend' },
    { value: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = projects.filter(project => {
    if (filter === 'all') return true;
    if (filter === 'featured') return project.featured;
    return project.category === filter;
  });

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-sm font-medium text-primary mb-4 tracking-wider uppercase">Portfolio</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Real-world projects showcasing expertise in backend development, API architecture, 
              and scalable system design.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection delay={100}>
          <div className="max-w-5xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.value
                      ? 'bg-primary text-primary-foreground shadow-elegant'
                      : 'bg-muted/50 hover:bg-muted text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 50}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-3xl mx-auto mt-20 text-center">
            <div className="p-8 md:p-10 bg-gradient-to-br from-primary/5 via-muted/50 to-secondary/5 rounded-2xl border border-border">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Want to See More?</h2>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub profile for more projects, contributions, and open-source work.
              </p>
              <a
                href="https://github.com/Ayooluwabami"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                <Github size={20} />
                View GitHub Profile
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;