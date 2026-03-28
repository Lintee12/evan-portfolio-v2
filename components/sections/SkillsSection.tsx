"use client";
import { SimpleGrid, Stack, Text, Group, Anchor, ThemeIcon } from "@mantine/core";
import { IconNetwork, IconShieldLock, IconServer, IconTerminal2, IconActivity } from "@tabler/icons-react";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { skillCategories } from "@/data/skills";
import type { SkillCategory } from "@/types";

// ─── Icon map ─────────────────────────────────────────────────────────────────
// Add entries here whenever you add a new category with a new icon.
const iconMap: Record<string, React.ReactNode> = {
    IconNetwork: <IconNetwork size={18} />,
    IconShieldLock: <IconShieldLock size={18} />,
    IconServer: <IconServer size={18} />,
    IconTerminal2: <IconTerminal2 size={18} />,
    IconActivity: <IconActivity size={18} />,
};

function CategoryBlock({ category }: { category: SkillCategory }) {
    return (
        <Stack gap="sm">
            <Group gap="xs">
                <ThemeIcon size="sm" variant="subtle" color="accent">
                    {iconMap[category.icon] ?? <IconServer size={18} />}
                </ThemeIcon>
                <Text size="sm" fw={600} c="white">
                    {category.label}
                </Text>
            </Group>

            <Stack gap={6}>
                {category.skills.map((skill) => (
                    <Group key={skill.name} justify="space-between">
                        <Text size="sm" c="gray.4">
                            {skill.name}
                        </Text>
                        <Text
                            size="xs"
                            c={skill.level === "expert" ? "accent.5" : skill.level === "proficient" ? "gray.5" : "dark.3"}
                            ff="monospace"
                        >
                            {skill.level}
                        </Text>
                    </Group>
                ))}
            </Stack>
        </Stack>
    );
}

/**
 * SkillsSection — skill categories grid for the homepage.
 * Full page lives at /skills.
 */
export function SkillsSection() {
    // Show first 4 categories on homepage
    const preview = skillCategories.slice(0, 4);

    return (
        <section id="skills" style={{ paddingTop: "4rem" }}>
            <SectionHeading title="Skills" />

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
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
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                    Full skill list <IconArrowRight size={14} />
                </Anchor>
            </Group>
        </section>
    );
}
