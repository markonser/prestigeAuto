import {useState} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Map from '../map/map';
import './header-tabs.scss';
import "../../styles/custom.scss";

function HeaderTabs() {
  const [key, setKey] = useState('map');

  return (
    <Tabs
      id="header_nav_tabs"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3 header_nav_tabs"
    >
      <Tab eventKey="map" title="Карта">
        <Map />
      </Tab>
      <Tab eventKey="new_order" title="Новый заказ">
        Tab content for Profile
      </Tab>
      <Tab eventKey="waiting_orders_list" title="Не распределены (3 шт)">
        Tab content for Profile
      </Tab>
      <Tab eventKey="all_orders_list" title="Все заказы">
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default HeaderTabs;