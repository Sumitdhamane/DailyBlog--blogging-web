// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.js", // Ensure this line is included
  ],
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
