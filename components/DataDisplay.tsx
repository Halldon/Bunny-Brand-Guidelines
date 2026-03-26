import React from 'react';
import { MoreHorizontal, ArrowUpDown, ShieldCheck, Mail, Calendar, ChevronLeft, ChevronRight, MoreHorizontal as Ellipsis, Plus } from 'lucide-react';

const DataDisplay: React.FC = () => {
  const members = [
    { id: 1, name: "Olivia Martin", email: "olivia.martin@email.com", role: "Organizer", status: "Active", joined: "Apr 23, 2023", img: "https://picsum.photos/seed/olivia/100/100" },
    { id: 2, name: "Jackson Lee", email: "jackson.lee@email.com", role: "Member", status: "Offline", joined: "Apr 23, 2023", img: "https://picsum.photos/seed/jackson/100/100" },
    { id: 3, name: "Isabella Nguyen", email: "isabella.ng@email.com", role: "Member", status: "Active", joined: "Apr 24, 2023", img: "https://picsum.photos/seed/isabella/100/100" },
    { id: 4, name: "William Kim", email: "will.kim@email.com", role: "Verified", status: "Active", joined: "Apr 26, 2023", img: "https://picsum.photos/seed/william/100/100" },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
             <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Data Display</h3>
             <h2 className="text-4xl font-bold text-bunny-dark mb-6">Structured Warmth</h2>
             <p className="text-bunny-gray text-lg max-w-2xl">
                 Data density doesn't have to feel clinical. By using generous whitespace, soft avatars, and rounded badges, we keep lists feeling like a community roster rather than a spreadsheet.
             </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
            
            {/* New: Badges & Avatars Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Badges */}
                <div className="space-y-6">
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Badge System</h4>
                    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-wrap gap-4 items-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-bunny-dark text-white">Default</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-bunny-light text-bunny-dark">Secondary</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-bunny-red text-white">Destructive</span>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold border border-gray-200 text-gray-600">Outline</span>
                        <div className="w-px h-6 bg-gray-100 mx-2"></div>
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                        </span>
                    </div>
                </div>

                {/* Avatars */}
                <div className="space-y-6">
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest">Avatar Styles</h4>
                     <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-wrap gap-8 items-center">
                        {/* Sizes */}
                        <div className="flex items-end gap-3">
                            <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden"><img src="https://picsum.photos/seed/avatarSmall/100/100" alt="Small Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden"><img src="https://picsum.photos/seed/avatarMedium/100/100" alt="Medium Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                            <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"><img src="https://picsum.photos/seed/avatarLarge/100/100" alt="Large Avatar" className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
                        </div>

                        {/* Stack */}
                        <div className="flex -space-x-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                                    <img src={`https://picsum.photos/seed/stack${i}/100/100`} alt={`Stack member ${i}`} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                            ))}
                            <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center text-xs font-bold text-gray-500 shadow-sm">
                                +3
                            </div>
                        </div>
                     </div>
                </div>
            </div>

            {/* Table Component */}
            <div className="border border-gray-100 rounded-[32px] overflow-hidden shadow-xl shadow-gray-100/50">
                <div className="bg-white p-6 border-b border-gray-100 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-bunny-dark">Community Members</h3>
                        <p className="text-sm text-gray-500">Manage your recent event attendees.</p>
                    </div>
                    <button className="bg-bunny-dark text-white px-4 py-2 rounded-xl text-sm font-bold hover:bg-black transition-colors">
                        Export List
                    </button>
                </div>
                
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100">
                                <th className="p-4 pl-6 text-xs font-bold uppercase text-gray-400 tracking-wider">Member</th>
                                <th className="p-4 text-xs font-bold uppercase text-gray-400 tracking-wider">Status</th>
                                <th className="p-4 text-xs font-bold uppercase text-gray-400 tracking-wider hidden md:table-cell">Role</th>
                                <th className="p-4 text-xs font-bold uppercase text-gray-400 tracking-wider hidden md:table-cell">
                                    <div className="flex items-center gap-1 cursor-pointer hover:text-bunny-dark">
                                        Joined <ArrowUpDown size={12} />
                                    </div>
                                </th>
                                <th className="p-4 pr-6 text-right text-xs font-bold uppercase text-gray-400 tracking-wider">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {members.map((m) => (
                                <tr key={m.id} className="group hover:bg-bunny-light/30 transition-colors border-b border-gray-50 last:border-0">
                                    <td className="p-4 pl-6">
                                        <div className="flex items-center gap-4">
                                            <div className="relative">
                                                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100">
                                                    <img src={m.img} alt={m.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                                </div>
                                                {m.status === 'Active' && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>}
                                            </div>
                                            <div>
                                                <div className="font-bold text-bunny-dark text-sm">{m.name}</div>
                                                <div className="text-xs text-gray-400 flex items-center gap-1">
                                                    <Mail size={10} /> {m.email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${
                                            m.status === 'Active' 
                                            ? 'bg-green-50 text-green-700 border-green-100' 
                                            : 'bg-gray-50 text-gray-500 border-gray-200'
                                        }`}>
                                            {m.status}
                                        </div>
                                    </td>
                                    <td className="p-4 hidden md:table-cell">
                                         <div className="flex items-center gap-2 text-sm text-gray-600">
                                            {m.role === 'Verified' && <ShieldCheck size={14} className="text-bunny-red" />}
                                            {m.role}
                                         </div>
                                    </td>
                                    <td className="p-4 hidden md:table-cell">
                                        <div className="flex items-center gap-2 text-sm text-gray-400">
                                            <Calendar size={14} />
                                            {m.joined}
                                        </div>
                                    </td>
                                    <td className="p-4 pr-6 text-right">
                                        <button className="p-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-bunny-dark transition-colors">
                                            <MoreHorizontal size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="p-4 border-t border-gray-100 bg-white flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <span className="text-gray-400 text-xs font-bold uppercase tracking-wide">Showing 4 of 128</span>
                    
                    <div className="flex items-center gap-1">
                        <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-gray-500 hover:text-bunny-dark hover:bg-gray-50 transition-colors disabled:opacity-50 font-bold" disabled>
                            <ChevronLeft size={16} /> <span className="hidden sm:inline">Previous</span>
                        </button>
                        
                        <div className="flex items-center gap-1 mx-2">
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-bunny-red bg-bunny-red text-white font-bold shadow-md shadow-bunny-red/20 transition-transform hover:scale-105">1</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-transparent text-gray-500 hover:bg-gray-50 hover:text-bunny-dark font-medium transition-colors">2</button>
                            <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-transparent text-gray-500 hover:bg-gray-50 hover:text-bunny-dark font-medium transition-colors">3</button>
                            <span className="w-9 h-9 flex items-center justify-center text-gray-300">
                                <Ellipsis size={16} />
                            </span>
                             <button className="w-9 h-9 flex items-center justify-center rounded-lg border border-transparent text-gray-500 hover:bg-gray-50 hover:text-bunny-dark font-medium transition-colors">8</button>
                        </div>

                        <button className="flex items-center gap-1 px-3 py-2 rounded-lg text-bunny-dark hover:bg-gray-50 transition-colors font-bold">
                            <span className="hidden sm:inline">Next</span> <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default DataDisplay;