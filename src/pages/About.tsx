import { Code, Database, Cloud, Shield, Zap, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import working from '@/assets/working.jpg';
import photoshoot from '@/assets/photoshoot.jpg';

const About = () => {
  const expertise = [
    {
      icon: <Code size={28} />,
      title: "Backend Development",
      description: "Building robust, scalable backend systems with Node.js, TypeScript, and modern frameworks like NestJS, Express.js, and Restana."
    },
    {
      icon: <Database size={28} />,
      title: "Database Design",
      description: "Expert in MongoDB, MySQL, and PostgreSQL. Optimizing queries and designing efficient database schemas for high-performance applications."
    },
    {
      icon: <Cloud size={28} />,
      title: "Cloud Architecture",
      description: "Deploying and managing applications on cloud platforms with CI/CD pipelines, containerization, and scalable infrastructure."
    },
    {
      icon: <Shield size={28} />,
      title: "Security & Auth",
      description: "Implementing secure authentication systems with JWT, OAuth2, and integrating payment gateways like Paystack, Stripe, and Flutterwave."
    },
    {
      icon: <Zap size={28} />,
      title: "API Development",
      description: "Creating well-documented RESTful APIs with comprehensive testing, versioning, and performance optimization."
    },
    {
      icon: <Users size={28} />,
      title: "Team Collaboration",
      description: "Experienced in agile methodologies, code reviews, and mentoring developers to deliver high-quality solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate Backend Engineer with expertise in building systems that make a difference.
            </p>
          </div>
        </AnimatedSection>

        {/* Profile Section */}
        <AnimatedSection delay={100}>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
                <div className="relative">
                  <img 
                    src={photoshoot} 
                    alt="Ayobami Edun" 
                    className="w-full rounded-3xl shadow-2xl border border-border"
                  />
                  {/* Decorative card */}
                  <div className="absolute -bottom-6 -right-6 bg-background p-4 rounded-2xl shadow-elegant border border-border">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-gradient">3+</p>
                      <p className="text-sm text-muted-foreground">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">My Journey</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I am a results-oriented Backend Engineer with a strong foundation in JavaScript, TypeScript, 
                    and backend frameworks like Node.js, Restana, NestJS, and Express.js.
                  </p>
                  <p>
                    My passion lies in building secure, scalable, and user-centric applications with robust 
                    database management using MongoDB, MySQL, and PostgreSQL.
                  </p>
                  <p>
                    Currently based in Dudley, West Midlands, UK, I work remotely with teams across the globe, 
                    bringing ideas to life through clean, efficient code and thoughtful architecture.
                  </p>
                </div>
                
                {/* Quick stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-gradient">99.9%</p>
                    <p className="text-sm text-muted-foreground">API Uptime</p>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="text-2xl font-bold text-gradient">50+</p>
                    <p className="text-sm text-muted-foreground">Mentees Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Expertise Grid */}
        <AnimatedSection delay={200}>
          <div className="max-w-6xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Areas of <span className="text-gradient">Expertise</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertise.map((item, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-background rounded-2xl border border-border hover:border-primary/50 
                           transition-all hover:shadow-elegant hover:-translate-y-1"
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 text-primary 
                                group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Working Image Section */}
        <AnimatedSection delay={300}>
          <div className="max-w-6xl mx-auto mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 space-y-6">
                <h2 className="text-3xl font-bold">Beyond the Code</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I believe in continuous learning and giving back to the community. I've mentored over 50 
                    teenagers in various technical and leadership roles, and I'm passionate about creating 
                    inclusive environments where everyone can thrive.
                  </p>
                  <p>
                    Beyond software development, I have a unique background in automotive technology, which has 
                    taught me the importance of precision, diagnostics, and problem-solving—skills that translate 
                    perfectly into backend engineering.
                  </p>
                  <p>
                    When I'm not coding, you might find me exploring the intersection of technology and innovation, 
                    writing technical articles, or contributing to open-source projects.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl" />
                <img 
                  src={working} 
                  alt="Ayobami working" 
                  className="relative w-full rounded-3xl shadow-2xl border border-border"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Education & Certifications */}
        <AnimatedSection delay={400}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-8 text-center">Education & Certifications</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-background/50 rounded-xl border border-border">
                  <p className="font-semibold">Introduction to Cybersecurity</p>
                  <p className="text-sm text-muted-foreground">Cisco Networking Academy • 2025</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-border">
                  <p className="font-semibold">Diploma in Backend Engineering</p>
                  <p className="text-sm text-muted-foreground">AltSchool Africa • 2024</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-border">
                  <p className="font-semibold">JavaScript Essentials</p>
                  <p className="text-sm text-muted-foreground">Cisco & JS Institute • 2024</p>
                </div>
                <div className="p-4 bg-background/50 rounded-xl border border-border">
                  <p className="font-semibold">B.A. Religious Studies (2:1)</p>
                  <p className="text-sm text-muted-foreground">University of Ibadan • 2019</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
