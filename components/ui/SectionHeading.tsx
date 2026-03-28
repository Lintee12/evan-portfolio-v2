import { Title, Text, Stack, type TitleOrder } from '@mantine/core';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  order?: TitleOrder;
}

/**
 * SectionHeading — consistent heading style used across all page sections.
 * Drop this at the top of any new section you create.
 */
export function SectionHeading({
  title,
  subtitle,
  order = 2,
}: SectionHeadingProps) {
  return (
    <Stack gap="xs" mb="xl">
      <Title order={order} c="white">
        {title}
      </Title>
      {subtitle && (
        <Text size="sm" c="dimmed" maw={560}>
          {subtitle}
        </Text>
      )}
    </Stack>
  );
}
