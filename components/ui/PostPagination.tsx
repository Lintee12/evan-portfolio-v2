"use client";

import { WordPressResponse } from "@/types";
import { Button, Loader, SimpleGrid, Stack, Text } from "@mantine/core";
import { BlogCard } from "./BlogCard";
import { useEffect, useRef, useState } from "react";

export interface PostPaginationProps {
    pagination?: boolean;
    onLoadMore?: () => Promise<WordPressResponse>;
    onPageLoaded?: () => void;
}

export function PostPagination({ pagination = true, onLoadMore, onPageLoaded }: PostPaginationProps) {
    const [posts, setPosts] = useState<WordPressResponse["posts"]>([]);
    const [found, setFound] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const initializedRef = useRef(false);

    // Initial load — only once
    useEffect(() => {
        if (initializedRef.current || !onLoadMore) return;
        initializedRef.current = true;

        async function loadInitial() {
            setLoading(true);
            try {
                const res = await onLoadMore!();
                setPosts(res.posts);
                setFound(res.found);
                setHasMore(res.posts.length < res.found);
                onPageLoaded?.();
            } catch (err) {
                console.error("Failed to load posts", err);
            } finally {
                setLoading(false);
            }
        }

        loadInitial();
    }, []);

    async function handleLoadMore() {
        if (!onLoadMore || loading || !hasMore) return;

        setLoading(true);

        try {
            const more = await onLoadMore();
            const merged = [...posts, ...more.posts];
            setPosts(merged);
            setFound(more.found);
            setHasMore(merged.length < more.found);
            onPageLoaded?.();
        } catch (err) {
            console.error("Failed to load more posts", err);
        } finally {
            setLoading(false);
        }
    }

    if (loading && posts.length === 0) {
        return (
            <Text c="dimmed" size="sm">
                Loading <Loader size={10} />
            </Text>
        );
    }

    if (!loading && found === 0) {
        return (
            <Text c="dimmed" size="sm">
                No posts yet — check back soon.
            </Text>
        );
    }

    return (
        <Stack align="center">
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </SimpleGrid>

            {pagination && onLoadMore && hasMore && (
                <Button onClick={handleLoadMore} loading={loading}>
                    Load More
                </Button>
            )}
        </Stack>
    );
}
