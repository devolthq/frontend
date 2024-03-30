module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media",
  theme: {
    extend: {
      fontFamily: {
        display: ["Manrope, PT Mono, monospace"],
        body: ["Manrope, Inter, sans-serif"],
      },
    },
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
  daisyui: {
    styled: true,
    // TODO: Theme needs works
    themes: [
      {
        solana: {
          fontFamily: {
            display: ["Manrope, PT Mono, monospace"],
            body: ["Manrope, Inter, sans-serif"],
          },
          primary: "#3AFF4E" /* Primary color */,
          "primary-focus": "#3AFF4E" /* decidir */,
          "primary-content":
            "#161616" /* Foreground content color to use on primary color */,

          secondary: "#161616" /* Secondary color */,
          "secondary-focus": "#3AFF4E" /* Secondary color - focused */,
          "secondary-content":
            "#fff" /* Foreground content color to use on secondary color */,

          accent: "#3AFF4E" /* Accent color */,
          "accent-focus": "#3AFF4E" /* Accent color - focused */,
          "accent-content":
            "#161616" /* Foreground content color to use on accent color */,

          neutral: "#2b2b2b" /* Neutral color */,
          "neutral-focus": "#2a2e37" /* Neutral color - focused */,
          "neutral-content":
            "#ffffff" /* Foreground content color to use on neutral color */,

          "base-100":
            "#000000" /* Base color of page, used for blank backgrounds */,
          "base-200": "#35363a" /* Base color, a little darker */,
          "base-300": "#222222" /* Base color, even more darker */,
          "base-content":
            "#f9fafb" /* Foreground content color to use on base color */,

          info: "#2094f3" /* Info */,
          success: "#90EE90" /* Success */,
          warning: "#FFC94A" /* Warning */,
          error: "#F2613F" /* Error */,
        },
      },
      // backup themes:
      // 'dark',
      // 'synthwave'
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
};
