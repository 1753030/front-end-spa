import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
  Redirect,
} from "react-router-dom";

export default class CategoryCard extends React.Component {
  render() {
    return (
      <div
        style={{
          width: "15rem",
          height: "23rem",
          margin: "20px",
        }}
      >
        <Card
          style={{
            width: "15rem",
            height: "23rem",
            boxShadow:
              "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
            border: "2px solid #dddddd",
          }}
        >
          <Link to={`/detail/${this.props.courseName}`}>
            <Card.Img
              style={{ height: 310 }}
              variant="top"
              src={'http://localhost:1337'+this.props.avatar}
            ></Card.Img>
          </Link>

          <Card.Footer >
            <h4 style= {{ display : "flex", justifyContent:"center"}}>{this.props.name}</h4>
            
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
