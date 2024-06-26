import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button } from 'shared/ui';

import 'app/styles/index.scss';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: React.FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <h1 className={cls.title}>
                {t('Произошла непредвиденная ошибка')}
            </h1>
            <Button className={cls.reload} onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
