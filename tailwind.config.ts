import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            sm: "425px",
            md: "750px",
            lg: "976px",
            xl: "1240px",
        },
        container: {
            center: true,
        },

        extend: {
            fontFamily: {
                arabicLight: [
                    "var(--din-next-lt-arabic-light)",
                    ...fontFamily.sans,
                ],
                arabic: [
                    "var(--din-next-lt-arabic-regular)",
                    ...fontFamily.sans,
                ],
                arabicMedium: [
                    "var(--din-next-lt-arabic-medium)",
                    ...fontFamily.sans,
                ],
                arabicBold: [
                    "var(--din-next-lt-arabic-bold)",
                    ...fontFamily.sans,
                ],
            },

            colors: {
                transparent: "transparent",
                white: "#fff",
                gray: {
                    100: "#F5F6F8",
                    200: "#E7E7E7",
                    300: "#898989",
                    400: "#777777",
                    500: "#787878",
                    600: "#2F2F2F",
                    700: "#242424",
                },
                ash: {
                    100: "#EAEAEA",
                    200: "#F1F1F1",
                    300: "#BABFC3",
                    400: "#FAFBFB",
                    500: "#72767C",
                    600: "#6D7175",
                    700: "#AEB4B9",
                },
                green: {
                    200: "#C9F2DC",
                    300: "#4CBF73",
                    400: "#D3E7DA",
                    500: "#16AD64",
                    600: "#00A950",
                },
                blue: {
                    300: "#E6EEFE",
                    400: "#BBDBED",
                    500: "#12A8E0",
                    600: "#2C6ECB",
                    700: "#2B8DC5",
                },
                red: {
                    100: "#FBE3E3",
                    200: "#C52B2B",
                    300: "#F8CBCB",
                    400: "#F65A4F",
                    500: "#FF2828",
                    600: "#FF4444",
                    700: "#DB1D1D",
                },
                black: {
                    500: "#333",
                    700: "#000",
                },
                yellow: {
                    500: "#F3C078",
                    600: "#FF9E43",
                    700: "#F6CA37",
                },
                cyan: "#237A6E",
                facebook: "#3A559F",
                google: "#ED5353",
            },
        },
    },
    plugins: [],
};
export default config;
