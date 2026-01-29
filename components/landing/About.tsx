"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-36 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm uppercase tracking-widest text-brand mb-6">
                        About Mahsanagri
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        Built for farmers.
                        <br />
                        Guided by nature.
                    </h2>

                    <p className="mt-8 text-lg text-gray-600 max-w-xl">
                        Mahsanagri helps farmers grow healthier crops and stronger livelihoods by
                        combining practical agricultural knowledge with modern technology.
                        Everything we build respects the land, the seasons, and the people who
                        depend on them.
                    </p>

                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 1.03 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="rounded-3xl overflow-hidden"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1400&q=80"
                        alt="Plant growth"
                        width={600}
                        height={500}
                        className="object-cover"
                    />
                </motion.div>
            </div>
        </section>
    );
}
