/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: 'class',
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppin: ['Poppins', 'sans-serif'],
            },
            colors: {
                'primary-100': 'hsl(22, 24%, 93%)',
                'primary-contrast-100': 'hsl(0, 6%, 43%)', // text color for lite background
                'primary-hover-100': 'hsl(24deg 18% 89%)',

                'accent-100': 'hsl(22deg 100% 64% / 71%)',
                'accent-400': 'hsl(22, 100%, 65%)',
                'accent-hover-400': 'hsl(22, 100%, 61%)',

                dark300: 'hsl(235, 20%, 23%)',
                dark400: 'hsl(236, 19%, 15%)',
                dark500: 'hsl(240, 19%, 12%)',
                dark700: 'hsl(234, 18%, 34%)',
                dark900: '#9B9BB0',
                darkHover: 'hsl(234, 18%, 34%)',
                darkText: 'hsl(231, 50%, 92%)',

                black500: 'hsl(228, 9%, 11%)',
            },
        },
    },
    plugins: [],
};
