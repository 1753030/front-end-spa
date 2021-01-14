import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, ButtonToolbar, Dropdown, DropdownButton } from "react-bootstrap";
import Card from "react-bootstrap/Card";
export default function SearchResultPage() {
  return (
    <div>
      <h4>313 results for “deve”</h4>
      <div>
        <Button>Haha</Button>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div style={{ width: "100%", background: "blue", height: 160 }}>
        <Card.Img
          variant="top"
          style={{ height: 150, width: 250, paddingTop: "10px" }}
          src="https://img-a.udemycdn.com/course/240x135/2622212_7845.jpg?S0OcuD0JkWnMRxhHz5ZXQPil4gaybgBsJbaZ0yUUHxlbk45q05O363AGEneKpZXfc7jph1DHVUUnGYv31mEtzC8ObGcwRIln53j52kOPkme2EQozOYHp5ghQvoE"
        />
      </div>
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First group">
          <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
          <Button>4</Button>
        </ButtonGroup>
        
      </ButtonToolbar>
    </div>
  );
}
