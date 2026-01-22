import Image from 'next/image';

interface MenuCardProps {
    name: string;
    description: string;
    price: string;
    image: string;
    tags?: string[];
}

export default function MenuCard({
    name,
    description,
    price,
    image,
    tags = [],
}: MenuCardProps) {
    return (
        <div className="card h-full flex flex-col group cursor-pointer shadow-warm-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden bg-white">
            {/* Image Section */}
            <div className="relative h-72 w-full overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 p-4">
                    <div className="w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg transform group-hover:scale-110 transition-transform duration-300" />
                </div>
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#3E2723] leading-tight group-hover:text-[#8B5A3C] transition-colors duration-300" style={{ fontFamily: 'Fredoka, cursive' }}>
                        {name}
                    </h3>
                </div>

                <p className="text-[#3E2723]/70 text-base leading-relaxed mb-6 flex-grow font-medium">
                    {description}
                </p>

                {/* Bottom Section: Price and Tags */}
                <div className="mt-auto space-y-6">
                    <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="text-[10px] uppercase tracking-wider px-3 py-1 bg-[#F5E6D3] text-[#8B5A3C] rounded-full font-bold"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="text-2xl font-black text-[#8B5A3C]" style={{ fontFamily: 'Fredoka, cursive' }}>
                            {price}
                        </div>
                    </div>

                    {/* Add to order visual cue - subtle button-like element */}
                    <div className="h-0.5 w-0 bg-[#8B5A3C] group-hover:w-full transition-all duration-500" />
                </div>
            </div>
        </div>
    );
}
