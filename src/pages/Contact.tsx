import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';

const Contact = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection>
          <div className="max-w-4xl mx-auto text-center mb-20">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-gradient">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions. Let's create something amazing together!
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <AnimatedSection delay={100}>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Feel free to reach out through any of these channels. I typically respond within 24 hours.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <a 
                  href="mailto:ayobamieae@gmail.com"
                  className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl border border-border 
                           hover:border-primary/50 hover:shadow-elegant transition-all group"
                >
                  <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">ayobamieae@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl border border-border">
                  <div className="p-3 bg-accent/10 rounded-xl text-accent">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+44 7867 027428</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-muted/50 rounded-2xl border border-border">
                  <div className="p-3 bg-secondary/10 rounded-xl text-secondary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground">Dudley, West Midlands, UK</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-bold mb-4">Connect on Social</h3>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Ayooluwabami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/50 
                             hover:shadow-elegant transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ayobami-ekundayo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/50 
                             hover:shadow-elegant transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://medium.com/@ayobamieae"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-muted/50 rounded-xl border border-border hover:border-primary/50 
                             hover:shadow-elegant transition-all hover:scale-110"
                    aria-label="Medium"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-accent"></span>
                  </span>
                  Currently Available
                </h3>
                <p className="text-sm text-muted-foreground">
                  Open to full-time opportunities, contract work, and interesting collaborations.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={200}>
            <div className="bg-muted/30 rounded-3xl p-8 border border-border">
              <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border 
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border 
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border 
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    className="w-full px-4 py-3 bg-background rounded-xl border border-border 
                             focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold
                           shadow-elegant hover:shadow-hover transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  Send Message
                  <Send size={20} />
                </button>
              </form>

              <p className="text-sm text-muted-foreground mt-6 text-center">
                Or email me directly at{' '}
                <a href="mailto:ayobamieae@gmail.com" className="text-primary hover:underline">
                  ayobamieae@gmail.com
                </a>
              </p>
            </div>
          </AnimatedSection>
        </div>

        {/* Call to Action */}
        <AnimatedSection delay={300}>
          <div className="max-w-4xl mx-auto mt-20 text-center">
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl border border-border">
              <h2 className="text-3xl font-bold mb-4">Let's Build Something Great</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you have a project in mind or just want to chat about technology, 
                I'd love to hear from you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/Ayooluwabami"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-full font-medium 
                           border border-border hover:border-primary/50 transition-all"
                >
                  View GitHub
                </a>
                <a
                  href="https://my-portfolio-iota-hazel.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-muted hover:bg-muted/80 rounded-full font-medium 
                           border border-border hover:border-primary/50 transition-all"
                >
                  Visit Portfolio
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Contact;
