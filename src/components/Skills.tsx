import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Server, Code2, Cpu } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
  description: string;
}

const skills: Skill[] = [
  // Frontend Skills
  { name: 'React', level: 75, category: 'Frontend', description: 'Building modern user interfaces' },
  { name: 'TypeScript', level: 70, category: 'Frontend', description: 'Type-safe development' },
  { name: 'Next.js', level: 50, category: 'Frontend', description: 'Server-side rendering' },
  
  // Backend Skills
  { name: 'Node.js', level: 85, category: 'Backend', description: 'Server-side JavaScript' },
  { name: 'Python', level: 15, category: 'Backend', description: 'Data processing & APIs' },
  { name: 'GraphQL', level: 80, category: 'Backend', description: 'Efficient data querying' },
  
  // Database Skills
  { name: 'MongoDB', level: 88, category: 'Database', description: 'NoSQL database management' },
  { name: 'PostgreSQL', level: 85, category: 'Database', description: 'Relational database design' },
  { name: 'Redis', level: 75, category: 'Database', description: 'In-memory data caching' },
  { name: 'MySQL', level: 82, category: 'Database', description: 'SQL database optimization' },
  { name: 'Elasticsearch', level: 70, category: 'Database', description: 'Search engine databases' }
];

const SkillBar = ({ skill }: { skill: Skill }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between mb-2">
        <div>
          <span className="text-cyan-400">{skill.name}</span>
          <p className="text-sm text-gray-500">{skill.description}</p>
        </div>
        <span className="text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
        />
      </div>
    </motion.div>
  );
};

const CategoryIcon = ({ category }: { category: string }) => {
  const icons = {
    Frontend: Code2,
    Backend: Server,
    Database: Database,
    System: Cpu,
  };

  const Icon = icons[category as keyof typeof icons] || Database;
  
  return <Icon className="w-6 h-6 text-cyan-400" />;
};

export const Skills = () => {
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 hover:border-cyan-400/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <CategoryIcon category={category} />
                <h3 className="text-xl font-semibold text-gray-100">{category}</h3>
              </div>
              <div>
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <SkillBar key={skill.name} skill={skill} />
                  ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            Specialized in both SQL and NoSQL databases, with extensive experience in database design, 
            optimization, and scaling. Proficient in implementing caching solutions and search functionalities.
          </p>
        </motion.div>
      </div>
    </section>
  );
};