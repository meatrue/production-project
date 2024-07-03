import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: 'Текст',
    },
};

export const PrimaryL: Story = {
    args: {
        children: 'Текст',
        size: ButtonSize.L,
    },
};

export const PrimaryXL: Story = {
    args: {
        children: 'Текст',
        size: ButtonSize.XL,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Текст',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR,
    },
};

ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearInverted: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

export const ClearInvertedDark: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.CLEAR_INVERTED,
    },
};

ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Outlined: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
    },
};

export const OutlinedL: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.L,
    },
};

export const OutlinedXL: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
        size: ButtonSize.XL,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
    },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.BACKGROUND,
    },
};

export const InvertedBackground: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const Square: Story = {
    args: {
        children: '>',
        square: true,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.L,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};

export const SquareSizeXL: Story = {
    args: {
        children: '>',
        square: true,
        size: ButtonSize.XL,
        theme: ButtonTheme.BACKGROUND_INVERTED,
    },
};
