// import React from "react";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import { Button, FormGroup, Label, Input } from "reactstrap";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../css/style.css";

// const Login = () => {
//   const navigate = useNavigate();

//   const initialValues = {
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     email: Yup.string().email("Invalid email").required("Email is required"),
//     password: Yup.string().required("Password is required"),
//   });

//   const handleSubmit = (formData) => {
//     axios
//       .post("http://localhost:7000/auth/login", formData)
//       .then((response) => {
//         const token = response.data.token;
//         localStorage.setItem("token", token);
//         const user = JSON.stringify(response.data.userData);
//         localStorage.setItem("user", user);

//         console.log(token, "token");
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         if (token) {
//           navigate(`/${JSON.parse(user).role.toLowerCase()}-dashboard`);
//         }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   const handleSignUpClick = () => {
//     navigate("/auth/register");
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <img src="/images/logo.png" alt="Logo" onClick={() => navigate("/")} />
//       <br />
//       <br />
//       <br />
//       <div className="wrapper">
//         <div className="title">Employee Login</div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           <Form>
//             <br />
//             <FormGroup>
//               <Label for="email">Email</Label>
//               <Field
//                 type="email"
//                 name="email"
//                 id="email"
//                 className="form-control input-lg"
//                 placeholder="Your Email"
//                 required
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="error-message"
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Field
//                 type="password"
//                 name="password"
//                 id="password"
//                 className="form-control input-lg"
//                 placeholder="Password"
//                 required
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="error-message"
//               />
//             </FormGroup>
//             <FormGroup check>
//               <Label check>
//                 <Field type="checkbox" name="rememberMe" /> Remember me
//               </Label>
//             </FormGroup>
//             <Button color="primary" type="submit">
//               Login
//             </Button>
//             <div className="checkbox">
//               <Label>
//                 Don't have an account?
//                 <div className="pass-link">
//                   <span onClick={handleSignUpClick}>Sign Up</span>
//                 </div>
//               </Label>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//       <br />
//       <br />
//     </div>
//   );
// };

// export default Login;

import React from "react";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button, FormGroup, Label, Input } from "reactstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../css/style.css";
const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:7000/auth/login", formData)
      .then((response) => {
        // Assuming the token is returned in the response
        const token = response.data.data.token;
        localStorage.setItem("token", token);
        const user = JSON.stringify(response.data.data.user);
        localStorage.setItem("user", user);

        console.log(token, "token");
        // Set the authorization header for future requests
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (token) {
          navigate(`${user.role.toLowerCase()}-dashboard`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleForgotPasswordClick = () => {
  //   navigate("../forgot-password");
  // };

  const handleSignUpClick = () => {
    navigate("/auth/register");
  };

  return (
    <div>
      <br />
      <br />
      <img src="/images/logo.png" alt="Logo" onClick={() => navigate("/")} />
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="title">Employee Login</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <br />
            <FormGroup>
              <Label for="email">Email</Label>
              <Field
                type="email"
                name="email"
                id="email"
                className="form-control input-lg"
                placeholder="Your Email"
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Field
                type="password"
                name="password"
                id="password"
                className="form-control input-lg"
                placeholder="Password"
                required
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Field type="checkbox" name="rememberMe" /> Remember me
              </Label>
            </FormGroup>
            {/* <div className="pass-link">
              <span onClick={handleForgotPasswordClick}>Forgot password?</span>
            </div> */}
            <Button color="primary" type="submit">
              Login
            </Button>
            <div className="checkbox">
              <Label>
                Don't have an account?
                <div className="pass-link">
                  <span onClick={handleSignUpClick}>Sign Up</span>
                </div>
              </Label>
            </div>
          </Form>
        </Formik>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Login;
