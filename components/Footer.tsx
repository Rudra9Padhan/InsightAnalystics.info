import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-300">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2">
                            Insight Analytics
                        </h3>
                        <p className="text-gray-500 dark:text-gray-400 max-w-sm">Empowering Growth through Data & Design.</p>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Home</Link></li>
                            <li><Link to="/services" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Services</Link></li>
                            <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">About Us</Link></li>
                            <li><Link to="/careers" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Careers</Link></li>
                            <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg></SocialIcon>
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg></SocialIcon>
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.791 2.013 10.145 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg></SocialIcon>
                            <SocialIcon href="#"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                    <p className="mb-4">&copy; {new Date().getFullYear()} Insight Analytics. All rights reserved.</p>
                    <div className="flex justify-center space-x-6">
                       <Link to="/cookie-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies</Link>
                       <Link to="/privacy-policy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;