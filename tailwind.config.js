/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html", "./js/**/*.js"],
    theme: {
        extend: {
            colors: {
                superteam: {
                    purple: "#5522e0",
                    yellow: "#f4a60b",
                    "purple-light": "#bcb3ff",
                    "yellow-light": "#ffd9a1",
                },
                brazil: {
                    yellow: "#ffd23f",
                    offwhite: "#f7eacb",
                    "green-dark": "#2f6b3f",
                    "green-bright": "#008c4c",
                    dark: "#1b231d",
                },
                solana: {
                    green: "#14F195",
                    purple: "#9945FF",
                },
                // Derived theme colors
                primary: "#5522e0",
                "primary-light": "#bcb3ff",
                "bg-primary": "#0A0A0F",
                "bg-secondary": "#1b231d",
                "bg-card": "#1A1A2E",
                "text-secondary": "#f7eacb",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Archivo Semi Expanded"', '"Archivo"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #5522e0 0%, #9945FF 100%)',
                'gradient-hero': 'linear-gradient(180deg, #0A0A0F 0%, #1b231d 100%)',
                'gradient-solana': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
                'gradient-brazil': 'linear-gradient(135deg, #2f6b3f 0%, #008c4c 100%)',
            }
        },
    },
    plugins: [],
}
