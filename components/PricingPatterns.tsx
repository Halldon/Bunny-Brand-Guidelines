import React, { useState } from 'react';
import { Check, X, Zap } from 'lucide-react';

const PricingPatterns: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
        name: "Community",
        price: "Free",
        desc: "For casual event browsing.",
        features: ["Access to public events", "Personalized feed", "Community discussions"],
        cta: "Sign Up",
        primary: false
    },
    {
        name: "Pro Pass",
        price: isAnnual ? "$120" : "$12",
        period: isAnnual ? "/year" : "/mo",
        desc: "For the social butterfly.",
        features: ["Priority booking", "No booking fees", "Exclusive backstage content", "Member badge"],
        cta: "Go Pro",
        primary: true,
        popular: true
    },
    {
        name: "Organizer",
        price: isAnnual ? "$290" : "$29",
        period: isAnnual ? "/year" : "/mo",
        desc: "For creators and hosts.",
        features: ["Create unlimited events", "Advanced analytics", "Payouts & ticketing", "Priority support"],
        cta: "Start Hosting",
        primary: false
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Commerce</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Value Proposition</h2>
            <p className="text-bunny-gray text-lg">
                Pricing tables use our card component to create clear hierarchy. Badges highlight value, and toggles put the user in control of their commitment.
            </p>
        </div>

        {/* Toggle */}
        <div className="flex justify-center mb-16">
            <div className="bg-white p-1.5 rounded-full border border-gray-200 inline-flex relative shadow-sm">
                <div className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] bg-bunny-dark rounded-full transition-all duration-300 shadow-md ${isAnnual ? 'left-[calc(50%+3px)]' : 'left-1.5'}`}></div>
                <button 
                    onClick={() => setIsAnnual(false)}
                    className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors ${!isAnnual ? 'text-white' : 'text-gray-500 hover:text-bunny-dark'}`}
                >
                    Monthly
                </button>
                <button 
                    onClick={() => setIsAnnual(true)}
                    className={`relative z-10 px-8 py-2.5 rounded-full text-sm font-bold transition-colors ${isAnnual ? 'text-white' : 'text-gray-500 hover:text-bunny-dark'}`}
                >
                    Annual
                    {isAnnual && <span className="absolute -top-3 -right-6 bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full border border-green-200">Save 20%</span>}
                </button>
            </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {tiers.map((tier, i) => (
                <div 
                    key={i}
                    className={`relative bg-white rounded-[40px] p-8 border transition-all duration-300 ${
                        tier.primary 
                        ? 'shadow-2xl shadow-bunny-red/10 border-bunny-red/20 scale-105 z-10' 
                        : 'shadow-xl shadow-gray-200/50 border-gray-100 hover:shadow-2xl hover:-translate-y-1'
                    }`}
                >
                    {tier.popular && (
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-bunny-red text-white text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                            <Zap size={12} className="fill-current" /> Most Popular
                        </div>
                    )}

                    <div className="text-center mb-8 pt-4">
                        <h3 className="text-lg font-bold text-bunny-dark mb-2">{tier.name}</h3>
                        <div className="flex items-center justify-center gap-1 mb-2">
                            <span className="text-4xl font-extrabold text-bunny-dark tracking-tight">{tier.price}</span>
                            {tier.period && <span className="text-gray-400 font-medium self-end mb-1.5">{tier.period}</span>}
                        </div>
                        <p className="text-gray-500 text-sm">{tier.desc}</p>
                    </div>

                    <div className="space-y-4 mb-8">
                        {tier.features.map((feat, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${tier.primary ? 'bg-bunny-red/10 text-bunny-red' : 'bg-gray-100 text-gray-500'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="text-sm font-medium text-gray-600">{feat}</span>
                            </div>
                        ))}
                        {/* Fillers for alignment */}
                        {tier.features.length < 4 && Array.from({length: 4 - tier.features.length}).map((_, idx) => (
                             <div key={`fill-${idx}`} className="flex items-start gap-3 opacity-30 grayscale">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                                    <X size={12} strokeWidth={3} className="text-gray-400" />
                                </div>
                                <span className="text-sm font-medium text-gray-400 decoration-slate-300">Feature not included</span>
                             </div>
                        ))}
                    </div>

                    <button 
                        className={`w-full py-4 rounded-2xl font-bold text-sm transition-all duration-300 active:scale-95 ${
                            tier.primary 
                            ? 'bg-bunny-dark text-white shadow-xl hover:bg-black' 
                            : 'bg-bunny-light text-bunny-dark hover:bg-gray-200'
                        }`}
                    >
                        {tier.cta}
                    </button>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPatterns;