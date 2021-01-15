import Navbar from 'react-bootstrap/Navbar'
import { Form, FormControl, Nav, NavDropdown, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom'
import axios from 'axios';

const HeaderComponent = (props) => {

  const [listCategories, setListCategories] = useState([]);
  const history = useHistory()

  useEffect(() => {
    let temp1;
    async function fetchDataCategories() {
      try {
        temp1 = await axios.get('http://localhost:1337/categories?level=1').then(res => setListCategories(res.data))
      }
      catch {
        console.log(temp1);
      }
    };
    fetchDataCategories();
  }, []);

  const onClickFunction = () => {
    localStorage.clear();
    window.location.reload();
  }

  const onSearchClick = event => {
    let keyWord = document.getElementById("search").value;
    document.getElementById("search").value = "";
    return (history.push({
      pathname: "/search",
      search: '',
      state: { key: keyWord },
    }));
  }

  return (
    <div className="App">
      <Navbar style= {{background: "#f05454"}}>
        <Navbar.Brand href="/">NB School</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {listCategories.map((item, index) => {
                return (
                  <NavDropdown.Item href={"/"}>{item.Title}</NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
          <Form inline style={{
            margin: "0 auto",
            width: "30%"
          }}>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" id="search" />
            <Button variant="warning" onClick={onSearchClick}>Search</Button>
          </Form>
        </Navbar.Collapse>
        <Link to="/shoppingcart"><Button variant="warning" style={{ marginRight: "20px" }}>  <FontAwesomeIcon icon={faShoppingCart} /></Button></Link>
        {localStorage.getItem("user") ? <Link to="/profile" > <Button variant="warning" style={{ marginRight: "20px" }}>{localStorage.getItem("user")}</Button></Link> : <h5></h5>}
        {localStorage.getItem("user") ? <Button variant="warning" style={{ marginRight: "20px" }} onClick={onClickFunction}>Sign out</Button> : <h5></h5>}
        {localStorage.getItem("user") ? <h1></h1> : <Link to="/login" > <Button variant="warning" style={{ marginRight: "20px" }}>Login</Button></Link>}
        {localStorage.getItem("user") ? <h1></h1> : <Link to="/signup"><Button variant="warning" style={{ marginRight: "20px" }} >Sign up</Button></Link>}
      </Navbar>
    </div >
  );
}
export default HeaderComponent;
