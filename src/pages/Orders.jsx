import React from "react";

// Import the css file
import "../styles/style.css"

/* Import images */
import advil from "../images/advil.png"
import advil2 from "../images/advil2.png"
import reactine from "../images/reactine.png";
import vicks from "../images/vicks.png";



// The Orders Component
const Orders = () => {

  // Array of product orders and their image, name, description, price, quantity and status
  let products = [
    {
      id: 1,
      src: advil,
      name: "Advil",
      description: "Regular Strength Ibuprofen Caplets for Headaches and Pain Relief, 200 mg, 24 Count",
      price: "$7.29",
      quantity: 2,
      status: "In Transit",
    },
    {
      id: 2,
      src: advil2,
      name: "Advil",
      description: "Regular Strength Ibuprofen Tablets for Headaches and Pain Relief, 200 mg, 50 Count",
      price: "$11.99",
      quantity: 1,
      status: "Delivered",
    },
    {
      id: 9,
      src: reactine,
      name: "Reactine",
      description: "Extra Strength 24Hour Allergy Medicine, 10mg, 84 count",
      price: "$62.99",
      quantity: 1,
      status: "Delivered",
    },
    {
      id: 10,
      src: vicks,
      name: "Vicks",
      description: "VapoRub Ointment, 57 ml",
      price: "$8.49",
      quantity: 2,
      status: "Delivered",
    },
  ];



  // Return the Orders component
  return (
    <div class="orders-page">

      {/* Headers */}
      <h1>Track Your Orders</h1>
      <h3>View Your Order History</h3>


      {/* Map over the products array and display each pair of products */}
      {products.map(({ id, src, name, description, price, quantity, status }) => (

        /* Product JSX (HTML) */
        <div key={id} class="image-and-caption-box">
          <img class="product-picture" alt="" src={src} />
          <div class="orders-text-box">
            <div class="product-name-description-box">
              <div class="product-name">
                {name}
              </div>
              <div class="product-description">
                {description}
              </div>
            </div>
            <div class="product-price-box">
              <div class="product-price">
                {price} x {quantity}
              </div>
              <div class="product-status">
                {status}
              </div>
              <div class="product-buy">
                Track Shipping
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}



export default Orders;

