import React from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui';

const MainPage: React.FC = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = React.useState('');

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div>
            <h1>{t('Главная страница')}</h1>
            <br />
            <br />
            <div style={{ width: 500, padding: 20, border: '1px solid #464646' }}>
                <Input
                    value={value}
                    label={t('Введите данные:')}
                    onChange={onChange}
                    id="some_input"
                />
            </div>
        </div>
    );
};

export default MainPage;
