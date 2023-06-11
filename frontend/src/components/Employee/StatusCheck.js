import React from "react";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";

const StatusCheck = () => {
  const navigate = useNavigate();

  const records = {
    VerificationStatus: "Upload Again",
    Comments: "Lorem ipsum dolor sit amet",
  };

  return (
    <>
      <br />
      <br />
      <Container>
        <h2 style={{ textAlign: "left" }}>
          Check status of your uploaded document here.
        </h2>
        <hr />
        <br />
        <Row>
          {records.VerificationStatus === "Upload Again" ? (
            <Col>
              <h5 style={{ textAlign: "left" }}>
                Wait while we verify authenticity of your uploaded documents.
                Keep visiting this page to check status. We'll get back to you
                soon.
              </h5>
              <br />
              <br />
              <h2 style={{ textAlign: "left" }}>
                <label>
                  <strong>
                    Status:{" "}
                    <a style={{ color: "#B22222" }}>
                      {records.VerificationStatus}
                    </a>
                  </strong>
                </label>
              </h2>
              <hr />
              <h4 style={{ textAlign: "left" }}>
                <label>Comments: {records.Comments}</label>
              </h4>
            </Col>
          ) : (
            <Col>
              <h5 style={{ textAlign: "left" }}>
                Wait while we verify authenticity of your uploaded documents.
                Keep visiting this page to check status. We'll get back to you
                soon.
              </h5>
              <br />
              <br />
              <div className="lds-spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div></div>
              <div
                className="d-flex align-items-center"
                style={{ marginLeft: "490px", marginTop: "10px" }}
              >
                <h4>
                  <strong>Processing</strong>
                </h4>
              </div>
            </Col>
          )}
        </Row>
      </Container>
      <br />
      <br />
    </>
  );
};

export default StatusCheck;
