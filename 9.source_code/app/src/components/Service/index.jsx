import React from 'react';
import '../../assets/styles/components/Service.scss';
import carXs from '../../assets/static/xs.png';
//import map from '../../assets/static/map.png';

export const FormService = () => (
  <form className='form-service'>
    <div>
      <label>Desde:</label>
      <input type='text' />
    </div>
    <div>
      <label>Hasta:</label>
      <input type='text' />
    </div>
    <TypeService />
    <TypeService />
    <TypeService />
    <div>
      <button className="form__button">Solicitar servicio</button>
    </div>

  </form>
)

export const TypeService = () => (
  <div className='form-service__type'>
    <div className='form-service__icon'>
      <img src={carXs}/>
    </div>
    <div className='form-service__desc'>
      <div className='form-service__desc-name'>UberSan</div>
      <div className='form-service__desc-time'>Llega en 5 min</div>
    </div>
    <div className='form-service__price'>17.000 COP</div>
  </div>
  )