import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Bold, Italic, Underline, Home, ShoppingBag, Music, LayoutGrid, Calendar } from 'lucide-react';

const MenuPatterns: React.FC = () => {
  const [navHover, setNavHover] = useState<string | null>(null);
  const [formats, setFormats] = useState<string[]>(['bold']);

  const toggleFormat = (fmt: string) => {
    setFormats(prev => prev.includes(fmt) ? prev.filter(f => f !== fmt) : [...prev, fmt]);
  };

  return (
    <section className="py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Menus</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Hierarchy & Selection</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Navigation needs to be scalable. We use mega-menus for deep hierarchies and breadcrumbs for wayfinding, always with our signature rounded aesthetic.
            </p>
        </div>

        <div className="space-y-20">
            
            {/* 1. Mega Menu (Navigation Menu) */}
            <div className="w-full">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-6">Navigation Menu</h4>
                <div className="bg-white rounded-[32px] border border-gray-100 shadow-xl p-2 relative z-20 min-h-[300px]">
                    
                    {/* The Bar */}
                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50/50 rounded-2xl border border-gray-100/50">
                        <div className="font-bold text-bunny-dark mr-8">Bunny</div>
                        
                        {['Events', 'Community', 'Merch'].map((item) => (
                            <div 
                                key={item}
                                onMouseEnter={() => setNavHover(item)}
                                className="relative px-4 py-2 rounded-xl text-sm font-medium text-gray-600 hover:text-bunny-dark hover:bg-white transition-all cursor-pointer"
                            >
                                {item}
                            </div>
                        ))}
                    </div>

                    {/* The Panel Overlay */}
                    <div className={`absolute top-[80px] left-0 right-0 px-4 transition-all duration-300 ${navHover ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}>
                        <div 
                            className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 grid grid-cols-12 gap-8"
                            onMouseLeave={() => setNavHover(null)}
                        >
                            {/* Featured Card */}
                            <div className="col-span-4 bg-bunny-dark rounded-2xl p-6 text-white flex flex-col justify-end h-[200px] relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-bunny-red rounded-full blur-[40px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
                                <div className="relative z-10">
                                    <div className="font-bold text-lg mb-1">New Arrivals</div>
                                    <p className="text-white/60 text-xs">Check out the latest Bunny gear.</p>
                                </div>
                            </div>

                            {/* Links List */}
                            <div className="col-span-4 space-y-4">
                                <h5 className="font-bold text-bunny-dark mb-2">Categories</h5>
                                <a href="#/" className="block p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <Music size={18} className="text-bunny-red"/>
                                    <div>
                                        <div className="text-sm font-bold text-bunny-dark">Concerts</div>
                                        <div className="text-xs text-gray-400">Live music & festivals</div>
                                    </div>
                                </a>
                                <a href="#/" className="block p-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center gap-3">
                                    <LayoutGrid size={18} className="text-bunny-red"/>
                                    <div>
                                        <div className="text-sm font-bold text-bunny-dark">Workshops</div>
                                        <div className="text-xs text-gray-400">Learn something new</div>
                                    </div>
                                </a>
                            </div>

                             {/* Links List 2 */}
                             <div className="col-span-4 space-y-4">
                                <h5 className="font-bold text-bunny-dark mb-2">Trending</h5>
                                <ul className="space-y-2">
                                    {['Rooftop Jazz', 'Pottery Classes', 'Tech Mixers', 'Run Clubs'].map(i => (
                                        <li key={i} className="text-sm text-gray-500 hover:text-bunny-red cursor-pointer transition-colors px-2 py-1">
                                            {i}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* 2. Breadcrumbs */}
                <div>
                     <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-6">Breadcrumbs</h4>
                     <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center">
                        <nav className="flex items-center text-sm font-medium">
                            <a href="#/" className="flex items-center gap-2 text-gray-400 hover:text-bunny-dark transition-colors">
                                <Home size={14} /> Home
                            </a>
                            <ChevronRight size={14} className="mx-2 text-gray-300" />
                            <a href="#/" className="text-gray-400 hover:text-bunny-dark transition-colors">
                                Events
                            </a>
                            <ChevronRight size={14} className="mx-2 text-gray-300" />
                             <a href="#/" className="text-gray-400 hover:text-bunny-dark transition-colors">
                                New York
                            </a>
                            <ChevronRight size={14} className="mx-2 text-gray-300" />
                            <span className="px-2 py-1 bg-bunny-red/10 text-bunny-red rounded-lg font-bold">
                                Jazz Night
                            </span>
                        </nav>
                     </div>
                </div>

                {/* 3. Toggle Group */}
                <div>
                     <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-6">Toggle Group</h4>
                     <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-center">
                        <div className="flex bg-gray-100 p-1 rounded-xl">
                            <button 
                                onClick={() => toggleFormat('bold')}
                                className={`p-3 rounded-lg transition-all ${formats.includes('bold') ? 'bg-white text-bunny-dark shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <Bold size={18} />
                            </button>
                            <div className="w-px bg-gray-200 my-2 mx-1"></div>
                            <button 
                                onClick={() => toggleFormat('italic')}
                                className={`p-3 rounded-lg transition-all ${formats.includes('italic') ? 'bg-white text-bunny-dark shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <Italic size={18} />
                            </button>
                            <div className="w-px bg-gray-200 my-2 mx-1"></div>
                            <button 
                                onClick={() => toggleFormat('underline')}
                                className={`p-3 rounded-lg transition-all ${formats.includes('underline') ? 'bg-white text-bunny-dark shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                <Underline size={18} />
                            </button>
                        </div>
                     </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default MenuPatterns;