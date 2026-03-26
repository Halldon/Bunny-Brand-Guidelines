import React, { useState } from 'react';
import { Layers, Type, Palette, MessageCircle, Square, Check } from 'lucide-react';

const BrandPlayground: React.FC = () => {
  const [layers, setLayers] = useState({
    typography: false,
    shape: false,
    color: false,
    voice: false
  });

  const toggleLayer = (key: keyof typeof layers) => {
    setLayers(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const allActive = Object.values(layers).every(Boolean);
  
  const reset = () => setLayers({ typography: false, shape: false, color: false, voice: false });
  const applyAll = () => setLayers({ typography: true, shape: true, color: true, voice: true });

  // Dynamic Styles based on state
  const fontClass = layers.typography ? 'font-sans' : 'font-mono tracking-tighter';
  const radiusClass = layers.shape ? 'rounded-[32px]' : 'rounded-none';
  const btnRadiusClass = layers.shape ? 'rounded-xl' : 'rounded-none';
  
  const bgClass = layers.color ? 'bg-bunny-cream' : 'bg-gray-200';
  const cardBgClass = layers.color ? 'bg-white shadow-xl shadow-bunny-red/5' : 'bg-white border border-black';
  const textDarkClass = layers.color ? 'text-bunny-dark' : 'text-black';
  const textMutedClass = layers.color ? 'text-bunny-gray' : 'text-gray-500';
  const accentClass = layers.color ? 'bg-bunny-red text-white border-transparent' : 'bg-black text-white border-transparent';
  const secondaryClass = layers.color ? 'bg-bunny-light text-bunny-dark' : 'bg-white border border-black text-black';

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Controls */}
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bunny-red/10 text-bunny-red text-xs font-bold uppercase tracking-wider mb-6">
              Interactive Demo
            </div>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">The Bunny Effect</h2>
            <p className="text-bunny-gray text-lg mb-8">
              A brand is more than just a logo. See how layering our core elements transforms a generic wireframe into a warm, inviting experience.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { id: 'typography', label: 'Typography', icon: Type, desc: 'Apply Outfit font family' },
                { id: 'shape', label: 'Shape Language', icon: Square, desc: 'Soft, rounded corners' },
                { id: 'color', label: 'Color Palette', icon: Palette, desc: 'Warmth and energy' },
                { id: 'voice', label: 'Voice & Tone', icon: MessageCircle, desc: 'Friendly copy' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => toggleLayer(item.id as keyof typeof layers)}
                  className={`w-full flex items-center gap-4 p-4 border-2 rounded-xl transition-all duration-200 text-left group ${
                    layers[item.id as keyof typeof layers] 
                      ? 'border-bunny-dark bg-bunny-dark text-white shadow-lg' 
                      : 'border-gray-100 hover:border-bunny-red/30 hover:bg-bunny-red/5'
                  }`}
                >
                  <div className={`p-2 rounded-lg ${layers[item.id as keyof typeof layers] ? 'bg-white/20' : 'bg-gray-100 group-hover:bg-white'}`}>
                    <item.icon size={20} />
                  </div>
                  <div>
                    <div className="font-bold">{item.label}</div>
                    <div className={`text-xs ${layers[item.id as keyof typeof layers] ? 'text-white/60' : 'text-gray-400'}`}>
                      {item.desc}
                    </div>
                  </div>
                  <div className={`ml-auto w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    layers[item.id as keyof typeof layers] ? 'border-white bg-white text-bunny-dark' : 'border-gray-300'
                  }`}>
                    {layers[item.id as keyof typeof layers] && <Check size={14} strokeWidth={4} />}
                  </div>
                </button>
              ))}
            </div>

            <div className="flex gap-4">
                <button onClick={reset} className="text-sm font-bold text-gray-400 hover:text-bunny-dark underline decoration-2 underline-offset-4">Reset</button>
                <button onClick={applyAll} className="text-sm font-bold text-bunny-red hover:text-red-700 underline decoration-2 underline-offset-4">Apply All</button>
            </div>
          </div>

          {/* Preview Area */}
          <div className={`lg:w-2/3 w-full aspect-[4/3] ${bgClass} rounded-3xl flex items-center justify-center p-8 transition-colors duration-500 relative overflow-hidden`}>
            
            {/* Grid Pattern Background */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

            {/* The Card */}
            <div className={`w-[380px] ${cardBgClass} ${radiusClass} p-8 relative z-10 transition-all duration-500 transform hover:scale-105`}>
              
              {/* Card Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 ${layers.color ? 'bg-red-100 text-bunny-red' : 'bg-gray-100 text-black'} ${layers.shape ? 'rounded-full' : 'rounded-none'} flex items-center justify-center transition-all duration-500`}>
                   <Layers size={32} />
                </div>
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${textDarkClass} ${fontClass}`}>
                  {layers.voice ? "Welcome home!" : "Authentication Success"}
                </h3>
                <p className={`text-sm transition-colors duration-300 ${textMutedClass} ${fontClass}`}>
                  {layers.voice 
                    ? "We're so glad you're here. Let's find some amazing events nearby." 
                    : "User has been successfully logged into the system dashboard."}
                </p>
              </div>

              {/* Form Elements */}
              <div className="space-y-4">
                <div className={`p-4 border ${layers.color ? 'border-gray-100 bg-gray-50' : 'border-black bg-white'} ${btnRadiusClass} transition-all duration-300`}>
                   <div className={`text-[10px] uppercase font-bold mb-1 ${textMutedClass} ${fontClass}`}>
                     {layers.voice ? "Where are you?" : "Location_Input"}
                   </div>
                   <div className={`font-medium ${textDarkClass} ${fontClass}`}>
                     {layers.voice ? "Brooklyn, NY" : "40.7128° N, 74.0060° W"}
                   </div>
                </div>

                <button className={`w-full py-4 font-bold text-sm transition-all duration-300 ${accentClass} ${btnRadiusClass} ${fontClass}`}>
                  {layers.voice ? "Let's Go" : "PROCEED_NEXT"}
                </button>
                
                <button className={`w-full py-4 font-bold text-sm transition-all duration-300 ${secondaryClass} ${btnRadiusClass} ${fontClass}`}>
                  {layers.voice ? "Maybe Later" : "CANCEL_ACTION"}
                </button>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandPlayground;