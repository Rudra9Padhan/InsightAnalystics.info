import React from 'react';
import CTAButton from '../components/CTAButton';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const BenefitCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 text-center shadow-sm h-full">
        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-400 mx-auto">
            {icon}
        </div>
        <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{title}</h4>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
);

const JobPostingCard: React.FC<{ title: string; location: string; description: React.ReactNode; }> = ({ title, location, description }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-4">
            <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="text-blue-500 font-medium">{location}</p>
            </div>
            <a href={`mailto:careers@insightanalytics.com?subject=Application for ${encodeURIComponent(title)}`} className="flex-shrink-0">
                <CTAButton variant="secondary" className="px-6 py-2 !rounded-lg !text-sm w-full sm:w-auto">Apply Now</CTAButton>
            </a>
        </div>
        <div className="mt-4 text-gray-600 dark:text-gray-400 prose dark:prose-invert prose-blue">{description}</div>
    </div>
);

const InfoDetailCard: React.FC<{ title: string, children: React.ReactNode}> = ({ title, children }) => (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-600">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h3>
        <div className="space-y-2 text-gray-700 dark:text-gray-300">{children}</div>
    </div>
);


const CareersPage: React.FC = () => {
    const whyJoinUs = [
        { title: 'Live Project Experience', description: 'Work on live client and internal projects to get hands-on experience.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
        { title: 'Startup Exposure', description: 'Gain real-world startup exposure across multiple domains and see your impact.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg> },
        { title: 'Build Your Portfolio', description: 'Create a strong portfolio with practical, real-world projects and accomplishments.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg> },
        { title: 'Certification & LOR', description: 'Receive a Certificate of Completion and a Letter of Recommendation for your work.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg> },
    ];

    const jobPostings = [
        { 
            title: 'Digital Marketing Intern', 
            location: 'Remote', 
            description: (
                <ul className="space-y-1 list-disc list-inside">
                    <li>Assist in social media strategy, content planning & execution</li>
                    <li>Learn SEO, ads management, and analytics tracking</li>
                    <li>Support digital campaign research & content optimization</li>
                    <li><b>Bonus:</b> Experience with Canva, Meta Ads, or Google Analytics</li>
                </ul>
            )
        },
        { 
            title: 'Data Analysis Intern', 
            location: 'Remote', 
            description: (
                 <ul className="space-y-1 list-disc list-inside">
                    <li>Perform data cleaning, visualization, and reporting</li>
                    <li>Work with Excel, Power BI, or Google Sheets</li>
                    <li>Must have good knowledge of Python (Pandas, NumPy, Matplotlib)</li>
                    <li>SQL (optional) but highly preferred</li>
                    <li>Convert raw data into actionable insights for internal & client projects</li>
                </ul>
            )
        },
        { 
            title: 'Web Development + UI/UX Intern', 
            location: 'Remote', 
            description: (
                 <ul className="space-y-1 list-disc list-inside">
                    <li>Build responsive websites using HTML, CSS, and JavaScript</li>
                    <li>Work with frameworks or CMS like WordPress</li>
                    <li>Design engaging UI/UX layouts, select themes, and structure pages</li>
                    <li>Understand color theory, typography, and basic logo & branding concepts</li>
                    <li>Collaborate with the design & marketing team to build modern digital experiences</li>
                </ul>
            )
        },
    ];
    
    return (
        <div>
            <PageHeader title="Join Our Team" subtitle="We're building the future of data-driven strategy and looking for passionate, innovative minds to grow with us." />
            
             <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Open Positions</h2>
                    {jobPostings.length > 0 ? (
                        <div className="max-w-4xl mx-auto space-y-8">
                            {jobPostings.map(job => (
                                <JobPostingCard key={job.title} {...job} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                            <p className="text-lg">We don't have any open positions at the moment, but we are always looking for talented individuals to join our team.</p>
                        </div>
                    )}
                </div>
            </section>
            
            <section className="py-20 bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                         <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Role & Candidate Details</h2>
                    </div>
                    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <InfoDetailCard title="Who Can Apply">
                            <ul className="list-disc list-inside space-y-2">
                                <li>College students pursuing degrees in related fields.</li>
                                <li>Individuals with 0–1 years of experience.</li>
                                <li>Passionate about startups, creativity, and real-world projects.</li>
                            </ul>
                        </InfoDetailCard>
                         <InfoDetailCard title="Required Soft Skills">
                            <ul className="list-disc list-inside space-y-2">
                                <li>Excellent communication & collaboration skills.</li>
                                <li>Strong problem-solving and creative thinking.</li>
                                <li>Good time management & adaptability.</li>
                                <li>Proactive & self-motivated — take initiative.</li>
                            </ul>
                        </InfoDetailCard>
                        <InfoDetailCard title="Role Details">
                             <ul className="space-y-2">
                                <li><b>Type:</b> Unpaid Internship / Volunteer</li>
                                <li><b>Duration:</b> Flexible, based on project & performance</li>
                                <li><b>Mode:</b> Remote</li>
                                <li><b>Commitment:</b> 4 hours/day (Mon–Sat)</li>
                                <li><b>Growth:</b> Eligible for PPO based on performance</li>
                            </ul>
                        </InfoDetailCard>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Why Join Insight Analytics?</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyJoinUs.map(benefit => (
                            <BenefitCard key={benefit.title} {...benefit} />
                        ))}
                    </div>
                </div>
            </section>


             <section className="py-20 bg-gray-100 dark:bg-gray-800">
                 <div className="container mx-auto px-6 text-center">
                     <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Don't see a role that fits?</h3>
                     <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">We're always keen to hear from talented people. If you believe you have what it takes to make an impact at Insight Analytics, send your resume and a cover letter to our team.</p>
                     <a href="mailto:careers@insightanalytics.com"><CTAButton>Send Your Resume</CTAButton></a>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;