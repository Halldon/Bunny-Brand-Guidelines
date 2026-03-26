import React, { useState, useRef, useEffect } from 'react';
import { GripVertical, Hash, Image, FileText } from 'lucide-react';

const LayoutPatterns: React.FC = () => {
  const [width, setWidth] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Resize Logic
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
      if (newWidth > 20 && newWidth < 80) setWidth(newWidth);
    };

    const handleUp = () => setIsDragging(false);

    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleUp);
    };
  }, [isDragging]);

  const tags = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    label: `Tag-${i + 1}`,
    color: i % 3 === 0 ? 'bg-red-50 text-bunny-red' : 'bg-gray-100 text-gray-600'
  }));

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Structure</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Space Management</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Managing density is key for complex views. We use resizable panels for user-controlled workspaces and styled scroll areas to handle overflow elegantly.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. Resizable Panels */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Resizable Panels</h4>
                <div 
                    ref={containerRef}
                    className="h-[400px] w-full bg-gray-50 rounded-[32px] border border-gray-200 overflow-hidden flex relative select-none"
                >
                    {/* Left Panel */}
                    <div style={{ width: `${width}%` }} className="h-full bg-white p-6 flex flex-col">
                        <div className="text-sm font-bold text-bunny-dark mb-4 flex items-center gap-2">
                            <FileText size={16} className="text-bunny-red"/> Editor
                        </div>
                        <div className="flex-1 space-y-3">
                            <div className="h-2 w-3/4 bg-gray-100 rounded"></div>
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="h-2 w-5/6 bg-gray-100 rounded"></div>
                            <div className="h-2 w-full bg-gray-100 rounded"></div>
                            <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-dashed border-gray-200 text-xs text-gray-400 text-center">
                                Drag the handle to resize
                            </div>
                        </div>
                    </div>

                    {/* Handle */}
                    <div 
                        onMouseDown={() => setIsDragging(true)}
                        className={`w-4 bg-gray-50 hover:bg-bunny-red/10 cursor-col-resize flex items-center justify-center transition-colors group z-10 ${isDragging ? 'bg-bunny-red/20' : ''}`}
                    >
                        <div className={`w-1 h-8 rounded-full transition-colors ${isDragging ? 'bg-bunny-red' : 'bg-gray-300 group-hover:bg-bunny-red'}`}></div>
                    </div>

                    {/* Right Panel */}
                    <div style={{ width: `${100 - width}%` }} className="h-full bg-gray-50 p-6">
                         <div className="text-sm font-bold text-bunny-dark mb-4 flex items-center gap-2">
                            <Image size={16} className="text-gray-500"/> Preview
                        </div>
                        <div className="w-full aspect-video bg-gray-200 rounded-xl mb-4 relative overflow-hidden">
                             <img src="https://picsum.photos/seed/bunnyPreview/400/300" className="w-full h-full object-cover opacity-50 grayscale" alt="Preview" referrerPolicy="no-referrer"/>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-16 bg-white rounded-lg border border-gray-100"></div>
                            <div className="h-16 bg-white rounded-lg border border-gray-100"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. Scroll Area */}
            <div className="space-y-6">
                <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Scroll Area</h4>
                <div className="bg-white rounded-[32px] border border-gray-200 shadow-sm p-8 h-[400px] flex flex-col">
                    <h5 className="font-bold text-lg text-bunny-dark mb-4 border-b border-gray-100 pb-4">Browse Tags</h5>
                    
                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar relative">
                        <div className="space-y-4">
                            <div className="text-sm font-bold text-bunny-gray">Music Categories</div>
                            <div className="flex flex-wrap gap-2">
                                {tags.slice(0, 15).map(tag => (
                                    <span key={tag.id} className={`px-3 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                                        <Hash size={10} className="inline mr-1 opacity-50"/>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>

                            <div className="h-px bg-gray-100 my-2"></div>
                            
                            <div className="text-sm font-bold text-bunny-gray">Venue Types</div>
                            <div className="flex flex-wrap gap-2">
                                {tags.slice(15, 30).map(tag => (
                                    <span key={tag.id} className={`px-3 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                                        <Hash size={10} className="inline mr-1 opacity-50"/>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>

                             <div className="h-px bg-gray-100 my-2"></div>

                            <div className="text-sm font-bold text-bunny-gray">Atmosphere</div>
                             <div className="flex flex-wrap gap-2">
                                {tags.slice(30, 50).map(tag => (
                                    <span key={tag.id} className={`px-3 py-1 rounded-full text-xs font-bold ${tag.color}`}>
                                        <Hash size={10} className="inline mr-1 opacity-50"/>
                                        {tag.label}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <style>{`
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 6px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: #f7f7f7;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #e5e7eb;
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #d1d5db;
                    }
                `}</style>
            </div>

        </div>
      </div>
    </section>
  );
};

export default LayoutPatterns;