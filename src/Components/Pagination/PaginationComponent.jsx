import {Pagination } from '@mui/material';
import PropTypes from 'prop-types';

 export default function PaginationComponent({page,count, onChange}) {
  
  return <>
    <Pagination page={page} onChange={onChange} count={count} variant="outlined" color="primary" />
  </>
}

PaginationComponent.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
