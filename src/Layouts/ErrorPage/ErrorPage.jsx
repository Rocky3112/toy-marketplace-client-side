/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import error from "../../assets/images/404-error.jpg"
import useTitle from '../../Hooks/useTitle';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBtnBackPage =()=>{
        navigate("/");
    }
    useTitle("ErrorPage")
    return (
        <div className=''>
            <img className=' w-96 mx-auto' src={error} alt="" />
            <div className='mt-10 flex items-center justify-center'>
            <h1 className=' text-4xl font-semibold'>404 Page Not Found</h1><br />
            
        </div>
        <div className='flex items-center justify-center'>

        <button className='px-3 py-2 text-white bg-slate-400 rounded-lg mt-10' onClick={handleBtnBackPage} >Go back</button>
        </div>
        </div>
        
    );
};

export default ErrorPage;