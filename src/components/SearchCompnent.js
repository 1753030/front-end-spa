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
        <h4>{props.listSearch.length} kết quả</h4>
        {props.listSearch.map((item, index) => {
          return (
            <CardSearch {...item} />
          );
        })}
      </div>
      <div style= {{height:40}}></div>
      <StickyFooter />
    </div>
  );
}
