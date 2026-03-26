import React from 'react';
import { BunnyLogo } from './BunnyLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bunny-dark text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center items-center gap-3 mb-8">
            <div className="p-3 bg-white rounded-full text-bunny-dark">
                <BunnyLogo className="w-8 h-8" />
            </div>
            <span className="text-3xl font-bold">Bunny</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto border-t border-white/10 pt-10">
            <div>
                <h4 className="font-bold mb-4 text-bunny-red">Agency</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 text-bunny-red">Case Studies</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                    <li>Bunny</li>
                    <li>Apex</li>
                    <li>Nova</li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4 text-bunny-red">Social</h4>
                <ul className="space-y-2 text-white/50 text-sm">
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </div>
        <div className="mt-20 text-white/30 text-xs">
            © 2024 Bunny Brand Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;