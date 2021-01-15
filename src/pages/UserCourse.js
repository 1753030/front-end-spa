import axios from "axios";
import React, { useEffect, useState } from "react";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import CardSearch from "../components/CardSearch";
import HeaderComponent from "../components/header";
export default function UserCourse() {

  const [listFCourses, setListFCourses] = useState([]);
  useEffect(() => {
    let temp1, temp2, temp3, temp4;
    async function fetchData() {
      try {
        temp1 = await axios.get('http://localhost:1337/courses?_sort=rating:desc&_limit=4').then(res => setListFCourses(res.data))
      }
      catch {
        console.log("Bug");
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={3}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Your Course</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <h4>Danh sách Khóa học sở hữu</h4>
                {listFCourses.map((item, index) => {
                  return (
                    <div style={{ justifyContent: "center" }}>
                      <CardSearch {...item} />
                    </div>
                  );
                })}
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </div>
  );
}
