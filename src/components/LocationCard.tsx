import Image from 'next/image';

interface LocationCardProps {
    name: string;
    image: string;
    hours: string[];
    address: string[];
    showArrow?: boolean;
}

export default function LocationCard({ name, image, hours, address, showArrow = false }: LocationCardProps) {
    return (
        <div className="bg-[#F5F1E8] overflow-hidden">
            {/* Location Image */}
            <div className="relative w-full h-[300px] md:h-[400px]">
                <Image
                    src={image}
                    alt={`${name} interior`}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Location Info */}
            <div className="p-8 md:p-12">
                <h3 className="text-[48px] md:text-[56px] leading-[0.9] font-normal mb-8">
                    {name}
                </h3>

                <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-8">
                    {/* Hours */}
                    <div className="flex-1">
                        <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3">
                            Hours
                        </h4>
                        {hours.map((hour, index) => (
                            <p key={index} className="text-xs mb-1 opacity-80">
                                {hour}
                            </p>
                        ))}
                    </div>

                    {/* Address */}
                    <div className="flex-1">
                        <h4 className="text-[11px] font-semibold tracking-[0.1em] uppercase mb-3">
                            Address
                        </h4>
                        {address.map((line, index) => (
                            <p key={index} className="text-xs mb-1 opacity-80">
                                {line}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Get Directions Button */}
                <div className="flex items-center justify-between">
                    <button className="btn-outline">
                        GET DIRECTIONS
                    </button>

                    {showArrow && (
                        <div className="flex gap-2">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M17 7L7 17M7 17H17M7 17V7" />
                            </svg>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
