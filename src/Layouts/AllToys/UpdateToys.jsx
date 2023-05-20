/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthCotext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const UpdateToys = () => {
    const toy = useLoaderData();
    console.log(toy);
    const {_id, name,price,quantity,description}=toy;
    console.log(_id);

    const { register, handleSubmit } = useForm();
  const {user} = useContext(AuthCotext)
  // console.log(user);

  const onSubmit = (data) => {
    console.log(data);
    
    fetch(`https://toy-marketplace-server-side-three.vercel.app/myToyy/${_id}`, {
      method:"PUT",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      if(data.modifiedCount>0){
        alert('successfully Added')
      }
    })
  };
    return (
        <div>
            <h1>Update form</h1>
            <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-200 p-10 rounded shadow-xl">
      <div className=" flex items-center justify-between gap-6">
        <div className=" grid gap-5">

          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name}  id="name" {...register("name")} />
          <label htmlFor="price">Price:</label>
          <input type="number" defaultValue={price}  id="price" {...register("price")} />

        </div>
    
        <div className=" grid gap-5">

          <label htmlFor="quantity">Available Quantity:</label>
          <input type="number" defaultValue={quantity}  id="quantity" {...register("quantity")} />

          <label htmlFor="description">Detail Description:</label>
          <textarea defaultValue={description}  id="description" {...register("description")} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Update Toy</button>
    </form>
        </div>
    );
};

export default UpdateToys;