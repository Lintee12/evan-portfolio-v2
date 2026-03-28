import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Suspense } from "react";
import { BlogClientPage } from "./clientPage";

export const metadata: Metadata = {
    title: "Blog",
    description: "Writing about networking, systems, and automation.",
};

export default async function BlogPage() {
    return (
        <PageShell>
            <SectionHeading title="Writing" subtitle="Notes, guides, and things I've figured out." order={1} />

            <BlogClientPage />
        </PageShell>
    );
}
