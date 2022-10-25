import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';

const Main = () => {
    return (
           <div className='mx-1'>
             <Header/>
           <Outlet/>
           <Footer/>
           
           </div>
    );
};

export default Main;