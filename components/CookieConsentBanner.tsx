import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from './CTAButton';

const CookieConsentBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                const consent = localStorage.getItem('cookie_consent');
                if (!consent) {
                    setIsVisible(true);
                }
            } else {
                // If localStorage isn't available (SSR or restricted), show the banner
                setIsVisible(true);
            }
        } catch (e) {
            // Accessing localStorage can throw in some environments (e.g. private mode), so default to visible
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        // 'accepted' implies all cookies (essential + analytics, etc.)
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('cookie_consent', 'accepted');
            }
        } catch (e) {
            // ignore localStorage errors
        }
        setIsVisible(false);
    };

    const handleReject = () => {
        // 'rejected' implies only essential cookies
        try {
            if (typeof window !== 'undefined' && window.localStorage) {
                localStorage.setItem('cookie_consent', 'rejected');
            }
        } catch (e) {
            // ignore localStorage errors
        }
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div 
            role="dialog"
            aria-live="polite"
            aria-label="Cookie Consent Banner"
            className="fixed bottom-0 left-0 right-0 bg-gray-800/90 dark:bg-gray-900/95 backdrop-blur-sm text-white p-4 z-50 shadow-lg animate-slide-up"
        >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-300 text-center sm:text-left">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
                    <Link to="/cookie-policy" className="font-semibold text-blue-400 hover:underline">
                        Cookie Policy
                    </Link>.
                </p>
                <div className="flex-shrink-0 flex items-center gap-3">
                    <CTAButton onClick={handleReject} variant="secondary" className="!px-4 !py-2 !text-sm">
                        Reject
                    </CTAButton>
                    <CTAButton onClick={handleAccept} variant="primary" className="!px-4 !py-2 !text-sm">
                        Accept All
                    </CTAButton>
                </div>
            </div>
            <style>
                {`
                @keyframes slide-up {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slide-up {
                    animation: slide-up 0.5s ease-out forwards;
                }
                `}
            </style>
        </div>
    );
};

export default CookieConsentBanner;
