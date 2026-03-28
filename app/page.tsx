import { Divider } from "@mantine/core";
import { PageShell } from "@/components/layout/PageShell";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function HomePage() {
    return (
        <PageShell>
            <HeroSection />
            <Divider my="xl" color="dark.7" />
            <ProjectsSection />
            <Divider my="xl" color="dark.7" />
            <SkillsSection />
            <Divider my="xl" color="dark.7" />
            <BlogSection />
        </PageShell>
    );
}
