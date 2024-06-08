import React from 'react';
import classes from './Counter.module.scss';

export const Counter: React.FC = () => {
    const [value, setValue] = React.useState(0);

    const increment = () => {
        setValue(value + 1);
    };

    return (
        <div>
            <h2 className={classes.counterText}>{value}</h2>
            <button className={classes.incrementButton} onClick={increment}>
                Увеличить
            </button> 
        </div>
    );
};