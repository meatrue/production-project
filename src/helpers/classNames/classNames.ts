type Mods = Record<string, string | boolean>;

export const classNames = (
    className: string, 
    mods: Mods, 
    additionalClassNames: string[]
): string => {
    return [
        className,
        ...additionalClassNames,
        ...Object.entries(mods)
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className)
    ]
        .join(' ');
};