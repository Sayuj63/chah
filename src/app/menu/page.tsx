import Image from 'next/image';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import MenuCard from '@/components/MenuCard';
import Button from '@/components/Button';

export default function MenuPage() {
    const chaiCategories = {
        classic: [
            {
                name: 'Classic Masala Chai',
                description: 'Traditional blend of aromatic spices with premium black tea',
                price: '₹60',
                image: '/images/featureimage.jpeg',
                tags: ['Bestseller', 'Spicy'],
            },
            {
                name: 'Adrak Chai',
                description: 'Fresh ginger infused chai for a warming experience',
                price: '₹55',
                image: '/images/featureimage.jpeg',
                tags: ['Healthy', 'Warming'],
            },
            {
                name: 'Elaichi Chai',
                description: 'Fragrant cardamom chai with a sweet aroma',
                price: '₹55',
                image: '/images/featureimage.jpeg',
                tags: ['Aromatic', 'Classic'],
            },
        ],
        premium: [
            {
                name: 'Kesar Badam Chai',
                description: 'Rich saffron and almond infused chai with a royal touch',
                price: '₹80',
                image: '/images/featureimage.jpeg',
                tags: ['Premium', 'Sweet'],
            },
            {
                name: 'Rose Chai',
                description: 'Delicate rose petals with creamy milk',
                price: '₹75',
                image: '/images/featureimage.jpeg',
                tags: ['Premium', 'Floral'],
            },
            {
                name: 'Kashmiri Kahwa',
                description: 'Traditional green tea with saffron, almonds, and spices',
                price: '₹85',
                image: '/images/featureimage.jpeg',
                tags: ['Premium', 'Healthy'],
            },
        ],
        fusion: [
            {
                name: 'Chocolate Chai',
                description: 'Decadent chocolate blended with spiced chai',
                price: '₹70',
                image: '/images/featureimage.jpeg',
                tags: ['Fusion', 'Sweet'],
            },
            {
                name: 'Vanilla Chai Latte',
                description: 'Smooth vanilla with frothed milk and chai spices',
                price: '₹75',
                image: '/images/featureimage.jpeg',
                tags: ['Fusion', 'Creamy'],
            },
            {
                name: 'Ginger Tulsi Chai',
                description: 'Healing blend of fresh ginger and holy basil',
                price: '₹65',
                image: '/images/featureimage.jpeg',
                tags: ['Fusion', 'Healthy'],
            },
        ],
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#FFF8F0] pt-24">
                {/* Hero Section */}
                <section className="section-padding bg-gradient-warm">
                    <div className="container-custom text-center">
                        <AnimatedSection animation="slide-up">
                            <p className="label-text mb-6">Our Menu</p>
                            <h1 className="heading-xl mb-8">
                                DISCOVER YOUR<br />PERFECT CUP
                            </h1>
                            <p className="body-text max-w-2xl mx-auto">
                                Handcrafted with premium ingredients and authentic recipes passed down through generations. Each cup is a celebration of Indian chai culture.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Classic Chais */}
                <section className="section-padding bg-[#FFF8F0]">
                    <div className="container-custom">
                        <AnimatedSection animation="slide-up">
                            <div className="mb-12">
                                <h2 className="heading-lg mb-4">Classic Chais</h2>
                                <p className="body-text">Traditional favorites that never go out of style</p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {chaiCategories.classic.map((chai, index) => (
                                <AnimatedSection
                                    key={chai.name}
                                    animation="slide-up"
                                    delay={index * 150}
                                >
                                    <MenuCard {...chai} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Premium Chais */}
                <section className="section-padding bg-[#F5E6D3]">
                    <div className="container-custom">
                        <AnimatedSection animation="slide-up">
                            <div className="mb-12">
                                <h2 className="heading-lg mb-4">Premium Selection</h2>
                                <p className="body-text">Luxurious blends for the discerning chai lover</p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {chaiCategories.premium.map((chai, index) => (
                                <AnimatedSection
                                    key={chai.name}
                                    animation="slide-up"
                                    delay={index * 150}
                                >
                                    <MenuCard {...chai} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Fusion Chais */}
                <section className="section-padding bg-[#FFF8F0]">
                    <div className="container-custom">
                        <AnimatedSection animation="slide-up">
                            <div className="mb-12">
                                <h2 className="heading-lg mb-4">Fusion Flavors</h2>
                                <p className="body-text">Modern twists on traditional chai</p>
                            </div>
                        </AnimatedSection>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {chaiCategories.fusion.map((chai, index) => (
                                <AnimatedSection
                                    key={chai.name}
                                    animation="slide-up"
                                    delay={index * 150}
                                >
                                    <MenuCard {...chai} />
                                </AnimatedSection>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section-padding bg-gradient-dark text-white">
                    <div className="container-custom text-center">
                        <AnimatedSection animation="slide-up">
                            <h2 className="heading-lg mb-6 text-white">
                                READY TO VISIT?
                            </h2>
                            <p className="body-text mb-10 text-white/80 max-w-2xl mx-auto">
                                Find your nearest location and experience the warmth of authentic Indian chai
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
