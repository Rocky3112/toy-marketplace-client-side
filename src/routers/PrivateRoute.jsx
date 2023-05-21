/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthCotext } from '../Provider/AuthProvider';
import Swal from 'sweetalert2';


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthCotext);
    const location = useLocation();
    if(!user && !loading){
        Swal.fire({
            title: 'You have to log in',
            icon: 'warning',
            timer: 2000,
            timerProgressBar: true,
            toast: true,
            position: 'top-end',
            showConfirmButton: false
    })
}
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