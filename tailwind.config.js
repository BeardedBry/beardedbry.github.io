   // tailwind.config.js
   module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx,mdx}", // Make sure this is present!
    ],
    theme: {
      extend: {
        colors: {
          'naples-yellow': '#FADF57',
          'russian-violet': '#351158',
          'delft-blue': '#293D67',
          'dark-purple': '#1C072C',
          'turquoise': '#48E5D0',
        },
      },
    },
  }