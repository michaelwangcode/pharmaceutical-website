import React from "react";
import { Link } from "react-router-dom"
import Pharmacy from "../images/pharmacy.png"


const Home = () => {
  return (
    <div style={{"margin-bottom": "50px", "margin-top": "38px"}}>
      <h1>Welcome to Our Online Store</h1>
      <h3>Buy Pharmaceuticals Safely and Securely</h3>
      <Link to="/buy">
        <img src={Pharmacy} alt="pharmacy" class="home-page-image"/>
      </Link>
    </div>
  )
}


export default Home;
