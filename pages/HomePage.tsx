



import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import CTAButton from '../components/CTAButton';
import type { Testimonial } from '../types';
import { useTheme } from '../ThemeContext';

declare const THREE: any;

const HeroSection: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        if (typeof THREE === 'undefined' || !mountRef.current) {
            return;
        }

        const currentMount = mountRef.current;

        // Scene, Camera, Renderer
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
        camera.position.z = 25;

        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
        currentMount.appendChild(renderer.domElement);

        // Mouse tracking
        let mouseX = 0;
        let mouseY = 0;
        const handleMouseMove = (event: MouseEvent) => {
            if (currentMount) {
                 mouseX = (event.clientX / currentMount.clientWidth) * 2 - 1;
                 mouseY = -(event.clientY / currentMount.clientHeight) * 2 + 1;
            }
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Particles
        const particlesCount = 300;
        const positions = new Float32Array(particlesCount * 3);
        for (let i = 0; i < particlesCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 10 + Math.random() * 5;
            positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i * 3 + 2] = r * Math.cos(phi);
        }

        const particlesGeometry = new THREE.BufferGeometry();
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        
        // Theme-based colors
        const particleColor = theme === 'dark' ? 0x3b82f6 : 0x2563eb;

        const particlesMaterial = new THREE.PointsMaterial({
            color: particleColor,
            size: 0.1,
            sizeAttenuation: true
        });
        const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
        
        // Lines
        const linePositions = [];
        const currentPositions = particlesGeometry.attributes.position.array;
        for (let i = 0; i < particlesCount; i++) {
            for (let j = i + 1; j < particlesCount; j++) {
                const dx = currentPositions[i * 3] - currentPositions[j * 3];
                const dy = currentPositions[i * 3 + 1] - currentPositions[j * 3 + 1];
                const dz = currentPositions[i * 3 + 2] - currentPositions[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 2.5) {
                    linePositions.push(currentPositions[i * 3], currentPositions[i * 3 + 1], currentPositions[i * 3 + 2]);
                    linePositions.push(currentPositions[j * 3], currentPositions[j * 3 + 1], currentPositions[j * 3 + 2]);
                }
            }
        }
        
        const linesGeometry = new THREE.BufferGeometry();
        linesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
        const linesMaterial = new THREE.LineBasicMaterial({
            color: particleColor,
            transparent: true,
            opacity: 0.3
        });
        const linesMesh = new THREE.LineSegments(linesGeometry, linesMaterial);

        const group = new THREE.Group();
        group.add(particleSystem);
        group.add(linesMesh);
        scene.add(group);

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            // Group rotation follows mouse with smoothing for a parallax effect
            const targetRotationX = mouseY * 0.3;
            const targetRotationY = mouseX * 0.3;
            group.rotation.x += (targetRotationX - group.rotation.x) * 0.05;
            group.rotation.y += (targetRotationY - group.rotation.y) * 0.05;

            // Inner elements have their own constant slow rotation
            particleSystem.rotation.y += 0.0005;
            linesMesh.rotation.y += 0.0005;

            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Handle resize
        const handleResize = () => {
            if (currentMount) {
                camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
            }
        };
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (currentMount && renderer.domElement) {
                currentMount.removeChild(renderer.domElement);
            }
            scene.remove(group);
            particlesGeometry.dispose();
            particlesMaterial.dispose();
            linesGeometry.dispose();
            linesMaterial.dispose();
            renderer.dispose();
        };
    }, [theme]);
    
    const fullTextForAria = "Turning Data into Decisions, and Ideas into Impact.";

    return (
        <section className="relative bg-gray-50 dark:bg-gray-900 overflow-hidden h-[60vh] md:h-[80vh] lg:h-screen min-h-[600px] flex items-center justify-center">
            <div ref={mountRef} className="absolute top-0 left-0 w-full h-full z-0 opacity-50 dark:opacity-40" />
            <div className="container mx-auto px-6 py-24 md:py-32 text-center relative z-10">
                <h1 
                    className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-gray-100 leading-tight"
                    aria-label={fullTextForAria}
                >
                    Turning <span className="text-blue-500">Data into Decisions</span>,
                    <br />
                    and <span className="text-green-500">Ideas into Impact</span>.
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
                    Insight Analytics helps businesses grow through smart analytics, digital solutions, and marketing intelligence.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Link to="/contact"><CTAButton variant="primary">Get Started</CTAButton></Link>
                    <Link to="/services"><CTAButton variant="secondary">View Services</CTAButton></Link>
                </div>
            </div>
        </section>
    );
};


