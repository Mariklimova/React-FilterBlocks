import {Pagination } from '@mui/material';
 
 export default function PaginComponent(allVacancies) {
  const vacancyCount = 4;
  const [page, setPage] = useState(1);

  const end = page * vacancyCount;
  const start = end - vacancyCount;
  // const displayVacancy = allVacancies.slice(start, end);

  return <>
    <Pagination page={page} onChange={(e, num) => setPage(num)} count={Math.ceil(allVacancies.length / vacancyCount)} variant="outlined" color="primary" />
  </>
}

