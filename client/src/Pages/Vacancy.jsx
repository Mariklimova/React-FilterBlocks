import { TextField, Button, Pagination } from '@mui/material';
import style from './style.module.scss'

function Vacancy() {
    const arr = [{ name: 'Менеджер-дизайнер', salary: 'з/п от 70000 rub', workday: 'Полный рабочий день', city: 'Новый Уренгой' },
    { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
    { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' },
    { name: 'Ведущий графический дизайнер НЕ УДАЛЕННО', salary: 'з/п от 80000 rub', workday: 'Полный рабочий день', city: 'Москва' },
    { name: 'Работник декорации, дизайнер (ТЦ Амбар)', salary: 'з/п 29000 rub', workday: 'Сменный график работы', city: 'Самара' },
    { name: 'Менеджер-дизайнер', salary: 'з/п 55000 - 95000 rub', workday: 'Полный рабочий день', city: 'Тюмень' }]

    return <div className={style.wrapper}>
        <div className={style.form}>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>
        </div>
        <div className={style.info}>
            {arr.map((el, i) => <div className={style.item} key={i}>
                <h2>{el.name}</h2>
                <div className={style.salary_workday}>
                    <p>{el.salary}</p>
                    <div className={style.point}></div>
                    <p>{el.workday}</p>
                </div>
                <div className={style.city}>
                    <div className={style.img}></div>
                    <p>{el.city}</p>
                </div>

            </div>

            )}

        </div>

        <Pagination count={10} variant="outlined" color="secondary" />

    </div>

}



export default Vacancy