/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // manchas de luz (gradientes) vagando
        blob: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(10%, -5%) scale(1.05)" },
          "66%": { transform: "translate(-8%, 6%) scale(0.98)" },
        },
        // grid deslizando
        gridmove: {
          "0%": { backgroundPosition: "0 0, 0 0" },
          "100%": { backgroundPosition: "100px 100px, -100px -100px" },
        },
        // partículas flutuando
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
          "100%": { transform: "translateY(0)" },
        },
        // brilho suave
        pulseGlow: {
          "0%, 100%": { opacity: 0.35, filter: "blur(0px)" },
          "50%": { opacity: 0.6, filter: "blur(1px)" },
        },
      },
      animation: {
        blob: "blob 18s ease-in-out infinite",
        gridmove: "gridmove 12s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 4s ease-in-out infinite",
      },
      backgroundImage: {
        // duas diagonais finas cruzadas
        "tech-grid":
          "repeating-linear-gradient(45deg, rgba(16,185,129,0.06) 0 1px, transparent 1px 20px)," +
          "repeating-linear-gradient(-45deg, rgba(16,185,129,0.06) 0 1px, transparent 1px 20px)",
      },
    },
  },
  plugins: [],
}
