import React from 'react';

interface BunnyLogoProps {
  className?: string;
  fill?: string;
}

export const BunnyLogo: React.FC<BunnyLogoProps> = ({ className = "w-6 h-6", fill = "currentColor" }) => {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      fill={fill} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        fillRule="evenodd" 
        clipRule="evenodd" 
        d="M26 100C26 100 22 82 36 74C31 64 32 52 41 47C36 22 40 5 53 10C60 12 58 33 55 45C58 45 62 45 65 47C77 32 95 38 92 58C90 66 78 62 73 57C77 64 80 72 73 80C82 86 80 100 80 100H26ZM43 59C45.5 59 47.5 62.5 47.5 66.5C47.5 70.5 45.5 74 43 74C40.5 74 38.5 70.5 38.5 66.5C38.5 62.5 40.5 59 43 59ZM64 67C66 61 74 61 76 67C74 64 66 64 64 67ZM50 76L56 76L53 82L50 76Z" 
      />
    </svg>
  );
};

export default BunnyLogo;