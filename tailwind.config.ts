/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.{ts, tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    fontSize: {
      heading1: [
        "84px",
        {
          lineHeight: "120%",
          fontWeight: "700",
        },
      ],
      heading2: [
        "72px",
        {
          lineHeight: "120%",
          fontWeight: "700",
        },
      ],
      heading3: [
        "48px",
        {
          lineHeight: "auto",
          fontWeight: "00",
        },
      ],
      body: [
        "44px",
        {
          lineHeight: "160%",
          fontWeight: "800",
        },
      ],
      base: [
        "34px",
        {
          lineHeight: "auto",
          fontWeight: "500",
        },
      ],
      small: [
        "28px",
        {
          lineHeight: "160%",
          fontWeight: "300",
        },
      ],
      "subtle-bold": [
        "24px",
        {
          lineHeight: "auto",
          fontWeight: "600",
        },
      ],
      subtle: [
        "24px",
        {
          lineHeight: "auto",
          fontWeight: "400",
        },
      ],
      "tiny-bold": [
        "16px",
        {
          lineHeight: "26px",
          fontWeight: "400",
        },
      ],
      tiny: [
        "16px",
        {
          lineHeight: "160%",
          fontWeight: "300",
        },
      ],
    },
    extend: {
      fontFamily: {
        heading: "var(--font-poppins)",
        body: "var(--font-inter)",
      },
    },
  },
};
