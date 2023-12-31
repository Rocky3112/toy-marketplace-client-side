
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthCotext } from "../../Provider/AuthProvider";
import useTitle from "../../Hooks/useTitle";

const ToyForm = () => {
  const { register, handleSubmit } = useForm();
  const {user} = useContext(AuthCotext)
  useTitle("Add Toy")
  // console.log(user);

  const onSubmit = (data) => {
    // console.log(data);
    
    fetch("https://toy-marketplace-server-side-three.vercel.app/postToy", {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert('successfully Added')
      }
    })
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className=" bg-slate-200 p-10 rounded shadow-xl">
      <div className=" flex items-center justify-between gap-6">
        <div className=" grid gap-5">
          <label htmlFor="pictureUrl">Picture URL:</label>
          <input type="text" id="pictureUrl" {...register("pictureUrl")} />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" {...register("name")} />

          <label htmlFor="sellerName">Seller Name:</label>
          <input type="text" id="sellerName" {...register("sellerName")} />
        </div>
        <div className=" grid gap-5">
          <label htmlFor="sellerEmail">Seller Email:</label>
          <input type="email" id="sellerEmail" defaultValue={user.email} {...register("sellerEmail")} />

          <label htmlFor="subCategory">Sub-category:</label>
          <select id="subCategory" {...register("subCategory")}>
            <option value="Mini Truck">Mini Truck</option>
            <option value="Sport Car">Sport Car</option>
            <option value="Regular Car">Regular Car</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" {...register("price", { valueAsNumber: true })} />
        </div>
        <div className=" grid gap-5">
          <label htmlFor="rating">Rating:</label>
          <input type="number" id="rating" {...register("rating")} />

          <label htmlFor="quantity">Available Quantity:</label>
          <input type="number" id="quantity" {...register("quantity")} />

          <label htmlFor="description">Detail Description:</label>
          <textarea id="description" {...register("description")} />
        </div>
      </div>

      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ToyForm;
