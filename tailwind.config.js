/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1FA4EF",
        secondary: "#F7F9FB",
        pureBlack: "#000000",
        pureWhite: "#FFFFFF",
        heading: "#1A2D33",
        text: "#434343",
        repeatBg: "rgba(204, 116, 78, 0.10)",
        completedBg: "rgba(79, 204, 164, 0.10)",
        revenueBg: "#E2ECFF",
        primaryHover: "#49cfe6",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
