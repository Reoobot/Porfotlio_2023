/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
       socialBg:'#4DC55F',
       socialBlue:'#218DFA',
       prymary:'#160718'
      },
    },
  },
  plugins: [],
}
