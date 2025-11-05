import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    companyName: string;
    service: string;
    message: string;
}

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="bg-gray-100 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">{title}</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
        </div>
    </div>
);

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({ name: '', email: '', companyName: '', service: '', message: '' });
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev: FormData) => ({ ...prev, [name]: value }));
    };

    // Use NEXT_PUBLIC_API_URL if set (Next.js). Fallback to relative path.
    const API_BASE = (process.env.NEXT_PUBLIC_API_URL || '').replace(/\/$/, '');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // basic client-side required check
        if (!formData.name || !formData.email || !formData.service || !formData.message) {
            alert('Please fill name, email, service and message.');
            return;
        }

        setFormStatus('submitting');
        try {
            const url = API_BASE ? `${API_BASE}/api/contact` : '/api/contact';
            const res = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            // try to read response body (text) for better error messages
            const text = await res.text();
            let body: any = null;
            try { body = text ? JSON.parse(text) : null; } catch (e) { body = text; }

            if (!res.ok) {
                const message = (body && (body.error || body.message)) || res.statusText || text || `HTTP ${res.status}`;
                throw new Error(message);
            }

            // success
            setFormStatus('submitted');
            setFormData({ name: '', email: '', companyName: '', service: '', message: '' });

            // return to idle after a short delay
            setTimeout(() => setFormStatus('idle'), 3000);
            console.log('Contact saved:', body || text);
        } catch (err: any) {
            console.error('Failed to submit contact:', err);
            setFormStatus('idle');
            alert('Failed to send message: ' + (err.message || 'Unknown error'));
        }
    };
 
    const services = [
      'Data Analysis',
      'Website Development',
      'Business Analysis',
      '3D Elevation',
      'Marketing & Advertising',
      'Social Media & Page Handling',
      'Custom Service'
    ];

    return (
        <div>
            <PageHeader title="Get In Touch" subtitle="We'd love to hear about your project. Let's create something amazing together." />
            <div className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Send us a message</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6">Fill out the form and we'll get back to you within 24 hours.</p>
                                {formStatus === 'submitted' ? (
                                    <div className="bg-green-100 dark:bg-green-900/50 border-l-4 border-green-500 dark:border-green-600 text-green-700 dark:text-green-300 p-4 rounded" role="alert">
                                        <p className="font-bold">Thank you!</p>
                                        <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-200" placeholder="Full name"/>
                                        </div>
                                        <div>
                                            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-200" placeholder="Email address"/>
                                        </div>
                                        <div>
                                            <input type="text" name="companyName" id="companyName" value={formData.companyName} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-gray-200" placeholder="Company (optional)"/>
                                        </div>
                                        <div>
                                            <label htmlFor="service" className="sr-only">Service</label>
                                            <select name="service" id="service" required value={formData.service} onChange={handleChange} className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md">
                                                <option value="">Select a service</option>
                                                {services.map(s => <option key={s} value={s}>{s}</option>)}
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="sr-only">Message</label>
                                            <textarea name="message" id="message" required value={formData.message} onChange={handleChange} rows={5} className="mt-1 block w-full px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md" placeholder="Tell us about your project..."></textarea>
                                        </div>

                                        <div>
                                            <button type="submit" disabled={formStatus === 'submitting'} className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-md">
                                                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                        <div className="space-y-8">
                            <InfoBlock icon={<svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>} title="Email" content="contact@insightanalytics.com" />
                            <ResponsePromiseBlock />
                            <div className="rounded-lg overflow-hidden shadow-lg">
                                <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Team collaborating on digital services" className="w-full h-auto object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ResponsePromiseBlock: React.FC = () => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Our Response Promise</h4>
            <ul className="text-gray-600 dark:text-gray-400 mt-1 space-y-1">
                <li>Email inquiries: Within 4 hours</li>
                <li>Phone calls: Same business day</li>
                <li>Consultation requests: Within 24 hours</li>
            </ul>
        </div>
    </div>
);


const InfoBlock: React.FC<{ icon: React.ReactNode; title: string; content: string }> = ({ icon, title, content }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h4>
            <p className="text-gray-600 dark:text-gray-400">{content}</p>
        </div>
    </div>
);

export default ContactPage;