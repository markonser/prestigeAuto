import Accordion from 'react-bootstrap/Accordion';
import {group_names} from '../../../utils/mock_group_names.js';
import {mock_car} from '../../../utils/mock_cars.js';
import './left-accordion.scss';

function LeftAccordion() {
  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Все объекты</Accordion.Header>
        {mock_car.map((el, index) => {
          return (
            <Accordion.Body key={index}>
              <div className="car_item" >{el.gos_number}</div>
            </Accordion.Body>
          );
        })}
      </Accordion.Item>

      {group_names.map((el, index) => {
        return (
          <Accordion.Item eventKey={index} key={index * 122 +13}>
            <Accordion.Header>{el}</Accordion.Header>
            {mock_car.filter((item) => item.group_name === el).map((el, index) => {
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

  );
}

export default LeftAccordion;