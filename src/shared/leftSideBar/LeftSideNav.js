import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [category,setCategory] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/tech')
        .then(res=> res.json())
        .then(data => setCategory(data))
    },[])
    return (
        <div className='mt-5'>
            <h3 className='fw-bold'>Courses</h3>
            {category.map(e =><li key={e.id}><Link to={`/courses/${e.id}`}>{e.name}</Link></li>)}
        </div>
    );
};

export default LeftSideNav;