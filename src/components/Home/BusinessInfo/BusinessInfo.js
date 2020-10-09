
import React from 'react';

import { faClock, faPhone, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const infosData=[
    {
        title:"Opening Hours",
        description:"We are open 7 days",
        icon:faClock,
        background:'primary'
    },
    {
        title:"Visit our location",
        description:"Muscat azaiba",
        icon:faMapMarker,
        background:'dark'
    },
    {
        title:"Contact us now",
        description:"+968-666666",
        icon:faPhone,
        background:'primary'
    },
]

const BusinessInfo = () => {
    return (
   <>
   <section className='d-flex justify-content-center '>
      <div className='w-75 row'>
      {
           infosData.map(info=><InfoCard info={info}></InfoCard>)
       }
      </div>
       </section>
   </>
    );
};

export default BusinessInfo;