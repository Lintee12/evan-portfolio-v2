"use client";

import { Card, Text, Title, Group, Stack, Box } from "@mantine/core";
import { IconClock, IconArrowUpRight } from "@tabler/icons-react";
import Link from "next/link";
import { TagList } from "@/components/ui/TagList";
import { WordPressPost } from "@/types";
import { estimateReadingTime, sanitizeWordPressContent } from "@/lib/blog";

interface BlogCardProps {
    post: WordPressPost;
    compact?: boolean;
}

function formatDate(iso: string): string {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function BlogCard({ post, compact }: BlogCardProps) {
    const categories = Object.values(post.categories || {}).map((cat) => cat.name);

    return (
        <Card
            component={Link}
            href={`/blog/${post.slug}`}
            withBorder
            radius="md"
            style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "var(--card-bg)",
                borderColor: "var(--border-color)",
                transition: "border-color 150ms ease, transform 150ms ease, box-shadow 150ms ease",
                cursor: "pointer",
            }}
            styles={{
                root: {
                    "&:hover": {
                        borderColor: "var(--mantine-color-accent-5)",
                        transform: "translateY(-2px)",
                        boxShadow: "0 4px 20px color-mix(in srgb, var(--mantine-color-accent-5) 12%, transparent)",
                    },
                },
            }}
        >
            <Stack gap="sm" style={{ flex: 1 }}>
                <Group justify="space-between" align="flex-start" wrap="nowrap">
                    <Title
                        order={3}
                        size={compact ? "sm" : "md"}
                        lh={1.3}
                        style={{
                            color: "var(--text-primary)",
                            letterSpacing: "-0.01em",
                            flex: 1,
                        }}
                    >
                        {post.title}
                    </Title>
                    <Box
                        style={{
                            flexShrink: 0,
                            opacity: 0.4,
                            marginTop: 2,
                        }}
                    >
                        <IconArrowUpRight size={16} color="var(--text-primary)" />
                    </Box>
                </Group>

                {!compact && (
                    <Text
                        dangerouslySetInnerHTML={{ __html: sanitizeWordPressContent(post.excerpt) }}
                        size="sm"
                        lineClamp={2}
                        style={{ flex: 1, color: "var(--text-dimmed)", lineHeight: 1.6 }}
                        component="div"
                    />
                )}

                <TagList tags={categories} />
            </Stack>

            <Group gap="sm" mt="md" pt="sm" style={{ borderTop: "1px solid var(--border-color)" }}>
                <Text size="xs" ff="monospace" style={{ color: "var(--text-dimmed)" }}>
                    {formatDate(post.date)}
                </Text>
                <Group gap={4}>
                    <IconClock size={11} color="var(--text-dimmed)" />
                    <Text size="xs" ff="monospace" style={{ color: "var(--text-dimmed)" }}>
                        {estimateReadingTime(post.content)} min
                    </Text>
                </Group>
            </Group>
        </Card>
    );
}
