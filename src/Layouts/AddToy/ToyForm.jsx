
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthCotext } from "../../Provider/AuthProvider";

const ToyForm = () => {
  const { register, handleSubmit } = useForm();
  const {user} = useContext(AuthCotext)
  console.log(user);

  const onSubmit = (data) => {
    // console.log(data);
    

    fetch("http://localhost:5000/postToy", {
      method:"POST",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(data)
    })
    .then(res=> res.json())
    .then(data=>{
      console.log(data);
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
            <option value="Math Toys">Math Toys</option>
            <option value="Language Toys">Language Toys</option>
            <option value="Science Toys">Science Toys</option>
          </select>

          <label htmlFor="price">Price:</label>
          <input type="number" id="price" {...register("price")} />
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
