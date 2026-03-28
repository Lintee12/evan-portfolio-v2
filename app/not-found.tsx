import { Title, Text, Stack, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
    return (
        <PageShell>
            <Stack gap="md" py="4rem">
                <Text size="xs" c="dimmed" ff="monospace">
                    404
                </Text>
                <Title order={1} c="white">
                    Page not found
                </Title>
                <Text c="dimmed" size="sm" maw={400}>
                    Whatever you were looking for isn&apos;t here. It may have moved or never existed.
                </Text>
                <Link href="/" passHref legacyBehavior>
                    <Button leftSection={<IconArrowLeft size={16} />} variant="subtle" color="gray" size="sm" w="fit-content">
                        Back home
                    </Button>
                </Link>
            </Stack>
        </PageShell>
    );
}
