import Image from 'next/image';

export default function BrewingSection() {
    return (
        <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#2C2C2C]">
            {/* Left Panel - Coffee Brewing Image */}
            <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-screen">
                {/* Vertical Text */}
                <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                    <p className="vertical-text text-white opacity-60">
                        TASTE THE PNW
                    </p>
                </div>

                <Image
                    src="/images/coffee-brewing.png"
                    alt="Pour-over coffee brewing"
                    fill
                    className="object-cover"
                />
            </div>

            {/* Right Panel - Content */}
            <div className="w-full md:w-1/2 bg-[#F5F1E8] flex items-center justify-center p-8 md:p-16">
                <div className="max-w-md">
                    <p className="text-[11px] font-semibold tracking-[0.15em] uppercase mb-4">
                        TASTE THE PNW
                    </p>
                    <h2 className="text-[80px] md:text-[100px] lg:text-[120px] leading-[0.85] font-normal mb-8">
                        START THE ADVENTURE.
                    </h2>
                    <p className="text-sm leading-relaxed mb-4 opacity-80">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <p className="text-sm leading-relaxed mb-8 opacity-80">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.
                    </p>
                    <button className="btn-outline">
                        LEARN MORE
                    </button>
                </div>
            </div>
        </section>
    );
}
