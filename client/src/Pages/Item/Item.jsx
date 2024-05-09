import { useParams } from 'react-router-dom'
import arr from '../../Storage/arr.json'
import style from './item.module.scss'
function Item() {

    const { id } = useParams()

    const [result] = arr.filter((el) => el.id === +id);

    return <>
        <div className={style.info}>
            <div className={style.item}>
                <h3>{result.name}</h3>
                <div className={style.salary_workday}>
                    <h2>{result.salary}</h2>
                    <div className={style.point}></div>
                    <p>{result.workday}</p>
                </div>
                <div className={style.city}>
                    <div className={style.img}></div>
                    <p>{result.city}</p>
                </div>

            </div>

            <div className={style.description}>
                <h2>Обязанности:</h2>
                <ul>{result.responsibilities.map((el) => <li>{el}</li>)}</ul>

                <h2>Требования:</h2>
                <ul>{result.requirements.map((el) => <li>{el}</li>)}</ul>

                <h2>Условия:</h2>
                <ul>{result.conditions.map((el) => <li>{el}</li>)}</ul>

            </div>
        </div>
    </>

}

export default Item