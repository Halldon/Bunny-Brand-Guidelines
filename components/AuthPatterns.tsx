import React, { useState } from 'react';
import { Eye, EyeOff, ShieldCheck, Lock, ArrowRight, Github, Mail } from 'lucide-react';

const AuthPatterns: React.FC = () => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // OTP Logic
  const handleOtpChange = (element: HTMLInputElement, index: number) => {
    if (isNaN(Number(element.value))) return false;

    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);

    // Focus next input
    if (element.value !== '') {
        const next = element.nextElementSibling as HTMLInputElement;
        if (next) next.focus();
    }
  };

  const handleOtpKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
      if (e.key === 'Backspace' && otp[index] === '') {
          const prev = (e.target as HTMLInputElement).previousElementSibling as HTMLInputElement;
          if (prev) prev.focus();
      }
  };

  // Password Logic
  const getStrength = (pass: string) => {
      let score = 0;
      if (pass.length > 5) score++;
      if (pass.length > 8) score++;
      if (/[A-Z]/.test(pass)) score++;
      if (/[0-9]/.test(pass)) score++;
      return score;
  };
  
  const strength = getStrength(password);
  const strengthColor = strength < 2 ? 'bg-red-500' : strength < 3 ? 'bg-orange-400' : 'bg-green-500';
  const strengthText = strength < 2 ? 'Weak' : strength < 3 ? 'Medium' : 'Strong';

  return (
    <section className="py-24 bg-bunny-light border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="mb-16">
            <h3 className="text-xs font-bold uppercase tracking-widest text-bunny-gray mb-4">Patterns / Authentication</h3>
            <h2 className="text-4xl font-bold text-bunny-dark mb-6">Security & Trust</h2>
            <p className="text-bunny-gray text-lg max-w-2xl">
                Authentication flows require precision. We use clear feedback, masked inputs, and focused states to make security feel effortless.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* 1. OTP / 2FA Pattern */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100">
                <div className="mb-8 text-center">
                    <div className="w-16 h-16 bg-bunny-red/10 rounded-full flex items-center justify-center mx-auto mb-4 text-bunny-red">
                        <ShieldCheck size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-bunny-dark">Check your phone</h3>
                    <p className="text-gray-500 mt-2">We sent a 6-digit code to +1 (555) ***-**88</p>
                </div>

                <div className="flex justify-center gap-2 sm:gap-4 mb-8">
                    {otp.map((data, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength={1}
                            value={data}
                            onChange={(e) => handleOtpChange(e.target, index)}
                            onKeyDown={(e) => handleOtpKeyDown(e, index)}
                            onFocus={(e) => e.target.select()}
                            className="w-10 h-12 sm:w-12 sm:h-14 border-2 border-gray-200 rounded-xl text-center text-xl font-bold text-bunny-dark focus:border-bunny-red focus:outline-none transition-all focus:scale-110 caret-bunny-red bg-gray-50 focus:bg-white"
                        />
                    ))}
                </div>

                <div className="text-center">
                    <button className="text-sm font-bold text-gray-400 hover:text-bunny-dark underline decoration-2 underline-offset-4 transition-colors">
                        Resend Code
                    </button>
                </div>
            </div>

            {/* 2. Complex Password Input */}
            <div className="bg-white p-10 rounded-[40px] shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-bunny-dark mb-6">Create Password</h3>
                
                <div className="relative mb-2">
                    <input 
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter a strong password"
                        className="w-full h-14 pl-12 pr-12 bg-gray-50 border border-gray-200 rounded-xl text-bunny-dark font-medium focus:outline-none focus:border-bunny-dark transition-colors"
                    />
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <button 
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-bunny-dark transition-colors"
                    >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                </div>

                {/* Strength Meter */}
                <div className="space-y-2 mb-6 transition-all duration-300">
                    <div className="flex gap-2 h-1.5">
                        <div className={`flex-1 rounded-full transition-colors duration-300 ${password.length > 0 ? (strength > 0 ? strengthColor : 'bg-red-500') : 'bg-gray-100'}`}></div>
                        <div className={`flex-1 rounded-full transition-colors duration-300 ${strength > 1 ? strengthColor : 'bg-gray-100'}`}></div>
                        <div className={`flex-1 rounded-full transition-colors duration-300 ${strength > 2 ? strengthColor : 'bg-gray-100'}`}></div>
                        <div className={`flex-1 rounded-full transition-colors duration-300 ${strength > 3 ? strengthColor : 'bg-gray-100'}`}></div>
                    </div>
                    {password.length > 0 && (
                        <div className="text-xs font-bold text-right transition-colors" style={{color: strengthText === 'Weak' ? '#ef4444' : strengthText === 'Medium' ? '#f97316' : '#22c55e'}}>
                            {strengthText}
                        </div>
                    )}
                </div>
                
                {/* Social Login Divider */}
                <div className="relative flex py-2 items-center mb-6">
                    <div className="flex-grow border-t border-gray-100"></div>
                    <span className="flex-shrink-0 mx-4 text-gray-400 text-xs font-bold uppercase tracking-wider">Or continue with</span>
                    <div className="flex-grow border-t border-gray-100"></div>
                </div>

                <div className="flex gap-4">
                    <button className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-bold text-sm">
                        <Github size={18} /> GitHub
                    </button>
                    <button className="flex-1 py-3 border border-gray-200 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors font-bold text-sm">
                        <Mail size={18} /> Email
                    </button>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default AuthPatterns;