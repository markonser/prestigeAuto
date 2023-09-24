import {Tab, Tabs} from 'react-bootstrap';
import './create-order-page.scss';

import React, {useState} from 'react';
import AddNewSimpleOrder from '../../components/add-new-simple-order/AddNewSimpleOrder';

function CreateOrderPage() {
  const [key, setKey] = useState('quick_order_form');

  function tabClick(k) {
    if (k === 'garage_search') {

    } else {

      setKey(k);
    }
  }
  return (
    <div className='drivers_tab_container'>
      <Tabs
        id="create_order_nav_tabs"
        activeKey={key}
        onSelect={(k) => tabClick(k)}
        className="second_level_nav_tabs create_order_nav_tabs"
      >
        <Tab eventKey="quick_order_form" title="Быстрый заказ">
          <AddNewSimpleOrder />
        </Tab>
        <Tab eventKey="full_order_form" title="Полная форма">
          Tab content for Contact
        </Tab>


      </Tabs>
    </div>
  );
}

export default CreateOrderPage;
