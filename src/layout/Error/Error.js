import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Error.css'
const Error = () => {
    return (
<section className="error-area error-one">
   <div className="container">
      <div className="row justify-content-center">
         <div className="col-xxl-7 col-xl-8 col-lg-8">
            <div className="error-content text-center">
               <span className="error-404">404</span>
               <h5 className="sub-title">Page Not Found</h5>
               <p className="text">
               The server cannot find the requested resource. Links that lead to a 404 page are often called broken or dead links and can be subject to link rot.
               </p>
               <div className="error-form">
                 <Link to='/home'> <Button variant='primary'>Back To Home</Button></Link>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>
    );
};

export default Error;