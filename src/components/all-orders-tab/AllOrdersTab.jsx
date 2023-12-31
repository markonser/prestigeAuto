import {mockOrdersList} from '../../utils/mock_orders_list';

import Search from '../search/Search';
import './all-orders-tab.scss';

import React, {useState} from 'react';

function AllOrdersTab() {
  const [filteredList, setFilteredList] = useState(mockOrdersList);
  const [filterActive, setFilterActive] = useState('');

  return (
    <div className='orders_tab_container'>
      <div className="header_filters_row">
        <div className="order_date"><Search
          filterActive={filterActive}
          setFilterActive={setFilterActive}
          searchByField={'order_date'}
          onInputChange={setFilteredList}
          arr={filteredList}
          initialData={mockOrdersList}
        /></div>
        <div className="gos_number"></div>
        <div className="initial_driver_task"></div>
        <div className="client_name">
          <Search
            filterActive={filterActive}
            setFilterActive={setFilterActive}
            searchByField={'client_name'}
            onInputChange={setFilteredList}
            arr={filteredList}
            initialData={mockOrdersList}
          />
        </div>
        <div className="work_summary"></div>
        <div className="work_time_start"></div>
        <div className="address_start"></div>
        <div className="address_end"></div>
        <div className="work_time_end"></div>
        <div className="order_cost"></div>
        <div className="work_in_hours"></div>
        <div className="extra_time"></div>
        <div className="rate_per_hour"></div>
        <div className="mkad_over_distance"></div>
        <div className="rate_per_km"></div>
        <div className="extra_money"></div>
        <div className="comments"></div>
      </div>
      <div className="list_header">
        <div className="header_cell_item order_date">Дата</div>
        <div className="header_cell_item gos_number">№ ТС</div>
        <div className="header_cell_item initial_driver_task">Начальная задача</div>
        <div className="header_cell_item client_name">Контрагент</div>
        <div className="header_cell_item work_summary">Время водит.</div>
        <div className="header_cell_item work_time_start">Время подачи</div>
        <div className="header_cell_item address_start">Адрес подачи</div>
        <div className="header_cell_item address_end">Адрес разгрузки</div>
        <div className="header_cell_item work_time_end">Время окончания</div>
        <div className="header_cell_item order_cost">Сумма заказа</div>
        <div className="header_cell_item work_in_hours">Время работы</div>
        <div className="header_cell_item extra_time">Доп. время</div>
        <div className="header_cell_item rate_per_hour">Тариф ч.</div>
        <div className="header_cell_item mkad_over_distance">Пробег за МКАД</div>
        <div className="header_cell_item rate_per_km">Тариф км.</div>
        <div className="header_cell_item extra_money">Доп. деньги</div>
        <div className="header_cell_item comments">Комментарий</div>
      </div>
      {
        filteredList.map((el, index) => {
          return (
            <div className="list_item" key={index}>
              <div className="cell_item order_date">{el.order_date}</div>
              <div className="cell_item gos_number">{el.gos_number}</div>
              <div className='big_text'><div className="cell_item initial_driver_task">{el.initial_driver_task}</div></div>
              <div className="cell_item client_name">{el.client_name}</div>
              <div className="cell_item work_summary">{el.work_summary}</div>
              <div className="cell_item work_time_start">{el.work_time_start}</div>
              <div className="cell_item address_start">{el.address_start}</div>
              <div className='big_text'><div className="cell_item address_end">{el.address_end}</div></div>
              <div className="cell_item work_time_end">{el.work_time_end}</div>
              <div className="cell_item order_cost">{el.order_cost}</div>
              <div className="cell_item work_in_hours">{el.work_in_hours}</div>
              <div className="cell_item extra_time">{el.extra_time}</div>
              <div className="cell_item rate_per_hour">{el.rate_per_hour}</div>
              <div className="cell_item mkad_over_distance">{el.mkad_over_distance}</div>
              <div className="cell_item rate_per_km">{el.rate_per_km}</div>
              <div className="cell_item extra_money">{el.extra_money}</div>
              <div className='big_text'><div className="cell_item comments">{el.comments}</div></div>
            </div>);
        })
      }
    </div>
  );
}

export default AllOrdersTab;
