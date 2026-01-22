'use client';

import { useEffect, useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LoadingScreen() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Start fade out after 4 seconds
        const fadeTimer = setTimeout(() => {
            setIsVisible(false);
        }, 4000);

        return () => {
            clearTimeout(fadeTimer);
        };
    }, []);

    if (!isVisible) {
        return null;
    }

    const letters = ['C', 'H', 'A', 'H', ' ', 'E', ' ', 'P', 'I', 'A', 'A', ' ', 'D', 'E'];

    return (
        <div
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-warm transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
        >
            {/* Lottie Coffee Cup Animation */}
            <div className="w-64 h-64 md:w-80 md:h-80 mb-8">
                <DotLottieReact
                    src="/Coffee Cup.lottie"
                    loop
                    autoplay
                />
            </div>

            {/* Brand Name */}
            <div className="relative mb-6 px-4">
                <h1
                    className="text-6xl md:text-8xl lg:text-9xl font-black text-center text-[#3E2723] leading-none"
                    style={{ fontFamily: 'Fredoka, cursive' }}
                >
                    {letters.map((letter, index) => (
                        <span
                            key={index}
                            className="inline-block animate-letter-reveal opacity-0"
                            style={{
                                animationDelay: `${1 + index * 0.1}s`,
                                minWidth: letter === ' ' ? '0.5em' : 'auto',
                            }}
                        >
                            {letter === ' ' ? '\u00A0' : letter}
                        </span>
                    ))}
                </h1>
            </div>

            {/* Punjabi subtitle */}
            <p
                className="text-center text-[#3E2723] text-xl md:text-2xl mt-6 font-semibold opacity-0 animate-fade-in"
                style={{
                    fontFamily: 'Poppins, sans-serif',
                    animationDelay: '2.8s',
                }}
            >
                ਚਾਹ ਏ ਪਿਆ ਦੇ
            </p>
        </div>
    );
}
