import React, {useState} from 'react';
import './driver-info-modal.scss';
import {Button} from 'react-bootstrap';

function DefaultModal({active, setActive, currentDriver, currentAuto}) {
  const [copySuccess, setCopySuccess] = useState('КОПИРОВАТЬ');

  const {marka, gos_number} = currentAuto[0];
  const {fio, driver_telephone, born_place, passport, driver_license_info} = currentDriver[0];

  const copyToClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(document.getElementById('text').innerText);
      setCopySuccess('Скопировано!');
      setTimeout(() => {
        setActive(false);
      }, 1000);
    } catch (err) {
      setCopySuccess('Что-то пошло не так (');
    }
  };

  return (
    <div className={active ? 'default_modal_container active' : 'default_modal_container'}
      onClick={() => setActive(false)}>

      <div id='text'
        className="default_modal_content"
        onClick={(e) => e.stopPropagation()}>
        <div id='text'>
          {marka}, госномер: {gos_number} <br />
          {fio}, {driver_telephone}<br />
          Дата и место рождения: {born_place}<br />
          Паспорт: {passport}<br />
          ВУ: {driver_license_info}<br />
          Зарегистрирован:
        </div>
      </div>
      <Button className='copy_btn' onClick={copyToClipBoard}>{copySuccess}</Button>
    </div>
  );
}

export default DefaultModal;
