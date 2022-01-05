import style from './subTitle.module.scss';

interface SubTitleProps{
    text: string;
}

export default function SubTitle({ text }: SubTitleProps) {
    return (
        <h2 className={style.subTitle}>{text}</h2>
    );
}