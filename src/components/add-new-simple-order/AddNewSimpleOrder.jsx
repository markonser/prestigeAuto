import React from 'react';
import './add-new-simple-order.scss';

function AddNewSimpleOrder() {
  return (
    <div className='add_new_simle_order_container'>
      <div className="add_new_simle_order_tab_title">
        <h3>Добавление нового заказа:</h3>
      </div>
      <form className="add_new_simle_order_form">
        <label className="label_container">
          <div className='label_title'>ФИО:</div>
          <input name="fio" type='text' placeholder='Иванов Иван Иванович' className="input_item" />
        </label>


        <input type="submit" value="Добавить" className='btn btn-primary add_new_simle_order_submit' />
      </form>
    </div>
  );
}

export default AddNewSimpleOrder;
