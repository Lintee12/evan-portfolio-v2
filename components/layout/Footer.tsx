'use client';

import { Group, Text, Anchor, Box, ActionIcon, Stack } from '@mantine/core';
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
        borderTop: '1px solid var(--footer-border)',
        transition: 'border-color 200ms ease',
      }}
    >
      <Group justify="space-between" maw={1100} mx="auto" align="center">
        <Stack gap={2}>
          <Text size="sm" fw={600} style={{ color: 'var(--text-primary)' }}>
            {siteConfig.name}
          </Text>
          <Text size="xs" style={{ color: 'var(--text-dimmed)' }} ff="monospace">
            © {year} · {siteConfig.title}
          </Text>
        </Stack>

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
              aria-label="GitHub"
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
              aria-label="LinkedIn"
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
              aria-label="Email"
            >
              <IconMail size={16} />
            </ActionIcon>
          )}
        </Group>
      </Group>
    </Box>
  );
}
