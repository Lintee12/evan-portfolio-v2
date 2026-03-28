"use client";
import { SimpleGrid, Anchor, Group } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "@/components/ui/BlogCard";
import { getPosts } from "@/lib/api";
import { useEffect, useState } from "react";
import { WordPressPost } from "@/types";

export function BlogSection() {
    const [posts, setPosts] = useState<WordPressPost[]>();

    useEffect(() => {
        async function getData() {
            const data = await getPosts({ max: 6, category: "Blog" });

            setPosts((await data).posts);
        }
        getData();
    }, []);

    if (posts && posts.length === 0) return null;

    return (
        <section id="blog" style={{ paddingTop: "4rem" }}>
            <SectionHeading title="Writing" subtitle="Notes, guides, and things I've figured out." />

            <SimpleGrid cols={{ base: 1, sm: 2, md: 2 }} spacing="md">
                {posts?.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </SimpleGrid>

            <Group mt="lg">
                <Anchor
                    component={Link}
                    href="/blog"
                    size="sm"
                    c="accent.5"
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                    All posts <IconArrowRight size={14} />
                </Anchor>
            </Group>
        </section>
    );
}
