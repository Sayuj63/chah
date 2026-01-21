'use client';

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
    delay?: number;
}

export default function AnimatedSection({
    children,
    className = '',
    animation = 'slide-up',
    delay = 0,
}: AnimatedSectionProps) {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            setIsVisible(true);
                        }, delay);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    const animationClass = {
        'fade-in': 'animate-fade-in',
        'slide-up': 'animate-slide-up',
        'slide-in-left': 'animate-slide-in-left',
        'slide-in-right': 'animate-slide-in-right',
        'scale-in': 'animate-scale-in',
    }[animation];

    return (
        <div
            ref={sectionRef}
            className={`${className} ${isVisible ? animationClass : 'opacity-0'}`}
        >
            {children}
        </div>
    );
}
