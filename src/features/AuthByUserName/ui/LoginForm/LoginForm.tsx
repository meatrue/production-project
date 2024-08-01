import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme, Input } from 'shared/ui';

import cls from './LoginForm.module.scss';

interface LoginModalProps {
    className?: string;
}

export const LoginForm: React.FC<LoginModalProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <form className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                id="input_login"
                label={t('Введите логин')}
                autofocus
            />
            <Input
                type="text"
                id="input_password"
                label={t('Введите пароль')}
            />
            <Button
                className={cls.loginButton}
                theme={ButtonTheme.OUTLINED}
            >
                {t('Войти')}
            </Button>
        </form>
    );
};
