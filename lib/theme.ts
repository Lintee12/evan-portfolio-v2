import { createTheme, MantineColorsTuple } from "@mantine/core";

// ─── Brand colours ────────────────────────────────────────────────────────────
const accent: MantineColorsTuple = [
    "#eafaf3", // 0 – lightest tint
    "#d0f4e3",
    "#a1e8c7",
    "#6ddba9",
    "#45d090",
    "#2ec87f", // 5 – main accent
    "#24b870",
    "#1a9e5e",
    "#0f834c",
    "#05673b", // 9 – darkest shade
];

const theme = createTheme({
    primaryColor: "accent",
    colors: { accent },
    fontFamily: "'DM Sans', 'Geist', system-ui, sans-serif",
    fontFamilyMonospace: "'Geist Mono', 'IBM Plex Mono', monospace",
    headings: {
        fontFamily: "'DM Sans', system-ui, sans-serif",
        fontWeight: "700",
    },
    defaultRadius: "md",
    components: {
        Card: {
            defaultProps: {
                padding: "lg",
            },
        },
        Button: {
            defaultProps: {
                radius: "md",
            },
        },
        Badge: {
            defaultProps: {
                radius: "sm",
            },
        },
    },
});

export default theme;
