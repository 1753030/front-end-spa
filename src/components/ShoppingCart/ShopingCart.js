import React, { useEffect, useState } from "react";
import CardCart from "./CardCart";
import axios from "axios";
import CardComponent from "../CourseDataComponent/Card";

function ShopingCart(props) {
  const [listCourse, setListCourse] = useState([]);
  const [listCart, setListCart] = useState([])

  let listCourseInCart = [];

  const setListCartPromise = () => {
    return new Promise((resolve, reject) => {

      resolve(listCourseInCart)
    })
  }

  useEffect(() => {
    let temp1;

    async function searchData() {
      try {
        temp1 = await axios
          .get(`http://localhost:1337/courses?`)
          .then((res) => {
            let cart = localStorage.getItem("cart")
            cart = cart.split(',');
            cart.map((item, index) => {
              res.data.map((course, index1) => {
                if (course.id == item) {
                  listCourseInCart.push(course)
                }
              })
            })
            setListCart(listCourseInCart)
          }
          )

      } catch {
        console.log("Bug")
      }
    }
    searchData();
  }, []);

  const onClickFunc = () => {
    alert("Tính năng chưa hoàn thiện")
  }


  return (
    <div style={{ display: "flex", justifyContent: "center" }}>

      <div style={{ flexDirection: "row" }}>
        <h4 style={{ marginLeft: 20 }}>Giỏ hàng của bạn</h4>
        <div>
          {
            listCart.map((item, index) => {
              let properties = {
                id: item.id,
                courseName: item.title,
                teacher: item.instructorId.name,
                rate: item.rating,
                rater: item.numSeen,
                price: item.price,
                avatar: item.avatar.url,
              };
              return (
                <CardCart {...properties} />
              );
            })}
        </div>
        <div style={{
          width: 900, display: "flex", flexDirection: "column", marginLeft: 20, borderTopWidth: 1,
          borderTopStyle: "solid", paddingTop: 20, marginTop: 20, alignItems: "flex-end"
        }}>
          <h4>Total:</h4>
          <h1> 100.000 VNĐ</h1>
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
            onClick={onClickFunc}
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
