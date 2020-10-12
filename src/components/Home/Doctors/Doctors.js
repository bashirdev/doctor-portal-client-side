
import React from 'react';
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctors = ({doctors}) => {
    return (
        <div className="col-md-4 text-center">
     {  doctors.image ? <img src={`data:image/png;base64,${doctors.image.img}`} alt='' /> :   
         
          <img className="img-fluid mb-3" src={`http://localhost:5000/${doctors.img}`} alt=""/>
     
     }
            <h4>{doctors.name}</h4>
            <p> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
        </div>
    );
};

export default Doctors;