import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookCard = ({booking, date}) => {
    const [IsopenModel, setOpenModel] = useState(false);

    const handleOpenModel=()=>{
        setOpenModel(true)
    }
    
    const handleCloseModel=()=>{
        setOpenModel(false)
    }

    return (
        <div className='col-md-4 mb-5'>
        <div className="card p-3">
            <div className="card-body text-center">
               <h5 className='card-title text-brand'>{booking.subject}</h5>
               <h6>{booking.visitingHour}</h6>
               <p>{booking.totalSpace} SPACES AVAILABLE </p>
               {/* <p>{date.toDateString()}</p> */}
               <button onClick={handleOpenModel} className='btn btn-brand text-brand text-uppercase'> BOOK APPOINMENT</button>
               <AppoinmentForm IsopenModel={IsopenModel} date={date} appointmentOn={booking.subject} handleCloseModel={handleCloseModel}></AppoinmentForm>
            </div>
        </div>
            
        </div>
    );
};

export default BookCard;