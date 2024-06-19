import React from 'react';

import { classNames } from 'shared/lib';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;

    const [collapsed, setCollapsed] = React.useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((isCollapsed) => !isCollapsed);
    };

    return (
        <div className={
            classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])
        }
        >
            <button type="button" onClick={onToggle}>toggle</button>
        </div>
    );
};
