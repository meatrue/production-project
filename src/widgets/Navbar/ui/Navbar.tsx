import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.switchersWrapper}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

            <div className={cls.links}>
                <AppLink to="/" theme={AppLinkTheme.SECONDARY}>
                    {t('Главная страница')}
                </AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
