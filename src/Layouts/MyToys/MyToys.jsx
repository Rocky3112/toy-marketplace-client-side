/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthCotext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';

const MyToys = () => {
    const {user} = useContext(AuthCotext);
    const [toys, setToys]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myToy?sellerEmail=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
        })
    },[])
    return (
        <div>
            {
                toys.map((toy)=> <MyToy
                key={toy._id}
                toy={toy}
                ></MyToy>)
            }
        </div>
    );
};

export default MyToys;