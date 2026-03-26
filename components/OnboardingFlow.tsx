import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BunnyLogo } from './BunnyLogo';

const OnboardingFlow: React.FC = () => {
    return (
        <section className="py-24 bg-bunny-dark text-white overflow-hidden border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/3">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-red mb-4">Experience / Onboarding</h3>
                        <h2 className="text-4xl font-bold mb-6">A Warm Welcome</h2>
                        <p className="text-white/60 text-lg leading-relaxed mb-8">
                            The onboarding experience is designed to feel like a concierge greeting you at a hotel. Minimal friction, bold typography, and a clear path forward.
                        </p>
                        <ul className="space-y-4 text-sm text-white/40 font-mono">
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-bunny-red rounded-full"></div>
                                Brand Immersion
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-bunny-red rounded-full"></div>
                                Personalization
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-bunny-red rounded-full"></div>
                                Gentle Handoff
                            </li>
                        </ul>
                    </div>
                    
                    <div className="lg:w-2/3 w-full flex gap-6 overflow-x-auto pb-8 hide-scrollbar snap-x px-4 lg:px-0">
                        {/* Screen 1 */}
                        <div className="flex-shrink-0 w-[280px] h-[600px] bg-bunny-red rounded-[32px] p-8 flex flex-col justify-between relative shadow-2xl border-4 border-white/10 snap-center transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="pt-12">
                                <BunnyLogo className="w-16 h-16 text-white mb-8" />
                                <h3 className="text-4xl font-extrabold leading-[0.9]">Hello, <br/> neighbor.</h3>
                            </div>
                            <div>
                                <p className="text-white/80 font-medium mb-8 text-lg">Ready to explore your city?</p>
                                <div className="h-1 w-full bg-black/20 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-white"></div>
                                </div>
                                <div className="flex justify-between mt-4 text-sm font-bold opacity-60">
                                    <span>Skip</span>
                                </div>
                            </div>
                        </div>

                         {/* Screen 2 */}
                         <div className="flex-shrink-0 w-[280px] h-[600px] bg-white text-bunny-dark rounded-[32px] p-8 flex flex-col justify-between relative shadow-2xl border-4 border-white/10 snap-center transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="pt-12">
                                <div className="w-16 h-16 bg-bunny-light rounded-full flex items-center justify-center mb-6 text-3xl">
                                     👋
                                </div>
                                <h3 className="text-3xl font-bold leading-tight mb-2">What are you into?</h3>
                                <p className="text-gray-500 mb-8">We'll curate the best for you.</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Live Music', 'Art', 'Food', 'Tech', 'Nature'].map((tag, i) => (
                                        <span key={tag} className={`px-4 py-2 border rounded-full text-sm font-medium cursor-pointer ${i === 0 || i === 2 ? 'bg-bunny-dark text-white border-bunny-dark' : 'border-gray-200 text-gray-500'}`}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <button className="w-full py-4 rounded-xl bg-bunny-dark text-white font-bold flex justify-center items-center gap-2 shadow-lg shadow-bunny-dark/20">
                                Continue <ArrowRight size={16} />
                            </button>
                        </div>

                        {/* Screen 3 */}
                        <div className="flex-shrink-0 w-[280px] h-[600px] bg-bunny-cream rounded-[32px] p-8 flex flex-col items-center justify-center relative shadow-2xl border-4 border-white/10 text-center snap-center transform hover:scale-[1.02] transition-transform duration-300">
                            <div className="w-32 h-32 bg-white rounded-full shadow-lg mb-8 flex items-center justify-center animate-pulse">
                                <BunnyLogo className="w-16 h-16 text-bunny-red" />
                            </div>
                            <h3 className="text-2xl font-bold text-bunny-dark mb-2">You're all set!</h3>
                            <p className="text-bunny-gray mb-12">Let's find your first event.</p>
                            <button className="w-full py-4 rounded-xl bg-bunny-red text-white font-bold shadow-lg shadow-bunny-red/30 hover:bg-red-600 transition-colors">
                                Start Exploring
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default OnboardingFlow;