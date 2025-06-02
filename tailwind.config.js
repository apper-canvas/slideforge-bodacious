/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          light: '#818CF8',
          dark: '#3730A3'
        },
        secondary: {
          DEFAULT: '#EC4899',
          light: '#F472B6',
          dark: '#BE185D'
        },
        accent: '#F59E0B',
        surface: {
          50: '#f8fafc',    // Lightest
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',  // Added
          500: '#64748b',  // Added
          600: '#475569',  // Added
          700: '#334155',  // Added
          800: '#1e293b',  // Added
          900: '#0f172a'    // Darkest
        },
        brand: {
          forge: '#FF6B35',
          studio: '#2D4A87',
          creative: '#7B68EE'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        heading: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'neu-light': '5px 5px 15px #d1d9e6, -5px -5px 15px #ffffff',
        'neu-dark': '5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.05)',
        'slide': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'editor': 'inset 0 2px 4px rgba(0, 0, 0, 0.06)'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      },
      animation: {
        'slide-in': 'slideIn 0.3s ease-out',
        'fade-up': 'fadeUp 0.4s ease-out',
        'pulse-glow': 'pulseGlow 2s infinite',
        'float': 'float 3s ease-in-out infinite'
      },
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        fadeUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(79, 70, 229, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(79, 70, 229, 0.8)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
}
      },
      borderColor: {
        'border': 'hsl(214.3 31.8% 91.4%)',
        'input': 'hsl(214.3 31.8% 91.4%)',
        'ring': 'hsl(222.2 84% 4.9%)',
        'chart-1': 'hsl(12 76% 61%)',
        'chart-2': 'hsl(173 58% 39%)',
        'chart-3': 'hsl(197 37% 24%)',
        'chart-4': 'hsl(43 74% 66%)',
        'chart-5': 'hsl(27 87% 67%)',
      },
      backgroundColor: {
        'background': 'hsl(0 0% 100%)',
        'foreground': 'hsl(222.2 84% 4.9%)',
        'card': 'hsl(0 0% 100%)',
        'card-foreground': 'hsl(222.2 84% 4.9%)',
        'popover': 'hsl(0 0% 100%)',
        'popover-foreground': 'hsl(222.2 84% 4.9%)',
        'muted': 'hsl(210 40% 96%)',
        'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
        'accent': 'hsl(210 40% 96%)',
        'accent-foreground': 'hsl(222.2 84% 4.9%)',
      },
      textColor: {
        'foreground': 'hsl(222.2 84% 4.9%)',
        'card-foreground': 'hsl(222.2 84% 4.9%)',
        'popover-foreground': 'hsl(222.2 84% 4.9%)',
        'primary-foreground': 'hsl(210 40% 98%)',
        'secondary-foreground': 'hsl(222.2 84% 4.9%)',
        'muted-foreground': 'hsl(215.4 16.3% 46.9%)',
        'accent-foreground': 'hsl(222.2 84% 4.9%)',
        'destructive-foreground': 'hsl(210 40% 98%)',
      },
      colors: {
        'muted': {
          DEFAULT: 'hsl(210 40% 96%)',
          foreground: 'hsl(215.4 16.3% 46.9%)'
        },
        'accent': {
          DEFAULT: 'hsl(210 40% 96%)',
          foreground: 'hsl(222.2 84% 4.9%)'
        },
        'destructive': {
          DEFAULT: 'hsl(0 84.2% 60.2%)',
          foreground: 'hsl(210 40% 98%)'
        }
      }
    }
  },
  plugins: [],
  darkMode: 'class',
}