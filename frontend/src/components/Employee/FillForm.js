import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Table,
  Col,
  Row,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import * as Yup from "yup";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
const FillForm = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (formData) => {
    axios
      .post("http://localhost:8000/employees/formfilled", formData)
      .then((response) => {
        if (response.data.success) {
          navigate("../dashboard");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const initialValues = {
    fname: "",
    lname: "",
    empId: "",
    dob: 0,
    gender: "",
    marital_status: "",
    nationality: "",
    bloodgrp: "",
    aadhar: 0,
    pan: "",
    phone: 0,
    size: "",
    line1: "",
    line2: "",
    pin: 0,
    city: "",
    state: "",
    country: "",
    family: [
      {
        mother: [
          {
            Mname: "",
            Mdob: "",
            Mgender: "",
            Moccupation: "",
          },
        ],
        father: [
          {
            Fname: "",
            Fdob: "",
            Fgender: "",
            Foccupation: "",
          },
        ],
        spouse: [
          {
            Sname: "",
            Sdob: "",
            Sgender: "",
            Soccupation: "",
          },
        ],
      },
    ],
    education: [
      {
        X: [
          {
            Xyear: "",
            Xcollege: "",
            Xboard: "",
            Xpercent: "",
          },
        ],
        X: [
          {
            Xyear: "",
            Xcollege: "",
            Xboard: "",
            Xpercent: "",
          },
        ],
        XII: [
          {
            XIIyear: "",
            XIIcollege: "",
            XIIboard: "",
            XIIpercent: "",
          },
        ],
        Graduation: [
          {
            Gyear: "",
            Gcollege: "",
            Gboard: "",
            Gpercent: "",
          },
        ],
        PostGraduation: [
          {
            PGyear: "",
            PGcollege: "",
            PGboard: "",
            PGpercent: "",
          },
        ],
      },
    ],
    awards: "",
    lang1: "",
    read1: "",
    write1: "",
    speak1: "",
    fluent1: "",
    lang2: "",
    read2: "",
    write2: "",
    speak2: "",
    fluent2: "",
    lang3: "",
    read3: "",
    write3: "",
    speak3: "",
    fluent3: "",
    org1: "",
    state1: "",
    period1: "",
    desig1: "",
    rsn1: "",
    org2: "",
    state2: "",
    period2: "",
    desig2: "",
    rsn2: "",
    strength: "",
    hobbies: "",
  };
  const validationSchema = Yup.object().shape({
    fname: Yup.string().required("First name is required"),
    lname: Yup.string().required("Last name is required"),
    // empId: Yup.string().required("Employee ID is required"),
    // dob: Yup.date().nullable().required("Date of birth is required"),
    // gender: Yup.string().required("Gender is required"),
    // marital_status: Yup.string().required("Marital status is required"),
    // nationality: Yup.string().required("Nationality is required"),
    // bloodgrp: Yup.string().required("Blood group is required"),
    // aadhar: Yup.number().nullable().required("Aadhar number is required"),
    // pan: Yup.string().required("PAN is required"),
    // phone: Yup.number().nullable().required("Phone number is required"),
    // size: Yup.string().required("Size is required"),
    // line1: Yup.string().required("Address line 1 is required"),
    // line2: Yup.string().required("Address line 2 is required"),
    // pin: Yup.number().nullable().required("PIN code is required"),
    // city: Yup.string().required("City is required"),
    // state: Yup.string().required("State is required"),
    // country: Yup.string().required("Country is required"),
    // family: Yup.array().of(
    //   Yup.object().shape({
    //     mother: Yup.array().of(
    //       Yup.object().shape({
    //         Mname: Yup.string().required("Mother's name is required"),
    //         Mdob: Yup.string().required("Mother's date of birth is required"),
    //         Mgender: Yup.string().required("Mother's gender is required"),
    //         Moccupation: Yup.string().required(
    //           "Mother's occupation is required"
    //         ),
    //       })
    //     ),
    //     father: Yup.array().of(
    //       Yup.object().shape({
    //         Fname: Yup.string().required("Father's name is required"),
    //         Fdob: Yup.string().required("Father's date of birth is required"),
    //         Fgender: Yup.string().required("Father's gender is required"),
    //         Foccupation: Yup.string().required(
    //           "Father's occupation is required"
    //         ),
    //       })
    //     ),
    //     spouse: Yup.array().of(
    //       Yup.object().shape({
    //         Sname: Yup.string(),
    //         Sdob: Yup.string(),
    //         Sgender: Yup.string(),
    //         Soccupation: Yup.string(),
    //       })
    //     ),
    //   })
    // ),
    // education: Yup.array().of(
    //   Yup.object().shape({
    //     X: Yup.array().of(
    //       Yup.object().shape({
    //         Xyear: Yup.string().required("X year is required"),
    //         Xcollege: Yup.string().required("X college is required"),
    //         Xboard: Yup.string().required("X board is required"),
    //         Xpercent: Yup.string().required("X percentage is required"),
    //       })
    //     ),
    //     XII: Yup.array().of(
    //       Yup.object().shape({
    //         XIIyear: Yup.string().required("XII year is required"),
    //         XIIcollege: Yup.string().required("XII college is required"),
    //         XIIboard: Yup.string().required("XII board is required"),
    //         XIIpercent: Yup.string().required("XII percentage is required"),
    //       })
    //     ),
    //     Graduation: Yup.array().of(
    //       Yup.object().shape({
    //         Gyear: Yup.string(),
    //         Gcollege: Yup.string(),
    //         Gboard: Yup.string(),
    //         Gpercent: Yup.string(),
    //       })
    //     ),
    //     PostGraduation: Yup.array().of(
    //       Yup.object().shape({
    //         PGyear: Yup.string(),
    //         PGcollege: Yup.string(),
    //         PGboard: Yup.string(),
    //         PGpercent: Yup.string(),
    //       })
    //     ),
    //   })
    // ),
    // awards: Yup.string().required("Awards is required"),
    // lang1: Yup.string().required("Language 1 is required"),
    // read1: Yup.string().required("Read 1 is required"),
    // write1: Yup.string().required("Write 1 is required"),
    // speak1: Yup.string().required("Speak 1 is required"),
    // fluent1: Yup.string().required("Fluent 1 is required"),
    // org1: Yup.string(),
    // state1: Yup.string(),
    // period1: Yup.string(),
    // desig1: Yup.string(),
    // rsn1: Yup.string(),
    // org2: Yup.string(),
    // state2: Yup.string(),
    // period2: Yup.string(),
    // desig2: Yup.string(),
    // rsn2: Yup.string(),
    // strength: Yup.string(),
    // hobbies: Yup.string(),
  });

  const [educationalOpen, setEducationalOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  const toggleEducational = () => {
    setEducationalOpen(!educationalOpen);
  };

  const toggleLanguage = () => {
    setLanguageOpen(!languageOpen);
  };

  return (
    <>
      <br />
      <br />
      <Container>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Personal Details:
                  </button>
                </h2>
                <Collapse
                  isOpen={!isOpen}
                  id="collapseOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <FormGroup row>
                      <Label for="firstname" sm={2}>
                        Name:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="fname"
                          id="firstname"
                          placeholder="First Name"
                          required
                        />
                      </div>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="lname"
                          id="lastname"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="empId" sm={2}>
                        Employee ID:
                      </Label>
                      <div className="col-6">
                        <Field
                          type="text"
                          name="empId"
                          id="empId"
                          placeholder="Employee ID"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="dob" sm={2}>
                        Date of Birth:
                      </Label>
                      <div className="col-6">
                        <Field
                          type="date"
                          name="dob"
                          id="dob"
                          placeholder="MM/DD/YYYY"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="gender" sm={2}>
                        Gender:
                      </Label>
                      <div className="col-4">
                        {/* <Field type="select" name="gender" id="gender" required>
                          <option value="">Select Gender</option>
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                          <option value="Transgender">Transgender</option>
                        </Field> */}
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="maritalStatus" sm={2}>
                        Marital Status:
                      </Label>
                      <div className="col-4">
                        {/* <Field
                          type="select"
                          name="maritalStatus"
                          id="maritalStatus"
                          required
                        >
                          <option value="">Select Marital Status</option>
                          <option value="Married">Married</option>
                          <option value="Widowed">Widowed</option>
                          <option value="Separated">Separated</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Single">Single</option>
                        </Field> */}
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="nationality" sm={2}>
                        Nationality:
                      </Label>
                      <div className="col-6">
                        <Field
                          type="text"
                          name="nationality"
                          id="nationality"
                          placeholder="Nationality"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="bloodgrp" sm={2}>
                        Blood Group:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="bloodgrp"
                          id="bloodgrp"
                          placeholder="Blood Group"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="aadhar" sm={2}>
                        Aadhar Card Number:
                      </Label>
                      <div className="col-6">
                        <Field
                          type="text"
                          name="aadhar"
                          id="aadhar"
                          placeholder="Aadhar Card Number"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="pan" sm={2}>
                        PAN Card Number:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="pan"
                          id="pan"
                          placeholder="PAN Card Number"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="phone" sm={2}>
                        Contact Number:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="tel"
                          name="phone"
                          id="phone"
                          placeholder="Contact Number"
                          required
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="size" sm={2}>
                        T-Shirt Size:
                      </Label>
                      <div className="col-4">
                        {/* <Field type="select" name="size" id="size" required>
                          <option value="">Select Size</option>
                          <option value="S">S</option>
                          <option value="M">M</option>
                          <option value="L">L</option>
                          <option value="XL">XL</option>
                          <option value="2XL">2XL</option>
                          <option value="3XL">3XL</option>
                        </Field> */}
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label sm={2}>Address Details:</Label>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="line1" sm={2}>
                        Address Line 1:
                      </Label>
                      <div className="col-8">
                        <Field
                          type="text"
                          name="line1"
                          id="line1"
                          placeholder="Address Line 1"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="line2" sm={2}>
                        Address Line 2:
                      </Label>
                      <div className="col-8">
                        <Field
                          type="text"
                          name="line2"
                          id="line2"
                          placeholder="Address Line 2"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="pin" sm={2}>
                        PIN Code:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="pin"
                          id="pin"
                          placeholder="PIN Code"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="city" sm={2}>
                        City:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="city"
                          id="city"
                          placeholder="City"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="state" sm={2}>
                        State:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="state"
                          id="state"
                          placeholder="State"
                        />
                      </div>
                    </FormGroup>
                    <FormGroup row>
                      <Label for="country" sm={2}>
                        Country:
                      </Label>
                      <div className="col-4">
                        <Field
                          type="text"
                          name="country"
                          id="country"
                          placeholder="Country"
                        />
                      </div>
                    </FormGroup>
                    <Container>
                      <div className="row">
                        <div className="col-11">
                          <Label className="form-label" htmlFor="customFile">
                            Family Details:
                          </Label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="table-editable col-10" id="table">
                          <table className="table table-bordered table-responsive-md text-center col-10">
                            <thead>
                              <tr>
                                <th scope="col">Relation</th>
                                <th scope="col">Name</th>
                                <th scope="col">Birth Date</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Occupation</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th>Mother</th>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Mname"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Mdob"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Mgender"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Moccupation"
                                    required
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th>Father</th>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Fname"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Fdob"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Fgender"
                                    required
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Foccupation"
                                    required
                                  />
                                </td>
                              </tr>
                              <tr>
                                <th>Spouse</th>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Sname"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Sdob"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Sgender"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="Soccupation"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </Container>
                  </div>
                </Collapse>
              </div>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className={`accordion-button ${
                        educationalOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={toggleEducational}
                      aria-expanded={educationalOpen}
                      aria-controls="collapseTwo"
                    >
                      Educational Details:
                    </button>
                  </h2>
                  <Container>
                    <Row>
                      <Col xs={11}>
                        <br />
                        <Label className="form-label" htmlFor="customFile">
                          Qualifications:
                        </Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <table className="table table-bordered table-responsive-md text-center col-10">
                          <thead>
                            <tr>
                              <th scope="col">Program</th>
                              <th scope="col">Passing Year</th>
                              <th scope="col">College</th>
                              <th scope="col">Board/University</th>
                              <th scope="col">%/CGPA</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>X</th>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Xyear"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Xcollege"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Xboard"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Xpercent"
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>XII</th>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="XIIyear"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="XIIcollege"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="XIIboard"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="XIIpercent"
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>Graduation</th>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Gyear"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Gcollege"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Gboard"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="Gpercent"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>Post Graduation</th>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="PGyear"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="PGcollege"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="PGboard"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="PGpercent"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={11}>
                        <Label className="form-label" htmlFor="customFile">
                          Awards/Prizes/Scholarships:
                        </Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <textarea
                          className="form-control"
                          name="awards"
                          id="exampleFormControlTextarea1"
                          rows="6"
                          placeholder="Please list out proud moments in your life by specifying the awards and reason thereof."
                        />
                        <br />
                      </Col>
                    </Row>
                  </Container>
                  <Container>
                    <Row>
                      <Col xs={11}>
                        <Label className="form-label" htmlFor="customFile">
                          Language Proficiency:
                        </Label>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs={10}>
                        <Table className="table table-bordered table-responsive-md text-center col-10">
                          <thead>
                            <tr>
                              <th scope="col">Language Known</th>
                              <th scope="col">Read</th>
                              <th scope="col">Write</th>
                              <th scope="col">Speak</th>
                              <th scope="col">Fluent/Non-fluent</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="lang1"
                                  required
                                />
                              </th>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="read1"
                                  placeholder="Yes/No"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="write1"
                                  placeholder="Yes/No"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="speak1"
                                  placeholder="Yes/No"
                                  required
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="fluent1"
                                  required
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="lang2"
                                />
                              </th>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="read2"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="write2"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="speak2"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="fluent2"
                                />
                              </td>
                            </tr>
                            <tr>
                              <th>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="lang3"
                                />
                              </th>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="read3"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="write3"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{
                                    border: "none",
                                    maxWidth: "150px",
                                    textAlign: "center",
                                  }}
                                  name="speak3"
                                  placeholder="Yes/No"
                                />
                              </td>
                              <td>
                                <Field
                                  type="text"
                                  style={{ border: "none", maxWidth: "150px" }}
                                  name="fluent3"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </Table>
                      </Col>
                    </Row>
                  </Container>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className={`accordion-button ${
                        languageOpen ? "" : "collapsed"
                      }`}
                      type="button"
                      onClick={toggleLanguage}
                      aria-expanded={languageOpen}
                      aria-controls="collapseThree"
                    >
                      Other Details:
                    </button>
                  </h2>
                  <Collapse
                    isOpen={languageOpen}
                    id="collapseThree"
                    data-bs-parent="#accordionExample"
                  >
                    <Container>
                      <Row style={{ textAlign: "left" }}>
                        <Col xs={1}></Col>
                        <Col xs={11}>
                          <br />
                          <Label className="form-label" htmlFor="customFile">
                            Previous Employment Details:
                          </Label>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                          <Table className="table table-bordered table-responsive-md text-center col-10">
                            <thead>
                              <tr>
                                <th scope="col">Organization</th>
                                <th scope="col">State</th>
                                <th scope="col">Period(in months)</th>
                                <th scope="col">Designation</th>
                                <th scope="col">Reason for Change</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="org1"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="state1"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="period1"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="desig1"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="rsn1"
                                  />
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="org2"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="state2"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="period2"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="desig2"
                                  />
                                </td>
                                <td>
                                  <Field
                                    type="text"
                                    style={{
                                      border: "none",
                                      maxWidth: "150px",
                                    }}
                                    name="rsn2"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                          <br />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                          <Label className="form-label" htmlFor="customFile">
                            Strength and areas of improvement:
                          </Label>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            name="strength"
                            rows={6}
                            placeholder="Highlight your Strength and areas which require improvement."
                          />
                          <br />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                          <Label className="form-label" htmlFor="customFile">
                            Hobbies & Interests:
                          </Label>
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                        <Col xs={10}>
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            name="hobbies"
                            rows={6}
                            placeholder="Highlight your hobbies and Interests which you actively pursue."
                          />
                          <br />
                        </Col>
                        <Col xs={1}></Col>
                        <Col xs={1}></Col>
                      </Row>
                    </Container>
                  </Collapse>
                </div>
              </div>
            </div>
            <Button color="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Formik>
      </Container>
    </>
  );
};

export default FillForm;
