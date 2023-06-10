import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label } from "reactstrap";
import * as Yup from "yup";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import "../css/style.css";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    password: "",
    password2: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
    password2: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required"),
  });

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:7000/auth/register", formData)
      .then((response) => {
        // Assuming the user is registered successfully
        navigate("./login");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <img src="/images/logo.png" alt="logo" />
      <br />
      <br />
      <br />
      <div className="wrapper">
        <div className="title">Employee Sign Up</div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <Label for="name">Name</Label>
              <Field
                type="text"
                name="name"
                className="form-control input-lg"
                placeholder="Your Name"
                required
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Label for="email">Email</Label>
              <Field
                type="email"
                name="email"
                className="lg-form"
                placeholder="Your Email"
                required
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Label for="password">Password</Label>
              <Field
                type="password"
                name="password"
                className="form-control input-lg"
                placeholder="Password"
                required
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <Label for="confirm_password">Confirm Password</Label>
              <Field
                type="password"
                name="password2"
                className="form-control input-lg"
                placeholder="Confirm Password"
                required
              />
              <ErrorMessage
                name="password2"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="contact-form-btn">
                <span>Create account</span>
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default SignUp;

// import React, { useEffect } from "react";

// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Label } from "reactstrap";
// import * as Yup from "yup";

// import { Button } from "reactstrap";
// import { useNavigate } from "react-router-dom";

// import "../css/style.css";
// import axios from "axios";

// const SignUp = () => {
//   const navigate = useNavigate();

//   const initialValues = {
//     name: "",
//     email: "",

//     password: "",
//     password2: "",
//   };
//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("This field is required"),
//     email: Yup.string().required("This field is required"),

//     password: Yup.string().required("This field is required"),
//     password2: Yup.string().required("This field is required"),
//   });
//   const handleSubmit = (formData) => {
//     console.log("i am inside handle submit");
//     axios
//       .post("http://localhost:7000/auth/register", formData)
//       .then((response) => {
//         // if (response.data.isSuccess) {
//         //   navigate("../sign-in");
//         // }
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//   };

//   return (
//     <div>
//       <br />
//       <br />
//       <img src="/images/logo.png" alt="logo" />
//       <br />
//       <br />
//       <br />
//       <div className="wrapper">
//         <div className="title">Employee Sign Up</div>
//         <Formik
//           initialValues={initialValues}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           //  onSubmit={(values) => handleSubmit(values)}

//           //validate={(data, error) => console.log(data, error)}
//         >
//           <Form>
//             <div className="form-group">
//               <Label for="name">Name</Label>
//               <Field
//                 type="text"
//                 name="name"
//                 //     value=""
//                 className="form-control input-lg"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <Label for="email">Email</Label>
//               <Field
//                 type="email"
//                 name="email"
//                 //   value=""
//                 className="lg-form"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <Label for="password">Password</Label>
//               <Field
//                 type="password"
//                 name="password"
//                 //   value=""
//                 className="form-control input-lg"
//                 placeholder="Password"
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <Label for="confirm_password">Confirm Password</Label>
//               <Field
//                 type="password"
//                 name="password2"
//                 //  value=""
//                 className="form-control input-lg"
//                 placeholder="Confirm Password"
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <button type="submit" className="contact-form-btn">
//                 <span> Create account</span>
//               </button>
//             </div>
//           </Form>
//         </Formik>
//       </div>
//     </div>
//   );
// };
// export default SignUp;
