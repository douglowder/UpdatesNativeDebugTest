import { Colors } from './constants/Colors';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './constants/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        white: Colors.light.background,
        black: Colors.light.text,
        tint: Colors.light.tint,
        'shade-0': '#ffffff',
        'shade-1': '#f5f5f5',
        'shade-2': '#CDCDCD',
      },
    },
  },
  plugins: [],
};
