import React, {FC} from 'react';
import {Display} from "../display/Display";
import {Button} from "../../button/Button";
import {ButtonsName} from "../counter";

type MainPropsType = {
    minValue: number
    maxValue: number
    status: string
    currentValue: number
    incrementHandler: ()=> void
}
export const Main: FC<MainPropsType> = ({
minValue,
maxValue,
status,
currentValue,
incrementHandler
}) => {
    return (
        <>
            <Display>
                <span>{currentValue}</span>
            </Display>
            <Button name={ButtonsName.inc}
                    onClick={incrementHandler}
            />
        </>
    )
}
