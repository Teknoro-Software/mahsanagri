"use client";

import CountUp from "react-countup";

export default function Stats() {
    return (
        <section className="py-32 bg-white">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-16">
                {[
                    ["10000+", "Farmers empowered"],
                    ["50000+", "Acres managed"],
                    ["25%", "Yield improvement"],
                    ["100%", "Sustainable focus"],
                ].map(([value, label]) => (
                    <div key={label}>
                        <h3 className="text-3xl font-semibold text-brand">
                            <CountUp
                                end={parseInt(value)}
                                suffix={value.replace(/[0-9]/g, "")}
                                duration={2}
                                enableScrollSpy
                            />
                        </h3>
                        <p className="mt-2 text-gray-600">{label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
