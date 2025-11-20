import { Code, Database, Cloud, Shield, Zap, Users } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const About = () => {
  const expertise = [
    {
      icon: <Code size={32} />,
      title: "Backend Development",
      description: "Building robust, scalable backend systems with Node.js, TypeScript, and modern frameworks like NestJS, Express.js, and Restana."
    },
    {
      icon: <Database size={32} />,
      title: "Database Design",
      description: "Expert in MongoDB, MySQL, and PostgreSQL. Optimizing queries and designing efficient database schemas for high-performance applications."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud Architecture",
      description: "Deploying and managing applications on cloud platforms with CI/CD pipelines, containerization, and scalable infrastructure."
    },
    {
      icon: <Shield size={32} />,
      title: "Security & Auth",
      description: "Implementing secure authentication systems with JWT, OAuth2, and integrating payment gateways like Paystack, Stripe, and Flutterwave."
    },
    {
      icon: <Zap size={32} />,
      title: "API Development",
      description: "Creating well-documented RESTful APIs with comprehensive testing, versioning, and performance optimization."
    },
    {
      icon: <Users size={32} />,
      title: "Team Collaboration",
      description: "Experienced in agile methodologies, code reviews, and mentoring developers to deliver high-quality solutions."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              A passionate Software Developer with expertise in backend engineering, 
              building systems that make a difference.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-muted/50 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6">My Journey</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am a results-oriented Backend Engineer with a strong foundation in JavaScript, TypeScript, 
                  and backend frameworks like Node.js, Restana, NestJS, and Express.js. My passion lies in 
                  building secure, scalable, and user-centric applications with robust database management 
                  using MongoDB, MySQL, and PostgreSQL.
                </p>
                <p>
                  With experience developing RESTful APIs, payment integrations, and role-based access systems, 
                  I maintain high standards for security and performance. I excel in collaborative environments 
                  and have a proven record of delivering impactful technical solutions.
                </p>
                <p>
                  Currently based in Dudley, West Midlands, UK, I work remotely with teams across the globe, 
                  bringing ideas to life through clean, efficient code and thoughtful architecture.
                </p>
                <p>
                  Beyond software development, I have a unique background in automotive technology, which has 
                  taught me the importance of precision, diagnostics, and problem-solving—skills that translate 
                  perfectly into backend engineering.
                </p>
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
                  className="group p-8 bg-background rounded-2xl border border-border hover:border-primary/50 
                           transition-all hover:shadow-elegant hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-4 text-primary 
                                group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Personal Touch */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 border border-border">
              <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I believe in continuous learning and giving back to the community. I've mentored over 50 
                  teenagers in various technical and leadership roles, and I'm passionate about creating 
                  inclusive environments where everyone can thrive.
                </p>
                <p>
                  When I'm not coding, you might find me exploring the intersection of technology and automotive 
                  innovation, writing technical articles on Medium, or contributing to open-source projects.
                </p>
                <p>
                  I'm always eager to take on new challenges and collaborate on projects that push the boundaries 
                  of what's possible with technology.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default About;
