import { Briefcase, GraduationCap, Award, Heart, Download, MapPin, Mail, Phone } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const CV = () => {
  const experiences = [
    {
      title: "Lead Backend Developer",
      company: "Ebidhaa Services",
      period: "Feb. 2025 – Present",
      location: "Remote",
      highlights: [
        "Building backend infrastructure for a car hire and documentation service platform, supporting both web and mobile applications",
        "Integrated Paystack and Piggyvest APIs for secure payments and real-time webhook processing, achieving 99.9% transaction accuracy",
        "Automated order tracking and document uploads using Google Cloud Storage, improving system reliability and user experience",
        "Enhanced user management workflows with bcrypt-based password hashing and efficient single-query database lookups, cutting load time by 20%"
      ]
    },
    {
      title: "Lead Backend Developer",
      company: "African Institute for Artificial Intelligence (AI4AI)",
      period: "April 2025 – August 2025",
      location: "Remote",
      highlights: [
        "Architected and deployed the backend architecture for SchoolHub Nigeria, a multi-tenant SaaS platform serving over 50+ educational institutions across Nigeria",
        "Developed modular microservices in NestJS and PostgreSQL, improving performance scalability by 30%",
        "Implemented secure authentication and role-based access control, reducing unauthorized access attempts by 40%",
        "Optimized database queries and cache strategy using Redis, enhancing API response times by 25%"
      ]
    },
    {
      title: "Support Staff (Diagnostics & Training)",
      company: "Auto Clinic, Ibadan",
      period: "July 2021 – Aug. 2024",
      location: "Nigeria",
      highlights: [
        "Conducted computerized vehicle diagnostics and maintenance scheduling for an average of 25+ vehicles weekly",
        "Led summer workshops training over 50 teenagers on automotive diagnostics and repair fundamentals",
        "Authored weekly educational automotive articles for 'Gist with the Mechanic' radio segment on Splash FM"
      ]
    },
    {
      title: "Fleet Supervisor",
      company: "Metro Africa Express (MAX), Ibadan",
      period: "Mar. 2021 - June 2021",
      location: "Nigeria",
      highlights: [
        "Managed the refurbishment of 100+ motorcycles, streamlining maintenance and cutting spare parts costs by 5%",
        "Oversaw inventory and GPS tracker installations, improving asset visibility and operational efficiency"
      ]
    }
  ];

  const volunteerExperience = [
    {
      role: "Acting Assistant Head & Unit Lead (Media, Choir & Technical)",
      organization: "Global Harvest Teens Church, Agodi, Ibadan",
      period: "July 2021 – Sep. 2024",
      highlights: [
        "Supervised and mentored 50+ teenagers, fostering leadership, creativity, and collaboration",
        "Designed impactful programs and digital media initiatives to enhance youth engagement",
        "Served as administrative staff, organising meetings, setting reminders, and tracking assigned duties to ensure accountability",
        "Took minutes during leadership sessions, coordinated activities, services, and games to maintain smooth operations",
        "Oversaw and chaired meetings in the absence of the Head of Ministry to ensure continuity of leadership",
        "Maintained accurate records of all teenagers and volunteer staff for effective follow-up and planning"
      ]
    },
    {
      role: "Researcher & Volunteer",
      organization: "REES Africa",
      period: "Jan. 2022 – Sep. 2023",
      highlights: [
        "Coordinated literacy drives, led material donation campaigns, and promoted environmental sustainability initiatives"
      ]
    },
    {
      role: "Assistant General Secretary",
      organization: "Nigeria Christian Corpers' Fellowship (NCCF)",
      period: "Aug. 2019 – Feb. 2020",
      highlights: [
        "Supported administrative operations and coordinated state-wide zonal events for over 50 members"
      ]
    },
    {
      role: "Vice President",
      organization: "Nigeria Fellowship of Evangelical Students (NIFES)",
      period: "April 2018 – May 2019",
      highlights: [
        "Managed finances, facilitated leadership training, and strengthened alumni relations to enhance institutional impact"
      ]
    }
  ];

  const education = [
    {
      degree: "Introduction to Cybersecurity Certification",
      school: "Cisco Networking Academy",
      year: "2025"
    },
    {
      degree: "Diploma in Backend Engineering",
      school: "AltSchool Africa, School of Engineering",
      year: "2024"
    },
    {
      degree: "JavaScript Essentials",
      school: "Cisco & JS Institute",
      year: "2024"
    },
    {
      degree: "Diploma in Automotive Technology",
      school: "Auto Clinic Academy",
      year: "2024",
      grade: "Distinction"
    },
    {
      degree: "Technical Modular Trade Certification",
      school: "National Business & Technical Examination Board",
      year: "2022",
      grade: "Distinction"
    },
    {
      degree: "Bachelor of Arts, Religious Studies",
      school: "University of Ibadan, Nigeria",
      year: "2019",
      grade: "Upper Second Class Honours"
    },
    {
      degree: "Diploma in Theology",
      school: "International Bible Academy",
      year: "2015",
      grade: "Distinction"
    }
  ];

  const awards = [
    "Dedicated Teen Teacher Award - Global Harvest Church (2021, 2023)",
    "Astute Volunteer (SDG Literacy Drive) - REES Africa & TNCI Africa (2022)"
  ];

  const tools = [
    "Canva", "Google Workspace", "Microsoft Office"
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Curriculum <span className="text-gradient">Vitae</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              A comprehensive overview of my professional journey, education, and achievements
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                <span>Dudley, West Midlands, UK</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary" />
                <span>+44 7867 027428</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary" />
                <span>ayobamieae@gmail.com</span>
              </div>
            </div>

            <div className="flex justify-center gap-4">
              <a
                href="https://github.com/Ayooluwabami"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                github.com/Ayooluwabami
              </a>
              <span className="text-muted-foreground">|</span>
              <a
                href="https://my-portfolio-iota-hazel.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                my-portfolio-iota-hazel.vercel.app
              </a>
            </div>
          </div>
        </AnimatedSection>

        {/* Professional Summary */}
        <AnimatedSection delay={100}>
          <div className="max-w-4xl mx-auto mb-16">
            <div className="p-8 md:p-10 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl border border-border">
              <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                <Briefcase className="text-primary" size={28} />
                Professional Summary
              </h2>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Results-oriented Backend Engineer with a strong foundation in JavaScript, TypeScript, Node.js, 
                Restana, NestJS, Express.js, and RESTful API development. Skilled in designing scalable architectures, 
                optimising database performance, and integrating secure payment and authentication systems. 
                Experienced in MongoDB, MySQL, and PostgreSQL, with a proven ability to deliver production-ready APIs. 
                Adept at collaborating with multidisciplinary teams in agile environments to build robust, high-impact 
                solutions that enhance system efficiency and user satisfaction.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Core Technical Skills */}
        <AnimatedSection delay={150}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Technical Skills</h2>
            <div className="bg-muted/50 rounded-2xl p-8 border border-border space-y-4">
              <div>
                <h3 className="font-bold text-primary mb-2">Languages & Frameworks:</h3>
                <p className="text-foreground/80">JavaScript, TypeScript, Node.js, NestJS, Express.js, Restana</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Databases:</h3>
                <p className="text-foreground/80">MongoDB, MySQL, PostgreSQL</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">API Development:</h3>
                <p className="text-foreground/80">REST API Design & Documentation, Postman, Swagger, OpenAPI</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Dev Tools:</h3>
                <p className="text-foreground/80">Git, GitHub, GitHub Actions (CI/CD), Bash, CLI, Render, Vercel, Heroku, Redis</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Security:</h3>
                <p className="text-foreground/80">JWT, OAuth2, bcryptjs, Secure Coding Practices, Payment Gateway Integrations (Paystack, Piggyvest, Stripe, Flutterwave)</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Testing:</h3>
                <p className="text-foreground/80">Unit & Integration Testing</p>
              </div>
              <div>
                <h3 className="font-bold text-primary mb-2">Methodologies:</h3>
                <p className="text-foreground/80">Agile, CI/CD, MVC Architecture</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Professional Experience */}
        <AnimatedSection delay={200}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" />
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                  <div className="bg-background rounded-2xl p-6 border border-border hover:shadow-elegant transition-all">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground mt-2 md:mt-0 md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-foreground/80">
                          <span className="text-accent mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Volunteer Experience */}
        <AnimatedSection delay={250}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <Heart className="text-accent" />
              Volunteer & Leadership Experience
            </h2>
            <div className="space-y-6">
              {volunteerExperience.map((exp, index) => (
                <div key={index} className="bg-muted/50 rounded-2xl p-6 border border-border hover:shadow-elegant transition-all">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-accent">{exp.role}</h3>
                      <p className="font-semibold">{exp.organization}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-2 text-sm text-foreground/80">
                        <span className="text-accent mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education & Certifications */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
              <GraduationCap className="text-secondary" />
              Education & Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.map((edu, index) => (
                <div key={index} className="p-6 bg-background rounded-xl border border-border hover:border-secondary/50 hover:shadow-elegant transition-all">
                  <h3 className="font-bold text-secondary mb-1">{edu.degree}</h3>
                  <p className="text-sm font-medium mb-1">{edu.school}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{edu.year}</span>
                    {edu.grade && <span className="font-semibold text-accent">{edu.grade}</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Awards & Tools */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <AnimatedSection delay={350}>
            <div>
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Award className="text-accent" />
                Awards & Recognition
              </h2>
              <div className="space-y-3">
                {awards.map((award, index) => (
                  <div key={index} className="p-4 bg-muted/50 rounded-xl border border-border">
                    <p className="text-sm">{award}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400}>
            <div>
              <h2 className="text-2xl font-bold mb-6">Additional Tools</h2>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, index) => (
                  <span key={index} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Additional Information */}
        <AnimatedSection delay={450}>
          <div className="max-w-4xl mx-auto">
            <div className="p-6 bg-muted/50 rounded-2xl border border-border">
              <h2 className="text-xl font-bold mb-4">Additional Information</h2>
              <div className="space-y-2 text-sm text-foreground/80">
                <p><strong>Legal Name:</strong> Ayobami Esther Edun</p>
                <p><strong>Previous Name:</strong> Ayobami Esther Ekundayo (on academic and work documents)</p>
                <p><strong>Visa Status:</strong> Skilled Worker Dependent Visa (Eligible to Work in the UK)</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default CV;
