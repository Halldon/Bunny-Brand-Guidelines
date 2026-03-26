import React, { useState } from 'react';
import { CreditCard, X, FileImage, Check } from 'lucide-react';

const FeedbackModules: React.FC = () => {
  const [activeTab, setActiveTab] = useState('account');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [progress, setProgress] = useState(66);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="mb-16">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Feedback</h3>
             <h2 className="text-4xl font-bold text-bunny-dark mb-6">Layered Context</h2>
             <p className="text-bunny-gray text-lg max-w-2xl">
                 Dialogs and tabs help maintain context without leaving the page. We use "pill" style segment controls for tabs to maintain our soft, organic shape language.
             </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* 1. Tabs & Progress */}
            <div className="space-y-12">
                
                {/* Tabs */}
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Segmented Controls</h4>
                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm">
                        <div className="bg-gray-100/80 p-1 rounded-full inline-flex relative">
                            {['account', 'password', 'billing'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold capitalize transition-all duration-300 ${
                                        activeTab === tab 
                                        ? 'text-bunny-dark shadow-sm' 
                                        : 'text-gray-400 hover:text-gray-600'
                                    }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <div className="absolute inset-0 bg-white rounded-full -z-10 shadow-sm animate-fade-in-fast"></div>
                                    )}
                                </button>
                            ))}
                        </div>
                        
                        <div className="mt-8 p-6 border border-gray-100 rounded-2xl bg-gray-50/50">
                            <h5 className="font-bold text-lg text-bunny-dark capitalize mb-2">{activeTab}</h5>
                            <p className="text-gray-500 text-sm">
                                Make changes to your {activeTab} here. Click save when you're done.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Progress */}
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Progress Indicators</h4>
                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-8">
                        
                        {/* Standard Bar */}
                        <div>
                            <div className="flex justify-between text-xs font-bold mb-2">
                                <span className="text-bunny-dark">Profile Completion</span>
                                <span className="text-bunny-red">{progress}%</span>
                            </div>
                            <div className="h-3 w-full bg-gray-100 rounded-full overflow-hidden">
                                <div 
                                    className="h-full bg-bunny-red rounded-full transition-all duration-1000 ease-out"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                        </div>

                        {/* Steps */}
                        <div className="flex items-center gap-2">
                            {[1, 2, 3, 4].map((step) => (
                                <div key={step} className="flex-1 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                                    <div className={`h-full bg-bunny-dark ${step <= 2 ? 'w-full' : 'w-0'}`}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Dialog / Modal */}
            <div>
                 <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Dialog & Overlay</h4>
                 <div className="bg-bunny-dark p-12 rounded-[40px] shadow-2xl relative overflow-hidden h-[500px] flex items-center justify-center">
                    
                    {/* Background decoration */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <div className="absolute top-10 right-10 w-32 h-32 bg-bunny-red rounded-full blur-[50px]"></div>
                        <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 rounded-full blur-[60px]"></div>
                    </div>

                    {/* Trigger Button (Demo) */}
                    {!isDialogOpen && (
                         <button 
                            onClick={() => setIsDialogOpen(true)}
                            className="relative z-10 bg-white text-bunny-dark px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
                        >
                            Open Ticket View
                        </button>
                    )}

                    {/* The Modal */}
                    {isDialogOpen && (
                        <div className="absolute inset-0 z-20 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm animate-fade-in">
                            <div className="bg-white w-full max-w-sm rounded-[32px] overflow-hidden shadow-2xl animate-scale-up">
                                <div className="p-6 pb-0 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-xl font-bold text-bunny-dark">Checkout</h3>
                                        <p className="text-gray-500 text-xs mt-1">Order #49204</p>
                                    </div>
                                    <button 
                                        onClick={() => setIsDialogOpen(false)}
                                        className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                                    >
                                        <X size={16} className="text-gray-500" />
                                    </button>
                                </div>
                                
                                <div className="p-6 space-y-4">
                                    <div className="bg-gray-50 p-4 rounded-2xl flex gap-4 items-center border border-gray-100">
                                        <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                                            <CreditCard size={20} className="text-bunny-red" />
                                        </div>
                                        <div>
                                            <div className="font-bold text-sm text-bunny-dark">Visa ending in 4242</div>
                                            <div className="text-xs text-gray-400">Expires 12/25</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-2 pt-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Subtotal</span>
                                            <span className="font-bold text-bunny-dark">$120.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Fees</span>
                                            <span className="font-bold text-bunny-dark">$12.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm pt-2 border-t border-gray-100">
                                            <span className="font-bold text-bunny-dark">Total</span>
                                            <span className="font-extrabold text-bunny-red">$132.00</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-4 bg-gray-50 border-t border-gray-100">
                                    <button onClick={() => setIsDialogOpen(false)} className="w-full bg-bunny-dark text-white py-3 rounded-xl font-bold text-sm shadow-lg hover:bg-black transition-colors">
                                        Confirm Payment
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                 </div>
            </div>

        </div>
        
        <style>{`
            @keyframes scale-up {
                from { transform: scale(0.95); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
            .animate-scale-up {
                animation: scale-up 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes fade-in-fast {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            .animate-fade-in-fast {
                animation: fade-in-fast 0.2s ease-out forwards;
            }
        `}</style>
      </div>
    </section>
  );
};

export default FeedbackModules;