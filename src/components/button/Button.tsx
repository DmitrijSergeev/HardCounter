import React, {FC} from 'react';

type ButtonType = {
    name: string
    onClick: ()=> void
}
export const Button: FC<ButtonType> = ({name, onClick}) => {
    return (
        <button
            onClick={onClick}
        >
            {name}
        </button>
    );
};
