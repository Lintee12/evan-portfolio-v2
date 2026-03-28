'use client';

import { Container, type ContainerProps } from '@mantine/core';
import type { ReactNode } from 'react';

interface ShellProps extends ContainerProps {
  children: ReactNode;
}

/**
 * PageShell — wraps every page with a consistent max-width container.
 * Adjust `size` here to change the global content width.
 */
export function PageShell({ children, ...props }: ShellProps) {
  return (
    <Container size="lg" py="xl" {...props}>
      {children}
    </Container>
  );
}
