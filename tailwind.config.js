/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFD44B',
        background: '#F9F9F9',
        answer: '#999999',
        brown: '#927243',
        gray: '#1E1D1C',
        share: '#D9D9D9',
        title: '#544C12',
      },
      height: {
        'screen-minus-header': 'calc(100vh - 64px)',
      },
      minHeight: {
        'screen-minus-header': 'calc(100vh - 64px)',
      },
      boxShadow: {
        custom: '0px 5px 0px 5px rgba(227,227,227,1)',
      },
      fontFamily: {
        jua: ['Jua', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
