import { TextField, Button, Pagination } from '@mui/material';
import style from './style.module.scss'
import { useEffect, useState } from 'react';
import arr from '../../Storage/arr.json'
import { Link } from 'react-router-dom';

function Vacancy() {
    // const arr = [{ name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    // { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    // { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    // { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
    // { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    // { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    // { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
    // { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    // { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    // { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }]


    const [vacanciesIndex, setVacanciesIndex] = useState(0);
    const [PageNumber, setPageNumber] = useState(1);

    // const lastIndex = vacanciesOnThePage * paginalPageNumber;
    // const firstIndex = lastIndex - vacanciesOnThePage;
    // const displayedArray = arr.slice(firstIndex, lastIndex);

    // function getIndex() {
    //     setVacanciesIndex(vacanciesIndex + 4)
    // }
    // const index = getIndex()
    // console.log(index);

    const displayVacancy = arr.filter((el, i) => i >= 0 && i < 4)

    // useEffect(() => {
    //     getIndex()
    // }, [])



    return <div className={style.wrapper}>
        <div className={style.form}>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>
        </div>
        <div className={style.info}>
            {displayVacancy.map((el, i) => <Link to={`/${el.id}/${el.name}`} key={i}><div className={style.item} key={i}>
                <h3>{el.name}</h3>
                <div className={style.salary_workday}>
                    <h2>{el.salary}</h2>
                    <div className={style.point}></div>
                    <p>{el.workday}</p>
                </div>
                <div className={style.city}>
                    <div className={style.img}></div>
                    <p>{el.city}</p>
                </div>

            </div>
            </Link>
            )}

        </div>

        <Pagination onChange={setPageNumber} count={10} variant="outlined" color="secondary" />

    </div>

}



export default Vacancy