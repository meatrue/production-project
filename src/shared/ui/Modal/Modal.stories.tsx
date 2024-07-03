import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'shared/lib';
import { Modal } from './Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: '',
        isOpen: true,
    },
};

export const PrimaryDark: Story = {
    args: {
        children: '',
        isOpen: true,
    },
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];
