"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
    const { scrollY } = useScroll();

    // Navbar background
    const background = useTransform(
        scrollY,
        [0, 80],
        ["rgba(255,255,255,0)", "rgba(255,255,255,0.1)"]
    );

    const border = useTransform(
        scrollY,
        [0, 80],
        ["rgba(0,0,0,0)", "rgba(46,125,50,0.15)"]
    );

    // Text color (WHITE → DARK)
    const textColor = useTransform(
        scrollY,
        [0, 80],
        ["#e8f5e9", "rgba(31,41,55,1)"]
    );

    return (
        <header className="fixed top-0 z-50 w-full">
            <motion.div
                style={{
                    background,
                    borderBottom: border,
                    backdropFilter: "blur(10px)",
                }}
            >
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    {/* Brand */}
                    <motion.div
                        style={{ color: textColor }} // keeps scroll logic intact (for filters if needed)
                        className="flex items-center gap-2"
                    >
                        <Image
                            src="/logo.png" // put logo in /public
                            alt="Mahsanagri logo"
                            width={80}
                            height={36}
                            priority
                            className="object-contain"
                        />
                    </motion.div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
                        {[
                            { href: "#about", label: "About" },
                            { href: "#features", label: "Solutions" },
                            { href: "#cta", label: "Contact" },
                        ].map((item) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                style={{ color: textColor }}
                                className="relative group transition"
                            >
                                {item.label}

                                {/* underline */}
                                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand transition-all duration-300 group-hover:w-full" />
                            </motion.a>
                        ))}
                    </nav>

                    {/* CTA */}
                    <motion.a
                        href="#pricing"
                        style={{
                            backgroundColor: useTransform(
                                scrollY,
                                [0, 80],
                                ["rgba(102,187,106,0.9)", "rgba(46,125,50,1)"]
                            ),
                            color: "#fff",
                        }}
                        className="hidden md:block px-6 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition"
                    >
                        Get Started
                    </motion.a>
                </div>
            </motion.div>
        </header>
    );
}
