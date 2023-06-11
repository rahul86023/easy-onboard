import React from "react";
import { Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
// import "../css/feedback_form";
const EmployeeFeedbackForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    navigate("/employees/feedback"); // Redirect to feedback page
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/employees/dashboard">
            <img src="/images/logo.png" alt="Logo" />
          </a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn"></label>
        <ul>
          <li>
            <a href="/employees/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/employees/profile">Profile</a>
          </li>
          <li>
            <a href="/employees/sign-out">Logout</a>
          </li>
        </ul>
      </nav>
      <br />
      <br />

      <Container>
        <div className="text">Feedback</div>
        <p style={{ color: "green" }}>
          Hi! It's been a while since you started working with us. We're happy
          that you are a part of our team. Please take a survey to let us know
          about your onboarding experience.
        </p>
        <br />
        <p style={{ color: "green" }}>With love, HR team.</p>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="Full_Name">Full Name</Label>
            <Input type="text" name="Full_Name" id="Full_Name" required />
          </FormGroup>
          <FormGroup>
            <Label for="Email_ID">Email ID</Label>
            <Input type="text" name="Email_ID" id="Email_ID" required />
          </FormGroup>
          <FormGroup>
            <Label for="feedback1">
              1. How satisfied were you with the onboarding in general?
            </Label>
            <Input
              type="textarea"
              name="feedback1"
              id="feedback1"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback2">
              2. Did the information you received before your first day help you
              know what to expect and where to go?
            </Label>
            <Input
              type="textarea"
              name="feedback2"
              id="feedback2"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback3">
              3. What could have gone better in the weeks leading up to your new
              job?
            </Label>
            <Input
              type="textarea"
              name="feedback3"
              id="feedback3"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback4">
              4. Was the information you received on benefits on the first day
              of the job insightful and complete?
            </Label>
            <Input
              type="textarea"
              name="feedback4"
              id="feedback4"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback5">
              5. Did you know where to go to get additional assistance on
              personnel matters, benefits, and paperwork following your first
              day on the job?
            </Label>
            <Input
              type="textarea"
              name="feedback5"
              id="feedback5"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback6">
              6. Does your supervisor check in with you regularly to answer any
              questions or concerns you may have?
            </Label>
            <Input
              type="textarea"
              name="feedback6"
              id="feedback6"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback7">
              7. What could have gone better in the weeks leading up to your new
              job?
            </Label>
            <Input
              type="textarea"
              name="feedback7"
              id="feedback7"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback8">
              8. How well do you feel integrated into the team?
            </Label>
            <Input
              type="textarea"
              name="feedback8"
              id="feedback8"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback9">
              9. What would you have liked your organization to share with you
              before your first day?
            </Label>
            <Input
              type="textarea"
              name="feedback9"
              id="feedback9"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <FormGroup>
            <Label for="feedback10">
              10. Please share any additional feedback or recommendations you
              may have to improve the organization's hiring and onboarding
              processes.
            </Label>
            <Input
              type="textarea"
              name="feedback10"
              id="feedback10"
              style={{ height: "100px" }}
            />
          </FormGroup>
          <Button color="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default EmployeeFeedbackForm;
