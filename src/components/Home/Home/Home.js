import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import DentalCare from '../DentalCare/DentalCare';
import Doctors from '../Doctors/Doctors';

import Header from '../Header/Header';
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
           <Header></Header> 
           <Services></Services>
           <DentalCare></DentalCare>
           <MakeAppoinment></MakeAppoinment> 
           <Testimonials></Testimonials>
           <Blog></Blog>
           <Doctors></Doctors>
           <Contact></Contact>
        
        
        </div>
    );
};

export default Home;