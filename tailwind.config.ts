import type { Config } from "tailwindcss";

const config: Config = {
    content: ["./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    light: "#E8F5E9",
                    DEFAULT: "#2E7D32",
                    dark: "#1B5E20",
                    accent: "#66BB6A",
                },
            },
        },
    },
    plugins: [],
};

export default config;
