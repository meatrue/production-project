import React, { InputHTMLAttributes } from 'react';

import { classNames } from 'shared/lib';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    label?: string;
    id: string;
    autofocus?: boolean;
}

const InputComponent: React.FC<InputProps> = (props) => {
    const {
        className,
        value,
        onChange,
        label,
        type = 'text',
        id,
        autofocus,
        ...otherProps
    } = props;
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!autofocus) return;

        inputRef.current.focus();
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <label className={classNames(cls.InputWrapper, {}, [className])} htmlFor={id}>
            {!!label && <p className={cls.labelText}>{label}</p>}
            <input
                ref={inputRef}
                type={type}
                value={value}
                onChange={onChangeHandler}
                id={id}
                {...otherProps}
            />
        </label>
    );
};

export const Input = React.memo(InputComponent);
