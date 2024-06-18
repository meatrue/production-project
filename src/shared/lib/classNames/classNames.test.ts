import { classNames } from './classNames';

describe('classNames', () => {
    test('With only first param', () => {
        expect(classNames('className')).toBe('className');
    });

    test('With additional classes', () => {
        const expected = 'className class1 class2';
        expect(classNames(
            'className',
            {},
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('With mods', () => {
        const expected = 'className class1 class2 hovered outlined';
        expect(classNames(
            'className',
            { hovered: true, outlined: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('With mods false', () => {
        const expected = 'className class1 class2 outlined';
        expect(classNames(
            'className',
            { hovered: false, outlined: true },
            ['class1', 'class2'],
        )).toBe(expected);
    });

    test('With mods undefined', () => {
        const expected = 'className class1 class2 hovered';
        expect(classNames(
            'className',
            { hovered: true, outlined: undefined },
            ['class1', 'class2'],
        )).toBe(expected);
    });
});
