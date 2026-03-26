import React from 'react';

const SpacingSystem: React.FC = () => {
  const spacers = [
    { size: 8, label: 'tiny', name: '8' },
    { size: 16, label: 'small', name: '16' },
    { size: 24, label: 'base', name: '24' },
    { size: 48, label: 'large', name: '48' },
    { size: 64, label: 'x-large', name: '64' },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Foundations / Spacing</h3>
                <h2 className="text-4xl font-bold text-bunny-dark mb-6">Rhythm & Breath</h2>
                <p className="text-bunny-gray text-lg mb-8">
                    Our spacing system is built on an 8px grid. This ensures a consistent rhythm across the application, allowing content to breathe and creating a sense of calm sophistication.
                </p>
            </div>
            <div className="md:w-2/3 grid gap-12">
                {spacers.map((s) => (
                    <div key={s.name} className="flex items-center gap-8 group">
                        <div 
                            className="border-2 border-dashed border-bunny-red/30 bg-bunny-red/5 flex items-center justify-center relative transition-all duration-300 group-hover:bg-bunny-red/10 group-hover:border-bunny-red"
                            style={{ width: s.size, height: s.size }}
                        >
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="font-bold text-bunny-dark text-2xl flex items-center gap-2">
                                {s.name} <span className="text-sm font-normal text-bunny-gray px-2 py-1 bg-gray-100 rounded-md">{s.label}</span>
                            </span>
                            <span className="text-xs text-bunny-gray font-mono opacity-50 mt-1">{s.size}px</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};
export default SpacingSystem;