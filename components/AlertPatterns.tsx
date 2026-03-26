import React, { useState } from 'react';
import { AlertTriangle, AlertCircle, Info, CheckCircle2, X, Trash2, ShieldAlert } from 'lucide-react';

const AlertPatterns: React.FC = () => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Alerts</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Urgency & Information</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Not all notifications are toasts. Some require immediate attention within the content flow (Alerts) or block interaction entirely until resolved (Alert Dialogs).
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. Inline Alerts */}
            <div className="space-y-8">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Inline Alerts</h4>
                
                {/* Default/Info */}
                <div className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-200 items-start">
                    <Info size={20} className="text-bunny-dark mt-0.5" />
                    <div className="flex-1">
                        <h5 className="font-bold text-bunny-dark text-sm mb-1">Update Available</h5>
                        <p className="text-sm text-gray-600 leading-relaxed">A new version of Bunny is available. Refresh to see the latest changes.</p>
                    </div>
                </div>

                {/* Destructive/Error */}
                <div className="flex gap-4 p-4 rounded-xl bg-red-50 border border-red-100 items-start">
                    <AlertCircle size={20} className="text-red-600 mt-0.5" />
                    <div className="flex-1">
                        <h5 className="font-bold text-red-900 text-sm mb-1">Payment Failed</h5>
                        <p className="text-sm text-red-700 leading-relaxed">We couldn't process your card. Please update your billing information.</p>
                    </div>
                </div>

                {/* Warning */}
                <div className="flex gap-4 p-4 rounded-xl bg-orange-50 border border-orange-100 items-start">
                    <AlertTriangle size={20} className="text-orange-600 mt-0.5" />
                    <div className="flex-1">
                        <h5 className="font-bold text-orange-900 text-sm mb-1">Low Storage</h5>
                        <p className="text-sm text-orange-800 leading-relaxed">You have used 90% of your event storage limit.</p>
                    </div>
                </div>
            </div>

            {/* 2. Alert Dialog */}
            <div className="space-y-8">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Critical Dialog</h4>
                
                <div className="bg-gray-100 rounded-[32px] p-12 flex items-center justify-center min-h-[300px] relative overflow-hidden">
                    <button 
                        onClick={() => setIsAlertOpen(true)}
                        className="bg-white text-red-600 border border-red-100 px-6 py-3 rounded-xl font-bold hover:bg-red-50 transition-colors shadow-sm flex items-center gap-2"
                    >
                        <Trash2 size={18} /> Delete Account
                    </button>

                    {/* The Overlay */}
                    {isAlertOpen && (
                        <div className="absolute inset-0 z-50 flex items-center justify-center p-6 bg-bunny-dark/40 backdrop-blur-sm animate-fade-in">
                            <div className="bg-white w-full max-w-sm rounded-3xl p-6 shadow-2xl animate-scale-up border border-red-100">
                                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600">
                                    <ShieldAlert size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-bunny-dark mb-2">Are you absolutely sure?</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                                </p>
                                <div className="flex gap-3 justify-end">
                                    <button 
                                        onClick={() => setIsAlertOpen(false)}
                                        className="px-4 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100 text-sm transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button 
                                        onClick={() => setIsAlertOpen(false)}
                                        className="px-4 py-2 rounded-lg font-bold text-white bg-red-600 hover:bg-red-700 text-sm transition-colors shadow-lg shadow-red-600/20"
                                    >
                                        Yes, delete account
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <p className="text-sm text-gray-400 italic text-center">
                    Alert Dialogs interrupt the user for critical confirmations.
                </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AlertPatterns;