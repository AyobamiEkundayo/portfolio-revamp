import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import AnimatedSection from '../components/AnimatedSection';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: "Jote Magro",
      description: "A comprehensive e-commerce platform with advanced product management, secure payment integration, and real-time inventory tracking. Built with modern web technologies for optimal performance.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "https://www.jotemagro.com/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "fullstack"
    },
    {
      title: "DriveWell App",
      description: "Backend infrastructure for a driver wellness and performance tracking application. Features real-time monitoring, comprehensive analytics, payment processing with Paystack integration, Redis caching, and Google Cloud Storage for document management. Built with Restana for high-performance API handling.",
      tech: ["Node.js", "Restana", "TypeScript", "MySQL", "Redis", "Google Cloud", "Paystack"],
      link: "https://www.drivewellapp.com/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "backend"
    },
    {
      title: "CarCare",
      description: "A RESTful API designed for managing users, mechanics, and services in a car care application. Allows users to register, log in, and perform various operations related to mechanics and services with role-based access control.",
      tech: ["Express.js", "TypeScript", "MongoDB"],
      link: "https://github.com/Ayooluwabami/carcare",
      github: "https://github.com/Ayooluwabami/carcare",
      featured: true,
      category: "backend"
    },
    {
      title: "Spurt Gaming Website",
      description: "A real-time gaming platform enabling secure game matchmaking, integrated payment systems, and interactive user experiences. Features responsive design and real-time updates.",
      tech: ["React", "TypeScript", "Vue.js", "Tailwind CSS", "Node.js"],
      link: "https://spurt-games-two.vercel.app/",
      github: "https://github.com/Ayooluwabami",
      featured: true,
      category: "fullstack"
    },
    {
      title: "AnythingCar",
      description: "GPS-based car hire platform with mobile app and website. Targets Nigerian market, allowing vehicle owners to register cars from 2007+ for hire with armed security escort options. Includes marketplace for cars and spare parts.",
      tech: ["Express.js", "TypeScript", "MongoDB", "GPS Integration"],
      link: "https://github.com/Ayooluwabami/anythingcar",
      github: "https://github.com/Ayooluwabami/anythingcar",
      featured: false,
      category: "backend"
    },
    {
      title: "Scissor URL Shortener",
      description: "URL-shortening service that allows users to shorten URLs, create custom URLs, generate QR codes, and track analytics with comprehensive dashboard and API documentation.",
      tech: ["Node.js", "Express.js", "MongoDB", "QR Generation"],
      link: "https://github.com/Ayooluwabami/scissor-backend",
      github: "https://github.com/Ayooluwabami/scissor-backend",
      featured: false,
      category: "backend"
    },
    {
      title: "Restaurant Chatbot",
      description: "Intelligent chatbot application to discover nearby restaurants with reviews and ratings. Features natural language processing and location-based search.",
      tech: ["React", "Node.js", "MySQL", "NLP"],
      link: "https://github.com/Ayooluwabami/restaurant_chatbot",
      github: "https://github.com/Ayooluwabami/restaurant_chatbot",
      featured: false,
      category: "fullstack"
    },
    {
      title: "Blogging API",
      description: "RESTful web service providing endpoints for managing blogs and user authentication. Allows users to create, read, update, and delete blogs with comprehensive API documentation.",
      tech: ["Node.js", "Express.js", "MongoDB"],
      link: "https://github.com/Ayooluwabami/Blogging-API",
      github: "https://github.com/Ayooluwabami/Blogging-API",
      featured: false,
      category: "backend"
    },
    {
      title: "Library Management System",
      description: "Comprehensive library management system with CRUD operations, user registration and authentication, book borrowing and return tracking, and session expiration management.",
      tech: ["Express.js", "MongoDB", "Mongoose"],
      link: "https://github.com/Ayooluwabami/library-management-system",
      github: "https://github.com/Ayooluwabami/library-management-system",
      featured: false,
      category: "backend"
    },
    {
      title: "Birthday Reminder App",
      description: "Birthday reminder application with notification system, user management, and automated email reminders for upcoming birthdays.",
      tech: ["Express.js", "TypeScript", "MySQL"],
      link: "https://github.com/Ayooluwabami/birthday_reminder_app",
      github: "https://github.com/Ayooluwabami/birthday_reminder_app",
      featured: false,
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
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              My <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A collection of projects showcasing my expertise in backend development, 
              full-stack applications, and scalable architecture.
            </p>
          </div>
        </AnimatedSection>

        {/* Filter */}
        <AnimatedSection delay={100}>
          <div className="max-w-6xl mx-auto mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter size={16} />
                <span className="font-medium">Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setFilter(category.value)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    filter === category.value
                      ? 'bg-primary text-primary-foreground shadow-elegant'
                      : 'bg-muted hover:bg-muted/80 border border-border hover:border-primary/50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <AnimatedSection key={project.title} delay={index * 100}>
                <ProjectCard {...project} />
              </AnimatedSection>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No projects found in this category.</p>
            </div>
          )}
        </div>

        {/* GitHub CTA */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-4">Want to See More?</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Check out my GitHub profile for more projects and contributions.
              </p>
              <a
                href="https://github.com/Ayooluwabami"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold
                         shadow-elegant hover:shadow-hover transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View GitHub Profile
              </a>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
