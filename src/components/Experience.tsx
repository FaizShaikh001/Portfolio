import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { resumeData } from '../data';
import { Briefcase, Calendar, MapPin, ChevronDown } from 'lucide-react';

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Experience</h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="space-y-12">
          {resumeData.experience.map((exp, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                {/* Timeline line for mobile */}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-[1px] bg-white/10"></div>
                <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-indigo-500"></div>

                <div className="md:grid md:grid-cols-[1fr_3fr] gap-8 items-start">
                  {/* Left column: Dates & Location (Desktop) */}
                  <div className="hidden md:block text-right pt-8">
                    <div className="text-slate-300 font-mono text-sm mb-1">{exp.dates}</div>
                    <div className="text-slate-500 text-sm flex items-center justify-end gap-1">
                      <MapPin className="w-3 h-3" /> {exp.location}
                    </div>
                  </div>

                  {/* Right column: Content */}
                  <div 
                    className={`bg-white/5 border ${isExpanded ? 'border-indigo-500/50' : 'border-white/10'} rounded-2xl p-6 md:p-8 hover:border-indigo-500/50 transition-colors group cursor-pointer`}
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  >
                    <div className="md:hidden mb-4">
                      <div className="text-slate-300 font-mono text-sm flex items-center gap-2 mb-1">
                        <Calendar className="w-4 h-4" /> {exp.dates}
                      </div>
                      <div className="text-slate-500 text-sm flex items-center gap-2">
                        <MapPin className="w-4 h-4" /> {exp.location}
                      </div>
                    </div>

                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="text-lg text-slate-400 flex items-center gap-2">
                          <Briefcase className="w-4 h-4" /> {exp.company}
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-2 bg-white/5 rounded-full text-slate-400"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 24 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3">
                            {exp.bullets.map((bullet, i) => (
                              <li key={i} className="flex items-start gap-3 text-slate-300">
                                <span className="text-indigo-500 mt-1.5 text-xs">▹</span>
                                <span className="leading-relaxed">{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
