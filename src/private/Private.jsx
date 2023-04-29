import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const Private = ({children}) => {
     const {user,loading} = useContext(AuthContext)
     const location = useLocation()
     if(loading){
          return  <Spinner animation="border" variant="secondary" />
     }
     if(user){
          return children
     }
     return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default Private;