/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const MyToy = ({ toy, handleDelete }) => {
    // console.log(toy);
    const {_id, name,price,quantity,description}=toy;




  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead>
            <tr className="">
             
              <th className=" text-sm">Name</th>
              <th className=" text-sm">Price</th>
              <th className=" text-sm">Quantity</th>
              <th className=" text-sm">Description</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>{name}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>{description}</td>
              <td>
              <button onClick={()=>handleDelete(_id)} className=" btn btn-warning mr-5">Delete</button>
              <Link to={`/updatetoys/${_id}`}>
              <button className=" btn btn-primary">Edit</button>
              </Link>
              </td>
            </tr>
        
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToy;
