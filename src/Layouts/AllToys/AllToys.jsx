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

    const [searchQuery, setSearchQuery] = useState("");

    const filteredToys = allToys.filter((toy) =>
      toy.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    const handleSearch = (event) => {
      setSearchQuery(event.target.value);
    };
    return (
        <div className=" my-20">

            
<div className="mb-4">
          <input
            type="text"
            placeholder="Search by toy name"
            value={searchQuery}
            onChange={handleSearch}
            className="w-full rounded-lg border-gray-300 focus:outline-none focus:border-blue-500 py-2 px-4"
          />
        </div>
            {
                filteredToys.map((toys)=> <Toys
                key ={toys._id}
                toys={toys}
                ></Toys>)
            }
        </div>
    );
};

export default AllToys;