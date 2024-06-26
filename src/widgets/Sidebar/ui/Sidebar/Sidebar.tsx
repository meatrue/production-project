import React from 'react';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;

    const { t } = useTranslation();

    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((isCollapsed) => !isCollapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={
                classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
            }
        >
            <Button
                type="button"
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('Переключить')}
            </Button>
        </div>
    );
};
