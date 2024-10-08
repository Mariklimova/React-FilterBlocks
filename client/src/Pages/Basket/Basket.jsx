import { useEffect, useState } from "react"
import Header from "../../Components/Header/Header"
import style from './basket.module.scss'
import { Link } from "react-router-dom";
import NotFound from "../../Components/NotFound/NotFound";
import { Pagination } from "@mui/material";

export default function Basket() {

    const [newVacancies, setNewVacancies] = useState(JSON.parse(localStorage.getItem('LikedArr')) || []);

    const getLikedVacansies = () => {
        // const likedVacancies = JSON.parse(localStorage.getItem('LikedArr'));
        // setNewVacancies(likedVacancies ? likedVacancies : []);
        setNewVacancies(newVacancies)
    }

    const deleteLikedVacansies = (el) => {
        const deleteVacancies = newVacancies.filter((element) => element.id !== el.id)
        localStorage.setItem('LikedArr', JSON.stringify(deleteVacancies))
        setNewVacancies(deleteVacancies)
    }

    useEffect(() => {
        getLikedVacansies()
    }, []);


    const vacancyCount = 4;
    const [page, setPage] = useState(1);
    const end = page * vacancyCount;
    const start = end - vacancyCount;
    console.log(newVacancies);
    const displayVacancy = newVacancies.slice(start, end);

    return <div className={style.wrapper}>
        <Header />

        <div className={style.info}>
            {displayVacancy.map((el) => <div className={style.item} key={el.id}>
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
                <div className={style.starImg} onClick={() => deleteLikedVacansies(el)}></div>
            </div>
            )}

        </div>
        {!newVacancies.length ? <NotFound /> : null}
        <Pagination page={page} onChange={(e, num) => setPage(num)} count={Math.ceil(newVacancies.length / vacancyCount)} variant="outlined" color="secondary" />
    </div>
}
