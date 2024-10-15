import { TextField, Button} from '@mui/material';
import style from './style.module.scss'
import { useEffect, useState } from 'react';
import arr from '../../Storage/arr.json'
import { Link } from 'react-router-dom';
import NotFound from '../../Components/NotFound/NotFound';
import Header from '../../Components/Header/Header';
import PaginationComponent from '../../Components/Pagination/PaginationComponent'

export default function Vacancy() {
    const [search, setSearch] = useState('');
    const [flagSearch, setFlagSearch] = useState(false);

    const [allVacancies, setAllVacancies] = useState(arr)

    const likedVacanciesFromStorage = JSON.parse(localStorage.getItem('LikedArr'));
    const [LikedVacancies, setLikedVacanсies] = useState(Array.isArray(likedVacanciesFromStorage) ? likedVacanciesFromStorage : []);



    const addToBasket = (el) => {
        const checkVacansies = LikedVacancies.filter((elem) => elem.id === el.id);
        if (!checkVacansies.length) {
            const updatedVacancies = [...LikedVacancies, el];
            setLikedVacanсies(updatedVacancies);
            localStorage.setItem('LikedArr', JSON.stringify(updatedVacancies));

        }
    }

    const isLiked = (id) => LikedVacancies.some((vacancy) => vacancy.id === id);

    const vacancyCount = 4;
    const [page, setPage] = useState(1);

    const end = page * vacancyCount;
    const start = end - vacancyCount;
    const displayVacancy = allVacancies.slice(start, end);

    useEffect(() => {
        if (!search) {
            setAllVacancies(arr);
            setFlagSearch(false);
            return;
        }
        const filtVacancies = arr.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()));
        setAllVacancies(filtVacancies);
        setFlagSearch(false);
    }, [flagSearch, search])

    return <div className={style.wrapper}>
        <Header />
        <div className={style.form}>
            <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" onChange={(e) => setSearch(e.target.value)} />
            <Button variant="contained" onClick={() => setFlagSearch(true)}>Contained</Button>
        </div>
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
                <div className={`${style.starImg} ${isLiked(el.id) ? style.starImgLight : ''}`} onClick={() => addToBasket(el)}></div>
            </div>
            )}

        </div>

        {!allVacancies.length ? <NotFound /> : null}
        <PaginationComponent page={page} onChange={(e, num) => setPage(num)} count={Math.ceil(allVacancies.length / vacancyCount)} />

    </div>

}
