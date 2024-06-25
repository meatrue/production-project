import { Decorator } from '@storybook/react';
import { Theme } from 'shared/lib';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
    <div className={`app ${theme}`}>
        <Story />
    </div>
);
