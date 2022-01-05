import React from 'react'
import style from './button.module.scss';
import Link from 'next/link';
import Image from 'next/image';

interface ButtonProps {
    text: string;
    href: string;
}

export default function Button({ text, href }: ButtonProps) {
    return (
        <div className={style.containerButton}>
            <Link href={href} passHref>
                <a className={style.itensButton}>
                    <div className={style.text}>
                        <span>{text}</span>
                    </div>
                </a>
            </Link>
        </div>
    );
}