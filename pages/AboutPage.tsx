import React from 'react';
import { Link } from 'react-router-dom';
import type { TeamMember } from '../types';
import CTAButton from '../components/CTAButton';

const StoryHeroSection: React.FC = () => (
    <section className="bg-white dark:bg-gray-900 py-20">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight">
                        Our Story: From a Simple Idea to a <span className="text-blue-500">Growth Engine</span>.
                    </h1>
                    <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 text-justify">
                        At Insight Analytics, we believe every business holds the potential for exponential growth — the key lies in transforming data into strategy. Founded in October 2025, Insight Analytics was created with a clear mission: to help businesses turn their data into actionable growth and go global. We’re more than a service provider; we’re your growth partners.
                    </p>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our team collaborating" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                </div>
            </div>
        </div>
    </section>
);

const MissionVisionSection: React.FC = () => (
    <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Mission</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                        To help businesses turn their data into actionable growth and empower them to expand globally with clarity, precision, and confidence. We bridge the gap between raw information and strategic decision-making, enabling organizations to make informed choices backed by real insights.
                    </p>
                </div>
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Vision</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                        To empower every client to grow, expand, and operate seamlessly through data-driven technologies. We aim to continuously introduce innovative solutions that simplify business operations and accelerate growth across industries.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CoreValuesSection: React.FC = () => {
    const values = [
        { title: 'Partnership', description: 'We work alongside you as strategic partners focused on your business success.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> },
        { title: 'Data-Driven Strategy', description: 'Every solution is backed by analytics to reduce risk and enhance precision.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg> },
        { title: 'Transparency', description: 'Open communication and honest collaboration are at the core of everything we do.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg> },
        { title: 'Innovation', description: 'We design tailored, creative solutions to address each client’s unique business challenges.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg> },
    ];
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">Our Core Values</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map(value => (
                        <div key={value.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-shadow">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-500 dark:text-blue-400 mx-auto">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-semibold text-blue-500 mb-2 text-center">{value.title}</h4>
                            <p className="text-gray-600 dark:text-gray-400 text-justify">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const UniqueEdgeSection: React.FC = () => {
    const edges = [
        { title: 'Integrated Solutions', description: 'We combine analytics, strategy, and marketing under one roof for a cohesive growth plan.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" /></svg> },
        { title: 'Data-First Approach', description: 'Our strategies are built on a foundation of solid data, ensuring precision and reducing guesswork.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg> },
        { title: 'Performance-Driven Delivery', description: 'We focus on measurable outcomes and tangible results that align with your business goals.', icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg> },
    ];
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">Our Unique Edge</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 text-justify">Our strength lies in our integrated approach, which eliminates the need for multiple agencies, saving you time and resources while ensuring every part of your business works toward a unified growth vision.</p>
                </div>
                <div className="mt-12 grid md:grid-cols-3 gap-8">
                    {edges.map(edge => (
                        <div key={edge.title} className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md">
                            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-500 dark:text-blue-400 mx-auto">
                                {edge.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2 text-center">{edge.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 text-justify">{edge.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExpertiseSection: React.FC = () => {
    const expertise = [
        { title: 'Data & Business Analysis', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg> },
        { title: 'Website Development', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg> },
        { title: '3D Elevation', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg> },
        { title: 'Marketing & Advertising', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.102 10.999 13.599 15 8.192 15c-1.352 0-2.6-.23-3.692-.648z" /></svg> },
        { title: 'Social Media & Page Handling', icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg> },
    ];
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Expertise</h2>
                <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-12 text-justify">
                    Our team consists of passionate specialists across business analysis, digital marketing, SEO, lead generation, and website development — all working collaboratively to deliver data-driven, results-oriented solutions.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {expertise.map(exp => (
                        <div key={exp.title} className="text-center">
                            <div className="flex items-center justify-center w-24 h-24 mb-4 rounded-full bg-gray-100 dark:bg-gray-800 text-blue-500 dark:text-blue-400 mx-auto transition-transform duration-300 hover:scale-110">
                                {exp.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const HowWeWorkSection: React.FC = () => {
    const steps = [
        { number: '01', title: 'Discovery', description: 'We start by identifying your unique challenges and business goals to understand what success looks like for you.' },
        { number: '02', title: 'Strategy', description: 'Next, we craft tailored, data-driven strategies that align with your priorities and set the roadmap for growth.' },
        { number: '03', title: 'Execution', description: 'Our team gets hands-on, implementing the plan with precision, transparency, and collaboration at every stage.' },
        { number: '04', title: 'Optimization', description: 'We continuously monitor performance, using actionable insights to refine our approach and ensure long-term success.' },
    ];
    return (
        <section className="py-20 bg-gray-100 dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">How We Work</h2>
                <div className="relative">
                    <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-300 dark:bg-gray-700 -translate-y-1/2"></div>
                    <div className="grid md:grid-cols-4 gap-12">
                        {steps.map(step => (
                            <div key={step.number} className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg border-t-4 border-blue-600 mt-4">
                                <span className="absolute -top-8 -left-3 text-6xl font-extrabold text-gray-200 dark:text-gray-700">{step.number}</span>
                                <div className="relative z-10">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-justify">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
    <div className="text-center">
        <div className="w-40 h-40 rounded-full mx-auto mb-4 flex items-center justify-center bg-gray-100 dark:bg-gray-800 shadow-lg border-2 border-gray-300 dark:border-gray-700">
            <span className="text-2xl font-bold text-gray-600 dark:text-gray-300">{member.logoText}</span>
        </div>
        <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100">{member.name}</h4>
        <p className="text-blue-500 font-medium mb-2">{member.role}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{member.bio}</p>
    </div>
);

const TeamSection: React.FC = () => {
    const team: TeamMember[] = [
        { name: 'P Anand Rao', role: 'Founder & Lead Strategist', bio: 'Expert in data analysis and business scaling. Anand leads our vision.', logoText: 'Founder' },
        { name: 'Rudranarayan Padhan', role: 'Head of Development', bio: 'A full-stack wizard who brings complex digital ideas to life.', logoText: 'Developer' },
        { name: 'P Rahul Rao', role: 'Director of Marketing', bio: 'Drives growth through innovative digital campaigns and brand strategy.', logoText: 'Marketer' },
    ];
    return (
        <section className="py-20 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-12">Meet Our Team</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, i) => <TeamMemberCard key={i} member={member} />)}
                </div>
            </div>
        </section>
    );
};

const CultureSection: React.FC = () => (
    <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6">
             <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                    <img src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Our culture" className="rounded-lg shadow-2xl w-full h-auto object-cover" />
                </div>
                <div className="text-center lg:text-left order-1 lg:order-2">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Our Culture</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 text-justify">
                        At Insight Analytics, we foster a client-centric, collaborative, and transparent culture. We value curiosity, creativity, and continuous improvement — encouraging our team to think innovatively while staying aligned with client goals. We’re not just helping businesses grow — we’re redefining how businesses use data to shape their future.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

const CommitmentCTASection: React.FC = () => (
    <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Commitment to You</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
                We are dedicated to delivering expert advice, measurable strategies, and tangible outcomes. Every project we take on is driven by one goal — to help you solve problems, enhance performance, and achieve long-term success.
            </p>
            <Link to="/contact"><CTAButton variant="primary">Let's Grow Together</CTAButton></Link>
        </div>
    </section>
);

const AboutPage: React.FC = () => {
    return (
        <div>
            <StoryHeroSection />
            <MissionVisionSection />
            <CoreValuesSection />
            <UniqueEdgeSection />
            <ExpertiseSection />
            <HowWeWorkSection />
            <TeamSection />
            <CultureSection />
            <CommitmentCTASection />
        </div>
    );
};

export default AboutPage;