import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2400&auto=format&fit=crop" 
          alt="People gathering at an event" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bunny-red/90 to-orange-400/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-4xl animate-fade-in-up">
            <h2 className="text-white font-medium text-lg md:text-2xl mb-4 tracking-wide opacity-90">BRAND SYSTEM</h2>
            <h1 className="text-white font-extrabold text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-8">
                Warmth <br/> in every <br/> moment.
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-2xl font-light leading-relaxed">
                Reimagining the event experience for Bunny. A sophisticated, human-centric identity designed to bring people together.
            </p>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-6 text-white/60 text-sm animate-bounce">
        Scroll to explore
      </div>

      <style>{`
        @keyframes fade-in-up {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fade-in-up 1s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;