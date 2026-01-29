export default function Footer() {
    return (
        <footer className="bg-[#0f2f1f]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Mahsanagri
                        </h3>
                        <p className="mt-3 text-sm text-white/70 max-w-sm leading-relaxed">
                            Practical technology that helps farmers grow healthier crops,
                            protect the land, and build sustainable livelihoods.
                        </p>
                    </div>

                    {/* Contact info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm">
                        <div>
                            <p className="text-white/60">Phone</p>
                            <p className="mt-2 font-medium text-white">
                                +91 9XXXXXXXXX
                            </p>
                        </div>

                        <div>
                            <p className="text-white/60">Email</p>
                            <p className="mt-2 font-medium text-white">
                                contact@mahsanagri.com
                            </p>
                        </div>

                        <div>
                            <p className="text-white/60">Location</p>
                            <p className="mt-2 font-medium text-white">
                                Kerala, India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-white/10" />

                {/* Bottom */}
                <div className="text-center">
                    <p className="text-sm text-white/70">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium text-white">Mahsanagri</span>.
                        All rights reserved.
                    </p>

                    <p className="mt-2 text-xs text-white/50">
                        Growing sustainable agriculture, together 🌱
                    </p>
                </div>
            </div>
        </footer>
    );
}
