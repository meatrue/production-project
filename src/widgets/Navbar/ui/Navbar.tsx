import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui';
import { LoginModal, loginActions } from 'features/AuthByUserName';
import { getUserAuthData, userActions } from 'entities/User';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const dispatch = useDispatch();
    const userAuthData = useSelector(getUserAuthData);
    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = React.useCallback(() => {
        dispatch(userActions.logout());
        dispatch(loginActions.reset());
        setIsAuthModal(false);
    }, [dispatch]);

    if (userAuthData) {
        return (
            <div className={classNames(cls.Navbar, {}, [className])}>
                <div className={cls.switchersWrapper}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>

                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.CLEAR_INVERTED}
                        onClick={onLogout}
                    >
                        {t('Выйти')}
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.switchersWrapper}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>

            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR_INVERTED}
                    onClick={onOpenModal}
                >
                    {t('Войти')}
                </Button>
            </div>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onCloseModal}
            />
        </div>
    );
};
