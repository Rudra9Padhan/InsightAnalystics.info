import React from 'react';

// FIX: Update CTAButtonProps to accept all standard button attributes
// by extending React.ButtonHTMLAttributes<HTMLButtonElement>.
// This allows passing props like `type` and `disabled`.
interface CTAButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
}

const CTAButton: React.FC<CTAButtonProps> = ({ children, variant = 'primary', className = '', ...rest }) => {
    const baseClasses = 'px-8 py-3 font-semibold rounded-md transition-all duration-300 transform hover:scale-105 shadow-md';
    
    const primaryClasses = 'bg-green-600 text-white hover:bg-green-700';
    const secondaryClasses = 'bg-gray-200 text-gray-800 border border-gray-300 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:border-gray-500';

    const variantClasses = variant === 'primary' ? primaryClasses : secondaryClasses;

    return (
        <button {...rest} className={`${baseClasses} ${variantClasses} ${className}`}>
            {children}
        </button>
    );
};

export default CTAButton;