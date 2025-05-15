
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				display: ['Space Grotesk', 'sans-serif'],
				mono: ['Fira Code', 'monospace'],
				hand: ['Caveat', 'cursive'],
				gaming: ['Orbitron', 'sans-serif'],
			},
			colors: {
				border: "hsl(var(--border))",
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				background: "hsl(var(--background))",
				foreground: "hsl(var(--foreground))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))"
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))"
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
					blue: "#33C3F0"
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))"
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))"
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))"
				},
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))"
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				spotlight: {
					'0%': { opacity: '0', transform: 'translate(-72%, -62%) scale(0.5)' },
					'100%': { opacity: '1', transform: 'translate(-50%,-40%) scale(1)' }
				},
				shimmer: {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				'infinite-scroll': {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(-100%)' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 5px 2px rgba(66, 240, 233, 0.4)' },
					'50%': { boxShadow: '0 0 20px 5px rgba(66, 240, 233, 0.7)' }
				},
				'neon-blink': {
					'0%, 18%, 22%, 25%, 53%, 57%, 100%': { 
						textShadow: '0 0 4px #fff, 0 0 10px #42f0e9, 0 0 15px #42f0e9'
					},
					'20%, 24%, 55%': { 
						textShadow: 'none'
					}
				},
				'hologram': {
					'0%': { opacity: '0.3' },
					'50%': { opacity: '0.8' },
					'100%': { opacity: '0.3' }
				},
				'radar-spin': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'spotlight': 'spotlight 2s ease forwards',
				'shimmer': 'shimmer 8s infinite',
				'infinite-scroll': 'infinite-scroll 60s linear infinite',
				'glow-pulse': 'glow-pulse 1.5s infinite',
				'neon-blink': 'neon-blink 3.5s infinite',
				'hologram': 'hologram 3s ease-in-out infinite',
				'radar-spin': 'radar-spin 3s linear infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from var(--angle), var(--tw-gradient-stops))',
				'cyber-gradient': 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
				'matrix-gradient': 'linear-gradient(180deg, rgba(66, 240, 233, 0.2), rgba(66, 240, 233, 0))',
				'neon-grid': 'linear-gradient(90deg, rgba(66, 240, 233, 0.15) 1px, transparent 1px), linear-gradient(rgba(66, 240, 233, 0.15) 1px, transparent 1px)',
				'hologram-grid': 'radial-gradient(circle, rgba(66, 240, 233, 0.3) 1px, transparent 1px)',
				'shimmer-gradient': 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(66, 240, 233, 0.2) 25%, rgba(66, 240, 233, 0.2) 50%, rgba(255,255,255,0) 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
