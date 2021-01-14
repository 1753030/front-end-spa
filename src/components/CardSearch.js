import React from "react";
import Card from "react-bootstrap/Card";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import { useHistory } from "react-router";

export default function CardSearch(props) {
  const history = useHistory();

  const onClickFunction = () => {
    history.push(`/detail/${props.id}`)
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          borderTopWidth: 1,
          borderTopStyle: "solid",
          height: 10,
          marginTop: 10,
        }}
      ></div>
      <div style={{ width: "100%" }} onClick = {onClickFunction}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",

            height: 160,
          }}
        >
          <Card.Img
            variant="top"
            style={{ height: 160, width: 250 }}
            src={'http://localhost:1337' + props.avatar.url}
          />
          <div style={{ width: 20 }}></div>
          <div style={{ width: "70%" }}>
            <div>
              <h4>
                {props.title}
              </h4>
              <h4>Mô tả {props.briefDes}</h4>
              <div style={{ display: "flex" }}>
                <h4>{props.rating}</h4>
                <StarRatingComponent
                  name="rate2"
                  editing={false}
                  renderStarIcon={() => <FaStar></FaStar>}
                  starCount={5}
                  value={props.rating}
                />
              </div>
            </div>
          </div>
          <h4 style={{ width: 200 }}>{props.price} VNĐ</h4>
        </div>
      </div>

    </div>
  );
}
