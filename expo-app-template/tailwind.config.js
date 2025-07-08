/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.tsx', './components/**/*.{js,jsx,ts,tsx}'], // Put other paths here that contain Tailwind classes
  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};
