import React from 'react';
import { Link } from 'react-router-dom';
import '../Blog/Blog.css'
const FAQ = () => {
    return (
        <div className='blog'>
          <div>
            <h5>Why have created this webpage?</h5>
            <p><small>Web-based learning refers to the type of learning that uses the Internet as an instructional delivery tool to carry out various learning activities.</small></p>
            </div>  
          <div>
            <h5>What is on this Website for you?</h5>
            <p><small>
              <ul>
                <li>You Can Learn Cybersecurity that very important to know at this web world. if you want to know you can go our <Link to='/discover/02'>Cybersecurity</Link> </li>
                <li>
                  You can learn Artificial Intelligence that very impresssive system in this runtime world . if you want to know you can go our <Link to='/discover/04'>Artifial Intelligence</Link>
                </li>
              </ul>
              Many More to go <Link to='/discover'>More Here</Link>
              </small></p>
            </div>  
        </div>
    );
};

export default FAQ;