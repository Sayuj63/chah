export default function Footer() {
    return (
        <footer className="bg-[#F5F1E8] border-t border-black/10">
            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                    {/* Left Section - Visit Site Link */}
                    <div className="flex items-center gap-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                        <a href="#" className="text-2xl font-normal hover:opacity-70 transition-opacity" style={{ fontFamily: 'Bebas Neue' }}>
                            Visit site
                        </a>
                    </div>

                    {/* Center Section - Links */}
                    <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs">
                        <div>
                            <h5 className="font-semibold tracking-[0.1em] uppercase mb-2">VISIT US</h5>
                            <p className="opacity-70">Hood River</p>
                            <p className="opacity-70">The Dalles</p>
                        </div>
                        <div>
                            <h5 className="font-semibold tracking-[0.1em] uppercase mb-2">CONTACT</h5>
                            <p className="opacity-70">info@cascadecoffee.com</p>
                        </div>
                    </div>

                    {/* Right Section - Newsletter Signup */}
                    <div className="flex items-center gap-3">
                        <p className="text-xs font-semibold tracking-[0.1em] uppercase whitespace-nowrap">
                            Stay up to date with
                        </p>
                        <input
                            type="email"
                            placeholder="Email address"
                            className="px-4 py-2 border border-black/20 bg-transparent text-xs focus:outline-none focus:border-black transition-colors"
                        />
                        <button className="p-2 hover:opacity-70 transition-opacity">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 8v8M8 12h8" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div className="mt-8 pt-8 border-t border-black/10 text-center">
                    <p className="text-xs opacity-50">
                        © 2024 Cascade Coffee Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
