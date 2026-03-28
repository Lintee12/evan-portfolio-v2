import { createTheme, MantineColorsTuple } from "@mantine/core";

// ─── Brand colours ────────────────────────────────────────────────────────────
// One accent colour used sparingly. Everything else is neutral.
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
    // ── Colour ──────────────────────────────────────────────────────────────────
    primaryColor: "accent",
    colors: { accent },

    // ── Typography ──────────────────────────────────────────────────────────────
    // One font family throughout. Clean, legible, no personality distractions.
    fontFamily: 'Geist, "IBM Plex Mono", ui-monospace, monospace',
    fontFamilyMonospace: '"IBM Plex Mono", "Fira Code", monospace',
    headings: {
        fontFamily: 'Geist, "IBM Plex Mono", ui-monospace, monospace',
        fontWeight: "600",
        sizes: {
            h1: { fontSize: "2.5rem", lineHeight: "1.15" },
            h2: { fontSize: "1.75rem", lineHeight: "1.25" },
            h3: { fontSize: "1.25rem", lineHeight: "1.35" },
        },
    },
    fontSizes: {
        xs: "0.75rem",
        sm: "0.875rem",
        md: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
    },

    // ── Shape ───────────────────────────────────────────────────────────────────
    radius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
    },
    defaultRadius: "sm",

    // ── Spacing ─────────────────────────────────────────────────────────────────
    spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
    },

    // ── Component defaults ──────────────────────────────────────────────────────
    components: {
        Anchor: {
            defaultProps: { underline: "hover" },
        },
        Badge: {
            defaultProps: { variant: "outline", radius: "xs", size: "sm" },
        },
        Button: {
            defaultProps: { radius: "sm" },
        },
        Card: {
            defaultProps: { radius: "md", withBorder: true },
        },
        Divider: {
            defaultProps: { color: "dark.6" },
        },
    },
});

export default theme;
