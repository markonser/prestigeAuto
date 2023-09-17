import React, {useState} from 'react';
import {Badge} from 'react-bootstrap';
import '../search/search.scss';

function SearchMoreThan({onInputChange, arr, searchByField, filterActive, setFilterActive}) {
  const [inputValue, setInputValue] = useState('');

  function onSearchChange(evt) {
    setInputValue(evt.target.value);
    setFilterActive(searchByField);
    if (evt.target.value) {
      onInputChange(arr.filter((el) => {
        return +el[searchByField] >= +evt.target.value;
      }));
    } else {
      onInputChange(arr);
    }
  }

  function onResetFilter() {
    setInputValue('');
    onInputChange(arr);
    setFilterActive('')
  }
  return (
    <div className='searchContainer'>
      <Badge
        bg={filterActive === searchByField ? 'warning' : 'light'}
        text="dark"
      >
        <input type="text" onChange={onSearchChange} placeholder='&ge;0.0' className='searchAutoInput' value={inputValue} />
        <span className="search_reset" onClick={onResetFilter}>X</span>
      </Badge>
    </div>
  );
}

export default SearchMoreThan;
