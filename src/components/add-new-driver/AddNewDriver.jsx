import React from 'react';
import './add-new-driver.scss';

function AddNewDriver() {
  return (
    <div className='add_new_driver_container'>
      <div className="add_new_driver_tab_title">
        <h3>Добавление нового водителя:</h3>
      </div>
      <form className="add_new_driver_form">
        <label className="label_container">
          <div className='label_title'>ФИО:</div>
          <input name="fio" type='text' placeholder='Иванов Иван Иванович' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Данные паспорта: серия номер выдан</div>
          <textarea name="passport" placeholder='0123 123456 от 01.01.2001 , Отделом УФМС России по гор. Москве. Код подразделения: 000-000"' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Место рождения:</div>
          <input name="born_place" type='text' placeholder='01.06.1990 г.р. Кыргызстан' className="input_item " />
        </label>
        <label className="label_container">
          <div className='label_title'>Данные ВУ: серия номер срок действия</div>
          <input name="driver_license_info" type='text' placeholder='0123 123456, 17.05.2017 - 17.05.2027 г.' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Телефон:</div>
          <input name="driver_telephone" type='text' placeholder='+7 000 123-45-67' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Закрепить за автомобилем:</div>
          <input name="fixed_auto" type='text' placeholder='+7 000 123-45-67' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата трудоустройства:</div>
          <input name="employment_date" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата увольнения:</div>
          <input name="dismissal_date" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата начала отпуска:</div>
          <input name="in_vocation_start" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата окончания отпуска:</div>
          <input name="in_vocation_end" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Коментарий:</div>
          <textarea name="driver_comment" type='text' placeholder='хороший водитель' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Фотографии документов: (несколько)</div>
          <input name="dirver_docs_foto" type='file' multiple className="input_item" />
        </label>

        <input type="submit" value="Добавить" className='btn btn-primary add_new_driver_submit' />
      </form>
    </div>
  );
}

export default AddNewDriver;
