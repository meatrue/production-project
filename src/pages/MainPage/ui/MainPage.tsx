import React from 'react';
import { useTranslation } from 'react-i18next';

import { Counter } from 'entities/Counter';

const MainPage: React.FC = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            <Counter />
        </div>
    );
};

export default MainPage;
