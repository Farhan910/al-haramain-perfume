import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useProducts from '../Hooks/Hooks';

const MyItem = () => {

    
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://salty-atoll-21303.herokuapp.com/myitem?email=${user?.email}`,{
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => console.log(data));
    },[user]);
    
    const [products] = useProducts();

  console.log(user?.name);

    
    

  return (
    <div>
      <div className="">
        <div className="container">
          <table className="table t-head mt-5">
            <thead >
              <tr className="t-head" >
                
                <th className="t-head">Image</th>
                <th className="">Name</th>
                <th className="t-head">Price</th>
                <th className="t-head">Quantity</th>
                <th className="t-head">Email</th>
                
              </tr>
            </thead>
            <tbody>
              
              {products.map((product) => {
                  console.log(product.name);
                  return(
                <tr>
                
                <img className="table-img" src={product.image} alt="" />
                <td className="t-head"> {product.name}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>{user?.email}</td>
                
              </tr>)
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyItem;