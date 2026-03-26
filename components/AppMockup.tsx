import React from 'react';
import { Search, MapPin, Heart, Star, User, Home, Compass, Plus, Calendar } from 'lucide-react';

const AppMockup: React.FC = () => {
  return (
    <section id="interface" className="py-24 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Experience / Application</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-bunny-dark mb-6">Designed for Connection</h2>
            <p className="text-bunny-gray text-lg">
                The interface utilizes a card-based system with soft shadows (elevation 1 & 2) and generous padding. 
                Primary actions are always solid Bunny Red.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-24">
            
            {/* Phone Mockup 1: Discover Feed (Interactive Scroll) */}
            <div className="relative w-[320px] h-[680px] bg-white rounded-[45px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-bunny-dark overflow-hidden transform hover:-translate-y-4 transition-transform duration-500">
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 left-0 right-0 h-8 z-30 flex justify-center pt-2">
                    <div className="w-24 h-6 bg-black rounded-full"></div>
                </div>

                {/* Status Bar */}
                <div className="h-10 w-full flex justify-between px-6 items-end pb-2 absolute top-0 z-20 bg-white/90 backdrop-blur-sm">
                    <div className="text-[12px] font-bold text-black">9:41</div>
                    <div className="flex gap-1.5 items-center">
                        <div className="h-3 w-4 border border-gray-300 rounded-[2px] relative"><div className="absolute inset-[1px] bg-black rounded-[1px] w-[70%]"></div></div>
                    </div>
                </div>

                {/* App Content - Scrollable Area */}
                <div className="h-full overflow-y-auto hide-scrollbar pt-12 pb-24 bg-gray-50/50">
                    <div className="px-5">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6 mt-2">
                            <div>
                                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">Good Morning</h4>
                                <h3 className="text-2xl font-bold text-bunny-dark">Bunny User</h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white shadow-sm">
                                <img src="https://picsum.photos/seed/bunnyAvatar1/100/100" alt="Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
                            </div>
                        </div>

                        {/* Search Bar */}
                        <div className="group flex items-center gap-3 bg-white border border-gray-100 shadow-sm rounded-2xl px-4 py-3.5 mb-8 transition-shadow hover:shadow-md cursor-text">
                            <Search size={20} className="text-bunny-red" />
                            <span className="text-sm text-gray-400 font-medium group-hover:text-gray-500">Find events, friends...</span>
                        </div>

                        <h3 className="text-lg font-bold text-bunny-dark mb-4 flex justify-between items-end">
                            Upcoming <span className="text-xs text-bunny-red">See all</span>
                        </h3>

                        {/* Event Feed */}
                        <div className="space-y-5">
                            {/* Card 1 */}
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transition-transform active:scale-95 duration-200">
                                <div className="w-full h-36 bg-gray-200 rounded-xl relative overflow-hidden mb-3 group">
                                    <img src="https://picsum.photos/seed/bunnyEvent1/400/300" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Event" referrerPolicy="no-referrer" />
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm hover:bg-bunny-red hover:text-white transition-colors cursor-pointer">
                                        <Heart size={14} />
                                    </div>
                                    <div className="absolute bottom-2 left-2 bg-black/50 backdrop-blur px-2 py-1 rounded-md">
                                        <span className="text-[10px] font-bold text-white uppercase tracking-wide">Music</span>
                                    </div>
                                </div>
                                <div className="px-1 pb-1">
                                    <div className="flex justify-between items-start mb-1">
                                        <h4 className="font-bold text-bunny-dark text-lg leading-tight">Rooftop Jazz</h4>
                                        <div className="flex items-center gap-1 bg-yellow-50 px-1.5 py-0.5 rounded text-yellow-700">
                                            <Star size={10} className="fill-current" />
                                            <span className="text-[10px] font-bold">4.9</span>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500 font-medium mb-3">Fri, Oct 12 • 8:00 PM • Brooklyn</p>
                                    <div className="flex -space-x-2">
                                         {[1,2,3].map(i => <img key={i} src={`https://picsum.photos/seed/bunnyFriend${i}/30/30`} alt={`Friend ${i}`} className="w-6 h-6 rounded-full border border-white" referrerPolicy="no-referrer" />)}
                                         <div className="w-6 h-6 rounded-full bg-gray-100 border border-white flex items-center justify-center text-[8px] font-bold text-gray-500">+12</div>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 transition-transform active:scale-95 duration-200">
                                <div className="w-full h-36 bg-gray-200 rounded-xl relative overflow-hidden mb-3 group">
                                    <img src="https://picsum.photos/seed/bunnyEvent2/400/300" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" alt="Event" referrerPolicy="no-referrer" />
                                    <div className="absolute top-2 right-2 bg-white/90 backdrop-blur p-2 rounded-full shadow-sm">
                                        <Heart size={14} />
                                    </div>
                                </div>
                                <div className="px-1 pb-1">
                                    <h4 className="font-bold text-bunny-dark text-lg leading-tight mb-1">Pottery Class</h4>
                                    <p className="text-xs text-gray-500 font-medium">Sat, Oct 13 • 10:00 AM • Soho</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Floating Bottom Nav */}
                <div className="absolute bottom-6 left-4 right-4 h-16 bg-bunny-dark text-white rounded-2xl shadow-2xl flex justify-around items-center px-2 z-30">
                    <div className="p-2 bg-white/10 rounded-xl text-white transition-colors cursor-pointer">
                        <Home size={20} strokeWidth={2.5} />
                    </div>
                    <div className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <Compass size={20} />
                    </div>
                    <div className="p-3 bg-bunny-red rounded-full -mt-8 border-4 border-gray-50 text-white shadow-lg cursor-pointer hover:bg-red-500 transition-colors">
                        <Plus size={24} strokeWidth={3} />
                    </div>
                    <div className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <Calendar size={20} />
                    </div>
                    <div className="p-2 text-white/50 hover:text-white transition-colors cursor-pointer">
                        <User size={20} />
                    </div>
                </div>
                
                {/* Home Indicator */}
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-black/20 rounded-full z-40"></div>
            </div>

            {/* Phone Mockup 2: Detail View (Static but polished) */}
            <div className="relative w-[320px] h-[680px] bg-white rounded-[45px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[8px] border-bunny-dark overflow-hidden mt-12 lg:mt-0 transform hover:-translate-y-4 transition-transform duration-500 delay-100">
                <div className="absolute top-0 left-0 right-0 h-8 z-30 flex justify-center pt-2">
                     <div className="w-24 h-6 bg-black rounded-full"></div>
                </div>
                
                {/* Full Height Image */}
                <div className="relative h-2/5 w-full">
                    <img src="https://picsum.photos/seed/bunnyDetail/600/800" className="w-full h-full object-cover" alt="Detail" referrerPolicy="no-referrer" />
                    <div className="absolute top-12 left-6">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-white/40 transition-colors text-white">
                            <span className="font-bold text-xl">←</span>
                        </div>
                    </div>
                </div>
                
                {/* Bottom Sheet */}
                <div className="relative -mt-10 bg-white rounded-t-[32px] h-full shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
                    <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6"></div>
                    
                    <div className="px-8 pb-8 h-full flex flex-col">
                        <div className="flex justify-between items-start mb-2">
                             <span className="text-xs font-bold text-bunny-red uppercase tracking-wider bg-red-50 px-2 py-1 rounded">Architecture</span>
                             <span className="text-xl font-bold text-bunny-dark">$24</span>
                        </div>
                        
                        <h2 className="text-3xl font-extrabold text-bunny-dark leading-[1.1] mb-2">Brutalist <br/>Walk NYC</h2>
                        
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-6 border-b border-gray-100 pb-6">
                            <MapPin size={14} className="text-bunny-red" />
                            <span>Downtown District, NY</span>
                        </div>

                        <div className="space-y-4 mb-8">
                             <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                    <User size={18} className="text-gray-600"/>
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-gray-400 uppercase">Hosted By</div>
                                    <div className="font-bold text-sm">Sarah Jenkins</div>
                                </div>
                             </div>
                             
                             <div>
                                <div className="text-xs font-bold text-gray-400 uppercase mb-1">About</div>
                                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                                    Join us for a guided tour through the city's most iconic brutalist structures. Photography enthusiasts welcome.
                                </p>
                             </div>
                        </div>

                        <button className="w-full bg-bunny-red text-white font-bold py-4 rounded-2xl shadow-xl shadow-bunny-red/20 hover:bg-red-600 transition-colors active:scale-95">
                            Book Spot
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AppMockup;