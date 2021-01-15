import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import HeaderComponent from "../components/header";
import axios from "axios";
import CardCart from "../components/ShoppingCart/CardCart";
export default function CategoriesDetail(props) {
  const [category, setCategory] = useState([])

  useEffect(() => {
    let temp1;
    async function fetchData() {
      try {
        temp1 = await axios.get(`http://localhost:1337/courses/findAllByCategory/${props.match.params.id}`).then(res => setCategory(res.data))
      }
      catch {
        console.log("Bug");
      }
    };
    fetchData();
  }, []);

  console.log(category)

  return (
    <div>
      <HeaderComponent />
      <h4>Web Development Courses</h4>
      <h5>Courses to get you started</h5>
      {
        category.map((item, index) => {
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
        })
      }
    </div>
  );
}
