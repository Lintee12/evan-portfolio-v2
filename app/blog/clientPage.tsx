"use client";

import { PostPagination } from "@/components/ui/PostPagination";
import { getPosts } from "@/lib/api";
import { useRef } from "react";

export function BlogClientPage() {
    const pageRef = useRef(1);

    return (
        <PostPagination
            onLoadMore={() => {
                const currentPage = pageRef.current;
                return getPosts({
                    max: 6,
                    page: currentPage,
                    category: "Blog",
                });
            }}
            onPageLoaded={() => {
                pageRef.current += 1;
            }}
        />
    );
}
