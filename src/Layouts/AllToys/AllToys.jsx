/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Toys from "./Toys";


const AllToys = () => {
    const [allToys, setAllToys]= useState([]);
    const  toy=allToys.slice(0,20)


    useEffect(()=>{
        fetch('https://toy-marketplace-server-side-three.vercel.app/allToy')
        .then(res=> res.json())
        .then(data=>{
            setAllToys(data);
        })
    },[])
    return (
        <div className=" my-20">
            {
                toy.map((toys)=> <Toys
                key ={toys._id}
                toys={toys}
                ></Toys>)
            }
        </div>
    );
};

export default AllToys;