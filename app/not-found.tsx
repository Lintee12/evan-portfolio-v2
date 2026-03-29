import { Title, Text, Stack, Button } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import Link from "next/link";
import { PageShell } from "@/components/layout/PageShell";

export default function NotFound() {
    return (
        <PageShell>
            <Stack gap="md" py="6rem" maw={480}>
                <Text size="xs" ff="monospace" style={{ color: "var(--mantine-color-accent-5)", letterSpacing: "0.1em" }}>
                    404
                </Text>
                <Title
                    order={1}
                    style={{
                        color: "var(--text-primary)",
                        letterSpacing: "-0.03em",
                        fontSize: "clamp(2rem, 5vw, 3rem)",
                    }}
                >
                    Page not found
                </Title>
                <Text size="sm" maw={400} lh={1.7} style={{ color: "var(--text-dimmed)" }}>
                    Whatever you were looking for isn&apos;t here. It may have moved or never existed.
                </Text>
                <Link href="/" passHref legacyBehavior>
                    <Button
                        leftSection={<IconArrowLeft size={15} />}
                        variant="default"
                        size="sm"
                        w="fit-content"
                    >
                        Back home
                    </Button>
                </Link>
            </Stack>
        </PageShell>
    );
}
