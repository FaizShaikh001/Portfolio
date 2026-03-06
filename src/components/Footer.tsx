import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 px-6 sm:px-12 lg:px-24 relative z-10 border-t border-white/10 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-white tracking-tight mb-2">
            {resumeData.basics.name}
          </h2>
          <p className="text-slate-400 text-sm">
            {resumeData.basics.title}
          </p>
        </div>

        <div className="flex gap-6">
          <a href={`mailto:${resumeData.basics.email}`} className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href={`tel:${resumeData.basics.phone}`} className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Phone className="w-5 h-5" />
          </a>
          <a href={`https://${resumeData.basics.links[1]}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href={`https://${resumeData.basics.links[0]}`} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center mt-12 text-slate-600 text-xs font-mono">
        Designed & Built with React, Tailwind, and Framer Motion.
      </div>
    </footer>
  );
}
