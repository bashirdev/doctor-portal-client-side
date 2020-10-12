  
import React, { useEffect, useState } from 'react';
import Doctors from '../Doctors/Doctors';
const DoctorsList = () => {
    const [doctors, setDoctors] = useState([])
    useEffect(()=>{
       fetch('http://localhost:5000/doctors')
       .then(res=>res.json())
       .then(data=> setDoctors(data))
    },[])
    return (
        <section className="doctors">
            <div className="container">
                <h5 className="text-center  text-primary mb-5">Our Doctors</h5>
                <div className="row">
                    
                    {
                        doctors.map(doc=> <Doctors key={doc._id} doctors={doc}/>)
                    }
                </div>
            </div>
        </section>
    );
};
export default DoctorsList