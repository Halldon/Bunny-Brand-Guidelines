import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LogoSystem from './components/LogoSystem';
import VoiceTone from './components/VoiceTone';
import BrandPlayground from './components/BrandPlayground';

// Foundations
import TypographySection from './components/TypographySection';
import ColorSection from './components/ColorSection';
import SpacingSystem from './components/SpacingSystem';
import AccessibilityCheck from './components/AccessibilityCheck';
import Iconography from './components/Iconography';
import PhotographyGuidelines from './components/PhotographyGuidelines';
import MotionSystem from './components/MotionSystem';

// Components & Interactive
import ComponentLibrary from './components/ComponentLibrary';
import FormPatterns from './components/FormPatterns';
import InteractiveElements from './components/InteractiveElements';
import FeedbackModules from './components/FeedbackModules';
import ExtraPatterns from './components/ExtraPatterns';
import MediaModules from './components/MediaModules';
import ContentModules from './components/ContentModules';

// Patterns
import NavigationPatterns from './components/NavigationPatterns';
import MenuPatterns from './components/MenuPatterns';
import OverlayPatterns from './components/OverlayPatterns';
import AuthPatterns from './components/AuthPatterns';
import AlertPatterns from './components/AlertPatterns';
import LayoutPatterns from './components/LayoutPatterns';
import DataDisplay from './components/DataDisplay';
import SkeletonPatterns from './components/SkeletonPatterns';
import AdvancedPatterns from './components/AdvancedPatterns';
import DashboardPatterns from './components/DashboardPatterns';
import PricingPatterns from './components/PricingPatterns';

// Experiences
import CoreExperiences from './components/CoreExperiences';
import OnboardingFlow from './components/OnboardingFlow';
import AppMockup from './components/AppMockup';

function App() {
  return (
    <div className="min-h-screen bg-white pb-0">
      <Header />
      <main>
        <Hero />
        
        {/* --- 1. Identity Strategy --- */}
        <section id="identity" className="py-24 bg-white">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                    A brand identity that turns <span className="text-bunny-red">strangers</span> into <span className="text-bunny-red">neighbors</span>.
                </h2>
                <div className="space-y-6 text-lg text-bunny-gray leading-relaxed">
                    <p>
                        When Bunny approached us, they were a functional ticketing utility. They wanted to become a lifestyle brand. Our challenge was to inject warmth, humanity, and a sense of belonging into every pixel.
                    </p>
                    <p>
                        We developed a visual language that borrows from the comfort of home—soft edges, warm lighting, and a tone of voice that feels like a conversation with an old friend.
                    </p>
                </div>
            </div>
        </section>

        <LogoSystem />
        <VoiceTone />
        <BrandPlayground />
        
        {/* Lifestyle Break */}
        <div className="w-full h-[500px] overflow-hidden">
             <img 
                src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2400&auto=format&fit=crop" 
                alt="Brand Lifestyle" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
            />
        </div>

        {/* --- 2. Foundations --- */}
        <div id="foundations">
            <TypographySection />
            <ColorSection />
            <SpacingSystem />
            <AccessibilityCheck />
            <Iconography />
            <PhotographyGuidelines />
            <MotionSystem />
        </div>

        {/* --- 3. Components --- */}
        <div id="components">
            <ComponentLibrary />
            <FormPatterns />
            <InteractiveElements />
            <FeedbackModules />
            <ExtraPatterns />
            <MediaModules />
            <ContentModules />
        </div>

        {/* --- 4. Patterns --- */}
        <div id="patterns">
            <NavigationPatterns />
            <MenuPatterns />
            <OverlayPatterns />
            <AdvancedPatterns />
            <DashboardPatterns />
            <PricingPatterns />
            <AuthPatterns />
            <AlertPatterns />
            <LayoutPatterns />
            <DataDisplay />
            <SkeletonPatterns />
        </div>

        {/* --- 5. Experience --- */}
        <div id="experience">
            <CoreExperiences />
            <OnboardingFlow />
            <AppMockup />
        </div>
      </main>
      
      {/* Footer Removed as requested */}
      <div className="py-12 bg-bunny-dark text-center text-white/20 text-xs">
          © 2024 Bunny Brand Systems.
      </div>
    </div>
  );
}

export default App;