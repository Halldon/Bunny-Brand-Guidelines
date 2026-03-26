import React from 'react';

const PhotographyGuidelines: React.FC = () => {
  return (
    <section className="py-24 bg-bunny-dark text-white border-t border-white/10">
      <div className="container mx-auto px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
             <div className="max-w-xl">
                <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-red mb-4">Foundations / Photography</h3>
                <h2 className="text-4xl font-bold mb-6">Lived-In Luxury</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                    Our imagery should feel like a memory you want to step back into. We prioritize warm tones, natural lighting, and compositions that suggest human presence without always showing faces.
                </p>
             </div>
             <div className="flex gap-4">
                 <div className="px-4 py-2 rounded-full border border-white/20 text-sm">Warmth</div>
                 <div className="px-4 py-2 rounded-full border border-white/20 text-sm">Texture</div>
                 <div className="px-4 py-2 rounded-full border border-white/20 text-sm">Depth</div>
             </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {/* Image 1 - Large Landscape */}
             <div className="lg:col-span-2 group cursor-pointer">
                 <div className="aspect-[16/10] rounded-[24px] overflow-hidden mb-4 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2400&auto=format&fit=crop" 
                        alt="Warm Living Room" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                 </div>
                 <div className="flex justify-between items-start">
                     <div>
                        <h4 className="font-bold text-lg text-white group-hover:text-bunny-red transition-colors">Atmosphere</h4>
                        <p className="text-sm text-white/50">Capture the feeling of the space.</p>
                     </div>
                     <span className="text-xs font-mono border border-white/20 px-2 py-1 rounded text-white/40">16:10</span>
                 </div>
             </div>

             {/* Image 2 - Portrait Detail */}
             <div className="group cursor-pointer">
                 <div className="aspect-[3/4] rounded-[24px] overflow-hidden mb-4 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1595253344406-7478d27a940d?q=80&w=800&auto=format&fit=crop" 
                        alt="Coffee Detail" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                    />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-bunny-red transition-colors">Details</h4>
                    <p className="text-sm text-white/50">Focus on textures and materials.</p>
                 </div>
             </div>

             {/* Image 3 - Portrait Human Element */}
             <div className="group cursor-pointer">
                 <div className="aspect-[3/4] rounded-[24px] overflow-hidden mb-4 relative">
                    <img 
                        src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" 
                        alt="Friends Laughing" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        referrerPolicy="no-referrer"
                    />
                 </div>
                 <div>
                    <h4 className="font-bold text-lg text-white group-hover:text-bunny-red transition-colors">Connection</h4>
                    <p className="text-sm text-white/50">Candid moments of joy.</p>
                 </div>
             </div>
         </div>
      </div>
    </section>
  );
};

export default PhotographyGuidelines;