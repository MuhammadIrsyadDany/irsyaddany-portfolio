/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* --- ALTER THEME OBSIDIAN & TACTICAL HUD COLORS --- */
        bg: {
          base:    '#07080A', // Alter deep obsidian black
          surface: '#0E1013', // Card surface
          raised:  '#15181C', // Elevated container
          overlay: '#1B1E24', // Modal / drawer overlay
        },

        /* --- ALTER TACTICAL ACCENTS --- */
        signal: {
          orange: '#FF5A1F', // Signature Alter Orange
          glow:   'rgba(255, 90, 31, 0.25)',
          blue:   '#31A8FF', // Tactical Cyan/Blue
          cyan:   '#00F0FF',
        },

        /* --- LUMINOUS VIOLET & LILAC (Heritage Accent) --- */
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
          orange: '#FF5A1F',
        },

        /* --- INK & TYPOGRAPHY --- */
        ink: {
          primary:   '#EDEDF0', // Alter primary crisp text
          secondary: '#B5B5BE', // Readable secondary text
          muted:     '#757582', // Muted tactical labels
          faint:     '#43434E', // Faint watermark
        },

        /* --- BORDERS & TACTICAL GRID --- */
        border: {
          faint:  'rgba(237, 237, 240, 0.06)',
          subtle: 'rgba(237, 237, 240, 0.12)',
          soft:   'rgba(237, 237, 240, 0.18)',
          active: '#FF5A1F',
          violet: '#9E5CF6',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['"Big Shoulders Display"', '"Big Shoulders Text"', 'Impact', 'sans-serif'],
        alter: ['"Big Shoulders Text"', '"Big Shoulders Display"', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
        spidey: ['"Bebas Neue"', '"Big Shoulders Display"', 'sans-serif'],
        orbitron: ['"Orbitron"', 'sans-serif'],
        syne: ['"Syne"', 'sans-serif'],
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