import React from 'react';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-10">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
        <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-400 space-y-4 [&_p]:text-justify">
            {children}
        </div>
    </div>
);


const CookiePolicyPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Cookie Policy" subtitle="Last updated: November 03, 2025" />
            <div className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 max-w-4xl">
                    <ContentSection title="What Are Cookies?">
                        <p>
                            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
                        </p>
                    </ContentSection>

                    <ContentSection title="How We Use Cookies">
                        <p>
                            We use cookies for several purposes, including:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Essential Cookies:</strong> To provide you with services available through our website and to enable you to use some of its features.</li>
                            <li><strong>Performance and Analytics Cookies:</strong> To understand how our website is being used, how effective our marketing campaigns are, and to help us customize and improve our website for you.</li>
                            <li><strong>Functionality Cookies:</strong> To remember choices you make when you use our website, such as your language preference or theme settings.</li>
                        </ul>
                    </ContentSection>

                    <ContentSection title="Types of Cookies We Use">
                         <ul className="list-disc list-inside">
                            <li><strong>Session Cookies:</strong> These are temporary cookies that are erased when you close your browser.</li>
                            <li><strong>Persistent Cookies:</strong> These remain on your device for a set period or until you manually delete them.</li>
                         </ul>
                    </ContentSection>
                    
                    <ContentSection title="Your Choices Regarding Cookies">
                        <p>
                            You have the right to decide whether to accept or reject cookies. You can exercise your cookie preferences by setting or amending your web browser controls. If you choose to reject cookies, you may still use our website though your access to some functionality and areas of our website may be restricted.
                        </p>
                        <p>
                            Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.aboutcookies.org</a> or <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">www.allaboutcookies.org</a>.
                        </p>
                    </ContentSection>

                    <ContentSection title="Changes to This Cookie Policy">
                        <p>
                            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                        </p>
                    </ContentSection>

                    <ContentSection title="Contact Us">
                        <p>
                            If you have any questions about our use of cookies or other technologies, please email us at <a href="mailto:contact@insightanalytics.com" className="text-blue-500 hover:underline">contact@insightanalytics.com</a>.
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;