"use client";
import { Stack, Title, Text, Group, Anchor, Button, Box, Badge } from "@mantine/core";
import { IconBrandGithub, IconMail, IconArrowRight, IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import { siteConfig, bio } from "@/data/config";

export function HeroSection() {
    return (
        <Stack id="about" gap="xl" py={{ base: "4rem", sm: "6rem" }} maw={680}>
            {/* Status badge */}
            <Box>
                <Badge
                    variant="dot"
                    color="accent"
                    size="sm"
                    style={{
                        fontFamily: "var(--mantine-font-family-monospace)",
                        letterSpacing: "0.02em",
                        textTransform: "none",
                        fontSize: "0.75rem",
                    }}
                >
                    Open to opportunities
                </Badge>
            </Box>

            {/* Name + title */}
            <Stack gap="xs">
                <Text
                    size="sm"
                    ff="monospace"
                    c="accent.5"
                    style={{ letterSpacing: "0.04em", textTransform: "lowercase" }}
                >
                    hi, I&apos;m
                </Text>
                <Title
                    order={1}
                    style={{
                        fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1.05,
                        color: "var(--text-primary)",
                    }}
                >
                    {siteConfig.name}
                </Title>
                <Text
                    size="xl"
                    fw={500}
                    style={{
                        color: "var(--text-dimmed)",
                        letterSpacing: "-0.01em",
                    }}
                >
                    {siteConfig.title}
                </Text>
            </Stack>

            {/* Bio paragraphs */}
            <Stack gap="sm">
                {bio.map((paragraph, i) => (
                    <Text
                        key={i}
                        size="md"
                        lh={1.75}
                        style={{ color: "var(--text-dimmed)" }}
                    >
                        {paragraph}
                    </Text>
                ))}
            </Stack>

            {/* CTA row */}
            <Group gap="sm" mt="xs" wrap="wrap">
                <Button
                    component={Link}
                    href="/projects"
                    rightSection={<IconArrowRight size={15} />}
                    size="sm"
                    color="accent"
                    variant="filled"
                >
                    View projects
                </Button>
                <Button
                    component="a"
                    href={`mailto:${siteConfig.socials.email}`}
                    variant="default"
                    size="sm"
                    leftSection={<IconMail size={15} />}
                >
                    Get in touch
                </Button>
                {siteConfig.socials.github && (
                    <Button
                        component="a"
                        href={siteConfig.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        color="gray"
                        size="sm"
                        leftSection={<IconBrandGithub size={15} />}
                    >
                        GitHub
                    </Button>
                )}
                {siteConfig.socials.linkedin && (
                    <Button
                        component="a"
                        href={siteConfig.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="subtle"
                        color="gray"
                        size="sm"
                        leftSection={<IconBrandLinkedin size={15} />}
                    >
                        LinkedIn
                    </Button>
                )}
            </Group>
        </Stack>
    );
}
