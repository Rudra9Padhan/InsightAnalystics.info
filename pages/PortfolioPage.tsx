import React, { useState, useMemo } from 'react';
import type { PortfolioItem } from '../types';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const allPortfolioItems: PortfolioItem[] = [
    { id: 1, category: 'Analytics', imageUrl: 'https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Retail Sales Forecasting', description: 'Developed a predictive model to forecast sales with 95% accuracy.', result: '+35% growth through data insights' },
    { id: 2, category: 'Development', imageUrl: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'E-commerce Platform', description: 'Built a scalable and secure e-commerce site for a fashion brand.', result: '+200% online sales' },
    { id: 3, category: 'Marketing', imageUrl: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Tech Startup Brand Launch', description: 'Executed a multi-channel digital marketing campaign for a SaaS launch.', result: '5000+ signups in first month' },
    { id: 4, category: '3D Elevation', imageUrl: 'https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Modern Villa 3D Exterior', description: 'Created a photorealistic 3D exterior visualization for a luxury villa project, focusing on materials, lighting, and landscaping.', result: 'High-quality visuals for marketing' },
    { id: 5, category: 'Analytics', imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Customer Segmentation', description: 'Analyzed user behavior to create actionable customer segments.', result: '+50% marketing ROI' },
    { id: 6, category: 'Development', imageUrl: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Corporate Intranet Portal', description: 'Designed and developed an internal communications platform.', result: 'Improved employee engagement' },
    { id: 7, category: 'Marketing', imageUrl: 'https://images.pexels.com/photos/593324/pexels-photo-593324.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Social Media Growth', description: 'Managed and grew social channels for a lifestyle brand.', result: 'Increases followers organically' },
    { id: 8, category: '3D Elevation', imageUrl: 'https://images.pexels.com/photos/3797991/pexels-photo-3797991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Contemporary Office Interior', description: 'Developed a detailed interior plan and 3D visualization for a corporate office space, optimizing for functionality and aesthetics.', result: 'Effective interior space planning' },
];

type Category = 'All' | 'Analytics' | 'Development' | 'Marketing' | '3D Elevation';

const FilterButton: React.FC<{ category: Category; activeCategory: Category; setCategory: (category: Category) => void }> = ({ category, activeCategory, setCategory }) => {
    const isActive = category === activeCategory;
    const baseClasses = 'px-6 py-2 rounded-full font-medium transition-all duration-300';
    const activeClasses = 'bg-blue-600 text-white shadow-md';
    const inactiveClasses = 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600';

    return (
        <button onClick={() => setCategory(category)} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
            {category}
        </button>
    );
};

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => (
    <div className="group overflow-hidden rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <div className="relative">
            <img src={item.imageUrl} alt={item.title} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110" />
            <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-20 transition-all duration-300"></div>
            <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">{item.category}</span>
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
            <p className="font-semibold text-green-500">{item.result}</p>
        </div>
    </div>
);


const PortfolioPage: React.FC = () => {
    const [filter, setFilter] = useState<Category>('All');
    
    const filteredItems = useMemo(() => {
        if (filter === 'All') return allPortfolioItems;
        return allPortfolioItems.filter(item => item.category === filter);
    }, [filter]);

    const categories: Category[] = ['All', 'Analytics', 'Development', 'Marketing', '3D Elevation'];

    return (
        <div>
            <PageHeader title="Our Work" subtitle="A selection of projects that showcase our expertise and the results we deliver." />
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="flex justify-center space-x-2 md:space-x-4 mb-12 flex-wrap gap-2">
                        {categories.map(cat => (
                            <FilterButton key={cat} category={cat} activeCategory={filter} setCategory={setFilter} />
                        ))}
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map(item => <PortfolioCard key={item.id} item={item} />)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;