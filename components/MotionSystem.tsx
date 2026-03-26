import React, { useState } from 'react';
import { RefreshCw, Heart, Bell } from 'lucide-react';

const MotionSystem: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [liked, setLiked] = useState(false);
  const [notified, setNotified] = useState(false);

  const triggerAnimation = () => {
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 2000);
  };

  return (
    <section className="py-24 bg-bunny-light border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 mb-16">
            <div className="lg:w-1/3">
                <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Foundations / Motion</h3>
                <h2 className="text-4xl font-bold text-bunny-dark mb-6">Playful Physics</h2>
                <p className="text-bunny-gray text-lg mb-8">
                    Our motion language mimics the real world. We use spring physics rather than linear easings to make interactions feel tactile, responsive, and alive.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm font-mono text-bunny-gray">
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                        <span className="block text-xs uppercase opacity-50 mb-1">Duration</span>
                        <span className="font-bold text-bunny-dark">300ms - 500ms</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg border border-gray-100">
                        <span className="block text-xs uppercase opacity-50 mb-1">Easing</span>
                        <span className="font-bold text-bunny-dark">Spring(120, 20)</span>
                    </div>
                </div>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Card 1: Easing Comparison */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="font-bold text-bunny-dark">Velocity & Ease</h4>
                        <button onClick={triggerAnimation} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <RefreshCw size={18} className={isPlaying ? 'animate-spin' : ''} />
                        </button>
                    </div>
                    
                    <div className="space-y-6">
                        <div>
                            <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                <span>Bunny Spring</span>
                                <span>Natural</span>
                            </div>
                            <div className="h-12 bg-gray-50 rounded-xl relative overflow-hidden">
                                <div 
                                    className={`absolute top-1 left-1 bottom-1 w-10 bg-bunny-red rounded-lg shadow-sm ${isPlaying ? 'translate-x-[calc(100%_+_240px)]' : 'translate-x-0'}`}
                                    style={{ transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)' }} 
                                ></div>
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                                <span>Linear</span>
                                <span>Robotic</span>
                            </div>
                            <div className="h-12 bg-gray-50 rounded-xl relative overflow-hidden">
                                <div 
                                    className={`absolute top-1 left-1 bottom-1 w-10 bg-gray-400 rounded-lg ${isPlaying ? 'translate-x-[calc(100%_+_240px)]' : 'translate-x-0'}`}
                                    style={{ transition: 'transform 0.8s linear' }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Micro-interactions */}
                <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                    <h4 className="font-bold text-bunny-dark mb-8">Micro-feedback</h4>
                    <div className="flex justify-around items-center h-40">
                        
                        {/* Heart Pop */}
                        <div className="flex flex-col items-center gap-4">
                            <button 
                                onClick={() => setLiked(!liked)}
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${liked ? 'bg-red-50' : 'bg-gray-50 hover:bg-gray-100'}`}
                            >
                                <Heart 
                                    size={32} 
                                    className={`transition-all duration-500 ${liked ? 'fill-bunny-red text-bunny-red scale-110' : 'text-gray-400 scale-100'}`} 
                                    style={liked ? { animation: 'pulse 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)' } : {}}
                                />
                            </button>
                            <span className="text-xs font-mono text-gray-400">Tap</span>
                        </div>

                        {/* Bell Shake */}
                        <div className="flex flex-col items-center gap-4">
                            <button 
                                onClick={() => setNotified(!notified)}
                                className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ${notified ? 'bg-bunny-dark text-white' : 'bg-gray-50 hover:bg-gray-100 text-gray-400'}`}
                            >
                                <Bell 
                                    size={32} 
                                    className={notified ? 'animate-wiggle' : ''}
                                />
                            </button>
                            <span className="text-xs font-mono text-gray-400">Toggle</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <style>{`
            @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.3); }
                100% { transform: scale(1.1); }
            }
            @keyframes wiggle {
                0%, 100% { transform: rotate(-3deg); }
                50% { transform: rotate(3deg); }
            }
        `}</style>
      </div>
    </section>
  );
};

export default MotionSystem;