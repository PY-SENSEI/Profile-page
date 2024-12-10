import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';

const projects = {
  frontend: [
    {
      title: 'Time-Out',
      description: 'A landing page for the management application',
      technologies: ['React', 'Nextjs', 'Tailwind CSS', 'Framer Motion'],
      demoUrl: 'https://time-out-landingpage.vercel.app/',
      githubUrl: 'https://github.com/PY-SENSEI/TimeOut-landingpage',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Zentry',
      description: 'An online game application Lading page',
      technologies: [ 'React.js', 'TypeScript', 'Framer motion'],
      demoUrl: 'https://zentry.techpulse.org.in/',
      githubUrl: 'https://github.com/PY-SENSEI/zentry_gamepage',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Property listing app',
      description: 'A smooth and slithery property listing application',
      technologies: ['Vue.js', 'TailwindCSS', 'OpenAI API', 'Vite'],
      demoUrl: 'https://property-landingpage-eta.vercel.app/',
      githubUrl: 'https://github.com/PY-SENSEI/property-landingPage',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    },
  ],
  backend: [
    {
      title: 'Unlinked-Linkedin Clone',
      description: 'A clone of Unlinked-Linkedin with the versatility of posting and generating ',
      technologies: ['Node.js', 'Mongodb', 'Reactjs', 'Redis'],
      demoUrl: 'https://unlinkedin.onrender.com',
      githubUrl: 'https://github.com/PY-SENSEI/forever-market-store',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Store it',
      description: 'Scalable and secure cloud storage solution',
      technologies: [ 'PostgreSQL', 'WebSockets'],
      demoUrl: 'https://store-it-zeta.vercel.app/sign-in',
      githubUrl: 'https://github.com/PY-SENSEI/swipe-dating',
      image: 'https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=1000',
    },
    {
      title: 'Gemini Clone',
      description: 'Automated gemini clone with the versatility of generating text and images',
      technologies: [ 'Nextjs','Docker', 'Kubernetes'],
      demoUrl: 'https://ai-chatbot-iota-taupe.vercel.app/',
      githubUrl: 'https://github.com/PY-SENSEI/ai-chatbot',
      image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?auto=format&fit=crop&q=80&w=1000',
    },
  ],
};

const ProjectCard = ({ project, index }: { project: typeof projects.frontend[0]; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-gray-800 rounded-lg border border-gray-700 hover:border-cyan-400/30 transition-all hover:shadow-lg hover:shadow-cyan-400/10 overflow-hidden"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ExternalLink size={16} className="mr-1" /> Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors"
          >
            <Github size={16} className="mr-1" /> Code
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectSection = ({ title, projects }: { title: string; projects: typeof projects.frontend }) => {
  return (
    <div className="mb-16">
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-bold mb-8 text-gray-100"
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Featured Projects
        </motion.h2>
        <ProjectSection title="Frontend Projects" projects={projects.frontend} />
        <ProjectSection title="Backend Projects" projects={projects.backend} />
      </div>
    </section>
  );
};