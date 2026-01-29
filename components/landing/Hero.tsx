"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[100vh] overflow-hidden">
            {/* Background (continuous animation) */}
            <motion.div
                className="absolute inset-0"
                animate={{
                    scale: [1.05, 1.1, 1.05],
                    y: [0, -12, 0],
                }}
                transition={{
                    duration: 24,
                    ease: "easeInOut",
                    repeat: Infinity,
                }}
            >
                <Image
                    src="/images/hero.jpg"
                    alt="Green agriculture field"
                    fill
                    className="object-cover"
                    priority
                />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/50 to-black/70" />

            {/* Content */}
            <div className="relative z-10 flex h-full items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-center max-w-3xl"
                >
                    <span className="inline-block mb-6 px-4 py-1 rounded-full bg-white/10 text-brand-accent text-sm tracking-widest uppercase">
                        Sustainable Agriculture
                    </span>

                    <h1 className="text-5xl md:text-7xl font-semibold text-white leading-tight">
                        Growing the Future
                        <br /> of Agriculture
                    </h1>

                    <p className="mt-8 text-lg text-gray-200 leading-relaxed">
                        Mahsanagri blends technology and nature to create sustainable,
                        scalable agricultural growth.
                    </p>

                    <div className="mt-12 flex justify-center gap-6">
                        <button className="bg-brand-accent text-brand-dark px-10 py-4 rounded-xl font-semibold hover:scale-105 transition">
                            Get Started
                        </button>
                        <button className="text-white underline underline-offset-8 hover:text-brand-accent transition">
                            Learn More
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
