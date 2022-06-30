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
      primary: '#1e0f2f',
      secondary: '#663ff5',
      tertiary: '#312b46',
    }),
    borderColor: (theme) => ({
      ...theme('colors'),
      light: '#d8d8d9',
    }),
    textColor: (theme) => ({
      ...theme('colors'),
      primary: '#1e0f2f',
      secondary: '#232323',
      grayLight: '#858585',
      textDanger: '#DB314B',
    }),
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
