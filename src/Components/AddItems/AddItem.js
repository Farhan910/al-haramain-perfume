import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddItem.css'

const AddItem = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name: e.target.name?.value,
      price: e.target.price?.value,
      shortDescription: e.target.shortDescription?.value,
      image: e.target.image?.value,
      quantity: e.target.quantity?.value,
      serviceProvider: e.target.serviceProvider.value,
    }
    const { data } = await axios
      .post("http://localhost:5000/product", product)
      console.log(data);  
  };
  const { register  } = useForm();
  
  return (
    <div className="">
      <h2 className="form">Add Items</h2>
      <div className="form">
      <form className="input" onSubmit={handleSubmit}>
        <input className="input"{...register("name",{ required: true, maxLength: 20 })} placeholder="Name" />
        <input className="input"{...register("shortDescription")}  placeholder="description"/>
        <input className="input"type="number" {...register("price")}  placeholder="Price"/>
        <input className="input"type="text" {...register("image")} placeholder="URL" />
        <input className="input"type="text" {...register("quantity")} placeholder="Quantity" />
        <input className="input"type="text" {...register("serviceProvider")} placeholder="Supplier" />
        <input className="input"type="submit" value="Submit" />
      </form>
      </div>
    </div>
  );
};

export default AddItem;
