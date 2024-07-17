import { TextField, Button, Pagination } from '@mui/material';
import style from './style.module.scss'
import { useEffect, useState } from 'react';
import arr from '../../Storage/arr.json'
import { Link } from 'react-router-dom';
import NotFound from '../../Components/NotFound/NotFound';
import Header from '../../Components/Header/Header';

function Vacancy() {

    const [LikedVacansies, setLikedVacansies] = useState(JSON.parse(localStorage.getItem('LikedArr')) || []);
    // const [flagColor, setFlagColor] = useState(style.starImg);


    const addToBasket = (el) => {
        const checkVacansies = LikedVacansies.filter((elem) => elem.id == el.id);
        if (!checkVacansies.length) {
            setLikedVacansies([...LikedVacansies, el]);
            localStorage.setItem('LikedArr', JSON.stringify([...LikedVacansies, el]));
            // setFlagColor(style.starImgColor);
        }
        console.log(LikedVacansies);
    }
    const vacancyCount = 4;
    const [page, setPage] = useState(1);

    const end = page * vacancyCount;
    const start = end - vacancyCount;
    const displayVacancy = arr.slice(start, end);

    
    return <div className={style.wrapper}>
        <Header />
        <div className={style.form}>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" />
            <Button variant="contained">Contained</Button>
        </div>
        <div className={style.info}>
            {displayVacancy.map((el, i) => <div className={style.item} key={i}>
                <Link to={`/${el.id}/${el.name}`}>
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
                </Link>
                <div className={style.starImg} onClick={() => addToBasket(el)}></div>
            </div>
            )}

        </div>

        {!arr.length ? <NotFound /> : null}
        <Pagination page={page} onChange={(e, num) => setPage(num)} count={Math.ceil(arr.length / vacancyCount)} variant="outlined" color="secondary" />

    </div>

}



export default Vacancy