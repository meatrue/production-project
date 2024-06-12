import { classNames, useTheme, Theme } from 'shared/lib';

import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ButtonTheme } from 'shared/ui';

import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { theme, toggleTheme} = useTheme();

    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
            theme={ButtonTheme.CLEAR}
        >
            <ThemeIcon width={24} height={24} />
        </Button>
    );
};