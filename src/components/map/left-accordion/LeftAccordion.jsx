import Accordion from 'react-bootstrap/Accordion';
import {group_names} from '../../../utils/mock_group_names.js';
import {mock_car} from '../../../utils/mock_cars.js';
import './left-accordion.scss';
import {useState} from 'react';
import Search from '../../search/Search.jsx';
import FixedFilter from '../../FixedFilter/FixedFilter.jsx';

function LeftAccordion() {
  const [filteredList, setFilteredList] = useState(mock_car);
  const [filterActive, setFilterActive] = useState('');
  return (
    <div className='left_accordion_container'>
      <div className="filters">
        <Search
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'gos_number'}
          onInputChange={setFilteredList}
          arr={mock_car}
        />
        <FixedFilter
          title={'Все'}
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          serchText={''}
          searchByField={'work_status'}
          onClickHandler={setFilteredList}
          arr={mock_car}
        />
        <FixedFilter
          title={'Свободны'}
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          serchText={'free'}
          searchByField={'work_status'}
          onClickHandler={setFilteredList}
          arr={mock_car}
        />
        <FixedFilter
          title={'Занятые'}
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          serchText={'work'}
          searchByField={'work_status'}
          onClickHandler={setFilteredList}
          arr={mock_car}
        />

      </div>
      <Accordion defaultActiveKey={['']} >

        {/* <Accordion.Item eventKey="0">
          <Accordion.Header>Поиск / Фильтры / Все объекты</Accordion.Header>
          {filteredList.map((el, index) => {
            return (
              <Accordion.Body key={index}>
                <div className="car_item" >{el.group_name} - {el.gos_number}</div>
              </Accordion.Body>
            );
          })}
        </Accordion.Item> */}

        {group_names.map((el, index) => {
          const filteredItem = filteredList.filter((item) => item.group_name.toLowerCase() === el.toLowerCase());
          return (
            <Accordion.Item eventKey={index} key={index * 122 + 13}>
              <Accordion.Header><div className="count_in_group">{filteredItem.length}</div>{el}</Accordion.Header>
              {filteredItem.map((el, index) => {
                return (
                  <Accordion.Body key={index}>
                    <div className="car_item" >{el.gos_number}</div>
                  </Accordion.Body>
                );
              })}
            </Accordion.Item>
          );
        })}

      </Accordion>
    </div>
  );
}

export default LeftAccordion;