const HighlightCard: React.FC<{ title: string; children: React.ReactNode; icon: React.ReactNode }> = ({ title, children, icon }) => (
    <div className="group bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 hover:-translate-y-1">
        <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gray-100 dark:bg-gray-700 text-blue-500 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{children}</p>
    </div>
);

const HighlightsSection: React.FC = () => (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <HighlightCard title="Data" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>}>
                    Unlock potential with data-driven insights and predictive analytics.
                </HighlightCard>
                <HighlightCard title="Development" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>}>
                    Build powerful, responsive, and SEO-friendly web solutions.
                </HighlightCard>
                <HighlightCard title="Marketing" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-2.236 9.168-5.514C18.102 10.999 13.599 15 8.192 15c-1.352 0-2.6-.23-3.692-.648z" /></svg>}>
                    Amplify your reach with strategic digital marketing and paid campaigns.
                </HighlightCard>
                <HighlightCard title="Management" icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.096 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>}>
                    Optimize operations through automation and effective growth strategies.
                </HighlightCard>
            </div>
        </div>
    </section>
);

const AboutPreviewSection: React.FC = () => (
    <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">We are your partners in growth.</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 text-justify">
                        Insight Analytics was founded on the principle that every business, regardless of size, deserves access to world-class digital tools and strategies. We bridge the gap between creativity, technology, and business acumen to deliver measurable results.
                    </p>
                    <Link to="/about"><CTAButton variant="secondary">Learn More About Us</CTAButton></Link>
                </div>
                <div>
                    <img src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Business consultancy and services" className="rounded-lg shadow-xl w-full h-auto" />
                </div>
            </div>
        </div>
    </section>
);


const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
        <div className="mt-4">
            <p className="font-bold text-gray-900 dark:text-gray-100">{testimonial.author}</p>
            <p className="text-sm text-blue-500 font-semibold">{testimonial.company}</p>
        </div>
    </div>
);


const TestimonialsSection: React.FC = () => {
    const testimonials: Testimonial[] = [
        { quote: "Insight Analytics's data insights were a game-changer for our marketing strategy. We saw a 40% increase in qualified leads within three months.", author: 'Jane Doe', company: 'CEO, TechSolutions' },
        { quote: "The new website they built is not only beautiful but also incredibly fast. Our user engagement has skyrocketed.", author: 'John Smith', company: 'Founder, Creative Co.' },
        { quote: "Their team handled our social media with such professionalism and creativity. Our online presence has never been stronger.", author: 'Emily White', company: 'Marketing Director, Innovate Inc.' },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-12">What Our Clients Say</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => <TestimonialCard key={i} testimonial={t} />)}
                </div>
            </div>
        </section>
    );
};

const CtaBanner: React.FC = () => (
    <section className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-6 py-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Let’s scale your business with intelligence.</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">Ready to turn your data into a competitive advantage? Talk to us today.</p>
            <Link to="/contact"><CTAButton variant="primary">Contact Us</CTAButton></Link>
        </div>
    </section>
);


const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSection />
            <HighlightsSection />
            <AboutPreviewSection />
            <TestimonialsSection />
            <CtaBanner />
        </div>
    );
};

export default HomePage;