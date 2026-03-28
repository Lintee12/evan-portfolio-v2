import { WordPressPost, WordPressResponse } from "@/types";
import { cache } from "react";

const API_BASE = "https://public-api.wordpress.com/rest/v1.1/sites/testing66461.wordpress.com";

export const getPosts = cache(
    async ({ max = 10, page = 1, category = "" }: { max?: number; page?: number; category?: string }) => {
        const data = await fetch(`${API_BASE}/posts?number=${max}&page=${page}${category ? `&category=${category}` : ""}`);
        const response: WordPressResponse = await data.json();

        return response;
    },
);

export const getPost = cache(async (slug: string) => {
    const data = await fetch(`${API_BASE}/posts/slug:${slug}`);
    const response: WordPressPost = await data.json();

    return response;
});
