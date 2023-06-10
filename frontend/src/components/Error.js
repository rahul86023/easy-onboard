import React from "react";
import Header from "./layouts/header";

const ErrorPage = ({ error }) => {
  return (
    <>
      <Header />
      <h1>We're lost in space</h1>
      <br />
      <h3>
        {error.status} | {error.message}
      </h3>
      <br />
      <a href="/">← Back to home</a>
    </>
  );
};

export default ErrorPage;
