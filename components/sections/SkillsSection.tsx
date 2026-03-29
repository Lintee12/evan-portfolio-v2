"use client";
import { SimpleGrid, Stack, Text, Group, Anchor, ThemeIcon, Box, Progress } from "@mantine/core";
import { IconNetwork, IconShieldLock, IconServer, IconTerminal2, IconActivity } from "@tabler/icons-react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";

const iconMap: Record<string, React.ReactNode> = {
    IconNetwork: <IconNetwork size={16} />,
    IconShieldLock: <IconShieldLock size={16} />,
    IconServer: <IconServer size={16} />,
    IconTerminal2: <IconTerminal2 size={16} />,
    IconActivity: <IconActivity size={16} />,
};

const levelValue: Record<string, number> = {
    expert: 100,
    proficient: 68,
    familiar: 36,
};

function CategoryBlock({ category }: { category: SkillCategory }) {
    return (
        <Box
            p="lg"
            style={{
                background: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                borderRadius: "var(--mantine-radius-md)",
                transition: "border-color 150ms ease",
            }}
        >
            <Stack gap="md">
                <Group gap="xs">
                    <ThemeIcon size="sm" variant="light" color="accent" radius="sm">
                        {iconMap[category.icon] ?? <IconServer size={16} />}
                    </ThemeIcon>
                    <Text size="sm" fw={600} style={{ color: "var(--text-primary)", letterSpacing: "-0.01em" }}>
                        {category.label}
                    </Text>
                </Group>

                <Stack gap={10}>
                    {category.skills.map((skill) => (
                        <Stack key={skill.name} gap={4}>
                            <Group justify="space-between">
                                <Text size="xs" style={{ color: "var(--text-primary)" }}>{skill.name}</Text>
                                <Text
                                    size="xs"
                                    ff="monospace"
                                    style={{
                                        color: skill.level === "expert"
                                            ? "var(--mantine-color-accent-5)"
                                            : skill.level === "proficient"
                                            ? "var(--text-dimmed)"
                                            : "var(--skill-dot-familiar)",
                                    }}
                                >
                                    {skill.level}
                                </Text>
                            </Group>
                            <Progress
                                value={levelValue[skill.level]}
                                size={3}
                                color={skill.level === "expert" ? "accent" : skill.level === "proficient" ? "gray" : "dark"}
                                style={{ opacity: 0.6 }}
                            />
                        </Stack>
                    ))}
                </Stack>
            </Stack>
        </Box>
    );
}

export function SkillsSection() {
    const preview = skillCategories.slice(0, 4);

    return (
        <section id="skills" style={{ paddingTop: "4rem" }}>
            <SectionHeading title="Skills" subtitle="Technologies and tools I work with." />

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {preview.map((cat) => (
                    <CategoryBlock key={cat.id} category={cat} />
                ))}
            </SimpleGrid>

            <Group mt="lg">
                <Anchor
                    component={Link}
                    href="/skills"
                    size="sm"
                    c="accent.5"
                    style={{ display: "flex", alignItems: "center", gap: 4, fontWeight: 500 }}
                >
                    Full skill list <IconArrowRight size={14} />
                </Anchor>
            </Group>
        </section>
    );
}
