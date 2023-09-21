import React, {FC, useState} from 'react';
import {Main} from "./main/Main";
import {Settings} from './settings/Settings';

type CounterPropsType = {
    id: number
    min: number
    max: number
}
export const Counter: FC<CounterPropsType> = ({id, min, max}) => {
    const [status, setStatus] = useState('')

    return (
        <div>
            {!status ? (
                <Main/>
            ) : (
                <Settings/>)
            }
        </div>
    );
};
