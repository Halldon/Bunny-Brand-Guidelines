import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, Ticket, Calendar, MapPin, Share2, Heart, Download } from 'lucide-react';

const MediaModules: React.FC = () => {
  // Carousel State
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Drawer State
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const slides = [
    { id: 1, title: "Neon Nights", date: "Oct 12", image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800&auto=format&fit=crop" },
    { id: 2, title: "Jazz Roof", date: "Oct 14", image: "https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&w=800&auto=format&fit=crop" },
    { id: 3, title: "Art Expo", date: "Oct 18", image: "https://images.unsplash.com/photo-1545989253-02cc26577d88?q=80&w=800&auto=format&fit=crop" },
    { id: 4, title: "Food Fest", date: "Oct 20", image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=800&auto=format&fit=crop" },
    { id: 5, title: "Tech Talk", date: "Oct 22", image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop" },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Media</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Rich Interaction</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                For immersive content, we use fluid media patterns. Carousels allow for browsing density, while Drawers provide quick access to details without losing context.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. Carousel */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Carousel</h4>
                    <div className="flex gap-2">
                        <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-bunny-dark transition-colors">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 text-bunny-dark transition-colors">
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>

                <div className="relative group">
                    <div 
                        ref={scrollRef}
                        className="flex gap-4 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
                        style={{ scrollBehavior: 'smooth' }}
                    >
                        {slides.map((slide) => (
                            <div key={slide.id} className="min-w-[280px] h-[360px] relative rounded-[32px] overflow-hidden snap-center bg-gray-100 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
                                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90"></div>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <div className="text-xs font-bold uppercase tracking-wider mb-1 opacity-80">{slide.date}</div>
                                    <h3 className="text-2xl font-bold">{slide.title}</h3>
                                </div>
                                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <Heart size={16} className="text-white" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Drawer / Bottom Sheet */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Drawer (Bottom Sheet)</h4>
                <div className="bg-gray-50 rounded-[40px] border-2 border-dashed border-gray-200 h-[400px] flex items-center justify-center relative overflow-hidden">
                    
                    {/* Content behind drawer */}
                    <div className="text-center">
                        <Ticket size={48} className="text-gray-300 mx-auto mb-4" />
                        <button 
                            onClick={() => setIsDrawerOpen(true)}
                            className="bg-bunny-dark text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                            View Ticket
                        </button>
                    </div>

                    {/* Overlay */}
                    <div 
                        className={`absolute inset-0 bg-black/40 backdrop-blur-sm z-10 transition-opacity duration-500 ${isDrawerOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                        onClick={() => setIsDrawerOpen(false)}
                    ></div>

                    {/* Drawer */}
                    <div 
                        className={`absolute bottom-0 left-0 right-0 bg-white rounded-t-[32px] z-20 shadow-2xl transition-transform duration-500 cubic-bezier(0.32, 0.72, 0, 1) ${isDrawerOpen ? 'translate-y-0' : 'translate-y-full'}`}
                    >
                        <div className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mt-4 mb-6 cursor-pointer" onClick={() => setIsDrawerOpen(false)}></div>
                        
                        <div className="px-8 pb-8">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-bunny-dark">Neon Nights</h3>
                                    <p className="text-gray-500 text-sm">General Admission • 1 Adult</p>
                                </div>
                                <button onClick={() => setIsDrawerOpen(false)} className="p-2 bg-gray-50 rounded-full hover:bg-gray-100">
                                    <X size={16} className="text-gray-500" />
                                </button>
                            </div>

                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-6 flex flex-col items-center">
                                <div className="w-48 h-48 bg-white p-2 rounded-xl mb-4">
                                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=BUNNY-TICKET-123`} alt="QR Code" className="w-full h-full" referrerPolicy="no-referrer" />
                                </div>
                                <p className="font-mono text-sm font-bold text-gray-400 tracking-widest">#982-129-44</p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 font-bold text-bunny-dark hover:bg-gray-50 text-sm">
                                    <Share2 size={16} /> Share
                                </button>
                                <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-bunny-red text-white font-bold text-sm shadow-lg shadow-bunny-red/20">
                                    <Download size={16} /> Save to Wallet
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default MediaModules;