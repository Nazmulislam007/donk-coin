/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                poppin: ['Poppins', 'sans-serif'],
            },
            colors: {
                pink100: 'hsl(22, 24%, 93%)',
                pink900: 'hsl(18, 11%, 55%)',
                orange500: 'hsl(22, 100%, 65%)',
                orange900: 'hsl(41, 80%, 47%)',
            },
        },
    },
    plugins: [],
};
