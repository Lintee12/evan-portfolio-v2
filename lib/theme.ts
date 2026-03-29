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
    primaryColor: "accent",
    colors: { accent },
});

export default theme;
