/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Montserrat Alternates', 'Arial', 'sans-serif'],
        'html': ['Montserrat', 'Arial', 'sans-serif']
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              display: 'inline-block',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}