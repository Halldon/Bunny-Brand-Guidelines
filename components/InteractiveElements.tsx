import React, { useState } from 'react';
import { ChevronDown, Bell, Map, Calendar, Minus, Plus } from 'lucide-react';

const InteractiveElements: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  const [date, setDate] = useState<number>(14);
  const [radius, setRadius] = useState<number>(50);
  const [toggles, setToggles] = useState({ notifications: true, location: false });

  const faq = [
    { q: "Can I transfer my tickets?", a: "Absolutely. You can send tickets to a friend via their email or phone number up to 1 hour before the event." },
    { q: "What is the refund policy?", a: "We offer a full refund if you cancel at least 24 hours in advance. No questions asked." },
    { q: "Is there a dress code?", a: "Most Bunny events are casual, but check the specific event details card for any special requirements." }
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Interactive</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Everyday Utility</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Even standard utility components receive the Bunny treatment: generous touch targets, clear active states, and rounded geometry that feels friendly and approachable.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* 1. Date Picker (Compact) */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Date Selection</h4>
                <div className="bg-white rounded-[24px] p-4 shadow-xl shadow-gray-200/50 border border-gray-100 max-w-[260px]">
                    <div className="flex justify-between items-center mb-3">
                        <h5 className="text-sm font-bold text-bunny-dark pl-1">October 2024</h5>
                        <div className="flex gap-0.5">
                             <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronDown className="rotate-90" size={14}/></button>
                             <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronDown className="-rotate-90" size={14}/></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-7 text-center text-[10px] font-bold text-gray-300 mb-2">
                        {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-y-1 gap-x-0">
                        {Array.from({length: 31}, (_, i) => i + 1).map(d => {
                             const isSelected = d === date;
                             const isToday = d === 8;
                             const hasEvent = [12, 14, 20, 24].includes(d);
                             
                             return (
                                <button 
                                    key={d}
                                    onClick={() => setDate(d)}
                                    className={`w-8 h-8 rounded-full flex flex-col items-center justify-center text-[11px] font-medium transition-all relative mx-auto ${
                                        isSelected 
                                        ? 'bg-bunny-red text-white shadow-md shadow-bunny-red/30 z-10' 
                                        : 'text-bunny-dark hover:bg-gray-50'
                                    }`}
                                >
                                    {d}
                                    {!isSelected && hasEvent && <div className="w-1 h-1 bg-bunny-red rounded-full absolute bottom-1.5"></div>}
                                    {!isSelected && isToday && <div className="w-1 h-1 bg-bunny-dark rounded-full absolute bottom-1.5"></div>}
                                </button>
                             )
                        })}
                    </div>
                </div>
            </div>

            {/* 2. Accordion */}
             <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Expansion Panels</h4>
                <div className="space-y-3">
                    {faq.map((item, i) => (
                        <div 
                            key={i} 
                            className={`border transition-all duration-300 overflow-hidden ${
                                openAccordion === i 
                                ? 'bg-bunny-light border-transparent rounded-[24px]' 
                                : 'bg-white border-gray-100 rounded-2xl hover:border-gray-200'
                            }`}
                        >
                            <button 
                                onClick={() => setOpenAccordion(openAccordion === i ? null : i)}
                                className="w-full flex items-center justify-between p-5 text-left"
                            >
                                <span className={`font-bold ${openAccordion === i ? 'text-bunny-red' : 'text-bunny-dark'}`}>{item.q}</span>
                                <ChevronDown 
                                    size={18} 
                                    className={`transition-transform duration-300 ${openAccordion === i ? 'rotate-180 text-bunny-red' : 'text-gray-400'}`} 
                                />
                            </button>
                            <div 
                                className={`px-5 text-bunny-gray text-sm leading-relaxed transition-all duration-300 ease-in-out ${
                                    openAccordion === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 pb-0 opacity-0'
                                }`}
                            >
                                {item.a}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* 3. Controls & Switches */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Input Controls</h4>
                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 space-y-8">
                    
                    {/* Slider */}
                    <div>
                        <div className="flex justify-between items-end mb-4">
                            <label className="font-bold text-bunny-dark flex items-center gap-2">
                                <Map size={16} /> Search Radius
                            </label>
                            <span className="text-xs font-bold bg-bunny-light px-2 py-1 rounded-lg text-bunny-dark">{radius} miles</span>
                        </div>
                        <div className="relative h-6 flex items-center">
                            <input 
                                type="range" 
                                min="1" 
                                max="100" 
                                value={radius} 
                                onChange={(e) => setRadius(Number(e.target.value))}
                                className="w-full absolute z-20 opacity-0 cursor-pointer h-full"
                            />
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden relative z-10">
                                <div className="h-full bg-bunny-red rounded-full" style={{ width: `${radius}%` }}></div>
                            </div>
                            <div 
                                className="h-6 w-6 bg-white border-2 border-gray-100 shadow-md rounded-full absolute z-10 pointer-events-none transition-all"
                                style={{ left: `calc(${radius}% - 12px)` }}
                            ></div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gray-100"></div>

                    {/* Switches */}
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-3 items-center">
                                <div className="p-2 bg-orange-100 text-orange-600 rounded-full">
                                    <Bell size={16} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-bunny-dark">Notifications</div>
                                    <div className="text-xs text-gray-400">Push alerts for events</div>
                                </div>
                            </div>
                            <button 
                                onClick={() => setToggles(p => ({...p, notifications: !p.notifications}))}
                                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${toggles.notifications ? 'bg-bunny-dark' : 'bg-gray-200'}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${toggles.notifications ? 'translate-x-5' : 'translate-x-0'}`}></div>
                            </button>
                        </div>

                        <div className="flex justify-between items-center">
                             <div className="flex gap-3 items-center">
                                <div className="p-2 bg-blue-50 text-blue-600 rounded-full">
                                    <Calendar size={16} />
                                </div>
                                <div>
                                    <div className="font-bold text-sm text-bunny-dark">Calendar Sync</div>
                                    <div className="text-xs text-gray-400">Auto-add bookings</div>
                                </div>
                            </div>
                             <button 
                                onClick={() => setToggles(p => ({...p, location: !p.location}))}
                                className={`w-12 h-7 rounded-full transition-colors relative p-1 ${toggles.location ? 'bg-bunny-dark' : 'bg-gray-200'}`}
                            >
                                <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${toggles.location ? 'translate-x-5' : 'translate-x-0'}`}></div>
                            </button>
                        </div>
                    </div>

                    {/* Stepper */}
                     <div className="w-full h-px bg-gray-100"></div>
                     <div className="flex justify-between items-center">
                        <span className="font-bold text-sm text-bunny-dark">Ticket Quantity</span>
                        <div className="flex items-center gap-4 bg-gray-50 rounded-full p-1">
                            <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-bunny-dark hover:text-bunny-red transition-colors active:scale-95">
                                <Minus size={14} />
                            </button>
                            <span className="font-bold text-sm w-4 text-center">2</span>
                            <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-bunny-dark hover:text-bunny-red transition-colors active:scale-95">
                                <Plus size={14} />
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

export default InteractiveElements;