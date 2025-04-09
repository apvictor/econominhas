/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        "grotesk-light": ["SpaceGrotesk_300Light"],
        "grotesk": ["SpaceGrotesk_400Regular"],
        "grotesk-bold": ["SpaceGrotesk_700Bold"],
      },
    },
  },
  plugins: [],
}