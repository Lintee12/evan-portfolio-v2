"use client";

import { Card, Text, Title, Group, Anchor, Stack } from "@mantine/core";
import { IconClock } from "@tabler/icons-react";
import Link from "next/link";
import { TagList } from "@/components/ui/TagList";
import { WordPressPost } from "@/types";
import { estimateReadingTime, sanitizeWordPressContent } from "@/lib/blog";

interface BlogCardProps {
    post: WordPressPost;
}

function formatDate(iso: string): string {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
}

export function BlogCard({ post }: BlogCardProps) {
    const categories = Object.values(post.categories || {}).map((cat) => cat.name);

    return (
        <Card
            withBorder
            radius="md"
            component={Link}
            href={`/blog/${post.slug}`}
            styles={{
                root: {
                    textDecoration: "none",
                    display: "flex",
                    flexDirection: "column",
                    transition: "border-color 150ms ease",
                },
            }}
        >
            <Stack gap="sm" style={{ flex: 1 }}>
                <Title order={3} size="md" lh={1.3}>
                    {post.title}
                </Title>
                <Text
                    dangerouslySetInnerHTML={{ __html: sanitizeWordPressContent(post.excerpt) }}
                    size="sm"
                    lineClamp={2}
                    style={{ flex: 1 }}
                    component="div"
                ></Text>
                <TagList tags={categories} />
            </Stack>

            <Group gap="sm" mt="md">
                <Text size="xs" c="dimmed" ff="monospace">
                    {formatDate(post.date)}
                </Text>
                <Group gap={4}>
                    <IconClock size={12} color="var(--mantine-color-dimmed)" />
                    <Text size="xs" c="dimmed" ff="monospace">
                        {estimateReadingTime(post.content)} min
                    </Text>
                </Group>
            </Group>
        </Card>
    );
}
