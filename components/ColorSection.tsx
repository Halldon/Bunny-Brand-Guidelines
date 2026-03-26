import React, { useState } from 'react';
import { BRAND_COLORS } from '../constants';
import { Search, Bell, Check, AlertTriangle, Loader2 } from 'lucide-react';

const ColorSection: React.FC = () => {
  const [btnState, setBtnState] = useState<'idle' | 'loading'>('idle');
  const [inputFocus, setInputFocus] = useState(false);

  const handleBtnClick = () => {
    setBtnState('loading');
    setTimeout(() => setBtnState('idle'), 2000);
  };

  return (
    <section id="color" className="py-24 bg-bunny-cream">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Foundations / Color Palette</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-bunny-dark mb-6">Vibrant & Connected</h2>
            <p className="text-bunny-dark text-lg opacity-80">
                The Bunny palette is anchored by a proprietary red that feels energetic but not alarming. Supported by warm neutrals and soft pastels, it creates an environment that feels like a sunny living room.
            </p>
        </div>

        {/* Swatches Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-[400px] w-full shadow-2xl rounded-3xl overflow-hidden mb-24">
          {BRAND_COLORS.map((color) => (
            <div 
                key={color.name} 
                className="relative group h-full transition-all duration-500 hover:flex-[1.5]"
                style={{ backgroundColor: color.hex }}
            >
              <div className="absolute bottom-6 left-6 transition-opacity duration-300">
                <p className="font-bold text-lg mb-1" style={{ color: color.textColor }}>{color.name}</p>
                <p className="font-mono text-sm opacity-80 uppercase" style={{ color: color.textColor }}>{color.hex}</p>
                <p className="text-xs mt-2 opacity-0 group-hover:opacity-70 transition-opacity duration-500" style={{ color: color.textColor }}>{color.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Functional Application */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
                <h3 className="text-2xl font-bold text-bunny-dark mb-8">Functional Application</h3>
                <p className="text-bunny-gray mb-8">
                  Color is used sparingly to guide attention. Red is reserved for primary actions and active states.
                  Warm neutrals create depth without the harshness of pure grey.
                </p>

                <div className="space-y-8">
                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 items-center p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <button 
                            onClick={handleBtnClick}
                            className="bg-bunny-red text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-bunny-red/30 hover:bg-red-600 transition-all active:scale-95 flex items-center gap-2 min-w-[120px] justify-center"
                        >
                            {btnState === 'loading' ? <Loader2 className="animate-spin" size={20}/> : 'Primary'}
                        </button>
                        <button className="bg-bunny-light text-bunny-dark px-8 py-3 rounded-xl font-bold hover:bg-gray-200 transition-colors active:scale-95">
                            Secondary
                        </button>
                        <button className="text-bunny-gray font-medium hover:text-bunny-dark underline decoration-2 decoration-bunny-red/30 underline-offset-4 hover:decoration-bunny-red transition-all">
                            Text Link
                        </button>
                    </div>

                    {/* Inputs */}
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm space-y-4">
                        <div className={`relative group transition-all duration-300 ${inputFocus ? 'scale-[1.02]' : ''}`}>
                            <Search className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${inputFocus ? 'text-bunny-red' : 'text-gray-400'}`} size={20} />
                            <input 
                                type="text" 
                                placeholder="Search for events..." 
                                onFocus={() => setInputFocus(true)}
                                onBlur={() => setInputFocus(false)}
                                className="w-full bg-bunny-light border-2 border-transparent focus:border-bunny-red focus:bg-white rounded-xl py-3 pl-12 pr-4 text-bunny-dark placeholder-gray-400 outline-none transition-all"
                            />
                            {inputFocus && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-10 animate-fade-in">
                                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg text-sm font-medium cursor-pointer text-bunny-dark">Result 1</div>
                                    <div className="px-3 py-2 hover:bg-gray-50 rounded-lg text-sm font-medium cursor-pointer text-bunny-dark">Result 2</div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Alerts/States */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-green-50 border border-green-100 p-4 rounded-xl flex gap-3 items-start transform hover:-translate-y-1 transition-transform cursor-default">
                            <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5"><Check size={12} /></div>
                            <div>
                                <p className="text-sm font-bold text-green-800">Success</p>
                                <p className="text-xs text-green-600">Action completed.</p>
                            </div>
                        </div>
                        <div className="bg-bunny-red/5 border border-bunny-red/10 p-4 rounded-xl flex gap-3 items-start transform hover:-translate-y-1 transition-transform cursor-default">
                            <div className="bg-bunny-red/10 p-1 rounded-full text-bunny-red mt-0.5"><Bell size={12} /></div>
                            <div>
                                <p className="text-sm font-bold text-bunny-dark">Attention</p>
                                <p className="text-xs text-bunny-gray">Review required.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Context */}
            <div className="bg-bunny-dark rounded-3xl p-8 md:p-12 text-white relative overflow-hidden h-full min-h-[500px] flex flex-col justify-center shadow-2xl">
                <div className="absolute top-0 right-0 w-64 h-64 bg-bunny-red rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-300 rounded-full filter blur-[80px] opacity-10 -translate-x-1/2 translate-y-1/2"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center mb-8 border border-white/20 shadow-inner">
                    <AlertTriangle className="text-bunny-red" size={32} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6">Semantic Meaning</h3>
                  <div className="space-y-6 text-white/70">
                    <p>
                      We use <span className="text-bunny-red font-bold">Bunny Red</span> not just for branding, but to signal importance and activity. It is the heartbeat of the interface.
                    </p>
                    <p>
                      <span className="text-white font-bold">Warm Charcoal</span> (#222222) replaces pure black to reduce eye strain while maintaining high contrast ratios (AAA).
                    </p>
                    <div className="pt-8 border-t border-white/10 flex gap-8">
                       <div>
                         <div className="text-2xl font-bold text-white">4.5:1</div>
                         <div className="text-xs text-white/40 uppercase tracking-wider">Min Contrast</div>
                       </div>
                       <div>
                         <div className="text-2xl font-bold text-white">60-30-10</div>
                         <div className="text-xs text-white/40 uppercase tracking-wider">Color Rule</div>
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

export default ColorSection;