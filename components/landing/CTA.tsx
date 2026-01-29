"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="py-36 bg-brand-light bg-texture">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto px-6 text-center"
            >
                <p className="text-sm uppercase tracking-widest text-brand mb-4">
                    Get Started
                </p>

                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                    Grow more with less risk.
                </h2>

                <p className="mt-6 text-lg text-gray-700">
                    Join thousands of farmers using Mahsanagri to improve yield,
                    reduce waste, and farm more sustainably — without complexity.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-brand text-white px-12 py-4 rounded-xl font-semibold hover:scale-105 transition">
                        Start Free
                    </button>

                    <button className="border border-brand text-brand px-12 py-4 rounded-xl font-semibold hover:bg-brand/10 transition">
                        Talk to Our Team
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
