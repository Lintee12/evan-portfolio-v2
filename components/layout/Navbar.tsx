"use client";

import {
    Group,
    Anchor,
    ActionIcon,
    Tooltip,
    Box,
    Burger,
    Drawer,
    Stack,
    useComputedColorScheme,
    useMantineColorScheme,
    Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub, IconMail, IconSun, IconMoon } from "@tabler/icons-react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/config";
import classes from "./Navbar.module.css";

function ThemeToggle() {
    const { setColorScheme } = useMantineColorScheme();
    const computedColorScheme = useComputedColorScheme("dark", { getInitialValueInEffect: true });
    const isDark = computedColorScheme === "dark";

    return (
        <Tooltip label={isDark ? "Light mode" : "Dark mode"} position="bottom">
            <ActionIcon
                onClick={() => setColorScheme(isDark ? "light" : "dark")}
                variant="subtle"
                color="gray"
                size="sm"
                aria-label="Toggle color scheme"
            >
                {isDark ? <IconSun size={17} /> : <IconMoon size={17} />}
            </ActionIcon>
        </Tooltip>
    );
}

export function Navbar() {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <>
            <Box component="header" className={classes.header}>
                <Group justify="space-between" h="100%" px={{ base: "md", md: "0" }} maw={1100} mx="auto">
                    {/* Wordmark */}
                    <Anchor component={Link} href="/" underline="never">
                        <span className={classes.wordmark}>
                            {siteConfig.name.split(" ")[0]}{" "}
                            <span style={{ fontWeight: 400, opacity: 0.6 }}>{siteConfig.name.split(" ")[1]}</span>
                        </span>
                    </Anchor>

                    {/* Desktop nav */}
                    <Group gap="xl" visibleFrom="sm">
                        {navLinks.map((link) => (
                            <Anchor
                                key={link.href}
                                component={Link}
                                href={link.href}
                                className={classes.link}
                                underline="never"
                            >
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>

                    {/* Right side: social icons + theme toggle */}
                    <Group gap="xs" visibleFrom="sm">
                        {siteConfig.socials.github && (
                            <Tooltip label="GitHub" position="bottom">
                                <ActionIcon
                                    component="a"
                                    href={siteConfig.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="subtle"
                                    color="gray"
                                    size="sm"
                                >
                                    <IconBrandGithub size={17} />
                                </ActionIcon>
                            </Tooltip>
                        )}
                        {siteConfig.socials.email && (
                            <Tooltip label="Email" position="bottom">
                                <ActionIcon
                                    component="a"
                                    href={`mailto:${siteConfig.socials.email}`}
                                    variant="subtle"
                                    color="gray"
                                    size="sm"
                                >
                                    <IconMail size={17} />
                                </ActionIcon>
                            </Tooltip>
                        )}
                        <ThemeToggle />
                    </Group>

                    {/* Mobile: theme toggle + burger */}
                    <Group gap="xs" hiddenFrom="sm">
                        <ThemeToggle />
                        <Burger opened={opened} onClick={toggle} size="sm" />
                    </Group>
                </Group>
            </Box>

            {/* Mobile drawer */}
            <Drawer
                opened={opened}
                onClose={close}
                title={
                    <span className={classes.wordmark}>
                        {siteConfig.name.split(" ")[0]}{" "}
                        <span style={{ fontWeight: 400, opacity: 0.6 }}>{siteConfig.name.split(" ")[1]}</span>
                    </span>
                }
                size="xs"
                position="right"
                styles={{
                    header: { borderBottom: "1px solid var(--border-color)" },
                    body: { paddingTop: "1.5rem" },
                }}
            >
                <Stack gap="md">
                    {navLinks.map((link) => (
                        <Anchor
                            key={link.href}
                            component={Link}
                            href={link.href}
                            onClick={close}
                            size="md"
                            underline="never"
                            fw={500}
                            c="var(--text-primary)"
                        >
                            {link.label}
                        </Anchor>
                    ))}
                    <Box pt="md" style={{ borderTop: "1px solid var(--border-color)" }}>
                        <Group gap="sm">
                            {siteConfig.socials.github && (
                                <ActionIcon
                                    component="a"
                                    href={siteConfig.socials.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="subtle"
                                    color="gray"
                                    size="sm"
                                >
                                    <IconBrandGithub size={17} />
                                </ActionIcon>
                            )}
                            {siteConfig.socials.email && (
                                <ActionIcon
                                    component="a"
                                    href={`mailto:${siteConfig.socials.email}`}
                                    variant="subtle"
                                    color="gray"
                                    size="sm"
                                >
                                    <IconMail size={17} />
                                </ActionIcon>
                            )}
                        </Group>
                    </Box>
                </Stack>
            </Drawer>
        </>
    );
}
