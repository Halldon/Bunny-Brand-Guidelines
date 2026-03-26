import React, { useState, useEffect } from 'react';
import { MoreHorizontal, User, Mail, Calendar, MapPin, ExternalLink, Share2, EyeOff, Flag, Copy, Trash2, ChevronRight, Check } from 'lucide-react';

const OverlayPatterns: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<{x: number, y: number} | null>(null);
  const [hoverCardOpen, setHoverCardOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setActiveMenu({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    const closeMenu = () => setActiveMenu(null);
    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Overlays</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Hidden Depth</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                We keep the interface clean by tucking secondary actions and information into overlays. These patterns—hover cards, context menus, and dropdowns—reveal depth on demand.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* 1. Hover Card */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Hover Preview</h4>
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-center justify-center min-h-[300px]">
                    
                    <div className="text-center relative">
                        <p className="text-bunny-gray text-sm mb-2">Hover over the name</p>
                        <button 
                            onMouseEnter={() => setHoverCardOpen(true)}
                            onMouseLeave={() => setHoverCardOpen(false)}
                            className="text-lg font-bold text-bunny-dark hover:text-bunny-red underline decoration-2 decoration-gray-200 underline-offset-4 transition-colors"
                        >
                            @sarah_j
                        </button>

                        {/* The Hover Card */}
                        <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[280px] bg-white rounded-2xl shadow-xl border border-gray-100 p-5 text-left transition-all duration-300 z-20 origin-bottom ${hoverCardOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}>
                            <div className="flex justify-between items-start mb-4">
                                <div className="w-12 h-12 rounded-full bg-gray-100 overflow-hidden">
                                    <img src="https://picsum.photos/seed/sarahj/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <button className="px-3 py-1 bg-bunny-dark text-white text-xs font-bold rounded-full">Follow</button>
                            </div>
                            <h5 className="font-bold text-bunny-dark text-sm">Sarah Jenkins</h5>
                            <p className="text-xs text-gray-500 mb-3">@sarah_j</p>
                            <p className="text-xs text-bunny-dark leading-relaxed mb-4">
                                Curator of vibes. Coffee enthusiast. Always looking for the next best jazz spot in BK.
                            </p>
                            <div className="flex items-center gap-4 text-xs text-gray-500">
                                <div className="flex items-center gap-1"><Calendar size={12}/> Joined Dec 2023</div>
                            </div>
                            {/* Triangle */}
                            <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-[1px] w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
                        </div>
                    </div>

                </div>
            </div>

            {/* 2. Context Menu */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Context Menu (Right Click)</h4>
                <div 
                    onContextMenu={handleContextMenu}
                    className="bg-bunny-light p-8 rounded-[32px] border-2 border-dashed border-gray-200 flex items-center justify-center min-h-[300px] cursor-context-menu hover:bg-gray-100 transition-colors relative"
                >
                    <div className="text-center pointer-events-none">
                        <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto mb-4 flex items-center justify-center text-bunny-gray">
                            <span className="font-bold text-2xl">?</span>
                        </div>
                        <p className="font-bold text-bunny-dark">Right click anywhere here</p>
                        <p className="text-xs text-gray-400 mt-1">To see custom actions</p>
                    </div>

                    {/* The Menu */}
                    {activeMenu && (
                        <div 
                            className="fixed z-50 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 p-1.5 animate-scale-up origin-top-left"
                            style={{ top: activeMenu.y, left: activeMenu.x }}
                        >
                            <div className="px-2 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Event Actions</div>
                            
                            <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-bunny-dark hover:bg-bunny-red hover:text-white transition-colors">
                                <Share2 size={14} /> Share Event
                            </button>
                            <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-bunny-dark hover:bg-bunny-red hover:text-white transition-colors">
                                <Copy size={14} /> Copy Link
                            </button>
                             <div className="h-px bg-gray-100 my-1"></div>
                            <button className="w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm text-bunny-dark hover:bg-gray-50 transition-colors group">
                                <span className="flex items-center gap-2"><Flag size={14} /> Report</span>
                                <ChevronRight size={12} className="text-gray-400 group-hover:text-bunny-dark"/>
                            </button>
                             <div className="h-px bg-gray-100 my-1"></div>
                            <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors">
                                <Trash2 size={14} /> Remove
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* 3. Dropdown Menu */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Complex Dropdown</h4>
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex items-start justify-center min-h-[300px]">
                    
                    <div className="relative">
                        <button 
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={`px-6 py-3 rounded-xl font-bold border transition-all flex items-center gap-2 ${dropdownOpen ? 'bg-bunny-dark text-white border-bunny-dark' : 'bg-white text-bunny-dark border-gray-200 hover:border-gray-400'}`}
                        >
                            Filter Options <ChevronRight size={16} className={`transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 p-2 z-20 animate-fade-in-fast">
                                <div className="px-3 py-2">
                                    <span className="text-xs font-bold text-bunny-dark">Sort By</span>
                                </div>
                                <div className="space-y-1 mb-2">
                                     <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm hover:bg-gray-50 text-left">
                                         Relevance <Check size={14} className="text-bunny-red"/>
                                     </button>
                                     <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-500 hover:bg-gray-50 text-left">
                                         Date
                                     </button>
                                </div>
                                <div className="h-px bg-gray-100 my-1"></div>
                                <div className="px-3 py-2">
                                    <span className="text-xs font-bold text-bunny-dark">Price Range</span>
                                </div>
                                <div className="px-3 pb-2">
                                    <div className="w-full h-1 bg-gray-100 rounded-full mb-4 relative">
                                        <div className="absolute left-0 top-0 h-full w-2/3 bg-bunny-red rounded-full"></div>
                                        <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-bunny-red rounded-full shadow-sm"></div>
                                    </div>
                                    <div className="flex justify-between text-xs text-gray-400 font-mono">
                                        <span>$0</span>
                                        <span>$100+</span>
                                    </div>
                                </div>
                                <div className="p-2">
                                    <button className="w-full py-2 bg-bunny-dark text-white rounded-lg text-xs font-bold">Apply Filters</button>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default OverlayPatterns;