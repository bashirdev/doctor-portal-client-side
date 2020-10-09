import React from 'react';

const ServiceCard = ({service}) => {
    return (
        <div className="col-md-4 ">
        <div className=''>
        <div>
            <img style={{height:'50px'}} src={service.img} alt="" className="img-fluid mb-3"/>
        </div>
        <div>
            <h4 className='text-secondary'>{service.name}</h4>
            <small>{service.content}</small>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;