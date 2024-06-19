import React from 'react';

import { classNames } from 'shared/lib';
import { Loader } from 'shared/ui';

import cls from './PageLoader.module.scss';

export const PageLoader: React.FC = () => (
    <div className={classNames(cls.PageLoader)}>
        <Loader />
    </div>
);
