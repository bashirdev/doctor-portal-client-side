import React from 'react';
import Dental from '../../../images/dental.png'
const DentalCare = () => {
    return (
       <section className='d-flex justify-content-center mt-5 '>
           <div className='row w-75 align-items-center'>
               <div className='col-md-5 mb-4 m-md-0'>
                  <img style={{height:'400px'}} src={Dental}  alt="" className='img-fluid' />
               </div>
               <div className='col-md-7 align-self-center'>
                    <h3>Exceptional Dental <br/>Care, on your Term </h3>
                    <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus corrupti impedit quibusdam non similique commodi aliquid quidem cupiditate sint modi, nisi molestiae quos assumenda dolorum?</p>
                    <button className='btn btn-primary'>Learn more</button>
                 </div>
           </div>
       </section>
    );
};

export default DentalCare;
