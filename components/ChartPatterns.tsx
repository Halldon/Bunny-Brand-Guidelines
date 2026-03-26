import React, { useState } from 'react';
import { BarChart, Activity, PieChart, ArrowUpRight, Calendar, TrendingUp, Users, LineChart, MoreHorizontal } from 'lucide-react';

const ChartPatterns: React.FC = () => {
  const [activeRange, setActiveRange] = useState('7d');

  // Mock data for charts
  const barData = [40, 70, 45, 90, 60, 85, 50];
  const maxBar = Math.max(...barData);

  // Mock data for heatmap
  const heatmapData = Array.from({ length: 7 * 12 }, (_, i) => {
    // create a pattern that looks a bit organic
    const base = Math.sin(i / 5) * 2 + Math.random() * 3;
    return Math.max(0, Math.min(3, Math.floor(base)));
  });
  
  const getHeatmapColor = (val: number) => {
    if (val === 0) return 'bg-gray-50';
    if (val === 1) return 'bg-bunny-red/20';
    if (val === 2) return 'bg-bunny-red/50';
    return 'bg-bunny-red';
  };

  // Pie Chart Data
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const pieSegments = [
    { label: '18-24', pct: 40, color: '#222222' },
    { label: '25-34', pct: 30, color: '#FF385C' },
    { label: '35-44', pct: 20, color: '#FFB4A2' },
    { label: '45+',   pct: 10, color: '#F7F7F7' },
  ];
  let accumulatedPiePct = 0;

  return (
    <section className="py-24 bg-bunny-cream border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">20. Data Visualization</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Insight & Clarity</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Data should tell a story. We use our signature curves and warm color palette to make charts feel inviting rather than intimidating.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            
            {/* 1. Bar Chart */}
            <div className="lg:col-span-2 bg-white p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
                    <div>
                        <div className="flex items-center gap-2 mb-1">
                            <BarChart size={18} className="text-bunny-red" />
                            <h4 className="font-bold text-bunny-dark">Ticket Sales</h4>
                        </div>
                        <p className="text-sm text-gray-500">Weekly breakdown of event bookings.</p>
                    </div>
                    <div className="flex bg-gray-50 p-1 rounded-xl">
                        {['24h', '7d', '30d'].map((r) => (
                            <button 
                                key={r}
                                onClick={() => setActiveRange(r)}
                                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                                    activeRange === r 
                                    ? 'bg-white text-bunny-dark shadow-sm' 
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                            >
                                {r}
                            </button>
                        ))}
                    </div>
                </div>

                {/* The Chart */}
                <div className="h-64 flex items-end gap-2 sm:gap-4 lg:gap-6 pb-2 border-b border-gray-100">
                    {barData.map((val, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer relative">
                             {/* Tooltip on Hover */}
                             <div className="absolute bottom-full left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 mb-2 bg-bunny-dark text-white text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap z-10 pointer-events-none transform translate-y-2 group-hover:translate-y-0">
                                 ${val}k Sales
                                 <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-bunny-dark"></div>
                             </div>
                            
                            <div 
                                className="w-full bg-bunny-light rounded-t-xl relative overflow-hidden group-hover:bg-red-50 transition-colors"
                                style={{ height: `${(val / maxBar) * 100}%` }}
                            >
                                <div 
                                    className="absolute bottom-0 left-0 w-full bg-bunny-red rounded-t-xl transition-all duration-1000 ease-out h-0 animate-grow-up" 
                                    style={{ height: '100%', animationDelay: `${i * 0.1}s` }}
                                ></div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest px-2">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(d => <span key={d}>{d}</span>)}
                </div>
            </div>

            {/* Side Column */}
            <div className="space-y-8">
                
                {/* 2. Radial / Metric Card */}
                <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-between h-full">
                    <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                             <Activity size={18} className="text-bunny-red" />
                             <h4 className="font-bold text-bunny-dark">Occupancy</h4>
                        </div>
                        <button className="text-gray-300 hover:text-bunny-dark transition-colors">
                            <MoreHorizontal size={18} />
                        </button>
                    </div>

                    <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                        <svg className="w-full h-full transform -rotate-90">
                            {/* Background Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                className="text-gray-100"
                            />
                            {/* Progress Circle */}
                            <circle
                                cx="50%"
                                cy="50%"
                                r="40%"
                                stroke="currentColor"
                                strokeWidth="8"
                                fill="transparent"
                                strokeDasharray="251.2"
                                strokeDashoffset="62.8" /* 25% empty */
                                strokeLinecap="round"
                                className="text-bunny-red transition-all duration-1000 ease-out"
                            />
                        </svg>
                        <div className="absolute text-center">
                            <div className="text-4xl font-extrabold text-bunny-dark tracking-tight">75%</div>
                            <div className="text-xs text-gray-400 font-bold uppercase tracking-wide mt-1">Capacity</div>
                        </div>
                    </div>
                    
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="text-xs font-bold text-green-600 bg-green-50 px-3 py-1.5 rounded-full flex items-center gap-1">
                            +12% vs last week <ArrowUpRight size={12} />
                        </span>
                    </div>
                </div>

                {/* 3. Area / Mini Chart */}
                <div className="bg-bunny-dark p-8 rounded-[40px] shadow-xl border border-white/10 text-white relative overflow-hidden h-full">
                     {/* Decorative Blob */}
                     <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-bunny-red/20 blur-[60px] rounded-full pointer-events-none"></div>

                     <div className="relative z-10 flex justify-between items-end mb-6">
                        <div>
                            <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1">Total Users</div>
                            <div className="text-3xl font-bold">24,592</div>
                        </div>
                        <div className="bg-white/10 px-2 py-1 rounded-lg text-xs font-bold">+2.4%</div>
                     </div>

                     {/* Simple SVG Area Chart */}
                     <div className="h-24 w-[120%] -ml-6 relative">
                        <svg viewBox="0 0 120 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <defs>
                                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="#FF385C" stopOpacity="0.5"/>
                                    <stop offset="100%" stopColor="#FF385C" stopOpacity="0"/>
                                </linearGradient>
                            </defs>
                            <path 
                                d="M0 40 L0 30 C10 25 30 35 40 20 S70 5 80 15 S110 25 120 10 V40 Z" 
                                fill="url(#chartGradient)" 
                            />
                            <path 
                                d="M0 30 C10 25 30 35 40 20 S70 5 80 15 S110 25 120 10" 
                                fill="none" 
                                stroke="#FF385C" 
                                strokeWidth="3"
                                strokeLinecap="round"
                                vectorEffect="non-scaling-stroke"
                            />
                        </svg>
                     </div>
                </div>

            </div>
        </div>

        {/* --- Analytics Expansion --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            
            {/* 4. Demographics Pie */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="flex justify-between items-center mb-8">
                     <div className="flex items-center gap-2">
                        <Users size={18} className="text-bunny-red" />
                        <h4 className="font-bold text-bunny-dark">Demographics</h4>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                    {/* The Pie */}
                    <div className="relative w-56 h-56 flex-shrink-0">
                        <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                           {pieSegments.map((seg, i) => {
                              const strokeLength = (seg.pct / 100) * circumference;
                              const spaceLength = circumference - strokeLength;
                              const offset = (accumulatedPiePct / 100) * circumference;
                              accumulatedPiePct += seg.pct;

                              return (
                                <circle 
                                    key={i}
                                    cx="50" 
                                    cy="50" 
                                    r={radius} 
                                    fill="transparent" 
                                    stroke={seg.color} 
                                    strokeWidth="12" 
                                    strokeDasharray={`${strokeLength} ${spaceLength}`} 
                                    strokeDashoffset={-offset} 
                                    className="hover:opacity-80 transition-opacity cursor-pointer"
                                />
                              );
                           })}
                        </svg>
                        {/* Center Label */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                            <span className="text-3xl font-bold text-bunny-dark">12k</span>
                            <span className="text-xs text-gray-400 font-bold uppercase">Users</span>
                        </div>
                    </div>

                    {/* Legend */}
                    <div className="w-full sm:w-auto space-y-4">
                        {[
                            { label: '18-24', pct: '40%', bg: 'bg-bunny-dark' },
                            { label: '25-34', pct: '30%', bg: 'bg-bunny-red' },
                            { label: '35-44', pct: '20%', bg: 'bg-orange-200' },
                            { label: '45+', pct: '10%', bg: 'bg-gray-100' },
                        ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between gap-8 group cursor-pointer">
                                <div className="flex items-center gap-3">
                                    <div className={`w-3 h-3 rounded-full ${item.bg} group-hover:scale-125 transition-transform`}></div>
                                    <span className="text-sm font-medium text-gray-600 group-hover:text-bunny-dark transition-colors">{item.label}</span>
                                </div>
                                <span className="text-sm font-bold text-bunny-dark">{item.pct}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* 5. Engagement Heatmap */}
            <div className="bg-white p-8 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="flex justify-between items-center mb-6">
                     <div className="flex items-center gap-2">
                        <TrendingUp size={18} className="text-bunny-red" />
                        <h4 className="font-bold text-bunny-dark">Activity Map</h4>
                    </div>
                </div>

                <div className="flex gap-4">
                     {/* Y Axis Labels (Aligned to grid) */}
                     <div className="grid grid-rows-7 text-[10px] font-bold text-gray-400 uppercase h-40 items-center text-right pr-2">
                        <span>Mon</span>
                        <span></span>
                        <span>Wed</span>
                        <span></span>
                        <span>Fri</span>
                        <span></span>
                        <span>Sun</span>
                     </div>

                     {/* Grid */}
                     <div className="flex-1 overflow-hidden">
                         <div className="grid grid-rows-7 grid-flow-col gap-1.5 h-40">
                             {heatmapData.map((val, i) => (
                                 <div 
                                    key={i} 
                                    className={`rounded-[3px] transition-all duration-300 hover:scale-125 hover:rounded-md hover:z-10 cursor-pointer ${getHeatmapColor(val)}`}
                                    title={`Activity Level: ${val}`}
                                 ></div>
                             ))}
                         </div>
                         {/* X Axis Labels */}
                         <div className="flex justify-between text-[10px] font-bold text-gray-400 uppercase mt-3 px-1">
                            <span>12AM</span>
                            <span>6AM</span>
                            <span>12PM</span>
                            <span>6PM</span>
                            <span>11PM</span>
                         </div>
                    </div>
                </div>

                <div className="flex justify-end items-center gap-2 mt-6 text-[10px] font-bold text-gray-400 uppercase">
                    <span>Low</span>
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-[3px] bg-gray-50"></div>
                        <div className="w-3 h-3 rounded-[3px] bg-bunny-red/20"></div>
                        <div className="w-3 h-3 rounded-[3px] bg-bunny-red/50"></div>
                        <div className="w-3 h-3 rounded-[3px] bg-bunny-red"></div>
                    </div>
                    <span>High</span>
                </div>
            </div>

        </div>

        {/* 6. Growth Line Chart */}
        <div className="bg-white p-8 md:p-12 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                <div>
                    <div className="flex items-center gap-2 mb-1">
                        <LineChart size={18} className="text-bunny-red" />
                        <h4 className="font-bold text-bunny-dark">Community Growth</h4>
                    </div>
                    <p className="text-sm text-gray-500">New member signups over the last 6 months.</p>
                </div>
                <div className="text-right">
                    <div className="text-3xl font-extrabold text-bunny-dark tracking-tight">+2,402</div>
                    <div className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full inline-flex items-center gap-1 mt-1">
                        +18.2% <ArrowUpRight size={10} />
                    </div>
                </div>
            </div>

            <div className="relative h-72 w-full group">
                {/* Grid Lines */}
                <div className="absolute inset-0 flex flex-col justify-between text-xs text-gray-300 pointer-events-none">
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                    <div className="border-b border-gray-50 w-full h-0"></div>
                </div>

                {/* SVG Curve */}
                <svg viewBox="0 0 100 50" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#222222" />
                            <stop offset="100%" stopColor="#FF385C" />
                        </linearGradient>
                         <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#FF385C" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#FF385C" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    
                    {/* Fill Area */}
                    <path 
                        d="M0 50 L0 35 C15 35 15 40 30 30 C45 20 45 30 60 15 C75 0 85 15 100 5 V50 Z" 
                        fill="url(#fillGradient)" 
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    
                    {/* Line */}
                    <path 
                        d="M0 35 C15 35 15 40 30 30 C45 20 45 30 60 15 C75 0 85 15 100 5" 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        className="drop-shadow-sm"
                    />
                </svg>

                {/* HTML Overlay for Tooltips/Dots - More reliable positioning */}
                <div className="absolute inset-0 pointer-events-none">
                     {[
                        {left: '0%', top: '30%', val: '1.2k'}, // Matches y=35/50 (15 from top? No, 35 from top is 70%... wait SVG coords: 0,0 is top left. 50 is height. 35 is y. 35/50 = 70%)
                        // Wait, previous SVG path: M0 35. y=35. Height=50. 
                        // y=0 is top. y=50 is bottom.
                        // 35/50 = 0.7 = 70% from top.
                        {left: '0%', top: '70%', val: '1.2k'}, 
                        
                        // Point 2: x=30, y=30. x=30%. y=30/50=60%.
                        {left: '30%', top: '60%', val: '1.5k'},
                        
                        // Point 3: x=60, y=15. x=60%. y=15/50=30%.
                        {left: '60%', top: '30%', val: '2.8k'},
                        
                        // Point 4: x=100, y=5. x=100%. y=5/50=10%.
                        {left: '100%', top: '10%', val: '3.6k'}
                    ].map((pt, i) => (
                        <div 
                            key={i}
                            className="absolute w-4 h-4 -ml-2 -mt-2 group/point pointer-events-auto cursor-pointer flex items-center justify-center"
                            style={{ left: pt.left, top: pt.top }}
                        >
                            {/* Visual Dot */}
                            <div className="w-2.5 h-2.5 bg-white border-2 border-bunny-red rounded-full transition-all duration-300 group-hover/point:scale-150 group-hover/point:border-bunny-dark shadow-sm"></div>
                            
                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/point:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/point:translate-y-0 pointer-events-none">
                                <div className="bg-bunny-dark text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-xl whitespace-nowrap">
                                    {pt.val}
                                </div>
                                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-bunny-dark"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className="flex justify-between mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest">
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
            </div>
        </div>
        
        <style>{`
            @keyframes grow-up {
                from { height: 0; }
            }
            .animate-grow-up {
                animation: grow-up 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
        `}</style>
      </div>
    </section>
  );
};

export default ChartPatterns;