/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* --- DEEP PURPLE OBSIDIAN FOUNDATION (Inspired by iPhone 14 Pro Deep Purple) --- */
        bg: {
          base:    '#090511',
          surface: '#110A1E',
          raised:  '#1B102E',
          overlay: '#24153C',
        },

        /* --- LUMINOUS VIOLET & LILAC (Wallpaper Ambient Gradient) --- */
        violet: {
          dim:    'rgba(158, 92, 246, 0.12)',
          mid:    '#4A1578',
          deep:   '#5B1B8E',
          base:   '#7E32D9',
          bright: '#9E5CF6',
          light:  '#B88AF8',
          pale:   '#E4D4FE',
        },

        /* --- SUBTLE COMPLEMENTARY ACCENTS --- */
        cyan: {
          vivid:  '#38BDF8',
          soft:   '#7DD3FC',
          muted:  '#0EA5E9',
        },
        warm: {
          amber:  '#F59E0B',
          orange: '#FF6A00',
        },

        /* --- INK & TYPOGRAPHY --- */
        ink: {
          primary:   '#F6F2FD',
          secondary: '#C8BFD9',
          muted:     '#9A8EA8',
          faint:     '#5C4F70',
        },

        /* --- BORDERS (Refined Plum & Specular Lilac) --- */
        border: {
          faint:  '#1C102E',
          subtle: '#2A1645',
          soft:   '#3D2262',
          active: '#9E5CF6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        label: '0.12em',
        wide:  '0.05em',
      },
      lineHeight: {
        tight:   '1.12',
        snug:    '1.35',
        reading: '1.68',
      },
      borderRadius: {
        sm:  '6px',
        md:  '10px',
        lg:  '16px',
        xl:  '20px',
        '2xl':'26px',
        '3xl':'32px',
      },
      spacing: {
        section: '6rem',
      },
      maxWidth: {
        content: '76rem',
      },
    },
  },
  plugins: [],
}