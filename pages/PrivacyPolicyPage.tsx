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

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div>
            <PageHeader title="Privacy Policy" subtitle="Last updated: November 03, 2025" />
            <div className="py-20 bg-white dark:bg-gray-900">
                <div className="container mx-auto px-6 max-w-4xl">

                    <ContentSection title="Introduction">
                        <p>
                            Insight Analytics ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                        </p>
                    </ContentSection>

                    <ContentSection title="Information We Collect">
                        <p>
                            We may collect information about you in a variety of ways. The information we may collect on the Site includes:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and company name, that you voluntarily give to us when you fill out a contact form.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>
                    </ContentSection>

                    <ContentSection title="How We Use Your Information">
                        <p>
                           Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
                        </p>
                         <ul className="list-disc list-inside">
                            <li>Respond to your comments, questions, and provide customer service.</li>
                            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
                            <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                         </ul>
                    </ContentSection>
                    
                    <ContentSection title="Disclosure of Your Information">
                        <p>
                            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                        </p>
                        <ul className="list-disc list-inside">
                            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.</li>
                            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, including data analysis, hosting services, customer service, and marketing assistance.</li>
                        </ul>
                    </ContentSection>

                     <ContentSection title="Security of Your Information">
                        <p>
                            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                        </p>
                    </ContentSection>

                    <ContentSection title="Your Rights">
                        <p>
                            You have the right to request access to the personal data we hold about you, to have any inaccuracies corrected, and to request the deletion of your personal data. You can also object to the processing of your personal data in certain circumstances. To exercise these rights, please contact us.
                        </p>
                    </ContentSection>

                    <ContentSection title="Changes to This Privacy Policy">
                        <p>
                            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </ContentSection>

                    <ContentSection title="Contact Us">
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at <a href="mailto:contact@insightanalytics.com" className="text-blue-500 hover:underline">contact@insightanalytics.com</a>.
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;