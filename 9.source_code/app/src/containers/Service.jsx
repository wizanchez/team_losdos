/* eslint-disable react/jsx-indent */
import React from 'react';
import { connect } from 'react-redux';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

/**Componen to Home  */
import { FormService, TypeService } from '../components/Service';

const Service = () => {
  return(
    <>
      <div className='content-service'>
        <FormService />
          
      </div>  
    </>
  )

}

export default connect( null , null )(Service);