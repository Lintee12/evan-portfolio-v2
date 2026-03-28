import { Group, Badge } from "@mantine/core";

interface TagListProps {
    tags: string[];
}

export function TagList({ tags }: TagListProps) {
    return (
        <Group gap={6} wrap="wrap">
            {tags.map((tag) => (
                <Badge key={tag} variant="outline" color="accent" size="xs" radius="xs">
                    {tag}
                </Badge>
            ))}
        </Group>
    );
}
