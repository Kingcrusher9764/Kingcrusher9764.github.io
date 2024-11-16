import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "var(--background)",
                    green: "var(--background-green)",
                    orange: "var(--background-orange)",
                },
                foreground: {
                    DEFAULT: "var(--foreground)",
                    green: "var(--foreground-green)",
                    orange: "var(--foreground-orange)",
                },
            },
            keyframes: {
                tada: {
                    "0%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                    "10%, 20%": {
                        transform: "scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)",
                    },
                    "30%, 50%, 70%, 90%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)",
                    },
                    "40%, 60%, 80%": {
                        transform: "scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)",
                    },
                    "100%": {
                        transform: "scale3d(1, 1, 1)",
                    },
                },
            },
            animation: {
                tada: 'tada 1s ease-in-out',
            }
        },
    },
    plugins: [],
} satisfies Config;
