import {mockDrivers} from '../../utils/mock_drivers';
import Search from '../search/Search';
import './all-drivers-tab.scss';

import React, {useState} from 'react';

function AllDriversTab() {
  const [filteredList, setFilteredList] = useState(mockDrivers);
  const [filterActive, setFilterActive] = useState('');
  return (
    <div className=' drivers_list_container'>
      <div className="list_item list_header">
        <div className="cell_item fio">ФИО</div>
        <div className="cell_item passport">Данные паспорта</div>
        <div className="cell_item born_place">Место рождения</div>
        <div className="cell_item driver_license_info">Данные ВУ</div>
        <div className="cell_item driver_telephone">Телефон</div>
        <div className="cell_item fixed_auto">Закреплен за авто</div>
        <div className="cell_item in_vocation_start">В отпуске с</div>
        <div className="cell_item in_vocation_end">В отпуске до</div>
      </div>
      <div className="list_item header_filters_row">
        <div className="fio"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'fio'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="passport"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'passport'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="born_place"></div>
        <div className="driver_license_info"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'driver_license_info'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="driver_telephone"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'driver_telephone'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="fixed_auto"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'fixed_auto'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="in_vocation_start"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'in_vocation_start'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
        <div className="in_vocation_end"><Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'in_vocation_end'}
            onInputChange={setFilteredList}
            arr={mockDrivers}
          /></div>
      </div>
      {
        filteredList.map((el, index) => {
          return (
            <div className="list_item" key={index}>
              <div className="cell_item fio">{el.fio}</div>
              <div className="cell_item passport">{el.passport}</div>
              <div className="cell_item born_place">{el.born_place}</div>
              <div className="cell_item driver_license_info">{el.driver_license_info}</div>
              <div className="cell_item driver_telephone">{el.driver_telephone}</div>
              <div className="cell_item fixed_auto">{el.fixed_auto}</div>
              <div className="cell_item in_vocation_start">{el.in_vocation_start}</div>
              <div className="cell_item in_vocation_end">{el.in_vocation_end}</div>
            </div>);
        })
      }
    </div>
  );
}

export default AllDriversTab;
