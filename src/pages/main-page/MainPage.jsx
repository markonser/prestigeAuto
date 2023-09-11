import React from 'react';
import './main-page.scss';

import HeaderTabs from '../../components/header-tabs/HeaderTabs';

function MainPage() {
  return (
    <div className='main_container'>
      <div className="main_header_tabs">
        <HeaderTabs />
      </div>

      <div className="main_content"></div>
    </div>
  );
}

export default MainPage;
