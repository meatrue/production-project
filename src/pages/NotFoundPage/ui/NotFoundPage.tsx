import React from 'react';
import { useTranslation } from 'react-i18next';

import classNames from './NotFoundPage.module.scss';

export const NotFoundPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <div className={classNames.NotFoundPage}>
            <h1>{t('Страница не найдена')}</h1>
        </div>
    );
};
