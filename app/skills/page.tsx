import { SimpleGrid, Stack, Text, Group, ThemeIcon, Divider } from '@mantine/core';
import {
  IconNetwork,
  IconShieldLock,
  IconServer,
  IconTerminal2,
  IconActivity,
} from '@tabler/icons-react';
import type { Metadata } from 'next';
import { PageShell } from '@/components/layout/PageShell';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { skillCategories } from '@/data/skills';
import type { SkillCategory } from '@/types';

export const metadata: Metadata = {
  title: 'Skills',
  description: 'My technical skill set.',
};

// Keep this in sync with SkillsSection.tsx icon map
const iconMap: Record<string, React.ReactNode> = {
  IconNetwork: <IconNetwork size={20} />,
  IconShieldLock: <IconShieldLock size={20} />,
  IconServer: <IconServer size={20} />,
  IconTerminal2: <IconTerminal2 size={20} />,
  IconActivity: <IconActivity size={20} />,
};

const levelColor: Record<string, string> = {
  expert: 'accent.5',
  proficient: 'gray.5',
  familiar: 'dark.3',
};

function CategorySection({ category }: { category: SkillCategory }) {
  return (
    <Stack gap="md">
      <Group gap="sm">
        <ThemeIcon size="md" variant="subtle" color="accent">
          {iconMap[category.icon] ?? <IconServer size={20} />}
        </ThemeIcon>
        <Text size="md" fw={600} c="white">
          {category.label}
        </Text>
      </Group>

      <Stack gap={8}>
        {category.skills.map((skill) => (
          <Group key={skill.name} justify="space-between">
            <Text size="sm" c="gray.4">
              {skill.name}
            </Text>
            <Text size="xs" c={levelColor[skill.level]} ff="monospace">
              {skill.level}
            </Text>
          </Group>
        ))}
      </Stack>
    </Stack>
  );
}

export default function SkillsPage() {
  return (
    <PageShell>
      <SectionHeading
        title="Skills"
        subtitle="What I work with daily, what I know well, and what I'm still learning."
        order={1}
      />

      {/* Legend */}
      <Group gap="lg" mb="xl">
        {(['expert', 'proficient', 'familiar'] as const).map((level) => (
          <Group key={level} gap={6}>
            <div
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor:
                  level === 'expert'
                    ? 'var(--mantine-color-accent-5)'
                    : level === 'proficient'
                    ? 'var(--mantine-color-gray-5)'
                    : 'var(--mantine-color-dark-3)',
              }}
            />
            <Text size="xs" c="dimmed" ff="monospace">
              {level}
            </Text>
          </Group>
        ))}
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="xl">
        {skillCategories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </SimpleGrid>
    </PageShell>
  );
}
