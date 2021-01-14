import React from "react";
import PropTypes from "prop-types";
import CardCart from "../components/cardCart";
import Button from 'react-bootstrap/Button'

let properties = {
  // Khai báo props cho card
  courseName: "The Complete Financial Analyst Course 2021",
  teacher: "ABC",
  rate: 4,
  rater: 4000,
  price: 120,
};
function ShopingCart(props) {
  return (
    <div>
      <h4>Shoping Cart</h4>
      <h4 style={{ marginLeft: 20, fontSize: 16 }}>4 course in cart</h4>
      <div style={{ flexDirection: 'row',background:"orange"}}>
        <div style={{background: "blue", width: 700}}>
          <CardCart {...properties} />
          <CardCart {...properties} />
          <CardCart {...properties} />
          <CardCart {...properties} />
        </div>
        <div style = {{width : 200, background: "red"}}>
            <h4>Total:</h4>
            <h1>$ 100.000</h1>
            <Button variant="secondary">Checkout</Button>
        </div>
      </div>
    </div>
  );
}

ShopingCart.propTypes = {};

export default ShopingCart;
