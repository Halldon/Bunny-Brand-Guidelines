import React, { useState, useEffect } from 'react';
import { Search, Command, Calendar, Settings, User, ArrowRight, Menu, X, Home, MapPin } from 'lucide-react';

const NavigationPatterns: React.FC = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const menuItems = [
    { icon: Calendar, label: "My Events", shortcut: "⌘E" },
    { icon: User, label: "Profile", shortcut: "⌘P" },
    { icon: Settings, label: "Settings", shortcut: "⌘S" },
    { icon: MapPin, label: "Nearby", shortcut: "⌘N" },
  ];

  // Keydown simulation for command menu visual
  useEffect(() => {
    const interval = setInterval(() => {
        setActiveItem((prev) => (prev + 1) % menuItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-bunny-dark relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-br from-bunny-dark via-black to-bunny-dark z-0"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-bunny-red/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-red mb-4">Patterns / Navigation</h3>
            <h2 className="text-4xl font-bold text-white mb-6">Command & Control</h2>
            <p className="text-white/60 text-lg max-w-2xl">
                Modern navigation isn't just about links; it's about speed. We use a global command palette ("Bunny Search") and non-intrusive side sheets to keep users in the flow.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* 1. Command Palette Visual */}
            <div>
                <h4 className="font-mono text-sm text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Command size={14} /> Command Palette
                </h4>
                
                <div className="bg-[#1A1A1A] rounded-2xl border border-white/10 shadow-2xl overflow-hidden max-w-md mx-auto lg:mx-0 transform hover:scale-[1.02] transition-transform duration-500">
                    {/* Input */}
                    <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
                        <Search size={18} className="text-white/40" />
                        <span className="text-white/80 font-medium text-sm">Type a command or search...</span>
                        <div className="ml-auto flex gap-1">
                             <kbd className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/60 font-mono">⌘</kbd>
                             <kbd className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/60 font-mono">K</kbd>
                        </div>
                    </div>

                    {/* Group */}
                    <div className="p-2">
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider px-2 py-2">Suggestions</div>
                        <div className="space-y-1">
                            {menuItems.map((item, index) => (
                                <div 
                                    key={item.label}
                                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                                        index === activeItem 
                                        ? 'bg-bunny-red text-white' 
                                        : 'text-white/60 hover:bg-white/5'
                                    }`}
                                >
                                    <item.icon size={16} />
                                    <span className="text-sm font-medium flex-1">{item.label}</span>
                                    {index === activeItem && (
                                        <ArrowRight size={14} className="animate-fade-in" />
                                    )}
                                    <span className={`text-[10px] font-mono opacity-50 ${index === activeItem ? 'text-white' : ''}`}>{item.shortcut}</span>
                                </div>
                            ))}
                        </div>
                        <div className="text-[10px] font-bold text-white/30 uppercase tracking-wider px-2 py-2 mt-2">Recent</div>
                        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/60 hover:bg-white/5">
                            <User size={16} />
                            <span className="text-sm font-medium">Sarah Jenkins</span>
                        </div>
                    </div>
                    
                    <div className="bg-white/5 px-4 py-2 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40">
                         <span>Navigate <span className="text-white/60">↓ ↑</span></span>
                         <span>Select <span className="text-white/60">↵</span></span>
                    </div>
                </div>
            </div>

            {/* 2. Sheet / Drawer Pattern */}
            <div>
                 <h4 className="font-mono text-sm text-white/40 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Menu size={14} /> Side Sheet
                </h4>

                <div className="bg-white rounded-3xl h-[500px] relative overflow-hidden flex shadow-2xl">
                    {/* Main Content Mock */}
                    <div className={`flex-1 p-8 transition-transform duration-500 ${isSheetOpen ? 'scale-95 opacity-50' : 'scale-100'}`}>
                        <div className="flex justify-between items-center mb-8">
                             <div className="w-8 h-8 rounded-full bg-gray-100"></div>
                             <button 
                                onClick={() => setIsSheetOpen(true)}
                                className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
                            >
                                 <Menu size={20} className="text-bunny-dark"/>
                             </button>
                        </div>
                        <div className="h-4 w-1/3 bg-gray-100 rounded mb-4"></div>
                        <div className="h-32 w-full bg-gray-50 rounded-2xl mb-4"></div>
                        <div className="h-32 w-full bg-gray-50 rounded-2xl"></div>
                    </div>

                    {/* The Sheet */}
                    <div className={`absolute top-2 bottom-2 right-2 w-[300px] bg-bunny-dark rounded-[24px] shadow-2xl transform transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isSheetOpen ? 'translate-x-0' : 'translate-x-[110%]'}`}>
                        <div className="p-6 h-full flex flex-col text-white">
                            <div className="flex justify-between items-center mb-8">
                                <span className="font-bold text-lg">Menu</span>
                                <button 
                                    onClick={() => setIsSheetOpen(false)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <div className="space-y-1">
                                {[
                                    { icon: Home, label: "Home" },
                                    { icon: MapPin, label: "Explore City" },
                                    { icon: Calendar, label: "My Tickets" },
                                    { icon: User, label: "Profile" }
                                ].map((item) => (
                                    <button key={item.label} className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-white/10 transition-colors text-left group">
                                        <item.icon size={20} className="text-white/60 group-hover:text-bunny-red transition-colors"/>
                                        <span className="font-medium">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            <div className="mt-auto bg-white/5 rounded-xl p-4">
                                <div className="text-xs font-bold text-white/40 uppercase mb-2">Logged in as</div>
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 bg-bunny-red rounded-full flex items-center justify-center text-xs font-bold">SJ</div>
                                    <div className="text-sm font-bold">Sarah Jenkins</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-6 text-center">
                    {!isSheetOpen && (
                        <button onClick={() => setIsSheetOpen(true)} className="text-white/50 hover:text-white text-sm underline underline-offset-4">
                            Click menu icon to test
                        </button>
                    )}
                </div>

            </div>

        </div>
      </div>
    </section>
  );
};

export default NavigationPatterns;