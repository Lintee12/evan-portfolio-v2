"use client";
import { Stack, Title, Text, Group, Anchor, Button } from "@mantine/core";
import { IconBrandGithub, IconMail, IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { siteConfig, bio } from "@/data/config";

export function HeroSection() {
    return (
        <Stack id="about" gap="lg" py={{ base: "4rem", sm: "6rem" }} maw={640}>
            {/* Monospace label above the title */}
            <Text size="sm" c="accent.5" ff="monospace">
                hi, I&apos;m
            </Text>

            <Title order={1} c="white" lh={1.1}>
                {siteConfig.name}
            </Title>

            <Text size="lg" c="gray.5" fw={400} lh={1.4}>
                {siteConfig.title}
            </Text>

            {/* Bio paragraphs */}
            <Stack gap="sm">
                {bio.map((paragraph, i) => (
                    <Text key={i} size="md" c="dimmed" lh={1.7}>
                        {paragraph}
                    </Text>
                ))}
            </Stack>

            {/* CTA row */}
            <Group gap="sm" mt="sm">
                <Button component={Link} href="/projects" rightSection={<IconArrowRight size={16} />} size="sm" color="accent">
                    View projects
                </Button>
                <Button
                    component="a"
                    href={`mailto:${siteConfig.socials.email}`}
                    variant="outline"
                    color="gray"
                    size="sm"
                    leftSection={<IconMail size={16} />}
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
                        leftSection={<IconBrandGithub size={16} />}
                    >
                        GitHub
                    </Button>
                )}
            </Group>
        </Stack>
    );
}
