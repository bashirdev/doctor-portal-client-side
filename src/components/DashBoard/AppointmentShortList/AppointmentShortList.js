import React from 'react';

const AppointmentShortList = ({appointments}) => {
    console.log(appointments);
    return (
     
           <table className="table table-borderless">
            <thead>
                <tr>
               
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Phone</th>
                <th className="text-secondary" scope="col">Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    appointments.map((appoint, index)=>
                    <tr>
                       
                        <td>{appoint.name}</td>
                        <td>{appoint.email}</td>
                        <td>{appoint.phone}</td>                       
                    </tr>
                    )
                }
            </tbody> 
            </table>
     
    );
};

export default AppointmentShortList;