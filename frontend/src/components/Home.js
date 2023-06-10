import React from "react";

import "../css/style.css";

const HomePage = () => {
  return (
    <>
      <h1 className="title">Role Based Access Control</h1>
      <div className="tutorial-info">
        <ol className="tutorial-info">
          <li>
            <b>Express JS</b>
          </li>
          <li>
            <b>EJS</b> templating engine
          </li>
          <li>
            <b>Styling — </b>custom CSS (you can use any like Bootstrap, Bulma,
            Tailwind, etc...)
          </li>
          <li>
            <b>PassportJS</b> local authentication(email, password)
          </li>
          <li>
            <b>Roles</b> (admin, hr, employee)
          </li>
          <li>
            <b>Authorization</b> (admin, hr and user routes)
          </li>
          <li>
            <b>Mongoose</b> (ORM for MongoDB)
          </li>
          <li>
            How to use <b>express sessions</b>
          </li>
          <li>
            Using sessions to <b>persist login</b> after server reboot (using
            Mongo Store)
          </li>
          <li>
            <b>Redirect</b> to the same page after login.
          </li>
          <li>
            <b>Validating</b> user input server-side
          </li>
          <li>
            <b>Flash messages</b>
          </li>
          <li>
            Handling <b>HTTP error</b> (ex: 404, etc)
          </li>
          <li>Somethings are always extra 😊</li>
        </ol>
      </div>
    </>
  );
};

export default HomePage;
