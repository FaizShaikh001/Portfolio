import { motion } from 'motion/react';
import { resumeData } from '../data';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 sm:px-12 lg:px-24 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Education</h2>
          <div className="h-[1px] bg-white/10 flex-grow"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {resumeData.education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/[0.07] transition-colors"
            >
              <div className="p-3 bg-indigo-500/20 text-indigo-400 rounded-xl w-fit mb-6">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                {edu.degree}
              </h3>
              <p className="text-slate-400 mb-4">{edu.institution}</p>
              <div className="text-indigo-400 font-mono text-sm">
                {edu.dates}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
