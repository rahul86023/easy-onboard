import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
// import "../css/Navigation.css";

const EmployeeDashboard = () => {
  const navigate = useNavigate();

  return (
    <div>
      <br />
      <br />
      <Container>
        <h1 style={{ textAlign: "justify" }}>Welcome Aboard</h1>
        <hr />
        <p className="lead col-11" style={{ textAlign: "justify" }}>
          We are pleased to welcome you as the newest member in our company. We
          hope you will find work here rewarding and challenging. Before you
          start working with us, we'd like to acquire some details and documents
          from you to smoothen your onboarding more. So, let's get started.
        </p>
        <br />
        <Row>
          <Col md="3">
            <Card>
              <CardBody>
                <h5 className="card-title">Step-1:</h5>
                <hr />
                <p className="card-text">
                  Provide some information regarding your personal, professional
                  and previous employment.
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => navigate("../../employee/fill-form")}
                >
                  Fill Form
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="1" />
          <Col md="3">
            <Card>
              <CardBody>
                <h5 className="card-title">Step-2:</h5>
                <hr />
                <p className="card-text">
                  Upload your documents so as to help us maintain your records
                  efficiently.
                </p>
                <br />
                <button
                  className="btn btn-outline-danger"
                  onClick={() => navigate("../../employee/upload-document")}
                >
                  Upload
                </button>
              </CardBody>
            </Card>
          </Col>
          <Col md="1" />
          <Col md="3">
            <Card>
              <CardBody>
                <h5 className="card-title">Step-3:</h5>
                <hr />
                <p className="card-text">
                  Now, lean back and wait, while we verify your data. You can
                  check the status of your uploaded documents.
                </p>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => navigate("../../employee/status-check")}
                >
                  Status-Check
                </button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
    </div>
  );
};

export default EmployeeDashboard;
