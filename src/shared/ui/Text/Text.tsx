import React from 'react';
import { classNames } from 'shared/lib';

import cls from './Text.module.scss';

export enum TextTheme {
    PRIMARY = 'primary',
    ERROR = 'error',
}

interface TextProps {
    className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
}

export const Text: React.FC<TextProps> = (props) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.TextWrapper, {}, [className, cls[theme]])}>
            {!!title && <p className={cls.title}>{title}</p>}
            {!!text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
