import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Container from "@material-ui/core/Container";

import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../CourseDataComponent/CourseData.css";
import Comment from './Comment'
import axios from "axios";

function DetailComponent(props) {

    const [listCourse, setListCourse] = useState([]);

    useEffect(() => {
        let temp1;
        async function fetchData() {
            try {
                temp1 = await axios.get(`http://localhost:1337/courses?id=${props.id}`).then(res => setListCourse(res.data))
            }
            catch {
                console.log("Bug");
            }
        };
        fetchData();
    }, []);

    return (
        <Container
            style={{
                flexDirection: "column",
                boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
                paddingTop: 40,
                background: "#dddddd",
            }}
        >
            <Grid container>
                <Grid md={6}>
                    <div style={{ background: "#dddddd", paddingBottom: 20 }}>
                        <form>
                            <div>
                                {listCourse.map((item, index) => {
                                    return (
                                        <h5 style={{ fontSize: 26, marginBottom: 5 }}>
                                            {item.title}
                                        </h5>
                                    );
                                })}
                                {listCourse.map((item, index) => {
                                    return (
                                        <div
                                            class="d-flex justify-content-start"
                                            style={{ paddingTop: 0 }}
                                        >

                                            <h6 style={{ fontSize: 20, color: "red", marginRight: 4 }}>
                                                {item.rating}{" "}
                                            </h6>

                                            <StarRatingComponent
                                                name="rate2"
                                                editing={false}
                                                renderStarIcon={() => <FaStar></FaStar>}
                                                starCount={5}
                                                value={item.rating}
                                            />
                                            <h6
                                                style={{
                                                    fontSize: 14,
                                                    fontFamily: "monospace",
                                                    marginLeft: 4,
                                                    marginTop: 7,
                                                }}
                                            >
                                                {item.numSeen}
                                            </h6>
                                        </div>
                                    );
                                })}

                                {listCourse.map((item, index) => {
                                    return (
                                        <h6 style={{ fontSize: 20, color: "Black" }}>{item.price}VNĐ</h6>
                                    );
                                })}

                                {listCourse.map((item, index) => {
                                    return (
                                        <h6 style={{ fontSize: 12, color: "Black" }}>
                                            {" "}
                                            LastUpdated {item.createdAt}{" "}
                                        </h6>
                                    );
                                })}
                                <button
                                    style={{
                                        background: "#f05454",
                                        width: 95,
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
                                    Add to cart
                                </button>{" "}
                                {/* <button
                                    style={{
                                        background: "#f05454",
                                        width: 95,
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
                                    Watch list
                                </button> */}
                            </div>
                        </form>
                    </div>
                </Grid>
                <Grid md={6} style={{ position: "relative" }}>
                    <Hidden smDown>
                        <div
                            style={{
                                position: "absolute",
                                top: -67,
                                left: -67,
                                right: 0,
                                bottom: 0,
                                width: 400,
                            }}
                        />
                        {listCourse.map((item, index) => {
                            return (
                                <img
                                    src={'http://localhost:1337' + item.avatar.url}
                                    style={{
                                        position: "absolute",
                                        top: -28,
                                        left: -28,
                                        right: 0,
                                        bottom: 0,
                                        width: "100%",
                                        maxWidth: 600,
                                    }}
                                />
                            );
                        })}
                    </Hidden>
                </Grid>
            </Grid>
            <div style={{}}>
                <h4
                    style={{
                        color: "#30475e",
                        marginBottom: "20px",
                        marginTop: "20px",
                        fontSize: 25,
                    }}
                >
                    Nội dung khóa học
          </h4>
                {listCourse.map((item, index) => {
                    return (
                        <h4
                            style={{
                                color: "#30475e",
                                marginBottom: "20px",
                                marginTop: "20px",
                                fontSize: 15,
                            }}
                        >
                            {item.detailDes}
                        </h4>
                    );
                })}
                <h4
                    style={{
                        color: "#30475e",
                        marginBottom: "20px",
                        marginTop: "20px",
                        fontSize: 25,
                    }}
                >
                    Đề cương khóa học
          </h4>

                <div>
                    <div>
                        <div id="accordion">
                            <div class="card">
                                <div class="card-header" id="headingOne">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link"
                                            data-toggle="collapse"
                                            data-target="#collapseOne"
                                            aria-expanded="true"
                                            aria-controls="collapseOne"
                                        >
                                            Chapter 1
                      </button>
                                    </h5>
                                </div>

                                <div
                                    id="collapseOne"
                                    class="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion"
                                >
                                    {listCourse.map((item, index) => {
                                        return (
                                            <div class="card-body">
                                                {item.detailDes}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingTwo">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseTwo"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo"
                                        >
                                            Chapter 2
                      </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseTwo"
                                    class="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion"
                                >
                                    {listCourse.map((item, index) => {
                                        return (
                                            <div class="card-body">
                                                {item.detailDes}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                            <div class="card">
                                <div class="card-header" id="headingThree">
                                    <h5 class="mb-0">
                                        <button
                                            class="btn btn-link collapsed"
                                            data-toggle="collapse"
                                            data-target="#collapseThree"
                                            aria-expanded="false"
                                            aria-controls="collapseThree"
                                        >
                                            Chapter 3
                      </button>
                                    </h5>
                                </div>
                                <div
                                    id="collapseThree"
                                    class="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordion"
                                >
                                    {listCourse.map((item, index) => {
                                        return (
                                            <div class="card-body">
                                                {item.detailDes}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h4
                style={{
                    color: "#30475e",
                    marginBottom: "20px",
                    marginTop: "20px",
                    fontSize: 25,
                }}
            >
                Nhận xét và đánh giá
          </h4>
            <div style={{ paddingLeft: 10 }}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </Container>
    );
}
export default DetailComponent;