import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, MapPin, Search, ArrowRight } from 'lucide-react';

const AdvancedPatterns: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState("New York, NY");
  const [comboboxOpen, setComboboxOpen] = useState(false);
  const [dateRange, setDateRange] = useState<{ start: number | null, end: number | null }>({ start: 12, end: 16 });

  const cities = [
    { value: "new york", label: "New York, NY" },
    { value: "london", label: "London, UK" },
    { value: "paris", label: "Paris, France" },
    { value: "tokyo", label: "Tokyo, Japan" },
    { value: "amsterdam", label: "Amsterdam, NL" },
  ];

  const handleDateClick = (day: number) => {
    if (!dateRange.start || (dateRange.start && dateRange.end)) {
        // Start new range
        setDateRange({ start: day, end: null });
    } else {
        // Complete range
        if (day < dateRange.start) {
            setDateRange({ start: day, end: dateRange.start });
        } else {
            setDateRange({ ...dateRange, end: day });
        }
    }
  };

  return (
    <section className="py-24 bg-bunny-cream border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Advanced</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Complex Inputs</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                For high-fidelity tasks like travel planning, we use immersive input patterns. The date range picker and smart location search are designed to handle complexity with grace.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. Date Range Picker */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Date Range Picker</h4>
                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 pb-6 border-b border-gray-100 gap-4">
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Check In</div>
                            <div className={`text-2xl font-bold transition-colors ${dateRange.start ? 'text-bunny-dark' : 'text-gray-300'}`}>
                                {dateRange.start ? `Oct ${dateRange.start}` : 'Select Date'}
                            </div>
                        </div>
                        <ArrowRight className="text-gray-300 hidden md:block" />
                        <div>
                            <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Check Out</div>
                             <div className={`text-2xl font-bold transition-colors ${dateRange.end ? 'text-bunny-dark' : 'text-gray-300'}`}>
                                {dateRange.end ? `Oct ${dateRange.end}` : 'Select Date'}
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between items-start">
                        {/* Month 1 */}
                        <div className="w-full">
                            <div className="flex justify-between items-center mb-6 px-2">
                                <h5 className="font-bold text-lg text-bunny-dark">October 2024</h5>
                                <div className="flex gap-2">
                                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronLeft size={20} className="text-gray-400"/></button>
                                    <button className="p-1 hover:bg-gray-100 rounded-full transition-colors"><ChevronRight size={20} className="text-gray-400"/></button>
                                </div>
                            </div>
                            <div className="grid grid-cols-7 gap-y-2 mb-2 text-center">
                                {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <span key={d} className="text-xs font-bold text-gray-400">{d}</span>)}
                            </div>
                            <div className="grid grid-cols-7 gap-y-1 gap-x-0 text-center select-none">
                                {/* Padding Days for Oct 2024 (Starts Tuesday) */}
                                {Array.from({length: 2}).map((_, i) => <div key={`pad-${i}`} />)}
                                
                                {/* Days */}
                                {Array.from({length: 31}, (_, i) => {
                                    const d = i + 1;
                                    const { start, end } = dateRange;
                                    const isStart = start === d;
                                    const isEnd = end === d;
                                    const inRange = start && end && d > start && d < end;
                                    const isSelected = isStart || isEnd;
                                    
                                    return (
                                        <div key={d} className="relative py-1">
                                            {/* Range Highlight */}
                                            {(inRange || isStart || isEnd) && end && (
                                                <div className={`absolute inset-y-1 bg-gray-100 z-0 
                                                    ${isStart ? 'left-1/2 rounded-l-full' : ''} 
                                                    ${isEnd ? 'right-1/2 rounded-r-full' : ''} 
                                                    ${inRange ? 'inset-x-0' : ''}
                                                    ${isStart && !end ? 'hidden' : ''}
                                                `}></div>
                                            )}
                                            <button 
                                                onClick={() => handleDateClick(d)}
                                                className={`relative z-10 w-10 h-10 flex items-center justify-center text-sm font-bold rounded-full transition-all mx-auto ${
                                                    isSelected 
                                                    ? 'bg-bunny-dark text-white shadow-md transform scale-105' 
                                                    : 'text-bunny-dark hover:bg-gray-100'
                                                }`}
                                            >
                                                {d}
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex justify-end items-center pt-8 mt-4">
                         <button className="bg-bunny-red text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-red-600 transition-colors active:scale-95">
                             Apply Dates
                         </button>
                    </div>
                </div>
            </div>

            {/* 2. Smart Combobox */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Smart Location Input</h4>
                <div className="bg-white rounded-[32px] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 min-h-[400px]">
                    <div className="relative max-w-sm">
                        <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 block ml-1">Where to?</label>
                        
                        <div 
                            className="relative"
                            onClick={() => setComboboxOpen(!comboboxOpen)}
                        >
                            <div className={`flex items-center gap-3 w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3.5 cursor-text transition-all ${comboboxOpen ? 'ring-2 ring-bunny-red/20 border-bunny-red' : 'hover:border-gray-300'}`}>
                                <Search size={20} className={comboboxOpen ? "text-bunny-red" : "text-gray-400"} />
                                <input 
                                    type="text" 
                                    value={selectedCity} 
                                    readOnly 
                                    className="bg-transparent w-full font-bold text-bunny-dark focus:outline-none cursor-pointer" 
                                />
                            </div>

                            {comboboxOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-20 animate-fade-in-up">
                                    <div className="p-2">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase px-3 py-2">Nearby</div>
                                        <button className="w-full flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-gray-50 transition-colors text-left">
                                            <div className="w-8 h-8 bg-bunny-red/10 text-bunny-red rounded-full flex items-center justify-center">
                                                <MapPin size={14} />
                                            </div>
                                            <span className="font-medium text-bunny-dark text-sm">Use current location</span>
                                        </button>
                                        
                                        <div className="h-px bg-gray-100 my-2"></div>
                                        
                                        <div className="text-[10px] font-bold text-gray-400 uppercase px-3 py-2">Popular Destinations</div>
                                        {cities.map((city) => (
                                            <button 
                                                key={city.value}
                                                onClick={() => { setSelectedCity(city.label); setComboboxOpen(false); }}
                                                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-gray-50 transition-colors text-left group"
                                            >
                                                <span className="font-medium text-bunny-dark text-sm">{city.label}</span>
                                                {selectedCity === city.label && <Check size={16} className="text-bunny-red" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        
                        {/* Context Hint */}
                        <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100 flex gap-3 items-start">
                            <div className="bg-white p-1.5 rounded-full shadow-sm text-blue-500 mt-0.5">
                                <MapPin size={12} />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-blue-800 mb-1">Travel Tip</p>
                                <p className="text-xs text-blue-600 leading-relaxed">
                                    Prices in New York are 15% lower in November. Consider adjusting your dates for better deals.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
        <style>{`
            @keyframes fade-in-up {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
            .animate-fade-in-up {
                animation: fade-in-up 0.2s ease-out forwards;
            }
        `}</style>
      </div>
    </section>
  );
};

export default AdvancedPatterns;