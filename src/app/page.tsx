import Image from 'next/image';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AnimatedSection from '@/components/AnimatedSection';
import MenuCard from '@/components/MenuCard';
import Button from '@/components/Button';

export default function Home() {
  const featuredChais = [
    {
      name: 'Classic Masala Chai',
      description: 'Traditional blend of aromatic spices with premium black tea',
      price: '₹60',
      image: '/images/featureimage.jpeg',
      tags: ['Bestseller', 'Spicy'],
    },
    {
      name: 'Kesar Badam Chai',
      description: 'Rich saffron and almond infused chai with a royal touch',
      price: '₹80',
      image: '/images/chai-brewing.png',
      tags: ['Premium', 'Sweet'],
    },
    {
      name: 'Ginger Tulsi Chai',
      description: 'Healing blend of fresh ginger and holy basil',
      price: '₹65',
      image: '/images/chai-brewing.png',
      tags: ['Healthy', 'Refreshing'],
    },
  ];

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-[#FFF8F0]">
        {/* Hero Section - Split Left/Right */}
        <section className="relative w-full min-h-[100vh] md:min-h-[80vh] flex flex-col md:flex-row pt-20 md:pt-24">
          {/* Left Panel - Brand Message */}
          <div className="w-full md:w-1/2 bg-[#FFF8F0] flex items-center justify-center p-6 md:p-12 lg:p-20 relative">
            <div className="w-full">

              <AnimatedSection animation="slide-up" delay={200}>
                <p className="label-text mb-6 md:mb-8">
                  ਚਾਹ ਦੀ ਪਿਆਲਾ ਦੇ
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <h1 className="heading-xl mb-8 md:mb-12">
                  CHAH E<br />PIAA DE
                </h1>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <p className="body-text mb-8 md:mb-12">
                  Experience authentic Indian chai in a warm, welcoming atmosphere. Every cup tells a story of tradition, love, and the perfect blend of spices.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={800}>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <Button href="#menu" variant="primary">
                    Explore Menu
                  </Button>
                  <Button href="#locations" variant="secondary">
                    Find Us
                  </Button>
                </div>
              </AnimatedSection>

              {/* Scroll Indicator */}
              <AnimatedSection animation="fade-in" delay={1000}>
                <div className="hidden md:flex items-center gap-3 mt-16 lg:mt-20">
                  <div className="w-px h-16 bg-[#8B5A3C]/30" />
                  <p className="text-xs uppercase tracking-[0.2em] text-[#8B5A3C] -rotate-90 origin-left translate-x-4">
                    Scroll
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Panel - Exterior Image */}
          <AnimatedSection
            animation="slide-in-right"
            delay={400}
            className="w-full md:w-1/2 relative h-[50vh] md:h-[70vh]"
          >
            <div className="image-overlay h-full rounded-2xl overflow-hidden m-6 md:m-0">
              <Image
                src="/images/heroimage.jpeg"
                alt="Chah E Piaa De Storefront"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Chai Brewing Section - Split Left/Right (Reversed) */}
        <section className="relative w-full flex flex-col-reverse md:flex-row">
          {/* Left Panel - Chai Brewing Image */}
          <AnimatedSection
            animation="slide-in-left"
            className="w-full md:w-1/2 relative h-[50vh] md:h-auto"
          >
            <div className="image-overlay h-full">
              <Image
                src="/images/chai-brewing.png"
                alt="Traditional chai brewing"
                fill
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>

          {/* Right Panel - Content */}
          <div className="w-full md:w-1/2 bg-gradient-warm flex items-center justify-center p-12 md:p-16 lg:p-20">
            <div className="w-full">
              <AnimatedSection animation="slide-up">
                <p className="label-text mb-8">
                  Authentic Flavors
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h2 className="heading-lg mb-10">
                  TASTE THE<br />TRADITION
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="body-text mb-6 leading-relaxed">
                  Every cup of chai is brewed with love using traditional methods and the finest ingredients. Experience the warmth of Indian hospitality in every sip.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <p className="body-text mb-12 leading-relaxed">
                  From classic masala chai to innovative fusion flavors, discover your perfect cup.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={800}>
                <div className="grid grid-cols-2 gap-6 mb-12">
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                      15+
                    </p>
                    <p className="text-sm text-[#3E2723]/80">Chai Varieties</p>
                  </div>
                  <div>
                    <p className="text-4xl md:text-5xl font-bold text-[#3E2723] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                      10K+
                    </p>
                    <p className="text-sm text-[#3E2723]/80">Cups Served</p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={1000}>
                <Button href="#menu" variant="secondary">
                  View Full Menu
                </Button>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Interior Section - Full Width */}
        <section className="section-padding bg-[#FFF8F0]">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-12">
                <p className="label-text mb-6">Our Space</p>
                <h2 className="heading-lg mb-6">
                  EXPERIENCE THE<br />CHAH E PIAA DE VIBE
                </h2>
                <p className="body-text mx-auto">
                  Warm woods, comfortable seating, and an atmosphere that feels like home. Step into our world and let the aroma of freshly brewed chai embrace you.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay={300}>
              <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-warm-lg">
                <video
                  src="/featuredvideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Menu Preview Section */}
        <section id="menu" className="section-padding bg-[#F5E6D3]">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <p className="label-text mb-6">Our Menu</p>
                <h2 className="heading-lg mb-6">
                  FEATURED<br />CHAI VARIETIES
                </h2>
                <p className="body-text mx-auto">
                  Handcrafted with premium ingredients and authentic recipes passed down through generations
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredChais.map((chai, index) => (
                <AnimatedSection
                  key={chai.name}
                  animation="slide-up"
                  delay={index * 200}
                >
                  <MenuCard {...chai} />
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="text-center mt-12">
                <Button href="#menu" variant="primary">
                  View Full Menu
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Locations Section - Split Cards */}
        <section id="locations" className="section-padding bg-gradient-warm">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <p className="label-text mb-6">Find Us</p>
                <h2 className="heading-lg mb-6">
                  VISIT US
                </h2>
                <p className="body-text">
                  Find your nearest Chah E Piaa De location
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Location 1 */}
              <AnimatedSection animation="slide-in-left" delay={200}>
                <div className="card-surface">
                  <div className="p-8 md:p-10">
                    <h3 className="heading-md mb-8">
                      Main Location
                    </h3>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="label-text mb-3">
                          Hours
                        </h4>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Mon to Fri: 7am - 10pm</p>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Sat & Sun: 8am - 11pm</p>
                      </div>
                      <div>
                        <h4 className="label-text mb-3">
                          Address
                        </h4>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">PO BOX 392 STN A</p>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Abbotsford BC V2T 6Z7</p>
                      </div>
                    </div>
                    <Button variant="primary" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </AnimatedSection>

              {/* Location 2 */}
              <AnimatedSection animation="slide-in-right" delay={400}>
                <div className="card-surface">
                  <div className="p-8 md:p-10">
                    <h3 className="heading-md mb-8">
                      Second Location
                    </h3>
                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="label-text mb-3">
                          Hours
                        </h4>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Mon to Fri: 7am - 10pm</p>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Sat & Sun: 8am - 11pm</p>
                      </div>
                      <div>
                        <h4 className="label-text mb-3">
                          Address
                        </h4>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">456 Tea Avenue</p>
                        <p className="text-sm text-[#3E2723]/80 leading-relaxed">Your City, State 12345</p>
                      </div>
                    </div>
                    <Button variant="primary" className="w-full">
                      Get Directions
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Customer Testimonials Section */}
        <section className="section-padding bg-[#FFF8F0]">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <p className="label-text mb-6">Testimonials</p>
                <h2 className="heading-lg mb-6">
                  WHAT OUR<br />CUSTOMERS SAY
                </h2>
                <p className="body-text mx-auto">
                  Don't just take our word for it - hear from our chai-loving community
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <AnimatedSection animation="slide-up" delay={200} className="h-full">
                <div className="card-surface p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4A574] text-xl">★</span>
                    ))}
                  </div>
                  <p className="body-text mb-6 italic flex-grow">
                    "The best chai I've had outside of India! The masala blend is perfect and the atmosphere is so welcoming."
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-[#3E2723] font-bold">
                      PS
                    </div>
                    <div>
                      <p className="font-semibold text-[#3E2723]">Priya Sharma</p>
                      <p className="text-sm text-[#3E2723]/60">Regular Customer</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400} className="h-full">
                <div className="card-surface p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4A574] text-xl">★</span>
                    ))}
                  </div>
                  <p className="body-text mb-6 italic flex-grow">
                    "A hidden gem! The Kesar Badam Chai is absolutely divine. This place has become my daily ritual."
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-[#3E2723] font-bold">
                      RK
                    </div>
                    <div>
                      <p className="font-semibold text-[#3E2723]">Rajesh Kumar</p>
                      <p className="text-sm text-[#3E2723]/60">Chai Enthusiast</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600} className="h-full">
                <div className="card-surface p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#D4A574] text-xl">★</span>
                    ))}
                  </div>
                  <p className="body-text mb-6 italic flex-grow">
                    "Authentic flavors, cozy ambiance, and friendly staff. Chah E Piaa De feels like home away from home!"
                  </p>
                  <div className="flex items-center gap-3 mt-auto">
                    <div className="w-12 h-12 rounded-full bg-gradient-warm flex items-center justify-center text-[#3E2723] font-bold">
                      AM
                    </div>
                    <div>
                      <p className="font-semibold text-[#3E2723]">Anjali Mehta</p>
                      <p className="text-sm text-[#3E2723]/60">Food Blogger</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Story Section - Split Layout */}
        <section className="relative w-full flex flex-col md:flex-row">
          {/* Left Panel - Content */}
          <div className="w-full md:w-1/2 bg-gradient-dark text-white flex items-center justify-center p-12 md:p-16 lg:p-20">
            <div className="w-full">
              <AnimatedSection animation="slide-up">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4A574] mb-8">
                  Our Journey
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10" style={{ fontFamily: 'Fredoka, cursive' }}>
                  BREWING TRADITIONS<br />SINCE 2024
                </h2>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Chah E Piaa De was born from a simple dream - to bring the authentic taste of Indian chai to every corner of the city. Our founder, inspired by childhood memories of sipping chai with family, set out to recreate that warmth and connection.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={600}>
                <p className="text-white/90 mb-10 leading-relaxed">
                  Every cup we serve is a tribute to the rich heritage of Indian tea culture, blended with modern innovation and a commitment to quality that never wavers.
                </p>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={800}>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="text-4xl font-bold text-[#D4A574] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                      100%
                    </p>
                    <p className="text-sm text-white/70">Organic Ingredients</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[#D4A574] mb-2" style={{ fontFamily: 'Fredoka, cursive' }}>
                      5★
                    </p>
                    <p className="text-sm text-white/70">Customer Rating</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          {/* Right Panel - Image */}
          <AnimatedSection
            animation="slide-in-right"
            className="w-full md:w-1/2 relative h-[50vh] md:h-auto"
          >
            <div className="image-overlay h-full">
              <Image
                src="/images/featureimage.jpeg"
                alt="Our chai brewing process"
                fill
                className="object-cover object-center"
              />
            </div>
          </AnimatedSection>
        </section>

        {/* Special Offers Section */}
        <section className="section-padding bg-gradient-warm">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <p className="label-text mb-6">Limited Time</p>
                <h2 className="heading-lg mb-6">
                  SPECIAL<br />OFFERS
                </h2>
                <p className="body-text mx-auto">
                  Exclusive deals and seasonal specials just for you
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatedSection animation="slide-in-left" delay={200} className="h-full">
                <div className="card-surface p-10 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-4 right-4 bg-[#8B5A3C] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    NEW
                  </div>
                  <h3 className="heading-md mb-4">
                    Happy Hour Special
                  </h3>
                  <p className="body-text mb-6 flex-grow">
                    Get 20% off on all chai varieties between 3 PM - 5 PM on weekdays. Perfect for your afternoon pick-me-up!
                  </p>
                  <div className="flex items-baseline gap-2 mb-6 mt-auto">
                    <span className="text-3xl font-bold text-[#8B5A3C]" style={{ fontFamily: 'Fredoka, cursive' }}>₹48</span>
                    <span className="text-lg text-[#3E2723]/50 line-through">₹60</span>
                  </div>
                  <Button variant="primary">
                    Learn More
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-in-right" delay={400} className="h-full">
                <div className="card-surface p-10 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-4 right-4 bg-[#D4A574] text-white px-4 py-2 rounded-full text-sm font-semibold">
                    POPULAR
                  </div>
                  <h3 className="heading-md mb-4">
                    Loyalty Card
                  </h3>
                  <p className="body-text mb-6 flex-grow">
                    Buy 9 chais and get your 10th absolutely free! Plus, earn points for exclusive rewards and early access to new flavors.
                  </p>
                  <div className="flex items-baseline gap-2 mb-6 mt-auto">
                    <span className="text-3xl font-bold text-[#8B5A3C]" style={{ fontFamily: 'Fredoka, cursive' }}>Free</span>
                    <span className="text-lg text-[#3E2723]/70">to join</span>
                  </div>
                  <Button variant="secondary">
                    Sign Up Now
                  </Button>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Instagram Gallery Section */}
        <section className="section-padding bg-[#FFF8F0]">
          <div className="container-custom">
            <AnimatedSection animation="slide-up">
              <div className="text-center mb-16">
                <p className="label-text mb-6">Follow Us</p>
                <h2 className="heading-lg mb-6">
                  @CHAHEPIAADE
                </h2>
                <p className="body-text mx-auto">
                  Join our community and share your chai moments with #ChahEPiaaDe
                </p>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
                <AnimatedSection
                  key={item}
                  animation="scale-in"
                  delay={index * 100}
                >
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-warm group cursor-pointer">
                    <Image
                      src="/images/featureimage.jpeg"
                      alt={`Instagram post ${item}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-dark/0 group-hover:bg-gradient-dark/30 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        📷
                      </span>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-in" delay={800}>
              <div className="text-center mt-12">
                <Button href="https://instagram.com" variant="primary">
                  Follow on Instagram
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-dark text-white section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
              <AnimatedSection animation="slide-up">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Image
                      src="/images/newlogo.png"
                      alt="Chah E Piaa De"
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-[#D4A574]">
                        ਚਾਹ ਦੀ ਪਿਆਲਾ ਦੇ
                      </p>
                      <h4 className="text-xl font-bold" style={{ fontFamily: 'Fredoka, cursive' }}>
                        Chah E Piaa De
                      </h4>
                    </div>
                  </div>
                  <p className="text-sm text-white/70 leading-relaxed">
                    Serving authentic Indian chai with love since 2024. Experience the warmth of tradition in every cup.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={200}>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-sm">
                    <li><Link href="#menu" className="text-white/70 hover:text-white transition-colors">Menu</Link></li>
                    <li><Link href="#locations" className="text-white/70 hover:text-white transition-colors">Locations</Link></li>
                    <li><Link href="#about" className="text-white/70 hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="#contact" className="text-white/70 hover:text-white transition-colors">Contact</Link></li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection animation="slide-up" delay={400}>
                <div>
                  <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
                  <p className="text-sm text-white/70 mb-2">info@chahepiaade.com</p>
                  <p className="text-sm text-white/70 mb-6">+91 98765 43210</p>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <span className="sr-only">Instagram</span>
                      📷
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <span className="sr-only">Facebook</span>
                      📘
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
                      <span className="sr-only">Twitter</span>
                      🐦
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <AnimatedSection animation="fade-in" delay={600}>
              <div className="border-t border-white/20 pt-8 text-center">
                <p className="text-sm text-white/50">
                  © 2024 Chah E Piaa De. All rights reserved. Made with ❤️ and chai
                </p>
              </div>
            </AnimatedSection>
          </div>
        </footer>
      </main>
    </>
  );
}
