export type SkillLevel = "expert" | "proficient" | "familiar";

export interface Skill {
    name: string;
    level: SkillLevel;
}

export interface SkillCategory {
    id: string;
    label: string;
    /** Tabler icon name to import, e.g. "IconServer" */
    icon: string;
    skills: Skill[];
}

export interface WordPressAuthor {
    ID: number;
    login: string;
    email: string | false;
    name: string;
    first_name: string;
    last_name: string;
    nice_name: string;
    URL: string;
    avatar_URL: string;
    profile_URL: string;
    site_ID: number;
}

export interface WordPressDiscussion {
    comments_open: boolean;
    comment_status: string;
    pings_open: boolean;
    ping_status: string;
    comment_count: number;
}

export interface WordPressCategoryMetaLinks {
    self: string;
    help: string;
    site: string;
}

export interface WordPressCategoryMeta {
    links: WordPressCategoryMetaLinks;
}

export interface WordPressCategory {
    ID: number;
    name: string;
    slug: string;
    description: string;
    post_count: number;
    parent: number;
    meta: WordPressCategoryMeta;
}

export interface WordPressTerms {
    category: Record<string, WordPressCategory>;
    post_tag: Record<string, unknown>;
    post_format: Record<string, unknown>;
    mentions: Record<string, unknown>;
}

export interface WordPressMetaLinks {
    self: string;
    help: string;
    site: string;
    replies?: string;
    likes?: string;
}

export interface WordPressMeta {
    links: WordPressMetaLinks;
}

export interface WordPressCapabilities {
    publish_post: boolean;
    delete_post: boolean;
    edit_post: boolean;
}

export interface WordPressPost {
    ID: number;
    site_ID: number;
    author: WordPressAuthor;
    date: string;
    modified: string;
    title: string;
    URL: string;
    short_URL: string;
    content: string;
    excerpt: string;
    slug: string;
    guid: string;
    status: string;
    sticky: boolean;
    password: string;
    parent: boolean;
    type: string;
    discussion: WordPressDiscussion;
    likes_enabled: boolean;
    sharing_enabled: boolean;
    like_count: number;
    i_like: boolean;
    is_reblogged: boolean;
    is_following: boolean;
    global_ID: string;
    featured_image: string;
    post_thumbnail: string | null;
    format: string;
    geo: boolean;
    menu_order: number;
    page_template: string;
    publicize_URLs: string[];
    terms: WordPressTerms;
    tags: Record<string, unknown>;
    categories: Record<string, WordPressCategory>;
    attachments: Record<string, unknown>;
    attachment_count: number;
    metadata: any[];
    meta: WordPressMeta;
    capabilities: WordPressCapabilities;
    other_URLs: Record<string, unknown>;
}

export interface WordPressResponse {
    found: number;
    posts: WordPressPost[];
}

export interface NavLink {
    label: string;
    href: string;
    /** If true, open in new tab */
    external?: boolean;
}

export interface SiteConfig {
    name: string;
    title: string;
    description: string;
    url: string;
    socials: {
        github?: string;
        linkedin?: string;
        email?: string;
        twitter?: string;
    };
}
