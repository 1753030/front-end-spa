import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

const CardCart = (props) => {
  // onRedirect = () => {
  //     //alert('here');
  //     props.history.push('/');
  // }

  const onClickFunc = () =>{
    alert("Tính năng chưa hoàn thiện")
  }

  return (
    <div
      style={{
        margin: "20px",

      }}
    >
      <Card border="primary" style={{ height: 170, width: 900, flexDirection: 'row', }}>
        <a href="/detail">
          {" "}
          <Card.Img
            style={{ height: 168, width: 280, padding: 5 }}
            variant="top"
            src={'http://localhost:1337' + props.avatar}
          ></Card.Img>
        </a>
        <Card.Body

        >
          <Card.Title style={{ width: 440 }} >{props.courseName}</Card.Title>
          <Card.Text style={{ fontSize: 12, marginBottom: 5 }}>
            {props.teacher}
          </Card.Text>
          <div class="d-flex justify-content-start" style={{ paddingTop: 0 }}>
            <h6 style={{ fontSize: 20, color: "red", marginRight: 4 }}>
              {props.rate}{" "}
            </h6>

            <StarRatingComponent
              name="rate2"
              editing={false}
              renderStarIcon={() => <FaStar></FaStar>}
              starCount={5}
              value={props.rate}
            />

            <h6
              style={{
                fontSize: 14,
                fontFamily: "monospace",
                marginLeft: 4,
                marginTop: 7,
              }}
            >
              ({props.rater})
              </h6>
          </div>
          <h6 style={{ fontSize: 20, color: "Black" }}>
            {props.price} VNĐ
          </h6>
        </Card.Body>
        <Card.Footer>
          <Button onClick={onClickFunc}>Remove</Button>

          {/* <Button>Wishlist</Button> */}
        </Card.Footer>
      </Card>
    </div>
  );
}
export default CardCart;
