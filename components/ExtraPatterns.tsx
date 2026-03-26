import React, { useState } from 'react';
import { ChevronsUpDown, Bookmark, Clock, MapPin, Ticket, CreditCard, Users, BarChart3, Settings, MoreHorizontal, Check } from 'lucide-react';

const ExtraPatterns: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const schedule = [
    { time: "19:00", title: "Doors Open", type: "Logistics", color: "bg-gray-200" },
    { time: "20:00", title: "Opening Act: The Starters", type: "Live", color: "bg-orange-300" },
    { time: "21:30", title: "Headliner: Neon Dreams", type: "Live", color: "bg-bunny-red" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Utilities</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Structural Helpers</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Small details matter. We use robust utility components like aspect ratios, separators, and collapsibles to organize complex event data and maintain visual harmony.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* 1. Collapsible & Separator */}
            <div className="space-y-12">
                
                {/* Collapsible */}
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Collapsible (Schedule)</h4>
                    <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-6 max-w-sm">
                        <div className="flex items-center justify-between mb-4">
                            <h4 className="text-sm font-bold text-bunny-dark flex items-center gap-2">
                                <Clock size={16} className="text-bunny-red"/> Run of Show
                            </h4>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => setIsBookmarked(!isBookmarked)}
                                    className={`p-2 rounded-lg transition-all ${isBookmarked ? 'bg-bunny-red/10 text-bunny-red' : 'bg-gray-100 text-gray-400 hover:text-gray-600'}`}
                                >
                                    <Bookmark size={16} className={isBookmarked ? 'fill-current' : ''} />
                                </button>
                                <button 
                                    onClick={() => setIsOpen(!isOpen)}
                                    className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-600 transition-colors"
                                >
                                    <ChevronsUpDown size={16} />
                                </button>
                            </div>
                        </div>

                        <div className={`space-y-3 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                            {schedule.map((item, i) => (
                                <div key={i} className="flex items-center gap-4 p-3 rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors cursor-pointer group">
                                    <div className="text-xs font-mono font-bold text-gray-400 group-hover:text-bunny-dark transition-colors">{item.time}</div>
                                    <div className={`w-1.5 h-8 rounded-full ${item.color}`}></div>
                                    <div>
                                        <div className="text-sm font-bold text-bunny-dark">{item.title}</div>
                                        <div className="text-[10px] text-gray-400 uppercase tracking-wider">{item.type}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {!isOpen && <div className="text-xs text-gray-400 italic pt-2 pl-1">View 3 schedule blocks...</div>}
                    </div>
                </div>

                {/* Separator */}
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Separators (Receipt)</h4>
                    <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 max-w-sm relative overflow-hidden">
                        {/* Ticket Notch Effect */}
                        <div className="absolute top-1/2 left-0 w-4 h-4 bg-white border-r border-gray-200 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                        <div className="absolute top-1/2 right-0 w-4 h-4 bg-white border-l border-gray-200 rounded-full translate-x-1/2 -translate-y-1/2"></div>

                        <div className="text-center mb-6">
                            <div className="w-10 h-10 bg-bunny-red rounded-full flex items-center justify-center text-white mx-auto mb-3">
                                <Ticket size={18} />
                            </div>
                            <h4 className="text-lg font-bold text-bunny-dark">Order #0921</h4>
                            <p className="text-xs text-gray-500">Oct 24, 2024 • 8:42 PM</p>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">2x General Admission</span>
                                <span className="font-bold text-bunny-dark">$50.00</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Service Fee</span>
                                <span className="font-bold text-bunny-dark">$5.00</span>
                            </div>
                        </div>

                        <div className="relative flex items-center justify-center my-6">
                            <div className="w-full h-px border-t-2 border-dashed border-gray-300"></div>
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="flex items-center gap-2 text-gray-500 text-xs">
                                <CreditCard size={14} /> Visa **** 4242
                            </div>
                            <div className="text-xl font-extrabold text-bunny-dark">$55.00</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Aspect Ratio */}
            <div className="space-y-6">
                 <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Aspect Ratio</h4>
                 <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-8 space-y-8">
                     
                     <div className="space-y-2">
                         <div className="flex justify-between text-xs font-bold text-gray-500">
                             <span>16:9</span>
                             <span>Event Hero</span>
                         </div>
                         <div className="aspect-video w-full bg-gray-100 rounded-xl overflow-hidden relative group">
                             <img src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="16:9" referrerPolicy="no-referrer"/>
                             <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-md text-[10px] font-bold">LIVE</div>
                         </div>
                     </div>

                     <div className="grid grid-cols-2 gap-4">
                         <div className="space-y-2">
                             <div className="flex justify-between text-xs font-bold text-gray-500">
                                 <span>4:3</span>
                                 <span>Performer</span>
                             </div>
                             <div className="aspect-[4/3] w-full bg-gray-100 rounded-xl overflow-hidden relative group">
                                 <img src="https://images.unsplash.com/photo-1516280440614-6697288d5d38?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="4:3" referrerPolicy="no-referrer"/>
                             </div>
                         </div>
                         <div className="space-y-2">
                             <div className="flex justify-between text-xs font-bold text-gray-500">
                                 <span>1:1</span>
                                 <span>Thumbnail</span>
                             </div>
                             <div className="aspect-square w-full bg-gray-100 rounded-xl overflow-hidden relative group">
                                 <img src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=400&auto=format&fit=crop" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="1:1" referrerPolicy="no-referrer"/>
                             </div>
                         </div>
                     </div>

                 </div>
            </div>

            {/* 3. Menubar */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Menubar (Console)</h4>
                <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 h-full">
                    <div className="bg-white rounded-lg border border-gray-200 shadow-sm inline-flex p-1">
                        {[
                            { label: 'Event', icon: Settings }, 
                            { label: 'Attendees', icon: Users }, 
                            { label: 'Marketing', icon: BarChart3 }
                        ].map((menu) => (
                            <div key={menu.label} className="relative">
                                <button 
                                    onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-2 ${activeMenu === menu.label ? 'bg-bunny-dark text-white' : 'text-gray-700 hover:bg-gray-100'}`}
                                >
                                    {menu.label}
                                </button>
                                {activeMenu === menu.label && (
                                    <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-10 animate-fade-in-up">
                                        <div className="px-2 py-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">{menu.label} Actions</div>
                                        
                                        <button className="w-full flex items-center justify-between px-2 py-2 rounded-lg text-sm hover:bg-gray-50 text-gray-700 text-left">
                                            <span>View Dashboard</span>
                                            <span className="text-xs text-gray-400">⌘D</span>
                                        </button>
                                        
                                        <div className="h-px bg-gray-100 my-1"></div>
                                        
                                        <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm hover:bg-gray-50 text-gray-700 text-left">
                                            <span>Export Data CSV</span>
                                        </button>
                                        <button className="w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm hover:bg-gray-50 text-gray-700 text-left">
                                            <span>Settings...</span>
                                        </button>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Context illustration */}
                    <div className="mt-8 opacity-50 space-y-4 pointer-events-none select-none">
                        <div className="flex justify-between items-center">
                             <div className="h-8 w-32 bg-gray-300 rounded-lg"></div>
                             <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
                        </div>
                        <div className="w-full h-48 bg-white border border-gray-200 rounded-xl shadow-sm flex items-center justify-center">
                            <span className="text-gray-300 font-bold text-lg">Chart Area</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default ExtraPatterns;