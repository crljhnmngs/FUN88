/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    ntent: [],
    theme: {
        extend: {
            width: {
                maxWidth: '390px',
            },
            height: {
                maxHeight: '866px',
            },
            colors: {
                primary: '#00A6FF',
                base: '#888888',
            },
        },
    },
    plugins: [],
};
