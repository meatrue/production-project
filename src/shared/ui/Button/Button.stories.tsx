import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib';
import { Button, ButtonTheme } from './Button';

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

export const Outlined: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
    },
};

export const OutlinedDark: Story = {
    args: {
        children: 'Текст',
        theme: ButtonTheme.OUTLINED,
    },
};

OutlinedDark.decorators = [ThemeDecorator(Theme.DARK)];
