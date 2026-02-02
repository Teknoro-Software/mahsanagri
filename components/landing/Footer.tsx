import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#f3f7f1]">
            <div className="max-w-6xl mx-auto px-6 py-10">
                {/* Top section */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
                    
                    <div>
                        <Image
                            src="/logo.png"
                            alt="Mahsanagri logo"
                            width={140}
                            height={36}
                            priority
                            className="object-contain"
                        />
                        <p className="mt-3 text-sm text-black/70 max-w-sm leading-relaxed">
                            Practical technology that helps farmers grow healthier crops,
                            protect the land, and build sustainable livelihoods.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-sm mt-15">
                        <div>
                            <p className="text-black/60">Phone</p>
                            <p className="mt-2 font-medium text-black">
                                +91 8848911369
                            </p>
                        </div>

                        <div>
                            <p className="text-black/60">Email</p>
                            <p className="mt-2 font-medium text-black">
                                mahsanagri@gmail.com
                            </p>
                        </div>

                        <div>
                            <p className="text-black/60">Location</p>
                            <p className="mt-2 font-medium text-black">
                                Kerala, India
                            </p>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-black/10" />

                {/* Bottom */}
                <div className="text-center">
                    <p className="text-sm text-black/70">
                        © {new Date().getFullYear()}{" "}
                        <span className="font-medium text-black">Mahsanagri</span>.
                        All rights reserved.
                    </p>

                    <p className="mt-2 text-xs text-black/50">
                        Growing sustainable agriculture, together 🌱
                    </p>
                </div>
            </div>
        </footer>
    );
}
