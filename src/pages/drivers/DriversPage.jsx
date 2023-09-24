import {Tab, Tabs} from 'react-bootstrap';
import './drivers-page.scss';

import React, {useState} from 'react';
import AllDriversTab from '../../components/all-drivers-tab/AllDriversTab';
import AddNewDriver from '../../components/add-new-driver/AddNewDriver';

function DriversTab() {
  const [key, setKey] = useState('add_new_driver');

  function tabClick(k) {
    if (k === 'garage_search') {

    } else {

      setKey(k);
    }
  }
  return (
    <div className='drivers_tab_container'>
      <Tabs
        id="drivers_nav_tabs"
        activeKey={key}
        onSelect={(k) => tabClick(k)}
        className="second_level_nav_tabs drivers_nav_tabs"
      >
        <Tab eventKey="drivers_all" title="Все">
          <AllDriversTab />
        </Tab>
        <Tab eventKey="drivers_in_vocation" title="В отпуске">
          Tab content for Contact
        </Tab>
        <Tab eventKey="drivers_dismissed" title="Уволенные">
          Tab content for Contact
        </Tab>
        <Tab eventKey="add_new_driver" title="Добавить водителя">
          <AddNewDriver />
        </Tab>

      </Tabs>
    </div>
  );
}

export default DriversTab;
