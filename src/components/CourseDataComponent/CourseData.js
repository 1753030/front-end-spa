import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CardComponent from "./Card";
import { BrowserRouter, Route, Link } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import StickyFooter from "../footer";
import "./CourseData.css";
import axios from "axios";

const CourseData = () => {
  const settings = {
    dots: false,
    arrows: true,
    centerMode: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const [listSCourses, setListSCourses] = useState([]);
  const [listFCourses, setListFCourses] = useState([]);
  const [listNCourses, setListNCourses] = useState([]);

  const [listFCategories, setListFCategories] = useState([]);

  useEffect(() => {
    let temp1, temp2, temp3, temp4;
    async function fetchData() {
      try {
        temp1 = await axios.get('http://localhost:1337/courses?_sort=rating:desc&_limit=4').then(res => setListFCourses(res.data))
        temp2 = await axios.get('http://localhost:1337/courses?_sort=numSeen:desc&_limit=10').then(res => setListSCourses(res.data))
        temp3 = await axios.get('http://localhost:1337/courses?_sort=createdAt:desc&_limit=10').then(res => setListNCourses(res.data))
        temp4 = await axios.get('http://localhost:1337/categories/findMax').then(res => setListFCategories(res.data))
      }
      catch {
        console.log("Bug");
      }
    };
    fetchData();
  }, []);


  // let categoryName = {
  //   // Khai báo props cho card
  //   name: "Design",
  // };
  return (
    <React.Fragment>
      <h4
        style={{ marginLeft: "10%", marginBottom: "20px", marginTop: "20px" }}
      >
        Khóa học nổi bật nhất tuần qua
      </h4>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {listFCourses.map((item, index) => {
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
      </div>
      <h4
        style={{ marginLeft: "10%", marginBottom: "20px", marginTop: "20px" }}
      >
        Khóa học được xem nhiều nhất
      </h4>
      <div className="container">
        <Slider {...settings}>
          {listSCourses.map((item, index) => {
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
      </div>
      <h4
        style={{ marginLeft: "10%", marginBottom: "20px", marginTop: "20px" }}
      >
        Khóa học mới nhất
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
      </div>

      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          background: "#f05454",
          paddingTop: "20px",
        }}
      >
        <h4
          style={{
            color: "white",
            marginLeft: "10%",
            marginBottom: "20px",
            marginTop: "20px",
          }}
        >
          Lĩnh vực đăng kí học nhiều nhất
        </h4>
        <div style={{ display: "flex", justifyContent: "center" }}>
        {listFCategories.map((item, index) => {
            let categoryName = {
              name: item.Title,
              avatar: item.avatar.url
            };
            return (
              <CategoryCard {...categoryName}></CategoryCard>
            );
          })}
        </div>
        {/* <div style={{ height: 20 }}></div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CategoryCard {...categoryName}></CategoryCard>
          <CategoryCard {...categoryName}></CategoryCard>
          <CategoryCard {...categoryName}></CategoryCard>
          <CategoryCard {...categoryName}></CategoryCard>
        </div> */}
      </div>
      <div>
        <StickyFooter></StickyFooter>
      </div>
    </React.Fragment>
  );
};

export default CourseData;
