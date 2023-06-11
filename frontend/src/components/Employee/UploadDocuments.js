import React, { useState } from "react";
import axios from "axios";

import { Collapse, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const EmployeeUploadDocument = () => {
  const [collapseOne, setCollapseOne] = useState(true);
  const [collapseTwo, setCollapseTwo] = useState(false);
  const [collapseThree, setCollapseThree] = useState(false);

  const toggleCollapseOne = () => setCollapseOne(!collapseOne);
  const toggleCollapseTwo = () => setCollapseTwo(!collapseTwo);
  const toggleCollapseThree = () => setCollapseThree(!collapseThree);
  const navigate = useNavigate();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Handle form submission logic here
  //     navigate("/employees/uploaded");
  //   };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("i am uploading files");
    const formData = new FormData(e.target);
    console.log(formData);
    axios
      .post("http://localhost:8000/employees/uploaded", formData)
      .then((response) => {
        console.log(response);
        //  navigate("/employees/contacted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <br />
      <br />
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="container">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item" style={{ textAlign: "left" }}>
              <h2 className="accordion-header" id="headingOne">
                <Button
                  className="accordion-button"
                  type="button"
                  color="link"
                  onClick={toggleCollapseOne}
                  aria-expanded={collapseOne}
                  aria-controls="collapseOne"
                >
                  Photograph & Signature:
                </Button>
              </h2>
              <Collapse
                isOpen={collapseOne}
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                      <FormGroup>
                        <Label for="uploadPhotograph">Upload Photograph:</Label>
                        <Input
                          type="file"
                          name="Upload_Photograph"
                          id="uploadPhotograph"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="uploadSignature">Upload Signature:</Label>
                        <Input
                          type="file"
                          name="Upload_Signature"
                          id="uploadSignature"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="accordion-item" style={{ textAlign: "left" }}>
              <h2 className="accordion-header" id="headingTwo">
                <Button
                  className="accordion-button collapsed"
                  type="button"
                  color="link"
                  onClick={toggleCollapseTwo}
                  aria-expanded={collapseTwo}
                  aria-controls="collapseTwo"
                >
                  Upload Id Cards:
                </Button>
              </h2>
              <Collapse
                isOpen={collapseTwo}
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                      <FormGroup>
                        <Label for="uploadPanCardFront">PAN Card Front:</Label>
                        <Input
                          type="file"
                          name="PAN_Card_Front"
                          id="uploadPanCardFront"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="uploadAadharCardFront">
                          Aadhar Card Front:
                        </Label>
                        <Input
                          type="file"
                          name="Aadhar_Card_Front"
                          id="uploadAadharCardFront"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="uploadAadharCardBack">
                          Aadhar Card Back:
                        </Label>
                        <Input
                          type="file"
                          name="Aadhar_Card_Back"
                          id="uploadAadharCardBack"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </div>
              </Collapse>
            </div>
            <div className="accordion-item" style={{ textAlign: "left" }}>
              <h2 className="accordion-header" id="headingThree">
                <Button
                  className="accordion-button collapsed"
                  type="button"
                  color="link"
                  onClick={toggleCollapseThree}
                  aria-expanded={collapseThree}
                  aria-controls="collapseThree"
                >
                  Bank Account and other details:
                </Button>
              </h2>
              <Collapse
                isOpen={collapseThree}
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6">
                      <FormGroup>
                        <Label for="uploadPassbookFront">
                          Upload front page of your Passbook:
                        </Label>
                        <Input
                          type="file"
                          name="Upload_front_page_of_your_Passbook"
                          id="uploadPassbookFront"
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label for="uploadPaySlip">
                          Upload your pay slip from last organization (if any):
                        </Label>
                        <Input
                          type="file"
                          name="Upload_your_pay_slip_from_last_organization"
                          id="uploadPaySlip"
                        />
                      </FormGroup>
                    </div>
                    <div className="col-3"></div>
                  </div>
                </div>
              </Collapse>
            </div>
          </div>
          <br />
        </div>
        <div className="form-group">
          <Button type="submit" color="danger" block>
            Upload Files
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EmployeeUploadDocument;
