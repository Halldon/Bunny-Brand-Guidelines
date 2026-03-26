import React, { useState } from 'react';
import { Check, ChevronDown, Upload, Shield } from 'lucide-react';

const FormPatterns: React.FC = () => {
  const [role, setRole] = useState('Member');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState(['Music', 'Art']);
  const [privacy, setPrivacy] = useState('public');

  const interests = ['Music', 'Art', 'Food', 'Tech', 'Outdoors'];
  const roles = ['Member', 'Organizer', 'Admin', 'Guest'];

  const toggleInterest = (interest: string) => {
    if (selectedInterests.includes(interest)) {
      setSelectedInterests(selectedInterests.filter(i => i !== interest));
    } else {
      setSelectedInterests([...selectedInterests, interest]);
    }
  };

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Components / Forms</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Input & Collection</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Forms are conversations. We use clear labels, custom-styled inputs, and tactile selection mechanisms to make data entry feel less like work and more like personalization.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: The Form Card */}
            <div className="lg:w-1/2">
                <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-bunny-red to-orange-300"></div>
                    
                    <div className="mb-8">
                        <h3 className="text-2xl font-bold text-bunny-dark">Profile Settings</h3>
                        <p className="text-gray-500 text-sm">Update how you appear to neighbors.</p>
                    </div>

                    <div className="space-y-8">
                        
                        {/* 1. Name Input Group */}
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">First Name</label>
                                <input type="text" defaultValue="Sarah" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-medium text-bunny-dark focus:outline-none focus:border-bunny-red focus:bg-white transition-colors" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Last Name</label>
                                <input type="text" defaultValue="Jenkins" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-medium text-bunny-dark focus:outline-none focus:border-bunny-red focus:bg-white transition-colors" />
                            </div>
                        </div>

                        {/* 2. Custom Select Dropdown */}
                        <div className="space-y-2 relative">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Community Role</label>
                            <button 
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 font-medium text-bunny-dark flex justify-between items-center hover:border-bunny-gray transition-colors"
                            >
                                <span className="flex items-center gap-2"><Shield size={16} className="text-bunny-red"/> {role}</span>
                                <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {isOpen && (
                                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 z-20 p-1 animate-fade-in-fast">
                                    {roles.map((r) => (
                                        <button 
                                            key={r}
                                            onClick={() => { setRole(r); setIsOpen(false); }}
                                            className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium flex justify-between items-center transition-colors ${role === r ? 'bg-bunny-light text-bunny-dark' : 'text-gray-600 hover:bg-gray-50'}`}
                                        >
                                            {r}
                                            {role === r && <Check size={14} className="text-bunny-red" />}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* 3. Textarea with Bio */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-end px-1">
                                <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Bio</label>
                                <span className="text-[10px] text-gray-400">Max 140</span>
                            </div>
                            <textarea 
                                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 font-medium text-bunny-dark focus:outline-none focus:border-bunny-red focus:bg-white transition-colors min-h-[100px] resize-none"
                                defaultValue="Art lover and weekend hiker based in Brooklyn. Always down for a coffee meetup!"
                            ></textarea>
                        </div>

                        {/* 4. Custom Checkboxes (Interests) */}
                        <div className="space-y-3">
                            <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Interests</label>
                            <div className="flex flex-wrap gap-3">
                                {interests.map((interest) => {
                                    const isSelected = selectedInterests.includes(interest);
                                    return (
                                        <button
                                            key={interest}
                                            onClick={() => toggleInterest(interest)}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-bold transition-all duration-300 ${
                                                isSelected 
                                                ? 'bg-bunny-dark text-white border-bunny-dark shadow-md transform scale-105' 
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-bunny-gray'
                                            }`}
                                        >
                                            {isSelected ? <Check size={12} /> : null}
                                            {interest}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Action Bar */}
                        <div className="pt-6 border-t border-gray-100 flex justify-end gap-4">
                            <button className="px-6 py-3 font-bold text-gray-400 hover:text-bunny-dark transition-colors">Cancel</button>
                            <button className="px-8 py-3 bg-bunny-red text-white font-bold rounded-xl shadow-lg shadow-bunny-red/20 hover:bg-red-600 transition-colors">Save Changes</button>
                        </div>

                    </div>
                </div>
            </div>

            {/* Right: Specialized Inputs */}
            <div className="lg:w-1/2 space-y-12">
                
                {/* File Upload Dropzone */}
                <div>
                    <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">File Upload</h4>
                    <div className="border-2 border-dashed border-gray-200 rounded-[32px] p-10 flex flex-col items-center justify-center text-center hover:bg-white hover:border-bunny-red/50 transition-all cursor-pointer group bg-gray-50/50">
                        <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Upload size={24} className="text-bunny-red" />
                        </div>
                        <h5 className="text-lg font-bold text-bunny-dark mb-1">Upload Profile Photo</h5>
                        <p className="text-sm text-gray-400 mb-6 max-w-xs">Drag and drop your image here, or click to browse files.</p>
                        <span className="text-xs font-bold text-bunny-red bg-red-50 px-3 py-1 rounded-full group-hover:bg-bunny-red group-hover:text-white transition-colors">SVG, PNG, JPG</span>
                    </div>
                </div>

                {/* Radio Group */}
                <div>
                     <h4 className="font-mono text-sm text-gray-400 uppercase tracking-widest mb-4">Radio Selection</h4>
                     <div className="bg-white p-6 rounded-[24px] border border-gray-100 shadow-sm space-y-3">
                        {[
                            { id: 'public', label: 'Public Profile', desc: 'Visible to everyone' },
                            { id: 'friends', label: 'Friends Only', desc: 'Visible to connections' },
                            { id: 'private', label: 'Private', desc: 'Only you can see this' }
                        ].map((option) => (
                            <div 
                                key={option.id}
                                onClick={() => setPrivacy(option.id)}
                                className={`flex items-start gap-4 p-4 rounded-xl border cursor-pointer transition-all ${
                                    privacy === option.id 
                                    ? 'border-bunny-red bg-red-50/30' 
                                    : 'border-transparent hover:bg-gray-50'
                                }`}
                            >
                                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mt-0.5 flex-shrink-0 ${
                                    privacy === option.id ? 'border-bunny-red' : 'border-gray-300'
                                }`}>
                                    {privacy === option.id && <div className="w-2.5 h-2.5 bg-bunny-red rounded-full"></div>}
                                </div>
                                <div>
                                    <div className={`font-bold text-sm ${privacy === option.id ? 'text-bunny-dark' : 'text-gray-600'}`}>{option.label}</div>
                                    <div className="text-xs text-gray-400">{option.desc}</div>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default FormPatterns;