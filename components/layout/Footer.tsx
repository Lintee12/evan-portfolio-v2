'use client';

import { Group, Text, Anchor, Box, ActionIcon } from '@mantine/core';
import { IconBrandGithub, IconBrandLinkedin, IconMail } from '@tabler/icons-react';
import { siteConfig } from '@/data/config';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      component="footer"
      py="xl"
      px="md"
      mt="auto"
      style={{
        borderTop: '1px solid var(--mantine-color-dark-6)',
      }}
    >
      <Group justify="space-between" maw={1100} mx="auto">
        <Text size="xs" c="dimmed" ff="monospace">
          © {year} {siteConfig.name}
        </Text>

        <Group gap="xs">
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
              <IconBrandGithub size={16} />
            </ActionIcon>
          )}
          {siteConfig.socials.linkedin && (
            <ActionIcon
              component="a"
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variant="subtle"
              color="gray"
              size="sm"
            >
              <IconBrandLinkedin size={16} />
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
              <IconMail size={16} />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Box>
  );
}
