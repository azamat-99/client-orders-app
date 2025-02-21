module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: '#F2B027',        // Main color
        shade: '#FFF7E5',       // Shade
        text: '#272727',        // Text color
        white: '#FFFFFF',       // White
        stroke: '#E7E7EC',      // Stroke
        gray1: '#F7F7F7',       // Gray 1
        gray2: '#CDCDCD',       // Gray 2
        gray3: '#8C8C8C',       // Gray 3
        overlay: '#000000',     // Overlay
        successBg: '#56CE56',   // Success background (20%)
        errorBg: '#FB7185',     // Error background (20%)
        warningBg: '#FACC15',   // Warning background (20%)
        checkingBg: '#567EFE',  // Checking background (20%)
        success: '#56CE56',     // Success
        error: '#F04438',       // Error
        warning: '#F3A852',     // Warning
        checking: '#567EFE',    // Checking
      },
      boxShadow: {
        shadow1: '0px 4px 12px rgba(0, 0, 0, 0.1)',  // Shadow 1
        shadow2: '0px 8px 24px rgba(0, 0, 0, 0.2)',  // Shadow 2
      },
    },
  },
  plugins: [
  ],
}
