import { motion } from 'motion/react';
import { resumeData } from '../data';
import { ExternalLink, Github, FolderGit2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resumeData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl">
                  <FolderGit2 className="w-8 h-8" />
                </div>
                <div className="flex gap-3">
                  {project.links.map((link, i) => (
                    <a
                      key={i}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-indigo-400 transition-colors"
                    >
                      {link.includes('github.com') ? (
                        <Github className="w-6 h-6" />
                      ) : (
                        <ExternalLink className="w-6 h-6" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">
                {project.title}
              </h3>
              
              <div className="flex-grow">
                <ul className="space-y-2 mb-6">
                  {project.bullets.map((bullet, i) => (
                    <li key={i} className="text-slate-400 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-indigo-500 mt-1 text-xs">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(', ').map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono text-indigo-300 bg-indigo-500/10 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
