import style from './notFound.module.scss'

export default function NotFound() {
    return <>
        <div className={style.wrapper}>
            <div className={style.notFoundImg}></div>
            <p>Упс, здесь еще ничего нет!</p>
        </div>
    </>
}
