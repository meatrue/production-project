import React from 'react';

import { classNames } from 'shared/lib';

import cls from './Loader.module.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = ({ className }) => (
    <div className={classNames(className, {}, [cls.Loader])}>
        <div className={classNames(cls.roller)}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    </div>
);
