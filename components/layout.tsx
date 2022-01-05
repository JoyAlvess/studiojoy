/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/img/logo.png';
import style from './layout.module.scss';

interface LayoutProps {
    children: JSX.Element;
    title: string;
}

export default function Layout({ children, title }: LayoutProps) {
    return (
        <>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Sansita:wght@400;700;800;900&family=Sarabun:wght@100;200;300;400;500;600&display=swap"
                    rel="stylesheet"
                />
                <title>StudioJoy</title>
            </Head>
            <section className={style.containerLayout}>
                <Link href="/">
                    <a className={style.logo}>
                        <Image
                            src={logo}
                            alt="Logo StudioJoy"
                        />
                    </a>
                </Link>
                <h1>{title}</h1>
            </section>
            <main className={style.containerMain}>{children}</main>
        </>
    );
}