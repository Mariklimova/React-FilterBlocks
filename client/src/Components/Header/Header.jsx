import { Link } from 'react-router-dom'
import style from './header.module.scss'
function Header() {
    return <>
        <div className={style.header}>
            <div className={style.headerImg}></div>
            <h1>Jobored</h1>
            <div className={style.nav}>
                <p><Link to={'/'}>Поиск Вакансий</Link></p>
                <p><Link to={'/basket'}>Избранное</Link></p>

            </div>
        </div>
    </>
}

export default Header