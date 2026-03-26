import React, { useState, useRef, useEffect } from 'react';
import { Search, SlidersHorizontal, MapPin, Sparkles, Send, ArrowRight, Calendar, Star, Heart, Users } from 'lucide-react';

const CoreExperiences: React.FC = () => {
  // --- Search State ---
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  
  const events = [
    { 
        id: 1, 
        title: 'Rooftop Jazz Night', 
        date: 'Tonight, 8PM', 
        price: '$24', 
        category: 'Music', 
        image: 'https://picsum.photos/seed/bunnyJazz/600/800', 
        attendees: 12,
        rating: 4.9
    },
    { 
        id: 2, 
        title: 'Abstract Art Fair', 
        date: 'Sat, 10AM', 
        price: '$15', 
        category: 'Art', 
        image: 'https://picsum.photos/seed/bunnyArt/600/800',
        attendees: 45,
        rating: 4.7
    },
    { 
        id: 3, 
        title: 'Community Potluck', 
        date: 'Sun, 1PM', 
        price: 'Free', 
        category: 'Food', 
        image: 'https://picsum.photos/seed/bunnyFood/600/800',
        attendees: 8,
        rating: 5.0
    },
    { 
        id: 4, 
        title: 'Neon Run 5K', 
        date: 'Fri, 6PM', 
        price: '$30', 
        category: 'Sports', 
        image: 'https://picsum.photos/seed/bunnyRun/600/800',
        attendees: 120,
        rating: 4.8
    },
  ];

  const filteredEvents = searchQuery 
    ? events 
    : events.filter(e => activeFilter === 'All' || e.category === activeFilter);

  // --- Chat State ---
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: "Hey there! Looking for something to do this weekend? 🐰" }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = (text: string) => {
    const newUserMsg = { id: Date.now(), role: 'user', text };
    setMessages(prev => [...prev, newUserMsg]);
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      let aiText = "That sounds fun! Let me check what's happening nearby.";
      if (text.toLowerCase().includes('jazz')) aiText = "Ooh, jazz? The 'Rooftop Jazz Night' is happening tonight and it's a total vibe. Want tickets?";
      if (text.toLowerCase().includes('food')) aiText = "Hungry? There's a massive Community Potluck on Sunday. Great way to meet neighbors!";
      
      setMessages(prev => [...prev, { id: Date.now() + 1, role: 'ai', text: aiText }]);
      setIsTyping(false);
    }, 1500);
  };

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Experience / Core Flows</h3>
             <h2 className="text-4xl font-bold text-bunny-dark mb-6">Discovery & Conversation</h2>
             <p className="text-bunny-gray text-lg max-w-2xl">
                 Complex functionality doesn't have to feel complicated. Whether searching for a specific event or chatting with our AI concierge, the interface remains rounded, inviting, and conversational.
             </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16">
            
            {/* MODULE 1: Search & Carousel Experience */}
            <div className="bg-bunny-light rounded-[40px] p-8 md:p-10 border border-white shadow-xl relative overflow-hidden flex flex-col">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bunny-red/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                
                <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold text-bunny-dark">Explore</h3>
                    <div className="flex items-center gap-2 text-sm text-bunny-gray bg-white px-3 py-1 rounded-full shadow-sm">
                        <MapPin size={14} className="text-bunny-red" /> Brooklyn, NY
                    </div>
                </div>

                {/* Search Bar */}
                <div className="relative mb-6 group z-10">
                    <input 
                        type="text" 
                        placeholder="What's the vibe today?" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-white h-14 pl-12 pr-4 rounded-2xl shadow-sm border-2 border-transparent focus:border-bunny-red focus:outline-none transition-all placeholder-gray-400 text-bunny-dark font-medium"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-bunny-red transition-colors" size={20} />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-xl transition-colors">
                        <SlidersHorizontal size={18} className="text-bunny-dark" />
                    </button>
                </div>

                {/* Filters */}
                <div className="flex gap-2 mb-8 overflow-x-auto hide-scrollbar pb-2 z-10">
                    {['All', 'Music', 'Art', 'Food', 'Tech'].map(cat => (
                        <button 
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap ${
                                activeFilter === cat 
                                ? 'bg-bunny-dark text-white shadow-lg shadow-bunny-dark/20' 
                                : 'bg-white text-bunny-gray hover:bg-gray-100'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Dynamic Carousel */}
                <div className="relative -mr-10 pr-10 overflow-x-auto hide-scrollbar pb-10">
                    <div className="flex gap-6">
                        {filteredEvents.map(event => (
                            <div key={event.id} className="relative w-[280px] h-[380px] flex-shrink-0 rounded-3xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                                {/* Background Image */}
                                <img src={event.image} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                                
                                {/* Gradient Overlay - Stronger at bottom for text legibility */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                                {/* Top Badges */}
                                <div className="absolute top-4 left-4 flex gap-2">
                                    <span className="bg-white/20 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-lg border border-white/10">
                                        {event.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4">
                                     <button className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-bunny-red hover:text-white transition-colors border border-white/10">
                                        <Heart size={14} />
                                     </button>
                                </div>

                                {/* Content Layer */}
                                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1)">
                                    <div className="flex justify-between items-end mb-2">
                                        <div className="flex items-center gap-1 text-yellow-400">
                                            <Star size={12} className="fill-current"/> <span className="text-xs font-bold">{event.rating}</span>
                                        </div>
                                        <div className="font-bold text-lg">{event.price}</div>
                                    </div>
                                    
                                    <h4 className="font-bold text-xl leading-tight mb-3 group-hover:text-bunny-red transition-colors">{event.title}</h4>
                                    
                                    {/* Description / Actions - Uses max-height for animation */}
                                    <div className="max-h-0 overflow-hidden group-hover:max-h-[200px] transition-all duration-500 ease-in-out opacity-0 group-hover:opacity-100">
                                        <div className="space-y-3 pt-1">
                                            <div className="flex items-center gap-2 text-xs text-white/80">
                                                <Calendar size={12} /> {event.date}
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex -space-x-2">
                                                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border border-white bg-gray-300 overflow-hidden"><img src={`https://picsum.photos/seed/face${i+10}/50/50`} alt="Face" referrerPolicy="no-referrer" /></div>)}
                                                </div>
                                                <span className="text-[10px] font-bold opacity-70">+{event.attendees} going</span>
                                            </div>
                                            <button className="w-full py-3 mt-2 bg-white text-bunny-dark font-bold text-xs rounded-xl hover:bg-bunny-red hover:text-white transition-colors">
                                                Book Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                        {/* More Card - Styled as a card */}
                        <div className="w-[180px] h-[380px] flex-shrink-0 flex flex-col items-center justify-center rounded-3xl border-2 border-dashed border-gray-300 text-gray-400 hover:text-bunny-red hover:border-bunny-red hover:bg-white transition-all cursor-pointer group gap-4">
                            <div className="w-16 h-16 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <ArrowRight size={24} className="text-current" />
                            </div>
                            <span className="font-bold text-sm">View All Events</span>
                        </div>
                    </div>
                </div>
            </div>


            {/* MODULE 2: AI Concierge */}
            <div className="bg-bunny-dark rounded-[40px] p-8 md:p-10 shadow-2xl relative overflow-hidden flex flex-col h-[600px] lg:h-auto">
                <div className="absolute top-0 right-0 w-96 h-96 bg-bunny-red/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/10 text-bunny-red">
                        <Sparkles size={24} />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white">Bunny AI</h3>
                        <p className="text-white/50 text-sm">Your neighborhood concierge</p>
                    </div>
                </div>

                {/* Chat Area */}
                <div className="flex-1 bg-white/5 rounded-3xl p-6 mb-6 overflow-y-auto hide-scrollbar relative border border-white/5" ref={scrollRef}>
                    <div className="space-y-6">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                                    msg.role === 'user' 
                                    ? 'bg-bunny-red text-white rounded-tr-sm shadow-lg shadow-bunny-red/20' 
                                    : 'bg-white text-bunny-dark rounded-tl-sm shadow-lg'
                                }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="flex justify-start animate-fade-in">
                                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-lg flex gap-1 items-center">
                                    <div className="w-2 h-2 bg-bunny-gray rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-bunny-gray rounded-full animate-bounce delay-75"></div>
                                    <div className="w-2 h-2 bg-bunny-gray rounded-full animate-bounce delay-150"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Input Area */}
                <div className="relative z-10">
                    {/* Quick Suggestions */}
                    <div className="flex gap-2 mb-4 overflow-x-auto hide-scrollbar">
                        {['Find jazz 🎷', 'Cheap eats 🍔', 'Art galleries 🎨'].map(suggestion => (
                            <button 
                                key={suggestion}
                                onClick={() => handleSendMessage(suggestion)}
                                className="px-3 py-2 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white text-xs font-bold transition-colors whitespace-nowrap backdrop-blur-sm"
                            >
                                {suggestion}
                            </button>
                        ))}
                    </div>

                    <div className="relative">
                        <input 
                            type="text" 
                            placeholder="Ask anything..." 
                            className="w-full bg-white/10 border border-white/10 rounded-2xl h-14 pl-4 pr-14 text-white placeholder-white/40 focus:outline-none focus:bg-white/20 transition-all backdrop-blur-md"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSendMessage((e.target as HTMLInputElement).value);
                                    (e.target as HTMLInputElement).value = '';
                                }
                            }}
                        />
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-white text-bunny-dark rounded-xl flex items-center justify-center hover:bg-bunny-red hover:text-white transition-colors">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default CoreExperiences;