import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../images/Ellipse 1.png';
import img2 from '../../../images/Ellipse 2.png';
import img3 from '../../../images/Ellipse 3.png';

const Testimonials = () => {
    return (
      <section>
          <div className="container mt-5">
              <div className="row ">
                 <div className="col-md-6">
                     <h5>TESTIMONIAL</h5>
                     <h2>What's Our Patients <br/> Says</h2>
                 </div>
                 <div className="col-md-6 d-flex ml-auto">
           
                     <FontAwesomeIcon className="ml-auto mr-0" style={{fontSize:'8rem', color:'#d6f6f6'}} icon={faQuoteRight}></FontAwesomeIcon>
                    
                 </div> 
              </div>
             <div className="row justify-content-between mt-5">
                 <div className="col-md-3">
                 <div className='card p-3 tex-center '>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium harum nemo blanditiis saepe explicabo sapiente, nobis impedit beatae atque perspiciatis quod reiciendis unde quidem amet </p>
                 <div className='row d-flex mt-3'>
                 <div className='ml-3 mr-3 '>
                     <img style={{height:'50px'}} src={img1} alt="" srcset=""/>
                     </div>
                     <div>
                     <h6>Winson Herry</h6>
                     <p>Califonia</p>
                     </div>
                     
                 </div>
                 </div>
                 </div>
                 <div className="col-md-3">
                 <div className='card p-3 tex-center '>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium harum nemo blanditiis saepe explicabo sapiente, nobis impedit beatae atque perspiciatis quod reiciendis unde quidem amet </p>
                 <div className='row d-flex mt-3'>
                 <div className='ml-3 mr-3 '>
                     <img style={{height:'50px'}} src={img2} alt="" srcset=""/>
                     </div>
                     <div>
                     <h6>Winson Herry</h6>
                     <p>Califonia</p>
                     </div>
                     
                 </div>
                 </div>
                 </div>
                 <div className="col-md-3">
                 <div className='card p-3 tex-center '>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium harum nemo blanditiis saepe explicabo sapiente, nobis impedit beatae atque perspiciatis quod reiciendis unde quidem amet </p>
                 <div className='row d-flex mt-3'>
                 <div className='ml-3 mr-3 '>
                     <img style={{height:'50px'}} src={img3} alt="" srcset=""/>
                     </div>
                     <div>
                     <h6>Winson Herry</h6>
                     <p>Califonia</p>
                     </div>
                     
                 </div>
                 </div>
                 </div>

               
             </div> 

          </div>
      </section>
    );
};

export default Testimonials;