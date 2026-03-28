"use client";
import { SimpleGrid, Anchor, Group, Skeleton } from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BlogCard } from "../ui";
import { WordPressPost } from "@/types";
import { useEffect, useState } from "react";
import { getPosts } from "@/lib/api";

export function ProjectsSection() {
    const [posts, setPosts] = useState<WordPressPost[]>();

    useEffect(() => {
        async function getData() {
            const data = await getPosts({ max: 6, category: "Project" });

            setPosts((await data).posts);
        }
        getData();
    }, []);

    if (posts && posts.length === 0) return null;

    return (
        <section id="projects" style={{ paddingTop: "4rem" }}>
            <SectionHeading title="Projects" subtitle="Things I've built or am actively working on." />

            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {posts ? (
                    posts.map((post) => <BlogCard key={post.slug} post={post} />)
                ) : (
                    <>
                        <Skeleton h={196} />
                        <Skeleton h={196} />
                    </>
                )}
            </SimpleGrid>

            <Group mt="lg">
                <Anchor
                    component={Link}
                    href="/projects"
                    size="sm"
                    c="accent.5"
                    style={{ display: "flex", alignItems: "center", gap: 4 }}
                >
                    All projects <IconArrowRight size={14} />
                </Anchor>
            </Group>
        </section>
    );
}
