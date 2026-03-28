import type { SiteConfig, NavLink } from "@/types";

export const siteConfig: SiteConfig = {
    name: "Evan Linton",
    title: "Network and Systems Administrator",
    description: "I keep networks alive, secure, and fast. I also write about what I learn.",
    url: "https://evanlinton.dev",
    socials: {
        github: "https://github.com/lintee12",
        linkedin: "https://www.linkedin.com/in/evan-linton-04b170294/",
        email: "lintonevan@gmail.com",
    },
};

export const navLinks: NavLink[] = [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Blog", href: "/blog" },
];

export const bio: string[] = [
    "Network administrator with a focus on infrastructure reliability, security, and automation.",
    "I build things, break things intentionally, and write about what I learn along the way.",
];
