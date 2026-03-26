import React, { useState } from 'react';
import { LayoutDashboard, Users, Calendar, Settings, Bell, Search, Filter, MoreHorizontal, ChevronDown, Plus, Download, ChevronsUpDown, Check, BarChart3, CreditCard } from 'lucide-react';

const DashboardPatterns: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const bookings = [
    { id: "INV001", event: "Rooftop Jazz", customer: "Sarah Jenkins", date: "Oct 12, 2024", status: "Confirmed", amount: "$120.00" },
    { id: "INV002", event: "Pottery Class", customer: "Mike Chen", date: "Oct 13, 2024", status: "Pending", amount: "$85.00" },
    { id: "INV003", event: "Neon Run 5K", customer: "Jessica Wu", date: "Oct 15, 2024", status: "Confirmed", amount: "$45.00" },
    { id: "INV004", event: "Wine Tasting", customer: "David Miller", date: "Oct 18, 2024", status: "Cancelled", amount: "$210.00" },
    { id: "INV005", event: "Tech Mixer", customer: "Alex Johnson", date: "Oct 20, 2024", status: "Confirmed", amount: "$Free" },
  ];

  const getStatusColor = (status: string) => {
      switch(status) {
          case 'Confirmed': return 'bg-green-50 text-green-700 border-green-100';
          case 'Pending': return 'bg-yellow-50 text-yellow-700 border-yellow-100';
          case 'Cancelled': return 'bg-red-50 text-red-700 border-red-100';
          default: return 'bg-gray-50 text-gray-700';
      }
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Structure</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Complex Dashboard</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Bringing it all together. This pattern demonstrates how sidebar navigation, data tables, and toolbars coexist in a dense information environment while maintaining clarity.
            </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="bg-white rounded-[24px] shadow-2xl border border-gray-200 overflow-hidden h-[800px] flex">
            
            {/* Sidebar */}
            <div className={`bg-gray-50 border-r border-gray-200 transition-all duration-300 flex flex-col ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
                {/* Brand */}
                <div className="h-16 flex items-center px-6 border-b border-gray-200/50">
                    <div className="w-8 h-8 bg-bunny-red rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                        B
                    </div>
                    <span className={`ml-3 font-bold text-bunny-dark transition-opacity duration-200 ${sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                        Bunny <span className="text-gray-400 font-normal">Org</span>
                    </span>
                </div>

                {/* Nav Items */}
                <div className="flex-1 py-6 px-3 space-y-1">
                    {[
                        { icon: LayoutDashboard, label: "Overview", active: true },
                        { icon: Calendar, label: "Events", active: false },
                        { icon: Users, label: "Attendees", active: false },
                        { icon: CreditCard, label: "Billing", active: false },
                        { icon: BarChart3, label: "Analytics", active: false },
                        { icon: Settings, label: "Settings", active: false },
                    ].map((item) => (
                        <button 
                            key={item.label}
                            className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors group ${item.active ? 'bg-white shadow-sm text-bunny-dark' : 'text-gray-500 hover:bg-gray-100 hover:text-bunny-dark'}`}
                        >
                            <item.icon size={20} className={item.active ? "text-bunny-red" : "text-gray-400 group-hover:text-bunny-dark"} />
                            <span className={`font-medium text-sm transition-opacity duration-200 ${sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                                {item.label}
                            </span>
                        </button>
                    ))}
                </div>

                {/* User Footer */}
                <div className="p-4 border-t border-gray-200">
                    <div className={`flex items-center gap-3 ${sidebarCollapsed ? 'justify-center' : ''}`}>
                        <div className="w-8 h-8 rounded-full bg-bunny-dark text-white flex items-center justify-center text-xs font-bold">
                            SJ
                        </div>
                        <div className={`flex-1 transition-opacity duration-200 ${sidebarCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100'}`}>
                            <div className="text-sm font-bold text-bunny-dark">Sarah J.</div>
                            <div className="text-xs text-gray-400">Admin</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0 bg-white">
                
                {/* Topbar */}
                <div className="h-16 border-b border-gray-200 flex justify-between items-center px-8 bg-white">
                    <div className="flex items-center gap-4 text-sm breadcrumbs text-gray-500">
                        <span className="hover:text-bunny-dark cursor-pointer">Dashboard</span>
                        <span className="text-gray-300">/</span>
                        <span className="font-bold text-bunny-dark">Overview</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input type="text" placeholder="Search..." className="pl-9 pr-4 py-1.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-bunny-dark w-64 transition-all" />
                        </div>
                        <button className="p-2 hover:bg-gray-50 rounded-full text-gray-400 hover:text-bunny-dark relative">
                            <Bell size={18} />
                            <div className="absolute top-1.5 right-2 w-2 h-2 bg-bunny-red rounded-full border border-white"></div>
                        </button>
                    </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-8 overflow-y-auto bg-gray-50/30">
                    
                    {/* Header with Actions */}
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h2 className="text-3xl font-bold text-bunny-dark tracking-tight">Events Overview</h2>
                            <p className="text-gray-500 mt-1">Manage your events and track performance.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-4 py-2 bg-white border border-gray-200 text-bunny-dark font-bold rounded-xl text-sm shadow-sm hover:bg-gray-50 flex items-center gap-2">
                                <Download size={16} /> Export
                            </button>
                            <button className="px-4 py-2 bg-bunny-dark text-white font-bold rounded-xl text-sm shadow-lg hover:bg-black flex items-center gap-2">
                                <Plus size={16} /> Create Event
                            </button>
                        </div>
                    </div>

                    {/* Metric Cards */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        {[
                            { label: "Total Revenue", value: "$45,231.89", change: "+20.1%", trend: "up" },
                            { label: "Subscriptions", value: "+2350", change: "+180.1%", trend: "up" },
                            { label: "Active Events", value: "12", change: "-2", trend: "down" },
                            { label: "Upcoming", value: "573", change: "+201", trend: "up" },
                        ].map((metric, i) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="text-sm font-medium text-gray-500 mb-2">{metric.label}</div>
                                <div className="text-2xl font-bold text-bunny-dark">{metric.value}</div>
                                <div className={`text-xs mt-2 font-bold ${metric.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                                    {metric.change} from last month
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Data Table Container */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                        
                        {/* Table Toolbar */}
                        <div className="p-4 border-b border-gray-100 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-400">
                                    <Filter size={14} /> Status
                                </button>
                                <button className="flex items-center gap-2 px-3 py-1.5 border border-dashed border-gray-300 rounded-lg text-xs font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-400">
                                    <Filter size={14} /> Category
                                </button>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400 font-medium">Viewing 1-5 of 24</span>
                            </div>
                        </div>

                        {/* Table */}
                        <div className="w-full overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                                    <tr>
                                        <th className="px-6 py-3 w-[50px]"><input type="checkbox" className="rounded border-gray-300 text-bunny-red focus:ring-bunny-red"/></th>
                                        <th className="px-6 py-3">Invoice</th>
                                        <th className="px-6 py-3">Status</th>
                                        <th className="px-6 py-3">Event Name</th>
                                        <th className="px-6 py-3">Customer</th>
                                        <th className="px-6 py-3 text-right">Amount</th>
                                        <th className="px-6 py-3 w-[50px]"></th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {bookings.map((booking) => (
                                        <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors group">
                                            <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300 text-bunny-red focus:ring-bunny-red"/></td>
                                            <td className="px-6 py-4 font-medium text-bunny-dark">{booking.id}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold border ${getStatusColor(booking.status)}`}>
                                                    {booking.status}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-gray-600">{booking.event}</td>
                                            <td className="px-6 py-4 text-gray-600">{booking.customer}</td>
                                            <td className="px-6 py-4 text-right font-medium text-bunny-dark">{booking.amount}</td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-gray-400 hover:text-bunny-dark transition-colors">
                                                    <MoreHorizontal size={16} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardPatterns;