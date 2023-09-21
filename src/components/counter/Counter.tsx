import React, {FC, useState} from 'react';
import {Main} from "./main/Main";
import {Settings} from './settings/Settings';

type CounterPropsType = {
    id: number
    min: number
    max: number
}
export const Counter: FC<CounterPropsType> = ({id, min, max}) => {
    const [minValue, setMinValue] = useState(min)
    const [maxValue, setMaxValue] = useState(min)
    const [currentValue, setCurrentValue] = useState(minValue)
    const [status, setStatus] = useState('')

    const incrementHandler = ()=> currentValue < maxValue &&
        setCurrentValue( prev => prev +1);

    return (
        <div>
            {!status ? (
                <Main
                    minValue={minValue}
                    maxValue={maxValue}
                    status={status}
                    currentValue={currentValue}
                    incrementHandler={incrementHandler}
                />
            ) : (
                <Settings/>)
            }
        </div>
    );
};
