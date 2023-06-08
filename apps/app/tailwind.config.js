/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}', './App.tsx'],
  theme: {
    extend: {
      fontFamily: {
        'unbounded-semibold': ['Unbounded_600SemiBold', 'sans-serif'],
        'unbounded-bold': ['Unbounded_700Bold', 'sans-serif'],
        'inter-regular': ['Inter_400Regular', 'sans-serif'],
        'inter-medium': ['Inter_500Medium', 'sans-serif'],
        'inter-semibold': ['Inter_600SemiBold', 'sans-serif'],
        'inter-bold': ['Inter_700Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
