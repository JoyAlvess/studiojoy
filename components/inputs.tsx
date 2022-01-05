import React from 'react';
import style from './inputs.module.scss';

interface InputsProps {
    type: string;
    placeholder: string;
}

export default function inputs({ type, placeholder }: InputsProps) {
    return (
        <>
            <form action="" className={style.containerInputs}>
                <input className={style.name} type={type} placeholder={placeholder} required />
            </form>

        </>
    );
}