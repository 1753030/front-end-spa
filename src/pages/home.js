import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import CourseData from '../components/CourseDataComponent/CourseData';
import HeaderComponent from '../components/header';

// Home.prototype = {

// }


const Home = (props) => {
  //const cartList = useSelector(state => state.cart.list); //get redux
  // console.log(cartList);
  return (
    <div className="App">
      <HeaderComponent/>
      <CourseData />
    </div>
  );
}
export default Home;
