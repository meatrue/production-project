import { classNames } from 'shared/lib';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

import cls from './Navbar.module.scss';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher/ui/LangSwitcher';

interface NavbarProps {
    className?: string;
}

export const Navbar: React.FC<NavbarProps> = (props) => {
    const {
        className
    } = props;

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.switchersWrapper}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
            
            <div className={cls.links}>
                <AppLink to='/' theme={AppLinkTheme.SECONDARY}>
                    Главная
                </AppLink>
                <AppLink to='/about' theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </div>
        </div>  
    );
};