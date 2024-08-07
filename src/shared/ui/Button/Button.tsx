import React, { ButtonHTMLAttributes } from 'react';

import { classNames } from 'shared/lib';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINED = 'outlined',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    M = 'sizeM',
    L = 'sizeL',
    XL = 'sizeXL',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme;
    size?: ButtonSize;
    square?: boolean;
    className?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
    const {
        theme,
        size,
        square,
        className,
        children,
        disabled,
        ...otherProps
    } = props;

    const buttonSize = size ?? ButtonSize.M;

    return (
        <button
            type="button"
            className={classNames(
                cls.Button,
                {
                    [cls.square]: square,
                    [cls.disabled]: disabled,
                },
                [className, cls[theme], cls[buttonSize]],
            )}
            {...otherProps}
        >
            {children}
        </button>
    );
};
