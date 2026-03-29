import { Title, Text, Stack, type TitleOrder, Box } from '@mantine/core';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  order?: TitleOrder;
}

/**
 * SectionHeading — consistent heading style used across all page sections.
 */
export function SectionHeading({
  title,
  subtitle,
  order = 2,
}: SectionHeadingProps) {
  return (
    <Stack gap={6} mb="xl">
      <Title
        order={order}
        style={{
          letterSpacing: order === 1 ? '-0.03em' : '-0.02em',
          color: 'var(--text-primary)',
          fontSize: order === 1 ? 'clamp(1.8rem, 4vw, 2.5rem)' : undefined,
        }}
      >
        {title}
      </Title>
      {subtitle && (
        <Text size="sm" lh={1.6} maw={520} style={{ color: 'var(--text-dimmed)' }}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}
