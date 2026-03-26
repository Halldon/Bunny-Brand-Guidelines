import React, { useState } from 'react';
import { MessageSquare, AlertCircle, CheckCircle, Info } from 'lucide-react';

const VoiceTone: React.FC = () => {
  const [activeTab, setActiveTab] = useState('error');

  const scenarios = [
    { 
        id: 'error', 
        icon: AlertCircle,
        label: 'Error Message', 
        bad: 'Authentication Failed. Invalid Credentials.', 
        good: "We couldn't sign you in. Let's try that again.",
        why: "We avoid robotic, technical jargon. We state the problem simply and offer a path forward immediately."
    },
    { 
        id: 'empty', 
        icon: Info,
        label: 'Empty State', 
        bad: 'No events found.', 
        good: "It's quiet here. Change your filters to see more events.",
        why: "An empty state isn't a dead end. It's an opportunity to guide the user to a solution with a gentle nudge."
    },
    { 
        id: 'success', 
        icon: CheckCircle,
        label: 'Success', 
        bad: 'Purchase confirmed. Receipt sent.', 
        good: "You're going! Tickets are in your wallet.",
        why: "We share the user's excitement. A transaction is a moment of celebration, not just a database update."
    },
    {
        id: 'onboarding',
        icon: MessageSquare,
        label: 'Onboarding',
        bad: 'Enable location services to proceed.',
        good: "To find cool spots near you, we need to know where you are.",
        why: "We explain the 'why' behind permissions. We ask for consent like a polite neighbor, not a gatekeeper."
    }
  ];

  const activeScenario = scenarios.find(s => s.id === activeTab) || scenarios[0];

  return (
    <section className="py-24 bg-bunny-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/3">
                 <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Identity / Voice & Tone</h3>
                 <h2 className="text-4xl font-bold text-bunny-dark mb-6">The Neighbor</h2>
                 <p className="text-bunny-gray text-lg leading-relaxed mb-8">
                     We don't sound like a corporation; we sound like the person next door who knows all the best spots. We are helpful, enthusiastic, and brief.
                 </p>
                 
                 <div className="flex flex-col gap-2">
                     {scenarios.map((s) => (
                         <button
                            key={s.id}
                            onClick={() => setActiveTab(s.id)}
                            className={`flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 ${activeTab === s.id ? 'bg-white shadow-md scale-105 border-l-4 border-bunny-red' : 'hover:bg-white/50 text-bunny-gray border-l-4 border-transparent'}`}
                         >
                             <s.icon size={20} className={activeTab === s.id ? 'text-bunny-red' : 'text-gray-400'} />
                             <span className={`font-medium ${activeTab === s.id ? 'text-bunny-dark' : ''}`}>{s.label}</span>
                         </button>
                     ))}
                 </div>
            </div>

            <div className="lg:w-2/3 w-full">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        {/* The 'Bad' Side */}
                        <div className="bg-gray-50 p-10 border-b md:border-b-0 md:border-r border-gray-100 flex flex-col justify-center min-h-[300px]">
                             <span className="inline-block text-xs font-bold text-gray-400 uppercase tracking-widest mb-6">Traditional / Corporate</span>
                             <p className="text-2xl font-medium text-gray-400 font-sans mb-4">
                                 "{activeScenario.bad}"
                             </p>
                             <div className="mt-auto">
                                 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-200 text-gray-500 text-xs font-bold">
                                     Cold
                                 </div>
                             </div>
                        </div>

                        {/* The 'Good' Side */}
                        <div className="bg-white p-10 flex flex-col justify-center min-h-[300px] relative overflow-hidden">
                             <div className="absolute top-0 left-0 w-full h-1 bg-bunny-red"></div>
                             <span className="inline-block text-xs font-bold text-bunny-red uppercase tracking-widest mb-6">The Bunny Way</span>
                             <p className="text-3xl font-bold text-bunny-dark font-sans leading-tight mb-6">
                                 "{activeScenario.good}"
                             </p>
                             <div className="mt-auto">
                                <p className="text-sm text-bunny-gray leading-relaxed border-t border-gray-100 pt-4">
                                    <span className="font-bold text-bunny-dark">Why:</span> {activeScenario.why}
                                </p>
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

export default VoiceTone;