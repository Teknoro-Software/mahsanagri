"use client";

import { motion } from "framer-motion";

export default function Section({
    children,
    delay = 0,
}: {
    children: React.ReactNode;
    delay?: number;
}) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1], // premium easing
                delay,
            }}
        >
            {children}
        </motion.section>
    );
}
