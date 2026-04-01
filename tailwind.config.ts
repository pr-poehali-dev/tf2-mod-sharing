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
				// TF2-style fonts
				tf2: ['Teko', 'Impact', 'Arial Narrow', 'sans-serif'],
				tf2body: ['Oswald', 'Arial Narrow', 'sans-serif'],
				// keep old fonts as fallback
				cormorant: ['Teko', 'Impact', 'sans-serif'],
				golos: ['Oswald', 'Arial Narrow', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				// TF2 colors
				tf2: {
					red: 'hsl(var(--tf2-red))',
					orange: 'hsl(var(--tf2-orange))',
					yellow: 'hsl(var(--tf2-yellow))',
					metal: 'hsl(var(--tf2-metal))',
					'metal-light': 'hsl(var(--tf2-metal-light))',
					'metal-dark': 'hsl(var(--tf2-metal-dark))',
					cream: 'hsl(var(--tf2-cream))',
					dark: 'hsl(var(--tf2-dark))',
					rust: 'hsl(var(--tf2-rust))',
					blu: 'hsl(var(--tf2-blu))',
					'blu-dark': 'hsl(var(--tf2-blu-dark))',
				},
				// keep gold as alias for tf2 orange/yellow
				gold: {
					DEFAULT: 'hsl(var(--tf2-orange))',
					light: 'hsl(var(--tf2-yellow))',
					muted: 'hsl(var(--tf2-rust))',
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'var(--radius)',
				sm: 'var(--radius)'
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
				'fade-in': {
					from: { opacity: '0', transform: 'translateY(16px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-in-left': {
					from: { opacity: '0', transform: 'translateX(-24px)' },
					to: { opacity: '1', transform: 'translateX(0)' }
				},
				'line-expand': {
					from: { width: '0%' },
					to: { width: '100%' }
				},
				// TF2 shockwave / slam
				'slam': {
					'0%': { transform: 'scale(1.08)', opacity: '0' },
					'60%': { transform: 'scale(0.97)' },
					'100%': { transform: 'scale(1)', opacity: '1' },
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.85' },
					'75%': { opacity: '0.92' },
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-6px)' },
				},
				'grain': {
					'0%, 100%': { transform: 'translate(0,0)' },
					'10%': { transform: 'translate(-2%,-3%)' },
					'20%': { transform: 'translate(3%,2%)' },
					'30%': { transform: 'translate(-1%,4%)' },
					'40%': { transform: 'translate(2%,-1%)' },
					'50%': { transform: 'translate(-3%,2%)' },
					'60%': { transform: 'translate(1%,-4%)' },
					'70%': { transform: 'translate(-2%,3%)' },
					'80%': { transform: 'translate(3%,-2%)' },
					'90%': { transform: 'translate(-1%,1%)' },
				},
				'pulse-red': {
					'0%, 100%': { boxShadow: '0 0 12px hsl(18, 90%, 52%)' },
					'50%': { boxShadow: '0 0 32px hsl(18, 90%, 52%), 0 0 60px hsl(18, 80%, 40%)' },
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% center' },
					'100%': { backgroundPosition: '200% center' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
				'fade-in-left': 'fade-in-left 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
				'line-expand': 'line-expand 1s cubic-bezier(0.16,1,0.3,1) forwards',
				'slam': 'slam 0.5s cubic-bezier(0.16,1,0.3,1) forwards',
				'flicker': 'flicker 3s ease-in-out infinite',
				'float': 'float 4s ease-in-out infinite',
				'grain': 'grain 0.8s steps(1) infinite',
				'pulse-red': 'pulse-red 2s ease-in-out infinite',
				'shimmer': 'shimmer 3s linear infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
