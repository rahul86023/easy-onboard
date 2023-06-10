import React from "react";
import Navbar from "./Navbar";
import FlashMessage from "./flashMessages";

const App = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <FlashMessage />
        {/* Your main content goes here */}
      </main>
    </div>
  );
};

export default App;
