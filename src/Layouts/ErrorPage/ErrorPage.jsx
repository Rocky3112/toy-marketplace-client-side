/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
    const navigate = useNavigate();
    const handleBtnBackPage =()=>{
        navigate("/");
    }
    return (
        <div>
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