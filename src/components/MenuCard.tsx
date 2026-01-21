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
        <div className="card group cursor-pointer">
            {/* Image */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#8B5A3C] text-white px-4 py-2 rounded-full font-bold text-sm">
                    {price}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="heading-sm mb-3">{name}</h3>
                <p className="text-sm text-[#3E2723]/70 leading-relaxed mb-4">
                    {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-xs px-3 py-1 bg-[#F5E6D3] text-[#8B5A3C] rounded-full font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
