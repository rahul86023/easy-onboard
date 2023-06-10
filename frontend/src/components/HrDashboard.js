import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { Label } from "reactstrap";
import * as Yup from "yup";

import "../css/style.css";

const HrDashboard = () => {
  const [users, setUsers] = useState([]);
  const [modal, setModal] = useState(false);
  const [addEmployeeSuccess, setAddEmployeeSuccess] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("This field is required"),
    email: Yup.string().required("This field is required"),
    password: Yup.string().required("This field is required"),
  });

  const handleSubmit = (formData) => {
    console.log(formData, "formData");
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    axios
      .post(
        "http://localhost:7000/auth/register",
        {
          name: formData.name,
          email: formData.email,
          password: formData.password,
          password2: formData.password,
          role: "EMPLOYEE",
          addedBy: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        setAddEmployeeSuccess(true);
      })
      .catch((error) => {
        console.error(error);
      });
    toggleModal();
  };

  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get("http://localhost:7000/admin/users");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    getUsers();
  }, [addEmployeeSuccess]);

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleUserClick = async (userId) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/admin/user/${userId}`
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  return (
    <>
      <h1 className="table">Manage Employees</h1>

      <Button color="primary" onClick={toggleModal}>
        Add New Employee
      </Button>

      <table className="table">
        <thead>
          <tr>
            <th>id</th>
            <th>email</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((user) => user.role === "EMPLOYEE")
            .map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>
                  <button onClick={() => handleUserClick(user._id)}>
                    {user.email}
                  </button>
                </td>
                <td>
                  <form
                    action="/admin/update-role"
                    method="post"
                    className="manage-user-form"
                  >
                    <input type="hidden" name="id" value={user._id} />
                    <select name="role" id="role">
                      <option value="ADMIN" selected={user.role === "ADMIN"}>
                        Admin
                      </option>
                      <option value="HR" selected={user.role === "HR"}>
                        Hr
                      </option>
                      <option
                        value="EMPLOYEE"
                        selected={user.role === "EMPLOYEE"}
                      >
                        Employee
                      </option>
                    </select>
                    <input type="submit" value="update" />
                  </form>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-top">
        <ModalHeader toggle={toggleModal}>Adding New Employee</ModalHeader>
        <ModalBody>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="form-group">
                <Label for="name">Employee Name</Label>
                <Field
                  type="text"
                  name="name"
                  className="form-control input-lg"
                  placeholder="Your Name"
                  required
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
              </div>

              <div className="form-group">
                <button type="submit" className="contact-form-btn">
                  <span> Add Employee</span>
                </button>
                <Button color="secondary" onClick={toggleModal}>
                  Cancel
                </Button>
              </div>
            </Form>
          </Formik>
        </ModalBody>
      </Modal>
    </>
  );
};

export default HrDashboard;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import { Formik, Field, Form, ErrorMessage } from "formik";
// import { Label } from "reactstrap";
// import * as Yup from "yup";

// import "../css/style.css";

// const HrDashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [modal, setModal] = useState(false);
//   const [addEmployeeSuccess, setAddEmployeeSuccess] = useState(false);

//   const initialValues = {
//     name: "",
//     email: "",
//     password: "",
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("This field is required"),
//     email: Yup.string().required("This field is required"),
//     password: Yup.string().required("This field is required"),
//   });

//   const handleSubmit = (formData) => {
//     console.log(formData, "formData");
//     const user = JSON.parse(localStorage.getItem("user"));
//     axios
//       .post("http://localhost:7000/auth/register", {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         password2: formData.password,
//         role: "EMPLOYEE",
//         addedBy: user._id,
//       })
//       .then((response) => {
//         // if (response.data.isSuccess) {
//         //   navigate("../sign-in");
//         // }
//         setAddEmployeeSuccess(true);
//       })
//       .catch((error) => {
//         console.error(error);
//       });
//     toggleModal();
//   };

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         const response = await axios.get("http://localhost:7000/admin/users");
//         setUsers(response.data);
//       } catch (error) {
//         console.error("Error fetching users:", error);
//       }
//     };

//     getUsers();
//   }, [addEmployeeSuccess]);

//   const toggleModal = () => {
//     setModal(!modal);
//   };

//   const handleUserClick = async (userId) => {
//     try {
//       const response = await axios.get(
//         `http://localhost:7000/admin/user/${userId}`
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error("Error fetching user details:", error);
//     }
//   };

//   return (
//     <>
//       <h1 className="table">Manage Employees</h1>

//       <Button color="primary" onClick={toggleModal}>
//         Add New Employee
//       </Button>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>id</th>
//             <th>email</th>
//             <th>role</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users
//             .filter((user) => user.role === "EMPLOYEE")
//             .map((user) => (
//               <tr key={user._id}>
//                 <td>{user._id}</td>
//                 <td>
//                   <button onClick={() => handleUserClick(user._id)}>
//                     {user.email}
//                   </button>
//                 </td>
//                 <td>
//                   <form
//                     action="/admin/update-role"
//                     method="post"
//                     className="manage-user-form"
//                   >
//                     <input type="hidden" name="id" value={user._id} />
//                     <select name="role" id="role">
//                       <option value="ADMIN" selected={user.role === "ADMIN"}>
//                         Admin
//                       </option>
//                       <option value="HR" selected={user.role === "HR"}>
//                         Hr
//                       </option>
//                       <option
//                         value="EMPLOYEE"
//                         selected={user.role === "EMPLOYEE"}
//                       >
//                         Employee
//                       </option>
//                     </select>
//                     <input type="submit" value="update" />
//                   </form>
//                 </td>
//               </tr>
//             ))}
//         </tbody>
//       </table>

//       <Modal isOpen={modal} toggle={toggleModal} className="modal-dialog-top">
//         <ModalHeader toggle={toggleModal}>Adding New Employee</ModalHeader>
//         <ModalBody>
//           <Formik
//             initialValues={initialValues}
//             validationSchema={validationSchema}
//             onSubmit={handleSubmit}
//           >
//             <Form>
//               <div className="form-group">
//                 <Label for="name">Employee Name</Label>
//                 <Field
//                   type="text"
//                   name="name"
//                   className="form-control input-lg"
//                   placeholder="Your Name"
//                   required
//                 />
//               </div>
//               <div className="form-group">
//                 <Label for="email">Email</Label>
//                 <Field
//                   type="email"
//                   name="email"
//                   className="lg-form"
//                   placeholder="Your Email"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <Label for="password">Password</Label>
//                 <Field
//                   type="password"
//                   name="password"
//                   className="form-control input-lg"
//                   placeholder="Password"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <button type="submit" className="contact-form-btn">
//                   <span> Add Employee</span>
//                 </button>
//                 <Button color="secondary" onClick={toggleModal}>
//                   Cancel
//                 </Button>
//               </div>
//             </Form>
//           </Formik>
//         </ModalBody>
//       </Modal>
//     </>
//   );
// };

// export default HrDashboard;
