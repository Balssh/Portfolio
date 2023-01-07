/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./app/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            Source: ["Source Code Pro", "monospace"],
        },
        extend: {
            colors: {
                dark: {
                    DEFAULT: "#010101",
                    100: "#0a0b0e",
                    200: "#16181d",
                    300: "#16181d",
                    500: "#0f1115",
                    700: "#202125",
                },
            },
        },
    },
    darkMode: "class",
    plugins: [],
};
