/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthCotext } from '../../Provider/AuthProvider';
import MyToy from './MyToy';
import useTitle from '../../Hooks/useTitle';

const MyToys = () => {
    const {user} = useContext(AuthCotext);
    const [toys, setToys]=useState([])
    useTitle("MyToy")

    useEffect(()=>{
        fetch(`https://toy-marketplace-server-side-three.vercel.app/myToy?sellerEmail=${user.email}`)
        .then(res=>res.json())
        .then(data=>{
            setToys(data);
        })
    },[])

    const handleDelete= id =>{
        const procceed = confirm('Are you sure you want to delete');
    
        if(procceed){
            fetch(` https://toy-marketplace-server-side-three.vercel.app/myToy/${id}`, {
                method: "DELETE"
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
                if(data.deletedCount>0){
                    alert('Deleted Successful')
                    const remain = toys.filter(toy => toy._id !== id)
                    setToys(remain)
                }
    
            })
        }
    }
    return (
        <div className=' my-20'>
            {
                toys.map((toy)=> <MyToy
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
                ></MyToy>)
            }
        </div>
    );
};

export default MyToys;