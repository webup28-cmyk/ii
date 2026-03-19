import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, Play, Volume2, Grid } from 'lucide-react';
import { PANELS, PanelData } from './constants';

export default function App() {
  const [activePanel, setActivePanel] = useState<PanelData>(PANELS[2]); // Default to center
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handlePanelClick = (panel: PanelData) => {
    setActivePanel(panel);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Top Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-12 py-10 pointer-events-none">
        <div className="pointer-events-auto">
          <Search className="w-5 h-5 text-ink/40 cursor-pointer hover:text-ink transition-colors" />
        </div>
        <div className="pointer-events-auto">
          <h1 className="text-4xl font-serif italic tracking-tight cursor-pointer select-none">
            Alan Menken
          </h1>
        </div>
        <div className="pointer-events-auto flex items-center gap-8">
          <Menu className="w-6 h-6 text-ink/40 cursor-pointer hover:text-ink transition-colors" />
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center pt-32 pb-20">
        <div className="relative w-full max-w-[1600px] h-[82vh] flex justify-center items-center gap-8 px-8">
          {PANELS.map((panel, index) => {
            const isCenter = panel.type === 'center';
            const isActive = activePanel.id === panel.id;

            return (
              <motion.div
                key={panel.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  y: isLoaded ? 0 : 30,
                  transition: { delay: index * 0.1, duration: 1.5, ease: [0.22, 1, 0.36, 1] }
                }}
                onClick={() => handlePanelClick(panel)}
                className={`
                  relative h-full cursor-pointer group cinematic-transition
                  ${isCenter ? 'w-[22vw]' : 'w-[14vw]'}
                  ${isActive ? 'opacity-100' : 'opacity-40 hover:opacity-70'}
                `}
              >
                {isCenter ? (
                  <div className="w-full h-full panel-gradient flex items-center justify-center overflow-hidden">
                    <motion.span 
                      key={panel.letter}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[12rem] md:text-[16rem] font-display text-ink/90 select-none leading-none"
                    >
                      {panel.letter}
                    </motion.span>
                  </div>
                ) : (
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={panel.imageUrl}
                      alt={panel.title}
                      referrerPolicy="no-referrer"
                      className={`
                        w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 cinematic-transition
                        ${isActive ? 'grayscale-0 contrast-100' : ''}
                      `}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Text Area Below Panels */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePanel.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 text-center flex flex-col items-center gap-6 max-w-3xl px-4"
          >
            <span className="text-[11px] font-sans tracking-[0.4em] text-ink/30 uppercase">
              {activePanel.label}
            </span>
            <h2 className="text-5xl md:text-7xl font-display text-ink/90 leading-none tracking-tight">
              {activePanel.title}
            </h2>
            <p className="text-xl md:text-2xl font-serif italic text-ink/50">
              {activePanel.subtitle}
            </p>

            {/* Media Controls */}
            <div className="flex items-center gap-10 mt-8">
              <button className="w-12 h-12 rounded-full border border-ink/5 flex items-center justify-center hover:bg-ink/5 transition-colors group">
                <Play className="w-5 h-5 text-ink/40 fill-ink/40 group-hover:text-ink group-hover:fill-ink transition-colors" />
              </button>
              <button className="w-12 h-12 rounded-full border border-ink/5 flex items-center justify-center hover:bg-ink/5 transition-colors group">
                <Volume2 className="w-5 h-5 text-ink/40 group-hover:text-ink transition-colors" />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer Area */}
      <footer className="w-full px-12 py-12 flex justify-between items-end pointer-events-none">
        <div className="pointer-events-auto">
          <a href="#" className="text-[11px] font-sans tracking-[0.3em] uppercase text-ink/30 hover:text-ink transition-colors">
            See all works
          </a>
        </div>
        <div className="pointer-events-auto flex items-center gap-6">
          <Grid className="w-5 h-5 text-ink/20 cursor-pointer hover:text-ink transition-colors" />
        </div>
      </footer>

      {/* Background Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] mix-blend-multiply bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />
    </div>
  );
}
