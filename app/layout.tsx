import "@mantine/core/styles.css";
import "./globals.css";

import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import theme from "@/lib/theme";
import { siteConfig } from "@/data/config";

export const metadata: Metadata = {
    title: {
        default: siteConfig.name,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" data-mantine-color-scheme="dark">
            <head>
                <ColorSchemeScript forceColorScheme="dark" />
            </head>
            <body>
                <MantineProvider theme={theme} forceColorScheme="dark">
                    <div
                        style={{
                            minHeight: "100vh",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Navbar />
                        <main style={{ flex: 1 }}>{children}</main>
                        <Footer />
                    </div>
                </MantineProvider>
            </body>
        </html>
    );
}
