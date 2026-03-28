import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getPosts } from "@/lib/api";
import { SimpleGrid, Text } from "@mantine/core";
import { BlogCard } from "@/components/ui";
import { ProjectsClientPage } from "./clientPage";

export const metadata: Metadata = {
    title: "Projects",
    description: "Things I have built.",
};

export default async function ProjectsPage() {
    const data = await getPosts({ max: 8, category: "Project" });

    return (
        <PageShell>
            <SectionHeading title="Projects" subtitle="Things I've built or am actively working on." order={1} />

            <ProjectsClientPage />
        </PageShell>
    );
}
