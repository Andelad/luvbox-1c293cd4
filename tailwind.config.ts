import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
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
				'serif': ['EB Garamond', 'serif'],
				'sans': ['Source Sans 3', 'sans-serif'],
				'mono': ['Spline Sans Mono', 'monospace'],
			},
			fontSize: {
				// App Typography Scale
				'app-xs': ['var(--app-text-xs)', { lineHeight: 'var(--app-leading-xs)' }],
				'app-sm': ['var(--app-text-sm)', { lineHeight: 'var(--app-leading-sm)' }],
				'app-base': ['var(--app-text-base)', { lineHeight: 'var(--app-leading-base)' }],
				'app-lg': ['var(--app-text-lg)', { lineHeight: 'var(--app-leading-lg)' }],
				'app-xl': ['var(--app-text-xl)', { lineHeight: 'var(--app-leading-xl)' }],
				'app-2xl': ['var(--app-text-2xl)', { lineHeight: 'var(--app-leading-2xl)' }],
				'app-3xl': ['var(--app-text-3xl)', { lineHeight: 'var(--app-leading-3xl)' }],

				// Website Typography Scale (larger)
				'web-xs': ['var(--web-text-xs)', { lineHeight: 'var(--web-leading-xs)' }],
				'web-sm': ['var(--web-text-sm)', { lineHeight: 'var(--web-leading-sm)' }],
				'web-base': ['var(--web-text-base)', { lineHeight: 'var(--web-leading-base)' }],
				'web-lg': ['var(--web-text-lg)', { lineHeight: 'var(--web-leading-lg)' }],
				'web-xl': ['var(--web-text-xl)', { lineHeight: 'var(--web-leading-xl)' }],
				'web-2xl': ['var(--web-text-2xl)', { lineHeight: 'var(--web-leading-2xl)' }],
				'web-3xl': ['var(--web-text-3xl)', { lineHeight: 'var(--web-leading-3xl)' }],
				'web-4xl': ['var(--web-text-4xl)', { lineHeight: 'var(--web-leading-4xl)' }],

				// Monospace Typography Scale (90% of equivalent sans-serif sizes)
				'app-mono-xs': ['var(--app-mono-xs)', { lineHeight: 'var(--app-leading-xs)' }],
				'app-mono-sm': ['var(--app-mono-sm)', { lineHeight: 'var(--app-leading-sm)' }],
				'app-mono-base': ['var(--app-mono-base)', { lineHeight: 'var(--app-leading-base)' }],
				'app-mono-lg': ['var(--app-mono-lg)', { lineHeight: 'var(--app-leading-lg)' }],
				'app-mono-xl': ['var(--app-mono-xl)', { lineHeight: 'var(--app-leading-xl)' }],
				'app-mono-2xl': ['var(--app-mono-2xl)', { lineHeight: 'var(--app-leading-2xl)' }],
				'app-mono-3xl': ['var(--app-mono-3xl)', { lineHeight: 'var(--app-leading-3xl)' }],

				'web-mono-xs': ['var(--web-mono-xs)', { lineHeight: 'var(--web-leading-xs)' }],
				'web-mono-sm': ['var(--web-mono-sm)', { lineHeight: 'var(--web-leading-sm)' }],
				'web-mono-base': ['var(--web-mono-base)', { lineHeight: 'var(--web-leading-base)' }],
				'web-mono-lg': ['var(--web-mono-lg)', { lineHeight: 'var(--web-leading-lg)' }],
				'web-mono-xl': ['var(--web-mono-xl)', { lineHeight: 'var(--web-leading-xl)' }],
				'web-mono-2xl': ['var(--web-mono-2xl)', { lineHeight: 'var(--web-leading-2xl)' }],
				'web-mono-3xl': ['var(--web-mono-3xl)', { lineHeight: 'var(--web-leading-3xl)' }],
				'web-mono-4xl': ['var(--web-mono-4xl)', { lineHeight: 'var(--web-leading-4xl)' }],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
