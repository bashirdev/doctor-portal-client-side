import React, { useContext, useEffect, useState } from 'react';
import AppointmentList from '../AppointmentList/AppointmentList';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Sidebar from '../Sidebar/Sidebar';
import { userContext } from '../../../App';

const DashBoard = () => {
const [loggedInUser,setLoggedInUser] = useContext(userContext)
const [selectedDate,setSelectedDate]= useState(new Date());
const [appointments, setAppointment] = useState([]);
console.log(loggedInUser);
const handleDateChange = data => {
    setSelectedDate(data);
}
useEffect(()=>{
    fetch('http://localhost:5000/appointmentByDate', {
        method: 'POST',
        headers:{'Content-Type' : 'application/json'},
        body:JSON.stringify({date:selectedDate, email: loggedInUser.email})
    })
    .then(res=>res.json())
    .then(dat=>{
        console.log(dat)
        setAppointment(dat)
    })
},[selectedDate])
   
     
   
   
    return (
        <div className='row'>
        <div className='col-md-4'>
           <Sidebar />
            </div>
            <div className='col-md-4'>
            <Calendar  
             onChange={handleDateChange}
             value={new Date()} 
             />
            </div>
            <div className='col-md-4'>
            <AppointmentList appointments={appointments} />
            </div>
        </div>
    );
};

export default DashBoard;