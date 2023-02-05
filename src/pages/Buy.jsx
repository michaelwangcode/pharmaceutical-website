import React from "react";

// Import the css file
import "../styles/style.css"

/* Import images */
import advil from "../images/advil.png";
import advil2 from "../images/advil2.png";
import metamucil from "../images/metamucil.png";
import gravol from "../images/gravol.png";
import benadryl from "../images/benadryl.png";
import polysporin from "../images/polysporin.png";
import buckleys from "../images/buckleys.png";
import aspirin from "../images/aspirin.png";
import reactine from "../images/reactine.png";
import vicks from "../images/vicks.png";



// The Buy Component
const Buy = () => {

  // Array of profucts and their image, name, description and price
  let products = [
    {
      id: 1,
      src: advil,
      name: "Advil",
      description: "Regular Strength Ibuprofen Caplets for Headaches and Pain Relief, 200 mg, 24 Count",
      price: "$7.29",

      id2: 2,
      src2: advil2,
      name2: "Advil",
      description2: "Regular Strength Ibuprofen Tablets for Headaches and Pain Relief, 200 mg, 50 Count",
      price2: "$11.99",
    },
    {
      id: 3,
      src: metamucil,
      name: "Metamucil",
      description: "Meta Fiber Gummies 72ct",
      price: "$26.99",

      id2: 4,
      src2: gravol,
      name2: "Gravol",
      description2: "Easy to Swallow Tablets 50 mg",
      price2: "$9.49",
    },
    {
      id: 5,
      src: benadryl,
      name: "Benadryl",
      description: "Allergy Medicine, 25mg, Value Size",
      price: "$31.99",

      id2: 6,
      src2: polysporin,
      name2: "Polysporin",
      description2: "Complete Antibiotic Ointment, Heal-Fast Formula",
      price2: "$18.99",
    },
    {
      id: 7,
      src: buckleys,
      name: "Buckleys",
      description: "Mucus Relief Cough Cold & Flu Syrup Sucrose-Free 250mL",
      price: "$18.99",

      id2: 8,
      src2: aspirin,
      name2: "Aspirin",
      description2: "81mg, Daily Low Dose Enteric Coated Tablets, 180 Tablets",
      price2: "$24.99",
    },
    {
      id: 9,
      src: reactine,
      name: "Reactine",
      description: "Extra Strength 24Hour Allergy Medicine, 10mg, 84 count",
      price: "$62.99",

      id2: 10,
      src2: vicks,
      name2: "Vicks",
      description2: "VapoRub Ointment, 57 ml",
      price2: "$8.49",
    },
  ];



  // Return the Buy component
  return (
    <div class="buy-page">

      {/* Headers */}
      <h1>View Our Inventory</h1>
      <h3>Shipped Directly to Your Door</h3>


      {/* Map over the products array and display each pair of products */}
      {products.map(({ id, src, name, description, price, id2, src2, name2, description2, price2 }) => (

        /* Two product container */
        <div class="two-element-container">

          {/* Product 1 */}
          <div key={id} class="image-and-caption-box">
            <img class="product-picture" alt="" src={src} />
            <div class="product-text-box">
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
                  {price}
                </div>
                <div class="product-buy">
                  Buy Now
                </div>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div key={id2} class="image-and-caption-box">
            <img class="product-picture" alt="" src={src2} />
            <div class="product-text-box">
              <div class="product-name-description-box">
                <div class="product-name">
                  {name2}
                </div>
                <div class="product-description">
                  {description2}
                </div>
              </div>
              <div class="product-price-box">
                <div class="product-price">
                  {price2}
                </div>
                <div class="product-buy">
                  Buy Now
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}



export default Buy;

