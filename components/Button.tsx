import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-pragya-gold text-pragya-darker hover:bg-white hover:shadow-lg hover:shadow-pragya-gold/20";
      break;
    case 'secondary':
      variantStyles = "bg-pragya-teal text-pragya-darker hover:bg-white hover:shadow-lg hover:shadow-pragya-teal/20";
      break;
    case 'outline':
      variantStyles = "border border-pragya-gold/30 text-pragya-ivory hover:border-pragya-gold hover:text-pragya-gold hover:bg-pragya-gold/5";
      break;
  }

  return (
    <button className={`${baseStyles} ${variantStyles} ${className}`} {...props}>
      {children}
    </button>
  );
};
