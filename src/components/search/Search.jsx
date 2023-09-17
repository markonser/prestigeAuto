import React, {useState} from 'react';
import {Badge} from 'react-bootstrap';
import './search.scss';

function Search({onInputChange, arr, searchByField, filterActive, setFilterActive}) {
  const [inputValue, setInputValue] = useState('');

  function onSearchChange(evt) {
    setInputValue(evt.target.value);
    setFilterActive(searchByField);
    if (evt.target.value) {
      onInputChange(arr.filter((el) => {
        return el[searchByField]?.toString().toLowerCase().includes(evt.target.value.toString().toLowerCase());
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
        <input type="text" onChange={onSearchChange} placeholder='&#x1F50E;&#xFE0E;' className='searchAutoInput' value={inputValue} />
        <span className="search_reset" onClick={onResetFilter}>X</span>
      </Badge>
    </div>
  );
}

export default Search;
