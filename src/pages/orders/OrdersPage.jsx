import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import './orders-page.scss';
import AllOrdersTab from '../../components/all-orders-tab/AllOrdersTab';

function OrdersPage() {
  const [key, setKey] = useState('current_day_orders');

  function tabClick(k) {
    if (k === 'OrdersPage') {

    } else {

      setKey(k);
    }
  }
  return (
    <div className='all_orders_container'>
      <Tabs
        id="all_orders_nav_tabs"
        activeKey={key}
        onSelect={(k) => tabClick(k)}
        className="second_level_nav_tabs all_orders_nav_tabs"
      >
        <Tab eventKey="all_orders" title="Все (!)">
          {/* <AllOrdersTab /> */}
        </Tab>
        <Tab eventKey="current_year_orders" title="Год">
          {/* <AllOrdersTab /> */}
        </Tab>
        <Tab eventKey="current_month_orders" title="Месяц">
          {/* <AllOrdersTab /> */}
        </Tab>
        <Tab eventKey="current_week_orders" title="Неделя">
          {/* <AllOrdersTab /> */}
        </Tab>
        <Tab eventKey="current_day_orders" title="Сегодня">
          <AllOrdersTab />
        </Tab>

      </Tabs>
    </div>
  );
}

export default OrdersPage;
