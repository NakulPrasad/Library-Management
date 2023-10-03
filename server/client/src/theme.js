// color design tokens export
export const shades = {
    grey: {
        0: "#ffffff",
        10: "#f6f6f6",
        50: "#f0f0f0",
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
        1000: "#000000",
    },
    primary: {
        100: "#d3d4de",
        200: "#a6a9be",
        300: "#7a7f9d",
        400: "#4d547d",
        500: "#21295c",
        600: "#191F45",
        700: "#141937",
        800: "#0d1025",
        900: "#070812",
    },
    secondary: {
        50: "#ffffff",
        100: "#f0f9ff",
        200: "#c0e5ff",
        300: "#91d1ff",
        400: "#61bdff",
        500: "#32a9ff",
        600: "#1085cc",
        700: "#006199",
        800: "#004366",
        900: "#002033",
    },
};

export const themeSettings = () => {
    return {
        palette: {
            mode: "dark",
            primary: {
                ...shades.primary,
                main: shades.primary[600],
                light: shades.primary[500],
            },
            secondary: {
                ...shades.secondary,
                main: shades.secondary[500],
            },
            neutral: {
                ...shades.grey,
                main: shades.grey[500],
            },
            background: {
                default: shades.primary[900],
                alt: shades.primary[600],
            },


        },
        typography: {
            fontFamily: ["Inter", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Inter", "sans-serif"].join(","),
                fontSize: 16,
            },

        },
    };
};