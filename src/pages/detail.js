import React, { useEffect, useState } from "react";
import StickyFooter from "../components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardComponent from "../components/CourseDataComponent/Card";
import "../components/CourseDataComponent/CourseData.css";
import DetailComponent from "../components/Detail/detailComponent";
import Navbar from 'react-bootstrap/Navbar'
import { Form, FormControl, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'
import axios from "axios";
import HeaderComponent from "../components/header";

const Detail = (props) => {

  const [listNCourses, setListSCourses] = useState([]);

  useEffect(() => {
    let temp1;
    async function fetchData() {
      try {
        temp1 = await axios.get('http://localhost:1337/courses?_sort=numSeen:desc&_limit=10').then(res => setListSCourses(res.data))
      }
      catch {
        console.log("Bug");
      }
    };
    fetchData();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    centerMode: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  let id = props.match.params.id;

  return (
    // <div>
    //   <h2>This is detail page {props.match.params.id}</h2>
    //   <ProductCTA/>
    // </div>

    <div>
      <HeaderComponent />
      <DetailComponent id={id} />
      {/* <h4
        style={{ marginLeft: "10%", marginBottom: "20px", marginTop: "20px" }}      Chưa chuyển được từ trong trang detail này qua detail khác
      >
        Khóa học được xem nhiều nhất
      </h4>
      <div className="container">
        <Slider {...settings}>
          {listNCourses.map((item, index) => {
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
              <CardComponent {...properties} />
            );
          })}
        </Slider>
      </div> */}
      <StickyFooter></StickyFooter>
    </div>
  );
};

export default Detail;
