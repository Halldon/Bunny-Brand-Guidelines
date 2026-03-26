import React from 'react';
import { X } from 'lucide-react';
import { BunnyLogo } from './BunnyLogo';

const LogoSystem: React.FC = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Identity / The Mark</h3>
             <h2 className="text-4xl font-bold text-bunny-dark">The Rabbit</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            {/* Construction */}
            <div>
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-6">Construction & Clear Space</h4>
                <div className="bg-gray-50 aspect-square rounded-2xl flex items-center justify-center relative border border-gray-100">
                    {/* Grid Lines Overlay */}
                    <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-10 pointer-events-none">
                        {[...Array(36)].map((_, i) => <div key={i} className="border border-bunny-dark"></div>)}
                    </div>
                    
                    {/* Clear Space Indicators */}
                    <div className="absolute top-8 left-8 w-16 h-16 border-l border-t border-bunny-red flex items-start justify-start p-1">
                        <span className="text-bunny-red font-mono text-xs font-bold">x</span>
                    </div>
                    
                    <div className="relative z-10 p-4">
                        <BunnyLogo className="w-48 h-48 text-bunny-dark" />
                    </div>
                    
                    {/* Dimension Lines */}
                    <div className="absolute bottom-8 w-1/2 h-4 border-b border-bunny-gray flex justify-center">
                        <span className="bg-gray-50 px-2 text-xs font-mono text-bunny-gray translate-y-2">4x</span>
                    </div>
                </div>
                <p className="mt-6 text-bunny-gray text-sm leading-relaxed">
                    The Bunny mark is constructed on a 6x6 grid. Always maintain a minimum clear space of '1x' (defined as the height of the ear) around the logo to ensure legibility.
                </p>
            </div>

            {/* Logo Variations */}
            <div className="flex flex-col gap-8">
                 <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-[-1rem]">Variations</h4>
                 <div className="flex-1 bg-bunny-dark rounded-2xl flex items-center justify-center p-12">
                     <div className="flex items-center gap-4 text-white">
                         <BunnyLogo className="w-12 h-12" />
                         <span className="text-4xl font-bold tracking-tight">Bunny</span>
                     </div>
                 </div>
                 <div className="flex-1 bg-bunny-red rounded-2xl flex items-center justify-center p-12">
                     <BunnyLogo className="w-24 h-24 text-white" />
                 </div>
            </div>
        </div>

        {/* Misuse */}
        <div>
            <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-6">Incorrect Usage</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { label: 'Do not skew', style: { transform: 'scaleX(1.5)' }, content: <BunnyLogo className="w-12 h-12" /> },
                    { label: 'Do not rotate', style: { transform: 'rotate(15deg)' }, content: <BunnyLogo className="w-12 h-12" /> },
                    { label: 'Do not outline', style: {}, content: <BunnyLogo className="w-12 h-12 stroke-current fill-transparent stroke-2" /> },
                    { label: 'Do not clutter', style: {}, content: <div className="relative"><BunnyLogo className="w-12 h-12" /><div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]"></div></div> },
                ].map((item, i) => (
                    <div key={i} className="group">
                        <div className="bg-gray-50 aspect-square rounded-xl flex items-center justify-center relative mb-3 overflow-hidden">
                            <div className="text-bunny-dark" style={item.style}>
                                {item.content}
                            </div>
                            <div className="absolute top-3 right-3 w-6 h-6 bg-red-100 text-red-500 rounded-full flex items-center justify-center">
                                <X size={14} />
                            </div>
                        </div>
                        <p className="text-xs font-mono text-gray-400 text-center">{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSystem;