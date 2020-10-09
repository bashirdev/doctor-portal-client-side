import React from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/teath.png';
const serviceData=[
    {
        img:fluoride,
        name:'Fluoride Treatment',
        content:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium, voluptatum dicta cum obcaecati consequuntur tempora?',
    },
    {
        img:cavity,
        name:'Cavity filling',
        content:'obcaecati consequuntur tempora amet consectetur adipisicing elit. Accusantium, voluptatum dicta cum obcaecati consequuntur tempora?',
    },
    {
        img:teath,
        name:'Teath Whitening',
        content:' cum obcaecati consequuntur  adipisicing elit. Accusantium, voluptatum dicta cum obcaecati consequuntur tempora?',
    },

]
const Services = () => {
    return (
       <section className='services-container text-center mt-5 '>
       <div className="text-center ">
               <h5 style={{color:' #1cc7c1'}}>Our Services</h5>
               <h2>Services We Provide</h2>
               </div>
               <div className='row d-flex justify-content-center mt-5 pt-5'>
               <div className="row w-75">
                   {
                       serviceData.map(service=><ServiceCard service={service}></ServiceCard>)
                   }
                   </div>
              
           </div>
       </section>
    );
};

export default Services;