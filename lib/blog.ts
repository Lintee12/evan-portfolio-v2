import { WordPressPost } from "@/types";

export function estimateReadingTime(content: string): number {
    const words = content.trim().split(/\s+/).length;
    return Math.max(1, Math.round(words / 200));
}

export function getCategories(post: WordPressPost) {
    return Object.values(post.categories || {}).map((cat) => cat.name);
}

export function sanitizeWordPressContent(html: string): string {
    return html
        .replace(/<img([^>]*)\s+width="[^"]*"/g, "<img$1")
        .replace(/<img([^>]*)\s+height="[^"]*"/g, "<img$1")
        .replace(/<img([^>]*)\s+style="[^"]*"/g, "<img$1");
}
