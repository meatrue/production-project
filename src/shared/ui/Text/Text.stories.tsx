import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib';
import { Text, TextTheme } from './Text';

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
} as Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        title: 'Обычный заголовок',
        text: 'Немного текста. Немного текста. Немного текста',
    },
};

export const OnlyTitle: Story = {
    args: {
        title: 'Обычный заголовок',
    },
};

export const OnlyText: Story = {
    args: {
        text: 'Немного текста. Немного текста. Немного текста',
    },
};

export const PrimaryDark: Story = {
    args: {
        title: 'Обычный заголовок',
        text: 'Немного текста. Немного текста. Немного текста',
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
    args: {
        title: 'Обычный заголовок',
    },
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTextDark: Story = {
    args: {
        text: 'Немного текста. Немного текста. Немного текста',
    },
};

OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error: Story = {
    args: {
        title: 'Обычный заголовок',
        text: 'Немного текста. Немного текста. Немного текста',
        theme: TextTheme.ERROR,
    },
};
