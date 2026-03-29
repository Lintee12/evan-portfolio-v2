import { Box } from "@mantine/core";
import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function HomePage() {
    return (
        <PageShell>
            <HeroSection />
            <Box style={{ height: 1, background: "var(--border-color)" }} my="xl" />
            <ProjectsSection />
            <Box style={{ height: 1, background: "var(--border-color)" }} my="xl" />
            <SkillsSection />
            <Box style={{ height: 1, background: "var(--border-color)" }} my="xl" />
            <BlogSection />
        </PageShell>
    );
}
