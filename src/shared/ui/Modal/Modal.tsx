import React from 'react';

import { classNames } from 'shared/lib';
import { Portal } from 'shared/ui';

import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

const ANIMATION_DELAY = 300;

export const Modal: React.FC<ModalProps> = (props) => {
    const {
        children,
        className,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [isMounted, setIsMounted] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState<boolean>(false);
    const timerRef = React.useRef<ReturnType<typeof setTimeout>>();

    const closeHandler = React.useCallback(() => {
        if (!onClose) return;

        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, ANIMATION_DELAY);
    }, [onClose]);

    const onKeyDown = React.useCallback((e: KeyboardEvent) => {
        if (e.key !== 'Escape') return;

        closeHandler();
    }, [closeHandler]);

    React.useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    React.useEffect(() => {
        if (!isOpen) return;

        setIsMounted(true);
    }, [isOpen]);

    const mods: Record<string, boolean> = {
        [cls.open]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div
                className={classNames(cls.Modal, mods, [className])}
                data-modal
            >
                <div className={cls.overlay} onClick={closeHandler} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
