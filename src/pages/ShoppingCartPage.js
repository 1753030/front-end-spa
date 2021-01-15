import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComponent from "../components/header";
import ShoppingCart from "../components/ShoppingCart/ShopingCart";


const ShoppingCartPage = (props) => {
    return (
        <div>
            <HeaderComponent />
            <ShoppingCart />
        </div>
    );
}

export default ShoppingCartPage;