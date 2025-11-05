import React from 'react';
import { Link } from 'react-router-dom';
import type { Service } from '../types';
import CTAButton from '../components/CTAButton';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => (
    <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400">
        <div className="flex-shrink-0">
            <div className="flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-400 transition-all duration-300 group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30">
                <div className="transition-transform duration-300 group-hover:scale-105">
                    {service.icon}
                </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{service.title}</h3>
        </div>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400 list-disc list-inside flex-grow">
            {service.description.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
        <div className="mt-8">
            <Link to="/contact">
              <button className="font-semibold text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center">
                Request Service
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">&rarr;</span>
              </button>
            </Link>
        </div>
    </div>
);


const ServicesPage: React.FC = () => {
    const services: Service[] = [
        {
            title: 'Data Analysis',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
            description: ['Interactive Dashboards & Reports', 'Predictive Analysis & Forecasting', 'Data Visualization'],
        },
        {
            title: 'Website Development',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
            description: ['Custom & Responsive Websites', 'E-commerce Solutions', 'SEO-Friendly Architecture'],
        },
        {
            title: 'Business Analysis',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>,
            description: ['Data-Driven Insights', 'Strategic Decision Support', 'Performance Optimization'],
        },
        {
            title: '3D Elevation',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>,
            description: [
                'CAD-Based 3D Modelling',
                'Accurate Structure Representation',
                'Construction-Ready Visuals',
            ],
        },
        {
            title: 'Marketing & Advertising',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.102 10.999 13.599 15 8.192 15c-1.352 0-2.6-.23-3.692-.648z" /></svg>,
            description: ['Digital Marketing Campaigns', 'Paid Advertising (PPC)', 'Brand Strategy & Positioning'],
        },
        {
            title: 'Social Media & Page Handling',
            icon: <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            description: ['Account Management', 'SEO and Online Visibility', 'Audience Growth Strategies'],
        },
    ];

    return (
        <div>
            <PageHeader title="Our Services" subtitle="Comprehensive solutions designed to accelerate your business growth." />
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;