import React from 'react';
import ReactDOM from 'react-dom';



 const Cart = ()=>{
   var items = [
    {id:1, text:"T-Shirt", price:320},
    {id:2, text:"smartphone", price:4000},
    {id:3, text:"watch", price:1000},
    {id:4, text:"LCD", price:320}
   ]
  
    return(
      <div>
        <h1>Your cart items list</h1>
        <ul>
           {items.map(item =>{return<li key={item.id}>{item.text} price is: {item.price}</li>})}
        </ul>
        
      </div>
    );
    }
 ReactDOM.render(
  <Cart />,
  document.getElementById("root")
 );