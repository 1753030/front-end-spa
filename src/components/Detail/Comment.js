import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";
import { FaStar } from "react-icons/fa";
import { Image } from "react-bootstrap";
export default class Comment extends Component {
  render() {
    return (
      <div style={{ paddingBottom: 20 }}>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <Image
            style={{ height: 50, width: 50 }}
            src="https://images.theconversation.com/files/304864/original/file-20191203-67028-qfiw3k.jpeg?ixlib=rb-1.1.0&rect=638%2C2%2C795%2C745&q=45&auto=format&w=496&fit=clip"
            roundedCircle
          />
          <div style={{width: 10}}></div>
          <div>
            <h4>Mr Bean</h4>
            <h4 style = {{fontSize: 14,  fontFamily: 'sans-serif'}}>Tham gia 4 khóa học</h4>
          </div>
        </div>
        <div style={{height: 20}}></div>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <StarRatingComponent
            name="rate2"
            editing={false}
            renderStarIcon={() => <FaStar></FaStar>}
            starCount={5}
            value={4}
          />
                    <div style={{width: 10}}></div>
          <h4 style ={{fontSize: 14,  fontFamily: 'sans-serif'}}>8 tháng trước</h4>
        </div>
        <h4 style= {{fontSize: 16,}}>
          This is an amazing course for the beginners who want to understand
          about everything in machine learning. Thank you to the instructors
          (Hadelin de Ponteves and Kirill Eremenko) for explained it clearly and
          easy to understand. I hope this knowledge can help me for developing
          my start-up, advancing technology, and giving benefits to others.
        </h4>
      </div>
    );
  }
}
