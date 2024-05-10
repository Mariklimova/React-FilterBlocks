import { TextField, Button, Pagination } from '@mui/material';
import style from './style.module.scss'
import { useEffect, useState } from 'react';
import arr from '../../Storage/arr.json'
import { Link } from 'react-router-dom';

function Vacancy() {
   
    const vacancyCount = 4;
    const [page, setPage] = useState(1);

    const end = page * vacancyCount;
    const start = end - vacancyCount;
    // const displayVacancy = arr.slice(start, end);
    const displayVacancy = arr.filter((el, i) => i >= start && i < end)


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

        <Pagination page={page} onChange={(_, num) => setPage(num)} count={Math.ceil(arr.length / vacancyCount)} variant="outlined" color="secondary" />

    </div>

}



export default Vacancy