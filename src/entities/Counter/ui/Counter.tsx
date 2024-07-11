import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, ButtonTheme } from 'shared/ui';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter: React.FC = () => {
    const dispatch = useDispatch();

    const value = useSelector(getCounterValue);

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h2 data-testid="value-title">{value}</h2>
            <Button
                onClick={increment}
                theme={ButtonTheme.OUTLINED}
                data-testid="increment-button"
            >
                +
            </Button>
            <Button
                onClick={decrement}
                theme={ButtonTheme.OUTLINED}
                data-testid="decrement-button"
            >
                -
            </Button>
        </div>
    );
};
