import { Group, Badge } from "@mantine/core";

interface TagListProps {
    tags: string[];
}

export function TagList({ tags }: TagListProps) {
    return (
        <Group gap={6} wrap="wrap">
            {tags.map((tag) => (
                <Badge
                    key={tag}
                    variant="light"
                    color="accent"
                    size="xs"
                    radius="sm"
                    style={{ textTransform: "none", fontWeight: 500, letterSpacing: "0.01em" }}
                >
                    {tag}
                </Badge>
            ))}
        </Group>
    );
}
