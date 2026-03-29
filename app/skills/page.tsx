import { SimpleGrid, Stack, Text, Group, ThemeIcon, Box, Progress } from '@mantine/core';
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

const iconMap: Record<string, React.ReactNode> = {
  IconNetwork: <IconNetwork size={18} />,
  IconShieldLock: <IconShieldLock size={18} />,
  IconServer: <IconServer size={18} />,
  IconTerminal2: <IconTerminal2 size={18} />,
  IconActivity: <IconActivity size={18} />,
};

const levelValue: Record<string, number> = {
  expert: 100,
  proficient: 68,
  familiar: 36,
};

function CategorySection({ category }: { category: SkillCategory }) {
  return (
    <Box
      p="lg"
      style={{
        background: 'var(--card-bg)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--mantine-radius-md)',
      }}
    >
      <Stack gap="md">
        <Group gap="sm">
          <ThemeIcon size="md" variant="light" color="accent" radius="sm">
            {iconMap[category.icon] ?? <IconServer size={18} />}
          </ThemeIcon>
          <Text size="md" fw={600} style={{ color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>
            {category.label}
          </Text>
        </Group>

        <Stack gap={12}>
          {category.skills.map((skill) => (
            <Stack key={skill.name} gap={5}>
              <Group justify="space-between">
                <Text size="sm" style={{ color: 'var(--text-primary)' }}>
                  {skill.name}
                </Text>
                <Text
                  size="xs"
                  ff="monospace"
                  style={{
                    color:
                      skill.level === 'expert'
                        ? 'var(--mantine-color-accent-5)'
                        : skill.level === 'proficient'
                        ? 'var(--text-dimmed)'
                        : 'var(--skill-dot-familiar)',
                  }}
                >
                  {skill.level}
                </Text>
              </Group>
              <Progress
                value={levelValue[skill.level]}
                size={3}
                color={skill.level === 'expert' ? 'accent' : skill.level === 'proficient' ? 'gray' : 'dark'}
                style={{ opacity: 0.6 }}
              />
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Box>
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
      <Group gap="xl" mb="xl">
        {(['expert', 'proficient', 'familiar'] as const).map((level) => (
          <Group key={level} gap={8}>
            <Box
              style={{
                width: 24,
                height: 3,
                borderRadius: 2,
                backgroundColor:
                  level === 'expert'
                    ? 'var(--mantine-color-accent-5)'
                    : level === 'proficient'
                    ? 'var(--text-dimmed)'
                    : 'var(--skill-dot-familiar)',
              }}
            />
            <Text size="xs" ff="monospace" style={{ color: 'var(--text-dimmed)' }}>
              {level}
            </Text>
          </Group>
        ))}
      </Group>

      <SimpleGrid cols={{ base: 1, sm: 2, lg: 3 }} spacing="md">
        {skillCategories.map((cat) => (
          <CategorySection key={cat.id} category={cat} />
        ))}
      </SimpleGrid>
    </PageShell>
  );
}
