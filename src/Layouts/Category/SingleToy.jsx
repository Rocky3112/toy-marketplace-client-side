/* eslint-disable no-unused-vars */

import { useContext } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { AuthCotext } from "../../Provider/AuthProvider";

/* eslint-disable react/prop-types */
const SingleToy = ({ toy }) => {
    // console.log(toy);
    const {user} = useContext(AuthCotext)
    const {name, pictureUrl, price, rating} = toy
    const location = useLocation()

    // const handleViewDetails=event=>{
    //   event.preventDefault();
    //   if(!user){
    //     alert('You have to log in first to view details')
    //   }
       
    // }
  return (
    <div >
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className=" w-60 h-60"
            src={pictureUrl}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <div className=" flex text-xl text-left pb-2">
          <p>Price :{price}</p>
          <p>Rating :{rating}</p>
          </div>
          <div className="card-actions">
                    {/* if(!user){
                        alert('please login First')
                        <Navigate
                           
                    }
                      else { */}
                        <Link to={`/toyDetails/${toy._id}`  }>
                        <button  className="bg-yellow-500 hover:bg-yellow-600  text-white font-bold py-2 px-4 rounded-full">
                          View Details
                        </button>
                      </Link>
                      {/* } */}
                    
                  </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
