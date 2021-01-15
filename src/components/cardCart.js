import React from "react";
import { Card, Button } from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";

export default class CardCart extends React.Component {
  // onRedirect = () => {
  //     //alert('here');
  //     this.props.history.push('/');
  // }

  console.log("cart")

  render() {
    return (
      <div
        style={{
            border: '2px solid red',
            width: 690,
            height: 170,
          margin: "20px",
        }}
      >
        <Card border="primary" style={{background:"orange", width: "15rem", height: 150, flexDirection: 'row' }}>
          <a href="/detail">
            {" "}
            <Card.Img
              style = {{height: 170, width: 280}}
              variant="top"
              src="https://img-a.udemycdn.com/course/240x135/1917546_682b_3.jpg?Zo3-EFJGU-SX6Li0eFavaKwR2z5w7rv7W0-O-YQNe7vIqWuoAWG4p0n5qRecioEROaVP0UKeDzEN7RqJT_G2nclaKhFtLq7b0KPaZOBdjceoEkEYYc8xn7KbkMw3rsQ8"
            ></Card.Img>
          </a>
          <Card.Body
            
          >
            <Card.Title style = {{ width: 240}} >{this.props.courseName}</Card.Title>
            <Card.Text style={{ fontSize: 12, marginBottom: 5 }}>
              {this.props.teacher}
            </Card.Text>
            <div class="d-flex justify-content-start" style={{ paddingTop: 0 }}>
              <h6 style={{ fontSize: 20, color: "red", marginRight: 4 }}>
                {this.props.rate}{" "}
              </h6>

              <StarRatingComponent
                name="rate2"
                editing={false}
                renderStarIcon={() => <FaStar></FaStar>}
                starCount={5}
                value={this.props.rate}
              />

              <h6
                style={{
                  fontSize: 14,
                  fontFamily: "monospace",
                  marginLeft: 4,
                  marginTop: 7,
                }}
              >
                ({this.props.rater})
              </h6>
            </div>
            <h6 style={{ fontSize: 20, color: "Black" }}>
              ${this.props.price}
            </h6>
          </Card.Body>
          <Card.Footer>
            <Button>Remove</Button> <Button>Wishlist</Button>
          </Card.Footer>
        </Card>
      </div>
    );
  }
}
