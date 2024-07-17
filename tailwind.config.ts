/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'embed-code':['Lora', 'serif']
      },
      colors:{
      text:{
        light: '#f1f5f9',
        default: '#000000',
        dark: '#374151'
      },
      background:{
        dark: '#00000',
        light: '#ffffff',
        secondary: 'bg-gray-700'
      }
      
      
    }
    },
    
    
  },
  plugins: [],
}