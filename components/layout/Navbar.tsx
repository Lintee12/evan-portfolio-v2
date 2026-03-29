"use client";

import { Group, Anchor, Text, ActionIcon, Tooltip, Box, Burger, Drawer, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconBrandGithub, IconMail } from "@tabler/icons-react";
import Link from "next/link";
import { navLinks, siteConfig } from "@/data/config";
import classes from "./Navbar.module.css";

export function Navbar() {
    const [opened, { toggle, close }] = useDisclosure(false);

    return (
        <>
            <Box component="header" className={classes.header}>
                <Group justify="space-between" h="100%" px={{ base: "md", md: "0" }} maw={1100} mx="auto">
                    {/* Wordmark */}
                    <Anchor component={Link} href="/" underline="never">
                        <Text fw={600} size="sm" ff="monospace">
                            {siteConfig.name}
                        </Text>
                    </Anchor>

                    {/* Desktop nav */}
                    <Group gap="xl" visibleFrom="sm">
                        {navLinks.map((link) => (
                            <Anchor key={link.href} component={Link} href={link.href} className={classes.link} size="sm">
                                {link.label}
                            </Anchor>
                        ))}
                    </Group>

                    {/* Social icons */}
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
                                    <IconBrandGithub size={18} />
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
                                    <IconMail size={18} />
                                </ActionIcon>
                            </Tooltip>
                        )}
                    </Group>

                    {/* Mobile burger */}
                    <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
                </Group>
            </Box>

            {/* Mobile drawer */}
            <Drawer
                opened={opened}
                onClose={close}
                title={
                    <Text fw={600} ff="monospace" size="sm">
                        {siteConfig.name}
                    </Text>
                }
                size="xs"
                position="right"
            >
                <Stack gap="lg" pt="md">
                    {navLinks.map((link) => (
                        <Anchor key={link.href} component={Link} href={link.href} onClick={close} size="md" underline="never">
                            {link.label}
                        </Anchor>
                    ))}
                </Stack>
            </Drawer>
        </>
    );
}
