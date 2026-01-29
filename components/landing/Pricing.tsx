"use client";

import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section id="pricing" className="py-40 bg-white">
            <div className="max-w-6xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-3xl mb-24"
                >
                    <p className="text-sm uppercase tracking-widest text-brand mb-4">
                        Pricing
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                        Simple pricing for
                        <br /> sustainable growth
                    </h2>

                    <p className="mt-6 text-lg text-gray-600">
                        Start free and upgrade only when you’re ready. No hidden charges.
                    </p>
                </motion.div>

                {/* Plans */}
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Free */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl border border-gray-200 p-10"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">
                            Starter
                        </h3>
                        <p className="mt-2 text-gray-600">
                            For individual farmers
                        </p>

                        <div className="mt-6 text-4xl font-semibold text-gray-900">
                            Free
                        </div>

                        <ul className="mt-8 space-y-3 text-gray-600">
                            <li>✔ Basic crop insights</li>
                            <li>✔ Weather & alerts</li>
                            <li>✔ Community support</li>
                        </ul>

                        <button className="mt-10 w-full border border-brand text-brand py-3 rounded-xl font-semibold hover:bg-brand/5 transition">
                            Get Started
                        </button>
                    </motion.div>

                    {/* Paid */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-3xl bg-brand-light p-10 border border-brand/20"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">
                            Pro
                        </h3>
                        <p className="mt-2 text-gray-700">
                            For commercial & growing farms
                        </p>

                        <div className="mt-6 text-4xl font-semibold text-gray-900">
                            ₹499<span className="text-lg font-normal"> / month</span>
                        </div>

                        <ul className="mt-8 space-y-3 text-gray-700">
                            <li>✔ Advanced crop analytics</li>
                            <li>✔ Soil health monitoring</li>
                            <li>✔ Priority support</li>
                            <li>✔ Export reports</li>
                        </ul>

                        <button className="mt-10 w-full bg-brand text-white py-3 rounded-xl font-semibold hover:scale-105 transition">
                            Upgrade & Pay
                        </button>
                    </motion.div>
                </div>

                {/* Trust */}
                <p className="mt-16 text-center text-sm text-gray-500">
                    Secure payments • Cancel anytime • Local support 🇮🇳
                </p>
            </div>
        </section>
    );
}
