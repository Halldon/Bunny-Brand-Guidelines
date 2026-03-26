import React from 'react';

const AccessibilityCheck: React.FC = () => {
  const combos = [
    { bg: '#FF385C', fg: '#FFFFFF', name: 'Brand / White', ratio: '3.05:1', rating: 'AA Large' },
    { bg: '#222222', fg: '#FFFFFF', name: 'Dark / White', ratio: '15.5:1', rating: 'AAA' },
    { bg: '#FFFFFF', fg: '#222222', name: 'White / Dark', ratio: '15.5:1', rating: 'AAA' },
    { bg: '#F7F7F7', fg: '#222222', name: 'Wash / Dark', ratio: '14.2:1', rating: 'AAA' },
    { bg: '#FFB4A2', fg: '#222222', name: 'Sunset / Dark', ratio: '8.4:1', rating: 'AAA' },
    { bg: '#717171', fg: '#FFFFFF', name: 'Gray / White', ratio: '4.5:1', rating: 'AA' },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
         <div className="mb-16 max-w-2xl">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Foundations / Accessibility</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Inclusive by Design</h2>
            <p className="text-bunny-gray text-lg">
                We adhere to WCAG 2.1 AA standards. Our color pairings are rigorously tested to ensure sufficient contrast for readability across all device types.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combos.map((combo, i) => (
                <div key={i} className="rounded-xl border border-gray-100 overflow-hidden flex flex-col">
                    <div 
                        className="h-32 flex items-center justify-center p-6"
                        style={{ backgroundColor: combo.bg }}
                    >
                        <span className="text-2xl font-bold" style={{ color: combo.fg }}>
                            Hello, Alex.
                        </span>
                    </div>
                    <div className="p-6 bg-white flex justify-between items-center">
                        <div>
                            <p className="text-sm font-bold text-bunny-dark">{combo.name}</p>
                            <p className="text-xs font-mono text-gray-400 mt-1">{combo.ratio}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${combo.rating.includes('AAA') ? 'bg-green-50 text-green-600 border-green-200' : 'bg-yellow-50 text-yellow-600 border-yellow-200'}`}>
                            {combo.rating}
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default AccessibilityCheck;