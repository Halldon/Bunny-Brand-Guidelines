import React from 'react';

const SkeletonPatterns: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Loading</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Perceived Performance</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                We manage waiting times by using skeleton screens that mimic the layout of the content being loaded. This reduces cognitive load and makes the app feel faster.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* 1. Profile Skeleton */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Profile Card</h4>
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
                    {/* Content */}
                    <div className="flex items-center gap-5 mb-8">
                        <div className="w-16 h-16 rounded-full bg-gray-100 shrink-0"></div>
                        <div className="space-y-3 flex-1">
                            <div className="h-5 bg-gray-100 rounded-lg w-1/2"></div>
                            <div className="h-4 bg-gray-50 rounded-lg w-3/4"></div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-4 bg-gray-50 rounded-lg w-full"></div>
                        <div className="h-4 bg-gray-50 rounded-lg w-5/6"></div>
                        <div className="h-4 bg-gray-50 rounded-lg w-4/6"></div>
                    </div>

                    {/* Shimmer Overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 skew-x-12 pointer-events-none"></div>
                </div>
            </div>

            {/* 2. Event Card Skeleton */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Event Card</h4>
                <div className="bg-white p-4 rounded-[32px] border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="w-full aspect-[4/3] bg-gray-100 rounded-[24px] mb-4 relative overflow-hidden">
                         {/* Image placeholder */}
                    </div>
                    <div className="space-y-3 px-2 pb-2">
                        <div className="flex justify-between items-center">
                            <div className="h-6 bg-gray-100 rounded-lg w-2/3"></div>
                            <div className="h-6 bg-gray-100 rounded-lg w-12"></div>
                        </div>
                        <div className="h-4 bg-gray-50 rounded-lg w-1/3"></div>
                        <div className="flex gap-2 pt-2">
                            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white -ml-3"></div>
                            <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white -ml-3"></div>
                        </div>
                    </div>
                    
                     {/* Shimmer Overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent z-10 skew-x-12 pointer-events-none"></div>
                </div>
            </div>

            {/* 3. List Item Skeleton (Staggered) */}
            <div className="space-y-6">
                 <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">List Items</h4>
                 <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm space-y-6 relative overflow-hidden">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-gray-100 shrink-0"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-100 rounded-lg w-24"></div>
                                    <div className="h-3 bg-gray-50 rounded-lg w-16"></div>
                                </div>
                            </div>
                            <div className="h-3 bg-gray-50 rounded-lg w-8"></div>
                        </div>
                    ))}
                    {/* Shimmer Overlay */}
                    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-10 skew-x-12 pointer-events-none"></div>
                 </div>
            </div>

        </div>
        <style>{`
            @keyframes shimmer {
                100% { transform: translateX(100%) skewX(12deg); }
            }
        `}</style>
      </div>
    </section>
  );
};

export default SkeletonPatterns;