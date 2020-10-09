import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:'600px' , }} className='row d-flex align-items-center'>
            <div className="col-md-4 offset-md-1">

           
                 <h1 style={{color:'#3A4256'}}>Your New smile <br/>Starts Here</h1>
                 <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non eaque quidem labore cumque hic veritatis adipisci. Cum minima debitis inventore.</p>
                 <button className="btn btn-danger">GET APPOINMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;