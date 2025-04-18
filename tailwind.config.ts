import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideRight: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideRight: 'slideRight 0.4s ease-out forwards',
      },
  		colors: {
  			'radaro-red': 'hsl(var(--radaro-red))',
  			'radaro-red-hover': 'hsl(var(--radaro-red-hover))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      fontFamily: {
        heading: ["Montserrat", "Arial", "sans-serif"],
      },
	  lineHeight: {
		tighter: '1.05',
	  },
      spacing: {
        '0': '0px',
        '1': '4px',     // Tiny
        '2': '8px',     // Extra Small
        '3': '12px',    // Small
        '4': '16px',    // Base
        '5': '20px',    // Medium
        '6': '24px',    // Medium-Large
        '8': '32px',    // Large
        '10': '40px',   // Extra Large
        '12': '48px',   // 2x Base
        '16': '64px',   // 4x Base
        '20': '80px',   // 5x Base
        '24': '96px',   // 6x Base  
        '32': '128px',  // 8x Base
        '40': '160px',  // 10x Base
        '48': '192px',  // 12x Base
        '56': '224px',  // 14x Base
        '64': '256px',  // 16x Base
        // Add section spacing values
        'section': '5rem',      // 80px - default section spacing
        'section-sm': '2.5rem', // 40px - smaller section spacing
        'section-lg': '7.5rem', // 120px - larger section spacing 
      },
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
