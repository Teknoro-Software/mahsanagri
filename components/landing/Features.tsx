"use client";

import { motion } from "framer-motion";

const features = [
    {
        title: "Smarter cultivation decisions",
        desc: "Know when to sow, irrigate, and harvest with insights built around real crop cycles and local conditions.",
    },
    {
        title: "Sustainable by default",
        desc: "Improve soil health, reduce unnecessary inputs, and grow in a way that protects future seasons.",
    },
    {
        title: "Built for farmers, not screens",
        desc: "Simple tools designed around everyday farming workflows — easy to use, even with limited connectivity.",
    },
];

export default function Features() {
    return (
        <section
            id="features"
            className="relative bg-brand-light pt-40 pb-36"
        >
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-24"
                >
                    <p className="text-sm uppercase tracking-widest text-brand mb-4">
                        How Mahsanagri Helps
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
                        Practical technology
                        <br />
                        for sustainable farming
                    </h2>

                    <p className="mt-6 text-lg text-gray-700">
                        Everything we build focuses on real outcomes in the field —
                        healthier crops, lower risk, and better yields over time.
                    </p>
                </motion.div>

                {/* Feature rows */}
                <div className="space-y-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-3xl p-10 md:p-14 shadow-sm"
                        >
                            <div className="grid md:grid-cols-5 gap-8 items-start">
                                {/* Index */}
                                <div className="md:col-span-1">
                                    <span className="text-3xl font-semibold text-brand">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="md:col-span-4">
                                    <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
                                        {feature.title}
                                    </h3>

                                    <p className="mt-4 text-lg text-gray-700 max-w-2xl leading-relaxed">
                                        {feature.desc}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
