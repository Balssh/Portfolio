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
        extend: {},
    },
    plugins: [],
};
