import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const Private = ({children}) => {
     const {user} = useContext(AuthContext)
     const location = useLocation()
     
     if(user){
          return children
     }
     return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default Private;