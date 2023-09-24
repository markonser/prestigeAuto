import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap';
import AllAutosTab from '../../components/all-autos-tab/AllAutosTab';
import Search from '../../components/search/Search';
import './garage-page.scss';
import AddNewAuto from '../../components/add-new-auto/AddNewAuto';

function GarageTab() {
  const [key, setKey] = useState('garage_add_new_auto');
  const [findModalActive, setFindModalActive] = useState(false);

  function tabClick(k) {
    if (k === 'garage_search') {
      <Search active={findModalActive} setActive={setFindModalActive} />;
    } else {
      console.log(k);
      setKey(k);
    }
  }
  return (
    <div>
      <Tabs
        id="garage_nav_tabs"
        activeKey={key}
        onSelect={(k) => tabClick(k)}
        className="second_level_nav_tabs garage_nav_tabs"
      >
        <Tab eventKey="garage_all_ts" title="Все авто">
          <AllAutosTab />
        </Tab>
        <Tab eventKey="garage_in_service" title="В сервисе">
          Tab content for Contact
        </Tab>
        <Tab eventKey="garage_no_driver" title="Без водителя">
          Tab content for Contact
        </Tab>
        <Tab eventKey="garage_add_new_auto" title="Добавить транспорт">
          <AddNewAuto />
        </Tab>
      </Tabs>
    </div>
  );

}
export default GarageTab;
