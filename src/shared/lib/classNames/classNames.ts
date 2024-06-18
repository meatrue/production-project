type Mods = Record<string, string | boolean>;

export const classNames = (
    className: string,
    mods: Mods = {},
    additionalClassNames: string[] = [],
): string => [
    className,
    ...additionalClassNames.filter(Boolean),
    ...Object.entries(mods)
        .filter(([_, value]) => Boolean(value))
        .map(([cls]) => cls),
]
    .join(' ');
