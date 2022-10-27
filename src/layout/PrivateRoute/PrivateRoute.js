import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../Auth/AuthContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();
    console.log(location);
    if(loading){
        return  <>
        <Spinner animation="border" size="sm" />
        <Spinner animation="border" />
        <Spinner animation="grow" size="sm" />
        <Spinner animation="grow" />
      </>
    }
    if(!user){
        return <Navigate to="/login" state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;