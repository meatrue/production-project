import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib';
import { Button, ButtonTheme } from 'shared/ui';

import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className } = props;

    const { t, i18n } = useTranslation();

    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={toggleLang}
            theme={ButtonTheme.CLEAR}
        >
            {t('Язык')}
        </Button>
    );
};