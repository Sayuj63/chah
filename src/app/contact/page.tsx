'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your message! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#FFF8F0] pt-24">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-warm">
                    <div className="container-custom text-center">
                        <AnimatedSection animation="slide-up">
                            <p className="label-text mb-6">Get In Touch</p>
                            <h1 className="heading-xl mb-8">
                                LET'S TALK<br />CHAI
                            </h1>
                            <p className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#3E2723]/90 font-medium px-4">
                                Have a question, feedback, or just want to say hello? We'd love to hear from you!
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Contact Form & Info Section */}
                <section className="section-padding bg-[#FFF8F0]">
                    <div className="container-custom">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Contact Form */}
                            <AnimatedSection animation="slide-in-left" className="h-full">
                                <div className="card p-8 md:p-10 h-full flex flex-col">
                                    <h2 className="heading-md mb-8">Send Us a Message</h2>
                                    <form onSubmit={handleSubmit} className="space-y-6 flex-grow flex flex-col">
                                        <div>
                                            <label htmlFor="name" className="label-text block mb-2">
                                                Name
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574] focus:border-[#8B5A3C] focus:outline-none transition-colors bg-white text-[#3E2723]"
                                                placeholder="Your name"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="label-text block mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574] focus:border-[#8B5A3C] focus:outline-none transition-colors bg-white text-[#3E2723]"
                                                placeholder="your@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="label-text block mb-2">
                                                Phone (Optional)
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574] focus:border-[#8B5A3C] focus:outline-none transition-colors bg-white text-[#3E2723]"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>

                                        <div className="flex-grow flex flex-col">
                                            <label htmlFor="message" className="label-text block mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-lg border-2 border-[#D4A574] focus:border-[#8B5A3C] focus:outline-none transition-colors bg-white text-[#3E2723] resize-none flex-grow"
                                                placeholder="Tell us what's on your mind..."
                                            />
                                        </div>

                                        <Button type="submit" variant="primary" className="w-full">
                                            Send Message
                                        </Button>
                                    </form>
                                </div>
                            </AnimatedSection>

                            {/* Contact Info */}
                            <AnimatedSection animation="slide-in-right" className="h-full">
                                <div className="space-y-8 h-full flex flex-col">
                                    <div className="flex-grow">
                                        <h2 className="heading-md mb-8">Visit Us</h2>
                                        <div className="space-y-6">
                                            {/* Location 1 */}
                                            <div className="card-surface p-6">
                                                <h3 className="heading-sm mb-4">Main Location</h3>
                                                <div className="space-y-3 text-sm text-[#3E2723]/80">
                                                    <p className="flex items-start gap-3">
                                                        <span className="text-xl">📍</span>
                                                        <span>123 Chai Street<br />Your City, State 12345</span>
                                                    </p>
                                                    <p className="flex items-center gap-3">
                                                        <span className="text-xl">📞</span>
                                                        <span>+91 98765 43210</span>
                                                    </p>
                                                    <p className="flex items-center gap-3">
                                                        <span className="text-xl">📧</span>
                                                        <span>main@chahepiaade.com</span>
                                                    </p>
                                                    <p className="flex items-start gap-3">
                                                        <span className="text-xl">🕐</span>
                                                        <span>Mon-Fri: 7am - 10pm<br />Sat-Sun: 8am - 11pm</span>
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Location 2 */}
                                            <div className="card-surface p-6">
                                                <h3 className="heading-sm mb-4">Second Location</h3>
                                                <div className="space-y-3 text-sm text-[#3E2723]/80">
                                                    <p className="flex items-start gap-3">
                                                        <span className="text-xl">📍</span>
                                                        <span>456 Tea Avenue<br />Your City, State 12345</span>
                                                    </p>
                                                    <p className="flex items-center gap-3">
                                                        <span className="text-xl">📞</span>
                                                        <span>+91 98765 43211</span>
                                                    </p>
                                                    <p className="flex items-center gap-3">
                                                        <span className="text-xl">📧</span>
                                                        <span>second@chahepiaade.com</span>
                                                    </p>
                                                    <p className="flex items-start gap-3">
                                                        <span className="text-xl">🕐</span>
                                                        <span>Mon-Fri: 7am - 10pm<br />Sat-Sun: 8am - 11pm</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Social Media */}
                                    <div className="card-surface p-6">
                                        <h3 className="heading-sm mb-4">Follow Us</h3>
                                        <p className="text-sm text-[#3E2723]/70 mb-4">
                                            Stay updated with our latest offerings and chai stories
                                        </p>
                                        <div className="flex gap-4">
                                            <a
                                                href="#"
                                                className="w-12 h-12 rounded-full bg-gradient-warm hover:shadow-warm flex items-center justify-center transition-all hover:scale-110 text-xl"
                                            >
                                                📷
                                            </a>
                                            <a
                                                href="#"
                                                className="w-12 h-12 rounded-full bg-gradient-warm hover:shadow-warm flex items-center justify-center transition-all hover:scale-110 text-xl"
                                            >
                                                📘
                                            </a>
                                            <a
                                                href="#"
                                                className="w-12 h-12 rounded-full bg-gradient-warm hover:shadow-warm flex items-center justify-center transition-all hover:scale-110 text-xl"
                                            >
                                                🐦
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-gradient-dark text-white">
                    <div className="container-custom text-center">
                        <AnimatedSection animation="slide-up">
                            <h2 className="heading-lg mb-6 text-white">
                                READY FOR<br />YOUR CHAI?
                            </h2>
                            <p className="text-lg md:text-xl mb-10 text-white/90 font-medium px-4">
                                Don't wait—visit us today and experience authentic Indian chai
                            </p>
                            <Button href="/#locations" variant="primary">
                                Find Locations
                            </Button>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
        </>
    );
}
