import Image from 'next/image';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import Button from '@/components/Button';

export default function AboutPage() {
    const values = [
        {
            title: 'Authenticity',
            description: 'We stay true to traditional recipes while embracing innovation',
            icon: '🍵',
        },
        {
            title: 'Quality',
            description: 'Only the finest ingredients make it into your cup',
            icon: '⭐',
        },
        {
            title: 'Community',
            description: 'Building connections one chai at a time',
            icon: '🤝',
        },
        {
            title: 'Warmth',
            description: 'Every visit feels like coming home',
            icon: '❤️',
        },
    ];

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#FFF8F0] pt-24">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-warm">
                    <div className="container-custom text-center">
                        <AnimatedSection animation="slide-up">
                            <p className="label-text mb-6">Our Story</p>
                            <h1 className="heading-xl mb-8">
                                BREWING MEMORIES<br />SINCE 2024
                            </h1>
                            <p className="body-text max-w-3xl mx-auto">
                                Chah E Piaa De was born from a simple dream: to share the authentic taste of Indian chai with the world. What started as a small family recipe has grown into a beloved community gathering place.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Story Section */}
                <section className="section-padding bg-[#FFF8F0]">
                    <div className="container-custom max-w-7xl mx-auto px-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                            <AnimatedSection animation="slide-in-left">
                                <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-warm-lg">
                                    <Image
                                        src="/images/interior.jpg"
                                        alt="Our Story"
                                        fill
                                        className="object-cover object-center"
                                    />
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-in-right">
                                <div className="w-full">
                                    <h2 className="heading-lg mb-6">
                                        THE JOURNEY<br />OF CHAI
                                    </h2>
                                    <div className="space-y-6 body-text">
                                        <p className="leading-relaxed">
                                            Our founder grew up watching their grandmother brew chai every morning, using a secret blend of spices that had been perfected over generations. The aroma would fill the house, bringing the family together before the day began.
                                        </p>
                                        <p className="leading-relaxed">
                                            That same warmth and tradition is what we bring to every cup at Chah E Piaa De. We believe chai is more than just a beverage—it's a ritual, a conversation starter, and a moment of peace in a busy day.
                                        </p>
                                        <p className="leading-relaxed">
                                            Today, we're proud to serve our community with the same love and care that went into that first cup, all those years ago.
                                        </p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section-padding bg-[#F5E6D3]">
                    <div className="container-custom">
                        <AnimatedSection animation="slide-up">
                            <div className="text-center mb-16">
                                <h2 className="heading-lg mb-6">OUR VALUES</h2>
                                <p className="body-text max-w-2xl mx-auto">
                                    These principles guide everything we do
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {values.map((value, index) => (
                                <AnimatedSection
                                    key={value.title}
                                    animation="slide-up"
                                    delay={index * 150}
                                >
                                    <div className="card text-center p-8">
                                        <div className="text-5xl mb-4">{value.icon}</div>
                                        <h3 className="heading-sm mb-3">{value.title}</h3>
                                        <p className="text-sm text-[#3E2723]/70 leading-relaxed">
                                            {value.description}
                                        </p>
                                    </div>
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Brewing Process Section */}
                <section className="section-padding bg-[#FFF8F0]">
                    <div className="container-custom">
                        <AnimatedSection animation="slide-up">
                            <div className="text-center mb-16">
                                <h2 className="heading-lg mb-6">
                                    THE PERFECT<br />BREW
                                </h2>
                                <p className="body-text max-w-2xl mx-auto">
                                    Our traditional brewing process ensures every cup is perfect
                                </p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <AnimatedSection animation="slide-up" delay={0}>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center text-3xl mx-auto mb-6">
                                        1️⃣
                                    </div>
                                    <h3 className="heading-sm mb-3">Select & Blend</h3>
                                    <p className="text-sm text-[#3E2723]/70 leading-relaxed">
                                        We carefully select premium tea leaves and freshly ground spices for the perfect blend
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={200}>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center text-3xl mx-auto mb-6">
                                        2️⃣
                                    </div>
                                    <h3 className="heading-sm mb-3">Brew & Simmer</h3>
                                    <p className="text-sm text-[#3E2723]/70 leading-relaxed">
                                        Traditional slow-brewing method allows flavors to develop fully
                                    </p>
                                </div>
                            </AnimatedSection>

                            <AnimatedSection animation="slide-up" delay={400}>
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-gradient-warm flex items-center justify-center text-3xl mx-auto mb-6">
                                        3️⃣
                                    </div>
                                    <h3 className="heading-sm mb-3">Serve Fresh</h3>
                                    <p className="text-sm text-[#3E2723]/70 leading-relaxed">
                                        Every cup is brewed fresh to order and served at the perfect temperature
                                    </p>
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
                                EXPERIENCE THE<br />DIFFERENCE
                            </h2>
                            <p className="body-text mb-10 text-white/80 max-w-2xl mx-auto">
                                Visit us today and taste the tradition in every cup
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Button href="/menu" variant="primary">
                                    View Menu
                                </Button>
                                <Button href="/#locations" variant="secondary">
                                    Find Locations
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
        </>
    );
}
