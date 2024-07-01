import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { AppLink, Button, ButtonTheme } from 'shared/ui';
import { ButtonSize } from 'shared/ui/Button/Button';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { routePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const [isCollapsed, setIsCollapsed] = React.useState<boolean>(false);

    const onToggle = () => {
        setIsCollapsed((isCollapsed) => !isCollapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: isCollapsed }, [className])
            }
        >

            <div className={cls.items}>
                <AppLink
                    to={routePath.main}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.navLink}
                >
                    <span className={cls.iconContainer}>
                        <HomeIcon className={cls.icon} />
                    </span>
                    <span className={classNames(cls.linkText, { [cls.hidden]: isCollapsed })}>
                        {t('Главная страница')}
                    </span>
                </AppLink>
                <AppLink
                    to={routePath.about}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.navLink}
                >
                    <span className={cls.iconContainer}>
                        <AboutIcon className={cls.icon} />
                    </span>
                    <span className={classNames(cls.linkText, { [cls.hidden]: isCollapsed })}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>

            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                size={ButtonSize.L}
                square
                className={cls.collapseButton}
            >
                <span className={cls.collapseLabel}>{'<'}</span>
            </Button>
        </div>
    );
};
