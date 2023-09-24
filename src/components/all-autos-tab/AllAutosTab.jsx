import React, {useState} from 'react';
import {mock_car} from '../../utils/mock_cars';
import './all-autos-tab.scss';
import Search from '../search/Search';
import SearchMoreThan from '../search-more-than/SearchMoreThan';
import {mockDrivers} from '../../utils/mock_drivers';
import DefaultModal from '../modals/driver-info-modal/DirverInfoModal';

function AllAutosTab() {
  const [filteredList, setFilteredList] = useState(mock_car);
  const [filterActive, setFilterActive] = useState('');
  const [modalActive, setModalActive] = useState(false);
  const [currentDriver, setCurrentDriver] = useState('');
  const [currentAuto, setCurrentAuto] = useState('');

  function getInfoForSms(e) {
    const driverInfo = mockDrivers.filter(el => el.fio === e.target.closest('.list_item').getAttribute('fixed_driver'));
    const autoInfo = mock_car.filter(el => el.gos_number === e.target.closest('.list_item').getAttribute('gos_number'));
    setCurrentDriver(driverInfo);
    setCurrentAuto(autoInfo);
    setModalActive(true);
  }

  return (
    <div className='all_autos_container'>
      {modalActive && <DefaultModal
        active={modalActive}
        setActive={setModalActive}
        currentDriver={currentDriver}
        currentAuto={currentAuto}
      />
      }
      <div className="list_header">
        <div className="header_cell_item gos_number">Гос. номер</div>
        <div className="header_cell_item marka">Марка</div>
        <div className="header_cell_item load_capacity thead_cell">Тонаж</div>
        <div className="header_cell_item inner_length">Длина внутри</div>
        <div className="header_cell_item inner_width">Ширина внутри</div>
        <div className="header_cell_item inner_height">Высота внутри</div>
        <div className="header_cell_item gate_height">Высота вход</div>
        <div className="header_cell_item gate_width">Ширина вход</div>
        <div className="header_cell_item cargo_volume">Объем м3</div>
        <div className="header_cell_item outer_auto_dimensions">Габариты Д*Ш*В</div>
        <div className="header_cell_item pallets_or_trailer">№прицепа / кол. паллет</div>
        <div className="header_cell_item comments">Размер г/б, погруз., выс., рохла</div>
        <div className="header_cell_item tires">Шины</div>
        <div className="header_cell_item fixed_driver">Закрепленный водитель</div>
        <div className="header_cell_item fixed_trailer">Закрепленный прицеп</div>
        <div className="header_cell_item group_name">Группа</div>
      </div>
      <div className="header_filters_row">
        <div className="gos_number">
          <Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'gos_number'}
            onInputChange={setFilteredList}
            arr={mock_car}
          />
        </div>
        <div className="marka"></div>
        <div className="load_capacity thead_cell"></div>
        <div className="inner_length"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'inner_length'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="inner_width"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'inner_width'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="inner_height"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'inner_height'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="gate_height"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'gate_height'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="gate_width"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'gate_width'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="cargo_volume"><SearchMoreThan
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'cargo_volume'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="outer_auto_dimensions"></div>
        <div className="pallets_or_trailer"><Search
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'pallets_or_trailer'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="comments"></div>
        <div className="tires"></div>
        <div className="fixed_driver"><Search
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'fixed_driver'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
        <div className="fixed_trailer"></div>
        <div className="group_name"><Search
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'group_name'}
          onInputChange={setFilteredList}
          arr={mock_car}
        /></div>
      </div>
      {filteredList.map((el) => {
        return (
          <div className="list_item" key={el.gos_number} gos_number={el.gos_number}
            fixed_driver={el.fixed_driver}>
            <div className="cell_item gos_number">{el.gos_number}</div>
            <div className="cell_item marka">{el.marka}</div>
            <div className="cell_item load_capacity">{el.load_capacity}</div>
            <div className="cell_item inner_length">{el.inner_length}</div>
            <div className="cell_item inner_width">{el.inner_width}</div>
            <div className="cell_item inner_height">{el.inner_height}</div>
            <div className="cell_item gate_height">{el.gate_height}</div>
            <div className="cell_item gate_width">{el.gate_width}</div>
            <div className="cell_item cargo_volume">{el.cargo_volume}</div>
            <div className="cell_item outer_auto_dimensions">{el.outer_auto_dimensions}</div>
            <div className="cell_item pallets_or_trailer">{el.pallets_or_trailer}</div>
            <div className="cell_item comments">{el.comments}</div>
            <div className="cell_item tires">{el.tires}</div>
            <div className="cell_item fixed_driver"
              onClick={getInfoForSms} >
              {el.fixed_driver}
            </div>
            <div className="cell_item fixed_trailer">{el.fixed_trailer}</div>
            <div className="cell_item group_name">{el.group_name}</div>
          </div>
        );
      })}


    </div>
  );
}

export default AllAutosTab;
