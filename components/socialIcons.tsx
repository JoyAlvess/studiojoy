import style from './socialIcons.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import facebook from '../public/img/facebook.png';
import instagram from '../public/img/instagram.png';
import tiktok from '../public/img/tiktok.png';

export default function redesSociais() {
    return (
        <>
            <footer className={style.container}>
                <section className={style.containerItens}>
                    <h3>Redes Sociais</h3>
                    <div className={style.icons}>
                        <Link href="#">
                            <a>
                                <Image
                                    src={facebook}
                                    alt="Facebook"
                                />
                            </a>
                        </Link>

                        <Link href="#">
                            <a>
                                <Image
                                    src={instagram}
                                    alt="Instagram"
                                />
                            </a>
                        </Link>
                        <Link href="#">
                            <a>
                                <Image
                                    src={tiktok}
                                    alt="Tik-Tok"
                                />
                            </a>
                        </Link>
                    </div>
                </section>


            </footer>
        </>
    );
}