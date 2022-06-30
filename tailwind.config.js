/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './screens/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      primary: '#4add82',
      secondary: '#181725',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      light: '#d8d8d9',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#292627',
      secondary: '#232323',
      grayLight: '#858585',
      danger: '#DB314B',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
