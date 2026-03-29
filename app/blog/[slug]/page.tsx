import { Stack, Title, Text, Group, Box } from "@mantine/core";
import { IconClock, IconCalendar, IconArrowLeft } from "@tabler/icons-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/PageShell";
import { getPost, getPosts } from "@/lib/api";
import { estimateReadingTime, getCategories, sanitizeWordPressContent } from "@/lib/blog";
import { TagList } from "@/components/ui";
import { Typography } from "@mantine/core";

interface Props {
    params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPost(slug);
    if (!post) return {};
    return { title: post.title, description: post.excerpt };
}

function formatDate(iso: string): string {
    if (!iso) return "";
    return new Date(iso).toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default async function PostPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPost(slug);

    if (!post) notFound();

    const categories = getCategories(post);

    return (
        <PageShell maw={760}>
            {/* Back link */}
            <Link
                href="/blog"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "var(--text-dimmed)",
                    textDecoration: "none",
                    fontSize: "var(--mantine-font-size-sm)",
                    marginBottom: "2rem",
                    fontWeight: 500,
                    transition: "color 150ms ease",
                }}
            >
                <IconArrowLeft size={14} />
                All posts
            </Link>

            <Stack gap="md" mb="xl">
                <Title
                    order={1}
                    lh={1.2}
                    style={{
                        color: "var(--text-primary)",
                        letterSpacing: "-0.03em",
                        fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
                    }}
                >
                    {post.title}
                </Title>

                <Group gap="lg">
                    <Group gap={6}>
                        <IconCalendar size={13} color="var(--text-dimmed)" />
                        <Text size="sm" ff="monospace" style={{ color: "var(--text-dimmed)" }}>
                            {formatDate(post.date)}
                        </Text>
                    </Group>
                    <Group gap={6}>
                        <IconClock size={13} color="var(--text-dimmed)" />
                        <Text size="sm" ff="monospace" style={{ color: "var(--text-dimmed)" }}>
                            {estimateReadingTime(post.content)} min read
                        </Text>
                    </Group>
                </Group>

                {categories.length > 0 && (
                    <Group gap={6}>
                        <TagList tags={categories} />
                    </Group>
                )}
            </Stack>

            <Box
                style={{ height: 1, background: "var(--border-color)", marginBottom: "2rem" }}
            />

            <Typography>
                <div
                    className="prose"
                    dangerouslySetInnerHTML={{ __html: sanitizeWordPressContent(post.content) }}
                />
            </Typography>
        </PageShell>
    );
}
