import { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        theme,
        className,
        children,
        ...otherProps
    } = props;

    return (
        <button
            className={classNames(cls.Button, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};