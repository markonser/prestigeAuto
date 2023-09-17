import React from 'react';
import {Badge} from 'react-bootstrap';
import './fixed-filter.scss';

function FixedFilter({title,arr, onClickHandler, searchByField, serchText, filterActive,setFilterActive}) {
  let counter = arr.filter((el) => el[searchByField]?.toLowerCase().includes(serchText.toLowerCase()));
  function doFilter() {
    setFilterActive(serchText);
    onClickHandler(counter);
  }
  return (
    <div className='fixed_search_container'>
      <Badge
        bg={filterActive === serchText ? 'warning' : 'light'}
        text="dark"
      >
        <div className="fixed_search" onClick={doFilter} title='Фильтровать по критерию'>
        {title}
        <div className="counter">{counter.length}</div></div>
      </Badge>
    </div>
  );
}


export default FixedFilter;
