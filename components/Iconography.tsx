import React from 'react';
import { Calendar, MapPin, Users, Heart, Search, MessageCircle, Star, Music, Coffee, Camera, Ticket, ShieldCheck } from 'lucide-react';

const icons = [
    { icon: Calendar, label: "Schedule" },
    { icon: MapPin, label: "Location" },
    { icon: Users, label: "Community" },
    { icon: Heart, label: "Favorites" },
    { icon: Search, label: "Discover" },
    { icon: MessageCircle, label: "Chat" },
    { icon: Star, label: "Featured" },
    { icon: Music, label: "Concerts" },
    { icon: Coffee, label: "Meetups" },
    { icon: Camera, label: "Memories" },
    { icon: Ticket, label: "Passes" },
    { icon: ShieldCheck, label: "Verified" }
];

const Iconography: React.FC = () => {
    return (
        <section className="py-24 bg-bunny-dark text-white">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    <div className="lg:w-1/4">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Foundations / Iconography</h3>
                        <h2 className="text-4xl font-bold mb-6">Clear Direction</h2>
                        <p className="text-white/70 text-lg">
                            Our iconography is mono-linear, utilizing a 2px stroke width with rounded terminals to match the typeface. They are legible at small sizes and friendly at large scales.
                        </p>
                    </div>
                    <div className="lg:w-3/4">
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-2xl overflow-hidden">
                            {icons.map(({ icon: Icon, label }, index) => (
                                <div key={index} className="bg-bunny-dark aspect-square flex flex-col items-center justify-center gap-4 hover:bg-white/5 transition-colors p-6 group">
                                    <Icon size={32} strokeWidth={2} className="text-white group-hover:text-bunny-red transition-colors duration-300" />
                                    <span className="text-xs font-mono text-white/40 group-hover:text-white transition-colors">{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Iconography;