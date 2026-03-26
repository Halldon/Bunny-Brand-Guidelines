import React, { useState } from 'react';
import { Heart, Star, ChevronRight, CheckCircle2, AlertCircle, X, Info, Bell } from 'lucide-react';

const ComponentLibrary: React.FC = () => {
  const [toasts, setToasts] = useState<{id: number, type: 'success' | 'error' | 'info', message: string}[]>([]);
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const addToast = (type: 'success' | 'error' | 'info') => {
    const id = Date.now();
    const messages = {
      success: "Tickets secured! Pack your bags.",
      error: "Whoops. That card didn't go through.",
      info: "Just so you know, doors open at 8PM."
    };
    setToasts(prev => [...prev, { id, type, message: messages[type] }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
        {/* Toast Container - Fixed for demo purposes inside section or fixed to screen? Let's fix to screen for realism */}
        <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 pointer-events-none">
            {toasts.map(t => (
                <div key={t.id} className={`pointer-events-auto transform transition-all duration-500 hover:scale-105 min-w-[300px] p-4 rounded-xl shadow-2xl flex items-center gap-4 animate-slide-up ${
                    t.type === 'success' ? 'bg-bunny-dark text-white' :
                    t.type === 'error' ? 'bg-bunny-red text-white' :
                    'bg-white text-bunny-dark border border-gray-100'
                }`}>
                    <div className={`p-1 rounded-full ${t.type === 'info' ? 'bg-gray-100 text-bunny-dark' : 'bg-white/20'}`}>
                        {t.type === 'success' && <CheckCircle2 size={16} />}
                        {t.type === 'error' && <AlertCircle size={16} />}
                        {t.type === 'info' && <Info size={16} />}
                    </div>
                    <p className="text-sm font-medium">{t.message}</p>
                    <button onClick={() => setToasts(prev => prev.filter(toast => toast.id !== t.id))} className="ml-auto opacity-50 hover:opacity-100">
                        <X size={14} />
                    </button>
                </div>
            ))}
        </div>

      <div className="container mx-auto px-6">
        <div className="mb-16">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Atoms</h3>
             <h2 className="text-4xl font-bold text-bunny-dark">Atomic Interactions</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Column 1: Feedback & States */}
            <div className="space-y-12">
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Toast Notifications</h4>
                    <p className="text-sm text-bunny-gray mb-4">Notifications should be playful yet clear. We use dark mode for success to pop against the light UI.</p>
                    <div className="flex flex-col gap-3 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                        <button onClick={() => addToast('success')} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-green-50 text-green-700 transition-colors text-sm font-bold group">
                            <span>Trigger Success</span>
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><CheckCircle2 size={14}/></div>
                        </button>
                        <button onClick={() => addToast('error')} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-red-50 text-bunny-red transition-colors text-sm font-bold group">
                            <span>Trigger Error</span>
                            <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><AlertCircle size={14}/></div>
                        </button>
                        <button onClick={() => addToast('info')} className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 text-bunny-dark transition-colors text-sm font-bold group">
                            <span>Trigger Info</span>
                            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><Info size={14}/></div>
                        </button>
                    </div>
                </div>

                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2 mb-6">Tooltips & Popovers</h4>
                    <div className="p-12 bg-white rounded-2xl border border-gray-100 shadow-sm flex justify-center items-center">
                        <div className="relative">
                            <button 
                                onMouseEnter={() => setActiveTooltip('demo')}
                                onMouseLeave={() => setActiveTooltip(null)}
                                className="w-10 h-10 rounded-full bg-bunny-light text-bunny-dark flex items-center justify-center hover:bg-bunny-dark hover:text-white transition-colors"
                            >
                                <Info size={20} />
                            </button>
                            {/* Tooltip Content */}
                            <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 bg-bunny-dark text-white p-3 rounded-xl text-xs leading-relaxed text-center shadow-xl transition-all duration-300 transform origin-bottom ${activeTooltip === 'demo' ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-2 pointer-events-none'}`}>
                                <div className="font-bold mb-1 text-bunny-red">Did you know?</div>
                                Tooltips should be concise and helpful, never crucial.
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-2 border-4 border-transparent border-t-bunny-dark"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Column 2: Cards & Tiles */}
            <div className="space-y-12">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Card Archetypes</h4>
                
                {/* Standard Listing */}
                <div className="group bg-white p-4 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                    <div className="bg-gray-200 aspect-[4/3] rounded-xl mb-4 relative overflow-hidden">
                        <img src="https://picsum.photos/seed/bunnyCard/400/300" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" alt="Listing" referrerPolicy="no-referrer" />
                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/10 backdrop-blur rounded-full flex items-center justify-center text-white hover:bg-white hover:text-bunny-red transition-colors">
                            <Heart size={16} className="fill-current" />
                        </button>
                        <div className="absolute bottom-3 left-3 bg-bunny-dark/90 backdrop-blur text-white text-[10px] font-bold px-2 py-1 rounded">
                            SELLING FAST
                        </div>
                    </div>
                    <div className="flex justify-between items-start">
                        <div>
                             <h5 className="font-bold text-bunny-dark text-lg group-hover:text-bunny-red transition-colors">Neon Nights 2024</h5>
                             <p className="text-sm text-gray-500 mt-1">Brooklyn Mirage • $55</p>
                        </div>
                        <div className="flex items-center text-xs font-bold gap-1 bg-gray-50 px-2 py-1 rounded-full text-bunny-dark">
                            <Star size={12} className="text-bunny-red fill-current"/> 4.9
                        </div>
                    </div>
                </div>

                {/* Horizontal Row */}
                 <div className="group bg-white p-3 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 cursor-pointer flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                         <img src="https://picsum.photos/seed/bunnyAvatar2/100/100" className="w-full h-full object-cover" alt="Avatar" referrerPolicy="no-referrer" />
                    </div>
                    <div className="flex-1">
                        <h4 className="font-bold text-bunny-dark text-sm mb-1 group-hover:text-bunny-red transition-colors">Artist Spotlight</h4>
                        <p className="text-gray-400 text-xs line-clamp-1">Discover the emerging sounds of the underground scene.</p>
                    </div>
                    <ChevronRight size={16} className="text-gray-300 group-hover:text-bunny-red group-hover:translate-x-1 transition-all" />
                </div>
            </div>

            {/* Column 3: Impact & Editorial */}
            <div className="space-y-12">
                 <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-2">Editorial & Impact</h4>
                 
                 {/* Editorial Card */}
                 <div className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer">
                    <img src="https://picsum.photos/seed/bunnyEditorial/600/800" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Editorial" referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                        <span className="text-bunny-red font-bold text-xs tracking-widest uppercase mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Collection</span>
                        <h3 className="text-3xl font-bold leading-tight mb-2">Summer <br/>In The City</h3>
                        <p className="text-white/70 text-sm line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity">
                            From rooftop jazz to underground techno, find your rhythm this season.
                        </p>
                    </div>
                 </div>

                 {/* Minimal Stat */}
                 <div className="bg-bunny-light rounded-2xl p-6 flex items-center justify-between group hover:bg-bunny-dark hover:text-white transition-colors duration-300">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-wider opacity-50 mb-1">Total Events</div>
                        <div className="text-3xl font-bold">1,248</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white text-bunny-dark flex items-center justify-center group-hover:rotate-12 transition-transform">
                        <Bell size={20} />
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}

export default ComponentLibrary;