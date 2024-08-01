import React from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';
import { Button, ButtonTheme } from 'shared/ui';
import { LoginModal } from 'features/AuthByUserName';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const {
        className,
    } = props;

    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = React.useState(false);

    const onCloseModal = React.useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = React.useCallback(() => {
        setIsAuthModal(true);
    }, []);

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
