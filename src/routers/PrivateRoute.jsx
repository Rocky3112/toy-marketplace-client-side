/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthCotext } from '../Provider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthCotext);
    const location = useLocation();
    if(loading){
        return (
            <progress className="progress w-56"></progress>
        )
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;