/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthCotext } from "../../Provider/AuthProvider";

const Toys = ({toys}) => {
  const {user}=useContext(AuthCotext)

    const {price,name,quantity,sellerName,subCategory} = toys
    return (
        <div className="">
            <div className="container mx-auto p-2">
      <table className="min-w-full">
        <thead className=" bg-slate-300">
          <tr>
            <th>Seller</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody className=" bg-slate-200 h-16">
        <tr>
              <td>{sellerName}</td>
              <td>{name}</td>
              <td>{subCategory}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              
              <td>
                <button className="bg-amber-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
                  View Details
                </button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
        </div>
    );
};



export default Toys;
