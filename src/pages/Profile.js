import React, { useState } from "react";
import { Image } from "react-bootstrap";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import UploadButtons from "../components/UploadButton";
import Form from "react-bootstrap/Form";
import HeaderComponent from "../components/header";
export default function ProfilePage(props) {

  // const [userProfile, setUserProfile] = useState([])

  // useEffect(() => {
  //   let temp1, temp2, temp3, temp4;
  //   async function fetchData() {
  //     try {
  //       temp1 = await axios.get('http://localhost:1337/courses?_sort=rating:desc&_limit=4').then(res => setListFCourses(res.data))
  //       temp2 = await axios.get('http://localhost:1337/courses?_sort=numSeen:desc&_limit=10').then(res => setListSCourses(res.data))
  //       temp3 = await axios.get('http://localhost:1337/courses?_sort=createdAt:desc&_limit=10').then(res => setListNCourses(res.data))
  //       temp4 = await axios.get('http://localhost:1337/categories/findMax').then(res => setListFCategories(res.data))
  //     }
  //     catch {
  //       console.log("Bug");
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div >

      <HeaderComponent />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ background: "#f05454", width: 700, height: 600 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                paddingTop: 20,
              }}
            >
              <Image
                src="https://image-us.24h.com.vn/upload/3-2018/images/2018-07-21/1532169492-532-10-su-that-ve-mr-bean-thang-ngo-ngo-ngan---ban-than-cua-cuu-thu-tuong-anh-mr-bean--1--1532060582-width1252height1252.jpeg"
                style={{
                  height: 200,
                  width: 200,
                  border: '6px solid white',
                  boxShadow:
                    "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
                }}
                roundedCircle
              />
            </div>
            <div style={{ justifyContent: "center" }}>
              <h4 style={{ textAlign: "center" }}>Nguyễn Trọng Nhân</h4>
              <h4 style={{ textAlign: "center", fontSize: 14 }}>
                Email: ntnhan198@gmail.com
              </h4>
              <h4
                style={{ textAlign: "center", fontSize: 14, paddingTop: 150, fontFamily: "inherit" }}
              >
                Thay đổi ảnh đại diện
              </h4>
            </div>
            <div style={{ justifyContent: "center" }}>
              <UploadButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// {
//   <div style={{ paddingLeft: 20, marginTop: 20, height: 600 }}>
//     <Form>
//       <Form.Group controlId="formBasicEmail">
//         <Form.Label class="font-weight-bold" style={{ fontFamily: "inherit", fontSize: 16 }}>Thay đổi Tên</Form.Label>
//         <Form.Control type="email" placeholder="Nhập tên mới" />
//       </Form.Group>
//     </Form>
//     <button
//       style={{
//         background: "#f05454",
//         width: 330,
//         color: "white",
//         padding: "5px",
//         textAlign: "center",
//         display: "inline-block",
//         fontSize: "16px",
//         border: "2px solid #f05454",
//         borderRadius: "4px",
//         boxShadow:
//           "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
//       }}
//     >
//       Thay đổi Tên
// </button>
//     <div style={{ height: 20 }}></div>
//     <div>
//       <Form>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Label class="font-weight-bold" style={{ fontFamily: "inherit", fontSize: 16 }}>Mật khẩu cũ</Form.Label>
//           <Form.Control type="email" placeholder="Nhập mật khẩu cũ" />
//           {/* <Form.Text className="text-muted">
//         We'll never share your email with anyone else.
//       </Form.Text> */}
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label class="font-weight-bold" style={{ fontFamily: "inherit", fontSize: 16 }}>Mật khẩu mới</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Nhập mật khẩu mới"
//           />
//         </Form.Group>

//         <Form.Group controlId="formBasicPassword">
//           <Form.Label class="font-weight-bold" style={{ fontFamily: "inherit", fontSize: 16 }}>Nhập lại mật khẩu mới</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Nhập lại mật khẩu mới"
//           />
//         </Form.Group>
//         <button
//           style={{
//             background: "#f05454",
//             width: 330,
//             color: "white",
//             padding: "5px",
//             textAlign: "center",
//             display: "inline-block",
//             fontSize: "16px",
//             border: "2px solid #f05454",
//             borderRadius: "4px",
//             boxShadow:
//               "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
//           }}
//         >
//           Thay đổi mật khẩu
//     </button>

//       </Form>

//       <button
//         style={{
//           background: "#f05454",
//           width: 330,
//           height: 38,
//           color: "white",
//           marginTop: "15px",
//           textAlign: "center",
//           display: "inline-block",
//           fontSize: "16px",
//           border: "2px solid #f05454",
//           borderRadius: "4px",
//           boxShadow:
//             "0 8px 16px 0 rgba(0,0,0,0.1), 0 6px 6px 0 rgba(0,0,0,0.1)",
//         }}
//       >
//         Lưu thay đổi
//     </button>
//     </div>

//   </div>
// }
