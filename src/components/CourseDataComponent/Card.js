import React from "react";
import { Card } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router-dom";

const CardComponent = (props) => {
  
  const history = useHistory();

  const onClickFunction = () => {
    history.push(`/detail/${props.id}`)
  }

  const onAddToCardClick = () => {
    let array = [];
    array.push(props.id);

    if (!localStorage.getItem("cart")) {
      localStorage.setItem("cart", array);
    }
    else {
      array.push(localStorage.getItem("cart"));
      localStorage.setItem("cart", array);
    }
  }

  return (
    <div
      style={{
        width: "15rem",
        height: "23rem",
        margin: "20px",
      }}
    >
      <Card style={{
        width: "15rem", height: "23rem", boxShadow:
          "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)", border: "2px solid #dddddd",
      }}>
        <Card.Img
          variant="top"
          src={'http://localhost:1337' + props.avatar}
          onClick={onClickFunction}></Card.Img>
        <Card.Body>

          <Card.Title>{props.courseName.slice(0, 30)} {props.courseName.length > 30 && "..."}</Card.Title>
          <Card.Text style={{ fontSize: 12, marginBottom: 5 }}>
            {props.teacher}
          </Card.Text>
          <div
            className="d-flex justify-content-start"
            style={{ paddingTop: 0 }}
          >
            <h6 style={{ fontSize: 20, color: "#f05454", marginRight: 4, borderRadius: "10px", }}>
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
        <Card.Footer style = {{justifyContent: "center",
              display: "flex",}}>
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
            onClick={onAddToCardClick}
          >
            Add to cart
            </button>{" "}
          {/* <button style={{
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
          }}>Watchlist</button> */}
        </Card.Footer>
      </Card>
    </div>
  );
}

export default CardComponent;