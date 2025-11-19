import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  link: string;
  github?: string;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  link, 
  github,
  featured = false 
}) => {
  return (
    <article 
      className={`group relative bg-background rounded-2xl p-6 hover:shadow-hover transition-all duration-500
                 border border-border hover:border-primary/50 hover:-translate-y-2
                 ${featured ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      {featured && (
        <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-4 py-1 
                      rounded-full text-sm font-semibold shadow-lg">
          Featured
        </div>
      )}
      
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex gap-2">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub repository for ${title}`}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github size={20} />
            </a>
          )}
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`External link to ${title}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <p className="text-muted-foreground mb-6 leading-relaxed">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((item, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-muted text-foreground text-xs font-medium rounded-full
                     hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent 
                    opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
    </article>
  );
};

export default ProjectCard;
