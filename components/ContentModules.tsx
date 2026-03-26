import React, { useState } from 'react';
import { Clock, Tag, X, Plus } from 'lucide-react';

const ContentModules: React.FC = () => {
  // Tags Input State
  const [tags, setTags] = useState(['Concert', 'Outdoor', 'Festival']);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      e.preventDefault();
      if (!tags.includes(inputValue.trim())) {
        setTags([...tags, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  // Timeline Data
  const timelineEvents = [
    { time: "09:00 AM", title: "Gates Open", desc: "Security check and wristband collection.", status: "done" },
    { time: "11:30 AM", title: "Opening Ceremony", desc: "Main Stage. Welcome speech by organizers.", status: "current" },
    { time: "01:00 PM", title: "Lunch Break", desc: "Food trucks open in the South Garden.", status: "upcoming" },
    { time: "03:00 PM", title: "Live Performances", desc: "Indie bands start playing on Stage B.", status: "upcoming" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Content</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Structured Data</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Organizing information chronologically or categorically requires specialized patterns. Timelines guide the user through a journey, while interactive tag inputs allow for fluid categorization.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. Vertical Timeline */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Vertical Timeline</h4>
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                    <div className="relative pl-8 border-l-2 border-gray-100 space-y-12">
                        {timelineEvents.map((event, i) => (
                            <div key={i} className="relative group">
                                {/* Dot */}
                                <div className={`absolute -left-[41px] top-1 w-5 h-5 rounded-full border-4 border-white shadow-sm transition-all duration-300 ${
                                    event.status === 'done' ? 'bg-bunny-dark' :
                                    event.status === 'current' ? 'bg-bunny-red scale-125' :
                                    'bg-gray-200'
                                }`}></div>
                                
                                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 mb-1">
                                    <span className={`text-xs font-bold font-mono tracking-wider ${
                                        event.status === 'current' ? 'text-bunny-red' : 'text-gray-400'
                                    }`}>
                                        {event.time}
                                    </span>
                                    <h5 className={`font-bold text-lg ${
                                        event.status === 'upcoming' ? 'text-gray-500' : 'text-bunny-dark'
                                    }`}>
                                        {event.title}
                                    </h5>
                                </div>
                                <p className="text-sm text-gray-500 leading-relaxed max-w-md">
                                    {event.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 2. Tags Input */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Interactive Tags</h4>
                <div className="bg-gray-50 p-8 rounded-[32px] border border-gray-200 h-full">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                        <label className="text-xs font-bold uppercase text-gray-400 mb-3 block">Event Categories</label>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                            {tags.map(tag => (
                                <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-bunny-light text-bunny-dark rounded-lg text-sm font-bold border border-gray-200 animate-fade-in">
                                    {tag}
                                    <button 
                                        onClick={() => removeTag(tag)}
                                        className="p-0.5 hover:bg-gray-200 rounded-md transition-colors"
                                    >
                                        <X size={12} />
                                    </button>
                                </span>
                            ))}
                        </div>

                        <div className="relative">
                            <input 
                                type="text" 
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Type and press Enter..."
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:border-bunny-dark focus:bg-white transition-all pr-10"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                <Plus size={16} className="text-gray-400" />
                            </div>
                        </div>
                        <p className="text-xs text-gray-400 mt-3">
                            Press <kbd className="bg-gray-100 px-1 rounded border border-gray-200 font-sans">Enter</kbd> to add a tag.
                        </p>
                    </div>

                    {/* Context Example */}
                    <div className="mt-8 opacity-60 pointer-events-none">
                        <div className="flex gap-4 items-start">
                             <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 flex items-center justify-center">
                                 <Tag size={20} className="text-gray-400" />
                             </div>
                             <div>
                                 <div className="h-4 w-32 bg-gray-200 rounded mb-2"></div>
                                 <div className="h-3 w-48 bg-gray-200 rounded"></div>
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

export default ContentModules;