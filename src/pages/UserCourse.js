import React from "react";
import {Tab,Row,Col,Nav} from "react-bootstrap";
import CardCart from '../components/CourseDataComponent/CardCart';
import TabContainer from 'react-bootstrap/TabContainer';
import CardSearch from "../components/CourseDataComponent/CardSearch";
export default function UserCourse() {
  return (
    <div>
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Your Course</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Watch List</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4>Danh sách Khóa học sở hữu</h4>
                <div>
                    <CardSearch/>
                    <CardSearch/>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <h4>Danh sách Khóa học yêu thích</h4>
                <div>
                    <CardSearch/>
                    <CardSearch/>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
