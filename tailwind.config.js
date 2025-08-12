/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'neo-black': '#000000',
        'neo-blue': '#0080FF',
        'neo-yellow': '#F9D16A',
        'neo-lime': '#39FF14',
        'neo-red': '#FF0000',
        'neo-white': '#FFFFFF',
      },
      fontFamily: {
        'mono': ['ui-monospace', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      boxShadow: {
        'brutal': '8px 8px 0 0 #000000',
        'brutal-sm': '4px 4px 0 0 #000000',
        'brutal-lg': '12px 12px 0 0 #000000',
      }
    },
  },
  plugins: [],
}