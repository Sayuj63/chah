import Image from 'next/image';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import MenuCard from '@/components/MenuCard';
import Button from '@/components/Button';

export default function MenuPage() {
    const categories = {
        chais: {
            title: 'Our Signature Chais',
            subtitle: 'Traditional and fusion blends handcrafted with premium spices',
            items: [
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
                    name: 'Kesar Badam Chai',
                    description: 'Rich saffron and almond infused chai with a royal touch',
                    price: '₹80',
                    image: '/images/featureimage.jpeg',
                    tags: ['Premium', 'Sweet'],
                },
                {
                    name: 'Rose Chai',
                    description: 'Delicate rose petals with creamy milk and aromatic tea',
                    price: '₹75',
                    image: '/images/featureimage.jpeg',
                    tags: ['Premium', 'Floral'],
                },
                {
                    name: 'Ginger Tulsi Chai',
                    description: 'Healing blend of fresh ginger and holy basil',
                    price: '₹65',
                    image: '/images/featureimage.jpeg',
                    tags: ['Healthy', 'Refreshing'],
                },
                {
                    name: 'Kashmiri Kahwa',
                    description: 'Traditional green tea with saffron, almonds, and spices',
                    price: '₹85',
                    image: '/images/featureimage.jpeg',
                    tags: ['Premium', 'Exotic'],
                },
            ]
        },
        coffees: {
            title: 'Specialty Coffees',
            subtitle: 'Rich, bold, and expertly brewed for the coffee aficionado',
            items: [
                {
                    name: 'Filter Coffee',
                    description: 'Traditional South Indian style brew with rich frothed milk',
                    price: '₹70',
                    image: '/images/featureimage.jpeg',
                    tags: ['Authentic', 'Strong'],
                },
                {
                    name: 'Cafe Latte',
                    description: 'Smooth espresso with velvety steamed milk and thin layer of foam',
                    price: '₹120',
                    image: '/images/featureimage.jpeg',
                    tags: ['Classic', 'Creamy'],
                },
                {
                    name: 'Cappuccino',
                    description: 'Rich espresso with equal parts steamed milk and thick foam',
                    price: '₹130',
                    image: '/images/featureimage.jpeg',
                    tags: ['Popular', 'Bold'],
                },
                {
                    name: 'Hazelnut Cold Coffee',
                    description: 'Refreshing chilled coffee with a hint of roasted hazelnut',
                    price: '₹150',
                    image: '/images/featureimage.jpeg',
                    tags: ['Cold', 'Sweet'],
                },
                {
                    name: 'Mocha Fusion',
                    description: 'Perfect blend of rich chocolate sauce and bold espresso',
                    price: '₹140',
                    image: '/images/featureimage.jpeg',
                    tags: ['Indulgent'],
                },
            ]
        },
        snacks: {
            title: 'Savory Snacks',
            subtitle: 'The perfect accompaniments to your favorite beverage',
            items: [
                {
                    name: 'Classic Samosa (2pcs)',
                    description: 'Crispy golden pastry filled with spiced potatoes and peas',
                    price: '₹50',
                    image: '/images/featureimage.jpeg',
                    tags: ['Bestseller', 'Crunchy'],
                },
                {
                    name: 'Bun Maska',
                    description: 'Soft toasted bun served with a generous dollop of fresh butter',
                    price: '₹45',
                    image: '/images/featureimage.jpeg',
                    tags: ['Traditional', 'Soft'],
                },
                {
                    name: 'Vada Pav',
                    description: 'Spiced potato fritter inside a soft bread bun with spicy chutneys',
                    price: '₹40',
                    image: '/images/featureimage.jpeg',
                    tags: ['Street Food', 'Spicy'],
                },
                {
                    name: 'Paneer Pakora',
                    description: 'Golden fried paneer chunks in a spiced gram flour batter',
                    price: '₹120',
                    image: '/images/featureimage.jpeg',
                    tags: ['Crispy', 'Premium'],
                },
                {
                    name: 'Chicken Keema Bun',
                    description: 'Savory spiced minced chicken stuffed in a soft toasted bun',
                    price: '₹140',
                    image: '/images/featureimage.jpeg',
                    tags: ['Non-Veg', 'Savory'],
                },
                {
                    name: 'Peri Peri Fries',
                    description: 'Crispy golden fries tossed in our signature peri peri seasoning',
                    price: '₹90',
                    image: '/images/featureimage.jpeg',
                    tags: ['Snack', 'Spicy'],
                },
            ]
        },
        desserts: {
            title: 'Sweet Treats',
            subtitle: 'End your visit on a sweet note with our delicious desserts',
            items: [
                {
                    name: 'Chocolate Brownie',
                    description: 'Rich, fudgy brownie served warm with chocolate sauce',
                    price: '₹110',
                    image: '/images/featureimage.jpeg',
                    tags: ['Popular', 'Indulgent'],
                },
                {
                    name: 'Gulab Jamun (2pcs)',
                    description: 'Soft milk solids dumplings soaked in cardamom sugar syrup',
                    price: '₹60',
                    image: '/images/featureimage.jpeg',
                    tags: ['Classic', 'Sweet'],
                },
                {
                    name: 'Apple Pie',
                    description: 'Classic warm apple pie with a flaky crust and cinnamon hint',
                    price: '₹150',
                    image: '/images/featureimage.jpeg',
                    tags: ['Homemade', 'Warm'],
                },
            ]
        }
    };

    return (
        <>
            <Navigation />

            <main className="min-h-screen bg-[#FFF8F0] pt-24">
                {/* Hero Section */}
                <section className="relative w-full py-24 md:py-32 bg-[#3E2723] overflow-hidden">
                    <div className="absolute inset-0 opacity-40">
                        <Image
                            src="/images/heroimage.jpeg"
                            alt="Background"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-[#3E2723]/60 via-[#3E2723]/40 to-[#3E2723]/90" />

                    <div className="container-custom relative z-10">
                        <AnimatedSection animation="slide-up" className="flex flex-col items-center text-center w-full">
                            <p className="text-[#D4A574] text-xs md:text-sm uppercase tracking-[0.4em] font-black mb-8">Our Full Menu</p>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-10 text-[#FFF8F0] leading-[1.1]" style={{ fontFamily: 'Fredoka, cursive' }}>
                                CRAFTED WITH<br />LOVE & SPICES
                            </h1>
                            <div className="w-24 h-1.5 bg-[#D4A574] mb-10 rounded-full" />
                            <p className="text-[#FFF8F0]/90 font-medium text-lg md:text-xl lg:text-2xl leading-relaxed px-4">
                                From our signature chais to expertly brewed coffees and soul-warming snacks,
                                every item on our menu is a celebration of authentic Indian flavors and modern cafe culture.
                            </p>
                        </AnimatedSection>
                    </div>
                </section>

                {/* Categories */}
                {Object.entries(categories).map(([key, category], catIndex) => (
                    <section
                        key={key}
                        className={`section-padding ${catIndex % 2 === 0 ? 'bg-[#FFF8F0]' : 'bg-[#F5E6D3]'}`}
                    >
                        <div className="container-custom">
                            <AnimatedSection animation="slide-up" className="mb-20">
                                <div className="text-center md:text-left">
                                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-[#3E2723]" style={{ fontFamily: 'Fredoka, cursive' }}>
                                        {category.title}
                                    </h2>
                                    <div className="w-20 h-1 bg-[#8B5A3C] mb-8 mx-auto md:mx-0" />
                                    <p className="text-xl text-[#8B5A3C] font-semibold tracking-tight">{category.subtitle}</p>
                                </div>
                            </AnimatedSection>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
                                {category.items.map((item, index) => (
                                    <AnimatedSection
                                        key={item.name}
                                        animation="slide-up"
                                        delay={(index % 3) * 100}
                                        className="h-full"
                                    >
                                        <MenuCard {...item} />
                                    </AnimatedSection>
                                ))}
                            </div>
                        </div>
                    </section>
                ))}

                {/* CTA Section */}
                <section className="section-padding bg-gradient-dark text-white relative overflow-hidden">
                    {/* Decorative background circle */}
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-[#D4A574]/10 rounded-full blur-3xl" />
                    <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#8B5A3C]/10 rounded-full blur-3xl" />

                    <div className="container-custom relative z-10 text-center">
                        <AnimatedSection animation="slide-up">
                            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-8 text-[#D4A574]" style={{ fontFamily: 'Fredoka, cursive' }}>
                                HUNGRY FOR MORE?
                            </h2>
                            <p className="text-xl md:text-2xl mb-12 text-[#FFF8F0]/80 max-w-2xl mx-auto leading-relaxed font-medium">
                                Experience the true essence of Indian hospitality. Whether it's a quick break or a long conversation,
                                we have the perfect blend for every occasion.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <Button href="/#locations" variant="primary" className="px-12 py-5 text-lg min-w-[220px]">
                                    Find Our Locations
                                </Button>
                                <Button href="/contact" variant="secondary" className="px-12 py-5 text-lg min-w-[220px] text-white border-white hover:bg-white hover:text-[#3E2723]">
                                    Contact Us
                                </Button>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </main>
        </>
    );
}
