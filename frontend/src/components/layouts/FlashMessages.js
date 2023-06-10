import React from "react";

const flashMessages = ({ messages }) => {
  return (
    <>
      {messages && (
        <div className="messages">
          <ul className="messages">
            {Object.keys(messages).map((key) =>
              messages[key].map((message, index) => (
                <li key={index} className={key}>
                  {message}
                </li>
              ))
            )}
          </ul>
        </div>
      )}
    </>
  );
};

export default flashMessages;
