import React, { useState } from 'react';
import { Moon, Sun, LayoutTemplate, Type } from 'lucide-react';

const TypographySection: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'scale' | 'context'>('context');
  const [isDark, setIsDark] = useState(false);

  const ArticleContext = () => (
    <div className={`p-8 md:p-12 rounded-3xl transition-colors duration-500 border ${isDark ? 'bg-bunny-dark text-white border-white/10' : 'bg-white text-bunny-dark border-gray-100 shadow-xl'}`}>
        <span className="text-xs font-bold uppercase tracking-widest text-bunny-red mb-4 block">Editorial</span>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-[0.9]">
            The Art of <br/> Gathering.
        </h1>
        <div className="flex items-center gap-3 mb-8 border-b border-gray-200/20 pb-8">
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src="https://picsum.photos/seed/bunnyAuthor/100/100" alt="Author" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div>
                <div className="text-sm font-bold">Sarah Jenkins</div>
                <div className="text-xs opacity-60">Curator, Bunny</div>
            </div>
        </div>
        <p className="text-xl md:text-2xl leading-relaxed font-light mb-6 opacity-90">
            "We believe that every event is an opportunity to create a memory that lasts a lifetime. It's not just about the venue; it's about the people."
        </p>
        <p className="text-base md:text-lg leading-relaxed opacity-70 mb-4">
            In a world that is increasingly digital, the value of physical connection has never been higher. Our typography reflects this—bold, confident headlines that grab attention, paired with highly legible body copy that respects the reader's time.
        </p>
        <button className="text-bunny-red font-bold underline decoration-2 underline-offset-4 mt-4 hover:text-red-500">Read full story</button>
    </div>
  );

  const ScaleContext = () => (
     <div className={`space-y-10 p-8 md:p-12 rounded-3xl transition-colors duration-500 border ${isDark ? 'bg-bunny-dark text-white border-white/10' : 'bg-gray-50 text-bunny-dark border-gray-100'}`}>
        {[
            { name: 'Display', size: '64/72', sample: 'Warmth.', className: 'text-6xl md:text-8xl font-extrabold tracking-tight' },
            { name: 'Title 1', size: '44/56', sample: 'Upcoming Events', className: 'text-4xl md:text-5xl font-bold tracking-tight' },
            { name: 'Title 2', size: '32/40', sample: 'Recommended for you', className: 'text-3xl md:text-4xl font-bold tracking-tight' },
            { name: 'Body Large', size: '20/28', sample: 'Experience the magic of connection.', className: 'text-xl font-normal' },
            { name: 'Body', size: '16/24', sample: 'The quick brown fox jumps over the lazy dog.', className: 'text-base font-normal opacity-80' },
            { name: 'Caption', size: '12/16', sample: 'PUBLISHED 2 HOURS AGO', className: 'text-xs font-bold uppercase tracking-wider text-bunny-red' },
        ].map((spec, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 border-b border-gray-200/10 pb-6 last:border-0">
                <div className="w-24 flex-shrink-0">
                        <div className="text-xs opacity-50 font-mono mb-1">{spec.name}</div>
                        <div className="text-[10px] opacity-30 font-mono">{spec.size}</div>
                </div>
                <div className={`${spec.className} w-full break-words`}>
                    {spec.sample}
                </div>
            </div>
        ))}
    </div>
  );

  return (
    <section id="typography" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Column: Description */}
          <div className="lg:w-1/3">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Foundations / Typography</h3>
            <h2 className="text-5xl font-bold text-bunny-dark mb-6">Outfit</h2>
            <p className="text-bunny-gray text-lg leading-relaxed mb-8">
              We selected <strong>Outfit</strong> for its geometric structure yet friendly demeanor. It bridges the gap between a utility-focused application and a lifestyle brand. 
            </p>
            
            <div className="bg-bunny-light p-8 rounded-2xl mb-8 flex items-center justify-center">
              <span className="text-[140px] font-bold text-bunny-dark leading-none">Aa</span>
            </div>
            
             <div className="space-y-4">
                <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm font-mono text-bunny-gray">Family</span>
                    <span className="text-sm font-medium">Outfit (Google Fonts)</span>
                </div>
                <div className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-sm font-mono text-bunny-gray">Classification</span>
                    <span className="text-sm font-medium">Geometric Sans-Serif</span>
                </div>
            </div>
          </div>

          {/* Right Column: Interactive Tester */}
          <div className="lg:w-2/3">
             <div className="flex justify-between items-end mb-6 border-b border-gray-100 pb-4">
                 <div className="flex gap-4">
                     <button 
                        onClick={() => setActiveMode('context')}
                        className={`text-sm font-bold pb-2 transition-colors flex items-center gap-2 ${activeMode === 'context' ? 'text-bunny-red border-b-2 border-bunny-red' : 'text-gray-400 hover:text-bunny-dark'}`}
                     >
                        <LayoutTemplate size={16} /> In Context
                     </button>
                     <button 
                        onClick={() => setActiveMode('scale')}
                        className={`text-sm font-bold pb-2 transition-colors flex items-center gap-2 ${activeMode === 'scale' ? 'text-bunny-red border-b-2 border-bunny-red' : 'text-gray-400 hover:text-bunny-dark'}`}
                     >
                        <Type size={16} /> Type Scale
                     </button>
                 </div>
                 
                 <button 
                    onClick={() => setIsDark(!isDark)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors text-bunny-gray"
                    title="Toggle Theme"
                 >
                     {isDark ? <Sun size={18} /> : <Moon size={18} />}
                 </button>
             </div>

             {activeMode === 'context' ? <ArticleContext /> : <ScaleContext />}
          </div>

        </div>
      </div>
    </section>
  );
};

export default TypographySection;