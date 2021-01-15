import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import CardSearch from './CardSearch';
import StickyFooter from './footer';
export default function SearchComponent(props) {
  return (
    <div>
      <div>
        <div style= {{paddingTop: 10, paddingLeft: 10}}>
        <h4>{props.listSearch.length} kết quả</h4>
        </div>
        {props.listSearch.map((item, index) => {
          return (
            <div style = {{justifyContent : "center"}}>
              <CardSearch {...item} />
              </div>
          );
        })}
      </div>
      <div style= {{height:40}}></div>
      <StickyFooter />
    </div>
  );
}
