/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ToyDetails = () => {
    // const details = useLoaderData();
    // console.log(details);
    const {id} = useParams();
    useEffect(()=>{
        fetch(`http://localhost:5000/allToy/${id}`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
        })
    },[])
    return (
        <div>
            
        </div>
    );
};

export default ToyDetails;