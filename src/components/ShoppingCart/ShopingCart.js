import React from "react";
import CardCart from "./CardCart";
import CardSearch from "../CardSearch";
import Button from "react-bootstrap/Button";

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      
      <div style={{ flexDirection: "row" }}>
        <h4 style= {{marginLeft:20}}>Giỏ hàng của bạn</h4>
        <div style={{}}>
          <CardCart {...properties} />
          <CardCart {...properties} />
        </div>
        <div style={{ width: 900, display: "flex", flexDirection: "column", marginLeft:20, borderTopWidth: 1,
          borderTopStyle: "solid", paddingTop:20, marginTop:20, alignItems : "flex-end"}}>
          <h4>Total:</h4>
          <h1>$ 100.000</h1>
          <button
            style={{
              background: "#f05454",
              width: 200,
              color: "white",
              padding: "5px",
              textAlign: "center",
              display: "inline-block",
              fontSize: "16px",
              border: "2px solid #f05454",
              borderRadius: "4px",
              boxShadow:
                "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
            }}
          >
            Thanh toán
            </button>
        </div>
      </div>
    </div>
  );
}

ShopingCart.propTypes = {};

export default ShopingCart;
