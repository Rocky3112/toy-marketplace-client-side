/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { FaSpinner } from 'react-icons/fa';
import { Navigate, useLocation } from 'react-router';
import { AuthCotext } from '../Provider/AuthProvider';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthCotext);
    const location = useLocation();
    if(loading){
        return (
            <div className=' w-1/2 mx-auto my-5'>
                <FaSpinner  animation="border" variant="primary" />
                </div>
        )
    }

    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;