/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import AnimatedBackground from './components/AnimatedBackground';
import SplashScreen from './components/SplashScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="bg-transparent min-h-screen text-slate-200 selection:bg-indigo-500/30 font-sans">
      <AnimatedBackground />
      
      <AnimatePresence mode="wait">
        {showSplash ? (
          <SplashScreen key="splash" onComplete={() => setShowSplash(false)} />
        ) : (
          <div key="content" className="relative">
            <Navbar />
            <main>
              <Hero />
              <Achievements />
              <Experience />
              <Projects />
              <Skills />
              <Education />
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
