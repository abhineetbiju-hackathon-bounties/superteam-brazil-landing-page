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
                    "purple-dark": "#3b1899",
                },
                brazil: {
                    yellow: "#ffd23f",
                    "yellow-deep": "#d4920a",
                    offwhite: "#f7eacb",
                    "green-dark": "#2f6b3f",
                    "green-bright": "#008c4c",
                    "green-forest": "#1a4d2e",
                    blue: "#002776",
                    "blue-light": "#1a3f7a",
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
                "bg-card-hover": "#252545",
                "text-secondary": "#f7eacb",
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['"Archivo"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #5522e0 0%, #9945FF 100%)',
                'gradient-hero': 'linear-gradient(180deg, #0A0A0F 0%, #1b231d 100%)',
                'gradient-solana': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
                'gradient-brazil': 'linear-gradient(135deg, #2f6b3f 0%, #008c4c 100%)',
                'gradient-brazil-flag': 'linear-gradient(135deg, #2f6b3f 0%, #ffd23f 50%, #002776 100%)',
                'gradient-tropical': 'linear-gradient(135deg, rgba(47,107,63,0.8) 0%, rgba(0,140,76,0.6) 100%)',
                'gradient-sunset': 'linear-gradient(135deg, #f4a60b 0%, #ff6b35 100%)',
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 10s ease-in-out infinite',
                'pulse-soft': 'pulse-soft 4s ease-in-out infinite',
                'shimmer': 'shimmer 8s linear infinite',
                'spin-slow': 'spin 60s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'pulse-soft': {
                    '0%, 100%': { opacity: '0.6' },
                    '50%': { opacity: '1' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% center' },
                    '100%': { backgroundPosition: '200% center' },
                },
            },
            boxShadow: {
                'glow-purple': '0 0 30px rgba(85, 34, 224, 0.4)',
                'glow-yellow': '0 0 30px rgba(244, 166, 11, 0.4)',
                'glow-green': '0 0 30px rgba(47, 107, 63, 0.3)',
                'card': '0 8px 32px rgba(0, 0, 0, 0.2)',
                'card-hover': '0 16px 48px rgba(0, 0, 0, 0.3)',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
            }
        },
    },
    plugins: [],
}
