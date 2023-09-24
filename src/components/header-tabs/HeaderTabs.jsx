import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from '../map/map';
import './header-tabs.scss';
import "../../styles/global.scss";
import GaragePage from '../../pages/garage/GaragePage';
import DriversPage from '../../pages/drivers/DriversPage';
import OrdersPage from '../../pages/orders/OrdersPage';
import ClientsPage from '../../pages/clients/ClientsPage';
import CreateOrderPage from '../../pages/create-order-page/CreateOrderPage';

function HeaderTabs() {
  const [key, setKey] = useState('new_order_page');

  function headerTabClick(k) {
    if (k === '') {
      console.log('hello');
    } else {
      console.log(k);
      setKey(k);
    }
  }

  return (
    <Tabs
      id="header_nav_tabs"
      activeKey={key}
      onSelect={(k) => headerTabClick(k)}
      className="mt-1 header_nav_tabs"
    >
      <Tab eventKey="map" title="Карта">
        <Map />
      </Tab>
      <Tab eventKey="new_order_page" title="Новый заказ">
        <CreateOrderPage />
      </Tab>
      <Tab eventKey="waiting_orders" title="Очередь заказов">
        Tab content for Profile
      </Tab>
      <Tab eventKey="orders_page" title="Все заказы">
        <OrdersPage />
      </Tab>
      <Tab eventKey="garage" title="Гараж">
        <GaragePage />
      </Tab>
      <Tab eventKey="drivers" title="Водители">
        <DriversPage />
      </Tab>
      <Tab eventKey="clients" title="Контрагенты">
        <ClientsPage />
      </Tab>
      <Tab eventKey="chat" title="Чат">

      </Tab>
    </Tabs>
  );
}

export default HeaderTabs;