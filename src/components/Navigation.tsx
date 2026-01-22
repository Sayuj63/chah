'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '/', label: 'Home' },
        { href: '/menu', label: 'Menu' },
        { href: '/about', label: 'About' },
        { href: '/#locations', label: 'Locations' },
        { href: '/contact', label: 'Contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'glass shadow-warm py-3'
                : 'bg-transparent py-4'
                }`}
        >
            <div className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-12 h-12 md:w-14 md:h-14 transition-transform duration-300 group-hover:scale-110">
                            <Image
                                src="/images/newlogo.png"
                                alt="Chah E Piaa De"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="hidden md:block">
                            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-[#8B5A3C]">
                                ਚਾਹ ਦੀ ਪਿਆਲਾ ਦੇ
                            </p>
                            <h1 className="text-lg font-bold text-[#3E2723]" style={{ fontFamily: 'Fredoka, cursive' }}>
                                CHAH E PIAA DE
                            </h1>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-semibold uppercase tracking-[0.1em] text-[#3E2723] hover:text-[#8B5A3C] transition-colors duration-300 relative group"
                            >
                                {link.label}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#8B5A3C] transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden lg:block">
                        <Link href="#locations" className="btn-primary">
                            Visit Us
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus-ring rounded-lg"
                        aria-label="Toggle menu"
                    >
                        <span
                            className={`w-6 h-0.5 bg-[#3E2723] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-[#3E2723] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''
                                }`}
                        />
                        <span
                            className={`w-6 h-0.5 bg-[#3E2723] transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden fixed inset-0 top-[72px] bg-[#FFF8F0] backdrop-blur-md transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                        }`}
                >
                    <div className="flex flex-col gap-2 p-6">
                        {navLinks.map((link, index) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-semibold uppercase tracking-[0.1em] text-[#3E2723] hover:text-[#8B5A3C] transition-all duration-300 py-4 px-4 rounded-xl hover:bg-white/50 border-b border-[#8B5A3C]/10"
                                style={{
                                    animationDelay: `${index * 50}ms`,
                                    animation: isMobileMenuOpen ? 'slideInRight 0.3s ease-out forwards' : 'none'
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            href="#locations"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="btn-primary mt-4 text-center text-base py-4"
                        >
                            Visit Us
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
