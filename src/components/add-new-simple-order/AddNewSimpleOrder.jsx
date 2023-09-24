import React, {useEffect, useState} from 'react';
import './add-new-simple-order.scss';
import {mockOrdersList} from '../../utils/mock_orders_list';
import CreatableSelectBy from '../imputs/CreatableSelectBy';
import {useForm, Controller} from "react-hook-form";
import {Badge} from 'react-bootstrap';

function AddNewSimpleOrder() {
  const {control, handleSubmit, register, watch, reset} = useForm();

  const [formData, setFormData] = useState();
  // console.log('=== formData AddNewSimpleOrder.jsx [11] ===', formData);
  const onSendHandler = ({...data}) => {
    console.log('=== data', data);
  };

  useEffect(() => {
    const subscription = watch((value, {name, type}) => setFormData(value));
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div >
      <div className="add_new_simle_order_tab_title">
        <h3>Создание нового заказа:</h3>
      </div>
      <div className='add_new_simple_order_container'>
        <form onSubmit={handleSubmit(onSendHandler)} className='short_order_form'>
          <label className="label_container">
            <div className='label_title'>Контрагент - заказчик: (водитель не видит)</div>
            <Controller control={control}
              name="client_name"
              render={({field: {value, onChange}}) => (
                <CreatableSelectBy
                  value={value}
                  onChange={onChange}
                  arr={mockOrdersList}
                  findBy={'client_name'}
                  multipleSelect={false}
                  required={true}
                />)}
            />
          </label>

          <label className="label_container">
            <div className='label_title'>Машина:</div>
            <Controller control={control} name="gos_number"
              render={({field: {value, onChange}}) => (
                <CreatableSelectBy
                  value={value}
                  onChange={onChange}
                  arr={mockOrdersList}
                  findBy={'gos_number'}
                  multipleSelect={true}
                  required={true}
                />)}
            />
          </label>

          {/* <label className="label_container">
          <div className='label_title'>Дата:</div>
          <input type='datetime-local' {...register("date")} />
        </label>
        <label className="label_container">
          <div className='label_title'>время:</div>
          <input type='time' {...register("time")} />
        </label> */}
          <label className="label_container">
            <div className='label_title'>Задание водителю:</div>
            <textarea className='initial_driver_task' {...register("initial_driver_task")} rows={7}
              placeholder='Сегодня 20.09.2023 в 22:30 ул. Правды, 24с11
+7 977 854-32-44 Джума
Далее:
- Петровско-Разумовский пр., 29с5 
- Мосфильм'/>
          </label>

          {/* <label className="label_container">
          <div className='label_title'>Адрес подачи:</div>
          <Controller control={control} name="address_start"
            render={({field: {value, onChange}}) => (
              <CreatableSelectBy value={value} onChange={onChange}
                arr={mockOrdersList} findBy={'address_start'} />)} />
        </label> */}
          {/* <label className="label_container">
          <div className='label_title'>телефон:</div>
          <input type='tel' {...register("phone_start")} />
        </label> */}
          {/* <label className="label_container">
          <div className='label_title'>Маршрут:</div>
          <Controller control={control} name="address_end"
            render={({field: {value, onChange}}) => (
              <CreatableSelectBy value={value} onChange={onChange}
                arr={mockOrdersList} findBy={'address_end'} />)} />
        </label> */}
          {/* <label className="label_container">
          <div className='label_title'>телефон:</div>
          <input type='tel' {...register("phone_end")} />
        </label> */}
          <div className='form_button_wrapper'>
            <input type="submit" value="Создать и отправить" className='btn btn-primary form_button' />
            <input type="button" value="Очистить" className='btn btn-primary form_button'
              onClick={() => reset()} />
          </div>


        </form>

        <div className='zakaz_info_preview'>
          <div>Предпросмотр задания для:</div>
          <div>
            {formData?.gos_number?.map(el => {
              return (
                <Badge
                  bg={'warning'}
                  text="dark"
                  key={el.value}
                  className='m-1'
                >
                  {el.label}
                </Badge>);
            })}
          </div>

          <div>
            {/* {formData?.date} {formData?.time} <br />
        {formData?.address_start ? `Подача: ${formData.address_start.value}` : ''}<br />
        {formData?.address_end ? `далее: ${formData.address_end.value}` : ''}<br /> */}
            {formData?.initial_driver_task && formData.initial_driver_task}<br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewSimpleOrder;
