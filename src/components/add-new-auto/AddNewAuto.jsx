import React from 'react';
import './add-new-auto.scss';

function AddNewAuto() {
  return (
    <div className='add_new_auto_container'>
      <div className="add_new_auto_tab_title">
        <h3>Добавление в гараж нового авто:</h3>
      </div>
      <form className="add_new_auto_form">
        <label className="label_container">
          <div className='label_title'>Госномер:</div>
          <input name="gos_number" type='text' placeholder='a000aa799' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Марка:</div>
          <input name="marka" type='text' placeholder='Ford Transit' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Грузоподъемность:</div>
          <input name="load_capacity" type='text' placeholder='т.' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Длина внутри м.:</div>
          <input name="inner_length" type='text' placeholder='4.25' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Ширина внутри м.:</div>
          <input name="inner_width" type='text' placeholder='2.45' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Выста внутри м.:</div>
          <input name="inner_height" type='text' placeholder='2.56' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Высота проема:</div>
          <input name="gate_height" type='text' placeholder='2.4' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Ширина проема:</div>
          <input name="gate_width" type='text' placeholder='2.36' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Объем м3:</div>
          <input name="cargo_volume" type='text' placeholder='18.2' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Внешние габариты Д/Ш/В:</div>
          <input name="outer_auto_dimensions" type='text' placeholder='9.5/2.6/3.78' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Кол-во паллет:</div>
          <input name="pallets_or_trailer" type='text' placeholder='15 (5+5+5)' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Комментарий:</div>
          <input name="comments" type='text' placeholder='погр. выс. 1.22м' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Шины:</div>
          <input name="tires" type='text' placeholder='мишлен 215x75x17,5' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Закрепить водителя:</div>
          <input name="fixed_driver" type='select' placeholder='ФИО' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Закрепить прицеп:</div>
          <input name="fixed_trailer" type='text' placeholder='a0000aa777' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Назначить группу:</div>
          <input name="group_name" type='text' placeholder='7м' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Серия - Номер ОСАГО:</div>
          <input name="osago_number" type='text' placeholder='ААА - 0000000000000' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата начала ОСАГО:</div>
          <input name="osago_start" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Дата окончания ОСАГО:</div>
          <input name="osago_end" type='date' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Фото автомобиля (аватар):</div>
          <input name="foto_auto" type='file' placeholder='file' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Фото ПТС:</div>
          <input name="foto_pts" type='file' placeholder='file' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Фото СТС:</div>
          <input name="foto_sts" type='file' placeholder='file' className="input_item" />
        </label>
        <label className="label_container">
          <div className='label_title'>Фото ОСАГО:</div>
          <input name="foto_osago" type='file' placeholder='file' className="input_item" />
        </label>
        <input type="submit" value="Добавить"  className='btn btn-primary add_new_auto_submit'/>
      </form>
    </div>
  );
}

export default AddNewAuto;
