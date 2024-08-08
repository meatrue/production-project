import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import {
    Button,
    ButtonTheme,
    Input,
    Text,
} from 'shared/ui';
import { TextTheme } from 'shared/ui/Text/Text';
import { loginActions } from '../../model/slice/loginSlice';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

import cls from './LoginForm.module.scss';

interface LoginModalProps {
    className?: string;
}

const LoginFormComponent: React.FC<LoginModalProps> = ({ className }) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username,
        password,
        isLoading,
        isError,
    } = useSelector(getLoginState);

    const onChangeUsername = React.useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = React.useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        dispatch(loginByUsername({ username, password }));
    };

    return (
        <form
            className={classNames(cls.LoginForm, {}, [className])}
            onSubmit={onLoginSubmit}
        >
            <Text title={t('Форма авторизации')} />
            {!!isError && (
                <Text
                    text={t('Вы ввели неверный логин или пароль')}
                    theme={TextTheme.ERROR}
                />
            )}
            <Input
                type="text"
                id="input_login"
                label={t('Введите логин')}
                autofocus
                value={username}
                onChange={onChangeUsername}
            />
            <Input
                type="text"
                id="input_password"
                label={t('Введите пароль')}
                value={password}
                onChange={onChangePassword}
            />
            <Button
                className={cls.loginButton}
                type="submit"
                theme={ButtonTheme.OUTLINED}
                disabled={isLoading}
            >
                {t('Войти')}
            </Button>
        </form>
    );
};

export const LoginForm = React.memo(LoginFormComponent);
