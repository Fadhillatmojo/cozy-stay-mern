/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				brand:{
					primary: "#7267EB",
					dark: "#171717",
					secondary: "#2B7DFF"
				},
				white: {
					secondaryWhite: "#F7F8F9",
					secondaryPurple: "#DFDEED",
					primaryGrey: "#B3B3B3"
				}
			}
		},
  },
  plugins: [],
}

